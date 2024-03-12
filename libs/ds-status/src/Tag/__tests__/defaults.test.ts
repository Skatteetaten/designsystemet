import { getTagColorDefault, getTagSizeDefault } from '../defaults';

describe('Tag defaults', () => {
  it('Når getTagColorDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getTagColorDefault();
    expect(renderDefault).toBe('ochre');
  });

  it('Når getTagSizeDefault kalles, så returnerer den riktig verdi', () => {
    const renderDefault = getTagSizeDefault();
    expect(renderDefault).toBe('medium');
  });
});
