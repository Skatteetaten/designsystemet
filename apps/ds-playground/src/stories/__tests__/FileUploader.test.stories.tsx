import { dsI18n } from '@skatteetaten/ds-core-utils';
import { FileUploader, FileUploaderProps } from '@skatteetaten/ds-forms';
import { StoryObj, Meta, StoryFn } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
//eslint-disable-next-line storybook/use-storybook-testing-library
import { PointerEventsCheckLevel } from '@testing-library/user-event';

import { wrapper } from './testUtils/storybook.testing.utils';
import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

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
    classNames: { table: { disable: true } },
    description: { table: { category: category.props } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { table: { category: category.props } },
    hideLabel: {
      table: {
        category: category.props,
      },
    },
    label: { table: { category: category.props } },
    showRequiredMark: {
      table: {
        category: category.props,
      },
    },

    shouldNormalizeFileName: {
      table: { category: category.props, disable: true },
    },
    errorMessage: { table: { category: category.props, disable: true } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    uploadedFiles: { table: { disable: true, category: category.props } },
    acceptedFileFormatsDisplay: {
      table: { disable: true, category: category.props },
    },
    acceptedFileFormatsDescription: {
      table: { disable: true, category: category.props },
    },
    successIconTitle: { table: { disable: true, category: category.props } },
    uploadResult: { table: { disable: true, category: category.props } },
    children: { table: { disable: true, category: category.props } },
    fileIconTitle: { table: { disable: true, category: category.props } },
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
    // Events
    onFileDelete: {
      table: { category: category.event, disable: true },
    },
    onFileDownload: {
      table: { category: category.event, disable: true },
    },
    onFileChange: {
      table: { category: category.event, disable: true },
    },

    onHelpToggle: {
      table: { category: category.event, disable: true },
    },
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
  name: 'Defaults (A1 delvis)',
  argTypes: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddSingleLabel'))
    ).toBeInTheDocument();
  },

  parameters: {
    imageSnapshot: {
      hover: `${wrapper} button`,
      focus: `${wrapper} button`,
    },
  },
} satisfies Story;

export const WithUploadedFiles: StoryObj<FileUploaderProps> = {
  name: 'With Files (A5, B4 delvis)',
  argTypes: {},
  args: {
    helpText: 'Hjelpetekst',
    label: 'Dokumentasjon og grunnlag',
    acceptedFileFormats: ['.pdf', '.jpeg'],
    uploadedFiles: [
      {
        name: 'dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf',
        href: 'https://www.skatteetaten.no/person/',
      },
      { name: 'grunnlag.jpg' },
      { name: 'Screen_Shot_2023_08_03_at_14_48_38_PM_111.jpg' },
      {
        name: 'test.png',
        href: 'http://localhost:4400/designsystem_illustrasjon.png',
      },
    ],
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByText(dsI18n.t('ds_forms:fileuploader.FileIconLabel'))[0]
    ).toBeInTheDocument();
    await expect(
      canvas.getAllByText(dsI18n.t('ds_forms:fileuploader.SuccessIconLabel'))[0]
    ).toBeInTheDocument();
    await expect(canvas.getByText('grunnlag.jpg')).toBeInTheDocument();
    await expect(canvas.getByText('test.png')).toBeInTheDocument();
    await expect(
      canvas.getByText('dokumentasjon_rapport_med_langt_filnavn_v2_final.pdf')
    ).toBeInTheDocument();
  },

  parameters: {},
} satisfies Story;

export const WithIsUploading: StoryObj<FileUploaderProps> = {
  name: 'With Uploading (A3 delvis, A2 delvis)',
  argTypes: {},
  args: {
    isUploading: true,
  },
  parameters: {},
} satisfies Story;

export const WithError: StoryObj<FileUploaderProps> = {
  name: 'With Error And Multiple(A4, A1 delvis)',
  argTypes: {},
  args: {
    multiple: true,
    helpText: 'Hjelpetekst',
    label: 'Hemmelig kode',
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    errorMessage: 'Du må laste opp en fil',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText('Du må laste opp en fil')
    ).toBeInTheDocument();
    await expect(
      canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddMultipleLabel'))
    ).toBeInTheDocument();
  },

  parameters: {},
} satisfies Story;

const UploadResultTemplate: StoryFn<typeof FileUploader> = (args) => (
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

export const WithUploadResult: StoryObj<FileUploaderProps> = {
  name: 'With UploadResult (A4)',
  render: UploadResultTemplate,
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
    acceptedFileFormatsDescription: 'Tillatte filformater:_',
    acceptedFileFormatsDisplay: 'bilder og dokumenter',
    children: 'Trykk eller dra og slipp filer her',
    uploadedFiles: [{ name: 'document.pdf' }],
    successIconTitle: 'lastet opp',
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText('Tillatte filformater:_')
    ).toBeInTheDocument();
    await expect(canvas.getByText('bilder og dokumenter')).toBeInTheDocument();
    await expect(
      canvas.getByText('Trykk eller dra og slipp filer her')
    ).toBeInTheDocument();
  },

  parameters: {},
} satisfies Story;

export const WithFileChange: StoryObj<FileUploaderProps> = {
  name: 'With File Change(A6)',
  args: {
    'data-testid': 'testid123',
    helpText: 'Hjelpetekst',
    label: 'Dokumentasjon og grunnlag',
    uploadedFiles: [{ name: 'file.txt', href: '#' }],
    onFileDownload: fn(),
    onFileChange: fn(),
    onFileDelete: fn(),
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('testid123-input');
    const file = new File(['test'], 'test.txt', { type: 'txt' });
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });

    await user.upload(input, file);
    await waitFor(() => expect(args.onFileChange).toHaveBeenCalledWith([file]));

    const deleteButton = canvas.getByTitle(
      dsI18n.t('ds_forms:fileuploader.DeleteLabel')
    );
    await userEvent.click(deleteButton);
    await waitFor(() =>
      expect(args.onFileDelete).toHaveBeenCalledWith({
        name: 'file.txt',
        href: '#',
      })
    );

    await userEvent.click(canvas.getByText('file.txt'));
    await waitFor(() =>
      expect(args.onFileDownload).toHaveBeenCalledWith(expect.anything(), {
        name: 'file.txt',
        href: '#',
      })
    );
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
} satisfies Story;

export const WithHelpToggleEvent = {
  name: 'With onHelpToggle Event',
  args: {
    label: 'Last opp filer',
    helpText: 'Hjelpetekst',
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    classNames: {
      container: 'dummyClassname',
      errorMessage: 'dummyClassname',
    },
    errorMessage: 'feil',
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvasElement.querySelector(`${wrapper} > div`);
    await expect(container).toHaveClass('dummyClassname');
  },
} satisfies Story;
