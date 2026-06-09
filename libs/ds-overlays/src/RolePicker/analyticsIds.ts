export const rolePickerAnalyticsIds = {
  me: 'rolepicker.me',
  person: 'rolepicker.person',
  deceasedPerson: 'rolepicker.person.deceased',
  business: 'rolepicker.business',
  businessSubunit: 'rolepicker.business.subunit',
  discontinuedBusiness: 'rolepicker.business.discontinued',
  logout: 'rolepicker.logout',
} as const;

export type RolePickerAnalyticsId =
  (typeof rolePickerAnalyticsIds)[keyof typeof rolePickerAnalyticsIds];
