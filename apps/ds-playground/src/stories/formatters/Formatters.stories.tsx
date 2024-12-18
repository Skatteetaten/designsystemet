import { ChangeEvent, useEffect, useState } from 'react';

import { formatter } from '@skatteetaten/ds-core-utils';
import { Select, TextField } from '@skatteetaten/ds-forms';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Utilities/Formatters',
};

const defaultArgs = {
  className: { table: { disable: true } },
  'data-testid': { table: { disable: true } },
  id: { table: { disable: true } },
  key: { table: { disable: true } },
  lang: { table: { disable: true } },
  ref: { table: { disable: true } },
};

const locale = {
  nb: 'nb-NO',
  nn: 'nn-NO',
  en: 'en-GB',
  sv: 'sv-NO',
  enin: 'en-IN',
  ch: 'zh-HK',
  korean: 'ko-KR',
  vietnam: 'vi-VN',
  arabic: 'ar-SA',
};

export const Formatters: StoryObj = {
  argTypes: defaultArgs,

  render: () => {
    const [value, setValue] = useState('123456789,5');
    const [orgValue, setOrgValue] = useState('1');
    const [personnummerValue, setPersonnummerValue] = useState('');
    const [kontonummerValue, setKontonummerValue] = useState('');
    const [language, setLanguage] = useState('nb-NO');
    useEffect(() => {
      setPersonnummerValue(
        formatter({ value: '26301518292', type: 'personnummer' }).value
      );
      setOrgValue(
        formatter({ value: '974 761 076', type: 'organisasjonsnummer' }).value
      );
      setKontonummerValue(
        formatter({ value: '7694 05 24802', type: 'kontonummer' }).value
      );
    }, []);
    return (
      <>
        <Select
          label={'Språk'}
          defaultValue={language}
          onChange={(event: ChangeEvent<HTMLSelectElement>): void => {
            setLanguage(event.target.value);
          }}
        >
          {Object.entries(locale).map(([key, value]) => {
            return (
              <Select.Option key={key} value={value}>
                {value}
              </Select.Option>
            );
          })}
        </Select>
        <TextField
          label={'Input '}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>{'Tekst'}</th>
              <th>{'Verdi'}</th>
              <th>{'Format'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'Input'}</td>
              <td>{formatter({ value: value, type: 'number' }).parsed}</td>
              <td>{'Raw'}</td>
            </tr>
            <tr>
              <td>{'Nummerformat'}</td>
              <td>
                {
                  formatter({
                    value: value,
                    type: 'number',
                    lang: language,
                  }).value
                }
              </td>
              <td>
                {'Nor 1 234 eller 1 234,5'}
                <br />
                {'Eng 1,234 or 1,234.5'}
              </td>
            </tr>
            <tr>
              <td>{'Nummerformat uncomplete'}</td>
              <td>
                {
                  formatter({
                    value: value,
                    type: 'number',
                    lang: language,
                    allowDesimalAtEnd: true,
                  }).value
                }
              </td>
              <td>{'allowDesimalAtEnd'}</td>
            </tr>
            <tr>
              <td>{'Nummerformat med isCurrency = true'}</td>
              <td>
                {
                  formatter({
                    value: value,
                    type: 'number',
                    lang: language,
                    isCurrency: true,
                  }).value
                }
              </td>
              <td>
                {'Nor 1 234 eller 1 234,50'}
                <br />
                {'Eng 1,234 or 1,234.50'}
              </td>
            </tr>
            {/* <tr>
              <td>{'Personnummer'}</td>
              <td>{formatter({ value: value, type: 'personnummer' }).value}</td>
              <td>{'***** ****'}</td>
            </tr>
            <tr>
              <td>{'Organisasjonsnummer'}</td>
              <td>
                {formatter({ value: value, type: 'organisasjonsnummer' }).value}
              </td>
              <td>{'*** *** ***'}</td>
            </tr>
            <tr>
              <td>{'Kontonummer'}</td>
              <td>{formatter({ value: value, type: 'kontonummer' }).value}</td>
              <td>{'**** ** *****'}</td>
            </tr>
            <tr>
              <td>{'Telefonnummer (WIP. Mangler støtte for landskode)'}</td>
              <td>
                {formatter({ value: value, type: 'telefonnummer' }).value}
              </td>
              <td>{'** ** ** **'}</td>
            </tr> */}
            <tr>
              <td
                colSpan={3}
              >{`Return status for Numberformat. Språk satt er ${language}`}</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <pre>
                  {JSON.stringify(
                    formatter({ value: value, type: 'number', lang: language }),
                    null,
                    2
                  )}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
        {/* 
        <TextField
          label={'Personnummer '}
          value={personnummerValue}
          onChange={(e) =>
            setPersonnummerValue(
              formatter({
                value: e.target.value ? e.target.value : '',
                type: 'personnummer',
              }).value
            )
          }
        />

        <TextField
          label={'Organisasjonsnummer '}
          value={orgValue}
          onChange={(e) =>
            setOrgValue(
              formatter({
                value: e.target.value ? e.target.value : '',
                type: 'organisasjonsnummer',
              }).value
            )
          }
        />

        <TextField
          label={'Kontonummer '}
          value={kontonummerValue}
          onChange={(e) =>
            setKontonummerValue(
              formatter({
                value: e.target.value ? e.target.value : '',
                type: 'kontonummer',
              }).value
            )
          }
        /> */}
      </>
    );
  },
};
