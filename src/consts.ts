/**
 * サイト全体で共有する定数とナビゲーション定義。
 * 英語化の際は label をまとめて差し替える。
 */

export const SITE_TITLE = 'Licklider';
export const SITE_DESCRIPTION =
  'Engineering accountability in the AI era. Licklider builds the infrastructure for responsible approval.';
export const SITE_VERSION = 'v0.1';
export const SITE_UPDATED = '2026-08-23';

export type NavItem = {
  label: string;
  href: string;
  /** false のものは未実装。リンクではなくプレースホルダーとして描画する。 */
  ready: boolean;
};

/** ヘッダーのグローバルナビゲーション */
export const GLOBAL_NAV: NavItem[] = [
  { label: 'About', href: '/about/', ready: true },
  { label: 'Products', href: '/#what-we-build', ready: true },
  { label: 'Latest', href: '/latest/', ready: true },
];

/** 左サイドメニュー。ドラフトの章立てに対応する。 */
export const SIDE_NAV: NavItem[] = [
  { label: 'Thesis', href: '/thesis/', ready: true },
  { label: 'What We Build', href: '/what-we-build/', ready: false },
  { label: 'Why "Licklider"', href: '/why-licklider/', ready: false },
  { label: 'Latest', href: '/latest/', ready: true },
  { label: 'Research', href: '/research/', ready: true },
  { label: 'Engineering', href: '/engineering/', ready: true },
  { label: 'News', href: '/news/', ready: true },
];

/** ページ内メニュー (目次) の項目 */
export type TocItem = {
  id: string;
  label: string;
};
