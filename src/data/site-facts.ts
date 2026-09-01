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
  protocolUrl: 'https://github.com/licklider-ai/nomue-protocol',
  verifierUrl: 'https://github.com/licklider-ai/nomue-verifier',
} as const;

export const PUBLIC_CAPABILITY =
  `Anyone can run the open-source nomue verifier locally to check a conforming Release 1 Record for ${PUBLIC_RELEASE.profile} under the ${PUBLIC_RELEASE.procedure}. It recomputes the covered numerical quantities and returns a machine-readable report of the scoped checks.`;

export const PRODUCT_CAPABILITY =
  'The nomue product capability for Welch verification is implemented: it protects material scientific declarations from silent inference, applies the supported decision path, runs deterministic numerical checks, and returns structured outcomes and next actions for a research agent.';

export const PRODUCT_RELEASE_BOUNDARY =
  'Public product access is being prepared. The public entry points available today are the Protocol, the local verifier, and their machine-readable documentation; a hosted nomue API or MCP endpoint is not yet open.';

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

export const PUBLIC_EVIDENCE = [
  {
    title: 'SciPy exact Wilcoxon p-value error',
    summary:
      'We reported an exact-tail error that could return zero for a positive p-value. SciPy diagnosed the issue and merged a fix; it was not yet released when the report was last updated.',
    href: '/engineering/scipy-wilcoxon-exact-pvalue/',
    status: 'Upstream fix merged',
  },
  {
    title: 'R exact Wilcoxon out-of-range p-values',
    summary:
      'We reported negative p-values and a value above 1 with independent exact-arithmetic checks. R Bugzilla PR#19144 remains open and unconfirmed.',
    href: '/engineering/r-wilcoxon-exact-pvalue-out-of-range/',
    status: 'Exact-arithmetic report filed',
  },
  {
    title: 'Correctly Rounded or Refused',
    summary:
      'Our public preprint examines how a statistical system can check numerical accuracy before returning paired-t results.',
    href: '/research/correctly-rounded-or-refused/',
    status: 'Public preprint v0.2',
  },
] as const;
