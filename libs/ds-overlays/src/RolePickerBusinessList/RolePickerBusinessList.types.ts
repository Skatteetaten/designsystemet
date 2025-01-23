import { Business, Paginated } from '../RolePicker/RolePicker.types';

export type RolePickerBusinessListProps = {
  filterQuery?: string;
  businesses: Paginated<Business>;
  showInactiveBusinesses?: boolean;
  showSubunits?: boolean;
};
