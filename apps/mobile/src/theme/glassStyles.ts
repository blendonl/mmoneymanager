import { StyleSheet, ViewStyle } from 'react-native';
import { ColorPalette } from './colors';

/**
 * Glassmorphism style utilities
 * Creates premium glass effects with blur, transparency, and subtle borders
 */

export const createGlassStyles = (colors: ColorPalette) => {
    return StyleSheet.create({
        // Glass card - for main content cards
        glassCard: {
            backgroundColor: colors.glassBackground,
            borderWidth: 1,
            borderColor: colors.glassBorder,
            borderRadius: 16,
            shadowColor: colors.glassShadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 4,
        } as ViewStyle,

        // Glass card strong - more opaque variant
        glassCardStrong: {
            backgroundColor: colors.glassBackgroundStrong,
            borderWidth: 1,
            borderColor: colors.glassBorder,
            borderRadius: 16,
            shadowColor: colors.glassShadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 5,
        } as ViewStyle,

        // Glass surface - for backgrounds
        glassSurface: {
            backgroundColor: colors.glassBackground,
            borderWidth: 1,
            borderColor: colors.glassBorder,
            borderRadius: 12,
        } as ViewStyle,

        // Glass dropdown - for dropdown menus
        glassDropdown: {
            backgroundColor: colors.dropdownBackground,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 12,
            shadowColor: colors.glassShadow,
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.15,
            shadowRadius: 16,
            elevation: 8,
        } as ViewStyle,

        // Glass overlay - for modal backgrounds
        glassOverlay: {
            backgroundColor: colors.glassOverlay,
        } as ViewStyle,

        // Glass input - for input fields
        glassInput: {
            backgroundColor: colors.glassBackground,
            borderWidth: 1,
            borderColor: colors.glassBorder,
            borderRadius: 12,
        } as ViewStyle,

        // Glass button - for buttons with glass effect
        glassButton: {
            backgroundColor: colors.glassBackgroundStrong,
            borderWidth: 1,
            borderColor: colors.glassBorder,
            borderRadius: 12,
            shadowColor: colors.glassShadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
        } as ViewStyle,

        // Selection state
        glassSelected: {
            backgroundColor: colors.selectionBackground,
            borderWidth: 2,
            borderColor: colors.selectionBorder,
            borderRadius: 12,
        } as ViewStyle,

        // Hover state (for web/desktop)
        glassHover: {
            backgroundColor: colors.dropdownHover,
        } as ViewStyle,
    });
};

/**
 * Gradient utilities
 */
export const gradientConfigs = (colors: ColorPalette) => ({
    primary: {
        colors: [colors.gradientPrimaryStart, colors.gradientPrimaryEnd],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
    },

    income: {
        colors: [colors.gradientIncomeStart, colors.gradientIncomeEnd],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
    },

    expense: {
        colors: [colors.gradientExpenseStart, colors.gradientExpenseEnd],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
    },

    background: {
        colors: [colors.gradientStart, colors.gradientEnd],
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
    },
});
