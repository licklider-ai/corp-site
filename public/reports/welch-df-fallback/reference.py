"""Independent elementary and beta-integral checks; no SciPy or nomue."""
import mpmath as mp
if mp.__version__ != '1.3.0':
    raise RuntimeError('Requires mpmath 1.3.0')
with mp.workdps(100):
    t = -mp.sqrt(6)
    p = mp.betainc(2, mp.mpf('0.5'), 0, mp.mpf(4)/10, regularized=True)
    elementary = 1 - mp.mpf(6)/5 * mp.sqrt(mp.mpf(3)/5)
    if abs(p-elementary) > mp.mpf('1e-95'):
        raise RuntimeError('Independent formulas disagree')
    print('mpmath:',mp.__version__,'decimal digits:',mp.mp.dps)
    print('Exact df: 4; exact t squared: 6; t is negative')
    print('t:',mp.nstr(t,60))
    print('two-sided p:',mp.nstr(p,60))
    print('elementary/beta difference:',mp.nstr(abs(p-elementary),8))
