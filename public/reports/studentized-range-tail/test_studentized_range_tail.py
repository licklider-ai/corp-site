"""Proposed bounded regression checks; failures on affected versions are expected.

These tolerances specify proposed checks for two fixed coordinates, not a
claim that SciPy promises these relative/absolute errors on its entire domain.
"""
import pytest
from scipy.stats import studentized_range
from reference import reference


@pytest.mark.parametrize('q', [100, 10000])
def test_sf_two_means_df_two(q):
    assert float(studentized_range.sf(q, 2, 2)) == pytest.approx(
        reference(q)['sf'], rel=1e-8, abs=0)


@pytest.mark.parametrize('q', [100, 10000])
def test_cdf_two_means_df_two(q):
    assert float(studentized_range.cdf(q, 2, 2)) == pytest.approx(
        reference(q)['cdf'], rel=0, abs=1e-11)
