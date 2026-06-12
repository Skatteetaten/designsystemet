import { InlineButton } from '@skatteetaten/ds-buttons';
import { AddOutlineSVGpath } from '@skatteetaten/ds-icons';

export default function InlineButtonStandardStateExample(): JSX.Element {
  return (
    <InlineButton svgPath={AddOutlineSVGpath}>
      {'Legg til rapport'}
    </InlineButton>
  );
}
