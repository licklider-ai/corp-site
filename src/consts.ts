/**
 * Site-wide constants and navigation.
 */

export const SITE_TITLE = 'Licklider';
export const SITE_META_TITLE =
  'Licklider — Verification middleware for AI research agents';
export const SITE_DESCRIPTION =
  'Licklider builds verification middleware for AI research agents. Run the open-source nomue verifier locally to check supported Welch statistical Records.';
export const SITE_VERSION = 'v0.3';
export const SITE_UPDATED = '2026-09-01';

export type NavItem = {
  label: string;
  href: string;
  /** false means the destination is not implemented yet. */
  ready: boolean;
};

/** Global navigation */
export const GLOBAL_NAV: NavItem[] = [
  { label: 'nomue', href: '/nomue/', ready: true },
  { label: 'Docs', href: '/docs/', ready: true },
  { label: 'Research', href: '/research/', ready: true },
  { label: 'Latest', href: '/latest/', ready: true },
  { label: 'About', href: '/about/', ready: true },
];

/** Left navigation used on long-form pages. */
export const SIDE_NAV: NavItem[] = [
  { label: 'nomue', href: '/nomue/', ready: true },
  { label: 'Docs', href: '/docs/', ready: true },
  { label: 'Evaluation', href: '/evaluation/', ready: true },
  { label: 'Thesis', href: '/thesis/', ready: true },
  { label: 'Latest', href: '/latest/', ready: true },
  { label: 'Research', href: '/research/', ready: true },
  { label: 'Engineering', href: '/engineering/', ready: true },
  { label: 'News', href: '/news/', ready: true },
];

/** In-page table of contents item. */
export type TocItem = {
  id: string;
  label: string;
};
