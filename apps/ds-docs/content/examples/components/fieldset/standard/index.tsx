import { Fieldset } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function FieldsetPreviewStateExample(): JSX.Element {
  return (
    <Fieldset legend={'Hvilken periode trenger du bekreftelse for?'}>
      <Paragraph>{'Innhold'}</Paragraph>
    </Fieldset>
  );
}
