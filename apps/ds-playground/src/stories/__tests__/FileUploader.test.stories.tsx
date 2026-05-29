import { JSX, useState } from 'react';

import { StoryObj, Meta, StoryFn } from '@storybook/react-vite';
// eslint-disable-next-line storybook/use-storybook-testing-library
import { PointerEventsCheckLevel } from '@testing-library/user-event';
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within,
} from 'storybook/test';

import {
  dsI18n,
  getHelpTitleHelpSvgDefault,
} from '@skatteetaten/ds-core-utils';
import {
  FileUploader,
  FileUploaderProps,
  TextField,
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
    isRequired: { table: { disable: true } },
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
    htmlValidate: { test: 'off' }, //TODO: input og label som descendat av button
    imageSnapshot: { disableSnapshot: false },
  },
  args: {
    label: 'Ledetekst',
  },
} satisfies Meta<typeof FileUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

const getSuccessStatusMessage = (
  canvasElement: HTMLElement,
  statusMessageText: string
): HTMLElement => {
  const successAlert = canvasElement.querySelector('[data-variant="success"]');

  if (!successAlert) {
    throw new Error('Fant ikke suksess-alert');
  }

  return within(successAlert as HTMLElement).getByText(statusMessageText);
};

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
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const input = canvas.getByTestId('123ID-input');
    await expect(input).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults: StoryObj<FileUploaderProps> = {
  name: 'Defaults (A1 delvis)',
  args: {
    'data-testid': '123ID',
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus', 'active'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(dsI18n.t('ds_forms:fileuploader.AddSingleLabel'))
    ).toBeInTheDocument();
    const label = canvas.getByText('Ledetekst');
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveAttribute('id');
    const button = canvas.getByRole('button');
    const input = canvas.getByTestId('123ID-input');
    const inputId = input.getAttribute('id');
    await expect(button).toHaveAttribute(
      'aria-labelledby',
      `${inputId}-label ${inputId}-button-text`
    );
    await expect(button).toHaveAttribute('type', 'button');
    await expect(button).not.toHaveAttribute('aria-describedby');
    await expect(button).not.toHaveAttribute('aria-invalid');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute('id', label.getAttribute('for'));
  },
} satisfies Story;

