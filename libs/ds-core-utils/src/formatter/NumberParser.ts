export class NumberParser {
  _group: RegExp;
  _decimal: RegExp;
  _numeral: RegExp;
  _minusSign: RegExp;
  _index: (d: string) => string;

  constructor(locale: string) {
    const parts = new Intl.NumberFormat(locale).formatToParts(-12345.6);
    const numerals = [
      ...new Intl.NumberFormat(locale, { useGrouping: false }).format(
        9876543210
      ),
    ].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._group = new RegExp(
      `[${parts.find((d) => d.type === 'group')?.value}]`,
      'g'
    );
    this._decimal = new RegExp(
      `[${parts.find((d) => d.type === 'decimal')?.value}]`
    );
    this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
    this._minusSign = new RegExp(
      `[${parts.find((d) => d.type === 'minusSign')?.value}]`,
      'g'
    );
    this._index = (d): string => index.get(d)?.toString() ?? d;
  }
  parse(input: string): number {
    const result = input
      .trim()
      .replace(this._group, '')
      .replace(this._decimal, '.')
      .replace(this._minusSign, '-')
      .replace(this._numeral, this._index);

    return result ? Number(result) : NaN;
  }
}
