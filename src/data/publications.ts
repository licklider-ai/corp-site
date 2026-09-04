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
    type: 'Research note',
    date: 'September 4, 2026',
    sortKey: '2026-09-04',
    title:
      'What three welfare guidance documents define, and what they leave to statistics',
    summary:
      'Three animal-welfare guidance documents define exactly when a study must end and what is recorded, but none says whether the measurement it prevented still exists.',
    href: '/research/humane-endpoints-and-the-unmeasured-outcome/',
    status:
      'Source-bounded research finding — two independent close reviews; not peer reviewed; FND-1 gate open',
  },
  {
    category: 'Engineering',
    type: 'Upstream report',
    date: 'September 3, 2026',
    sortKey: '2026-09-03',
    title: 'A Julia signed-rank p-value above 1, fixed on master',
    summary:
      'HypothesisTests.jl returned 1.25 for an exact two-sided signed-rank p-value. A matching correction is merged on master, though no registered release contains it yet.',
    href: '/engineering/julia-signed-rank-pvalue-above-one/',
    status:
      'Matching fix merged in HypothesisTests.jl — issue open; awaiting a registered release',
  },
  {
    category: 'News',
    type: 'Product',
    date: 'September 2, 2026',
    sortKey: '2026-09-02',
    title: 'nomue Record Verifier MCP release candidate is available',
    summary:
      'The public @licklider/nomue-mcp package exposes a method-neutral Record verification tool over local stdio; the current release supports the Release 1 Welch bundle.',
    href: '/news/nomue-mcp-on-npm/',
    status:
      'Public local MCP release candidate — npm rc 0.2.0-rc.1; official MCP Registry',
  },
  {
    category: 'Research',
    type: 'Research note',
    date: 'September 1, 2026',
    sortKey: '2026-09-01',
    title: 'Why a statistical method name is not enough',
    summary:
      'Primary-source review showed why procedure names alone cannot identify statistical guarantees, assumptions, comparison families, or later variants.',
    href: '/research/why-statistical-method-names-are-not-enough/',
    status:
      'Independently checked research note — three source questions closed; wider source review continues; not peer reviewed',
  },
  {
    category: 'News',
    type: 'Product',
    date: 'September 1, 2026',
    sortKey: '2026-09-01',
    title: 'nomue verifier Release 1 candidate is available on npm',
    summary:
      'The public @licklider/nomue-verifier package provides a direct local command for checking supported nomue Release 1 Records.',
    href: '/news/nomue-verifier-on-npm/',
    status: 'Public release candidate — npm latest 0.2.1-rc.0',
  },
  {
    category: 'Engineering',
    type: 'Implementation note',
    date: 'September 1, 2026',
    sortKey: '2026-09-01',
    title: 'From numerical bounds to a controlled paired-t execution candidate',
    summary:
      'We assembled and independently reviewed the final decision package for the paired-t candidate while leaving Protocol ratification, issuance, and support open.',
    href: '/engineering/bounding-paired-t-arithmetic-and-pvalues/',
    status:
      'Independently reviewed final Release 2 candidate review-readiness — not ratified, issued, or supported',
  },
  {
    category: 'Engineering',
    type: 'Upstream report',
    date: 'September 1, 2026',
    sortKey: '2026-09-01',
    title: 'R’s exact Wilcoxon test can return p-values outside the valid range',
    summary:
      'R’s exact Wilcoxon test returned negative p-values and a value above 1 on a zero-difference input; we reported it with three independent exact-arithmetic checks.',
    href: '/engineering/r-wilcoxon-exact-pvalue-out-of-range/',
    status: 'Reported to R — PR#19144 open and unconfirmed',
  },
  {
    category: 'Engineering',
    type: 'Implementation note',
    date: 'August 31, 2026',
    sortKey: '2026-08-31',
    title: 'Tracing a paired-t calculation from observations to p-value',
    summary:
      'We connected paired observations to a p-value in one reviewed trace; later work closed its two numerical error ledgers and added a reviewed interval trace.',
    href: '/engineering/tracing-paired-t-from-observations-to-pvalue/',
    status:
      'Independently reviewed p-value and confidence-interval execution traces; interval proof continues',
  },
  {
    category: 'Engineering',
    type: 'Implementation note',
    date: 'August 31, 2026',
    sortKey: '2026-08-31',
    title: 'Building paired-t numerical tables and input-specific error checks',
    summary:
      'We built two reviewed 200-value tables and input-specific error checks; later decisions selected the p-value bound and one table for candidate interval work.',
    href: '/engineering/building-paired-t-tables-and-error-checks/',
    status:
      'Two independently reviewed 200-value tables and input-specific error checks — candidate Release 2 work',
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
    status:
      'Independently reviewed deterministic evaluator and floating-point boundary evidence — candidate Release 2 work',
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
    status:
      'Independently reviewed proof pipeline for paired-t p-values and critical values — candidate Release 2 work',
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
    status: 'Fix merged in SciPy — awaiting a SciPy release',
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
    status: 'Fix merged in Boost.Math — awaiting a Boost release',
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
