import { Metadata } from 'next';
import ResultsTab from '@/app/ui/results-tab';
import { Suspense } from 'react';
import Skeleton from '@/app/ui/skeleton';
import { canEditResults } from '@/app/lib/actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Eredmények',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    sportag?: string;
  };
}) {
  const canEdit = await canEditResults();
  const sportag = searchParams?.sportag || '';
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <Suspense key={sportag} fallback={<Skeleton />}>
        <ResultsTab className={`w-full`} canEdit={canEdit} />
      </Suspense>
    </main>
  );
}
