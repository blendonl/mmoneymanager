import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '../../theme';

interface CategoryIconProps {
  categoryName: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const getCategoryIcon = (categoryName: string): keyof typeof MaterialCommunityIcons.glyphMap => {
  const name = categoryName.toLowerCase();

  if (name.includes('grocery') || name.includes('food')) return 'cart';
  if (name.includes('transport') || name.includes('car')) return 'car';
  if (name.includes('utility') || name.includes('utilities')) return 'flash';
  if (name.includes('entertainment') || name.includes('movie')) return 'movie';
  if (name.includes('health') || name.includes('medical')) return 'hospital-box';
  if (name.includes('education') || name.includes('school')) return 'school';
  if (name.includes('restaurant') || name.includes('dining')) return 'silverware-fork-knife';
  if (name.includes('shopping') || name.includes('clothes')) return 'shopping';
  if (name.includes('travel') || name.includes('vacation')) return 'airplane';
  if (name.includes('salary') || name.includes('income')) return 'cash-multiple';
  if (name.includes('gift')) return 'gift';
  if (name.includes('investment')) return 'chart-line';
  if (name.includes('rent') || name.includes('housing')) return 'home';
  if (name.includes('insurance')) return 'shield-check';
  if (name.includes('phone') || name.includes('internet')) return 'cellphone';
  if (name.includes('gym') || name.includes('fitness')) return 'dumbbell';
  if (name.includes('beauty') || name.includes('personal')) return 'spa';

  return 'tag';
};

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  categoryName,
  size = 24,
  color,
  style,
}) => {
  const { theme } = useAppTheme();
  const iconName = getCategoryIcon(categoryName);
  const iconColor = color || theme.custom.colors.primary;

  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons name={iconName} size={size} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
