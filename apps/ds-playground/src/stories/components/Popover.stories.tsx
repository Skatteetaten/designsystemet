import { useRef, useState } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { InfoOutlineSVGpath } from '@skatteetaten/ds-icons';
import { Popover } from '@skatteetaten/ds-overlays';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { getVersion } from '../utils/version.utils';

export default {
  component: Popover,
  title: 'Komponenter/Popover',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  parameters: {
    version: getVersion('ds-typography'),
  },
} satisfies Meta<typeof Popover>;

export const Preview: StoryObj<typeof Popover> = {
  args: {
    children: loremIpsum,
  },
};

export const Example: StoryFn<typeof Popover> = (_args) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);
  return (
    <>
      <IconButton
        ref={buttonRef}
        ariaExpanded={openState}
        svgPath={InfoOutlineSVGpath}
        title={'Open popover'}
        onClick={(): void => setOpenState(!openState)}
      />
      <Popover
        open={openState}
        arrowPosition={'topLeft'}
        anchorEl={buttonRef.current}
        onClose={(): void => setOpenState(false)}
      >
        {loremIpsum}
      </Popover>
    </>
  );
};

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
