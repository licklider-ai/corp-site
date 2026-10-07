# SciGround website relaunch

Date: 2026-10-07 UTC. Accountable decision: founder-approved product narrative and
production publication in the current task. Implementation and review: Codex;
self-review is not an independent scientific validation.

## Approved scope

- Preserve the exact Hero: “Make Your AI-Assisted Research Mathematically
  Verifiable.” / “From Design to Claim.”
- Present the complete adopted ADY product, without implementation-progress
  framing. Publication is explicitly authorized. No invented user traction,
  partner logos, demonstrations, or new research evidence.
- Keep the direction from available evidence toward admissible claims. Each
  stage transfers conditions; checking stage completion alone is insufficient.
- Show numerical guarantees, semantic connections, and version/state handling.
  External assumptions and statistical uncertainty remain explicit.
- Three entry points: design, existing data, existing analysis. Missing historical
  evidence is not restored by a current check.
- MCP/API are SciGround connection paths. Existing nomue packages are not
  advertised as installers for SciGround. No fabricated public endpoint,
  credential, API request schema, price, or signup is introduced.

## Sources and scope review

Product direction and portfolio were inspected in `licklider-ai/SciGround`:
`product/DIRECTION.md` (blob d587b11397ec59d424039b40f389a3822a8812eb)
and `product/PORTFOLIO.md` (blob 950e1833eb63a1c758350e20d5e054a0e7c689e8).
These are review provenance, not links exposing private implementation to visitors.
The key boundaries include ADY-007/008/009 and ADY-012 through ADY-023.

Checks against overstatement:
- Do not claim exclusive ownership of research workflows, provenance, or AI review.
- Do not describe competing research products as incapable of verification.
- Do not turn numerical enclosure into statistical validity or scientific truth.
- Do not generalize paired comparisons to arbitrary repeated measures, bulk RNA-seq
  to all omics, or sample-removal certificates to RNA-seq or arbitrary software.
- Preserve nomue paper titles, artifact names, publication dates, statuses, and
  registry counts. Product completion does not change those historical findings.

## Changed surfaces

Homepage, global navigation, footer, company introduction, thesis product paragraph,
site description/JSON-LD/social image, and human/machine docs discovery now lead
with SciGround. Structured SciGround guides render through the existing shared
HTML/Markdown renderer. The old docs landing content remains at `/docs/nomue/`.
Existing document, publication, report, and feed URLs are retained.

`src/data/publications.ts` and the legacy release/upstream registry are preserved,
except the company introduction in `site-facts.ts`. News, publication dates,
research results, and upstream dispositions are not changed by a design update.
The homepage retains all Research/Publication cards and eight Latest entries.

Content-impact inspection uses actual base
`02b154a97fe11d9653922b3da201969950e00add`.
Candidate articles/feeds were inspected for affected meaning; their original
artifact-specific body, evidence, metadata, and dates remain unchanged.

## Local validation

- Dependency versions and lockfile unchanged; pnpm 10.33.0.
- Astro check: 101 files, zero errors/warnings/hints.
- Static build: 82 HTML pages generated successfully.
- Existing content-impact tests: 4/4 pass.
- Local HTML links: 2,091 checked, zero missing files or fragment targets;
  no duplicate IDs.
- `git diff --check`: clean.
- Browser rendering and deployment confirmation follow on the hosted preview;
  local Playwright's browser download was unavailable. Do not count a static
  link check as a visual review.
