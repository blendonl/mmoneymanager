import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '../../theme';

interface FamilyActivityItemProps {
    type: 'INCOME' | 'EXPENSE';
    description: string;
    memberName: string;
    amount: number;
    timestamp: string;
    categoryIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
    onPress?: () => void;
}

const getRelativeTime = (timestamp: string): string => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
};

export const FamilyActivityItem: React.FC<FamilyActivityItemProps> = ({
    type,
    description,
    memberName,
    amount,
    timestamp,
    categoryIcon = 'cash',
    onPress,
}) => {
    const { theme } = useAppTheme();

    const isIncome = type === 'INCOME';
    const amountColor = isIncome
        ? theme.custom.colors.income
        : theme.custom.colors.expense;
    const iconBgColor = isIncome
        ? theme.custom.colors.incomeLight + '20'
        : theme.custom.colors.expenseLight + '20';

    const Container = onPress ? TouchableOpacity : View;

    return (
        <Container
            style={[
                styles.container,
                {
                    backgroundColor: theme.colors.surface,
                    borderRadius: theme.custom.borderRadius.md,
                    padding: theme.custom.spacing.sm,
                    marginBottom: theme.custom.spacing.xs,
                },
            ]}
            onPress={onPress}
            activeOpacity={onPress ? 0.7 : 1}
        >
            <View
                style={[
                    styles.iconContainer,
                    {
                        backgroundColor: iconBgColor,
                        borderRadius: theme.custom.borderRadius.md,
                        marginRight: theme.custom.spacing.sm,
                    },
                ]}
            >
                <MaterialCommunityIcons
                    name={categoryIcon}
                    size={20}
                    color={amountColor}
                />
            </View>

            <View style={styles.contentContainer}>
                <Text
                    style={[
                        styles.description,
                        theme.custom.typography.bodyMedium,
                        { color: theme.colors.onSurface },
                    ]}
                    numberOfLines={1}
                >
                    {description}
                </Text>
                <View style={styles.metaRow}>
                    <Text
                        style={[
                            styles.memberName,
                            theme.custom.typography.small,
                            { color: theme.custom.colors.textSecondary },
                        ]}
                    >
                        {memberName}
                    </Text>
                    <Text
                        style={[
                            styles.timestamp,
                            theme.custom.typography.small,
                            { color: theme.custom.colors.textDisabled },
                        ]}
                    >
                        • {getRelativeTime(timestamp)}
                    </Text>
                </View>
            </View>

            <Text
                style={[
                    styles.amount,
                    theme.custom.typography.bodyMedium,
                    { color: amountColor },
                ]}
            >
                {isIncome ? '+' : '-'}${Math.abs(amount).toFixed(2)}
            </Text>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        marginRight: 8,
    },
    description: {
        fontWeight: '600',
        marginBottom: 2,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    memberName: {
        marginRight: 4,
    },
    timestamp: {},
    amount: {
        fontWeight: '700',
    },
});

export default FamilyActivityItem;
