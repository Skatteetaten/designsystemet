import { Paginated, Person } from '../RolePicker/RolePicker.types';

export type RolePickerPeopleListProps = {
  filterQuery?: string;
  people: Paginated<Person>;
};