export const WithUploadedFiles: StoryObj<FileUploaderProps> = {
  name: 'With Files (A5, B4 delvis)',
  args: {
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
    acceptedFileFormats: ['.java', '.cpp', '.py'],
    errorMessage: 'Du må laste opp en fil',
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-invalid', 'true');
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

export const WithUploadResultAndNoFiles: StoryObj<FileUploaderProps> = {
  name: 'With UploadResult And No Files',
  args: {
    uploadResult: { statusMessage: 'Lastet opp 1 fil' },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const statusMessageText = 'Lastet opp 1 fil';

    await waitFor(() =>
      expect(
        getSuccessStatusMessage(canvasElement, statusMessageText)
      ).toBeInTheDocument()
    );
  },
} satisfies Story;

export const WithUploadResultInsideFormWithoutFlicker: Story = {
  name: 'With UploadResult Inside Form Without Flicker',
  render: (): JSX.Element => {
    const FormWrapper = (): JSX.Element => {
      const [value, setValue] = useState('');

      return (
        <form>
          <TextField
            label={'Navn'}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <FileUploader
            label={'Ledetekst'}
            uploadResult={{ statusMessage: 'Lastet opp 1 fil' }}
          />
        </form>
      );
    };

    return <FormWrapper />;
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textField = canvas.getByRole('textbox', { name: 'Navn' });
    const statusMessageText = 'Lastet opp 1 fil';

    await waitFor(() =>
      expect(
        getSuccessStatusMessage(canvasElement, statusMessageText)
      ).toBeInTheDocument()
    );

    await userEvent.type(textField, 'abc');

    await expect(
      getSuccessStatusMessage(canvasElement, statusMessageText)
    ).toBeInTheDocument();

    await waitFor(
      () =>
        expect(
          getSuccessStatusMessage(canvasElement, statusMessageText)
        ).toBeInTheDocument(),
      { timeout: 300 }
    );
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
    uploadedFiles: [{ name: 'file.txt', href: '#' }],
    onFileDownload: fn(),
    onFileChange: fn(),
    onFileDelete: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
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
} satisfies Story;

export const WithHelpToggleEvent = {
  name: 'With onHelpToggle Event',
  args: {
    helpText: 'Hjelpetekst',
    onHelpToggle: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      name: dsI18n.t('Shared:shared.Help'),
    });
    await fireEvent.click(helpButton);
    await waitFor(() => expect(args.onHelpToggle).toHaveBeenCalled());
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
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: {
      test: 'off',
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const container = canvasElement.querySelector(`${wrapper} > div`);
    await expect(container).toHaveClass('dummyClassname');
    const errorText = within(canvasElement).getByText('feil');
    const errorMessage = errorText.closest('div');
    await expect(errorMessage).toHaveClass('dummyClassname');
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
          label={'Ledetekst'}
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
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deleteTitle = dsI18n.t('ds_forms:fileuploader.DeleteLabel');
    const uploadButtonName = new RegExp(
      dsI18n.t('ds_forms:fileuploader.AddSingleLabel'),
      'i'
    );
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
    await waitFor(() => {
      expect(canvas.queryByText('second.pdf')).not.toBeInTheDocument();
      expect(firstButton).toHaveFocus();
    });

    // Delete the first file (now list has first.pdf & third.pdf -> after deletion only third.pdf). No previous file, focus should move to upload button.
    const firstButtonAfter = canvas.getAllByTitle(deleteTitle)[0];
    await user.click(firstButtonAfter);
    await waitFor(() => {
      expect(canvas.queryByText('first.pdf')).not.toBeInTheDocument();
      const uploadButton = canvas.getByRole('button', {
        name: uploadButtonName,
      });
      expect(uploadButton).toHaveFocus();
    });

    // Delete the last remaining file -> still focus on upload button and no delete buttons remain
    const lastDeleteButton = canvas.getAllByTitle(deleteTitle)[0];
    await user.click(lastDeleteButton);
    await waitFor(() => {
      expect(canvas.queryByText('third.pdf')).not.toBeInTheDocument();
      expect(canvas.queryAllByTitle(deleteTitle).length).toBe(0);
      const uploadButton = canvas.getByRole('button', {
        name: uploadButtonName,
      });
      expect(uploadButton).toHaveFocus();
    });
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

export const WithDescription = {
  name: 'With Description',
  args: {
    description: 'En liten beskrivelse tekst',
  },
  argTypes: {
    description: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText('En liten beskrivelse tekst');
    await expect(description).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-describedby');
    const describedbyValue = button.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  },
} satisfies Story;

export const WithFocusManagementOnDeleteFailure: StoryObj<FileUploaderProps> = {
  name: 'With Focus Management on Delete Failure',
  render: () => {
    const FocusManagementFailureWrapper = (): JSX.Element => {
      const [files, setFiles] = useState([
        { name: 'first.pdf' },
        { name: 'second.pdf' },
        { name: 'third.pdf' },
      ]);
      return (
        <FileUploader
          label={'Ledetekst'}
          uploadedFiles={files}
          onFileDelete={(file) => {
            // Simulate deletion failure for 'second.pdf'
            if (file.name === 'second.pdf') {
              return false; // indicate failed delete
            }
            // Successful deletion for other files
            setFiles((prev) => prev.filter((f) => f.name !== file.name));
            return true;
          }}
        />
      );
    };
    return <FocusManagementFailureWrapper />;
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deleteTitle = dsI18n.t('ds_forms:fileuploader.DeleteLabel');
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });

    const initialDeleteButtons = canvas.getAllByRole('button', {
      name: deleteTitle,
    });
    expect(initialDeleteButtons).toHaveLength(3);
    const secondButton = initialDeleteButtons[1];

    // Try to delete the second file -> deletion fails
    await user.click(secondButton);
    // File should still be in the document
    await expect(canvas.queryByText('second.pdf')).toBeInTheDocument();
    // Focus should remain on the same delete button
    await expect(secondButton).toHaveFocus();
    // SR announcement should be made (error message)
    await waitFor(
      () => {
        const srOnlyDiv = canvas.queryByText(
          dsI18n.t('ds_forms:fileuploader.GeneralDeleteError')
        );

        expect(srOnlyDiv).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  },
};

export const WithIsRequired = {
  name: 'With IsRequired',
  args: {
    isRequired: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const requiredText = canvas.getByText(
      dsI18n.t('ds_forms:fileuploader.required')
    );
    await expect(requiredText).toBeInTheDocument();
    const className = requiredText.getAttribute('class');
    await expect(className).toContain('srOnly');
  },
} satisfies Story;
