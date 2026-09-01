import {
  CORE_NON_CLAIMS,
  EVALUATION_BOUNDARY,
  MARKET_SCOPE,
  NOMUE_POSITION,
  PAIRED_T_BOUNDARY,
  PLATFORM_SCOPE,
  PRODUCT_RELEASE_BOUNDARY,
  PUBLIC_RELEASE,
  VERIFICATION_CALL_DEFINITION,
} from './site-facts';

export type DocLink = {
  label: string;
  href: string;
  note?: string;
};

export type DocTable = {
  headers: string[];
  rows: string[][];
};

export type DocSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  ordered?: string[];
  note?: string;
  code?: string;
  example?: boolean;
  table?: DocTable;
  links?: DocLink[];
};

export type AgentDoc = {
  slug: string;
  title: string;
  description: string;
  status: string;
  updated: string;
  llmSummary: string[];
  sections: DocSection[];
};

export const AGENT_DOCS: AgentDoc[] = [
  {
    slug: 'verification-call',
    title: 'What a verification call is',
    description:
      'A shared model for asking a separate capability to check one bounded part of AI-assisted research.',
    status: 'Conceptual interface — not a public nomue API',
    updated: 'September 1, 2026',
    llmSummary: [
      'A verification call asks a separate capability to check one bounded property.',
      'Use it when the generating model should not be the sole judge of its own output.',
      'Clarify material scientific facts that are unresolved; do not infer them from data shape or prose.',
      'Stop at unsupported or inadmissible scope; do not silently substitute a nearby method.',
      'Return the scoped result together with evidence, versions, next action, and explicit non-claims.',
      'This page defines a conceptual interface, not a currently public nomue API or MCP endpoint.',
    ],
    sections: [
      {
        id: 'definition',
        title: 'Definition',
        paragraphs: [VERIFICATION_CALL_DEFINITION],
        note:
          'The phrase names a class of interaction. It does not claim that every form of research verification is currently implemented by nomue.',
      },
      {
        id: 'when-to-use',
        title: 'When to use a verification call',
        paragraphs: [
          'Use a verification call when a research workflow reaches a property that should not depend only on the generating model assessing its own work.',
        ],
        bullets: [
          'a declared analysis needs to be checked against an explicitly supported procedure;',
          'reported numbers need deterministic recomputation under a versioned numerical contract;',
          'the workflow must determine whether material scientific information is missing;',
          'an unsupported or inadmissible request must stop without silently switching methods; or',
          'a downstream reader needs a machine-readable account of what was checked and what was not asserted.',
        ],
      },
      {
        id: 'when-not-to-use',
        title: 'When not to use a verification call',
        paragraphs: [
          'Do not treat a bounded verification call as a substitute for scientific judgment, source-data review, peer review, or a method that is outside the capability\'s exact support boundary.',
        ],
        bullets: [
          'Do not ask it to establish the truth of researcher-provided facts.',
          'Do not use it to manufacture a declaration that the researcher has not supplied.',
          'Do not reinterpret an unsupported response as evidence that there is no effect.',
          'Do not turn a set of scoped passing checks into a statement that the research is correct overall.',
        ],
      },
      {
        id: 'call-shape',
        title: 'What a well-formed call needs',
        ordered: [
          'Identify the exact capability and version.',
          'Provide the input, result, or evidence object covered by that capability.',
          'Provide required scientific declarations, or preserve them as unresolved.',
          'Allow the capability to execute, request clarification, report unsupported scope, refuse safely, or report a failed check.',
          'Carry the scoped result, evidence references, version references, next action, and non-asserted boundary forward together.',
        ],
      },
      {
        id: 'anti-patterns',
        title: 'Explicit anti-patterns and stop triggers',
        bullets: [
          'CLARIFY: a material scientific declaration is missing or ambiguous. Ask only for that declaration; do not execute as though it were known.',
          'UNSUPPORTED: the requested method, design, or version is outside the exact capability boundary. Stop or route elsewhere without substitution.',
          'REFUSE: a safety, resource, or numerical contract requires refusal. Preserve the refusal basis; do not return an unbounded approximation.',
          'DO NOT UPGRADE: a passing scoped check must not become an overall claim that the research, data, or conclusion is correct.',
        ],
      },
      {
        id: 'layer-boundary',
        title: 'Protocol and product boundary',
        paragraphs: [
          'The public nomue Protocol owns Record semantics and scoped verification semantics. It intentionally does not define MCP transport, agent sessions, conversational clarification, or product orchestration. Those interactions belong to Layer 2 products such as nomue.',
          PRODUCT_RELEASE_BOUNDARY,
        ],
        links: [
          {
            label: 'nomue Protocol Layer 1 boundary',
            href: 'https://github.com/licklider-ai/nomue-protocol/blob/main/spec/core/layer-boundary.md',
          },
        ],
      },
    ],
  },
  {
    slug: 'record-verification',
    title: 'Verify a Release 1 nomue Record',
    description:
      'When and how to use the public local verifier for the exact Release 1 Public Draft support target.',
    status: 'Public and experimental — verifier package 0.2.1-rc.0',
    updated: 'September 1, 2026',
    llmSummary: [
      `Current public support is limited to ${PUBLIC_RELEASE.profile} under the ${PUBLIC_RELEASE.procedure}.`,
      `The exact Release 1 bundle is ${PUBLIC_RELEASE.bundle}.`,
      'Use the local verifier only for an existing conforming nomue Record that declares that exact bundle.',
      'Inspect the JSON report; exit codes are routing signals, not scientific verdicts.',
      'Exit code 0 means all applicable scoped checks passed, not that the research is verified overall.',
      'There is no public hosted nomue API or MCP endpoint on this site today.',
    ],
    sections: [
      {
        id: 'current-support',
        title: 'Current public support',
        paragraphs: [
          `${PUBLIC_RELEASE.protocol} is ${PUBLIC_RELEASE.protocolMaturity}. Its sole public Record interpretation support target is the exact bundle below.`,
        ],
        code: PUBLIC_RELEASE.bundle,
        bullets: [
          `Profile: ${PUBLIC_RELEASE.profile}.`,
          `Procedure: ${PUBLIC_RELEASE.procedure}.`,
          `Verifier package: ${PUBLIC_RELEASE.verifierPackage}, an ${PUBLIC_RELEASE.verifierMaturity}.`,
        ],
      },
      {
        id: 'when-to-use',
        title: 'When to use the verifier',
        bullets: [
          'You already have a nomue Record that declares the exact Release 1 interpretation bundle.',
          'You need local, offline checks of the supported Record properties.',
          'You can inspect the machine-readable JSON report rather than relying only on the process exit code.',
          'You accept the Public Draft and release-candidate maturity of the artifacts.',
        ],
      },
      {
        id: 'when-not-to-use',
        title: 'When not to use the verifier',
        bullets: [
          'You have only raw or unstructured research data and no conforming nomue Record.',
          'The requested method is paired t, Wilcoxon, Mann–Whitney, or another method outside the exact Release 1 bundle.',
          'You need the verifier to determine whether the source data or researcher declarations are true.',
          'You need production attestation, manuscript acceptance, or an overall scientific verdict.',
          'You need a public hosted nomue API or MCP endpoint; none is offered on this site today.',
        ],
      },
      {
        id: 'run',
        title: 'Run the public verifier',
        paragraphs: [
          'After cloning the public verifier repository and installing its dependencies, run the valid and mismatch fixtures:',
        ],
        code: `git clone https://github.com/licklider-ai/nomue-verifier.git
cd nomue-verifier
npm install

npm exec -- nomue verify records/valid.json --format json
npm exec -- nomue verify records/invalid-result-mismatch.json --format json`,
        example: true,
        note:
          'The first fixture exits 0. The mismatch fixture exits 2. Scripts must inspect the JSON report to learn the exact scoped outcomes.',
      },
      {
        id: 'exit-codes',
        title: 'Exit codes are routing signals, not scientific verdicts',
        table: {
          headers: ['Code', 'Meaning'],
          rows: [
            ['0', 'A report exists and every applicable scoped check outcome is pass.'],
            ['2', 'A scoped check failed, or parsing or canonicalization was refused.'],
            ['3', 'The bundle is unsupported or routing failed; no report exists.'],
            ['4', 'The verifier refused safely because of a resource limit.'],
            ['5', 'Usage, input/output, or internal failure stopped verification.'],
          ],
        },
      },
      {
        id: 'common-mistakes',
        title: 'Common mistakes LLMs make with statistical verification',
        bullets: [
          'Treating exit code 0 as an overall VERIFIED status.',
          'Assuming that a nearby bundle version or similar statistical method is supported.',
          'Assuming that numerical agreement establishes scientific truth.',
          'Allowing the verifier to fetch a Record-supplied URI or execute Record-supplied code; the public verifier does neither.',
        ],
      },
      {
        id: 'evidence',
        title: 'Public evidence and authority',
        links: [
          { label: 'nomue Protocol', href: PUBLIC_RELEASE.protocolUrl },
          { label: 'nomue verifier', href: PUBLIC_RELEASE.verifierUrl },
          {
            label: 'Verification principles',
            href: 'https://github.com/licklider-ai/nomue-protocol/blob/main/spec/core/verification-principles.md',
          },
          {
            label: 'Interpretation bundle registry',
            href: 'https://github.com/licklider-ai/nomue-protocol/blob/main/registries/interpretation-bundles.yaml',
          },
        ],
      },
    ],
  },
  {
    slug: 'decision-vocabulary',
    title: 'Decision vocabulary',
    description:
      'Keep execution, clarification, unsupported scope, refusal, failed checks, and unasserted scientific validity separate.',
    status: 'Public explanatory vocabulary — upstream semantics remain authoritative',
    updated: 'September 1, 2026',
    llmSummary: [
      'Keep execution, clarification, unsupported scope, inadmissibility, refusal, failed checks, and internal failure separate.',
      'Clarification required means a material fact is unresolved; it is not a failed statistical test.',
      'Unsupported means outside the implemented boundary; it is not evidence of no effect.',
      'A pass applies to one named scoped check only.',
      'Not asserted means the scientific question lies outside the claim made by the supported procedure.',
      'The public nomue Protocol has no single overall VERIFIED result.',
    ],
    sections: [
      {
        id: 'why',
        title: 'Why the distinctions matter',
        paragraphs: [
          'A verification result becomes misleading when operational failure, unsupported scope, missing scientific information, and a failed check are collapsed into one success or failure label. Each state answers a different question and requires a different next action.',
        ],
      },
      {
        id: 'product-decisions',
        title: 'Layer 2 call decisions',
        table: {
          headers: ['Term', 'Meaning', 'Required next action'],
          rows: [
            ['execute', 'The exact product capability can proceed under the resolved declarations and contract.', 'Preserve the capability, contract, and evidence identities with the result.'],
            ['clarification required', 'A material scientific fact is unresolved and must not be inferred.', 'Ask only for the missing information and do not execute as though it were known.'],
            ['unsupported', 'The design or requested capability is outside the implemented boundary.', 'Stop or route elsewhere without silently substituting a method.'],
            ['inadmissible', 'A controlling rule prohibits the requested analysis in the declared circumstances.', 'Return the reason and do not present the analysis as successful.'],
            ['safe refusal or noncomputable', 'The contract requires the system to refuse rather than return an unbounded approximation.', 'Return the refusal basis and preserve it as distinct from a scientific conclusion.'],
            ['verification failure', 'A claimed result disagrees with recomputation or a scoped check fails.', 'Preserve the failed check; do not rewrite it into a broad scientific claim.'],
            ['internal failure', 'Tooling, input/output, or system failure prevented completion.', 'Treat it as an operational failure, not scientific rejection.'],
          ],
        },
        note:
          'These terms explain product orchestration. They do not redefine the public Protocol verification report.',
      },
      {
        id: 'protocol-results',
        title: 'Layer 1 verification results',
        paragraphs: [
          'A conforming Protocol verifier returns scoped results. Every result identifies its scope, check or procedure, and version. Scientific validity outside an explicitly supported procedure is represented as not asserted.',
        ],
        bullets: [
          'pass means that one applicable scoped check passed;',
          'fail means that one applicable scoped check failed;',
          'refusal or no report means verification could not produce that report under the applicable routing or safety boundary; and',
          'not asserted means the question lies outside the scientific validity claim made by the supported procedure.',
        ],
        note:
          'There is no single overall VERIFIED result in the nomue Protocol.',
      },
      {
        id: 'non-equivalence',
        title: 'Terms that must not be treated as equivalent',
        bullets: [
          'unsupported is not the same as no effect;',
          'clarification required is not a failed statistical test;',
          'internal failure is not scientific inadmissibility;',
          'a passing numerical check is not scientific truth; and',
          'not asserted is not a hidden pass or a claim that the question was evaluated.',
        ],
      },
    ],
  },
  {
    slug: 'examples',
    title: 'Examples for agents and implementers',
    description:
      'Runnable verifier examples and selection examples showing execute, clarify, unsupported, and bounded interpretation behavior.',
    status: 'Public examples — executable examples use the Release 1 verifier fixtures',
    updated: 'September 1, 2026',
    llmSummary: [
      'The valid and mismatch fixture commands are executable only after installing the public verifier repository.',
      'A valid fixture should produce exit code 0 and scoped JSON results; do not summarize it as overall research verification.',
      'A mismatch should produce exit code 2 and preserve the failed scoped check.',
      'If experimental-unit meaning is unresolved, request clarification instead of inferring independence.',
      'Paired-t verification is outside Release 1; report unsupported scope and do not substitute Welch.',
    ],
    sections: [
      {
        id: 'machine-readable',
        title: 'Machine-readable examples',
        paragraphs: [
          'The normalized example set is available as JSON. Each entry identifies whether it is executable today or only demonstrates a call-selection boundary.',
        ],
        links: [
          { label: 'Examples JSON', href: '/docs/examples.json' },
        ],
      },
      {
        id: 'valid-record',
        title: 'Example 1: verify a valid Release 1 Record',
        paragraphs: [
          'Use the public verifier because the input is already a conforming Record for the exact supported bundle.',
        ],
        code: 'npm exec -- nomue verify records/valid.json --format json',
        example: true,
        note:
          'Expected routing result: exit 0 and a JSON report with applicable scoped checks passing. Do not summarize this as “the research is verified.”',
      },
      {
        id: 'mismatch',
        title: 'Example 2: keep a declared-result mismatch as a failed check',
        code: 'npm exec -- nomue verify records/invalid-result-mismatch.json --format json',
        example: true,
        note:
          'Expected routing result: exit 2 and a JSON report containing the failed scoped check. The mismatch is not an overall scientific conclusion.',
      },
      {
        id: 'missing-declaration',
        title: 'Example 3: ask rather than infer',
        paragraphs: [
          'A research agent receives two columns of measurements, but it cannot establish whether the observations are independent biological units or repeated technical measurements.',
        ],
        bullets: [
          'Correct action: request the material experimental-unit declaration.',
          'Incorrect action: infer independence from the spreadsheet shape and run Welch automatically.',
        ],
        note:
          'This example describes the Layer 2 call contract. It is not a currently published API request.',
      },
      {
        id: 'unsupported-method',
        title: 'Example 4: do not substitute a nearby method',
        paragraphs: [
          'A request asks for paired-t verification. Paired t is outside the public Release 1 support target.',
        ],
        bullets: [
          'Correct action: report unsupported public scope and identify the boundary.',
          'Incorrect action: silently treat the input as two independent groups or imply that the open Release 2 RFC is current support.',
        ],
      },
    ],
  },
  {
    slug: 'limits',
    title: 'Current limits and non-claims',
    description:
      'The difference between current public support, product development, long-term platform scope, and claims that Licklider does not make.',
    status: 'Current public boundary — September 1, 2026',
    updated: 'September 1, 2026',
    llmSummary: [
      `Public support is experimental and limited to ${PUBLIC_RELEASE.profile} under the ${PUBLIC_RELEASE.procedure}.`,
      'The agent-callable product capability is not yet a public API or MCP endpoint.',
      'Paired t is open Release 2 RFC work, not current Release 1 support.',
      'Verification calls across AI research describe the long-term product category, not shipped support outside statistics.',
      'A supported verification does not establish source-data truth, overall research correctness, causal truth, or publication acceptance.',
      'No comparative result showing that nomue improves a research agent has been published.',
    ],
    sections: [
      {
        id: 'current',
        title: 'Current public support',
        paragraphs: [
          `${PUBLIC_RELEASE.protocol} and the ${PUBLIC_RELEASE.verifierPackage} verifier package are public and experimental. The exact public support target is limited to ${PUBLIC_RELEASE.profile} under the ${PUBLIC_RELEASE.procedure}.`,
          PRODUCT_RELEASE_BOUNDARY,
        ],
      },
      {
        id: 'development',
        title: 'Under development is not supported',
        paragraphs: [PAIRED_T_BOUNDARY],
        bullets: [
          'An RFC is a review record, not a support declaration.',
          'Implementation evidence does not by itself create a public Protocol capability.',
          'A future capability is not an alias or fallback for the exact Release 1 bundle.',
        ],
      },
      {
        id: 'platform',
        title: 'Platform scope is a direction, not a support claim',
        paragraphs: [PLATFORM_SCOPE, MARKET_SCOPE],
      },
      {
        id: 'non-claims',
        title: 'What a supported verification does not establish',
        paragraphs: [
          'A supported result is deliberately narrower than a claim that the research is correct. It does not establish:',
        ],
        bullets: CORE_NON_CLAIMS.map((claim) => `${claim};`),
      },
      {
        id: 'evaluation',
        title: 'No comparative performance claim',
        paragraphs: [EVALUATION_BOUNDARY],
        links: [{ label: 'Evaluation design and status', href: '/evaluation/' }],
      },
    ],
  },
];

