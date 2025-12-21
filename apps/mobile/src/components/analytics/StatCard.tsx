import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '../design-system';
import { useAppTheme } from '../../theme';

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  color?: string;
  subtitle?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  color,
  subtitle,
}) => {
  const { theme } = useAppTheme();
  const iconColor = color || theme.colors.primary;

  return (
    <Card style={styles.card} elevation={2}>
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: iconColor + '20' }]}>
          <MaterialCommunityIcons name={icon as any} size={28} color={iconColor} />
        </View>
        <View style={styles.info}>
          <Text
            style={[
              styles.title,
              theme.custom.typography.caption,
              { color: theme.custom.colors.textSecondary },
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.value,
              theme.custom.typography.h4,
              { color: theme.custom.colors.text },
            ]}
          >
            {value}
          </Text>
          {subtitle && (
            <Text
              style={[
                styles.subtitle,
                theme.custom.typography.small,
                { color: theme.custom.colors.textSecondary },
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 4,
    marginBottom: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    marginBottom: 4,
  },
  value: {},
  subtitle: {
    marginTop: 2,
  },
});
