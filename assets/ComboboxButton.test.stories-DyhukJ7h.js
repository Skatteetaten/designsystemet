import{j as c,d as u}from"./iframe-Br1Xu9zr.js";import{C as d}from"./ComboboxButton-BxlP8MsT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Xbc0duXx.js";import"./Combobox.module-CSHfGvVK.js";const{expect:o,fn:r,userEvent:m,waitFor:b,within:p}=__STORYBOOK_MODULE_TEST__,f={component:d,title:"Tester/Combobox/Button",decorators:[e=>c.jsx(e,{})],argTypes:{isOpen:{table:{disable:!0}},hasValue:{table:{disable:!0}},multiple:{table:{disable:!0}},disabled:{table:{disable:!0}},variant:{table:{disable:!0}},onClear:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"]},l={isOpen:!1,onClick:r()},a={name:"Clear button click handler (A9, B2)",args:{...l,multiple:!1,hasValue:!0,onClear:r()},play:async({args:e,canvasElement:s})=>{const i=p(s).getByRole("button",{name:u.t("ds_forms:combobox.ResetSuggestion")});await m.click(i),await b(()=>o(e.onClear).toHaveBeenCalled())}},n={name:"Disabled state handling",args:{...l,disabled:!0,onClick:r()},play:async({args:e,canvasElement:s})=>{const t=s.querySelector('div[class*="chevronButton"]');await o(t).toHaveStyle("pointer-events: none"),t&&t.dispatchEvent(new Event("click",{bubbles:!0})),await o(e.onClick).not.toHaveBeenCalled()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...n.parameters?.docs?.source}}};const h=["ClearButtonClick","DisabledStateHandling"];export{a as ClearButtonClick,n as DisabledStateHandling,h as __namedExportsOrder,f as default};
//# sourceMappingURL=ComboboxButton.test.stories-DyhukJ7h.js.map
