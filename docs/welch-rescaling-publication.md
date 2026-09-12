# Welch rescaling technical article — 2026-09-12

Owner decision: stop the numerical-comparison preprint. Preserve the v0.3 source,
reviews and evidence internally; publish a short verification-method article and
pursue a focused SciPy report. No R panel or further paper experiment is authorized
by this editorial work.

## Exact public scope

Engineering / Technical method, `/engineering/checking-welch-results-with-exact-rescaling/`.
Audience: scientific-tool developers. Event: publication of a small executable
reproducer and an explanation of the checking method. Responsible organization:
Licklider. This is neither a product release nor an externally reviewed comparison.

The public payload comprises newly authored six-observation test inputs, scripts,
outputs, source identity and hashes. It does not disclose the private 192-case
comparison corpus or its archived manuscript. The two scripts were actually run
on Python 3.12.14 / SciPy 1.18.1 / NumPy 2.3.5 / mpmath 1.3.0, Linux x86_64.

## Claims and evidence

- Correct df=4 and t=-sqrt(6): exact Fraction moments in reproduce.py.
- Correct p≈0.070484: elementary formula and independent beta integral in reference.py.
- Returned df=1/p≈0.246752: saved direct-call outputs at exponents -300 and +300.
- Positive finite variances: recorded np.var outputs and explicit checks.
- NaN fallback: separately evaluated expression and installed helper; installed file
  SHA256 matches upstream e4e854eaa8f18d807cd3496028e257e36caa93cc.
- Warning-free shrinking call: capture with simplefilter(always), default NumPy
  underflow handling. This is not a claim that all floating-point diagnostics were enabled.
- No 5% decision change in these examples; no real-data prevalence or general fix.
- Interval scoring is explained as a method; this small reproducer uses rational
  moments and elementary/high-precision references, not a new Arb certification run.

## Duplicate and upstream checks

Bounded tracker searches for ttest_ind/underflow, Welch/df/underflow and the helper
name found related reports #26113, #26146, #10269, #6409 and #5686, but no directly
matching submitted df-fallback example. #26135 changes one-sample/paired standard
errors, not the unequal-variance helper. This is not an exhaustive novelty claim.

SciPy's current AI policy reserves developer communication to humans, except
translation/grammar assistance. Accordingly, no automatically generated issue was
posted. The owner-facing source packet is for a person's own report. Public status
is reproduction completed / submission pending; UPSTREAM_CONTRIBUTIONS and its
count stay unchanged. No maintainer receipt, acceptance or confirmation is implied.
Policy checked: https://scipy.github.io/devdocs/dev/conduct/ai_policy.html

## Editorial and implementation review

Checked applicable publication architecture, deployment/UTC rules, public-claims
policy, active capability-first Charter amendment and controlled terminology.
The article leads with a concrete observation and explains the company lesson.
No product ranking or model-performance conclusion. It does not assert that agents
never preprocess data. Existing unrelated publications remain unchanged.

OpenAI Codex generated the scripts, executed the checks, inspected source and
outputs, and drafted/reviewed this article under the owner's direction. This is
not an independent human or maintainer review. The public README discloses assistance.

Publication follows normal PR/build/merge/Vercel checks. The successful production
completion time will be added to the registry after the deployment is observed;
no draft or build timestamp is used as publication time.
