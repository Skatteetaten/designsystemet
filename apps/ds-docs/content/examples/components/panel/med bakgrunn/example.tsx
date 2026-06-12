import { Panel } from '@skatteetaten/ds-content';
import { CheckIcon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function PanelFilledColorStateExample(): JSX.Element {
  return (
    <Panel
      title={'Virksomheten skal registreres som særavgiftspliktig'}
      variant={'filled'}
      color={'forest'}
      spacing={'xxl'}
      renderIcon={() => <CheckIcon size={'extraLarge'} />}
    >
      <Paragraph>
        {
          'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
        }
      </Paragraph>
    </Panel>
  );
}
