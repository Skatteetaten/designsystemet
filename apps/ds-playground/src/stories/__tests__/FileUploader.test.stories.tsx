import { FileUploader } from '@skatteetaten/ds-forms';
import { FileUploaderProps } from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { StoryObj, Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
import { category } from '../../../.storybook/helpers';

const meta = {
  component: FileUploader,
  title: 'Tester/FileUploader',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    ///description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    ///helpSvgPath: {
    ///  options: Object.keys(SystemSVGPaths),
    ///  mapping: SystemSVGPaths,
    ///  table: { category: category.props },
    ///},
    ///helpText: { table: { category: category.props } },
    ///hideLabel: {
    ///  control: 'boolean',
    ///  table: {
    ///    category: category.props,
    ///  },
    ///},
    ///label: { table: { category: category.props } },
    ///showRequiredMark: {
    ///  control: 'boolean',
    ///  table: {
    ///    category: category.props,
    ///  },
    ///},
    uploadedFiles: { table: { disable: true, category: category.props } },
    isUploading: { table: { disable: true, category: category.props } },
    invalidCharacterRegexp: {
      control: 'text',
      table: { disable: true, category: category.props },
    },
    acceptedFileFormats: { table: { disable: true, category: category.props } },
    // HTML
    multiple: {
      table: { disable: true, category: category.htmlAttribute },
    },
    // Aria
    //ariaDescribedby: { table: { category: category.aria } },
    //// Events
    //onBlur: { ...htmlEventDescription },
    //onChange: { ...htmlEventDescription },
    //onFocus: { ...htmlEventDescription },
    // Events
    onFileDelete: {
      table: { category: category.event },
    },
    onFileChange: {
      table: { category: category.event },
    }, // Events
  },
} satisfies Meta<typeof FileUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },

  argTypes: {
    ref: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
    'data-testid': '123ID',
  },

  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults: StoryObj<FileUploaderProps> = {
  name: 'Defaults (TODO)',
  argTypes: {},
  args: {
    //children: 'Ledetekst',
    //helpProps: { helpText: 'Hjelpetekst', children: 'Ledetekst' },
    //acceptedFileFormats: ['.pdf', '.jpeg'],
    //uploadedFiles: [
    //  {
    //    name: 'feil.png',
    //    errorMessage:
    //      'Filen ble ikke lastet opp på grunn av sikkerhet. Last opp opplysningene i annet format.',
    //  },
    //  { name: 'test.pdf', href: 'https://i.imgur.com/guZeGcr.png' },
    //  { name: 'test.jpg' },
    //  { name: 'loading.jpg', isUploading: true },
    //  {
    //    name: 'test.png',
    //    errorMessage:
    //      'Får ikke lastet opp filnavn1.txt, fordi filen er ikke i riktig format.',
    //    href: 'http://localhost:4400/designsystem_illustrasjon.png',
    //  },
    //],
  },

  parameters: {
    imageSnapshot: {
      hover: `${wrapper} button`,
      focus: `${wrapper} button`,
    },
  },
} satisfies Story;

export const WithUploadedFiles: StoryObj<FileUploaderProps> = {
  name: 'With Files (TODO)',
  argTypes: {},
  args: {
    helpProps: {
      helpText: 'Hjelpetekst',
      children: 'Dokumentasjon og grunnlag',
    },
    acceptedFileFormats: ['.pdf', '.jpeg'],
    uploadedFiles: [
      {
        name: 'dokumentasjon.pdf',
        href: 'https://www.skatteetaten.no/person/',
      },
      { name: 'grunnlag.jpg' },
      {
        name: 'test.png',
        errorMessage:
          'Får ikke lastet opp filnavn1.txt, fordi filen er ikke i riktig format.',
        href: 'http://localhost:4400/designsystem_illustrasjon.png',
      },
    ],
  },

  parameters: {},
} satisfies Story;

export const WithError: StoryObj<FileUploaderProps> = {
  name: 'With Error (A4)',
  argTypes: {},
  args: {
    helpProps: {
      helpText: 'Hjelpetekst',
      children: 'Hemmelig kode',
    },
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    hasError: true,
    errorMessage: 'Du må laste opp en fil',
  },

  parameters: {},
} satisfies Story;

const UploadStatusTemplate: StoryFn<typeof FileUploader> = (args) => (
  <>
    <FileUploader
      {...args}
      className={'bottomSpacingXL'}
      uploadResult={{ statusMessage: 'Lastet opp 4 filer' }}
    />
    <FileUploader
      {...args}
      uploadResult={{
        statusMessage: '1 av 3 filer ble stoppet av virussjekk.',
        hasUploadFailed: true,
      }}
    />
  </>
);

export const WithUploadStatus: StoryObj<FileUploaderProps> = {
  name: 'With UploadStatus (A4)',
  render: UploadStatusTemplate,
  argTypes: {},
  args: {
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    uploadedFiles: [
      {
        name: 'dokumentasjon.pdf',
        href: 'https://www.skatteetaten.no/person/',
      },
      { name: 'grunnlag.jpg' },
    ],
  },

  parameters: {},
} satisfies Story;

export const WithTextOverrides: StoryObj<FileUploaderProps> = {
  name: 'With Text Overrides (A8)',
  argTypes: {},
  args: {
    acceptedFileFormats: ['image/png'],
    fileFormatsText: 'Tillatte filformater:_',
    buttonText: 'Trykk eller dra og slipp filer her',
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText('Tillatte filformater:_')
    ).toBeInTheDocument();
    await expect(
      canvas.getByText('Trykk eller dra og slipp filer her')
    ).toBeInTheDocument();
  },

  parameters: {},
} satisfies Story;
