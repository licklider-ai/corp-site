/**
 * Stable public facts reused across the corporate narrative, product pages, and
 * agent-readable documentation. Exact Protocol and product semantics remain owned
 * by their upstream repositories; this module records only the public wording used
 * by this site.
 */

export const COMPANY_POSITION =
  'Licklider builds middleware for bounded verification calls across AI research, starting with scientific statistics.';

export const VERIFICATION_CALL_DEFINITION =
  'A verification call asks a separate capability to check a bounded property of an analysis, result, or evidence chain and to return what was checked, what remains unestablished, and whether clarification or refusal is required.';

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

export const PRODUCT_RELEASE_BOUNDARY =
  'The agent-callable Welch capability has completed its app-local development goal. A public AI-only product release has not yet been published, and this site does not currently offer a public nomue API or MCP endpoint.';

export const PAIRED_T_BOUNDARY =
  'A paired-t successor is in an open public Release 2 RFC. Development and review do not make it part of Release 1 or a currently supported public capability.';

export const PAIRED_T_RFC_URL =
  'https://github.com/licklider-ai/nomue-protocol/issues/25';

export const EVALUATION_BOUNDARY =
  'Licklider has not published a comparative result showing that adding nomue improves the performance of a research agent.';

export const PLATFORM_SCOPE =
  'The long-term product category is verification calls across AI research. Statistics is the first bounded implementation, not the claimed limit of the infrastructure and not evidence that other verification domains are supported today.';

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
    status: 'Open and unconfirmed',
  },
  {
    title: 'Correctly Rounded or Refused',
    summary:
      'Our public preprint examines how a statistical system can check numerical accuracy before returning paired-t results.',
    href: '/research/correctly-rounded-or-refused/',
    status: 'Preprint — not peer reviewed',
  },
] as const;
