import { useState, useEffect } from 'react';

export default function useNotificationPermission({
  shouldRequestNotifications,
}: Readonly<{
  shouldRequestNotifications?: boolean;
}>): NotificationPermission {
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if (!shouldRequestNotifications) {
      return;
    }
    const inline = async () => {
      handler();
      await Notification.requestPermission();
      handler();
      const notification = await navigator.permissions.query({ name: 'notifications' });
      notification.onchange = handler;
    };
    void inline();
  }, [shouldRequestNotifications]);

  function handler() {
    setNotificationPermission(Notification.permission);
  }

  return notificationPermission;
}
