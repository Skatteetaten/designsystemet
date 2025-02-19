import { JSX, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InlineButton, LinkGroup } from '@skatteetaten/ds-buttons';
import { AddSVGpath } from '@skatteetaten/ds-icons';
import {
  TopBannerInternal,
  ActionMenuActionsRef,
} from '@skatteetaten/ds-layout';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: TopBannerInternal,
  title: 'Komponenter/TopBannerInternal/TopBannerInternal',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    skipLink: { table: { category: category.props } },
    title: { table: { category: category.props } },
    description: { table: { category: category.props } },
    user: { table: { category: category.props } },
    isUnderConstruction: { table: { category: category.props } },
    constructionBandTitle: { table: { category: category.props } },
    logoHref: { table: { category: category.props } },
    logo: { table: { category: category.props } },
    logoAltText: { table: { category: category.props } },
    // Event
    onLogoClick: { table: { category: category.event } },
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
      <TopBannerInternal
        title={'Kakeportalen'}
        description={'Kaka er en løgn'}
        logoAltText={'Forside kakeportalen.'}
        logoHref={'/home'}
        user={'Sturle "Stuten" Trestubbe, Team Rocket'}
      >
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
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
