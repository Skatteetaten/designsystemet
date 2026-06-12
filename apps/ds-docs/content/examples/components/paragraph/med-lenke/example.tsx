import { Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphWithLinkStateExample(): JSX.Element {
  return (
    <Paragraph>
      {'Dette er et eksempel pa et avsnitt med en '}
      <a
        href={'https://www.skatteetaten.no/stilogtone/'}
        target={'_blank'}
        rel={'noreferrer'}
      >
        {'lenke til stil og tone'}
      </a>
      {' og som får designsystemets typografi.'}
    </Paragraph>
  );
}
