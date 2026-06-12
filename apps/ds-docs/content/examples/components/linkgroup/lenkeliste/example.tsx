import { LinkGroup } from '@skatteetaten/ds-buttons';

export default function LinkGroupPreviewStateExample(): JSX.Element {
  return (
    <LinkGroup variant={'list'}>
      <LinkGroup.Link href={'#'}>{'Lenke nummer 1'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Lenke nummer 2'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Lenke nummer 3'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'} isExternal>
        {'Ekstern lenke'}
      </LinkGroup.Link>
    </LinkGroup>
  );
}
