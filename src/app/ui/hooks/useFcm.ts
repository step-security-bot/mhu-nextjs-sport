import useFcmToken from '@/app/ui/hooks/useFcmToken';

import { useEffect, useState } from 'react';
import { getMessaging, MessagePayload } from '@firebase/messaging';
import { onMessage } from 'firebase/messaging';
import { app } from '@/app/lib/firebase';

export default function useFcm({
  shouldRequestNotifications,
}: Readonly<{
  shouldRequestNotifications?: boolean;
}>) {
  const fcmToken = useFcmToken({ shouldRequestNotifications });
  const [messages, setMessages] = useState<MessagePayload[]>([]);
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const messaging = getMessaging(app);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Message received in react', payload);
        setMessages((messages) => [...messages, payload]);
      });
      return () => unsubscribe();
    }
    return () => {};
  }, [fcmToken]);
  return { fcmToken, messages };
}
