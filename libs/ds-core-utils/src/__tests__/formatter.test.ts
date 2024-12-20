import { formatter, NON_BREAKING_SPACE } from '../formatter/formatter';

/* export const formatter = ({
  value,
  type,
  lang,
  isCurrency,
  allowDesimalAtEnd,
}: FormatterProps) */

const formatNBS = (value: string): string => {
  return value.replaceAll(' ', NON_BREAKING_SPACE);
};

describe('Formatter', () => {
  it('Når format skal bli for organisasjonsnummer', () => {
    const formatObj = formatter({
      value: '123456789',
      type: 'organisasjonsnummer',
    });
    expect(formatObj.value).toBe(formatNBS('123 456 789'));
  });
  it('Når format skal være personnummer', () => {
    const formatObj = formatter({
      value: '12345612345',
      type: 'personnummer',
    });
    expect(formatObj.value).toBe(formatNBS('123456 12345'));
  });
  it('Når format skal være kontonummer', () => {
    const formatObj = formatter({
      value: '12341212345',
      type: 'kontonummer',
    });
    expect(formatObj.value).toBe(formatNBS('1234 12 12345'));
  });
  it('Når tall er heltall uten desimalskilletegn så skal ikke desimaltegn returnes', () => {
    const formatObj = formatter({
      value: '123',
      type: 'number',
      lang: 'nb-NO',
    });
    expect(formatObj.value).toBe('123');
  });
  it('Når tall er tall med fragment/desimal så skal tall med ett desimal returneres', () => {
    const formatObj = formatter({
      value: '123,4',
      type: 'number',
      lang: 'nb-NO',
    });
    expect(formatObj.value).toBe('123,4');
  });
  it('Når tall inneholder ugyldige tegn så skal ugyldig tegn forkastes og bare siffer returneres', () => {
    const formatObj = formatter({
      value: '12X34',
      type: 'number',
      lang: 'nb-NO',
    });
    expect(formatObj.value).toBe('12');
  });
  it('Når inputtall er locale nb-NO og har ett desimal og isCurrency er true så skal returnert tall ha to desimaler hvor komma er desimalskilletegn', () => {
    const formatObj = formatter({
      value: '2500,5',
      type: 'number',
      lang: 'nb-NO',
      isCurrency: true,
    });
    expect(formatObj.value).toBe(formatNBS('2 500,50'));
  });
  it('Når inputtall er locale en-GB og har ett desimal og isCurrency er true så skal returnert tall ha to desimaler hvor punktum er desimalskilletegn', () => {
    const formatObj = formatter({
      value: '2500.5',
      type: 'number',
      lang: 'en-GB',
      isCurrency: true,
    });
    expect(formatObj.value).toBe('2,500.50');
  });
  it('Når tall er ufullstendig utfylt og det skal være tillatt å ha desimaltegn til slutt så returneres også desimaltegn', () => {
    const formatObj = formatter({
      value: '2500,',
      type: 'number',
      allowDesimalAtEnd: true,
    });
    expect(formatObj.value).toBe(formatNBS('2 500,'));
  });
  it('Når tall med punktum og doble mellomrom skal formateres til nb-NO så returneres tall med mellomrom som tusenskilletegn', () => {
    const formatObj = formatter({
      value: '123.  4543,',
      type: 'number',
      lang: 'nb-NO',
    });
    expect(formatObj.value).toBe(formatNBS('1 234 543'));
  });
  it('Når tall er negativt så skal tall returneres tall med minustegn', () => {
    const formatObj = formatter({
      value: '-4321',
      type: 'number',
      lang: 'nb-NO',
    });
    expect(formatObj.value).toBe(formatNBS('-4 321'));
  });
  it('Når tall er negativt med unicode u2212 som minustegn så skal det returneres bindestrek være brukt som minustegn', () => {
    const formatObj = formatter({
      value: '\u{2212}4321', // samme som HTML kode &#8722;
      type: 'number',
      lang: 'nb-NO',
    });
    expect(formatObj.value).toBe(formatNBS('-4 321'));
  });
});
