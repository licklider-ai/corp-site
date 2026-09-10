"""Six public distribution calls, with a library-independent exact reference."""
import json
import warnings
import scipy
from scipy.stats import studentized_range
from reference import reference

print('SciPy:', scipy.__version__)
for q in (4, 100, 10000):
    ref = reference(q)
    assert ref['sf'] == reference(q, 384)['sf']
    assert ref['cdf'] == reference(q, 384)['cdf']
    row = dict(q=q, k=2, df=2, reference_sf=ref['sf'], reference_cdf=ref['cdf'])
    for method in ('sf', 'cdf'):
        with warnings.catch_warnings(record=True) as captured:
            warnings.simplefilter('always')
            value = float(getattr(studentized_range, method)(q, 2, 2))
        row[method] = value
        row[method+'_hex'] = value.hex()
        row[method+'_warnings'] = [str(item.message) for item in captured]
    print(json.dumps(row, sort_keys=True))
