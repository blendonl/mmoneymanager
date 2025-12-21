import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TransactionsListScreen from '../screens/transactions/TransactionsListScreen';
import AnalyticsScreen from '../screens/analytics/AnalyticsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarStyle: {
                    height: 65,
                    paddingBottom: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                },
                tabBarActiveTintColor: '#6200EE',
                tabBarInactiveTintColor: '#666',
            }}
        >
            <Tab.Screen
                name="Transactions"
                component={TransactionsListScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Analytics"
                component={AnalyticsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-box" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={EmptyComponent}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.getParent()?.navigate('AddTransaction');
                    },
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.addButton}>
                            <Text style={styles.plus}>+</Text>
                        </View>
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

// Empty component for the Add tab (never actually rendered)
function EmptyComponent() {
    return null;
}

const styles = StyleSheet.create({
    addButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    plus: {
        color: 'white',
        fontSize: 30,
        lineHeight: 32,
    },
});
