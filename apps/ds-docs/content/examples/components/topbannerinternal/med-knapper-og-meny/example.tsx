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

import styles from './med-knapper-og-meny.module.scss';

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
        {'Opprett RF-Ørtiatten'}
      </InlineButton>
      <TopBannerInternal.ActionMenu menuActionsRef={menuRef}>
        <InlineButton
          className={styles.marginBottomXs}
          svgPath={AddSVGpath}
          onClick={() => {
            menuRef?.current?.close?.();
          }}
        >
          {'Legg til RF-skjema ørtifemten'}
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
