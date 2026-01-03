import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFamily } from '../../context/FamilyContext';
import { useAppTheme } from '../../theme';
import FamilySelectorModal from './FamilySelectorModal';

interface FamilySwitcherProps {
  style?: ViewStyle;
  compact?: boolean;
}

export const FamilySwitcher: React.FC<FamilySwitcherProps> = ({
  style,
  compact = false,
}) => {
  const { theme } = useAppTheme();
  const { selectedFamily, families } = useFamily();
  const [modalVisible, setModalVisible] = useState(false);

  const displayName = selectedFamily ? selectedFamily.name : 'Personal';
  const displayBalance = selectedFamily
    ? `$${selectedFamily.balance.toFixed(2)}`
    : null;

  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: theme.custom.colors.glassBackground,
            borderColor: theme.custom.colors.glassBorder,
            borderRadius: theme.custom.borderRadius.lg,
            paddingHorizontal: theme.custom.spacing.md,
            paddingVertical: compact ? theme.custom.spacing.sm : theme.custom.spacing.sm + 4,
          },
          style,
        ]}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <View style={styles.leftContent}>
          <MaterialCommunityIcons
            name={selectedFamily ? 'account-group' : 'account'}
            size={compact ? 20 : 24}
            color={theme.colors.onSurface}
            style={[styles.icon, { marginRight: theme.custom.spacing.sm }]}
          />
          <View style={styles.textContainer}>
            <Text style={[
              styles.name,
              compact && styles.nameCompact,
              { color: theme.colors.onSurface },
              theme.custom.typography.bodyMedium,
            ]}>
              {displayName}
            </Text>
            {displayBalance && !compact && (
              <Text style={[
                styles.balance,
                { color: theme.custom.colors.textSecondary },
                theme.custom.typography.caption,
              ]}>
                {displayBalance}
              </Text>
            )}
          </View>
        </View>
        <MaterialCommunityIcons
          name="chevron-down"
          size={compact ? 18 : 20}
          color={theme.custom.colors.textSecondary}
        />
      </TouchableOpacity>

      <FamilySelectorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {},
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  nameCompact: {
    fontSize: 14,
  },
  balance: {
    marginTop: 2,
  },
});

export default FamilySwitcher;
