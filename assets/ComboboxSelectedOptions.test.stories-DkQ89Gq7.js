import{j as h}from"./iframe-Cq9sN_Dz.js";import{C as g}from"./ComboboxSelectedOptions-CLxGYH0S.js";import"./index-DEEEsonz.js";import"./index-B4tfeJ0Q.js";import"./index-5qJDb17Q.js";import"./index-CGzeyL7S.js";import"./index-9jg8RjbV.js";import"./index-DskRqDMQ.js";import"./Combobox.module-DGtBY5ID.js";const{expect:o,fn:d,userEvent:R,within:v}=__STORYBOOK_MODULE_TEST__,k={component:g,title:"Tester/Combobox/SelectedOptions",decorators:[e=>h.jsx(e,{})],argTypes:{multiple:{table:{disable:!0}},selectedValues:{table:{disable:!0}},onRemoveValue:{table:{disable:!0}}},tags:["test"]},f=[{label:"Norge",value:"no"},{label:"Sverige",value:"se"},{label:"Danmark",value:"dk"}],b={multiple:!0,selectedValues:f,onRemoveValue:d()},a={name:"onRemoveValue callback (A11)",args:{...b,onRemoveValue:d()},play:async({args:e,canvasElement:s})=>{const t=v(s).getByRole("button",{name:/Norge/i});await R.click(t),await o(e.onRemoveValue).toHaveBeenCalledTimes(1),await o(e.onRemoveValue).toHaveBeenCalledWith({label:"Norge",value:"no"})}},n={name:"Disabled chips",args:{...b,disabled:!0},parameters:{chromatic:{disableSnapshot:!1}},play:async({canvasElement:e})=>{const l=v(e).getAllByRole("button");for(const t of l)await o(t).toBeDisabled()}};var c,i,r;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const T=["OnRemoveValueCallback","WithDisabledChips"];export{a as OnRemoveValueCallback,n as WithDisabledChips,T as __namedExportsOrder,k as default};
//# sourceMappingURL=ComboboxSelectedOptions.test.stories-DkQ89Gq7.js.map
