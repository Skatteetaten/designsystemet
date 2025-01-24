import { formatter, NON_BREAKING_SPACE } from '../formatter/formatter';

const formatNBS = (value: string): string => {
  return value.replaceAll(' ', NON_BREAKING_SPACE);
};

describe('Formatter', () => {
  it('Når format skal bli for organisasjonsnummer', () => {
    const formatObj = formatter({
      value: '123456789',
      type: 'organisationNumber',
    });
    expect(formatObj.value).toBe(formatNBS('123 456 789'));
  });
  it('Når format skal være personnummer', () => {
    const formatObj = formatter({
      value: '12345612345',
      type: 'nationalIdentityNumber',
    });
    expect(formatObj.value).toBe(formatNBS('123456 12345'));
  });
  it('Når format skal være kontonummer', () => {
    const formatObj = formatter({
      value: '12341212345',
      type: 'bankAccountNumber',
    });
    expect(formatObj.value).toBe(formatNBS('1234 12 12345'));
  });
});
