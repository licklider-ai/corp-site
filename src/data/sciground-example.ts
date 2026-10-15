/**
 * Synthetic illustration SG-EXAMPLE-001; not an actual study, public API request,
 * SciGround execution, verification certificate, or evidence of scientific effect.
 *
 * All homepage/report displays and the accompanying CSV use these same 20 rows.
 * One body-weight measurement per animal at day 14; no rows excluded.
 * M17 is Control in the supplied source but Treatment in the earlier analysis input.
 * Correcting that label changes group membership, not any measurement.
 *
 * Numerical fixture calculated with Python / NumPy and SciPy 1.17.0:
 *   c = weights where the chosen group field is 'Control'
 *   t = weights where the chosen group field is 'Treatment'
 *   r = scipy.stats.ttest_ind(t, c, equal_var=False, alternative='two-sided')
 *   ci = r.confidence_interval(confidence_level=0.95)
 *   mean_difference = mean(t) - mean(c)
 * Sample SD uses ddof=1; degrees of freedom use Welch–Satterthwaite.
 * Exported unrounded numbers are IEEE binary64 calculations, not a claim of
 * mathematically certified rounding. Round only at the presentation layer.
 *
 * Independence and the sampling/model conditions are declared assumptions in
 * this illustration. Matching source rows does not establish true animal identity,
 * measurement accuracy, random assignment, or an absence of cage effects.
 */

export type ExampleGroup = 'Control' | 'Treatment';
export interface ExampleAnimal {
  id: string;
  group: ExampleGroup;
  weight: number;
  day: number;
  beforeGroup: ExampleGroup;
}

export const EXAMPLE_ANIMALS: readonly ExampleAnimal[] = [
  {
    "id": "M01",
    "group": "Control",
    "weight": 24.1,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M02",
    "group": "Control",
    "weight": 25.2,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M03",
    "group": "Control",
    "weight": 23.8,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M04",
    "group": "Control",
    "weight": 26.0,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M05",
    "group": "Control",
    "weight": 24.7,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M06",
    "group": "Control",
    "weight": 25.5,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M07",
    "group": "Control",
    "weight": 23.9,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M08",
    "group": "Control",
    "weight": 24.8,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M09",
    "group": "Control",
    "weight": 25.0,
    "day": 14,
    "beforeGroup": "Control"
  },
  {
    "id": "M10",
    "group": "Treatment",
    "weight": 22.8,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M11",
    "group": "Treatment",
    "weight": 23.4,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M12",
    "group": "Treatment",
    "weight": 21.9,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M13",
    "group": "Treatment",
    "weight": 24.1,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M14",
    "group": "Treatment",
    "weight": 22.6,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M15",
    "group": "Treatment",
    "weight": 23.0,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M16",
    "group": "Treatment",
    "weight": 22.2,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M17",
    "group": "Control",
    "weight": 26.2,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M18",
    "group": "Treatment",
    "weight": 23.7,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M19",
    "group": "Treatment",
    "weight": 21.8,
    "day": 14,
    "beforeGroup": "Treatment"
  },
  {
    "id": "M20",
    "group": "Treatment",
    "weight": 22.9,
    "day": 14,
    "beforeGroup": "Treatment"
  }
];

export const EXAMPLE_BEFORE_CORRECTION = {
  "version": "Before correction",
  "control": {
    "n": 9,
    "mean": 24.77777777777778,
    "sd": 0.744610263456289
  },
  "treatment": {
    "n": 11,
    "mean": 23.145454545454545,
    "sd": 1.239648043892811
  },
  "meanDifference": -1.632323232323234,
  "confidenceInterval": {
    "level": 0.95,
    "low": -2.5802206873773965,
    "high": -0.6844257772690712
  },
  "t": -3.638113744196409,
  "df": 16.703806620629788,
  "p": 0.0020837182740723846
} as const;

export const EXAMPLE_REPORT = {
  "version": "After correction",
  "control": {
    "n": 10,
    "mean": 24.919999999999998,
    "sd": 0.8337332373793855
  },
  "treatment": {
    "n": 10,
    "mean": 22.84,
    "sd": 0.7530677998102903
  },
  "meanDifference": -2.0799999999999983,
  "confidenceInterval": {
    "level": 0.95,
    "low": -2.8269612666973547,
    "high": -1.3330387333026419
  },
  "t": -5.854575675318248,
  "df": 17.816778064891103,
  "p": 1.5837495990128225e-05
} as const;

export const EXAMPLE_MISMATCH = {
  id: 'M17',
  sourceGroup: 'Control',
  analysisGroup: 'Treatment',
  weight: 26.2,
  correctedGroup: 'Control',
  source: 'Supplied group-assignment record',
  action: 'Confirm the source assignment, correct M17, and rerun the analysis.',
} as const;

export const EXAMPLE_SCOPE = {
  id: 'SG-EXAMPLE-001',
  label: 'Illustrative example · synthetic data',
  title: 'Body weight at day 14',
  question: 'How does body weight differ between the two groups at day 14?',
  endpoint: 'Body weight',
  unit: 'g',
  comparison: 'Treatment − Control',
  method: 'Two-sided Welch t-test',
  interval: '95% confidence interval for the mean difference',
  design: 'Two independent groups; one measurement per animal at a fixed time point.',
  inclusion: 'All 20 supplied animals included; no missing values or exclusions.',
  assumptions: 'Independent observations and approximately normal within-group outcomes are assumed; equal variances are not required.',
  boundary: 'Source matching does not verify animal identity, measurement accuracy, random assignment, or independence.',
  conclusion: 'In this illustrative dataset, mean day-14 body weight is 2.08 g lower in the treatment group.',
  interpretation: 'The comparison describes this endpoint under the stated assumptions; it does not establish a causal treatment effect or general scientific validity.',
  csvUrl: '/examples/group-comparison.csv',
  executable: false,
} as const;
