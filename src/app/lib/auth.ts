import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/app/db/db';
import Google from 'next-auth/providers/google';
import SimpleLogin, { SimpleLoginProfile } from '@/app/lib/simple-login';
import { env } from '@/app/lib/env';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    SimpleLogin<SimpleLoginProfile>({
      clientId: env.SIMPLELOGIN_CLIENT_ID,
      clientSecret: env.SIMPLELOGIN_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name === '' ? 'SimpleLogin felhasználó' : profile.name,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});
