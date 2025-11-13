import{j as m,r as v}from"./iframe-CdXtTKZQ.js";import{d as p,e as h}from"./index-CLKUz3Po.js";import{d as g}from"./combobox.test.utils-DQnx9EeR.js";const S={component:p,title:"Tester/Combobox/PseudoStates",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},label:{table:{disable:!0}},options:{table:{disable:!0}},placeholder:{table:{disable:!0}},variant:{table:{disable:!0}},multiple:{table:{disable:!0}},value:{table:{disable:!0}},description:{table:{disable:!0}},errorMessage:{table:{disable:!0}},helpText:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},hideLabel:{table:{disable:!0}},minSearchLength:{table:{disable:!0}},isLoading:{table:{disable:!0}},spinnerLabel:{table:{disable:!0}},helpSvgPath:{table:{disable:!0}},maxSelected:{table:{disable:!0}},spinnerProps:{table:{disable:!0}},titleHelpSvg:{table:{disable:!0}},accessKey:{table:{disable:!0}},form:{table:{disable:!0}},name:{table:{disable:!0}},disabled:{table:{disable:!0}},required:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}},onInputChange:{table:{disable:!0}},onHelpToggle:{table:{disable:!0}}},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},e={name:"Chevron",args:{...g},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},a={name:"Cancel button",render:s=>m.jsx(p,{...s,value:"Norge"}),args:{...g},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},t={render:()=>{const s=v.useRef(null);return m.jsx(h,{className:"positionRelative",displayOptions:[{label:"Norge",value:"Norge"},{label:"Sverige",value:"Sverige"},{label:"Danmark",value:"Danmark"}],searchTerm:"",minSearchLength:0,selectedValues:[],comboboxId:"",listId:"",focusedIndex:0,handleButtonFocus:()=>console.log("Handle button focus"),handleOptionSelect:()=>console.log("Handle option select"),customListRef:s,multiple:!0,isOpen:!0})},parameters:{a11y:{test:"off"},imageSnapshot:{pseudoStates:["hover","focus-visible"]}}};var l,o,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Chevron',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,i,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var b,d,c;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const f=["Chevron","CancelButton","Option"],L=Object.freeze(Object.defineProperty({__proto__:null,CancelButton:a,Chevron:e,Option:t,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{L as C};
//# sourceMappingURL=Combobox.pseudoStates.test.stories-C0edUy17.js.map
