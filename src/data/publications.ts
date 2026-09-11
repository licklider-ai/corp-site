export type PublicationCategory = 'Research' | 'Engineering' | 'News' | 'Blog';

type RecordedPublicationTime = {
  at: string;
  evidence: string;
};

export type PublicationItem = {
  category: PublicationCategory;
  type: string;
  date: string;
  updated?: string;
  publishedTime?: RecordedPublicationTime;
  updatedTime?: RecordedPublicationTime;
  sortKey: string;
  title: string;
  summary: string;
  href: string;
  status: string;
};

// Vercel's successful production-deployment notification, not Git merge time.
// These are recorded completion times, not a claim about the first HTTP response.
const PRODUCTION_26: RecordedPublicationTime = {
  at: '2026-09-11T07:57:49Z',
  evidence: 'https://vercel.com/licklidermvp/website/8V4Pzki1toK4i43sA3RmXpzHmgJy',
};
const PRODUCTION_29: RecordedPublicationTime = {
  at: '2026-09-11T21:21:55Z',
  evidence: 'https://vercel.com/licklidermvp/website/4wPeCuBQ2xLdrdEhYxpRp21aqVnU',
};

export const PUBLICATIONS: PublicationItem[] = [
  {
    category: 'Engineering',
    type: 'Implementation note',
    date: 'September 11, 2026',
    sortKey: '2026-09-11',
    title: 'When a verification call must discard its result',
    publishedTime: PRODUCTION_29,
    summary: 'An experimental Holm verifier connects Record checks to shared execution budgets, operating-system limits and cleanup evidence before deciding whether a result can be returned.',
    href: '/engineering/when-a-verification-call-must-discard-its-result/',
    status: 'Unissued Holm candidate.3; bounded execution evidence; no additional supported capability',
  },
  {
    category: 'Engineering',
    type: 'Implementation note',
    date: 'September 11, 2026',
    sortKey: '2026-09-11',
    title: 'Binding Holm corrections to the intended comparisons',
    publishedTime: PRODUCTION_26,
    updatedTime: PRODUCTION_29,
    updated: 'September 11, 2026',
    summary: 'An experiment checks exact Holm adjustments together with the expected declaration and supplied p-values, including changes that leave the displayed answer unchanged.',
    href: '/engineering/binding-holm-corrections-to-comparisons/',
    status: 'Original binding experiment preserved; unissued candidate.3 adds Record and execution controls; no additional supported capability',
  },
  {
    category: 'Engineering',
    type: 'Implementation note',
    date: 'September 11, 2026',
    sortKey: '2026-09-11',
    title: 'Checking factorial probability evidence against the raw observations',
    publishedTime: PRODUCTION_26,
    summary: 'A bounded experiment connects raw observations to exact F ratios and checks that submitted probability intervals contain the recomputed enclosures for all three effects.',
    href: '/engineering/checking-factorial-probability-evidence/',
    status: 'Bounded experiment integrated into the public research archive; no additional supported capability',
  },
  {
    "category": "Blog",
    "type": "Practical guide",
    "date": "September 11, 2026",
    "sortKey": "2026-09-11",
    "title": "What to decide before asking an agent to compare several groups",
    "summary": "Specify the comparisons, research conditions, and outputs you need so an agent can propose an analysis that answers your question.",
    "href": "/blog/before-asking-an-agent-to-compare-groups/",
    "status": "Illustrative planning example; not a tested agent workflow"
  },
  {
    updated: 'September 11, 2026',
    category: 'Engineering',
    type: 'Technical method',
    date: 'September 10, 2026',
    sortKey: '2026-09-10',
    title: 'Checking factorial statistics without trusting rounded intermediates',
    updatedTime: PRODUCTION_26,
    summary: 'Exact arithmetic and probability bounds offer a path beyond scaling repairs, while a review shows why matching rounded answers does not certify an interval.',
    href: '/engineering/checking-factorial-statistics-and-tail-bounds/',
    status: 'Reviewed research components now connected experimentally and archived; no additional supported capability',
  },
  {
    "category": "Engineering",
    "type": "Upstream report",
    "date": "September 10, 2026",
    "sortKey": "2026-09-10",
    "title": "A nonzero Studentized-range tail disappears in SciPy",
    "summary": "An exact special-case reference shows SciPy returning zero for a probability near 0.00000002, with no warning in the recorded runs.",
    "href": "/engineering/scipy-studentized-range-tail-loss/",
    "status": "Additional reproducer reported — upstream confirmation pending"
  },
  {
    "category": "Engineering",
    "type": "Upstream report",
    "date": "September 10, 2026",
    "sortKey": "2026-09-10",
    "title": "Exact rescaling can reverse SciPy’s Welch ANOVA decision",
    "summary": "At an extreme input scale, SciPy’s Welch ANOVA changes a p-value from 0.02650 to 0.05611, crossing the 5% threshold without losing input information.",
    "href": "/engineering/scipy-welch-anova-weight-sum-overflow/",
    "status": "Reported upstream — confirmation pending"
  },
  {
    category: 'Engineering',
    type: 'Upstream report',
    date: 'September 10, 2026',
    sortKey: '2026-09-10',
    title: 'Renaming treatment groups changes agricolae’s REGW result',
    summary: 'With observations and group membership unchanged, renaming groups changes a p-value from 0.0363 to 0.0791 and reverses a 5% decision.',
    href: '/engineering/agricolae-regw-treatment-labels/',
    status: 'Reported by email — upstream confirmation pending',
  },
  {
    updated: 'September 10, 2026',
    category: 'News',
    type: 'Public consultation',
    date: 'September 9, 2026',
    sortKey: '2026-09-09',
    title: 'nomue Protocol opens Release 3 public discussion for independent groups and multiple comparisons',
    summary: 'Researchers and developers can comment on how a multi-group analysis should declare its design, comparisons, results, and error-control claims.',
    href: '/news/nomue-protocol-release-3-public-discussion/',
    status: 'Public discussion open — supplied-source proposal; method adoption and numerical support remain pending',
  },
  {
    "category": "Engineering",
    "type": "Technical method",
    "date": "September 9, 2026",
    "sortKey": "2026-09-09",
    "title": "What power-of-two scaling can and cannot repair",
    "summary": "Exact references show when rescaling recovers a factorial F calculation, and when lost inputs or rounding residuals require a different numerical decision.",
    "href": "/engineering/power-scaling-and-factorial-f-statistics/",
    "status": "Reviewed and steward-accepted bounded research; no additional product support"
  },
  {
    updated: 'September 9, 2026',
    "category": "Engineering",
    "type": "Technical method",
    "date": "September 9, 2026",
    "sortKey": "2026-09-09",
    "title": "What “approximate” means for Games–Howell comparisons",
    "summary": "Original-paper checks separate the construction of unequal-variance comparisons from simulation evidence and a guaranteed bound on false positives.",
    "href": "/engineering/games-howell-approximation-and-guarantees/",
    "status": "Reviewed and steward-accepted bounded research; no additional product support"
  },
  {
    updated: 'September 9, 2026',
    "category": "Engineering",
    "type": "Technical method",
    "date": "September 9, 2026",
    "sortKey": "2026-09-09",
    "title": "Comparing with a control and comparing with the best answer different questions",
    "summary": "Source review separates fixed-control tests, step-up and step-down calibration, and intervals that compare each treatment with the best of the others.",
    "href": "/engineering/comparing-with-control-or-best/",
    "status": "Reviewed and steward-accepted bounded research; no additional product support"
  },
  {
    updated: 'September 9, 2026',
    "category": "Engineering",
    "type": "Technical method",
    "date": "September 9, 2026",
    "sortKey": "2026-09-09",
    "title": "What must stay fixed in a multiple-testing graph",
    "summary": "Closed testing and graphical procedures make error control inspectable, but order, weights, stopping rules, and zero-level behavior still need precise definitions.",
    "href": "/engineering/implementing-multiple-testing-graphs/",
    "status": "Reviewed and steward-accepted bounded research; no additional product support"
  },
  {
    updated: 'September 10, 2026',
    category: 'News',
    type: 'Public consultation',
    date: 'September 9, 2026',
    sortKey: '2026-09-09',
    title: 'nomue Protocol opens Release 4 public discussion for two-factor experiments',
    summary: 'Researchers and developers can comment on a proposal connecting assumptions, results, and verification evidence for balanced two-factor experiments.',
    href: '/news/nomue-protocol-release-4-public-discussion/',
    status: 'Public discussion open — specification proposal; numerical support not established',
  },
  {
    category: 'News',
    type: 'Product',
    date: 'September 9, 2026',
    sortKey: '2026-09-09',
    title: 'nomue launches limited Release 1 for agent-callable Welch verification',
    summary:
      'nomue now gives approved recipients a way to call bounded Welch statistical verification from compatible AI agents and HTTP clients.',
    href: '/news/nomue-welch-limited-release-1/',
    status: 'Limited Release 1 — approved recipients only; no public registration',
  },
  {
    updated: 'September 9, 2026',
    category: 'Engineering',
    type: 'Technical method',
    date: 'September 8, 2026',
    sortKey: '2026-09-08',
    title: "What a multiple-comparison procedure actually guarantees",
    summary: "Original-paper checks separated overall tests, individual comparisons, and simultaneous intervals, giving future verification rules a more precise statement of what they protect.",
    href: "/engineering/what-multiple-comparison-procedures-guarantee/",
    status: "Source-reviewed Release 3 research; bounded SR-F source acceptance recorded",
  },
  {
    updated: 'September 9, 2026',
    category: 'Engineering',
    type: 'Technical method',
    date: 'September 8, 2026',
    sortKey: '2026-09-08',
    title: "When floating-point calculations change a tiny factorial effect",
    summary: "A 945-case comparison separated effects lost during input rounding from errors introduced by cell means and QR calculations, including cases where centering did not help.",
    href: "/engineering/floating-point-tiny-factorial-effects/",
    status: "Steward-accepted, independently reviewed bounded Release 4 numerical research",
  },
  {
    updated: 'September 9, 2026',
    category: 'Engineering',
    type: 'Technical method',
    date: 'September 7, 2026',
    sortKey: '2026-09-07',
    title: 'Checking multiple-testing procedures against their original papers',
    summary:
      'Reviewing six original papers clarified multiple-testing guarantees and exposed a numerical table entry that disagrees with its defining equation.',
    href: '/engineering/checking-multiple-testing-against-original-papers/',
    status:
      'Independently reviewed SR-C source evidence with bounded acceptance recorded; Release 3 preparation',
  },
  {
    updated: 'September 7, 2026',
    category: 'Engineering',
    type: 'Upstream report',
    date: 'September 7, 2026',
    sortKey: '2026-09-07',
    title: 'SciPy’s automatic Mann–Whitney U test can change a result when tests are batched',
    summary:
      'An unchanged sample pair crosses the 5% significance threshold when another pair contains repeated values, because SciPy selects one calculation method for the batch.',
    href: '/engineering/scipy-mannwhitneyu-batch-method-selection/',
    status: 'Triaged by a SciPy maintainer into scipy.stats; implementation path confirmed — intended behavior and remedy awaiting decision',
  },
  {
    updated: 'September 9, 2026',
    category: 'Engineering',
    type: 'Upstream report',
    date: 'September 7, 2026',
    sortKey: '2026-09-07',
    title: 'SciPy t-tests can return p=0 or p=1 after exact rescaling',
    summary:
      'SciPy’s one-sample and paired t-tests can reverse a 5% decision after exact power-of-two rescaling because an intermediate variance underflows or overflows.',
    href: '/engineering/scipy-ttest-scale-range-loss/',
    status:
      'SciPy repair proposed in PR #26135; not yet reviewed or merged; issue #26113 open',
  },
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
    updated: 'September 9, 2026',
    category: 'Engineering',
    type: 'Technical method',
    date: 'September 4, 2026',
    sortKey: '2026-09-04',
    title: 'Cataloguing every multi-group procedure before proposing any of them',
    summary:
      'We catalogued 49 multi-group comparison procedures, gave each an explicit disposition, and found only seven backed by primary text we had actually read.',
    href: '/engineering/cataloguing-multi-group-procedures/',
    status:
      'Reviewed catalogue research; bounded Release 3 public discussion now open',
  },
  {
    updated: 'September 11, 2026',
    category: 'Engineering',
    type: 'Upstream report',
    date: 'September 3, 2026',
    sortKey: '2026-09-03',
    title: 'A Julia signed-rank p-value above 1, now fixed in a release',
    summary:
      'HypothesisTests.jl returned 1.25 for an exact two-sided signed-rank p-value. The matching correction shipped in v0.12.0 and remains in v0.12.2.',
    href: '/engineering/julia-signed-rank-pvalue-above-one/',
    status:
      'Matching fix released in v0.12.0; present through v0.12.2; issue open',
  },
  {
    updated: 'September 4, 2026',
    category: 'News',
    type: 'Product',
    date: 'September 2, 2026',
    sortKey: '2026-09-02',
    title: 'nomue Record Verifier MCP release candidate is available',
    summary:
      'The public @licklider/nomue-verifier-mcp package exposes a method-neutral Record verification tool over local stdio; the current release supports the Release 1 Welch bundle.',
    href: '/news/nomue-mcp-on-npm/',
    status:
      'Public local MCP release candidate — npm rc 0.2.0-rc.0; official MCP Registry',
  },
  {
    updated: 'September 4, 2026',
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
    updated: 'September 2, 2026',
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
    updated: 'September 1, 2026',
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
    updated: 'September 1, 2026',
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
    updated: 'August 31, 2026',
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
    updated: 'August 31, 2026',
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
    updated: 'September 1, 2026',
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
    updated: 'September 9, 2026',
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
    updated: 'September 1, 2026',
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

// Date-only legacy records retain day precision; this conversion does not
// represent a publication instant and must never be sent as a feed timestamp.
export const publicationDate = (date: string) =>
  new Date(`${date} 00:00:00 UTC`).toISOString().slice(0, 10);

export const publicationPublished = (item: PublicationItem) =>
  item.publishedTime?.at ?? publicationDate(item.date);

export const publicationModifiedInstant = (item: PublicationItem) =>
  item.updated ? item.updatedTime?.at : item.publishedTime?.at;

export const publicationModified = (item: PublicationItem) =>
  publicationModifiedInstant(item) ?? publicationDate(item.updated ?? item.date);

// Reject timezone drift and unsupported timestamp backfills during the build.
for (const item of PUBLICATIONS) {
  if (publicationDate(item.date) !== item.sortKey) {
    throw new Error(`Publication date/sortKey mismatch: ${item.href}`);
  }
  for (const [record, date] of [
    [item.publishedTime, item.date],
    [item.updatedTime, item.updated],
  ] as const) {
    if (!record) continue;
    if (!date || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(record.at)
      || !Number.isFinite(Date.parse(record.at))
      || new Date(record.at).toISOString().slice(0, 19) + 'Z' !== record.at
      || record.at.slice(0, 10) !== publicationDate(date) || !record.evidence) {
      throw new Error(`Invalid UTC publication time or missing evidence: ${item.href}`);
    }
  }
  if (item.updated && publicationDate(item.updated) < item.sortKey
    || item.publishedTime && item.updatedTime && item.updatedTime.at < item.publishedTime.at) {
    throw new Error(`Update precedes publication: ${item.href}`);
  }
}
