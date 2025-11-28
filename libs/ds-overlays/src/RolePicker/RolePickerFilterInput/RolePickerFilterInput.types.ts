import { ChangeEventHandler, MouseEventHandler } from 'react';

export type RolePickerFilterInputProps = {
  label: string;
  value: string;
  onClear?: MouseEventHandler<HTMLButtonElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
