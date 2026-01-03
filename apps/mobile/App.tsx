import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import { FamilyProvider } from './src/context/FamilyContext';
import { NotificationProvider } from './src/context/NotificationContext';
import { ThemeProvider, useAppTheme } from './src/theme';
import AppNavigator from './src/navigation/AppNavigator';

function AppContent() {
  const { theme } = useAppTheme();

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <PaperProvider theme={theme}>
        <AuthProvider>
          <FamilyProvider>
            <NotificationProvider>
              <AppNavigator />
            </NotificationProvider>
          </FamilyProvider>
        </AuthProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
