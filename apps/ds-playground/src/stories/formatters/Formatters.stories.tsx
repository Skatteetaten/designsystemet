import { useState } from 'react';

import { formatter } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Utilities/Formatters',
};

const defaultArgs = {
  className: { table: { disable: true } },
  'data-testid': { table: { disable: true } },
  id: { table: { disable: true } },
  key: { table: { disable: true } },
  lang: { table: { disable: true } },
  ref: { table: { disable: true } },
};

export const Formatters: StoryObj = {
  argTypes: defaultArgs,
  render: () => {
    const [value, setValue] = useState('');
    return (
      <>
        <TextField
          label={'Input '}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          {'formatert:'} {formatter({ inputnumber: value }).value}
        </div>
        <div>
          {'input som skal formateres: '}{' '}
          {formatter({ inputnumber: value }).parsed}
        </div>
      </>
    );
  },
};
