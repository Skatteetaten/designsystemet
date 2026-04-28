import{j as r,c as e,h as l,b,i as S,r as p}from"./iframe-B8GUhlLl.js";import"./index-C8bgUDlY.js";import{S as c}from"./icon.systems-B1LFOHPk.js";import{e as v}from"./stories.utils-BCId827v.js";import{g as y,S as t}from"./DatePickerCalendar-PLUA6iCa.js";const f={component:t,title:"Komponenter/Select",argTypes:{children:{control:!1,table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},defaultValue:{control:"text",table:{category:e.props}},value:{control:"text",table:{category:e.props}},placeholder:{table:{category:e.props,defaultValue:{summary:y()}}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(c),mapping:c,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},hidePlaceholder:{table:{category:e.props}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:S()}}},label:{table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:b()}}},autoComplete:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{table:{category:e.htmlAttribute}},ariaDescribedBy:{table:{category:e.aria}},onBlur:{...l},onChange:{...l},onFocus:{...l},onHelpToggle:{control:!1,table:{category:e.event}}},args:{label:"Farge",children:[r.jsx(t.Option,{value:1,children:"Blå"},"option1"),r.jsx(t.Option,{value:2,children:"Gul"},"option2"),r.jsx(t.Option,{value:3,children:"Grønn"},"option3"),r.jsx(t.Option,{value:4,children:"Rød"},"option4")]}},n={},o={render:k=>{const[u,g]=p.useState(""),[d,s]=p.useState(""),m=a=>{i(a),g(a.target.value)},h=a=>{i(a)},i=a=>{s(""),a.target.validity.valueMissing&&s("Fruktsort er påkrevd.")};return r.jsxs(t,{label:"Fruktsort",value:u,helpText:"Velg frukten du liker best.",errorMessage:d,required:!0,onBlur:h,onChange:m,children:[r.jsx(t.Option,{value:"banan",children:"Banan"}),r.jsx(t.Option,{value:"eple",children:"Eple"}),r.jsx(t.Option,{value:"kiwi",children:"Kiwi"}),r.jsx(t.Option,{value:"pære",children:"Pære"}),r.jsx(t.Option,{value:"sitron",children:"Sitron"})]})}};o.parameters=v;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{} satisfies Story",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [fruitOption, setFruitOption] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      onError(e);
      setFruitOption(e.target.value);
    };
    const handleBlur = (e: ChangeEvent<HTMLSelectElement>): void => {
      onError(e);
    };
    const onError = (e: ChangeEvent<HTMLSelectElement>): void => {
      setErrorMessage('');
      if (e.target.validity.valueMissing) {
        setErrorMessage('Fruktsort er påkrevd.');
      }
    };
    type Fruit = '' | 'banan' | 'eple' | 'kiwi' | 'pære' | 'sitron';
    return <Select label={'Fruktsort'} value={fruitOption} helpText={'Velg frukten du liker best.'} errorMessage={errorMessage} required onBlur={handleBlur} onChange={handleChange}>
        <Select.Option<Fruit> value={'banan'}>{'Banan'}</Select.Option>
        <Select.Option<Fruit> value={'eple'}>{'Eple'}</Select.Option>
        <Select.Option<Fruit> value={'kiwi'}>{'Kiwi'}</Select.Option>
        <Select.Option<Fruit> value={'pære'}>{'Pære'}</Select.Option>
        <Select.Option<Fruit> value={'sitron'}>{'Sitron'}</Select.Option>
      </Select>;
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const O=["Preview","Examples"],w=Object.freeze(Object.defineProperty({__proto__:null,Examples:o,Preview:n,__namedExportsOrder:O,default:f},Symbol.toStringTag,{value:"Module"}));export{o as E,w as S};
//# sourceMappingURL=Select.stories-BDuy3zSz.js.map
