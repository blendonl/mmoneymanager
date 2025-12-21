import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Chip as PaperChip } from 'react-native-paper';
import { useAppTheme } from '../../theme';

interface ChipProps {
  label: string;
  onPress?: () => void;
  onClose?: () => void;
  selected?: boolean;
  icon?: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  onPress,
  onClose,
  selected = false,
  icon,
  disabled = false,
  style,
}) => {
  const { theme } = useAppTheme();

  return (
    <PaperChip
      mode={selected ? 'flat' : 'outlined'}
      selected={selected}
      onPress={onPress}
      onClose={onClose}
      icon={icon}
      disabled={disabled}
      style={[
        styles.chip,
        selected && {
          backgroundColor: theme.colors.primary,
        },
        style,
      ]}
      textStyle={[
        styles.text,
        selected && { color: theme.colors.onPrimary },
      ]}
    >
      {label}
    </PaperChip>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
  },
});
