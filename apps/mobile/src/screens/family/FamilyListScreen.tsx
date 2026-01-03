import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFamily } from "../../context/FamilyContext";
import { useNavigation } from "@react-navigation/native";
import { Card, Button } from "../../components/design-system";
import { useAppTheme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FamilyListScreen() {
  const { theme } = useAppTheme();
  const { families, pendingInvitations, fetchFamilies, fetchPendingInvitations, loading } = useFamily();
  const navigation = useNavigation();

  useEffect(() => {
    fetchFamilies();
    fetchPendingInvitations();
  }, []);

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={[
          styles.loadingText,
          { color: theme.custom.colors.textSecondary },
          theme.custom.typography.body,
        ]}>
          Loading families...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[
      styles.container,
      {
        backgroundColor: theme.colors.background,
        padding: theme.custom.spacing.md,
      }
    ]} edges={['top']}>
      {pendingInvitations.length > 0 && (
        <TouchableOpacity
          style={[
            styles.invitationBanner,
            {
              backgroundColor: theme.colors.primary,
              borderRadius: theme.custom.borderRadius.md,
              padding: theme.custom.spacing.sm,
              marginBottom: theme.custom.spacing.md,
            }
          ]}
          onPress={() => navigation.navigate("PendingInvitations" as never)}
        >
          <MaterialCommunityIcons
            name="email-alert"
            size={20}
            color={theme.colors.onPrimary}
            style={{ marginRight: theme.custom.spacing.sm }}
          />
          <Text style={[
            styles.invitationText,
            { color: theme.colors.onPrimary },
            theme.custom.typography.bodyMedium,
          ]}>
            You have {pendingInvitations.length} pending invitation(s)
          </Text>
        </TouchableOpacity>
      )}

      <Button
        title="+ Create New Family"
        onPress={() => navigation.navigate("CreateFamily" as never)}
        style={{ marginBottom: theme.custom.spacing.md }}
      />

      <FlatList
        data={families}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FamilyDetail" as never, { familyId: item.id } as never)
            }
            activeOpacity={0.7}
          >
            <Card style={[
              styles.familyCard,
              {
                marginBottom: theme.custom.spacing.sm,
                padding: theme.custom.spacing.md,
              }
            ]}>
              <View style={styles.cardContent}>
                <View style={[
                  styles.iconContainer,
                  {
                    backgroundColor: theme.custom.colors.familyGroupLight,
                    borderRadius: theme.custom.borderRadius.lg,
                    padding: theme.custom.spacing.sm,
                    marginRight: theme.custom.spacing.sm,
                  }
                ]}>
                  <MaterialCommunityIcons
                    name="account-group"
                    size={24}
                    color={theme.custom.colors.familyGroup}
                  />
                </View>
                <View style={styles.textContent}>
                  <Text style={[
                    styles.familyName,
                    { color: theme.colors.onSurface },
                    theme.custom.typography.h5,
                  ]}>
                    {item.name}
                  </Text>
                  <Text style={[
                    styles.balance,
                    { color: theme.custom.colors.textSecondary },
                    theme.custom.typography.caption,
                  ]}>
                    Balance: ${item.balance.toFixed(2)}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={theme.custom.colors.textDisabled}
                />
              </View>
            </Card>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons
              name="account-group-outline"
              size={64}
              color={theme.custom.colors.textDisabled}
            />
            <Text style={[
              styles.emptyText,
              { color: theme.custom.colors.textSecondary },
              theme.custom.typography.body,
            ]}>
              No families yet. Create one!
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
  },
  invitationBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  invitationText: {
    fontWeight: "600",
  },
  familyCard: {},
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {},
  textContent: {
    flex: 1,
  },
  familyName: {
    fontWeight: "600",
    marginBottom: 4,
  },
  balance: {},
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 16,
  },
});
