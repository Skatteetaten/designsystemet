import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InlineButton, IconButton } from '@skatteetaten/ds-buttons';
import {
  DescriptionList,
  getDescriptionListSizeDefault,
  getDescriptionDirectionDefault,
  getDescriptionListIsVerticalOnMobileDefault,
  getDescriptionListVariantDefault,
  getTermWeightDefault,
  getDescriptionWeightDefault,
} from '@skatteetaten/ds-content';
import { ErrorMessage } from '@skatteetaten/ds-forms';
import {
  CopySVGpath,
  EyeOffSVGpath,
  LockOutlineSVGpath,
} from '@skatteetaten/ds-icons';
import { Popover } from '@skatteetaten/ds-overlays';
import { Tag } from '@skatteetaten/ds-status';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: DescriptionList,
  title: 'Komponenter/DescriptionList',
  argTypes: {
    // Props
    children: {
      control: { disable: true },
      table: { category: category.props },
    },
    size: {
      table: {
        category: category.props,
        defaultValue: { summary: getDescriptionListSizeDefault() },
      },
    },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getDescriptionListVariantDefault() },
      },
    },
    hasSpacing: {
      table: {
        category: category.props,
      },
    },
    isVerticalOnMobile: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getDescriptionListIsVerticalOnMobileDefault().toString(),
        },
      },
    },
    descriptionDirection: {
      table: {
        category: category.props,
        defaultValue: {
          summary: getDescriptionDirectionDefault(),
        },
      },
    },
    termWeight: {
      table: {
        category: category.props,
        defaultValue: { summary: getTermWeightDefault() },
      },
    },
    descriptionWeight: {
      table: {
        category: category.props,
        defaultValue: { summary: getDescriptionWeightDefault() },
      },
    },
  },
  args: {
    children: [
      <DescriptionList.Element key={'k1'} term={'Saksbehandler'}>
        {'Kenneth Performance'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k2'} term={'Status'}>
        {'Under behandling'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k3'} term={'Sist endret'}>
        {'30.12.2013'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k4'} term={'Frist'}>
        {'30.12.2013'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k5'} term={'Farge'}>
        {'Smaragdgrønn'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k6'} term={'Først endret'}>
        {'30.12.2010'}
      </DescriptionList.Element>,
    ],
  },
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <div>
        <DescriptionList
          variant={'horizontal'}
          descriptionDirection={'vertical'}
          hasSpacing
        >
          <DescriptionList.Element term={'Saksbehandler'}>
            {'Kenneth Performance'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Status'}>
            {'Under behandling'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Sist endret'}>
            {'30.12.2013'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Frist'}>
            {'30.12.2013'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Farge'}>
            {'Smaragdgrønn'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Først endret'}>
            {'30.12.2010'}
          </DescriptionList.Element>
        </DescriptionList>

        <DescriptionList variant={'vertical'}>
          <DescriptionList.Element
            term={
              <>
                <span>{'navn'}</span>
                <Popover>
                  <Popover.Trigger
                    className={'dummySpacingLeft'}
                    size={'extraSmall'}
                  />
                  <Popover.Content>
                    {
                      'Et navn er en betegnelse eller tittel som brukes for å identifisere en person, et sted, en ting eller et konsept.'
                    }
                  </Popover.Content>
                </Popover>
              </>
            }
          >
            {'Byron Schweppes-Hansen'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Kommune'}>
            <Tag svgPath={EyeOffSVGpath} color={'burgundy'} size={'small'}>
              {'Skjult'}
            </Tag>
            <InlineButton svgPath={LockOutlineSVGpath}>
              {'vis informasjon'}
            </InlineButton>
          </DescriptionList.Element>
          <DescriptionList.Element term={'Adresse'}>
            {'Adresseveien 1 '}
            <IconButton
              size={'extraSmall'}
              title={'kopier'}
              svgPath={CopySVGpath}
              onClick={() => {
                navigator.clipboard.writeText('Adresseveien 1\n1410 Kolbotn');
              }}
            />
            <br />
            {'1410 Kolbotn'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Boligtype'}>
            <ErrorMessage showError>{'Kunne ikke hente inn info'}</ErrorMessage>
          </DescriptionList.Element>
        </DescriptionList>
      </div>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;

export const ExampleWithFixedColumns: Story = {
  /*
  Innhold i className

  .descriptionListTwoColumns {
    --description-list-columns: 2;
  }

  */
  render: (_args): JSX.Element => {
    return (
      <div>
        <DescriptionList
          variant={'horizontal'}
          descriptionDirection={'vertical'}
          className={'descriptionListTwoColumns'}
          hasSpacing
        >
          <DescriptionList.Element term={'Saksbehandler'}>
            {'Kenneth Performance'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Status'}>
            {'Under behandling'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Sist endret'}>
            {'30.12.2013'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Frist'}>
            {'30.12.2013'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Farge'}>
            {'Smaragdgrønn'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Først endret'}>
            {'30.12.2010'}
          </DescriptionList.Element>
        </DescriptionList>
      </div>
    );
  },
} satisfies Story;
ExampleWithFixedColumns.parameters = exampleParameters;
