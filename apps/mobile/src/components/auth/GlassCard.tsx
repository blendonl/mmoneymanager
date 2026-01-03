import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { useAppTheme } from '../../theme';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style }) => {
  const { theme } = useAppTheme();
  const isDark = theme.dark;

  return (
    <BlurView
      intensity={isDark ? 40 : 30}
      tint={isDark ? 'dark' : 'light'}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.glassBackground,
          borderColor: theme.colors.glassBorder,
        },
        style,
      ]}
    >
      {children}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    overflow: 'hidden',
  },
});
