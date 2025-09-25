import { JSX, useState, type FormEvent } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  Combobox,
  TypedComboboxOption,
  type ComboboxOption,
} from '@skatteetaten/ds-forms';
import { List, Heading, Paragraph } from '@skatteetaten/ds-typography';

interface FruitData {
  origin: string;
  bestBeforeDate: string;
  variety: string;
  season: string;
}

const fruitOptions: TypedComboboxOption<FruitData>[] = [
  {
    label: 'Eple',
    value: 'apple-granny-smith',
    data: {
      origin: 'Norge',
      bestBeforeDate: '2024-12-15',
      variety: 'Granny Smith',
      season: 'Høst',
    },
  },
  {
    label: 'Banan',
    value: 'banana-cavendish',
    data: {
      origin: 'Ecuador',
      bestBeforeDate: '2024-09-25',
      variety: 'Cavendish',
      season: 'Hele året',
    },
  },
  {
    label: 'Appelsin',
    value: 'orange-navel',
    data: {
      origin: 'Spania',
      bestBeforeDate: '2024-10-10',
      variety: 'Navel',
      season: 'Vinter',
    },
  },
  {
    label: 'Jordbær',
    value: 'strawberry-senga-sengana',
    data: {
      origin: 'Norge',
      bestBeforeDate: '2024-09-20',
      variety: 'Senga Sengana',
      season: 'Sommer',
    },
  },
  {
    label: 'Mango',
    value: 'mango-tommy-atkins',
    data: {
      origin: 'Brasil',
      bestBeforeDate: '2024-09-22',
      variety: 'Tommy Atkins',
      season: 'Vinter',
    },
  },
  {
    label: 'Druer',
    value: 'grapes-thompson-seedless',
    data: {
      origin: 'Italia',
      bestBeforeDate: '2024-09-30',
      variety: 'Thompson Seedless',
      season: 'Høst',
    },
  },
  {
    label: 'Ananas',
    value: 'pineapple-golden-sweet',
    data: {
      origin: 'Costa Rica',
      bestBeforeDate: '2024-09-28',
      variety: 'Golden Sweet',
      season: 'Hele året',
    },
  },
  {
    label: 'Pære',
    value: 'pear-conference',
    data: {
      origin: 'Belgia',
      bestBeforeDate: '2024-11-05',
      variety: 'Conference',
      season: 'Høst',
    },
  },
];

export const ComboboxTypedOptionsExample = (): JSX.Element => {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedFruitObjects, setSelectedFruitObjects] = useState<
    TypedComboboxOption<FruitData>[]
  >([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSelectionChange = (options: ComboboxOption[]): void => {
    const typedOptions = options as TypedComboboxOption<FruitData>[];

    // Update both the value array for the controlled component
    const values = typedOptions.map((option) => option.value);
    setSelectedFruits(values);

    // And keep the full objects for displaying metadata
    setSelectedFruitObjects(typedOptions);

    // Reset submission state when selection changes
    setIsSubmitted(false);
    setSubmissionMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (selectedFruitObjects.length === 0) {
      setSubmissionMessage(
        'Du må velge minst én frukt før du kan sende inn skjemaet.'
      );
      return;
    }

    // Simulate form submission
    const submissionData = {
      selectedFruits: selectedFruitObjects.map((fruit) => ({
        fruit: `${fruit.data.variety} (${fruit.label})`,
        origin: fruit.data.origin,
        bestBeforeDate: fruit.data.bestBeforeDate,
        season: fruit.data.season,
      })),
      totalFruits: selectedFruitObjects.length,
      submittedAt: new Date().toISOString(),
    };

    console.log('Form submission data:', submissionData);

    setIsSubmitted(true);
    setSubmissionMessage(
      `Skjema sendt inn! Du valgte ${selectedFruitObjects.length} frukt${selectedFruitObjects.length === 1 ? '' : 'er'}.`
    );
  };

  const handleReset = (): void => {
    setSelectedFruits([]);
    setSelectedFruitObjects([]);
    setIsSubmitted(false);
    setSubmissionMessage('');
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('nb-NO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      <Paragraph hasSpacing>
        {'Dette eksemplet viser hvordan man kan bruke TypedComboboxOption for å legge til metadata i valgalternativene. ' +
          'Det kan være nyttig dersom man ønsker å bruke datasettet direkte fremfor å gjøre ytterligere mappinger. ' +
          'TypedComboboxOption gir full TypeScript type-sikkerhet og IntelliSense for metadata, og fungerer med alle ' +
          'Combobox-varianter (single-, multi-select, samt controlled og uncontrolled).'}
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <div className={'flex gapXl'}>
          <div>
            <Combobox
              name={'selectedFruits'}
              label={'Velg frukter fra butikken'}
              description={
                'Velg maksimalt 2 frukter. Du kan se opprinnelsesland og best før dato for de valgte fruktene.'
              }
              placeholder={'Søk etter frukt eller sort'}
              options={fruitOptions}
              variant={'large'}
              value={selectedFruits}
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

              {(selectedFruitObjects.length > 0 || isSubmitted) && (
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

          {selectedFruitObjects.length > 0 && (
            <div className={'flexGrow'}>
              <Heading as={'h3'} level={3} hasSpacing>
                {'Valgte frukter ('}
                {selectedFruitObjects.length}
                {')'}
              </Heading>
              <List hasSpacing>
                {selectedFruitObjects.map((fruit) => (
                  <List.Element key={fruit.value}>
                    <div className={'bottomSpacingXS'}>
                      {fruit.label}
                      <br />
                      <span>{'Variant: '}</span>
                      {fruit.data.variety}
                      <br />
                      <span>
                        {'Opprinnelsesland: '}
                        {fruit.data.origin}
                      </span>
                      <br />
                      <span>
                        {'Best før: '}
                        {formatDate(fruit.data.bestBeforeDate)}
                      </span>
                      <br />
                      <span>
                        {'Sesong: '}
                        {fruit.data.season}
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
