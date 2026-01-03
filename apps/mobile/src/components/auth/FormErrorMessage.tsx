import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import { Text } from 'react-native-paper';

interface FormErrorMessageProps {
  message?: string;
  visible: boolean;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ message, visible }) => {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible && message) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, message]);

  if (!message) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-10, 0],
              }),
            },
          ],
          opacity: opacityAnim,
        },
      ]}
    >
      <Text style={styles.errorText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 13,
    color: '#ff6b6b',
    fontWeight: '500',
  },
});
