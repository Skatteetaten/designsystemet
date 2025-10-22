import { JSX, useState } from 'react';

import { StoryObj, Meta, StoryFn } from '@storybook/react-vite';
// eslint-disable-next-line storybook/use-storybook-testing-library
import { PointerEventsCheckLevel } from '@testing-library/user-event';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import {
  dsI18n,
  getHelpTitleHelpSvgDefault,
} from '@skatteetaten/ds-core-utils';
import {
  FileUploader,
  FileUploaderProps,
  getFileUploaderGetSpinnerLabelDefault,
} from '@skatteetaten/ds-forms';

import { wrapper } from './testUtils/storybook.testing.utils';
import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: FileUploader,
  title: 'Tester/FileUploader',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        disable: true,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    label: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    shouldNormalizeFileName: { table: { disable: true } },
    titleHelpSvg: {
      table: {
        category: category.props,
        disable: true,
        defaultValue: { summary: getHelpTitleHelpSvgDefault() },
      },
    },
    uploadedFiles: { table: { disable: true } },
    acceptedFileFormatsDisplay: { table: { disable: true } },
    acceptedFileFormatsDescription: { table: { disable: true } },
    uploadResult: { table: { disable: true } },
    children: { table: { disable: true } },
    fileIconTitle: { table: { disable: true } },
    isUploading: { table: { disable: true } },
    invalidCharacterRegexp: {
      control: 'text',
      table: { disable: true },
    },
    spinnerLabel: {
      table: {
        disable: true,
      },
    },
    acceptedFileFormats: { table: { disable: true } },
    // HTML
    multiple: { table: { disable: true } },
    // Events
    onFileDelete: { table: { disable: true } },
    onFileDownload: { table: { disable: true } },
    onFileChange: { table: { disable: true } },
    onHelpToggle: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
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
    imageSnapshot: { disableSnapshot: true },
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
  parameters: {
    a11y: {
      test: 'off',
    },
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
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddSingleLabel'))
    ).toBeInTheDocument();
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
} satisfies Story;

export const WithUploadedFiles: StoryObj<FileUploaderProps> = {
  name: 'With Files (A5, B4 delvis)',
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
  args: {
    isUploading: true,
  },
  argTypes: {
    isUploading: { table: { disable: false } },
  },
} satisfies Story;

export const WithError: StoryObj<FileUploaderProps> = {
  name: 'With Error And Multiple (A4, A1 delvis)',
  args: {
    multiple: true,
    helpText: 'Hjelpetekst',
    label: 'Hemmelig kode',
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    errorMessage: 'Du må laste opp en fil',
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
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
} satisfies Story;

const UploadResultTemplate: StoryFn<typeof FileUploader> = (args) => (
  <>
    <FileUploader
      {...args}
      uploadResult={{ statusMessage: 'Lastet opp 4 filer' }}
      hasSpacing
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
} satisfies Story;

export const WithTextOverrides: StoryObj<FileUploaderProps> = {
  name: 'With Text Overrides (A8)',
  args: {
    acceptedFileFormats: ['image/png'],
    acceptedFileFormatsDescription: 'Tillatte filformater:_',
    acceptedFileFormatsDisplay: 'bilder og dokumenter',
    children: 'Trykk eller dra og slipp filer her',
    uploadedFiles: [{ name: 'document.pdf' }],
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
    imageSnapshot: { disableSnapshot: true },
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
    const container = canvasElement.querySelector(`${wrapper} > div`);
    await expect(container).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const WithFocusManagement: StoryObj<FileUploaderProps> = {
  name: 'With Focus Management (B7)',
  render: () => {
    const FocusManagementWrapper = (): JSX.Element => {
      const [files, setFiles] = useState([
        { name: 'first.pdf' },
        { name: 'second.pdf' },
        { name: 'third.pdf' },
      ]);
      return (
        <FileUploader
          uploadedFiles={files}
          onFileDelete={(file) => {
            setFiles((prev) => prev.filter((f) => f.name !== file.name));
            return true; // indicate successful delete
          }}
        />
      );
    };
    return <FocusManagementWrapper />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deleteTitle = dsI18n.t('ds_forms:fileuploader.DeleteLabel');
    const uploadButtonName = dsI18n.t('ds_forms:fileuploader.AddSingleLabel');
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });

    const initialDeleteButtons = canvas.getAllByRole('button', {
      name: deleteTitle,
    });
    expect(initialDeleteButtons).toHaveLength(3);
    const firstButton = initialDeleteButtons[0];
    const secondButton = initialDeleteButtons[1];

    // Delete the second file -> focus should move to previous (first) file's delete button
    await user.click(secondButton);
    await expect(canvas.queryByText('second.pdf')).not.toBeInTheDocument();
    await expect(firstButton).toHaveFocus();

    // Delete the first file (now list has first.pdf & third.pdf -> after deletion only third.pdf). No previous file, focus should move to upload button.
    const firstButtonAfter = canvas.getAllByTitle(deleteTitle)[0];
    await user.click(firstButtonAfter);
    await expect(canvas.queryByText('first.pdf')).not.toBeInTheDocument();
    const uploadButton = canvas.getByRole('button', { name: uploadButtonName });
    await expect(uploadButton).toHaveFocus();

    // Delete the last remaining file -> still focus on upload button and no delete buttons remain
    const lastDeleteButton = canvas.getAllByTitle(deleteTitle)[0];
    await user.click(lastDeleteButton);
    await expect(canvas.queryByText('third.pdf')).not.toBeInTheDocument();
    await expect(canvas.queryAllByTitle(deleteTitle).length).toBe(0);
    await expect(uploadButton).toHaveFocus();
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
};

const spinnerLabel = 'Opplasting pågår, kan ta et par minutter.';

export const WithCustomSpinnerLabel = {
  name: 'With Custom Spinner Label',
  args: {
    spinnerLabel,
    isUploading: true,
  },
  argTypes: {
    spinnerLabel: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const container = canvasElement.querySelector(`${wrapper} > div`);
    const button = within(container as HTMLElement).getByRole('button');
    await expect(button).toHaveTextContent(spinnerLabel);
  },
} satisfies Story;
