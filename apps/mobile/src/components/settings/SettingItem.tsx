import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Switch } from 'react-native-paper';
import { useAppTheme } from '../../theme';

interface SettingItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showChevron?: boolean;
  value?: string;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  showChevron = true,
  value,
  switchValue,
  onSwitchChange,
  disabled = false,
}) => {
  const { theme } = useAppTheme();

  const content = (
    <View
      style={[
        styles.container,
        { borderBottomColor: theme.custom.colors.divider },
      ]}
    >
      <View style={styles.leftSection}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: theme.colors.primary + '20' },
          ]}
        >
          <MaterialCommunityIcons
            name={icon as any}
            size={24}
            color={theme.colors.primary}
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              theme.custom.typography.bodyMedium,
              { color: theme.custom.colors.text },
            ]}
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              style={[
                styles.subtitle,
                theme.custom.typography.caption,
                { color: theme.custom.colors.textSecondary },
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.rightSection}>
        {value && (
          <Text
            style={[
              styles.value,
              theme.custom.typography.body,
              { color: theme.custom.colors.textSecondary },
            ]}
          >
            {value}
          </Text>
        )}
        {onSwitchChange !== undefined && switchValue !== undefined && (
          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
            disabled={disabled}
          />
        )}
        {showChevron && !onSwitchChange && (
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={theme.custom.colors.textSecondary}
          />
        )}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {},
  subtitle: {
    marginTop: 2,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  value: {
    marginRight: 4,
  },
});
