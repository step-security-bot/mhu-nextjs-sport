import Link from 'next/link';

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="bg-primary rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm text-bg-contrast hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
    >
      Vissza a főoldalra
    </Link>
  );
}
