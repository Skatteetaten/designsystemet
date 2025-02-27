import {
  getRolePickerHideCloseButtonDefault,
  getRolePickerShowDeceasedPeopleDefault,
  getRolePickerShowInactiveBusinessesDefault,
  getRolePickerShowSubunitsDefault,
} from '../defaults';

describe('RolePicker defaults', () => {
  it('Når getRolePickerHideCloseButtonDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getRolePickerHideCloseButtonDefault();
    expect(renderDefault).toBe(false);
  });

  it('Når getRolePickerShowSubunitsDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getRolePickerShowSubunitsDefault();
    expect(renderDefault).toBe(true);
  });

  it('Når getRolePickerShowInactiveBusinessesDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getRolePickerShowInactiveBusinessesDefault();
    expect(renderDefault).toBe(false);
  });

  it('Når getRolePickerShowDeceasedPeopleDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getRolePickerShowDeceasedPeopleDefault();
    expect(renderDefault).toBe(false);
  });
});
