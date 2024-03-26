import Link from 'next/link';

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors
      duration-200
      ease-in-out bg-primary text-bg-contrast hover:bg-primary-600 focus-visible:outline focus-visible:outline-2
      focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:bg-primary-800"
    >
      Vissza a főoldalra
    </Link>
  );
}
