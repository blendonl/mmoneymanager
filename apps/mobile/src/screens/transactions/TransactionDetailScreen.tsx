import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { IconButton, Divider } from 'react-native-paper';
import ImageView from 'react-native-image-viewing';
import { useAppTheme } from '../../theme';
import { Transaction } from '../../hooks/useTransactions';
import { Card } from '../../components/design-system';
import { CategoryIcon } from '../../components/transactions/CategoryIcon';
import { apiClient } from '../../api/client';

interface TransactionDetailScreenProps {
  route: {
    params: {
      transaction: Transaction;
    };
  };
  navigation: any;
}

export default function TransactionDetailScreen({
  route,
  navigation,
}: TransactionDetailScreenProps) {
  const { transaction } = route.params;
  const { theme } = useAppTheme();
  const [imageViewerVisible, setImageViewerVisible] = useState(false);
  const [imageViewerIndex, setImageViewerIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const isExpense = transaction.type === 'expense';
  const date = transaction.transaction.createdAt
    ? new Date(transaction.transaction.createdAt)
    : new Date();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleImagePress = (index: number) => {
    setImageViewerIndex(index);
    setImageViewerVisible(true);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Transaction',
      'Are you sure you want to delete this transaction? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              setDeleting(true);
              const endpoint = isExpense
                ? `/expenses/${transaction.id}`
                : `/transactions/${transaction.transaction.id}`;
              await apiClient.post(endpoint, { _method: 'DELETE' });
              Alert.alert('Success', 'Transaction deleted successfully', [
                { text: 'OK', onPress: () => navigation.goBack() },
              ]);
            } catch (error: any) {
              Alert.alert('Error', error.message || 'Failed to delete transaction');
            } finally {
              setDeleting(false);
            }
          },
        },
      ]
    );
  };

  const calculateTotal = () => {
    if (!transaction.items || transaction.items.length === 0) {
      return transaction.transaction.value;
    }
    return transaction.items.reduce(
      (sum, item) => sum + item.price - (item.discount || 0),
      0
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView>
        <Card style={styles.headerCard} elevation={2}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: isExpense
                      ? theme.custom.colors.error + '20'
                      : theme.custom.colors.success + '20',
                  },
                ]}
              >
                <CategoryIcon
                  categoryName={transaction.category.name}
                  size={32}
                  color={
                    isExpense
                      ? theme.custom.colors.error
                      : theme.custom.colors.success
                  }
                />
              </View>
              <View style={styles.headerActions}>
                <IconButton
                  icon="pencil"
                  size={24}
                  iconColor={theme.custom.colors.text}
                  onPress={() => {
                    Alert.alert('Coming Soon', 'Edit functionality will be available soon');
                  }}
                />
                <IconButton
                  icon="delete"
                  size={24}
                  iconColor={theme.colors.error}
                  onPress={handleDelete}
                  disabled={deleting}
                />
              </View>
            </View>

            <Text
              style={[
                styles.categoryName,
                theme.custom.typography.h4,
                { color: theme.custom.colors.text },
              ]}
            >
              {transaction.category.name}
            </Text>

            <Text
              style={[
                styles.amount,
                theme.custom.typography.h3,
                {
                  color: isExpense
                    ? theme.custom.colors.error
                    : theme.custom.colors.success,
                },
              ]}
            >
              {isExpense ? '−' : '+'} ${transaction.transaction.value.toFixed(2)}
            </Text>

            <View style={styles.dateContainer}>
              <Text
                style={[
                  styles.date,
                  theme.custom.typography.bodyMedium,
                  { color: theme.custom.colors.textSecondary },
                ]}
              >
                {formatDate(date)}
              </Text>
              <Text
                style={[
                  styles.time,
                  theme.custom.typography.caption,
                  { color: theme.custom.colors.textSecondary },
                ]}
              >
                {formatTime(date)}
              </Text>
            </View>
          </View>
        </Card>

        {transaction.store && (
          <Card style={styles.section} elevation={1}>
            <View style={styles.sectionHeader}>
              <Text
                style={[
                  styles.sectionTitle,
                  theme.custom.typography.h5,
                  { color: theme.custom.colors.text },
                ]}
              >
                Store Information
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text
                style={[
                  styles.infoLabel,
                  theme.custom.typography.bodyMedium,
                  { color: theme.custom.colors.textSecondary },
                ]}
              >
                Name
              </Text>
              <Text
                style={[
                  styles.infoValue,
                  theme.custom.typography.body,
                  { color: theme.custom.colors.text },
                ]}
              >
                {transaction.store.name}
              </Text>
            </View>
            {transaction.store.location && (
              <View style={styles.infoRow}>
                <Text
                  style={[
                    styles.infoLabel,
                    theme.custom.typography.bodyMedium,
                    { color: theme.custom.colors.textSecondary },
                  ]}
                >
                  Location
                </Text>
                <Text
                  style={[
                    styles.infoValue,
                    theme.custom.typography.body,
                    { color: theme.custom.colors.text },
                  ]}
                >
                  {transaction.store.location}
                </Text>
              </View>
            )}
          </Card>
        )}

        {transaction.items && transaction.items.length > 0 && (
          <Card style={styles.section} elevation={1}>
            <View style={styles.sectionHeader}>
              <Text
                style={[
                  styles.sectionTitle,
                  theme.custom.typography.h5,
                  { color: theme.custom.colors.text },
                ]}
              >
                Items ({transaction.items.length})
              </Text>
              <Text
                style={[
                  styles.sectionSubtitle,
                  theme.custom.typography.bodyMedium,
                  { color: theme.custom.colors.textSecondary },
                ]}
              >
                Total: ${calculateTotal().toFixed(2)}
              </Text>
            </View>
            <Divider style={{ marginVertical: 12 }} />
            {transaction.items.map((item, index) => (
              <View key={index}>
                <View style={styles.itemRow}>
                  <View style={styles.itemInfo}>
                    <Text
                      style={[
                        styles.itemName,
                        theme.custom.typography.bodyMedium,
                        { color: theme.custom.colors.text },
                      ]}
                    >
                      {item.name}
                    </Text>
                    {item.discount && item.discount > 0 && (
                      <Text
                        style={[
                          styles.itemDiscount,
                          theme.custom.typography.caption,
                          { color: theme.custom.colors.success },
                        ]}
                      >
                        −${item.discount.toFixed(2)} discount
                      </Text>
                    )}
                  </View>
                  <Text
                    style={[
                      styles.itemPrice,
                      theme.custom.typography.bodyMedium,
                      { color: theme.custom.colors.text },
                    ]}
                  >
                    ${(item.price - (item.discount || 0)).toFixed(2)}
                  </Text>
                </View>
                {index < transaction.items.length - 1 && (
                  <Divider style={{ marginVertical: 8 }} />
                )}
              </View>
            ))}
          </Card>
        )}

        {transaction.transaction.description && (
          <Card style={styles.section} elevation={1}>
            <View style={styles.sectionHeader}>
              <Text
                style={[
                  styles.sectionTitle,
                  theme.custom.typography.h5,
                  { color: theme.custom.colors.text },
                ]}
              >
                Description
              </Text>
            </View>
            <Text
              style={[
                styles.description,
                theme.custom.typography.body,
                { color: theme.custom.colors.text },
              ]}
            >
              {transaction.transaction.description}
            </Text>
          </Card>
        )}

        {transaction.receiptImages && transaction.receiptImages.length > 0 && (
          <Card style={styles.section} elevation={1}>
            <View style={styles.sectionHeader}>
              <Text
                style={[
                  styles.sectionTitle,
                  theme.custom.typography.h5,
                  { color: theme.custom.colors.text },
                ]}
              >
                Receipts ({transaction.receiptImages.length})
              </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.receiptGrid}>
                {transaction.receiptImages.map((uri, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleImagePress(index)}
                    activeOpacity={0.8}
                  >
                    <Image
                      source={{ uri }}
                      style={[
                        styles.receiptThumbnail,
                        { borderColor: theme.custom.colors.border },
                      ]}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </Card>
        )}
      </ScrollView>

      {transaction.receiptImages && transaction.receiptImages.length > 0 && (
        <ImageView
          images={transaction.receiptImages.map((uri) => ({ uri }))}
          imageIndex={imageViewerIndex}
          visible={imageViewerVisible}
          onRequestClose={() => setImageViewerVisible(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerCard: {
    margin: 16,
    marginBottom: 8,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerActions: {
    flexDirection: 'row',
  },
  categoryName: {
    marginBottom: 8,
  },
  amount: {
    marginBottom: 12,
  },
  dateContainer: {
    alignItems: 'center',
  },
  date: {},
  time: {
    marginTop: 4,
  },
  section: {
    margin: 16,
    marginTop: 8,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {},
  sectionSubtitle: {},
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoLabel: {},
  infoValue: {},
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {},
  itemDiscount: {
    marginTop: 2,
  },
  itemPrice: {
    marginLeft: 12,
  },
  description: {
    lineHeight: 24,
  },
  receiptGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 8,
  },
  receiptThumbnail: {
    width: 120,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
  },
});
