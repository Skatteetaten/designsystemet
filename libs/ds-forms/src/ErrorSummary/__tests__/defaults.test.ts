import { getErrorSummaryTitleAsDefault } from '../defaults';

describe('ErrorSummary defaults', () => {
  it('Når getErrorSummaryTitleAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getErrorSummaryTitleAsDefault()).toBe('h2');
  });
});
