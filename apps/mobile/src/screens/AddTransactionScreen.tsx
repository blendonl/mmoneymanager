import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { useAppTheme } from '../theme';
import AddExpenseScreen from './AddExpenseScreen';
import AddIncomeScreen from './AddIncomeScreen';

type TransactionType = 'EXPENSE' | 'INCOME';

export default function AddTransactionScreen({ navigation, route }: any) {
    const { theme } = useAppTheme();
    const initialType = route?.params?.initialType || 'EXPENSE';
    const [transactionType, setTransactionType] = useState<TransactionType>(initialType);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.segmentedButtonsContainer}>
                <SegmentedButtons
                    value={transactionType}
                    onValueChange={(value) => setTransactionType(value as TransactionType)}
                    buttons={[
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
                    ]}
                    style={styles.segmentedButtons}
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
    segmentedButtonsContainer: {
        padding: 16,
        paddingBottom: 8,
    },
    segmentedButtons: {},
});
