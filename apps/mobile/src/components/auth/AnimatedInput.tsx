import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useAppTheme } from '../../theme';

interface AnimatedInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: boolean;
  errorText?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  style?: ViewStyle;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const AnimatedInput: React.FC<AnimatedInputProps> = ({
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  ...props
}) => {
  const { theme } = useAppTheme();
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (error) {
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [error]);

  return (
    <Animated.View
      style={[
        {
          transform: [{ translateX: shakeAnim }],
        },
        props.style,
      ]}
    >
      <TextInput
        mode="outlined"
        error={error}
        left={leftIcon ? <TextInput.Icon icon={leftIcon} color="rgba(255, 255, 255, 0.7)" /> : undefined}
        right={rightIcon ? (
          <TextInput.Icon
            icon={rightIcon}
            onPress={onRightIconPress}
            color="rgba(255, 255, 255, 0.7)"
          />
        ) : undefined}
        outlineStyle={styles.outline}
        style={[styles.input, { backgroundColor: 'rgba(255, 255, 255, 0.1)' }]}
        textColor="#FFFFFF"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        activeOutlineColor="rgba(255, 255, 255, 0.6)"
        outlineColor={error ? '#ff6b6b' : 'rgba(255, 255, 255, 0.3)'}
        theme={{
          colors: {
            onSurfaceVariant: 'rgba(255, 255, 255, 0.5)',
            onSurface: '#FFFFFF'
          }
        }}
        {...props}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 4,
  },
  outline: {
    borderRadius: 12,
    borderWidth: 1,
  },
});
