import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Card as PaperCard } from 'react-native-paper';
import { useAppTheme } from '../../theme';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  elevation?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  onPress,
  style,
  elevation = 1,
}) => {
  const { theme } = useAppTheme();

  if (onPress) {
    return (
      <PaperCard
        mode="elevated"
        elevation={elevation}
        onPress={onPress}
        style={[
          styles.card,
          { backgroundColor: theme.colors.surface },
          style,
        ]}
      >
        {children}
      </PaperCard>
    );
  }

  return (
    <PaperCard
      mode="elevated"
      elevation={elevation}
      style={[
        styles.card,
        { backgroundColor: theme.colors.surface },
        style,
      ]}
    >
      {children}
    </PaperCard>
  );
};

Card.Content = PaperCard.Content;
Card.Title = PaperCard.Title;
Card.Cover = PaperCard.Cover;
Card.Actions = PaperCard.Actions;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
  },
});
