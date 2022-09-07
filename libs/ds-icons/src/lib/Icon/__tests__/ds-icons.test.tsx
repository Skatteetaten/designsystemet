import { render } from '@testing-library/react';

import Icon from '..';

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Icon
        icon={
          <path
            fill={'inherit'}
            d={
              'M269.544,231.144V32.061c0-7.483-6.061-13.544-13.544-13.544s-13.544,6.061-13.544,13.544v199.083H43.373c-7.483,0-13.544,6.061-13.544,13.544s6.061,13.544,13.544,13.544h199.083v199.083c0,7.483,6.061,13.544,13.544,13.544c3.741,0,7.121-1.509,9.578-3.966s3.966-5.837,3.966-9.578V258.232h199.083c3.741,0,7.121-1.509,9.578-3.966c2.457-2.457,3.966-5.837,3.966-9.578c0-7.483-6.061-13.544-13.544-13.544L269.544,231.144L269.544,231.144z'
            }
          />
        }
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
