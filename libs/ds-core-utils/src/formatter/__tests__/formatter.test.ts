import {
  formatNationalIdentityNumber,
  formatOrganisationNumber,
  formatter,
  formatNumber,
} from '../formatter';
import { NON_BREAKING_SPACE } from '../utils';

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
  it('Når format skal bli for organisasjonsnummer og input inneholder nbsp som skilletegn så skal det returneres med samme siffer', () => {
    const formatObj = formatter({
      value: formatNBS('123 456 789'),
      type: 'organisationNumber',
    });
    expect(formatObj.value).toBe(formatNBS('123 456 789'));
  });
  it('Når format skal bli for organisasjonsnummer', () => {
    const orgNr = formatOrganisationNumber('123456789');
    expect(orgNr).toBe(formatNBS('123 456 789'));
  });
  it('Når format skal være personnummer', () => {
    const formatObj = formatter({
      value: '12345612345',
      type: 'nationalIdentityNumber',
    });
    expect(formatObj.value).toBe(formatNBS('123456 12345'));
  });
  it('Når format skal være personnummer og input inneholder ulovlige tegn så skal bare grupperte siffer returneres', () => {
    const formatObj = formatter({
      value: '123456TTTT12345',
      type: 'nationalIdentityNumber',
    });
    expect(formatObj.value).toBe(formatNBS('123456 12345'));
  });

  it('Når format skal bli for fødselsnummer', () => {
    const fNr = formatNationalIdentityNumber('12345612345');
    expect(fNr).toBe(formatNBS('123456 12345'));
  });
  it('Når format skal være kontonummer', () => {
    const formatObj = formatter({
      value: '12341212345',
      type: 'bankAccountNumber',
    });
    expect(formatObj.value).toBe(formatNBS('1234 12 12345'));
  });

  it('Når input streng for kontonummer er for langt skal det returnere formatert og trimmet nummer', () => {
    const formatObj = formatter({
      value: '123456789012345',
      type: 'bankAccountNumber',
    });
    expect(formatObj.value).toBe(formatNBS('1234 56 78901'));
  });

  describe('number', () => {
    it('Når tall er ufullstendig utfylt og det skal være tillatt å ha desimaltegn til slutt så returneres også desimaltegn', () => {
      const formatObj = formatter({
        value: '2500,',
        type: 'number',
      });
      expect(formatObj.valueWithDecimalTail).toBe(formatNBS('2 500,'));
    });

    it('Når input ikke kan tolkes som et gyldig tall så skal det returneres input uten endring', () => {
      const formatObj = formatter({
        value: 'halla',
        type: 'number',
      });
      expect(formatObj.value).toBe(formatNBS('halla'));
    });
  });

  describe('formatNumber', () => {
    it('Når tall er heltall returneres det i riktig format', () => {
      expect(formatNumber('1234567')).toBe(formatNBS('1 234 567'));
    });

    it('Når tall er heltale og locale er en-BG returnerer den riktig format', () => {
      expect(formatNumber('1234567', { locale: 'en-GB' })).toBe('1,234,567');
    });

    it('Når input ikke er gyldig nummer returneres den uendret', () => {
      expect(formatNumber('notanumber')).toBe(formatNBS('notanumber'));
    });

    it('Når input er tom streng returnerer den tom streng', () => {
      expect(formatNumber('')).toBe('');
    });

    it('Når tall er negativt returnerer den riktig format med riktig minus symbol', () => {
      expect(formatNumber('-1234567')).toBe(formatNBS('-1 234 567'));
    });

    it('Når tall er desimal returnerer den riktig format', () => {
      expect(formatNumber('12345,67')).toBe(formatNBS('12 345,67'));
    });

    it('Når tall er desimal og locale er en-GB så returnerer den riktig format', () => {
      expect(formatNumber('12345.67', { locale: 'en-GB' })).toBe('12,345.67');
    });

    it('handles currency formatting if supported', () => {
      const result = formatNumber('12345.6', {
        locale: 'en-GB',
        style: 'currency',
        currency: 'GBP',
      });
      expect(result).toBe(formatNBS('£12,345.60'));
    });

    it('Når style er currency og vi har mer enn to desimaler så skal den formatere som valuta med kun to desimaler', () => {
      // Accept both possible outputs for en-GB currency
      const result = formatNumber('12345.6789', {
        style: 'currency',
      });
      expect(result).toBe(formatNBS('12 345,68 kr'));
    });

    it('Når style er currency og vi har én desimal så skal den formatere som valuta med to desimaler', () => {
      const result = formatNumber('12345.6', {
        style: 'currency',
      });
      expect(result).toBe(formatNBS('12 345,60 kr'));
    });

    it('Når input er av type number så skal den returnere riktig format uten å endre verdien', () => {
      expect(formatNumber(1234567)).toBe(formatNBS('1 234 567'));
    });

    it('Når input er av type number og locale er en-GB så skal den returnere riktig format uten å endre verdien', () => {
      expect(formatNumber(1234567, { locale: 'en-GB' })).toBe('1,234,567');
    });

    it('Når input er type number og negativ skal den returnere riktig format', () => {
      expect(formatNumber(-1234567)).toBe(formatNBS('-1 234 567'));
    });

    it('Når input er type number med desimal så skal den returnere riktig format med desimal', () => {
      expect(formatNumber(12345.67)).toBe(formatNBS('12 345,67'));
    });

    it('Når input er type number med negativt tall så skal den returnere riktig format med negativt tall', () => {
      expect(formatNumber(-12345.67)).toBe(formatNBS('-12 345,67'));
    });

    it('Når style er currency og (nb-NO) så skal den formatere som norske kroner', () => {
      const result = formatNumber(12345.6, {
        locale: 'nb-NO',
        style: 'currency',
      });
      expect(result).toBe(formatNBS('12 345,60 kr'));
    });
  });

  describe('formatter med type number og en-GB', () => {
    it('Når inputtall er locale en-GB og har ett desimal og style er currency så skal returnert tall ha to desimaler hvor punktum er desimalskilletegn', () => {
      const formatObj = formatter({
        value: '2500.5',
        type: 'number',
        options: {
          style: 'currency',
          currency: 'GBP',
        },
        locale: 'en-GB',
      });
      expect(formatObj.value).toBe('£2,500.50');
    });

    it('når tall er 234,lkj234llllsdfkj3.34 så skal 234,lkj234llllsdfkj3.34 returneres', () => {
      const formatObj = formatter({
        value: '234,lkj234llllsdfkj3.34',
        type: 'number',
        locale: 'en-GB',
      });
      expect(formatObj.value).toBe(formatNBS('234,lkj234llllsdfkj3.34'));
    });

    it('Når tall er heltall uten desimalskilletegn så skal ikke desimaltegn returnes', () => {
      const formatObj = formatter({
        value: '123',
        type: 'number',
        locale: 'en-GB',
      });
      expect(formatObj.value).toBe('123');
    });

    it('Når tall med punktum og doble mellomrom skal formateres til en-GB så tolkes det som ugyldig og input returneres uforandret', () => {
      const formatObj = formatter({
        value: '123.  4543,',
        type: 'number',
        locale: 'en-GB',
      });
      expect(formatObj.value).toBe('123.  4543,');
    });
  });

  describe('formatter med type number og nb-NO', () => {
    it('Når tall er heltall uten desimalskilletegn så skal ikke desimaltegn returnes', () => {
      const formatObj = formatter({
        value: '123',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj.value).toBe('123');
    });

    it('Når tall er tall med fragment/desimal så skal tall med ett desimal returneres', () => {
      const formatObj = formatter({
        value: '123,4',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj.value).toBe('123,4');
    });

    it('Når tall med flere desimaltegn så skal det regnes som ugyldig og inpput returneres uforandret', () => {
      const formatObj = formatter({
        value: '123,4,5',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj.value).toBe('123,4,5');
    });

    it('Når inputtall er locale nb-NO og har ett desimal og style er currency så skal returnert tall ha to desimaler hvor komma er desimalskilletegn', () => {
      const formatObj = formatter({
        value: '2500,5',
        type: 'number',
        locale: 'nb-NO',
        options: {
          style: 'currency',
        },
      });
      expect(formatObj.value).toBe(formatNBS('2 500,50 kr'));
    });

    it('Når tall med punktum og doble mellomrom skal formateres til nb-NO så returneres tall med mellomrom som tusenskilletegn', () => {
      const formatObj = formatter({
        value: '123.  4543,',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj.value).toBe('123.  4543,');
    });

    it('Når tall er negativt så skal tall returneres tall med minustegn', () => {
      const formatObj = formatter({
        value: '-4321',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj.value).toBe(formatNBS('-4 321'));
    });

    it('Når tall er negativt med unicode u2212 som minustegn så skal det returneres med bindestrek brukt som minustegn', () => {
      const formatObj = formatter({
        value: '\u{2212}4321', // samme som HTML kode &#8722;
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj.value).toBe(formatNBS('-4 321'));
    });

    it('Når tall tall inneholder flere minustegn så tolker vi det som ugyldig og returnerer input uforandret', () => {
      const formatObj = formatter({
        value: '--4321',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj.value).toBe(formatNBS('--4321'));

      const formatObj2 = formatter({
        value: '--43-21',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj2.value).toBe(formatNBS('--43-21'));
      const formatObj3 = formatter({
        value: '43-21',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj3.value).toBe(formatNBS('43-21'));
    });

    it('når tall er 234,lkj234llllsdfkj3.34 så skal 234,lkj234llllsdfkj3.34 returneres', () => {
      const formatObj = formatter({
        value: '234,lkj234llllsdfkj3.34',
        type: 'number',
        locale: 'nb-NO',
      });
      expect(formatObj.value).toBe(formatNBS('234,lkj234llllsdfkj3.34'));
    });
  });
});
