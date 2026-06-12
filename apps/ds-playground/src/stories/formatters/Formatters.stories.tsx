import { useEffect, useState } from 'react';

import { StoryObj } from '@storybook/react-vite';

import {
  dsI18n,
  useFormattedInput,
  type FormattedInputStatus,
} from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import { Alert } from '@skatteetaten/ds-status';

const mapStatusToMessage = (
  status: FormattedInputStatus
): string | undefined => {
  switch (status) {
    case 'maxDigitsReached':
      return 'Du kan ikke legge inn flere siffer';
    case 'maxDecimalsReached':
      return 'Du kan ikke legge inn flere desimaler';
    case 'duplicateDecimalSeparator':
      return 'Desimalskilletegn er allerede lagt inn';
    case 'valid':
      return undefined;
  }
};

export default {
  title: 'Verktøy/Formatters',
};

const defaultArgs = {
  className: { table: { disable: true } },
  'data-testid': { table: { disable: true } },
  id: { table: { disable: true } },
  key: { table: { disable: true } },
  lang: { table: { disable: true } },
  ref: { table: { disable: true } },
};

export const Formatters: StoryObj = {
  argTypes: defaultArgs,
  render: function Render() {
    const [locale, setLocale] = useState(dsI18n.language.replace('_', '-'));

    useEffect(() => {
      const handleLanguageChange = (lng: string): void => {
        setLocale(lng.replace('_', '-'));
      };
      dsI18n.on('languageChanged', handleLanguageChange);
      return (): void => {
        dsI18n.off('languageChanged', handleLanguageChange);
      };
    }, []);

    const phoneNumberFormatter = useFormattedInput({
      type: 'phoneNumber',
      initialValue: '12345678',
    });

    const organisationNumberFormatter = useFormattedInput({
      type: 'organisationNumber',
      initialValue: '974761076',
    });

    const nationalIdentityNumberFormatter = useFormattedInput({
      type: 'nationalIdentityNumber',
      initialValue: '26301518292',
    });

    const bankAccountNumberFormatter = useFormattedInput({
      type: 'bankAccountNumber',
      initialValue: '76940524802',
    });

    const numberFormatter = useFormattedInput({
      type: 'number',
      initialValue: '50400,32',
      locale: locale,
    });

    const decimalNumberFormatter = useFormattedInput({
      type: 'number',
      initialValue: '50400,32',
      locale: locale,
      allowDecimals: true,
    });

    console.log('displayValue: ', decimalNumberFormatter.value);
    console.log('rawValue: ', decimalNumberFormatter.rawValue);
    console.log('numberValue: ', decimalNumberFormatter.numberValue);
    return (
      <>
        <TextField
          label={'Telefonnummer'}
          value={phoneNumberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={phoneNumberFormatter.onChange}
          onKeyDown={phoneNumberFormatter.onKeyDown}
        />
        <TextField
          label={'Organisasjonsnummer (9 siffer)'}
          value={organisationNumberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={organisationNumberFormatter.onChange}
          onKeyDown={organisationNumberFormatter.onKeyDown}
        />
        <TextField
          label={'Fødselsnummer (11 siffer)'}
          value={nationalIdentityNumberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={nationalIdentityNumberFormatter.onChange}
          onKeyDown={nationalIdentityNumberFormatter.onKeyDown}
        />
        <TextField
          label={'Kontonummer'}
          value={bankAccountNumberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={bankAccountNumberFormatter.onChange}
          onKeyDown={bankAccountNumberFormatter.onKeyDown}
        />
        <TextField
          label={'Beløp'}
          description={`Formatert etter valgt språk: ${locale}`}
          value={numberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={numberFormatter.onChange}
          onKeyDown={numberFormatter.onKeyDown}
        />
        <Alert
          className={'textField300'}
          variant={'warning'}
          showAlert={numberFormatter.status !== 'valid'}
        >
          {mapStatusToMessage(numberFormatter.status)}
        </Alert>
        <TextField
          label={'Beløp med desimal'}
          description={`Formatert etter valgt språk: ${locale}`}
          value={decimalNumberFormatter.value}
          className={'textField300'}
          hasSpacing
          onChange={decimalNumberFormatter.onChange}
          onKeyDown={decimalNumberFormatter.onKeyDown}
        />
        <Alert
          className={'textField300'}
          variant={'warning'}
          showAlert={decimalNumberFormatter.status !== 'valid'}
        >
          {mapStatusToMessage(decimalNumberFormatter.status)}
        </Alert>
      </>
    );
  },
};
