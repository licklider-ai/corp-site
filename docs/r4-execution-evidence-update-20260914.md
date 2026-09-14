# R4 execution evidence and candidate policy update

Date: 2026-09-14 UTC. The user authorized the recommended existing-article update
after the preceding 24-hour publication audit. No new Latest entry is created.

## Fixed inputs

- Site base: `3406980822e0ba5cf06658fa16bd10b13d01748b`.
- Protocol main observed: `6e81be182d936ad01d736ea3a665abc02a4934bd`.
- Separate review: `47b8803282de83576563e350395a1c13ab683a67`, reviewing
  runtime `1caac8df84ba73e73e160e844fcc228fc884f31c`.
- R4 PR #331 evidence: `2732a26fd61d4e726fbd95b4d7622574cfcd9d82`;
  new mode-validation execution target `761eb8e00cdfc06c9f3792271b4c384f922669ce`.
- T03 candidate decision: `d9ec6984f55f09caa2f65d7714af72190d63c6d4`.

Read the host-repair response, mode-repair evidence, T03 decisions and the current
article. The independent review covers its original runtime only. The new mode
captures are author-run CI evidence on the named repair commit; the later evidence
commit does not change the execution target. The historical 17-value oracle
comparison is not a numerical recheck of the new captures. Public-candidate policy
selection does not implement a new report, CLI contract or supported bundle.

## Publication and review scope

Update the factorial-probability article, its canonical metadata and shared R4
progress summary. The shared sources feed the homepage, both LLM indexes, Latest,
Engineering, RSS and JSON Feed. Preserve the original URL, first publication and
sort order. Other historical articles retain their fixed claims and dates.

The earlier optimized-coverage statement is qualified because the test driver's
mode was not propagated to every isolated supervisor. The successor evidence
checks actual per-process flags. Production worker invocation is separately fixed.
The article retains the original experiment and explains that its submitted
interval is not a mandatory producer field in the next public candidate.

No new mathematical claim from the EC1/EC2 or G1-G3 research is promoted. No
Protocol merge, release decision or upstream message is part of this update.

Editorial review: continuing editor with OpenAI Codex assistance and the preceding
audit visible; this is source checking and self-review, not independent scientific
or implementation approval. Public source inputs only. Explain the benefit and
material verification conditions without copying production implementation.

## Validation and publication completion

Run the content impact command against the actual site base, the production build,
generated-page/feed checks and a final diff review before integration. Record the
successful production deployment separately, then finalize the UTC update instant
under docs/deployment.md. An old update instant is not reused for this content.

Local validation completed with Node 24.19.0 and existing dependencies whose
lockfile matches the site. The pnpm launcher attempted dependency reconciliation
and stopped before build; `npm run build` executed the unchanged build script:
content impact, Astro check (82 files, zero diagnostics) and static build (62 pages).
The impact command was also run with the exact base above. Generated article,
canonical, original publication instant, current update date, homepage, both LLM
indexes, Latest, Engineering, RSS and JSON Feed checks passed. The article occurs
once in JSON Feed, with its original publication instant and no invented update
instant. Git whitespace checks pass. No layout or styling changes were made.
Hosted Node 22/pnpm validation and production completion are checked separately.
