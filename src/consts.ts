import { SCIGROUND } from './data/sciground';

/**
 * Site-wide constants and navigation.
 */

export const SITE_TITLE = 'Licklider';
export const SITE_META_TITLE =
  'SciGround by Licklider — From Design to Claim';
export const SITE_DESCRIPTION = SCIGROUND.description;
export const SITE_VERSION = 'v1.0';
export const SITE_UPDATED = SCIGROUND.updated;

export type NavItem = {
  label: string;
  href: string;
  /** false means the destination is not implemented yet. */
  ready: boolean;
};

/** Global navigation */
export const GLOBAL_NAV: NavItem[] = [
  { label: 'How it works', href: '/#verification', ready: true },
  { label: 'Get started', href: '/#start', ready: true },
  { label: 'Research fit', href: '/#scope', ready: true },
  { label: 'Our research', href: '/#evidence', ready: true },
  { label: 'Docs', href: '/docs/', ready: true },
  { label: 'Connect', href: '/docs/sciground-connect/', ready: true },
];

/** Left navigation used on long-form pages. */
export const SIDE_NAV: NavItem[] = [
  { label: 'SciGround', href: '/#verification', ready: true },
  { label: 'Docs', href: '/docs/', ready: true },
  { label: 'Evaluation', href: '/evaluation/', ready: true },
  { label: 'Thesis', href: '/thesis/', ready: true },
  { label: 'Latest', href: '/latest/', ready: true },
  { label: 'Research', href: '/research/', ready: true },
  { label: 'Engineering', href: '/engineering/', ready: true },
  { label: 'News', href: '/news/', ready: true },
  { label: 'Blog', href: '/blog/', ready: true },
];

/** In-page table of contents item. */
export type TocItem = {
  id: string;
  label: string;
};
