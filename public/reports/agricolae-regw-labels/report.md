Subject: REGW.test: renaming treatments changes pairwise significance and grouping

Dear Dr. de Mendiburu,

The attached example shows a treatment-label dependence in `REGW.test()` with
CRAN agricolae 1.3-7 on R 4.6.1, Linux x86_64. Renaming treatments B and D,
without changing any observations or their group membership, changes a
comparison's p-value, displayed interval and shared-letter grouping.

The example has four groups of six observations, means 0, 1.625, 4 and 8,
and residuals alternating between -1 and +1. Both analyses use the documented
`REGW.test(aov_model, "trt", ...)` interface. Both models have residual df=20
and residual mean square=1.2; these parameters are extracted by the function,
not supplied manually.

Minimal pairwise example:

```r
library(agricolae)
y <- rep(c(0, 13/8, 4, 8), each=6) + rep(c(-1, 1), 12)
run <- function(labels) {
  d <- data.frame(y=y, trt=factor(rep(labels, each=6)))
  REGW.test(aov(y ~ trt, data=d), "trt", group=FALSE)$comparison
}
run(c("A", "B", "C", "D"))["A - B", ]
run(c("A", "D", "C", "B"))["A - D", ]
```

These rows compare exactly the same observations, with the same difference
of -1.625:

| Labels for the four numeric groups | Pair | p-value | Displayed LCL | Displayed UCL |
| --- | --- | --- | --- | --- |
| A, B, C, D | A - B | 0.0363 | -3.15369694116 | -0.0963030588423 |
| A, D, C, B | A - D | 0.0791 | -3.39520265094 | 0.145202650939 |

Thus the 5% decision changes. With `group=TRUE`, the same two numeric groups
also change from distinct letters to a shared letter. `reproduce.R` includes
both displays, checks that the paired observations are identical after renaming,
and prints the R/package versions and model error parameters. Its captured
output is attached.

The apparent cause is this statement in `REGW.test`:

```r
Omeans <- order(means[, 1], decreasing = TRUE)
```

At this point the first column contains treatment labels and the second
contains response means. The derived `Ordindex` controls `odif`, which then
controls the range size used in p-values and displayed intervals. For the pair
above, its span in label order changes from 2 to 4, whereas its span in mean
order remains 2. Could this ordering use the response-mean column instead?
This is a proposed source location to inspect, not a claim that a one-line
change fully validates the REGW procedure.

The expected property is that a bijective renaming leaves the inference for
the same numeric groups unchanged. This report does not assume that either
observed p-value is a certified reference value, and does not claim a general
error rate or a complete algorithmic fix.

Please let me know if a different reporting channel is preferred or if this
has already been addressed.

Thank you for maintaining agricolae.
