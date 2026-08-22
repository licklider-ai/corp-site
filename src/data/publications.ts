export type PublicationCategory = 'Research' | 'Engineering' | 'News';

export type PublicationItem = {
  category: PublicationCategory;
  type: string;
  date: string;
  sortKey: string;
  title: string;
  summary: string;
  href: string;
  status: string;
};

export const PUBLICATIONS: PublicationItem[] = [
  {
    category: 'Research',
    type: 'Publication',
    date: 'August 23, 2026',
    sortKey: '2026-08-23',
    title: 'Correctly Rounded or Refused — preprint v0.2',
    summary:
      'A preprint on a certified numerical contract for the paired Student-t test in IEEE binary64.',
    href: '/research/correctly-rounded-or-refused/',
    status: 'Preprint v0.2 — not peer reviewed',
  },
  {
    category: 'Engineering',
    type: 'Upstream report',
    date: 'August 22, 2026',
    sortKey: '2026-08-22',
    title: 'An extreme-tail sign error in SciPy’s Student-t quantile',
    summary:
      'A reproducible wrong-sign and wrong-finiteness result, reported to SciPy and routed upstream to Boost.',
    href: '/engineering/scipy-student-t-extreme-tail/',
    status: 'Open upstream issue — no fix accepted or released',
  },
  {
    category: 'News',
    type: 'Product',
    date: 'August 16, 2026',
    sortKey: '2026-08-16',
    title: 'nomue verifier Release 1 candidate is now public',
    summary:
      'The pre-release local verifier is available for inspection and scoped fixture-based testing.',
    href: '/news/nomue-verifier-release-1-candidate/',
    status: 'Pre-release — package 0.2.1-rc.0',
  },
];

export const publicationsFor = (category: PublicationCategory) =>
  PUBLICATIONS.filter((item) => item.category === category).sort((a, b) =>
    b.sortKey.localeCompare(a.sortKey),
  );
