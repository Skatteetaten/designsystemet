import { Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphWithEmphasisStateExample(): JSX.Element {
  return (
    <Paragraph>
      {'Noen ganger ønsker vi å fremheve tekst med '}
      <strong>{'tydelig utheving'}</strong>
      {', mens andre ganger holder det med '}
      <em>{'lett betoning'}</em>
      {'. Begge deler støttes automatisk i Paragraph.'}
    </Paragraph>
  );
}
