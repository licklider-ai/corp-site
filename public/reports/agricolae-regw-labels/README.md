# REGW treatment-label reproducer

Files: `report.md` (proposed communication), `reproduce.R` (standalone code),
`observed-output.txt` (captured stdout), `SHA256SUMS` (file integrity).

Install agricolae using the normal CRAN installation process if necessary, then
run the attachment in a clean R session:

```sh
Rscript --vanilla reproduce.R
```

Tested: CRAN agricolae 1.3-7, R 4.6.1 (2026-06-24), Linux x86_64,
Ubuntu 24.04.3, BLAS/LAPACK 3.12.0. The captured invocation used the equivalent
native R executable with `--vanilla --slave -f reproduce.R`; no numerical
package source was modified. R's `packageVersion()` prints this package version
as `1.3.7`.

Loaded dependencies in the preceding full-package environment check:
MASS 7.3-66, AlgDesign 1.2.1.2, nlme 3.1-171, cluster 2.1.8.2, lattice 0.23-1;
compiler and grid 4.6.1. No random input, external data or network access is
used by the reproducer. There are four REGW calls.

The observed output demonstrates a change under treatment renaming. The
script does not enforce a particular p-value as the correct REGW answer and
does not fail deliberately on an implementation that repairs the discrepancy.
Small last-digit differences in the displayed intervals are not the claim.

Sources:

- https://cran.r-project.org/package=agricolae
- https://search.r-project.org/CRAN/refmans/agricolae/html/REGW.test.html
- https://github.com/cran/agricolae/blob/06e4e366bff13eb0c651cb9b086384c5487b356a/R/REGW.test.R

Preparation disclosure: the report and reproducer were prepared with AI
assistance. The listed observations come from native R execution. No maintainer
endorsement or independently validated patch is claimed.