export const DOCS_BY_SLUG = Object.fromEntries(
  AGENT_DOCS.map((doc) => [doc.slug, doc]),
) as Record<string, AgentDoc>;

export const AGENT_EXAMPLES = [
  {
    id: 'release1-valid-record',
    kind: 'executable_cli',
    current_availability: 'public',
    capability: 'nomue Release 1 Record verification',
    capability_version: PUBLIC_RELEASE.verifierPackage,
    input: 'records/valid.json',
    expected_action: 'verify',
    command: 'npm exec -- nomue verify records/valid.json --format json',
    expected_routing_result: 'exit_code_0',
    interpretation:
      'Inspect the JSON scoped results. Do not emit an overall scientific VERIFIED claim.',
    source: PUBLIC_RELEASE.verifierUrl,
  },
  {
    id: 'release1-result-mismatch',
    kind: 'executable_cli',
    current_availability: 'public',
    capability: 'nomue Release 1 Record verification',
    capability_version: PUBLIC_RELEASE.verifierPackage,
    input: 'records/invalid-result-mismatch.json',
    expected_action: 'verify',
    command:
      'npm exec -- nomue verify records/invalid-result-mismatch.json --format json',
    expected_routing_result: 'exit_code_2',
    interpretation:
      'Preserve the failed scoped check. Do not rewrite it as a broad scientific conclusion.',
    source: PUBLIC_RELEASE.verifierUrl,
  },
  {
    id: 'missing-experimental-unit-declaration',
    kind: 'selection_boundary',
    current_availability: 'conceptual_product_contract',
    capability: 'nomue Welch scientific verification capability',
    capability_version: 'v1',
    input: 'Two measurement columns with unresolved experimental-unit meaning',
    expected_action: 'clarification_required',
    prohibited_action: 'Infer independence from the table shape and execute Welch',
    interpretation:
      'Researcher-declared scientific facts must not be supplied by the model.',
  },
  {
    id: 'paired-t-outside-release1',
    kind: 'selection_boundary',
    current_availability: 'public_scope_boundary',
    capability: 'nomue Release 1 Record verification',
    capability_version: PUBLIC_RELEASE.verifierPackage,
    input: 'Request for paired-t verification',
    expected_action: 'unsupported',
    prohibited_action:
      'Silently substitute independent-groups Welch or imply Release 2 support',
    interpretation: PAIRED_T_BOUNDARY,
  },
] as const;

