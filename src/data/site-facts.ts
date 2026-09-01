/**
 * Stable public facts reused across the corporate narrative, product pages, and
 * agent-readable documentation. Exact Protocol and product semantics remain owned
 * by their upstream repositories; this module records only the public wording used
 * by this site.
 */

export const COMPANY_POSITION =
  'Licklider builds middleware for bounded verification calls across AI research, starting with scientific statistics.';

export const VERIFICATION_CALL_DEFINITION =
  'A verification call sends one bounded property of an analysis, result, or evidence chain to a separate capability. It returns a machine-readable decision with the check performed, the evidence and version used, the next action, and the limit of the result.';

export const NOMUE_POSITION =
  'nomue is Licklider\'s scientific verification product. It separates correctness-critical statistical decisions and numerical checks from the research model that orchestrates the work.';

export const PUBLIC_RELEASE = {
  protocol: 'nomue Protocol Release 1 Public Draft',
  protocolMaturity: 'public and experimental',
  bundle: 'urn:nomue:bundle:itgc-guarantee:0.2.1-draft.1',
  profile: 'independent two-group continuous outcomes',
  procedure: 'two-sided Welch two-sample t procedure',
  verifierPackage: '0.2.1-rc.0',
  verifierMaturity: 'experimental release-candidate package',
  npmPackage: '@licklider/nomue-verifier',
  npmDistTag: 'latest',
  npmAccess: 'public',
  npmUrl: 'https://www.npmjs.com/package/@licklider/nomue-verifier',
  supportedOperatingSystems: ['Linux', 'macOS', 'Windows'],
  testedNodeVersions: ['20', '22'],
  protocolUrl: 'https://github.com/licklider-ai/nomue-protocol',
  verifierUrl: 'https://github.com/licklider-ai/nomue-verifier',
  verifierCiUrl:
    'https://github.com/licklider-ai/nomue-verifier/actions/workflows/ci.yml',
  verifierLicenseUrl:
    'https://github.com/licklider-ai/nomue-verifier/blob/main/LICENSE',
} as const;

export const PUBLIC_CAPABILITY =
  `Anyone can install the public ${PUBLIC_RELEASE.npmPackage} package from npm and run nomue verify locally to check a conforming Release 1 Record for ${PUBLIC_RELEASE.profile} under the ${PUBLIC_RELEASE.procedure}. It recomputes the covered numerical quantities and returns a machine-readable report of the scoped checks without calling a nomue server after installation.`;

export const PRODUCT_CAPABILITY =
  'The nomue product capability for Welch verification is implemented: it protects material scientific declarations from silent inference, applies the supported decision path, runs deterministic numerical checks, and returns structured outcomes and next actions for a research agent.';

export const PRODUCT_RELEASE_BOUNDARY =
  'Use the npm-published Release 1 verifier, the Protocol, and their machine-readable documentation today. Hosted nomue API or MCP access is not open; any public release will be announced in Latest and the RSS feed.';

export const NOMUE_GLOBAL_INSTALL_COMMAND =
  `npm install --global ${PUBLIC_RELEASE.npmPackage}`;

export const NOMUE_NPX_COMMAND =
  `npx --yes ${PUBLIC_RELEASE.npmPackage} verify ./record.json --format json`;

export const NOMUE_VERIFY_COMMAND =
  'nomue verify ./record.json --format json';

export const NOMUE_CLI_USAGE =
  'usage: nomue <verify|canonicalize|digest> <record.json> [--format json|json-compact|human]';

export const PAIRED_T_BOUNDARY =
  'Paired-t is the next verification method under active development and open Release 2 RFC review. It will join public support only after that evidence and release process is complete.';

export const PAIRED_T_RFC_URL =
  'https://github.com/licklider-ai/nomue-protocol/issues/25';

export const EVALUATION_BOUNDARY =
  'A controlled comparison is being built to measure the incremental effect of adding nomue to research agents. Comparative performance results will be published after the scored evaluation and adversarial review are complete.';

export const PLATFORM_SCOPE =
  'Licklider is building the verification-call layer for AI research. Statistics is the first bounded implementation; the platform can expand to other research checks as each capability is evidenced, versioned, and released.';

export const MARKET_SCOPE =
  'Licklider\'s market scope is the verification calls that arise across AI research, not a single research-workflow SaaS category. That infrastructure category is broader than the capabilities supported today.';

export const CORE_NON_CLAIMS = [
  'the truth of input data or researcher declarations',
  'the overall correctness of a research project',
  'the truth of a scientific or causal conclusion',
  'validity for a method outside an explicitly supported scope',
  'publication, regulatory, or clinical acceptance',
] as const;

export const UPSTREAM_CONTRIBUTIONS = [
  {
    project: 'SciPy',
    title: 'SciPy exact Wilcoxon p-value error',
    summary:
      'We reported an exact-tail error that returned zero for a positive p-value. SciPy diagnosed the tail-choice error and merged a regression-tested correction.',
    href: '/engineering/scipy-wilcoxon-exact-pvalue/',
    status: 'Fix merged upstream',
    outcome: 'fix_merged',
    comparisonLabel: 'Before patch → after patch',
    observed: '0.0',
    reference: '8.12511917099255e-17',
    evidenceHref:
      'https://github.com/scipy/scipy/commit/6dbd21acb0ab2ad22a06b6351f83a47743d8b0b5',
    evidenceLabel: 'SciPy commit 6dbd21a',
    credit: 'Authored by mdhaber · merged by j-bowhay',
  },
  {
    project: 'Boost.Math / SciPy',
    title: 'Student-t extreme-tail sign error',
    summary:
      'We reported a SciPy Student-t quantile returning positive infinity instead of a finite negative value. Boost.Math reproduced it and merged a correction with regression tests.',
    href: '/engineering/scipy-student-t-extreme-tail/',
    status: 'Fix merged upstream',
    outcome: 'fix_merged',
    comparisonLabel: 'Returned → expected',
    observed: '+∞',
    reference: 'finite negative quantile',
    evidenceHref:
      'https://github.com/boostorg/math/commit/d9fc176b77c2bba99279d1a5cb340a1cf97602f5',
    evidenceLabel: 'Boost.Math commit d9fc176',
    credit: 'Authored and merged by jzmaddock',
  },
  {
    project: 'R',
    title: 'R exact Wilcoxon out-of-range p-values',
    summary:
      'We reported negative p-values and a value above 1 with independent exact-arithmetic checks. R Bugzilla PR#19144 remains open and unconfirmed.',
    href: '/engineering/r-wilcoxon-exact-pvalue-out-of-range/',
    status: 'Report open upstream',
    outcome: 'report_open',
    comparisonLabel: 'R result → exact reference',
    observed: '-7.55e-15',
    reference: '2.59e-18',
    evidenceHref: 'https://bugs.r-project.org/show_bug.cgi?id=19144',
    evidenceLabel: 'R Bugzilla PR#19144',
    credit: 'Open and unconfirmed by R Core',
  },
] as const;
