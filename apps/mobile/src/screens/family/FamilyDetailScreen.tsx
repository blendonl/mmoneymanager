import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFamily } from '../../context/FamilyContext';
import { useAuth } from '../../context/AuthContext';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Card, Button } from '../../components/design-system';
import { useAppTheme } from '../../theme';
import MemberListItem from '../../components/family/MemberListItem';
import FamilyStatsCard from '../../components/family/FamilyStatsCard';
import FamilyActivityItem from '../../components/family/FamilyActivityItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Role = 'OWNER' | 'ADMIN' | 'MEMBER';

interface FamilyMember {
  id: string;
  userId: string;
  role: Role;
  balance: number;
  joinedAt: string;
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
  };
}

interface FamilyWithMembers {
  id: string;
  name: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  members: FamilyMember[];
}

// Mock recent transactions - in a real app, this would come from an API
interface Transaction {
  id: string;
  type: 'INCOME' | 'EXPENSE';
  description: string;
  amount: number;
  timestamp: string;
  userId: string;
  categoryIcon?: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export default function FamilyDetailScreen() {
  const { theme } = useAppTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { familyId } = route.params as { familyId: string };
  const { user } = useAuth();
  const { leaveFamily, fetchFamilyWithMembers, removeMember } = useFamily();
  const [family, setFamily] = useState<FamilyWithMembers | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Mock recent transactions - replace with actual API call
  const [recentTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchFamilyDetails();
  }, [familyId]);

