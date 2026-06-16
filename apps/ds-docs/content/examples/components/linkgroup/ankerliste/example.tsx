import { JSX } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';

export default function LinkGroupPreviewStateExample(): JSX.Element {
  return (
    <LinkGroup variant={'anchors'}>
      <LinkGroup.Link href={'#'}>{'Ankerlenke 1'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Ankerlenke 2'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Ankerlenke 3'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Ankerlenke 4'}</LinkGroup.Link>
    </LinkGroup>
  );
}
