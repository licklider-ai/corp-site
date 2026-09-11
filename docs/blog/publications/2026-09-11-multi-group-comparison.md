# Publication record — multi-group comparison guide

- Commission: the user explicitly authorized uploading this article and changed Blog thumbnails from required to optional.
- Input: corp-site `e1b75e4cd2f02047e75c2f5e530215fcf4199479`; Blog policy v1.3; site publication policy v2.0.
- Accountable role: site editorial steward. Integration and publication self-review by the same AI assistant that drafted the article; no independent review is claimed.
- Canonical article: `/blog/before-asking-an-agent-to-compare-groups/`, source `src/pages/blog/before-asking-an-agent-to-compare-groups.astro`.
- Publication date: September 11, 2026. Title and summary come from the single Blog entry in `PUBLICATIONS`.
- Historical draft and source ledger: [draft review](../drafts/before-asking-an-agent-to-compare-groups/review.md). Its draft-only status, image requirement and pending-integration descriptions are historical. This record and policy v1.3 supersede those delivery conditions. Draft files remain frozen evidence; future article edits belong in the canonical page.

## Editorial and evidence confirmation

The article's substantive text is unchanged from the completed draft. A normalized HTML-text comparison against its frozen preview passes. The sole extra reader-facing text is a link to the Blog index. The prior E01–E05 selection and B01–B11 reasoning are reused within their recorded limits; publication introduces no new statistical, product-support, benchmark or customer claim.

On September 11, 2026 the official SciPy `dunnett` reference (identified as v1.18.0) and NIST prc47/prc473 pages were retrieved again. Their cited assumptions, overall-versus-pair distinction, and simultaneous-coverage explanation remain as recorded. The three cited corp-site reports remain unchanged at the input main commit; their linked fragments resolve in the generated site. Required communication, Charter/active precedence and controlled-terminology authorities were read during this commission's drafting stage. No new release capability is asserted, so the article does not rely on a new package/support announcement.

The example remains explicitly hypothetical and untested as an agent prompt. The two comparisons, illustrative thresholds, interval interpretation and experimental declarations keep their original boundaries. Prior self-review is not described as independent scientific review.

## Image decision

Thumbnails are now optional. This article retains its original diagram because it explains the three distinct questions. The served SVG is byte-identical to the reviewed draft asset; original creation, alt text and caption remain recorded in the draft review. It is supplied to the existing shared `thumbnail` slot, between header and body. No separate Blog layout or required-image schema was added. Omitting that slot renders no image wrapper. Blog/Latest/homepage lists remain text-only; existing social image metadata is preserved.

## Publication checks

| Check | Result and evidence |
| --- | --- |
| B01–B11 | PASS: unchanged substantive article; prior claim ledger and self-review remain applicable, with refreshed official sources as above. |
| B12 | PASS for prepared publication: explicit authorization; local Astro check/build completed with 0 errors/warnings/hints; generated article title, summary, date, canonical and Article JSON-LD match the registry; new Blog index and Latest/homepage discovery exist; 34 unique items are present in RSS and JSON Feed; article is included in the sitemap; internal citation anchors resolve. Remote CI and deployment evidence are recorded by the publication PR and final delivery. |
| B13 | PASS: optional image selected for this article; actual asset, alt, dimensions and named-slot placement checked; lists contain no Blog images. No image absence is treated as a failure. |

The shared layout retains its existing reading width and responsive wide image canvas. The comparison table is contained in a horizontally scrollable, keyboard-focusable region on narrow screens; the request block uses wrapping prose. Generated HTML was inspected programmatically. Browser/mobile visual QA was not requested and is not claimed.

Validation uses the repository's pinned pnpm 10.33.0 with its unchanged lockfile and package settings. The environment helper selected an incompatible newer pnpm; installation/build were completed using the declared repository version. No dependency or build-approval policy changes are included.

Prepared delivery status: `PUBLICATION_READY`. This pre-deployment record does not itself prove deployment. The associated PR's merge/deployment checks and the live URL verification in the final delivery establish actual publication. Maintainer: site editorial steward. Future corrections to sources, article meaning or image content require updating the canonical article and affected registry summaries/feeds; ordinary layout changes do not reset the publication date.
