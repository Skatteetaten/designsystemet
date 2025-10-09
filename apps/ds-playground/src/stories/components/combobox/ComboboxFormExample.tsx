import { JSX, useActionState, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

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

      const selectedVegetables = formData.getAll('vegetables') as string[];

      if (selectedVegetables.length === 0) {
        return {
          success: false,
          message: 'Du må velge minst én grønnsak',
        };
      }

      return {
        success: true,
        message: `Du valgte: ${selectedVegetables.join(', ')}`,
        selectedItems: selectedVegetables,
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
        name={'vegetables'}
        label={'Velg grønnsaker'}
        placeholder={'Skriv eller velg grønnsaker'}
        errorMessage={
          !state.success && state.message ? state.message : undefined
        }
        options={[
          { label: 'Agurk', value: 'agurk' },
          { label: 'Tomat', value: 'tomat' },
          { label: 'Mais', value: 'mais' },
          { label: 'Paprika', value: 'paprika' },
          { label: 'Squash', value: 'squash' },
          { label: 'Rucola', value: 'rucola' },
          { label: 'Spinat', value: 'spinat' },
          { label: 'Søtpotet', value: 'sotpotet' },
          { label: 'Brokkoli', value: 'brokkoli' },
          { label: 'Gulrot', value: 'gulrot' },
        ]}
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
