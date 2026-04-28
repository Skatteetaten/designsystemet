import{j as c,r as d}from"./iframe-LV2IHoVd.js";import{c as u,n as p}from"./index-V6snDp7t.js";import{d as l}from"./combobox.test.utils-LePcipcf.js";const{userEvent:n,within:m}=__STORYBOOK_MODULE_TEST__,g={component:u,title:"Tester/Combobox/PseudoStates",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},helpSvgPath:{table:{disable:!0}},maxSelected:{table:{disable:!0}},spinnerProps:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},accessKey:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},ariaDescribedBy:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},t={name:"Chevron",args:{...l},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},a={name:"Cancel button",render:e=>c.jsx(u,{...e,value:"Norge"}),args:{...l},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},s={render:()=>{const e=d.useRef(null);return c.jsx(p,{className:"positionRelative",displayOptions:[{label:"Norge",value:"Norge"},{label:"Sverige",value:"Sverige"},{label:"Danmark",value:"Danmark"}],searchTerm:"",minSearchLength:0,selectedValues:[],comboboxId:"combo",listId:"list",focusedIndex:0,handleButtonFocus:()=>console.log("Handle button focus"),handleOptionSelect:()=>console.log("Handle option select"),customListRef:e,multiple:!0,isOpen:!0})},parameters:{a11y:{test:"off"},imageSnapshot:{pseudoStates:["hover","focus-visible"]}}},o={name:"With Selected Option",args:{...l},play:async({canvasElement:e})=>{const r=m(e),i=r.getByRole("combobox");await n.click(i);const b=r.getAllByRole("option");await n.click(b[1]),await n.click(i)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Chevron',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Cancel button',
  render: (args): JSX.Element => <Combobox {...args} value={'Norge'} />,
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (): JSX.Element => {
    const customListRef = useRef<HTMLDivElement | null>(null);
    return <ComboboxOptions className={'positionRelative'} displayOptions={[{
      label: 'Norge',
      value: 'Norge'
    }, {
      label: 'Sverige',
      value: 'Sverige'
    }, {
      label: 'Danmark',
      value: 'Danmark'
    }]} searchTerm={''} minSearchLength={0} selectedValues={[]} comboboxId={'combo'} listId={'list'} focusedIndex={0} handleButtonFocus={(): void => console.log('Handle button focus')} handleOptionSelect={(): void => console.log('Handle option select')} customListRef={customListRef} multiple isOpen />;
  },
  parameters: {
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Selected Option',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await userEvent.click(inputElement);
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const v=["Chevron","CancelButton","Option","WithSelectedOption"],x=Object.freeze(Object.defineProperty({__proto__:null,CancelButton:a,Chevron:t,Option:s,WithSelectedOption:o,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{x as C};
//# sourceMappingURL=Combobox.pseudoStates.test.stories-BHagLxzX.js.map
