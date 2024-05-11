'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { env } from '@/app/lib/env';
import { urlBase64ToUint8Array } from '@/app/lib/utils';
import { getToken, Messaging, onMessage } from 'firebase/messaging';
import { app } from '@/app/lib/firebase';
import { getMessaging } from '@firebase/messaging';

export default function NotificationsToggle() {
  const [notifications, setNotifications] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messaging, setMessaging] = useState<Messaging | null>(null);

  useEffect(() => {
    setMounted(true);
    Notification.permission === 'granted' ? setNotifications(true) : setNotifications(false);
    const messaging = getMessaging(app);
    setMessaging(messaging);
    // if (notifications) {
    onMessage(messaging, (payload) => {
      console.log('Message received in react', payload);
      alert(`Message received in react ${payload.notification?.title} ${payload.notification?.body}`);
      // ...
    });
    // }
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleNotifications = async (): Promise<boolean> => {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration == null) {
        alert('Nem lehetséges az értesítések kezelése ezen az eszközön.');
        return false;
      }
      const subscribed = await registration.pushManager.getSubscription();
      if (notifications) {
        // todo unsubscribe
        await subscribed?.unsubscribe();
        setNotifications(false);
        return true;
      }
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        setNotifications(false);
        return false;
      }
      if (subscribed) {
        // we can return
        setNotifications(true);
        return true;
      }

      const token = await getToken(messaging!, {
        vapidKey: env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
        serviceWorkerRegistration: registration,
      });
      // const subscription = await registration.pushManager.subscribe({
      //   userVisibleOnly: true,
      //   applicationServerKey: urlBase64ToUint8Array(token, window),
      // });
      setNotifications(true);
      return true;
    } catch (e) {
      console.error(e);
    }
    setNotifications(false);
    return false;
  };

  return (
    <label
      className="dui-swap dui-swap-rotate"
      title={`Értesítések ${notifications ? 'kikapcsolása' : 'bekapcsolása'}`}
    >
      <input
        id={'notifications-mode-toggle'}
        type="checkbox"
        className={`hidden`}
        // ref={(input) => {
        //   if (input) {
        //     input.checked = notifications;
        //   }
        // }}
        checked={notifications}
        onChange={(e) => {
          if (notifications === e.target.checked) {
            e.preventDefault();
          }
          if (confirm(notifications ? 'Értesítések kikapcsolása?' : 'Értesítések bekapcsolása')) {
            void toggleNotifications().then((result) => {
              if (!result) {
                // if failed, don't change the state
                e.preventDefault();
              }
            });
          }
        }}
      />
      <FontAwesomeIcon icon={faBell} className={`dui-swap-off size-7 text-primary dark:text-bg-contrast`} />
      <FontAwesomeIcon icon={faBellSlash} className={`dui-swap-on size-7 text-primary dark:text-bg-contrast`} />
    </label>
  );
}
