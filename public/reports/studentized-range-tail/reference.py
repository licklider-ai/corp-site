"""Exact rational bounds for the k=2, df=2 studentized-range tail.

Q = sqrt(2)*abs(T_2), so P(Q > q) = 4/(s*(s+q)), s=sqrt(q*q+4).
Only nonnegative integer q is supported by this small reference.
"""
from fractions import Fraction
from math import isqrt


def reference(q, bits=256):
    if not isinstance(q, int) or q < 0:
        raise ValueError('q must be a nonnegative integer')
    scale = 1 << bits
    square = (q*q + 4) * scale*scale
    n = isqrt(square)
    assert n*n <= square < (n+1)*(n+1)
    lo = Fraction(n, scale)
    hi = Fraction(n+1, scale)
    sf_lo = 4 / (hi*(hi+q))
    sf_hi = 4 / (lo*(lo+q))
    cdf_lo = Fraction(q) / hi
    cdf_hi = Fraction(q) / lo
    assert float(sf_lo) == float(sf_hi)
    assert float(cdf_lo) == float(cdf_hi)
    return dict(sf=float(sf_lo), cdf=float(cdf_lo),
                sf_bounds=[str(sf_lo), str(sf_hi)],
                cdf_bounds=[str(cdf_lo), str(cdf_hi)])
