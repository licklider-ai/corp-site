# Release 2 D5 Engineering publication — independent adversarial review

## Review type

This is an independent adversarial review of a public Engineering article and its
publication surfaces. It is not a new review of the underlying D5 mathematics, which
already received an independent GO disposition. Re-open the numerical review only if
the article makes a claim that cannot be supported by the bundled D5 source and review
record.

Report in Japanese. Preserve exact identifiers, paths, hashes, and quoted English text
where needed.

## Exact targets

### corp-site

- Repository: `licklider-ai/corp-site`
- Target branch state: `main`
- Target commit: `2c7376fab6c14908cc9c89a42c0897bf7f3a35f8`
- Publication content commit: `3a744cc2a5d8ef036aad9b9c14b1ee861584f151`
- Baseline: `b10f3199c9b14e0598da1c824352a8c6ea75e370`
- Expected baseline-to-target delta: exactly 3 files, `+190/-1`

The three changed files must be:

1. `.github/workflows/deploy.yml`
2. `src/data/publications.ts`
3. `src/pages/engineering/certifying-paired-t-numerical-evidence.astro`

### nomue Protocol evidence source

- Repository: `licklider-ai/nomue-protocol`
- Merged candidate commit described by the article:
  `fd703bc9f6ae9c855571f1a9e59e6c50fc73564f`
- D5 table-evidence generator head reviewed independently:
  `6f58c340889de416a040ca28037736b301402f8a`
- The bundled protocol files are evidence inputs only. They are not proposed changes in
  this review.

## Identity checks — do these first

1. Verify the supplied ZIP against its adjacent `.sha256` file.
2. Verify `BUNDLE-CONTENTS.md` against the ZIP entries. Reject missing, added, duplicate,
   absolute, parent-traversal, or symlink entries.
3. Confirm the corp-site source files in the ZIP are byte-identical to target commit
   `2c7376f`.
4. Confirm the bundled protocol evidence files are byte-identical to the files reachable
   from merged commit `fd703bc9`.
5. Confirm the target diff from `b10f319` contains only the three files and the line count
   declared above.

If identity cannot be established, stop and return NO-GO. Do not review a nearby branch,
working tree, or current live page as a substitute for the pinned targets.

## Known facts that must not be mistaken for conclusions

- The article and its index entries are live on the canonical Vercel deployment.
- The ordinary GitHub CI build for target head `2c7376f` passed.
- The repository also contains a GitHub Pages workflow. Its build succeeds, but
  `actions/configure-pages` fails because GitHub Pages is not enabled for the repository.
  GitHub Pages is not the canonical production route. Decide whether this is a defect in
  the reviewed increment, an existing operations issue, or neither; do not silently
  ignore it.
- The publication must describe reviewed candidate evidence, not released or supported
  protocol behavior.
- Public review issue #25 remains open. Candidate identifiers remain unissued. R2-D5
  closure remains incomplete.

## Review questions

### A. Claim-to-evidence accuracy

Build a claim ledger for every concrete numerical, procedural, status, and provenance
claim in the article. At minimum verify:

- 3 p-value certificates;
- 9 fixed-95% critical-value research-seed cells at df
  `{1,2,4,5,6,10,30,100,1000}`;
- 6 boundary probes;
- 300-digit independent recomputation;
- exclusion of 18 adjacent binary64 cells;
- rejection of 23 bundle mutations and 4 neighboring-candidate generator probes;
- deterministic regeneration;
- 312 repository tests;
- low-df closed forms and the df>2 segmented-quadrature plus analytic-tail route;
- shared Arb ball arithmetic and the resulting “weakly independent” limitation;
- exact merge status and open-governance status.

For each claim, record the source path and whether the article is exact, too strong, too
weak, or ambiguous. Do not accept the prior reviewer’s summary without checking its
recorded disposition and the implementation/source artifacts available in the bundle.

### B. Authority and maturity boundary

Try to read the title, summary, status, opening notice, section headings, body, link text,
metadata, and Latest/Home snippets as a reasonable outsider would. Look for any wording
that could imply:

