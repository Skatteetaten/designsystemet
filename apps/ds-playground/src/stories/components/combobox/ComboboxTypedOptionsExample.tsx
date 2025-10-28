import { JSX, useState, type FormEvent } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  Combobox,
  TypedComboboxOption,
  type ComboboxOption,
} from '@skatteetaten/ds-forms';
import { List, Heading, Paragraph } from '@skatteetaten/ds-typography';

import {
  KommuneTestMetaData,
  typedKommuneOptions,
} from './combobox.stories.utils';

export const ComboboxTypedOptionsExample = (): JSX.Element => {
  const [selectedKommuner, setSelectedKommuner] = useState<string[]>([]);
  const [selectedKommuneObjects, setSelectedKommuneObjects] = useState<
    TypedComboboxOption<KommuneTestMetaData>[]
  >([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSelectionChange = (options: ComboboxOption[]): void => {
    const typedOptions = options as TypedComboboxOption<KommuneTestMetaData>[];

    // Update both the value array for the controlled component
    const values = typedOptions.map((option) => option.value);
    setSelectedKommuner(values);

    // And keep the full objects for displaying metadata
    setSelectedKommuneObjects(typedOptions);

    // Reset submission state when selection changes
    setIsSubmitted(false);
    setSubmissionMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (selectedKommuneObjects.length === 0) {
      setSubmissionMessage(
        'Du må velge minst én kommune før du kan sende inn skjemaet.'
      );
      return;
    }

    // Simulate form submission
    const submissionData = {
      selectedKommuner: selectedKommuneObjects.map((kommune) => ({
        kommune: kommune.label,
        sammenslatt: kommune.data.sammenslatt,
        aar: kommune.data.aar,
        type: kommune.data.type,
        resultat: kommune.data.resultat,
      })),
      totalKommuner: selectedKommuneObjects.length,
      submittedAt: new Date().toISOString(),
    };

    console.log('Form submission data:', submissionData);

    setIsSubmitted(true);
    setSubmissionMessage(
      `Skjema sendt inn! Du valgte ${selectedKommuneObjects.length} kommune${selectedKommuneObjects.length === 1 ? '' : 'r'}.`
    );
  };

  const handleReset = (): void => {
    setSelectedKommuner([]);
    setSelectedKommuneObjects([]);
    setIsSubmitted(false);
    setSubmissionMessage('');
  };

  return (
    <div>
      <Paragraph hasSpacing>
        {'Dette eksemplet viser hvordan man kan bruke TypedComboboxOption for å legge til metadata i valgalternativene. ' +
          'Her demonstreres dette med tidligere norske kommuner og informasjon om deres sammenslåing. ' +
          'TypedComboboxOption gir full TypeScript type-sikkerhet og IntelliSense for metadata, og fungerer med alle ' +
          'Combobox-varianter (single-, multi-select, samt controlled og uncontrolled).'}
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <div className={'flex gapXl'}>
          <div>
            <Combobox
              name={'selectedKommuner'}
              label={'Velg tidligere norske kommuner'}
              description={
                'Velg maksimalt 2 kommuner. Du kan se informasjon om sammenslåing og resulterende kommune.'
              }
              placeholder={'Søk etter kommune'}
              options={typedKommuneOptions}
              value={selectedKommuner}
              errorMessage={
                submissionMessage && !isSubmitted
                  ? submissionMessage
                  : undefined
              }
              maxSelected={2}
              multiple
              hasSpacing
              onSelectionChange={handleSelectionChange}
            />

            <div className={'flex gapS topSpacingL'}>
              <Button type={'submit'}>{'Send inn valg'}</Button>

              {(selectedKommuneObjects.length > 0 || isSubmitted) && (
                <Button
                  variant={'tertiary'}
                  type={'button'}
                  onClick={handleReset}
                >
                  {'Nullstill valg'}
                </Button>
              )}
            </div>

            {isSubmitted && submissionMessage && (
              <div className={'topSpacingS paddingXS'}>
                <strong>
                  {'✓ '}
                  {submissionMessage}
                </strong>
                <div className={'topSpacingXs'}>
                  {'Se konsollen for fullstendige innsendte data.'}
                </div>
              </div>
            )}
          </div>

          {selectedKommuneObjects.length > 0 && (
            <div className={'flexGrow'}>
              <Heading as={'h3'} level={3} hasSpacing>
                {'Valgte kommuner ('}
                {selectedKommuneObjects.length}
                {')'}
              </Heading>
              <List hasSpacing>
                {selectedKommuneObjects.map((kommune) => (
                  <List.Element key={kommune.value}>
                    <div className={'bottomSpacingXS'}>
                      {kommune.label}
                      <br />
                      <span>{'Sammenslått: '}</span>
                      {kommune.data.sammenslatt}
                      <br />
                      <span>
                        {'Etablert: '}
                        {kommune.data.aar}
                      </span>
                      <br />
                      <span>
                        {'Type sammenslåing: '}
                        {kommune.data.type}
                      </span>
                      <br />
                      <span>
                        {'Resulterende kommune: '}
                        {kommune.data.resultat}
                      </span>
                    </div>
                  </List.Element>
                ))}
              </List>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
