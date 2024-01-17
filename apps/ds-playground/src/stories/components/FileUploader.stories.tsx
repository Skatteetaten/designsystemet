import { useState } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Checkbox, FileUploader } from '@skatteetaten/ds-forms';
import { FileUploaderProps } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';
import { StoryObj, Meta, StoryFn } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: FileUploader,
  title: 'Komponenter/FileUploader',
  argTypes: {
    // Props
    acceptedFileFormatsDisplay: { table: { category: category.props } },
    description: { table: { category: category.props } },
    fileIconTitle: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
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
    invalidCharacterRegexp: {
      control: 'text',
      table: { category: category.props },
    },
    isUploading: { table: { category: category.props } },
    label: { table: { category: category.props } },
    acceptedFileFormats: { table: { category: category.props } },
    shouldNormalizeFileName: { table: { category: category.props } },
    showRequiredMark: {
      table: {
        category: category.props,
      },
    },
    successIconTitle: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    uploadedFiles: { table: { category: category.props } },
    uploadResult: { table: { category: category.props } },
    // HTML
    multiple: {
      table: { category: category.htmlAttribute },
    },
    children: { table: { category: category.props } },
    acceptedFileFormatsDescription: { table: { category: category.props } },
    // Events
    onFileDelete: {
      table: { category: category.event },
    },
    onFileChange: {
      table: { category: category.event },
    },
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof FileUploader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: StoryObj<FileUploaderProps> = {
  args: {
    helpText: 'Hjelpetekst',
    label: 'Ledetekst',
    acceptedFileFormats: ['.pdf', '.jpeg'],
    uploadedFiles: [
      { name: 'test.pdf', href: 'https://i.imgur.com/guZeGcr.png' },
      { name: 'test.jpg' },
      { name: 'loading.jpg' },
      {
        name: 'test.png',
        href: 'http://localhost:4400/designsystem_illustrasjon.png',
      },
    ],
    onFileDelete: (file: string): boolean => {
      console.log(file);

      return true;
    },
  },
} satisfies Story;

//TODO hvorfor henger storybook når jeg setter args som parameter her og mottar status 500?
export const Example: StoryFn<typeof FileUploader> = () => {
  interface MockUploadedFile {
    href?: string;
  }
  const createMockPromises = (amount: number): Promise<MockUploadedFile>[] => {
    const promises: Promise<MockUploadedFile>[] = [];
    for (let i = 0; i < amount; i++) {
      const promise = new Promise<MockUploadedFile>((resolve, reject) => {
        if (Math.random() < 0.5) {
          resolve({ href: 'https://skatteetaten.github.io/designsystemet/' });
        } else {
          reject('Promise rejected');
        }
      });

      promises.push(promise);
    }
    return promises;
  };

  const [fileUploaderState, setSuccess, setLoading, setFailure, remove] =
    FileUploader.useFileUploader();

  const [error, setError] = useState<string>();
  const [shouldMockUpload, setShouldMockUpload] = useState<boolean>(true);

  const uploadUrl = 'http://localhost:9090/test';

  return (
    <>
      <Paragraph className={'dummyPanelOverridesWidthAndPadding'}>
        {
          'Dersom mockUpload er krysset av så vil det opprettes promises som har 50% sjangse for å rejecte. Da får man sett både vellykket og feilet opplasting. Når mockUpload er slått av forsøker eksempelet å laste opp til http://localhost:9090/test'
        }
      </Paragraph>
      <Checkbox
        checked={shouldMockUpload}
        onChange={() => setShouldMockUpload(!shouldMockUpload)}
      >
        {'Bruk mockUpload'}
      </Checkbox>
      <FileUploader
        label={'Dokumentasjon og grunnlag'}
        helpText={'Trenger du hjelp?'}
        acceptedFileFormats={['.pdf', '.jpeg', '.png']}
        invalidCharacterRegexp={/e/g}
        shouldNormalizeFileName
        {...fileUploaderState}
        errorMessage={error ?? ''}
        hasError={!!error}
        multiple
        onFileDelete={(file: string): boolean => {
          if (shouldMockUpload) {
            remove(file);
            return true;
          }
          let deleteStatus = true;

          fetch(uploadUrl, {
            method: 'DELETE',
          }).then((response) => {
            console.log(response);
            if (!response.ok) {
              deleteStatus = false;
            } else {
              remove(file);
            }
          });
          return deleteStatus;
        }}
        onFileChange={async (files: File[]): Promise<void> => {
          setLoading();
          setError('');
          if (files.some((file) => file.size > 900_000)) {
            setError('Filen er for stor eller noe');
            return;
          }

          const succeeded: Array<{ name: string; href?: string }> = [];
          const failed: Array<{ name: string; reason: string }> = [];

          let uploadPromises: Promise<MockUploadedFile>[] = [];

          if (shouldMockUpload) {
            uploadPromises = createMockPromises(files.length);
          } else {
            uploadPromises = files.map((file) =>
              fetch(uploadUrl, {
                method: 'POST',
                body: file,
              }).then((response) => {
                console.log(response);
                if (!response.ok) {
                  return Promise.reject(response);
                }
                return response.json();
              })
            );
          }

          const results = await Promise.allSettled(uploadPromises);

          results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
              console.log('FULLLFILLED', result);
              succeeded.push({
                name: files[index].name,
                href: result.value.href,
              });
            } else if (result.status === 'rejected') {
              console.log('REJECT', result);
              failed.push({
                name: files[index].name,
                reason: result.reason.statusText,
              });
            }
          });

          if (failed.length) {
            const error = `${failed.length} av ${files.length} filer ble ikke lastet Opp`;
            setFailure(
              failed.map(({ name, reason }) => ({
                name,
                errorMessage: reason,
              })),
              [{ error, files: failed.map((file) => file.name) }],
              succeeded
            );
          } else {
            setSuccess(succeeded);
          }
        }}
      ></FileUploader>
    </>
  );
};

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
