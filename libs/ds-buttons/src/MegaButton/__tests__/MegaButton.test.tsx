import { render } from '@testing-library/react';

import { MegaButton } from '../MegaButton';

describe('Button', () => {
  it('skal rendre vellykket', () => {
    const { baseElement } = render(<MegaButton>{'Klikk meg'}</MegaButton>);
    expect(baseElement).toBeTruthy();
  });
});
