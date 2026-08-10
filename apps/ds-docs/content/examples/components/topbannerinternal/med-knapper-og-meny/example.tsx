import { type ReactElement, useRef } from 'react';

import { InlineButton, LinkGroup } from '@skatteetaten/ds-buttons';
import {
  AddSVGpath,
  EditSVGpath,
  FileSVGpath,
  HelpFilledSVGpath,
} from '@skatteetaten/ds-icons';
import {
  type ActionMenuActionsRef,
  TopBannerInternal,
} from '@skatteetaten/ds-layout';

export default function TopBannerInternalWithButtonsAndMenuExample(): ReactElement {
  const menuRef = useRef<ActionMenuActionsRef>(null);

  return (
    <TopBannerInternal
      title={'MVA'}
      description={'Arbeidsliste'}
      logoHref={'/home'}
      user={'Etternavnesen Fornavn'}
    >
      <InlineButton svgPath={HelpFilledSVGpath} brightness={'light'}>
        {'Hjelp'}
      </InlineButton>
      <InlineButton svgPath={FileSVGpath} brightness={'light'}>
        {'Dokumentasjon'}
      </InlineButton>
      <InlineButton svgPath={EditSVGpath} brightness={'light'}>
        {'Opprett RF-Ortiatten'}
      </InlineButton>
      <TopBannerInternal.ActionMenu menuActionsRef={menuRef}>
        <InlineButton
          className={'bottomSpacingXS'}
          svgPath={AddSVGpath}
          onClick={() => {
            menuRef?.current?.close?.();
          }}
        >
          {'Legg til RF-skjema ortifemten'}
        </InlineButton>
        <LinkGroup>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'Denne tingen her'}
          </LinkGroup.Link>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'En annen ting'}
          </LinkGroup.Link>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'Den tredje tingen'}
          </LinkGroup.Link>
        </LinkGroup>
      </TopBannerInternal.ActionMenu>
    </TopBannerInternal>
  );
}
