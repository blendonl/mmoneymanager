import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiClient } from '../api/client';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    login: (data: any) => Promise<void>;
    register: (data: any) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    const loadStorageData = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
                // Optionally fetch user profile here if needed, or just decode token if it was JWT with user info
                // For now let's try to fetch 'me'
                try {
                    const userData = await apiClient.get('/auth/me');
                    setUser(userData);
                } catch (e) {
                    // Token might be invalid
                    await AsyncStorage.removeItem('token');
                    setToken(null);
                }
            }
        } catch (e) {
            console.error('Failed to load auth data', e);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (data: any) => {
        const res = await apiClient.post('/auth/login', data);
        if (res.token) {
            setToken(res.token);
            setUser(res.user);
            await AsyncStorage.setItem('token', res.token);
        }
    };

    const register = async (data: any) => {
        const res = await apiClient.post('/auth/register', data);
        if (res.token) {
            setToken(res.token);
            setUser(res.user);
            await AsyncStorage.setItem('token', res.token);
        }
    };

    const logout = async () => {
        try {
            await apiClient.post('/auth/logout', {});
        } catch (e) {
            // ignore
        }
        setUser(null);
        setToken(null);
        await AsyncStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
