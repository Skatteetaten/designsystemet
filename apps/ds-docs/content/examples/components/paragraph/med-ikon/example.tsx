import { AttachFileSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphWithIconStateExample(): JSX.Element {
  return (
    <Paragraph>
      <Icon svgPath={AttachFileSVGpath} />
      {' Siden inneholder et filvedlegg.'}
    </Paragraph>
  );
}
