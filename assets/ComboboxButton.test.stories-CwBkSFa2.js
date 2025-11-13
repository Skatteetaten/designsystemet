import{j as p,d as g}from"./iframe-CdXtTKZQ.js";import{C}from"./ComboboxButton-xo5xtxE5.js";import"./index-D0xxaDHU.js";import"./Combobox.module-DGtBY5ID.js";const{expect:o,fn:r,userEvent:k,waitFor:B,within:f}=__STORYBOOK_MODULE_TEST__,w={component:C,title:"Tester/Combobox/Button",decorators:[e=>p.jsx(e,{})],argTypes:{isOpen:{table:{disable:!0}},hasValue:{table:{disable:!0}},multiple:{table:{disable:!0}},disabled:{table:{disable:!0}},variant:{table:{disable:!0}},onClear:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"]},b={isOpen:!1,onClick:r()},a={name:"Clear button click handler (A9, B2)",args:{...b,multiple:!1,hasValue:!0,onClear:r()},play:async({args:e,canvasElement:s})=>{const v=f(s).getByRole("button",{name:g.t("ds_forms:combobox.ResetSuggestion")});await k.click(v),await B(()=>o(e.onClear).toHaveBeenCalled())}},n={name:"Disabled state handling",args:{...b,disabled:!0,onClick:r()},play:async({args:e,canvasElement:s})=>{const t=s.querySelector('div[class*="chevronButton"]');await o(t).toHaveStyle("pointer-events: none"),t&&t.dispatchEvent(new Event("click",{bubbles:!0})),await o(e.onClick).not.toHaveBeenCalled()}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Clear button click handler (A9, B2)',
  args: {
    ...defaultArgs,
    multiple: false,
    hasValue: true,
    onClear: fn()
  },
  play: async ({
    args,
    canvasElement
  }: {
    args: ComboboxButtonProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const clearButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:combobox.ResetSuggestion')
    });
    await userEvent.click(clearButton);
    await waitFor(() => expect(args.onClear).toHaveBeenCalled());
  }
} satisfies Story`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Disabled state handling',
  args: {
    ...defaultArgs,
    disabled: true,
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }: {
    args: ComboboxButtonProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const chevron = canvasElement.querySelector('div[class*="chevronButton"]');
    await expect(chevron).toHaveStyle('pointer-events: none');

    // Prøv å trigge click event direkte (simulerer en programmatisk klikk)
    if (chevron) {
      chevron.dispatchEvent(new Event('click', {
        bubbles: true
      }));
    }
    await expect(args.onClick).not.toHaveBeenCalled();
  }
} satisfies Story`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["ClearButtonClick","DisabledStateHandling"];export{a as ClearButtonClick,n as DisabledStateHandling,S as __namedExportsOrder,w as default};
//# sourceMappingURL=ComboboxButton.test.stories-CwBkSFa2.js.map
