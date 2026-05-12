import{j as m}from"./iframe-BQX7p2fO.js";import{C as p}from"./ComboboxSelectedOptions-C80x9hC4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWAuWBOL.js";import"./index-CR6dT-y4.js";import"./index-ZQJoFOIZ.js";import"./index-CsBqoXCA.js";import"./index-DE3ap_ny.js";import"./index-BLTwn-id.js";import"./Combobox.module-DVbz7xnh.js";const{expect:t,fn:i,userEvent:u,within:r}=__STORYBOOK_MODULE_TEST__,w={component:p,title:"Tester/Combobox/SelectedOptions",decorators:[e=>m.jsx(e,{})],argTypes:{multiple:{table:{disable:!0}},selectedValues:{table:{disable:!0}},onRemoveValue:{table:{disable:!0}}},tags:["test"]},d=[{label:"Norge",value:"no"},{label:"Sverige",value:"se"},{label:"Danmark",value:"dk"}],c={multiple:!0,selectedValues:d,onRemoveValue:i()},a={name:"onRemoveValue callback (A11)",args:{...c,onRemoveValue:i()},play:async({args:e,canvasElement:s})=>{const o=r(s).getByRole("button",{name:/Norge/i});await u.click(o),await t(e.onRemoveValue).toHaveBeenCalledTimes(1),await t(e.onRemoveValue).toHaveBeenCalledWith({label:"Norge",value:"no"})}},n={name:"Disabled chips",args:{...c,disabled:!0},parameters:{chromatic:{disableSnapshot:!1}},play:async({canvasElement:e})=>{const l=r(e).getAllByRole("button");for(const o of l)await t(o).toBeDisabled()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'onRemoveValue callback (A11)',
  args: {
    ...defaultProps,
    onRemoveValue: fn()
  },
  play: async ({
    args,
    canvasElement
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
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole('button');
    for (const chip of chips) {
      await expect(chip).toBeDisabled();
    }
  }
} satisfies Story`,...n.parameters?.docs?.source}}};const S=["OnRemoveValueCallback","WithDisabledChips"];export{a as OnRemoveValueCallback,n as WithDisabledChips,S as __namedExportsOrder,w as default};
//# sourceMappingURL=ComboboxSelectedOptions.test.stories-DjIJk1Zw.js.map
