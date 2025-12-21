import React from 'react';
import { StyleSheet, ViewStyle, KeyboardTypeOptions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '../../theme';

interface InputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  multiline?: boolean;
  numberOfLines?: number;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  style?: ViewStyle;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  multiline = false,
  numberOfLines = 1,
  error = false,
  errorText,
  disabled = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
  style,
  onFocus,
  onBlur,
}) => {
  const { theme } = useAppTheme();

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
      numberOfLines={numberOfLines}
      error={error}
      disabled={disabled}
      left={leftIcon ? <TextInput.Icon icon={leftIcon} /> : undefined}
      right={rightIcon ? (
        <TextInput.Icon
          icon={rightIcon}
          onPress={onRightIconPress}
        />
      ) : undefined}
      style={[styles.input, style]}
      outlineStyle={styles.outline}
      contentStyle={theme.custom.typography.body}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 4,
  },
  outline: {
    borderRadius: 8,
  },
});
