import { JSX, useActionState, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { getComboboxStoryOptions } from './combobox.stories.utils';

type FormActionState = {
  success: boolean;
  message?: string;
  selectedItems?: string[];
};

export const ComboboxFormExample = (): JSX.Element => {
  const [resetKey, setResetKey] = useState(0);

  const [state, formAction, isPending] = useActionState(
    async (
      _prevState: FormActionState,
      formData: FormData
    ): Promise<FormActionState> => {
      if (formData.get('action') === 'reset') {
        return { success: false };
      }

      await new Promise((resolve) => setTimeout(resolve, 200));

      const selectedKommuner = formData.getAll('kommuner') as string[];

      if (selectedKommuner.length === 0) {
        return {
          success: false,
          message: 'Du må velge minst én kommune',
        };
      }

      return {
        success: true,
        message: `Du valgte: ${selectedKommuner.join(', ')}`,
        selectedItems: selectedKommuner,
      };
    },
    { success: false }
  );

  const handleReset = (): void => {
    setResetKey((prev) => prev + 1);

    const resetFormData = new FormData();
    resetFormData.set('action', 'reset');
    formAction(resetFormData);
  };

  return (
    <form action={formAction}>
      <Combobox
        key={resetKey}
        name={'kommuner'}
        label={'Velg kommuner'}
        placeholder={'Skriv eller velg kommuner'}
        errorMessage={
          !state.success && state.message ? state.message : undefined
        }
        options={getComboboxStoryOptions()}
        multiple
        hasSpacing
      />

      <Button className={'bottomSpacingS'} type={'submit'} disabled={isPending}>
        {isPending ? 'Sender...' : 'Send inn'}
      </Button>
      {state.success && state.message && (
        <div className={'flex gapS itemsCenter'}>
          <Paragraph>{state.message}</Paragraph>
          <Button variant={'danger'} type={'button'} onClick={handleReset}>
            {'Nullstill'}
          </Button>
        </div>
      )}
    </form>
  );
};
