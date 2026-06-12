export const topBannerAnalyticsIds = {
  logo: 'topbanner.logo',
  languageMenuToggle: 'topbanner.language-menu.toggle',
  languageMenu: {
    root: 'topbanner.language-menu',
    norsk: 'topbanner.language-menu.norsk',
    nynorsk: 'topbanner.language-menu.nynorsk',
    english: 'topbanner.language-menu.english',
    samisk: 'topbanner.language-menu.samisk',
  },
  userMenuToggle: 'topbanner.user-menu.toggle',
  userMenu: {
    root: 'topbanner.user-menu',
    switchUser: 'topbanner.user-menu.switch-user',
    notifications: 'topbanner.user-menu.notifications',
    myPage: 'topbanner.user-menu.my-page',
    aboutMe: 'topbanner.user-menu.about-me',
    aboutBusiness: 'topbanner.user-menu.about-business',
    logout: 'topbanner.user-menu.logout',
  },
  login: 'topbanner.login',
  logout: 'topbanner.logout',
  search: 'topbanner.search',
  mainMenuToggle: 'topbanner.main-menu.toggle',
  mainMenu: 'topbanner.main-menu',
} as const;

type ValueOf<T> = T[keyof T];

type TopBannerAnalyticsIdGroup = ValueOf<typeof topBannerAnalyticsIds>;
type TopBannerNestedAnalyticsIdGroup = ValueOf<
  Exclude<TopBannerAnalyticsIdGroup, string>
>;

export type TopBannerAnalyticsId =
  | Extract<TopBannerAnalyticsIdGroup, string>
  | TopBannerNestedAnalyticsIdGroup;

export type TopBannerLanguageMenuAnalyticsId = Exclude<
  ValueOf<typeof topBannerAnalyticsIds.languageMenu>,
  typeof topBannerAnalyticsIds.languageMenu.root
>;
