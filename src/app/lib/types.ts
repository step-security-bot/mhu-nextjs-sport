import { z } from 'zod';
export const Result = z.enum([
  'Labdarúgás',
  'Úszás',
  'Futás',
  'Asztalitenisz',
  'Súlylökés',
  'Darts',
  'Kosárlabda',
  'Csapatverseny',
]);
export type Result = z.infer<typeof Result>;

export const ResultType = z.enum(['xlsx', 'pdf']);
export type ResultType = z.infer<typeof ResultType>;
export type ResultItem = { url: string; type: ResultType; title: Result };
