import { type ReactElement, useRef } from 'react';

import { InlineButton, LinkGroup } from '@skatteetaten/ds-buttons';
import { SearchField } from '@skatteetaten/ds-forms';
import { AddSVGpath } from '@skatteetaten/ds-icons';
import {
  type ActionMenuActionsRef,
  TopBannerInternal,
} from '@skatteetaten/ds-layout';

export default function TopBannerInternalWithSearchExample(): ReactElement {
  const menuRef = useRef<ActionMenuActionsRef>(null);

  return (
    <TopBannerInternal title={'Global Skatt'} logoHref={'/home'}>
      <SearchField
        label={'Sok etter sak, virksomhet, dokument'}
        placeholder={'Sok etter sak, virksomhet, dokument...'}
      />
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
