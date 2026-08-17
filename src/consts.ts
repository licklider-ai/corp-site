/**
 * サイト全体で共有する定数とナビゲーション定義。
 * 英語化の際は label をまとめて差し替える。
 */

export const SITE_TITLE = 'Licklider';
export const SITE_DESCRIPTION = 'AI駆動時代の責任の設計'; // TODO: 英語版で要調整
export const SITE_VERSION = 'v0.1';
export const SITE_UPDATED = '2026-08-16';

export type NavItem = {
  label: string;
  href: string;
  /** false のものは未実装。リンクではなくプレースホルダーとして描画する。 */
  ready: boolean;
};

/** ヘッダーのグローバルナビゲーション */
export const GLOBAL_NAV: NavItem[] = [
  { label: 'About', href: '/about/', ready: false },
  { label: 'Products', href: '/products/', ready: false },
  { label: 'News', href: '/news/', ready: false },
];

/** 左サイドメニュー。ドラフトの章立てに対応する。 */
export const SIDE_NAV: NavItem[] = [
  { label: 'Thesis', href: '/thesis/', ready: true },
  { label: 'What We Build', href: '/what-we-build/', ready: false },
  { label: 'Why "Licklider"', href: '/why-licklider/', ready: false },
  { label: 'Public Record', href: '/public-record/', ready: false },
];

/** ページ内メニュー (目次) の項目 */
export type TocItem = {
  id: string;
  label: string;
};
