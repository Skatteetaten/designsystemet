import { JSX, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InlineButton, LinkGroup } from '@skatteetaten/ds-buttons';
import { SearchField } from '@skatteetaten/ds-forms';
import { AddSVGpath } from '@skatteetaten/ds-icons';
import {
  EditSVGpath,
  FileSVGpath,
  HelpFilledSVGpath,
} from '@skatteetaten/ds-icons';
import {
  TopBannerInternal,
  ActionMenuActionsRef,
  getTopBannerInternalHideLogoOnMobileDefault,
} from '@skatteetaten/ds-layout';

import { category } from '../../../.storybook/helpers';
import demoLogo from '../../assets/demo-logo-white.svg';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: TopBannerInternal,
  title: 'Komponenter/TopBannerInternal/TopBannerInternal',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
    skipLink: { control: false, table: { category: category.props } },
    title: { table: { category: category.props } },
    description: { table: { category: category.props } },
    user: { table: { category: category.props } },
    isUnderConstruction: { table: { category: category.props } },
    constructionBandTitle: { table: { category: category.props } },
    logoHref: { table: { category: category.props } },
    logo: { table: { category: category.props } },
    hideLogoOnMobile: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getTopBannerInternalHideLogoOnMobileDefault().toString(),
        },
      },
    },
    logoAltText: { table: { category: category.props } },
    // Event
    onLogoClick: { control: false, table: { category: category.event } },
  },
  args: {
    logoHref: '/start',
    logoAltText: 'til startsiden kakeportalen',
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopBannerInternal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const menuRef = useRef<ActionMenuActionsRef>(null);

    return (
      <>
        <TopBannerInternal
          className={'bottomSpacingXL'}
          title={'MVA'}
          description={'Arbeidsliste'}
          logoAltText={'Forside MVA'}
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
              className={'bottomSpacingXS'}
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
        <TopBannerInternal
          className={'bottomSpacingXL'}
          title={'Global Skatt'}
          logoAltText={'Forside Global Skatt'}
          logoHref={'/home'}
        >
          <SearchField
            classNames={{ searchContainer: 'noMargin' }}
            label={'Søk etter sak, virksomhet, dokument'}
            placeholder={'Søk etter sak, virksomhet, dokument...'}
          />
          <TopBannerInternal.ActionMenu menuActionsRef={menuRef}>
            <InlineButton
              className={'bottomSpacingXS'}
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
        <TopBannerInternal
          className={'blueBackground'}
          classNames={{ logo: 'demoLogo' }}
          title={'SIRO'}
          logo={demoLogo}
          logoAltText={'Forside Politiet'}
          logoHref={'/home'}
        ></TopBannerInternal>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
