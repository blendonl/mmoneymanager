import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ToggleSwitch } from '../components/design-system';
import { useAppTheme } from '../theme';
import AddExpenseScreen from './AddExpenseScreen';
import AddIncomeScreen from './AddIncomeScreen';

type TransactionType = 'EXPENSE' | 'INCOME';

export default function AddTransactionScreen({ navigation, route }: any) {
    const { theme } = useAppTheme();
    const initialType = route?.params?.initialType || 'EXPENSE';
    const [transactionType, setTransactionType] = useState<TransactionType>(initialType);

    const toggleOptions = [
        {
            value: 'EXPENSE',
            label: 'Expense',
            icon: 'minus-circle',
        },
        {
            value: 'INCOME',
            label: 'Income',
            icon: 'plus-circle',
        },
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.custom.colors.background }]}>
            <View style={styles.toggleContainer}>
                <ToggleSwitch
                    options={toggleOptions}
                    value={transactionType}
                    onChange={(value) => setTransactionType(value as TransactionType)}
                />
            </View>

            {transactionType === 'EXPENSE' ? (
                <AddExpenseScreen navigation={navigation} />
            ) : (
                <AddIncomeScreen navigation={navigation} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toggleContainer: {
        padding: 16,
        paddingBottom: 8,
    },
});
