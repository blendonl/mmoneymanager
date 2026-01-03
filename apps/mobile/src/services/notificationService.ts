import { apiClient } from '../api/client';

export const notificationService = {
  async getNotifications(params?: {
    page?: number;
    limit?: number;
    type?: string;
    unreadOnly?: boolean;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.type) queryParams.append('type', params.type);
    if (params?.unreadOnly)
      queryParams.append('unreadOnly', params.unreadOnly.toString());

    const query = queryParams.toString();
    const endpoint = `/notifications${query ? `?${query}` : ''}`;

    const response = await apiClient.get(endpoint);
    return response.data;
  },

  async getUnreadCount() {
    return await apiClient.get('/notifications/unread-count');
  },

  async markAsRead(id: string) {
    return await apiClient.patch(`/notifications/${id}/read`, {});
  },

  async markAllAsRead() {
    return await apiClient.post('/notifications/mark-all-read', {});
  },

  async deleteNotification(id: string) {
    return await apiClient.delete(`/notifications/${id}`);
  },

  async getPreferences() {
    return await apiClient.get('/notification-preferences');
  },

  async updatePreferences(preferences: any) {
    return await apiClient.put('/notification-preferences', preferences);
  },
};
