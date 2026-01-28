import{j as l,r as n}from"./iframe-CBOQuZmX.js";import{d as o,e as i}from"./index-D76sDZza.js";import{d as r}from"./combobox.test.utils-BXM2lJVw.js";const u={component:o,title:"Tester/Combobox/PseudoStates",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},helpSvgPath:{table:{disable:!0}},maxSelected:{table:{disable:!0}},spinnerProps:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},accessKey:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},e={name:"Chevron",args:{...r},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},a={name:"Cancel button",render:s=>l.jsx(o,{...s,value:"Norge"}),args:{...r},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},t={render:()=>{const s=n.useRef(null);return l.jsx(i,{className:"positionRelative",displayOptions:[{label:"Norge",value:"Norge"},{label:"Sverige",value:"Sverige"},{label:"Danmark",value:"Danmark"}],searchTerm:"",minSearchLength:0,selectedValues:[],comboboxId:"",listId:"",focusedIndex:0,handleButtonFocus:()=>console.log("Handle button focus"),handleOptionSelect:()=>console.log("Handle option select"),customListRef:s,multiple:!0,isOpen:!0})},parameters:{a11y:{test:"off"},imageSnapshot:{pseudoStates:["hover","focus-visible"]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Chevron',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    }]} searchTerm={''} minSearchLength={0} selectedValues={[]} comboboxId={''} listId={''} focusedIndex={0} handleButtonFocus={(): void => console.log('Handle button focus')} handleOptionSelect={(): void => console.log('Handle option select')} customListRef={customListRef} multiple isOpen />;
  },
  parameters: {
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible']
    }
  }
}`,...t.parameters?.docs?.source}}};const b=["Chevron","CancelButton","Option"],p=Object.freeze(Object.defineProperty({__proto__:null,CancelButton:a,Chevron:e,Option:t,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{p as C};
//# sourceMappingURL=Combobox.pseudoStates.test.stories-DusbGVKU.js.map
