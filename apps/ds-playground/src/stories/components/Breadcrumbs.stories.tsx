import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TopBannerExternal, TopBannerInternal } from '@skatteetaten/ds-layout';
import { Breadcrumbs, BreadcrumbsProps } from '@skatteetaten/ds-navigation';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

Breadcrumbs.List.displayName = 'Breadcrumbs.List';
Breadcrumbs.Item.displayName = 'Breadcrumbs.Item';
Breadcrumbs.Link.displayName = 'Breadcrumbs.Link';

const meta = {
  component: Breadcrumbs,
  title: 'Komponenter/Breadcrumbs/Breadcrumbs',
  argTypes: {
    children: { control: false, table: { category: category.props } },
  },
  args: {
    children: (
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Bedrift og organisasjon'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>{'Avgifter'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>
            {'Avgifter på bil og kjøretøy'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    ),
  },
} satisfies Meta<BreadcrumbsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const ExternalExample: Story = {
  name: 'I publikumsløsning',
  render: (_args): JSX.Element => {
    // .breadcrumbs--external {
    //   width: var(--semantic-responsive-container);
    //   margin: var(--spacing-m) auto;
    //   padding: var(--semantic-responsive-container-spacing);
    //   box-sizing: border-box;
    // }
    return (
      <>
        <TopBannerExternal />
        <Breadcrumbs className={'breadcrumbs--external'}>
          <Breadcrumbs.List shouldCollapse>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>
                {'Bedrift og organisasjon'}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Avgifter'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>
                {'Avgifter på bil og kjøretøy'}
              </Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Vektårsavgift'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
      </>
    );
  },
} satisfies Story;
ExternalExample.parameters = {
  ...exampleParameters,
  layout: 'fullscreen',
};

export const InternalExample: Story = {
  name: 'I intern løsning',
  render: (_args): JSX.Element => {
    // .breadcrumbs--internal {
    //   padding: var(--spacing-s) var(--semantic-responsive-internal-container-spacing);
    // }
    return (
      <>
        <TopBannerInternal title={'Navn på system'} logoHref={'/'} />
        <Breadcrumbs className={'breadcrumbs--internal'}>
          <Breadcrumbs.List shouldCollapse>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Arbeidsliste'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Eplepress AS'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Arbeidsoppgave'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Informasjon'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
      </>
    );
  },
} satisfies Story;
InternalExample.parameters = {
  ...exampleParameters,
  layout: 'fullscreen',
};
