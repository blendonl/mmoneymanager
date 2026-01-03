import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { notificationService } from '../services/notificationService';
import { websocketService } from '../services/websocketService';
import { pushNotificationService } from '../services/pushNotificationService';

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
  data?: any;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  loading: boolean;
  fetchNotifications: () => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  deleteNotification: (id: string) => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user, token } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && token) {
      initializeNotifications();
    }

    return () => {
      websocketService.disconnect();
    };
  }, [user, token]);

  const initializeNotifications = async () => {
    // Register push notifications
    await pushNotificationService.registerForPushNotifications();

    // Connect to WebSocket
    websocketService.connect(token!);

    // Set up WebSocket listeners
    websocketService.on('notification:new', handleNewNotification);
    websocketService.on('notification:toast', handleToastNotification);

    // Fetch initial notifications
    await fetchNotifications();
    await fetchUnreadCount();
  };

  const handleNewNotification = (notification: Notification) => {
    setNotifications((prev) => [notification, ...prev]);
    setUnreadCount((prev) => prev + 1);
    pushNotificationService.setBadgeCount(unreadCount + 1);
  };

  const handleToastNotification = (data: any) => {
    // Could show a toast notification here
    console.log('Toast notification:', data);
  };

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const data = await notificationService.getNotifications();
      setNotifications(data || []);
    } catch (error) {
      console.error('Failed to fetch notifications', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUnreadCount = async () => {
    try {
      const { count } = await notificationService.getUnreadCount();
      setUnreadCount(count);
      pushNotificationService.setBadgeCount(count);
    } catch (error) {
      console.error('Failed to fetch unread count', error);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await notificationService.markAsRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
      );
      const newCount = Math.max(0, unreadCount - 1);
      setUnreadCount(newCount);
      pushNotificationService.setBadgeCount(newCount);
    } catch (error) {
      console.error('Failed to mark as read', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
      pushNotificationService.setBadgeCount(0);
    } catch (error) {
      console.error('Failed to mark all as read', error);
    }
  };

  const deleteNotification = async (id: string) => {
    try {
      await notificationService.deleteNotification(id);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch (error) {
      console.error('Failed to delete notification', error);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        loading,
        fetchNotifications,
        markAsRead,
        markAllAsRead,
        deleteNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider',
    );
  }
  return context;
};
