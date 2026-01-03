import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
} from 'react-native';
import { useAppTheme } from '../../theme';

export interface SelectItem {
    label: string;
    value: string;
}

interface SelectProps {
    label?: string;
    value: string | null;
    items: SelectItem[];
    onValueChange: (value: string | null) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    style?: ViewStyle;
}

export const Select: React.FC<SelectProps> = ({
    label,
    value,
    items,
    onValueChange,
    placeholder = 'Select an option',
    disabled = false,
    error,
    style,
}) => {
    const { theme } = useAppTheme();
    const [isOpen, setIsOpen] = useState(false);

    const selectedItem = items.find((item) => item.value === value);
    const displayText = selectedItem ? selectedItem.label : placeholder;

    const handleSelect = (itemValue: string) => {
        onValueChange(itemValue);
        setIsOpen(false);
    };

    return (
        <View style={[styles.container, style]}>
            {label && (
                <Text
                    style={[
                        styles.label,
                        theme.custom.typography.bodyMedium,
                        { color: theme.custom.colors.text },
                    ]}
                >
                    {label}
                </Text>
            )}
            <TouchableOpacity
                style={[
                    styles.selectButton,
                    {
                        backgroundColor: theme.custom.colors.cardBackground,
                        borderColor: error
                            ? theme.colors.error
                            : isOpen
                              ? theme.colors.primary
                              : theme.custom.colors.divider,
                    },
                    disabled && styles.disabled,
                ]}
                onPress={() => !disabled && setIsOpen(!isOpen)}
                activeOpacity={0.7}
                disabled={disabled}
            >
                <Text
                    style={[
                        styles.selectText,
                        theme.custom.typography.body,
                        {
                            color: selectedItem
                                ? theme.custom.colors.text
                                : theme.custom.colors.textSecondary,
                        },
                    ]}
                >
                    {displayText}
                </Text>
                <Text
                    style={[
                        styles.arrow,
                        {
                            color: theme.custom.colors.textSecondary,
                            transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
                        },
                    ]}
                >
                    ▼
                </Text>
            </TouchableOpacity>

            {error && (
                <Text
                    style={[
                        styles.errorText,
                        theme.custom.typography.caption,
                        { color: theme.colors.error },
                    ]}
                >
                    {error}
                </Text>
            )}

            {isOpen && (
                <View
                    style={[
                        styles.dropdown,
                        {
                            backgroundColor: theme.custom.colors.cardBackground,
                            borderColor: theme.custom.colors.divider,
                        },
                    ]}
                >
                    {items.map((item) => (
                        <TouchableOpacity
                            key={item.value}
                            style={[
                                styles.dropdownItem,
                                {
                                    backgroundColor:
                                        item.value === value
                                            ? theme.custom.colors.selectionBackground
                                            : 'transparent',
                                    borderBottomColor: theme.custom.colors.divider,
                                },
                            ]}
                            onPress={() => handleSelect(item.value)}
                            activeOpacity={0.7}
                        >
                            <Text
                                style={[
                                    styles.itemText,
                                    theme.custom.typography.body,
                                    {
                                        color:
                                            item.value === value
                                                ? theme.colors.primary
                                                : theme.custom.colors.text,
                                    },
                                ]}
                            >
                                {item.label}
                            </Text>
                            {item.value === value && (
                                <Text
                                    style={[
                                        styles.checkmark,
                                        { color: theme.colors.primary },
                                    ]}
                                >
                                    ✓
                                </Text>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        fontWeight: '500',
    },
    selectButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        minHeight: 48,
    },
    selectText: {
        flex: 1,
        fontSize: 16,
    },
    arrow: {
        fontSize: 12,
        marginLeft: 8,
    },
    disabled: {
        opacity: 0.5,
    },
    errorText: {
        marginTop: 4,
        fontSize: 12,
    },
    dropdown: {
        marginTop: 4,
        borderRadius: 8,
        borderWidth: 1,
        maxHeight: 200,
        overflow: 'hidden',
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
    },
    itemText: {
        flex: 1,
        fontSize: 16,
    },
    checkmark: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
