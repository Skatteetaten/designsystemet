import { render } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
  it('Skal tegnes opp uten feil', () => {
    const { baseElement } = render(<Button>{'Klikk meg'}</Button>);
    expect(baseElement).toBeTruthy();
  });
});
