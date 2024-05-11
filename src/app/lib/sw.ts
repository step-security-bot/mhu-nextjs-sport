import { defaultCache } from '@serwist/next/worker';
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import { Serwist } from 'serwist';
// import { app } from '@/app/lib/firebase';
// import { getMessaging, onBackgroundMessage, isSupported } from '@firebase/messaging/sw';
// import { getToken } from 'firebase/messaging';

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  // importScripts: ['/firebase-messaging-sw.js'],
});

serwist.addEventListeners();
// Put your service worker logic here. https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// isSupported()
//   .then(async (supported) => {
//     console.log('Firebase Messaging is supported: ', supported);
//     if (supported) {
//       const messaging = getMessaging(app);
//       await getToken(messaging, {
//         vapidKey: process.env['NEXT_PUBLIC_VAPID_PUBLIC_KEY'],
//         serviceWorkerRegistration: self.registration,
//       });
//       onBackgroundMessage(messaging, (payload) => {
//         console.log('Message received in service worker', payload);
//         // const notificationTitle = 'Background Message Title';
//         // const notificationOptions = {
//         //   body: 'Background Message body.',
//         //   icon: '/icons/report-analytics.svg',
//         // } satisfies NotificationOptions;
//
//         // self.registration.showNotification(notificationTitle, notificationOptions).catch((error) => {
//         //   console.error('Notification registration failed: ', error);
//         // });
//       });
//     }
//   })
//   .catch((error) => {
//     console.error('Firebase Messaging is not supported: ', error);
//   });
