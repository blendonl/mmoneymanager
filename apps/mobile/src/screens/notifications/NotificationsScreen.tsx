import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import { useNotifications } from '../../context/NotificationContext';
import { useAppTheme } from '../../theme';

export default function NotificationsScreen({ navigation }: any) {
  const {
    notifications,
    loading,
    unreadCount,
    fetchNotifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications();
  const { theme } = useAppTheme();

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleNotificationPress = async (notification: any) => {
    if (!notification.isRead) {
      await markAsRead(notification.id);
    }

    // Navigate based on actionUrl if available
    if (notification.actionUrl) {
      // Parse and navigate to appropriate screen
      console.log('Navigate to:', notification.actionUrl);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteNotification(id);
  };

  const unreadNotifications = notifications.filter((n) => !n.isRead);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      edges={['top']}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.title,
            { color: theme.colors.onBackground, fontSize: 24, fontWeight: 'bold' },
          ]}
        >
          Notifications
        </Text>
        {unreadNotifications.length > 0 && (
          <TouchableOpacity onPress={markAllAsRead}>
            <Text style={{ color: theme.colors.primary }}>Mark all as read</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.notificationItem,
              {
                backgroundColor: item.isRead
                  ? theme.colors.surface
                  : theme.colors.primaryContainer,
              },
            ]}
            onPress={() => handleNotificationPress(item)}
          >
            <View style={styles.notificationContent}>
              <Text
                style={[
                  styles.notificationTitle,
                  { color: theme.colors.onSurface },
                ]}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  styles.notificationMessage,
                  { color: theme.colors.onSurfaceVariant },
                ]}
                numberOfLines={2}
              >
                {item.message}
              </Text>
              <Text
                style={[
                  styles.notificationTime,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                {new Date(item.createdAt).toLocaleString()}
              </Text>
            </View>
            <IconButton
              icon="delete"
              size={20}
              onPress={() => handleDelete(item.id)}
            />
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchNotifications}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={{ color: theme.colors.onSurfaceVariant }}>
              No notifications yet
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {},
  listContent: {
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
});
