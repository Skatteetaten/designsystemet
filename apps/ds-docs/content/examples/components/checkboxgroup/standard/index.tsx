import { CheckboxGroup } from '@skatteetaten/ds-forms';

export default function CheckboxGroupPreviewStateExample(): JSX.Element {
  return (
    <CheckboxGroup legend={'Hva vil du varsles om?'}>
      <CheckboxGroup.Checkbox>{'Ny melding i innboks'}</CheckboxGroup.Checkbox>
      <CheckboxGroup.Checkbox>
        {'Endring i skattekortet'}
      </CheckboxGroup.Checkbox>
      <CheckboxGroup.Checkbox>{'Frist nærmer seg'}</CheckboxGroup.Checkbox>
    </CheckboxGroup>
  );
}
