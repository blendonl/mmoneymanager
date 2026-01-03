import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, StyleSheet, Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '../../theme';
import { animations } from '../../theme/animations';

interface FloatingActionButtonProps {
  onPress: () => void;
}

export function FloatingActionButton({ onPress }: FloatingActionButtonProps) {
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const pressAnim = useRef(new Animated.Value(1)).current;

  const tabBarHeight = 65;
  const bottomPadding = Math.max(insets.bottom, 10);
  const bottomOffset = tabBarHeight + bottomPadding - 28;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(300),
      Animated.spring(scaleAnim, {
        toValue: 1,
        ...animations.spring,
      }),
    ]).start();
  }, [scaleAnim]);

  const handlePressIn = () => {
    Animated.spring(pressAnim, {
      toValue: 0.9,
      ...animations.spring,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(pressAnim, {
      toValue: 1,
      ...animations.spring,
    }).start();
  };

  const handlePress = () => {
    onPress();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          bottom: bottomOffset + 28 + 8,
          transform: [{ scale: Animated.multiply(scaleAnim, pressAnim) }],
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View
          style={[
            styles.border,
            {
              borderColor: theme.colors.surface,
            },
          ]}
        >
          <LinearGradient
            colors={[theme.custom.colors.gradientStart, theme.custom.colors.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[
              styles.gradient,
              {
                shadowColor: theme.custom.colors.gradientStart,
              },
            ]}
          >
            <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF" />
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    zIndex: 1000,
  },
  border: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    padding: 0,
  },
  gradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
      },
      android: {
        elevation: 12,
      },
    }),
  },
});
