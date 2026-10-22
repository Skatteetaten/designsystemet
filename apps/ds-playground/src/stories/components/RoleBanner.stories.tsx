import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { RoleBanner, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: RoleBanner,
  title: 'Komponenter/RoleBanner',
  argTypes: {
    // Props
    user: { table: { category: category.props } },
    isSticky: { table: { category: category.props } },
  },
  args: {
    user: {
      name: 'Ola Nordmann',
      role: 'andre',
      identifier: formatNationalIdentityNumber('12345678901'),
    },
  },
} satisfies Meta<typeof RoleBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const ExampleWithTopBannerExternalMegSelv: Story = {
  name: 'Rollebanner for meg selv i skjemamodus',
  render: (_args): JSX.Element => {
    // .hiddenUserMenuButton {
    //   display: none;
    // }
    return (
      <>
        <TopBannerExternal
          user={{ role: 'meg' }}
          onLogOutClick={() => alert('du logget ut')}
        >
          <TopBannerExternal.UserMenu
            className={'hiddenUserMenuButton'}
            user={{ role: 'meg' }}
          />
        </TopBannerExternal>
        <RoleBanner
          user={{
            name: 'Ola Nordmann',
            role: 'meg',
            identifier: formatNationalIdentityNumber('12345678901'),
          }}
        />
        <main>
          <Paragraph>{'Hovedinnhold'}</Paragraph>
        </main>
      </>
    );
  },
} satisfies Story;
ExampleWithTopBannerExternalMegSelv.parameters = exampleParameters;

export const ExampleWithTopBannerExternalAndre: Story = {
  name: 'Rollebanner for andre i skjemamodus',
  render: (_args): JSX.Element => {
    // .hiddenUserMenuButton {
    //   display: none;
    // }
    return (
      <>
        <TopBannerExternal
          user={{ role: 'meg' }}
          onLogOutClick={() => alert('du logget ut')}
        >
          <TopBannerExternal.UserMenu
            className={'hiddenUserMenuButton'}
            user={{ role: 'meg' }}
          />
        </TopBannerExternal>
        <RoleBanner
          user={{
            name: 'Kari Nordmann',
            role: 'andre',
            identifier: formatNationalIdentityNumber('10101012345'),
          }}
        />
        <main>
          <Paragraph>{'Hovedinnhold'}</Paragraph>
        </main>
      </>
    );
  },
} satisfies Story;
ExampleWithTopBannerExternalAndre.parameters = exampleParameters;
