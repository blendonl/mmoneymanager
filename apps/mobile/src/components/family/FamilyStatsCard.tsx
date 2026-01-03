import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '../../theme';
import { Card } from '../design-system';

interface StatItem {
    label: string;
    value: string | number;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    color?: string;
    valueColor?: string;
}

interface FamilyStatsCardProps {
    stats: StatItem[];
    columns?: 2 | 3 | 4;
}

export const FamilyStatsCard: React.FC<FamilyStatsCardProps> = ({
    stats,
    columns = 2,
}) => {
    const { theme } = useAppTheme();

    return (
        <Card style={styles.card} elevation={2}>
            <View style={[styles.statsGrid, { gap: theme.custom.spacing.md }]}>
                {stats.map((stat, index) => (
                    <View
                        key={index}
                        style={[
                            styles.statItem,
                            { flex: 1, minWidth: `${100 / columns - 5}%` },
                        ]}
                    >
                        {stat.icon && (
                            <View
                                style={[
                                    styles.iconContainer,
                                    {
                                        backgroundColor: stat.color
                                            ? `${stat.color}15`
                                            : theme.custom.colors.primaryLight + '15',
                                        borderRadius: theme.custom.borderRadius.md,
                                        marginBottom: theme.custom.spacing.xs,
                                    },
                                ]}
                            >
                                <MaterialCommunityIcons
                                    name={stat.icon}
                                    size={20}
                                    color={stat.color || theme.colors.primary}
                                />
                            </View>
                        )}
                        <Text
                            style={[
                                styles.statLabel,
                                theme.custom.typography.caption,
                                { color: theme.custom.colors.textSecondary },
                            ]}
                        >
                            {stat.label}
                        </Text>
                        <Text
                            style={[
                                styles.statValue,
                                theme.custom.typography.h4,
                                {
                                    color: stat.valueColor || theme.colors.onSurface,
                                },
                            ]}
                        >
                            {stat.value}
                        </Text>
                    </View>
                ))}
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statItem: {
        alignItems: 'center',
        marginBottom: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statLabel: {
        marginBottom: 4,
        textAlign: 'center',
    },
    statValue: {
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default FamilyStatsCard;
