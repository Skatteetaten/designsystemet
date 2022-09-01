import { render } from '@testing-library/react';

import DsIcons from '../ds-icons';

describe('DsIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DsIcons />);
    expect(baseElement).toBeTruthy();
  });
});
