import { PUBLICATIONS } from './publications';

/**
 * Stable public facts reused across the corporate narrative, product pages, and
 * agent-readable documentation. Exact Protocol and product semantics remain owned
 * by their upstream repositories; this module records only the public wording used
 * by this site.
 */

export const COMPANY_POSITION =
  'Licklider builds scientific verification infrastructure that AI research agents can call when a result needs an independent, versioned check. Statistics is the first working domain.';

export const VERIFICATION_CALL_DEFINITION =
  'A verification call asks a separate tool to check one clearly defined property of an analysis, result, or evidence chain. It returns a machine-readable answer that says what was checked, which evidence and version were used, what should happen next, and where the result stops.';

export const NOMUE_POSITION =
  'nomue is Licklider\'s agent-callable scientific verification product. It moves important scientific decisions and numerical checks out of the research model and into a separate, inspectable capability.';

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
  'nomue\'s Welch verification is implemented: it keeps the agent from guessing required scientific facts, follows the supported decision path, runs fixed numerical checks, and returns structured outcomes and next actions.';

export const HOSTED_WELCH_CAPABILITY =
  'Approved recipients can submit data and required scientific declarations for a supported Welch calculation, or submit a claimed result with structured evidence for checking, through authenticated MCP and HTTP. The service returns scoped outcomes, reasons, evidence, and next actions.';

export const R3_SOURCE_PROGRESS =
  'Release 3 source research now distinguishes unequal-variance pairwise intervals, fixed-control and best-treatment comparisons, and closed-testing graphs. The bounded source results have been reviewed and accepted; method selection, numerical support, and public opening remain separate work.';

export const PRODUCT_RELEASE_BOUNDARY =
  'Use the npm-published Release 1 verifier, the local stdio MCP server, the Protocol, and their machine-readable documentation today. The agent-facing Welch capability is now available in limited Release 1 to approved recipients through authenticated MCP and HTTP interfaces; public self-registration is not available. The hosted capability does not yet emit public Records for replay through the local verifier.';

export const MCP_RELEASE = {
  displayName: 'nomue Record Verifier',
  configName: 'nomue-verify',
  package: '@licklider/nomue-verifier-mcp',
  version: '0.2.0-rc.0',
  maturity: 'public npm release candidate',
  npmDistTag: 'rc',
  npmUrl: 'https://www.npmjs.com/package/@licklider/nomue-verifier-mcp/v/0.2.0-rc.0',
  transport: 'stdio',
  tool: 'verify_nomue_record',
  registryName: 'io.github.licklider-ai/nomue-verifier-mcp',
  registryUrl:
    'https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.licklider-ai%2Fnomue-verifier-mcp',
  verifierPackage: '@licklider/nomue-verifier',
  verifierVersion: '0.2.1-rc.0',
  repositoryUrl: 'https://github.com/licklider-ai/nomue-verifier-mcp',
  ciUrl: 'https://github.com/licklider-ai/nomue-verifier-mcp/actions',
  registryCiUrl:
    'https://github.com/licklider-ai/nomue-verifier-mcp/actions/runs/33843999286',
  testedOperatingSystems: ['Linux', 'macOS', 'Windows'],
  testedNodeVersions: ['20', '22'],
} as const;

export const MCP_PUBLIC_SOURCE =
  `The exact ${MCP_RELEASE.package}@${MCP_RELEASE.version} release candidate is public on npm and in the official MCP Registry as ${MCP_RELEASE.displayName}. It exposes the method-neutral ${MCP_RELEASE.tool} tool over local ${MCP_RELEASE.transport}; the current supported scientific scope remains Release 1 Welch Record verification. It delegates to ${MCP_RELEASE.verifierPackage}@${MCP_RELEASE.verifierVersion} and has passing package-path CI across Linux, macOS, and Windows.`;

export const MCP_RELEASE_BOUNDARY =
  `${MCP_PUBLIC_SOURCE} It requires no account, API key, environment variable, or Licklider-hosted service. The first npx launch may download npm dependencies; after installation, verification runs locally. This release candidate supports stdio only: it is not a hosted HTTP endpoint and does not add paired-t, Wilcoxon, Mann–Whitney, method selection, raw-sample calculation, or an overall scientific verdict.`;

export const NOMUE_MCP_NPX_COMMAND =
  `npx --yes ${MCP_RELEASE.package}@${MCP_RELEASE.version}`;

export const NOMUE_MCP_CLAUDE_COMMAND =
  `claude mcp add ${MCP_RELEASE.configName} -- ${NOMUE_MCP_NPX_COMMAND}`;

export const NOMUE_MCP_CLIENT_CONFIG =
  `{"mcpServers":{"${MCP_RELEASE.configName}":{"command":"npx","args":["--yes","${MCP_RELEASE.package}@${MCP_RELEASE.version}"]}}}`;

export const NOMUE_MCP_WINDOWS_CONFIG =
  `{"mcpServers":{"${MCP_RELEASE.configName}":{"command":"cmd.exe","args":["/d","/s","/c","npx --yes ${MCP_RELEASE.package}@${MCP_RELEASE.version}"]}}}`;

