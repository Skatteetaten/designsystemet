import { JSX } from 'react';

import { linkTo } from '@storybook/addon-links';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from '@skatteetaten/ds-buttons';
import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { RoleBanner, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

import stylesAsString from './RoleBannerExample.module.scss?raw';
import { category } from '../../../.storybook/helpers';
import {
  exampleParameters,
  exampleParametersWithStylesInCode,
} from '../utils/stories.utils';

import styles from './RoleBannerExample.module.scss';

const meta = {
  component: RoleBanner,
  title: 'Komponenter/RoleBanner',
  argTypes: {
    // Baseprops
    ref: { table: { category: category.baseProps } },
    id: { table: { category: category.baseProps } },
    className: { table: { category: category.baseProps } },
    lang: { table: { category: category.baseProps } },
    'data-testid': { table: { category: category.baseProps } },
    // Props
    user: {
      table: { category: category.props },
    },
    isSticky: {
      table: {
        category: category.props,
        defaultValue: { summary: 'undefined' },
      },
    },
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

export const Examples: Story = {
  render: (args): JSX.Element => {
    return (
      <>
        <Paragraph hasSpacing>
          {'Velg "logg inn" i '}
          <Link
            href={'#'}
            onClick={(e) => {
              e.preventDefault();
              linkTo('Sidetyper/Ekstern/Skjema Med Steg', 'Skjema Med Steg')();
            }}
          >
            {'skjema med steg'}
          </Link>
          {' for å se eksempel i kontekst.'}
        </Paragraph>
        <RoleBanner {...args} />
      </>
    );
  },
  parameters: exampleParameters,
} satisfies Story;

export const ExampleWithTopBannerExternalMegSelv: Story = {
  name: 'Rollebanner for meg selv i skjemamodus',
  render: (_args): JSX.Element => {
    return (
      <>
        <TopBannerExternal
          user={{ role: 'meg' }}
          onLogOutClick={() => alert('du logget ut')}
        >
          <TopBannerExternal.UserMenu
            className={styles.hiddenUserMenuButton}
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
ExampleWithTopBannerExternalMegSelv.parameters =
  exampleParametersWithStylesInCode(stylesAsString);

export const ExampleWithTopBannerExternalAndre: Story = {
  name: 'Rollebanner for andre i skjemamodus',
  render: (_args): JSX.Element => {
    return (
      <>
        <TopBannerExternal
          user={{ role: 'meg' }}
          onLogOutClick={() => alert('du logget ut')}
        >
          <TopBannerExternal.UserMenu
            className={styles.hiddenUserMenuButton}
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
ExampleWithTopBannerExternalAndre.parameters =
  exampleParametersWithStylesInCode(stylesAsString);