function renderTable(table: DocTable): string {
  const head = `| ${table.headers.join(' | ')} |`;
  const rule = `| ${table.headers.map(() => '---').join(' | ')} |`;
  const rows = table.rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
  return `${head}\n${rule}\n${rows}`;
}

export function renderDocMarkdown(doc: AgentDoc): string {
  const parts = [
    `# ${doc.title}`,
    '',
    `> ${doc.description}`,
    '',
    `Status: ${doc.status}`,
    `Updated: ${doc.updated}`,
  ];

  for (const section of doc.sections) {
    parts.push('', `## ${section.title}`, '');
    for (const paragraph of section.paragraphs ?? []) parts.push(paragraph, '');
    if (section.ordered) {
      section.ordered.forEach((item, index) => parts.push(`${index + 1}. ${item}`));
      parts.push('');
    }
    if (section.bullets) {
      section.bullets.forEach((item) => parts.push(`- ${item}`));
      parts.push('');
    }
    if (section.code) {
      if (section.example) parts.push('<!-- llm:example -->');
      parts.push('```text', section.code, '```', '');
    }
    if (section.table) parts.push(renderTable(section.table), '');
    if (section.note) parts.push(`> ${section.note}`, '');
    if (section.links) {
      section.links.forEach((link) =>
        parts.push(`- [${link.label}](${link.href})${link.note ? `: ${link.note}` : ''}`),
      );
      parts.push('');
    }
  }

  parts.push('', '## Flat summary for LLMs', '');
  doc.llmSummary.forEach((item) => parts.push(`- ${item}`));

  return `${parts.join('\n').trim()}\n`;
}

export const DOCS_INDEX_MARKDOWN = `# Licklider agent-readable documentation

> Public documentation for understanding when a bounded verification call applies, how to use current public nomue artifacts, and what their results do not establish.

${NOMUE_POSITION}

Important boundaries:

- ${PRODUCT_RELEASE_BOUNDARY}
- ${PAIRED_T_BOUNDARY}
- ${EVALUATION_BOUNDARY}

## Documentation

${AGENT_DOCS.map((doc) => `- [${doc.title}](https://www.licklider.ai/docs/${doc.slug}.md): ${doc.description}`).join('\n')}

## Machine-readable examples

- [Examples JSON](https://www.licklider.ai/docs/examples.json): normalized executable and call-selection examples
`;
