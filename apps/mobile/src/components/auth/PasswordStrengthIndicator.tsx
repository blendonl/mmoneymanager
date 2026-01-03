import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Text } from 'react-native-paper';
import { calculatePasswordStrength, getPasswordStrengthColor, getPasswordStrengthLabel } from '../../utils/passwordStrength';
import { useAppTheme } from '../../theme';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = React.memo(({ password }) => {
  const { theme } = useAppTheme();
  const strength = calculatePasswordStrength(password);
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: strength / 4,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [strength]);

  if (!password) return null;

  const strengthColor = getPasswordStrengthColor(strength);
  const strengthLabel = getPasswordStrengthLabel(strength);

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        {[0, 1, 2, 3].map((index) => (
          <View
            key={index}
            style={[
              styles.segment,
              {
                backgroundColor: index < strength ? strengthColor : theme.colors.border,
              },
            ]}
          />
        ))}
      </View>
      {strengthLabel && (
        <Text style={[styles.label, { color: strengthColor }]}>{strengthLabel}</Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 12,
  },
  barContainer: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 4,
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});
