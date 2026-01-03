import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { Text } from 'react-native-paper';

interface SocialLoginButtonProps {
  provider: 'google' | 'apple';
  onPress: () => void;
  loading?: boolean;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onPress,
  loading = false,
}) => {
  const getProviderConfig = () => {
    switch (provider) {
      case 'google':
        return {
          label: 'Continue with Google',
          icon: 'G',
        };
      case 'apple':
        return {
          label: 'Continue with Apple',
          icon: '',
        };
    }
  };

  const config = getProviderConfig();

  if (provider === 'apple' && Platform.OS !== 'ios') {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#667eea" />
      ) : (
        <>
          <Text style={styles.icon}>{config.icon}</Text>
          <Text style={styles.label}>{config.label}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  icon: {
    fontSize: 20,
    fontWeight: '700',
    marginRight: 12,
    color: '#FFFFFF',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