  const fetchFamilyDetails = async () => {
    try {
      setLoading(true);
      const data = await fetchFamilyWithMembers(familyId);
      setFamily(data);
    } catch (error) {
      console.error('Failed to fetch family details', error);
      Alert.alert('Error', 'Failed to load family details');
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchFamilyDetails();
    setRefreshing(false);
  };

  const handleLeave = () => {
    const currentMember = family?.members.find((m) => m.userId === user?.id);
    if (currentMember?.role === 'OWNER' && family && family.members.length > 1) {
      Alert.alert(
        'Cannot Leave',
        'As the owner, you must transfer ownership or remove all members before leaving.'
      );
      return;
    }

    Alert.alert('Leave Family', 'Are you sure you want to leave this family?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Leave',
        style: 'destructive',
        onPress: async () => {
          try {
            await leaveFamily(familyId);
            navigation.goBack();
          } catch (error) {
            Alert.alert('Error', 'Failed to leave family');
          }
        },
      },
    ]);
  };

  const handleRemoveMember = async (userId: string) => {
    try {
      await removeMember(familyId, userId);
      await fetchFamilyDetails();
    } catch (error) {
      Alert.alert('Error', 'Failed to remove member');
    }
  };

  const currentMember = family?.members.find((m) => m.userId === user?.id);
  const canManageMembers = currentMember?.role === 'OWNER' || currentMember?.role === 'ADMIN';

  if (loading && !family) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={[
            styles.loadingText,
            { color: theme.custom.colors.textSecondary },
            theme.custom.typography.body,
          ]}>
            Loading family details...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!family) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
        <View style={styles.errorContainer}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={64}
            color={theme.colors.error}
          />
          <Text style={[
            styles.errorText,
            { color: theme.colors.error },
            theme.custom.typography.h4,
          ]}>
            Family not found
          </Text>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaView>
    );
  }

  // Calculate stats
  const totalTransactions = recentTransactions.length;
  const topContributor = family.members.reduce((prev, current) =>
    (prev.balance > current.balance) ? prev : current
  );
  const topContributorName = topContributor.user.firstName && topContributor.user.lastName
    ? `${topContributor.user.firstName} ${topContributor.user.lastName}`
    : topContributor.user.email;

  const stats = [
    {
      label: 'Total Balance',
      value: `$${family.balance.toFixed(2)}`,
      icon: 'wallet' as const,
      color: theme.colors.primary,
      valueColor: theme.colors.primary,
    },
    {
      label: 'Members',
      value: family.members.length,
      icon: 'account-group' as const,
      color: theme.custom.colors.familyGroup,
    },
    {
      label: 'Created',
      value: formatDate(family.createdAt),
      icon: 'calendar' as const,
      color: theme.custom.colors.info,
    },
    {
      label: 'Top Contributor',
      value: topContributorName.split(' ')[0] || topContributorName.substring(0, 10),
      icon: 'trophy' as const,
      color: theme.custom.colors.warning,
    },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      edges={['top']}
    >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: theme.custom.spacing.md,
          paddingBottom: 100, // Extra padding for bottom buttons
        }}
      >
        {/* Family Header */}
        <View style={[styles.header, { marginBottom: theme.custom.spacing.lg }]}>
          <View style={[
            styles.headerIcon,
            {
              backgroundColor: theme.custom.colors.familyGroupLight,
              borderRadius: theme.custom.borderRadius.round,
              padding: theme.custom.spacing.md,
              marginBottom: theme.custom.spacing.sm,
            }
          ]}>
            <MaterialCommunityIcons
              name="account-group"
              size={32}
              color={theme.custom.colors.familyGroup}
            />
          </View>

          <Text style={[
            styles.familyName,
            { color: theme.colors.onBackground },
            theme.custom.typography.h2,
          ]}>
            {family.name}
          </Text>

          <Text style={[
            styles.createdDate,
            { color: theme.custom.colors.textSecondary },
            theme.custom.typography.caption,
          ]}>
            Created {formatDate(family.createdAt)}
          </Text>
        </View>

        {/* Stats Card */}
        <FamilyStatsCard
          stats={stats}
          columns={2}
        />

        {/* Members Section */}
        <View style={[styles.section, { marginTop: theme.custom.spacing.lg }]}>
          <View style={styles.sectionHeader}>
            <Text style={[
              styles.sectionTitle,
              { color: theme.colors.onBackground },
              theme.custom.typography.h4,
            ]}>
              Members
            </Text>
            <View style={[
              styles.badge,
              {
                backgroundColor: theme.custom.colors.primaryLight + '20',
                borderRadius: theme.custom.borderRadius.round,
                paddingHorizontal: theme.custom.spacing.sm,
                paddingVertical: 4,
              }
            ]}>
              <Text style={[
                styles.badgeText,
                { color: theme.colors.primary },
                theme.custom.typography.small,
              ]}>
                {family.members.length}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: theme.custom.spacing.sm }}>
            {family.members.map((member) => (
              <MemberListItem
                key={member.id}
                member={member}
                currentUserRole={currentMember?.role || null}
                isCurrentUser={member.userId === user?.id}
                onRemove={handleRemoveMember}
                canManage={canManageMembers}
              />
            ))}
          </View>
        </View>

        {/* Recent Activity Section */}
        {recentTransactions.length > 0 && (
          <View style={[styles.section, { marginTop: theme.custom.spacing.lg }]}>
            <View style={styles.sectionHeader}>
              <Text style={[
                styles.sectionTitle,
                { color: theme.colors.onBackground },
                theme.custom.typography.h4,
              ]}>
                Recent Activity
              </Text>
              <TouchableOpacity
                onPress={() => {
                  // Navigate to transactions filtered by family
                  (navigation as any).navigate('Main', { screen: 'Transactions' });
                }}
              >
                <Text style={[
                  styles.viewAllText,
                  { color: theme.colors.primary },
                  theme.custom.typography.bodyMedium,
                ]}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: theme.custom.spacing.sm }}>
              {recentTransactions.slice(0, 5).map((transaction) => {
                const member = family.members.find(m => m.userId === transaction.userId);
                const memberName = member?.user.firstName && member?.user.lastName
                  ? `${member.user.firstName} ${member.user.lastName}`
                  : member?.user.email || 'Unknown';

                return (
                  <FamilyActivityItem
                    key={transaction.id}
                    type={transaction.type}
                    description={transaction.description}
                    memberName={memberName}
                    amount={transaction.amount}
                    timestamp={transaction.timestamp}
                    categoryIcon={transaction.categoryIcon as any}
                    onPress={() => {
                      // Navigate to transaction detail
                    }}
                  />
                );
              })}
            </View>
          </View>
        )}

        {/* Empty state for no activity */}
        {recentTransactions.length === 0 && (
          <View style={[styles.emptyActivity, { marginTop: theme.custom.spacing.lg }]}>
            <Card style={{ padding: theme.custom.spacing.lg }}>
              <MaterialCommunityIcons
                name="history"
                size={48}
                color={theme.custom.colors.textDisabled}
                style={{ alignSelf: 'center', marginBottom: theme.custom.spacing.sm }}
              />
              <Text style={[
                styles.emptyText,
                { color: theme.custom.colors.textSecondary },
                theme.custom.typography.body,
              ]}>
                No recent activity
              </Text>
              <Text style={[
                styles.emptySubtext,
                { color: theme.custom.colors.textDisabled },
                theme.custom.typography.caption,
              ]}>
                Transactions will appear here
              </Text>
            </Card>
          </View>
        )}
      </ScrollView>

      {/* Fixed Bottom Action Buttons */}
      <View style={[
        styles.bottomActions,
        {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.custom.colors.divider,
          padding: theme.custom.spacing.md,
        }
      ]}>
        <Button
          title="Invite Member"
          onPress={() =>
            navigation.navigate('InviteMember' as never, { familyId } as never)
          }
          style={{ marginBottom: theme.custom.spacing.sm }}
        />

        <Button
          title="Leave Family"
          onPress={handleLeave}
          style={{
            backgroundColor: theme.colors.error,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 24,
  },
  header: {
    alignItems: 'center',
  },
  headerIcon: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  familyName: {
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  createdDate: {
    textAlign: 'center',
  },
  section: {},
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: '600',
  },
  badge: {
    minWidth: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontWeight: '700',
  },
  viewAllText: {
    fontWeight: '600',
  },
  emptyActivity: {},
  emptyText: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 4,
  },
  emptySubtext: {
    textAlign: 'center',
  },
  bottomActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
});
