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
      'A preprint on checking the numerical accuracy of paired Student-t test results before software returns them.',
    href: '/research/correctly-rounded-or-refused/',
    status: 'Preprint v0.2 — not peer reviewed',
  },
  {
    category: 'Engineering',
    type: 'Bug report',
    date: 'August 23, 2026',
    sortKey: '2026-08-23',
    title: 'An extreme-tail sign error in SciPy’s Student-t quantile',
    summary:
      'A SciPy bug can return positive infinity instead of a large negative value for an extreme-tail Student-t quantile.',
    href: '/engineering/scipy-student-t-extreme-tail/',
    status: 'Open SciPy issue — no fix accepted or released',
  },
  {
    category: 'News',
    type: 'Product preview',
    date: 'August 16, 2026',
    sortKey: '2026-08-16',
    title: 'nomue verifier Release 1 candidate is now public',
    summary:
      'A pre-release version of the local nomue verifier is available for anyone to inspect and test.',
    href: '/news/nomue-verifier-release-1-candidate/',
    status: 'Pre-release — version 0.2.1-rc.0',
  },
];

export const publicationsFor = (category: PublicationCategory) =>
  PUBLICATIONS.filter((item) => item.category === category).sort((a, b) =>
    b.sortKey.localeCompare(a.sortKey),
  );
