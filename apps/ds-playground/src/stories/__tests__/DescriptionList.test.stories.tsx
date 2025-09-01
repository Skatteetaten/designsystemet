import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { DescriptionList } from '@skatteetaten/ds-content';

const meta = {
  component: DescriptionList,
  title: 'Tester/DescriptionList/DescriptionList',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    isVerticalOnMobile: { table: { disable: true } },
    descriptionDirection: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    size: { table: { disable: true } },
  },
  args: {
    children: [
      <DescriptionList.Element key={'k1'} term={'Saksbehandler'}>
        {'Kenneth Performance'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k2'} term={'Status'}>
        {'Under behandling'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k3'} term={'Sist endret'}>
        {'30.12.2013'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k4'} term={'Frist'}>
        {'30.12.2013'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k5'} term={'Farge'}>
        {'Smaragdgrønn'}
      </DescriptionList.Element>,
      <DescriptionList.Element key={'k6'} term={'Først endret'}>
        {'30.12.2010'}
      </DescriptionList.Element>,
    ],
  },
  tags: ['test'],
} satisfies Meta<typeof DescriptionList>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    'data-testid': '123ID',
    ref: (instance: HTMLDListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disable: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disable: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const descriptionNode = canvas.getByText('Kenneth Performance');
    const termNode = canvas.getByText('Saksbehandler');
    await expect(descriptionNode).toBeInTheDocument();
    await expect(descriptionNode.tagName).toBe('DD');
    await expect(termNode.tagName).toBe('DT');
  },
} satisfies Story;

export const WithSpacing = {
  name: 'With Spacing (A4)',
  args: {
    ...defaultArgs,
    hasSpacing: true,
  },
  argTypes: {
    hasSpacing: {
      table: { disable: false },
      control: { disable: false },
    },
  },
} satisfies Story;

export const WithSizeSmallAndBold = {
  name: 'With Size And FontWeight (A2)',
  args: {
    ...defaultArgs,
    size: 'small',
    termWeight: 'regular',
    descriptionWeight: 'bold',
  },
  argTypes: {
    size: {
      table: { disable: false },
      control: { disable: true },
    },
  },
} satisfies Story;

const VerticalTemplate: StoryFn<typeof DescriptionList> = (args) => (
  <>
    <DescriptionList {...args} hasSpacing />
    <DescriptionList {...args} descriptionDirection={'vertical'} />
  </>
);

export const WithVariantVertial = {
  name: 'With Variant Vertical (A1, A2)',
  render: VerticalTemplate,
  args: {
    ...defaultArgs,
    variant: 'vertical',
  },
  argTypes: {
    variant: {
      table: { disable: false },
      control: { disable: true },
    },
  },
} satisfies Story;

const HorizontalTemplate: StoryFn<typeof DescriptionList> = (args) => (
  <>
    <DescriptionList {...args} hasSpacing />
    <DescriptionList {...args} descriptionDirection={'vertical'} />
  </>
);

export const WithVariantHorizontal = {
  name: 'With Variant Horizontal (A1, A2, A7)',
  render: HorizontalTemplate,
  args: {
    ...defaultArgs,
    variant: 'horizontal',
  },
  argTypes: {
    variant: {
      table: { disable: false },
      control: { disable: true },
    },
  },
} satisfies Story;

export const WithIsVerticalOnMobile = {
  name: 'With IsVerticalOnMobile (A8)',
  args: {
    ...defaultArgs,
    variant: 'horizontal',
    isVerticalOnMobile: true,
  },
  argTypes: {
    variant: {
      table: { disable: false },
      control: { disable: true },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
    },
  },
} satisfies Story;
