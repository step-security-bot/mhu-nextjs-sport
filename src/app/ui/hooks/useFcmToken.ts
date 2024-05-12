import useNotificationPermission from '@/app/ui/hooks/useNotificationPermission';
import { useEffect, useState } from 'react';
import { getMessaging, isSupported } from '@firebase/messaging';
import { getToken } from 'firebase/messaging';
import { app } from '@/app/lib/firebase';
import { env } from '@/app/lib/env';

export default function useFcmToken({
  shouldRequestNotifications,
}: Readonly<{
  shouldRequestNotifications?: boolean;
}>): string | null {
  const notificationPermission = useNotificationPermission({ shouldRequestNotifications });
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  useEffect(() => {
    const retrieveFcmToken = async () => {
      // not on client or no permission
      if (!(typeof window !== 'undefined' && 'serviceWorker' in navigator) || notificationPermission !== 'granted') {
        return;
      }

      const isFcmSupported = await isSupported();
      if (!isFcmSupported) {
        return;
      }
      const messaging = getMessaging(app);
      const registration = await navigator.serviceWorker.getRegistration();
      const fcmToken = await getToken(messaging, {
        serviceWorkerRegistration: registration,
        vapidKey: env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
      });
      setFcmToken(fcmToken);
    };
    void retrieveFcmToken();
  }, [notificationPermission]);

  return fcmToken;
}
