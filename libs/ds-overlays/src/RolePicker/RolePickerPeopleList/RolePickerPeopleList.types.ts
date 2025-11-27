import { Paginated, Person } from '../RolePicker.types';

export type RolePickerPeopleListProps = {
  filterQuery?: string;
  people: Paginated<Person>;
  showDeceasedPeople: boolean;
};
