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
  glass?: boolean;
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
  glass = false,
}) => {
  const { theme } = useAppTheme();

  const getGlassStyles = () => {
    if (glass) {
      return {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      };
    }
    return {};
  };

  const getGlassTextColors = () => {
    if (glass) {
      return {
        textColor: '#FFFFFF',
        placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
        activeOutlineColor: 'rgba(255, 255, 255, 0.6)',
        outlineColor: error ? '#ff6b6b' : 'rgba(255, 255, 255, 0.3)',
      };
    }
    return {};
  };

  const getGlassTheme = () => {
    if (glass) {
      return {
        colors: {
          onSurfaceVariant: 'rgba(255, 255, 255, 0.5)',
          onSurface: '#FFFFFF',
        },
      };
    }
    return {};
  };

  const getIconColor = () => glass ? 'rgba(255, 255, 255, 0.7)' : undefined;

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
      left={leftIcon ? <TextInput.Icon icon={leftIcon} color={getIconColor()} /> : undefined}
      right={rightIcon ? (
        <TextInput.Icon
          icon={rightIcon}
          onPress={onRightIconPress}
          color={getIconColor()}
        />
      ) : undefined}
      style={[styles.input, getGlassStyles(), style]}
      outlineStyle={glass ? styles.glassOutline : styles.outline}
      contentStyle={theme.custom.typography.body}
      onFocus={onFocus}
      onBlur={onBlur}
      theme={getGlassTheme()}
      {...getGlassTextColors()}
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
  glassOutline: {
    borderRadius: 12,
    borderWidth: 1,
  },
});
