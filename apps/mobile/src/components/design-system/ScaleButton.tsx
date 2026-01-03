import React, { useRef } from 'react';
import { Animated, Pressable, ViewStyle, StyleProp } from 'react-native';
import { animations } from '../../theme/animations';

interface ScaleButtonProps {
    children: React.ReactNode;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    scaleTo?: number;
    disabled?: boolean;
    activeOpacity?: number;
}

export const ScaleButton: React.FC<ScaleButtonProps> = ({
    children,
    onPress,
    style,
    scaleTo = 0.96,
    disabled = false,
}) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.timing(scaleAnim, {
            toValue: scaleTo || animations.scalePress.scaleDown,
            duration: animations.scalePress.duration,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: animations.scalePress.duration,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            disabled={disabled}
            style={({ pressed }) => [
                style,
                // Optional: add opacity change if needed, but scale is the main effect
            ]}
        >
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                {children}
            </Animated.View>
        </Pressable>
    );
};