export const NOMUE_MCP_REPLAY_COMMAND =
  `npx --yes ${MCP_RELEASE.verifierPackage}@${MCP_RELEASE.verifierVersion} verify ./record.json --format json-compact`;

export const NOMUE_MCP_WHEN_TO_USE =
  `Use when a Record declares ${PUBLIC_RELEASE.bundle}, represents independent two-group continuous outcomes using the two-sided Welch two-sample t procedure, and needs scoped structural, digest, admissibility, computability, or recomputation checks.`;

export const NOMUE_MCP_WHEN_NOT_TO_USE =
  'Do not use to calculate a Welch test from raw samples, select a method, judge scientific truth or causality, verify paired-t, Wilcoxon, Mann–Whitney, or interpret an unsupported bundle.';

export const NOMUE_GLOBAL_INSTALL_COMMAND =
  `npm install --global ${PUBLIC_RELEASE.npmPackage}`;

export const NOMUE_NPX_COMMAND =
  `npx --yes ${PUBLIC_RELEASE.npmPackage} verify ./record.json --format json`;

export const NOMUE_VERIFY_COMMAND =
  'nomue verify ./record.json --format json';

export const NOMUE_CLI_USAGE =
  'usage: nomue <verify|canonicalize|digest> <record.json> [--format json|json-compact|human]';

export const PAIRED_T_BOUNDARY =
  'The Release 2 paired-t candidate has reached independently reviewed final review readiness. Its evidence covers the research gate, four candidate schemas, the Student-t probability and 95% confidence-interval paths, numerical error bounds, resource limits, one controlled runtime, failure reasons, and Release 1 preservation. Formal adoption, issuance, and release remain before public support.';

export const R4_DISCUSSION = {
  articleUrl: '/news/nomue-protocol-release-4-public-discussion/',
  issueUrl: 'https://github.com/licklider-ai/nomue-protocol/issues/261',
  proposalUrl: 'https://github.com/licklider-ai/nomue-protocol/blob/21453d82109106e9e811571383228dcef8f60fac/governance/drafts/release-4-preparation/opening-rfc-candidate.md',
  reviewUrl: 'https://github.com/licklider-ai/nomue-protocol/blob/36b40134321337d99417828368b5f690c70f5d07/review-inputs/r4-opening-rfc-boundary/assessment-20260909/REVIEW-RESULT.md',
  openedAt: '2026-09-09T05:59:47Z',
  earliestDecisionAt: '2026-10-09T05:59:47Z',
} as const;

export const R4_DISCUSSION_BOUNDARY =
  'Release 4 public discussion is open for a balanced two-by-two fixed-factor proposal: two factors, two levels each, and equal replication in four conditions. The proposal connects declared model assumptions, signed effect estimates, individual F tests, and verification evidence. Numerical support is not established; this is a specification proposal, not a new verifier capability.';

export const PAIRED_T_RFC_URL =
  'https://github.com/licklider-ai/nomue-protocol/issues/25';

export const EVALUATION_BOUNDARY =
  'The A/B/C comparison design, scoring boundary, baseline tools, provider adapters, and exact nomue runtime binding are being built and reviewed. Results will be published after the scored evaluation and adversarial review are complete.';

export const PLATFORM_SCOPE =
  'Licklider is building shared infrastructure for verification calls across AI research. Welch is the first working vertical slice of a broader architecture for portable evidence, persistent agent-native project state, resumability, and expanding scientific capabilities.';

export const MARKET_SCOPE =
  'Licklider\'s market is the full set of verification calls that arise across AI research, rather than one research-workflow SaaS category. The long-term infrastructure opportunity is broader than the capabilities available today.';

export const ROADMAP_POSITION =
  'Welch is the first working, publicly checkable vertical slice, not the product boundary. The adopted product sequence expands both the platform beneath each call and the scientific methods available through it.';

export const PLATFORM_EVOLUTION = [
  {
    title: 'Independently verifiable Records',
    description:
      'Carry exact capability, engine, Protocol, and result evidence into a Record that another party can check without trusting the product runtime.',
  },
  {
    title: 'Agent-native Project state',
    description:
      'Let an authorized agent return to the same research task without rebuilding canonical context from chat history.',
  },
  {
    title: 'Persistent resumability',
    description:
      'Reconnect and continue long-running research work while keeping project truth separate from conversational memory.',
  },
  {
    title: 'Generalized capability kernel',
    description:
      'Stabilize the common contract, result, refusal, evidence, and version surfaces after materially different methods prove what is shared.',
  },
] as const;

export const PLANNED_METHOD_FAMILIES = [
  'Independent multi-group',
  'Paired two-group',
  'Repeated measures',
  'Factorial and interaction',
  'Nonlinear and dose response',
  'Nonparametric rank-based',
  'Categorical outcomes',
  'Correlation and linear models',
  'Survival time-to-event',
  'Count outcomes',
] as const;

export const EXPANSION_MODEL =
  'Method expansion does not require every app capability to wait for a Protocol release. A method family can first ship with app-level deterministic verification after its own contract, independent-oracle, cross-implementation, property, adversarial, and activation reviews close. It can later gain Protocol-backed independent verification through an exact released bundle.';

