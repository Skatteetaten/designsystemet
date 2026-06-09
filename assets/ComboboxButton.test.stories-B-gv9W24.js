import{j as r}from"./iframe-DyzX2HZk.js";import{C as i}from"./ComboboxButton-Vs88nVYr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cocas2j2.js";import"./Combobox.module-CNeM_wTV.js";const{expect:n,fn:s}=__STORYBOOK_MODULE_TEST__,v={component:i,title:"Tester/Combobox/Button",decorators:[t=>r.jsx(t,{})],argTypes:{isOpen:{table:{disable:!0}},disabled:{table:{disable:!0}},variant:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"]},l={isOpen:!1,onClick:s()},e={name:"Disabled state handling",args:{...l,disabled:!0,onClick:s()},play:async({args:t,canvasElement:o})=>{const a=o.querySelector('div[class*="chevronButton"]');await n(a).toHaveStyle("pointer-events: none"),a&&a.dispatchEvent(new Event("click",{bubbles:!0})),await n(t.onClick).not.toHaveBeenCalled()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Disabled state handling',
  args: {
    ...defaultArgs,
    disabled: true,
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
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
} satisfies Story`,...e.parameters?.docs?.source}}};const u=["DisabledStateHandling"];export{e as DisabledStateHandling,u as __namedExportsOrder,v as default};
//# sourceMappingURL=ComboboxButton.test.stories-B-gv9W24.js.map
