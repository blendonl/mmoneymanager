import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native';
import { apiClient } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function IncomesScreen() {
    const [incomes, setIncomes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { logout } = useAuth();

    useEffect(() => {
        fetchIncomes();
    }, []);

    const fetchIncomes = async () => {
        try {
            setLoading(true);
            const data = await apiClient.get('/incomes');
            setIncomes(data || []);
            setError(null);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch incomes');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Incomes</Text>
                <Button title="Logout" onPress={logout} />
            </View>

            {error ? (
                <View style={styles.centered}>
                    <Text style={styles.error}>{error}</Text>
                    <Button title="Retry" onPress={fetchIncomes} />
                </View>
            ) : (
                <FlatList
                    data={incomes}
                    keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{item.description || 'Income'}</Text>
                            <Text style={styles.itemAmount}>${item.amount}</Text>
                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.emptyText}>No incomes found</Text>}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemText: {
        fontSize: 16,
    },
    itemAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#666',
    },
});
