import { expect } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import { getFileUploaderGetSpinnerLabelDefault } from '../defaults';

describe('FileUploader defaults', () => {
  it('Når getFileUploaderGetSpinnerLabelDefault kalles, så returnerer den riktig verdi', () => {
    expect(getFileUploaderGetSpinnerLabelDefault()).toBe(
      dsI18n.t('ds_forms:fileuploader.InProgressLabel')
    );
  });
});