export const LEARNING_LOOP_POSITION =
  'As real use grows, the planned governed learning loop turns privacy-minimized failures and boundary cases into reviewed evidence, regression cases, and improved future capability versions without treating model self-judgment as scientific ground truth.';

export const METHOD_IDENTITY_FINDING =
  'A statistical method name is not a verification contract. A useful guarantee also depends on the comparison family, error criterion, assumptions, sidedness, balance conditions, and exact procedure variant.';

export const PUBLIC_TRUST_EVIDENCE =
  'Release 1 publishes source code together with public fixtures, a signed source archive, checksums, a snapshot manifest, detached signatures, and the public release key.';

export const VERIFICATION_WORKING_METHOD =
  'We separate two questions that are often collapsed: whether the recorded computation ran exactly as stated, and how close its result is to the mathematical target. We review those questions separately. If the evidence cannot establish the required boundary, we improve the evidence, narrow the claim, or keep that result out of public support.';

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
    title: 'Mann–Whitney U: batching can change a 5% decision',
    summary:
      'An unchanged sample pair crosses the 5% significance threshold when another pair contains repeated values, because SciPy selects one calculation method for the batch.',
    href: '/engineering/scipy-mannwhitneyu-batch-method-selection/',
    status: PUBLICATIONS.find((item) => item.href === '/engineering/scipy-mannwhitneyu-batch-method-selection/')!.status,
    outcome: 'report_open',
    comparisonLabel: 'Same pair: alone → batched with a tied pair',
    observed: '0.04798',
    reference: '0.05132',
    evidenceHref: 'https://github.com/scipy/scipy/issues/26115',
    evidenceLabel: 'SciPy issue #26115',
    credit: 'Reported by Tasuku Kobayashi · maintainer triage and community source check recorded; remedy undecided',
  },
  {
    project: 'SciPy',
    title: 'SciPy t-tests can return p=0 or p=1 after exact rescaling',
    summary:
      'SciPy’s one-sample and paired t-tests can reverse a 5% decision after exact power-of-two rescaling because an intermediate variance underflows or overflows.',
    href: '/engineering/scipy-ttest-scale-range-loss/',
    status: 'Reported to SciPy — issue #26113 open; upstream confirmation and fix pending',
    outcome: 'report_open',
    comparisonLabel: 'Returned after rescaling → scale-invariant reference',
    observed: '0.0 / 1.0',
    reference: '0.2048 / 0.03510',
    evidenceHref: 'https://github.com/scipy/scipy/issues/26113',
    evidenceLabel: 'SciPy issue #26113',
    credit: 'Open; no SciPy maintainer confirmation or accepted fix',
  },
  {
    project: 'Julia / HypothesisTests.jl',
    title: 'Exact signed-rank p-value above 1',
    summary:
      'We reported a two-sided signed-rank p-value of 1.25. A separately authored patch now returns 1.0 on master; no registered release contains it yet.',
    href: '/engineering/julia-signed-rank-pvalue-above-one/',
    status: 'Matching fix merged on master; issue open; release pending',
    outcome: 'fix_merged',
    comparisonLabel: 'Registered 0.11.8 → merge commit',
    observed: '1.25',
    reference: '1.0',
    evidenceHref:
      'https://github.com/JuliaStats/HypothesisTests.jl/commit/f758eead30e9389dcf7da9872782dede6a4f095f',
    evidenceLabel: 'HypothesisTests.jl commit f758eea',
    credit:
      'Fix authored by yoninazarathy · merged by andreasnoack · no upstream causal attribution',
  },
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

/** Selected research evidence for company pages; article metadata stays canonical. */
export const PROTOCOL_RESEARCH_PROGRESS = [
  {
    href: '/engineering/bounding-paired-t-arithmetic-and-pvalues/',
    stage: 'Release 2 · Reviewed candidate',
    summary: 'The paired-t candidate connects matched observations to a p-value and a 95% confidence interval, with numerical error checks and one controlled runtime. Its final review-readiness package has passed independent review.',
  },
  {
    href: '/engineering/what-multiple-comparison-procedures-guarantee/',
    stage: 'Release 3 · Source research',
    summary: R3_SOURCE_PROGRESS,
    relatedHref: '/engineering/games-howell-approximation-and-guarantees/',
    relatedLabel: 'Unequal-variance comparisons: formulas and guarantees',
  },
  {
    href: R4_DISCUSSION.articleUrl,
    stage: 'Release 4 · Public discussion',
    summary: 'A balanced two-factor specification proposal is open for public comment. It connects model assumptions, individual effect tests, and verification evidence; numerical implementation remains unresolved.',
    relatedHref: '/engineering/power-scaling-and-factorial-f-statistics/',
    relatedLabel: 'SS, SSE, F, and the limits of power scaling',
  },
].map((entry) => {
  const publication = PUBLICATIONS.find((item) => item.href === entry.href);
  if (!publication) throw new Error(`Missing research publication: ${entry.href}`);
  return { ...entry, title: publication.title, status: publication.status };
});
