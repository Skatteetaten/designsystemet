import{j as m}from"./iframe-VHQh6taY.js";import{C as p}from"./ComboboxSelectedOptions-BxHsyaCT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgU9os4N.js";import"./index-Di_7ammq.js";import"./index-C8wxqHpZ.js";import"./index-DALzD4Pw.js";import"./index-CEjXTNb1.js";import"./index-Don9wpRQ.js";import"./Combobox.module-CSHfGvVK.js";const{expect:o,fn:i,userEvent:u,within:r}=__STORYBOOK_MODULE_TEST__,E={component:p,title:"Tester/Combobox/SelectedOptions",decorators:[e=>m.jsx(e,{})],argTypes:{multiple:{table:{disable:!0}},selectedValues:{table:{disable:!0}},onRemoveValue:{table:{disable:!0}}},tags:["test"]},d=[{label:"Norge",value:"no"},{label:"Sverige",value:"se"},{label:"Danmark",value:"dk"}],c={multiple:!0,selectedValues:d,onRemoveValue:i()},a={name:"onRemoveValue callback (A11)",args:{...c,onRemoveValue:i()},play:async({args:e,canvasElement:s})=>{const t=r(s).getByRole("button",{name:/Norge/i});await u.click(t),await o(e.onRemoveValue).toHaveBeenCalledTimes(1),await o(e.onRemoveValue).toHaveBeenCalledWith({label:"Norge",value:"no"})}},n={name:"Disabled chips",args:{...c,disabled:!0},parameters:{chromatic:{disableSnapshot:!1}},play:async({canvasElement:e})=>{const l=r(e).getAllByRole("button");for(const t of l)await o(t).toBeDisabled()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'onRemoveValue callback (A11)',
  args: {
    ...defaultProps,
    onRemoveValue: fn()
  },
  play: async ({
    args,
    canvasElement
  }: {
    args: ComboboxSelectedOptionsProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should call onRemoveValue with correct option when chip button is clicked
    const norgeChipButton = canvas.getByRole('button', {
      name: /Norge/i
    });
    await userEvent.click(norgeChipButton);
    await expect(args.onRemoveValue).toHaveBeenCalledTimes(1);
    await expect(args.onRemoveValue).toHaveBeenCalledWith({
      label: 'Norge',
      value: 'no'
    });
  }
} satisfies Story`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Disabled chips',
  args: {
    ...defaultProps,
    disabled: true
  },
  parameters: {
    chromatic: {
      disableSnapshot: false
    }
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole('button');
    for (const chip of chips) {
      await expect(chip).toBeDisabled();
    }
  }
} satisfies Story`,...n.parameters?.docs?.source}}};const w=["OnRemoveValueCallback","WithDisabledChips"];export{a as OnRemoveValueCallback,n as WithDisabledChips,w as __namedExportsOrder,E as default};
//# sourceMappingURL=ComboboxSelectedOptions.test.stories-BCqmj7U_.js.map
