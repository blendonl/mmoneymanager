import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '../../theme';

type Role = 'OWNER' | 'ADMIN' | 'MEMBER';

interface RoleBadgeProps {
  role: Role;
  iconOnly?: boolean;
  style?: ViewStyle;
}

const getRoleConfig = (role: Role, colors: any) => {
  switch (role) {
    case 'OWNER':
      return {
        color: colors.roleOwner,
        backgroundColor: colors.roleOwnerBackground,
        icon: 'crown',
        label: 'Owner',
      };
    case 'ADMIN':
      return {
        color: colors.roleAdmin,
        backgroundColor: colors.roleAdminBackground,
        icon: 'shield-account',
        label: 'Admin',
      };
    case 'MEMBER':
      return {
        color: colors.roleMember,
        backgroundColor: colors.roleMemberBackground,
        icon: 'account',
        label: 'Member',
      };
  }
};

export const RoleBadge: React.FC<RoleBadgeProps> = ({
  role,
  iconOnly = false,
  style,
}) => {
  const { theme } = useAppTheme();
  const config = getRoleConfig(role, theme.custom.colors);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: config.backgroundColor,
          borderRadius: theme.custom.borderRadius.round,
          borderWidth: 1,
          borderColor: 'transparent',
        },
        iconOnly && styles.iconOnlyContainer,
        style,
      ]}
    >
      <MaterialCommunityIcons
        name={config.icon as any}
        size={iconOnly ? 16 : 12}
        color={config.color}
      />
      {!iconOnly && (
        <Text style={[
          styles.label,
          { color: config.color },
          theme.custom.typography.small,
        ]}>
          {config.label.toUpperCase()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  iconOnlyContainer: {
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  label: {
    fontWeight: '700',
    fontSize: 10,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
});

export default RoleBadge;