- paired-t is a supported nomue Protocol capability;
- Release 2 or R2-D5 is complete;
- the 9-cell seed is a contiguous critical-value table or supported df range;
- identifiers, bundle, or Public Checks have been issued or registered;
- runtime tolerances, supported domain, refusal codes, or final content hash are fixed;
- the secondary path is library-independent;
- the preprint is peer reviewed or validated by this Engineering work.

Also test the opposite failure: whether caveats are so dominant or technical that the
article fails to explain the actual engineering achievement to an informed
non-specialist.

### C. Publication architecture and usability

Check the article and index entry against `docs/publication-architecture.md`:

- correct primary category and type;
- exact date and status;
- index summary at or below 30 words;
- concrete subject first;
- current status, plain explanation, technical evidence, uncertainty, and scope;
- no change-history language that belongs in a repository rather than public copy;
- no duplicated primary classification.

Check that the item is newest-first and appears exactly once on:

- `/engineering/`;
- `/latest/`;
- the home-page Latest table.

Review clarity, jargon burden, sentence length, link labels, heading hierarchy, table of
contents, keyboard/link semantics, canonical metadata, and mobile-safe structure. Flag
only issues with concrete user or trust impact.

### D. Build, regression, and generated output

From a clean target checkout, run:

```bash
corepack pnpm install --frozen-lockfile
ASTRO_TELEMETRY_DISABLED=1 corepack pnpm build
git status --porcelain
```

Expected result:

- `astro check`: 0 errors, 0 warnings, 0 hints;
- all static routes build;
- worktree remains clean;
- the article route, Engineering, Latest, home, and sitemap contain the expected entry;
- existing publication data and pages are unchanged except for ordering caused by the new
  newest entry.

Inspect rendered HTML, not only Astro source. Check for lost whitespace around inline
elements, malformed list text, duplicate metadata, missing status, broken fragments, and
incorrect canonical URLs.

### E. Public links and deployment state

When network access is available, verify:

- `https://www.licklider.ai/engineering/certifying-paired-t-numerical-evidence/`
- `https://www.licklider.ai/engineering/`
- `https://www.licklider.ai/latest/`
- `https://www.licklider.ai/`
- every GitHub link in the Public evidence section.

Confirm that the canonical pages return 200 and show the reviewed title and status. Check
the GitHub CI and Vercel commit status for `2c7376f`. Separately inspect the GitHub Pages
failure and state its actual impact. Do not require GitHub Pages to be enabled merely
because a dormant workflow exists; do not dismiss a real production failure merely
because Vercel is mentioned.

### F. Security and repository hygiene

Check the exact delta and review package for secrets, absolute local paths, credentials,
unsafe archive entries, generated build output accidentally committed outside the
temporary review directory, or unrelated source changes. Confirm that the temporary
review artifacts do not alter production routes or build inputs.

## Severity and verdict

Use:

- **BLOCKER** — publication should be corrected or withdrawn immediately; evidence/status
  materially false; build or canonical production route broken; identity failure.
- **SHOULD-FIX** — meaningful trust, clarity, accessibility, or maintenance defect that
  should be fixed before declaring the publication work closed.
- **NICE-TO-HAVE** — small, local improvement with no material effect on truthfulness,
  authority boundary, production behavior, or comprehension.

Return one verdict:

- **GO** — publication may remain live and this increment may close.
- **GO WITH REPAIRS** — it may remain live, but named SHOULD-FIX repairs are required.
- **NO-GO** — withdraw or immediately correct before leaving it live.

## Required report structure

1. Identity checks
2. Verdict
3. Findings, each with:
   - severity and title;
   - exact path/URL and reproducer;
   - actual versus expected result;
   - public or governance impact;
   - smallest repair;
   - whether the public article must be temporarily withdrawn;
4. Claim-to-evidence ledger
5. Closure table for A–F
6. Reproduced commands and observed results
7. Confirmed non-findings, especially boundaries you actively attacked
8. External research requirement: `none` unless a specific unresolved claim requires it
9. Workspace cleanup confirmation

Avoid speculative polish suggestions and generic prose advice. A passing build is not by
itself a GO, and a dormant GitHub Pages failure is not by itself a NO-GO. Judge the exact
public truth, evidence binding, canonical production state, and user comprehension.

