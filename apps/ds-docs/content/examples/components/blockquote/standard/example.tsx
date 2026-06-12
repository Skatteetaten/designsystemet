import { Blockquote } from '@skatteetaten/ds-typography';

export default function BlockquotePreviewStateExample(): JSX.Element {
  return (
    <Blockquote borderColor={'forest'}>
      {'«God design handler om '}
      <strong>{'klarhet'}</strong>
      {', men også om '}
      <em>{'forståelse'}</em>
      {' og intensjon.»'}
    </Blockquote>
  );
}
