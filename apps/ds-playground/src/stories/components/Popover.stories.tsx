import { useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  getPopoverColorDefault,
  getPopoverPositionDefault,
  getPopoverRestoreFocusDefault,
  Popover,
} from '@skatteetaten/ds-overlays';
import { Table } from '@skatteetaten/ds-table';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Popover,
  title: 'Komponenter/Popover/Popover',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    color: {
      table: {
        category: category.props,
        defaultValue: { summary: getPopoverColorDefault() },
      },
      control: 'radio',
    },

    disableAutoDismiss: { table: { category: category.props } },
    disableAutoDismissOnMobile: { table: { category: category.props } },
    position: {
      control: 'radio',
      table: {
        category: category.props,
        defaultValue: { summary: getPopoverPositionDefault().toString() },
      },
    },
    shouldRestoreFocus: {
      table: {
        category: category.props,
        defaultValue: { summary: getPopoverRestoreFocusDefault().toString() },
      },
    },
    isOpen: { table: { category: category.props } },
    //Events
    onClose: { ...htmlEventDescription, table: { disable: true } },
  },
} satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <div className={'centerContent'}>
      <Popover {...args}>
        <Popover.Trigger />
        <Popover.Content>{loremIpsum}</Popover.Content>
      </Popover>
    </div>
  ),
  parameters: {
    viewport: {
      viewPortHeight: 1200,
    },
  },
} satisfies Story;

export const Example: Story = {
  render: (_args): JSX.Element => {
    const h2Id = 'id1';
    const h3Id = 'id2';
    const controlledId = 'id4';
    const filesId = 'id3';
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <div className={'flex gapS'}>
          <Heading id={h2Id} as={'h2'} level={2}>
            {'Disse tingene må du huske på før du henter skattekortet'}
          </Heading>
          <Popover color={'ochre'} position={'bottomEnd'}>
            <Popover.Trigger ariaDescribedby={h2Id} />
            <Popover.Content>
              <Heading as={'h3'} level={4}>
                {'Kode 6: Sensitive opplysninger'}
              </Heading>
              <Paragraph>
                {
                  'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101. Bolignummeret står som regel på et klistemerke i dørkarmen til inngangsdøren.'
                }
              </Paragraph>
            </Popover.Content>
          </Popover>
        </div>
        <Paragraph>
          {
            'Overanstrengelse formiddag utstår, besynderlighet hukommelse forrykke De ubehageligheter forretningsverdenen, arkskrift dødsfallet levetid den. Imellem vås veie, bestyrelse sengeliggende forstillelse tålte nyss. '
          }
        </Paragraph>

        <div className={'flex gapS'}>
          <Heading id={h3Id} as={'h3'} level={3}>
            {'Disse tingene må du huske på før du henter skattekortet'}
          </Heading>
          <Popover color={'ochre'} position={'bottomEnd'}>
            <Popover.Trigger ariaDescribedby={h3Id} size={'small'} />
            <Popover.Content>
              <Heading as={'h3'} level={4}>
                {'Kode 6: Sensitive opplysninger'}
              </Heading>
              <Paragraph>
                {
                  'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101. Bolignummeret står som regel på et klistemerke i dørkarmen til inngangsdøren.'
                }
              </Paragraph>
            </Popover.Content>
          </Popover>
        </div>
        <Paragraph>
          {
            'Overanstrengelse formiddag utstår, besynderlighet hukommelse forrykke De ubehageligheter forretningsverdenen, arkskrift dødsfallet levetid den. Imellem vås veie, bestyrelse sengeliggende forstillelse tålte nyss. '
          }
        </Paragraph>

        <Table caption={'Oppgaver'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{'Referansenummer'}</Table.HeaderCell>
              <Table.HeaderCell>{'Dato'}</Table.HeaderCell>
              <Table.HeaderCell>{'Filer'}</Table.HeaderCell>
              <Table.HeaderCell>{'Brev'}</Table.HeaderCell>
              <Table.HeaderCell>{'Vedtak'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'Wake Up Call'}</Table.DataCell>
              <Table.DataCell>{'10.01.2024'}</Table.DataCell>
              <Table.DataCell>{'3 filer'}</Table.DataCell>
              <Table.DataCell>{'4 brev'}</Table.DataCell>
              <Table.DataCell>{'5 vedtak'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'A Cat Nap'}</Table.DataCell>
              <Table.DataCell>{'9.01.2024'}</Table.DataCell>
              <Table.DataCell>
                <>
                  <span id={filesId}>{'12 filer'}</span>
                  <Popover position={'bottomStart'} color={'ochre'}>
                    <Popover.Trigger
                      ariaDescribedby={filesId}
                      size={'extraSmall'}
                      className={'dummySpacingLeft'}
                    />
                    <Popover.Content>
                      {
                        'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101. Bolignummeret står som regel på et klistemerke i dørkarmen til inngangsdøren.'
                      }
                    </Popover.Content>
                  </Popover>
                </>
              </Table.DataCell>
              <Table.DataCell>{'4 brev'}</Table.DataCell>
              <Table.DataCell>{'5 vedtak'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'Down And Out'}</Table.DataCell>
              <Table.DataCell>{'8.01.2024'}</Table.DataCell>
              <Table.DataCell>{'3 filer'}</Table.DataCell>
              <Table.DataCell>{'4 brev'}</Table.DataCell>
              <Table.DataCell>{'5 vedtak'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'Back to Square One'}</Table.DataCell>
              <Table.DataCell>{'7.01.2024'}</Table.DataCell>
              <Table.DataCell>{'3 filer'}</Table.DataCell>
              <Table.DataCell>{'4 brev'}</Table.DataCell>
              <Table.DataCell>{'5 vedtak'}</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>

        <div className={'flex gapS'}>
          <Heading id={controlledId} as={'h2'} level={2}>
            {'Controlled Popover'}
          </Heading>
          <Popover
            position={'bottomStart'}
            color={'ochre'}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Popover.Trigger
              ariaDescribedby={controlledId}
              className={'dummySpacingLeft'}
              onClick={() => setIsOpen(!isOpen)}
            />
            <Popover.Content>
              {
                'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101. Bolignummeret står som regel på et klistemerke i dørkarmen til inngangsdøren.'
              }
            </Popover.Content>
          </Popover>
        </div>
      </>
    );
  },
} satisfies Story;

Example.parameters = exampleParameters;
