# Run in a clean session: Rscript --vanilla reproduce.R
# Requires the unmodified CRAN agricolae package (tested with 1.3-7).
library(agricolae)
options(digits = 12)

y <- rep(c(0, 13/8, 4, 8), each = 6) + rep(c(-1, 1), 12)
original <- data.frame(y = y, trt = factor(rep(c("A", "B", "C", "D"), each = 6)))
renamed <- data.frame(y = y, trt = factor(rep(c("A", "D", "C", "B"), each = 6)))
fit1 <- aov(y ~ trt, data = original)
fit2 <- aov(y ~ trt, data = renamed)
stopifnot(identical(original$y, renamed$y),
          identical(original$y[original$trt == "A"], renamed$y[renamed$trt == "A"]),
          identical(original$y[original$trt == "B"], renamed$y[renamed$trt == "D"]))
cat("R:", R.version.string, "\nPlatform:", R.version$platform,
    "\nagricolae:", as.character(packageVersion("agricolae")), "\n")
cat("Residual df:", df.residual(fit1), df.residual(fit2), "\n")
cat("Residual mean square:", deviance(fit1)/df.residual(fit1),
    deviance(fit2)/df.residual(fit2), "\n")
first <- REGW.test(fit1, "trt", group = FALSE)
second <- REGW.test(fit2, "trt", group = FALSE)
cat("Same numeric pair, before and after renaming B <-> D:\n")
print(first$comparison["A - B", , drop = FALSE])
print(second$comparison["A - D", , drop = FALSE])
cat("Displayed groups before renaming:\n")
print(REGW.test(fit1, "trt", group = TRUE)$groups)
cat("Displayed groups after renaming:\n")
print(REGW.test(fit2, "trt", group = TRUE)$groups)
