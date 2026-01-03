import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainTabs from './MainTabs';
import { FloatingActionButton } from '../components/navigation/FloatingActionButton';

export function MainTabsWithFAB() {
  const navigation = useNavigation();

  const handleFABPress = () => {
    navigation.navigate('AddTransaction' as never);
  };

  return (
    <View style={{ flex: 1 }}>
      <MainTabs />
      <FloatingActionButton onPress={handleFABPress} />
    </View>
  );
}
