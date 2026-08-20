# Engineering Article Template

Use this as a starting point, not as a mandatory visual structure. Delete sections that do not help the reader.

## Drafting boundary

`corp-site` is a public repository. A source file committed to a branch or pull request is publicly readable even when Astro excludes `status: draft` from generated routes.

Routine early drafting, evidence reconciliation, and adversarial review therefore happen in the approved private working source. Transfer an article into this repository only after the normal human publication approval.

The `draft` status below is a rendering state, not a confidentiality mechanism. Use it in `corp-site` only when the source itself is safe to expose publicly.

## Frontmatter — explainer

```yaml
---
title: ""
description: ""
kind: explainer
status: draft
authors:
  - Licklider
---
```

For a normal approved publication candidate, set the authoritative publication state and date during transfer rather than using `draft` as a private staging mechanism.

## Frontmatter — measurement

```yaml
---
title: ""
description: ""
kind: measurement
status: draft
authors:
  - Licklider
softwareVersions:
  - ""
publicEvidenceRefs:
  - "https://..."
---
```

## Frontmatter — third-party issue

```yaml
---
title: ""
description: ""
kind: third_party_issue
status: draft
authors:
  - Licklider
upstreamRefs:
  - "https://..."
publicEvidenceRefs:
  - "https://..."
---
```

Before source enters this public repository, apply the current upstream Public Communication policy. A valid frontmatter shape never implies that publication is authorized.

## Suggested article body

```markdown
# Title

Opening: state the concrete technical question or event in plain language.

## Why this matters

Explain the consequence before implementation detail.

## What we observed

Separate measurements and directly observed behavior from interpretation.

## How we investigated it

Include versions, environment, method, and reproducible public artifacts when they materially affect the result.

## What we think is happening

Use this section only when causal interpretation is useful. Mark unconfirmed root cause as hypothesis.

## Limitations

State what the evidence does not establish. Do not use a narrow check as universal correctness evidence.

## What happens next

Describe the next upstream, implementation, or verification step without turning roadmap into current capability.

## References

Link public primary sources and reproducible public artifacts.
```

## Correction metadata

When a substantive published claim changes, update the status and add a visible correction record instead of silently rewriting history.

```yaml
status: corrected
updatedAt: 2026-08-20
corrections:
  - date: 2026-08-20
    note: "Describe the substantive correction in one sentence."
    url: "https://..." # optional public supporting source
```

For supersession:

```yaml
status: superseded
supersededBy: new-article-slug
```
