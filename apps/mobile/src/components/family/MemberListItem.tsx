import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '../../theme';
import { Card } from '../design-system';
import RoleBadge from './RoleBadge';

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

interface MemberListItemProps {
  member: FamilyMember;
  currentUserRole: Role | null;
  isCurrentUser: boolean;
  onRemove?: (userId: string) => void;
  canManage: boolean;
}

const getInitials = (firstName: string | null, lastName: string | null, email: string) => {
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }
  return email[0].toUpperCase();
};

const formatJoinDate = (joinedAt: string): string => {
  const date = new Date(joinedAt);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 30) {
    return `Joined ${diffDays} days ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `Joined ${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `Joined ${years} year${years > 1 ? 's' : ''} ago`;
  }
};

export const MemberListItem: React.FC<MemberListItemProps> = ({
  member,
  currentUserRole,
  isCurrentUser,
  onRemove,
  canManage,
}) => {
  const { theme } = useAppTheme();

  const initials = getInitials(
    member.user.firstName,
    member.user.lastName,
    member.user.email
  );

  const displayName = member.user.firstName && member.user.lastName
    ? `${member.user.firstName} ${member.user.lastName}`
    : member.user.email;

  const showRemoveButton = canManage && !isCurrentUser && member.role !== 'OWNER';

  const handleRemove = () => {
    Alert.alert(
      'Remove Member',
      `Are you sure you want to remove ${displayName} from this family?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => onRemove?.(member.userId),
        },
      ]
    );
  };

  const joinDateText = formatJoinDate(member.joinedAt);

  return (
    <Card
      style={{
        ...styles.container,
        padding: theme.custom.spacing.md,
        marginBottom: theme.custom.spacing.sm,
      }}
      elevation={1}
    >
      <View style={styles.leftContent}>
        <View style={[
          styles.avatar,
          {
            backgroundColor: theme.colors.primary,
            borderRadius: theme.custom.borderRadius.round,
          }
        ]}>
          <Text style={[
            styles.avatarText,
            { color: theme.colors.onPrimary },
          ]}>
            {initials}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          {/* Name and Role Badge Row */}
          <View style={styles.nameRow}>
            <Text
              style={[
                styles.name,
                { color: theme.colors.onSurface },
                theme.custom.typography.bodyMedium,
              ]}
              numberOfLines={1}
            >
              {displayName}
              {isCurrentUser && (
                <Text style={[
                  styles.youLabel,
                  { color: theme.custom.colors.textSecondary },
                ]}>
                  {' '}(You)
                </Text>
              )}
            </Text>
          </View>

          {/* Email */}
          {member.user.email && (
            <Text
              style={[
                styles.email,
                { color: theme.custom.colors.textSecondary },
                theme.custom.typography.small,
              ]}
              numberOfLines={1}
            >
              {member.user.email}
            </Text>
          )}

          {/* Join date and balance */}
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <MaterialCommunityIcons
                name="calendar-check"
                size={12}
                color={theme.custom.colors.textDisabled}
              />
              <Text style={[
                styles.metaText,
                { color: theme.custom.colors.textDisabled },
                theme.custom.typography.small,
              ]}>
                {joinDateText}
              </Text>
            </View>
            <View style={styles.metaDivider} />
            <View style={styles.metaItem}>
              <MaterialCommunityIcons
                name="wallet"
                size={12}
                color={theme.custom.colors.textDisabled}
              />
              <Text style={[
                styles.metaText,
                { color: theme.custom.colors.textDisabled },
                theme.custom.typography.small,
              ]}>
                ${member.balance.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {showRemoveButton && (
        <TouchableOpacity
          style={[
            styles.removeButton,
            {
              backgroundColor: `${theme.colors.error}20`,
              borderRadius: theme.custom.borderRadius.md,
              padding: theme.custom.spacing.sm,
            },
          ]}
          onPress={handleRemove}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            name="account-remove"
            size={20}
            color={theme.colors.error}
          />
        </TouchableOpacity>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '700',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  nameRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 8,
  },
  name: {
    fontWeight: '600',
    flexShrink: 1,
  },
  youLabel: {
    fontWeight: '400',
  },
  email: {
    marginTop: 2,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaDivider: {
    width: 1,
    height: 12,
    backgroundColor: '#00000020',
    marginHorizontal: 8,
  },
  metaText: {
    fontSize: 11,
  },
  removeButton: {
    marginLeft: 12,
  },
});

export default MemberListItem;
