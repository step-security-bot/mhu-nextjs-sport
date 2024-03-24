import Image from 'next/image';
import LandingLink from '@/app/ui/buttons/landing-link';
import { Metadata } from 'next';
import { APP_DEFAULT_TITLE } from '@/app/manifest';

export const metadata: Metadata = {
  title: `2024 - Nyíregyháza | ${APP_DEFAULT_TITLE}`,
};

export default function Home() {
  return (
    <>
      <Image
        alt="Nyíregyházi ügyészség épülete"
        src={`https://utfs.io/f/dc22aeff-6c14-4963-b82e-afe5f800596a-pphhpa.JPG`}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
        priority={true}
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

        <div className="z-10 text-balance rounded-xl p-8 text-center drop-shadow-lg bg-accent-800/95">
          <h1 className="text-4xl font-bold tracking-tight text-bg-contrast sm:text-6xl">
            Ügyészségi sporttalálkozó, 2024 - Nyíregyháza
          </h1>
        </div>

        <div className="bg-primary/95 mb-32 grid rounded-lg text-center xl:mb-0 xl:w-full xl:max-w-6xl xl:grid-cols-5 xl:text-left">
          <LandingLink href={`/sportagak`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Sportágak{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
          </LandingLink>
          <LandingLink href={`/helyszinek`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Helyszínek{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
          </LandingLink>
          <LandingLink href={`/szallas`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Szállás{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
          </LandingLink>
          <LandingLink href={`/programok`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Programok{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-balance text-sm opacity-50`}></p>
          </LandingLink>
          <LandingLink href={`/eredmenyek`}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Eredmények{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-balance text-sm opacity-50`}></p>
          </LandingLink>
        </div>
      </main>
    </>
  );
}
