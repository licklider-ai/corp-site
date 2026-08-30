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
    category: 'Engineering',
    type: 'Implementation note',
    date: 'August 31, 2026',
    sortKey: '2026-08-31',
    title: 'Building paired-t numerical tables and input-specific error checks',
    summary:
      'We expanded two paired-t numerical tables to 200 reviewed values each, connected one to the evaluator, and built input-specific error checks without declaring protocol support.',
    href: '/engineering/building-paired-t-tables-and-error-checks/',
    status:
      'Reviewed table evidence and integration; error checks remain candidate — not protocol support',
  },
  {
    category: 'Engineering',
    type: 'Implementation note',
    date: 'August 30, 2026',
    sortKey: '2026-08-30',
    title: 'Testing a paired-t evaluator at floating-point boundaries',
    summary:
      'We built and independently reviewed a deterministic paired-t probability evaluator and boundary evidence while leaving accuracy bounds, supported inputs, and protocol registration open.',
    href: '/engineering/testing-paired-t-floating-point-boundaries/',
    status: 'Reviewed candidate boundary evidence — not protocol support',
  },
  {
    category: 'Engineering',
    type: 'Technical method',
    date: 'August 28, 2026',
    sortKey: '2026-08-28',
    title: 'Certifying paired-t numerical evidence before protocol support',
    summary:
      'We built and independently reviewed a proof pipeline for paired-t p-values and critical values before deciding what nomue Protocol will support.',
    href: '/engineering/certifying-paired-t-numerical-evidence/',
    status: 'Reviewed candidate evidence — not protocol support',
  },
  {
    category: 'Engineering',
    type: 'Upstream report',
    date: 'August 26, 2026',
    sortKey: '2026-08-26',
    title: 'A SciPy exact Wilcoxon p-value error, fixed upstream',
    summary:
      'SciPy’s exact Wilcoxon path could return zero for a positive p-value. SciPy diagnosed the cause and merged a fix the same day it was reported.',
    href: '/engineering/scipy-wilcoxon-exact-pvalue/',
    status: 'Fix merged in SciPy — not yet released',
  },
  {
    category: 'News',
    type: 'Product',
    date: 'August 24, 2026',
    sortKey: '2026-08-24',
    title: 'nomue Protocol Release 1 Public Draft is now available',
    summary:
      'The first public draft of the nomue Protocol is available with local verification, public fixtures, and signed release artifacts.',
    href: '/news/nomue-protocol-release-1/',
    status: 'Public Draft — experimental',
  },
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
    status: 'Fix merged in Boost.Math — not yet released',
  },
  {
    category: 'News',
    type: 'Product preview',
    date: 'August 16, 2026',
    sortKey: '2026-08-16',
    title: 'nomue verifier Release 1 candidate is now public',
    summary:
      'The experimental local verifier is available for anyone to inspect and test and is now pinned to nomue Protocol Release 1.',
    href: '/news/nomue-verifier-release-1-candidate/',
    status: 'Experimental verifier — 0.2.1-rc.0; pinned to Protocol Release 1',
  },
];

export const publicationsFor = (category: PublicationCategory) =>
  PUBLICATIONS.filter((item) => item.category === category).sort((a, b) =>
    b.sortKey.localeCompare(a.sortKey),
  );
