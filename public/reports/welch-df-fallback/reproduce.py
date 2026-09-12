"""Fixed-environment Welch df range reproducer; no nomue dependency."""
import hashlib
import inspect
import json
import platform
import sys
import warnings
from fractions import Fraction
from pathlib import Path

import numpy as np
import scipy
from scipy import stats
from scipy.stats import _stats_py

if (scipy.__version__, np.__version__) != ('1.18.1', '2.3.5'):
    raise RuntimeError('Requires SciPy 1.18.1 and NumPy 2.3.5')

print('SciPy:', scipy.__version__, scipy.version.git_revision)
print('NumPy:', np.__version__)
print('Python:', sys.version.replace('\n', ' '))
print('Platform:', platform.platform())
print('NumPy error settings:', np.geterr())
print('stats source SHA256:', hashlib.sha256(Path(_stats_py.__file__).read_bytes()).hexdigest())

for k in (0, -300, 300):
    x = np.ldexp(np.array([-1., 0., 1.]), k)
    y = np.ldexp(np.array([1., 2., 3.]), k)
    # Exact binary64 values, with no decimal-to-reference ambiguity.
    fx = [Fraction(float(v)) for v in x]
    fy = [Fraction(float(v)) for v in y]
    def moments(z):
        mean = sum(z) / len(z)
        return mean, sum((v - mean)**2 for v in z) / (len(z) - 1)
    mx, vx = moments(fx); my, vy = moments(fy)
    a, b = vx / len(x), vy / len(y)
    exact_df = (a + b)**2 / (a*a/(len(x)-1) + b*b/(len(y)-1))
    exact_t_squared = (mx-my)**2 / (a+b)
    if exact_df != 4 or exact_t_squared != 6 or not mx < my:
        raise RuntimeError('Exact moment reference failed')
    with warnings.catch_warnings(record=True) as caught:
        warnings.simplefilter('always')
        result = stats.ttest_ind(x, y, equal_var=False)
        ci = result.confidence_interval()
    var_x, var_y = np.var(x, ddof=1), np.var(y, ddof=1)
    if not (0 < var_x < np.inf and 0 < var_y < np.inf):
        raise RuntimeError('Example requires positive finite computed variances')
    # Instrument the same denominator expression separately. This is a local
    # diagnostic, not a modification of SciPy's public call above.
    with np.errstate(all='ignore'):
        va, vb = var_x/3, var_y/3
        numerator = (va+vb)**2
        denominator = va**2/2 + vb**2/2
        raw_df = numerator / denominator
        helper_df, _ = _stats_py._unequal_var_ttest_denom(var_x, 3, var_y, 3)
    expected_returned_df = 4 if k == 0 else 1
    if result.df != expected_returned_df or helper_df != result.df:
        raise RuntimeError('Observed df behavior differs from the recorded case')
    if k != 0 and not np.isnan(raw_df):
        raise RuntimeError('Expected undefined intermediate ratio')
    if k == -300 and caught:
        raise RuntimeError('Unexpected warning in the shrinking case')
    print(json.dumps(dict(exponent=k, x_hex=[v.hex() for v in x], y_hex=[v.hex() for v in y],
        variance_x=float(var_x), variance_y=float(var_y), exact_df=str(exact_df),
        exact_t_squared=str(exact_t_squared), t=float(result.statistic), df=float(result.df),
        p=float(result.pvalue), ci_low=float(ci.low), ci_high=float(ci.high),
        ci_low_rescaled=float(np.ldexp(ci.low,-k)), ci_high_rescaled=float(np.ldexp(ci.high,-k)),
        df_numerator=str(numerator), df_denominator=str(denominator), raw_df=str(raw_df),
        warnings=[{'category':w.category.__name__,'message':str(w.message)} for w in caught])))
print('NaN replacement in inspected helper:')
print(next(line.strip() for line in inspect.getsource(_stats_py._unequal_var_ttest_denom).splitlines() if 'xp.where' in line))
print('Build configuration:')
scipy.show_config()
