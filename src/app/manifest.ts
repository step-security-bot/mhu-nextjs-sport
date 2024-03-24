import { MetadataRoute } from 'next';

export const APP_NAME = 'Ügyészségi sporttalálkozó';
export const APP_DEFAULT_TITLE = 'Ügyészségi sporttalálkozó';
export const APP_TITLE_TEMPLATE = '%s | Ügyészségi sporttalálkozó';
export const APP_DESCRIPTION = 'Ügyészségi sporttalálkozó weboldala.';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    icons: [
      {
        sizes: '512x512',
        src: '/favicon/android-chrome-512x512.png',
        type: 'image/png',
      },
      {
        sizes: '192x192',
        src: '/favicon/android-chrome-192x192.png',
        type: 'image/png',
      },
    ],
    theme_color: '#650e1d',
    background_color: '#650e1d',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    screenshots: [
      {
        src: '/screenshots/landing-desktop.webp',
        sizes: '1884x1042',
        type: 'image/webp',
        // @ts-expect-error until Next officially supports it
        form_factor: 'wide',
        label: 'Főoldal',
      },
      {
        src: '/screenshots/landing-mobile.webp',
        sizes: '944x1169',
        type: 'image/webp',
        // @ts-expect-error until Next officially supports it
        form_factor: 'narrow',
        label: 'Főoldal',
      },
    ],
  };
}
