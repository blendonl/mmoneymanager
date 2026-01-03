import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { apiClient } from '../api/client';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

class PushNotificationService {
  async registerForPushNotifications() {
    if (!Device.isDevice) {
      console.log('Push notifications only work on physical devices');
      return null;
    }

    // Request permissions
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('Failed to get push notification permissions');
      return null;
    }

    // Get Expo push token
    const projectId = Constants.expoConfig?.extra?.eas?.projectId;
    if (!projectId) {
      console.log('No Expo project ID found');
      return null;
    }

    const token = await Notifications.getExpoPushTokenAsync({
      projectId,
    });

    // Register token with backend
    try {
      await apiClient.post('/notification-preferences/devices', {
        expoPushToken: token.data,
        platform: Platform.OS,
        deviceId: Constants.deviceId || undefined,
        deviceName: Device.modelName || undefined,
      });

      console.log('Push token registered:', token.data);
      return token.data;
    } catch (error) {
      console.error('Failed to register push token:', error);
      return null;
    }
  }

  setupNotificationListeners(
    onNotificationReceived: (notification: any) => void,
    onNotificationTapped: (response: any) => void,
  ) {
    // Notification received while app is foregrounded
    const receivedListener =
      Notifications.addNotificationReceivedListener(onNotificationReceived);

    // User tapped on notification
    const responseListener =
      Notifications.addNotificationResponseReceivedListener(
        onNotificationTapped,
      );

    return () => {
      receivedListener.remove();
      responseListener.remove();
    };
  }

  async setBadgeCount(count: number) {
    await Notifications.setBadgeCountAsync(count);
  }
}

export const pushNotificationService = new PushNotificationService();
