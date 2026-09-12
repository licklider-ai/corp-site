# Checking Welch results with exact rescaling

Recorded on 2026-09-12 (UTC), using Python 3.12.14, SciPy 1.18.1,
NumPy 2.3.5 and mpmath 1.3.0 on Linux x86_64.

## Reproduce

Use a disposable Python 3.12 environment:

```sh
python -m venv /tmp/welch-repro
. /tmp/welch-repro/bin/activate
python -m pip install scipy==1.18.1 numpy==2.3.5 mpmath==1.3.0
python reproduce.py
python reference.py
```

`observed-output.txt` retains the public API outputs, captured warnings, exact
hexadecimal inputs, local intermediate diagnostics and scipy.show_config().
`reference-output.txt` retains the independent reference calculation. Environment
paths in the build configuration describe the wheel build, not the current runtime.
SHA256SUMS binds these files; a hash establishes identity, not numerical correctness.

Both groups have three observations. Exact rational moments of the actual binary64
inputs give df=4 and t=-sqrt(6) at all three scales. A separate 100-digit mpmath
beta-integral calculation agrees with the elementary probability formula
`1 - (6/5)*sqrt(3/5)`. Its positive two-sided p-value is about 0.070484.

The public call returns df=1 at exponents -300 and +300, even though the computed
sample variances are positive and finite and the t statistic remains unchanged.
The separate diagnostic evaluates the installed helper's same df expression:
0/0 or inf/inf becomes NaN, then the helper returns 1. The installed source hash
matches upstream SciPy 1.18.1 commit e4e854eaa8f18d807cd3496028e257e36caa93cc.
Only this installed release was executed; no development-build result is claimed.

The extreme scales are synthetic stress conditions. No frequency in practical
data or general repair is established. Both p-values remain above 0.05 here.
The script contains diagnostic expectations of the affected release; failure on
a future corrected release would not itself indicate a new defect.

## Status and related reports

This reproducer is published by Licklider. Tasuku Kobayashi submitted this distinct
Welch df observation to SciPy on 2026-09-12 at 09:38:13 UTC:
https://github.com/scipy/scipy/issues/26169

As checked on 2026-09-12 (UTC), the issue is open with no comments. Upstream
confirmation and an accepted repair are pending. The submission adds one distinct
problem to Licklider's upstream-report count; this article and its attachments do
not add separate reports.

Related, different failures:
- https://github.com/scipy/scipy/issues/26113 — one-sample/paired variance range loss.
- https://github.com/scipy/scipy/pull/26135 — proposed repair for those APIs, not this helper.
- https://github.com/scipy/scipy/issues/26146 — Welch ANOVA weight-sum overflow.

Code generation, source inspection, execution and drafting of these test materials
used OpenAI Codex under the account holder's direction. No independent human review
is claimed. The upstream issue was submitted by Tasuku Kobayashi and contains its
own assistance disclosure. Submission does not imply maintainer confirmation.
