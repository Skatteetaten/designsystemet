import{j as r,e,h as n,c as b,k as S,r as p}from"./iframe-VHQh6taY.js";import"./index-lB78RBB2.js";import{S as c}from"./icon.systems-pjRjKMCZ.js";import{e as v}from"./stories.utils-BTGWRhRm.js";import{g as y,S as t}from"./DatePickerCalendar-fvOeZNLZ.js";const f={component:t,title:"Komponenter/Select",argTypes:{children:{control:!1,table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},defaultValue:{control:"text",table:{category:e.props}},value:{control:"text",table:{category:e.props}},placeholder:{table:{category:e.props,defaultValue:{summary:y()}}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(c),mapping:c,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},hidePlaceholder:{table:{category:e.props}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:S()}}},label:{table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:b()}}},autoComplete:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...n},onChange:{...n},onFocus:{...n},onHelpToggle:{control:!1,table:{category:e.event}}},args:{label:"Farge",children:[r.jsx(t.Option,{value:1,children:"Blå"},"option1"),r.jsx(t.Option,{value:2,children:"Gul"},"option2"),r.jsx(t.Option,{value:3,children:"Grønn"},"option3"),r.jsx(t.Option,{value:4,children:"Rød"},"option4")]}},l={},o={render:k=>{const[u,g]=p.useState(0),[m,s]=p.useState(""),d=a=>{i(a),g(Number(a.target.value))},h=a=>{i(a)},i=a=>{s(""),a.target.validity.valueMissing&&s("Fruktsort er påkrevd.")};return r.jsxs(t,{label:"Fruktsort",value:u,helpText:"Velg frukten du liker best.",errorMessage:m,required:!0,onBlur:h,onChange:d,children:[r.jsx(t.Option,{value:1,children:"Banan"}),r.jsx(t.Option,{value:2,children:"Eple"}),r.jsx(t.Option,{value:3,children:"Kiwi"}),r.jsx(t.Option,{value:4,children:"Pære"}),r.jsx(t.Option,{value:5,children:"Sitron"})]})}};o.parameters=v;l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{} satisfies Story",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [fruktOption, setFruktOption] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      onError(e);
      setFruktOption(Number(e.target.value));
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
    return <Select label={'Fruktsort'} value={fruktOption} helpText={'Velg frukten du liker best.'} errorMessage={errorMessage} required onBlur={handleBlur} onChange={handleChange}>
        <Select.Option value={1}>{'Banan'}</Select.Option>
        <Select.Option value={2}>{'Eple'}</Select.Option>
        <Select.Option value={3}>{'Kiwi'}</Select.Option>
        <Select.Option value={4}>{'Pære'}</Select.Option>
        <Select.Option value={5}>{'Sitron'}</Select.Option>
      </Select>;
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const O=["Preview","Examples"],F=Object.freeze(Object.defineProperty({__proto__:null,Examples:o,Preview:l,__namedExportsOrder:O,default:f},Symbol.toStringTag,{value:"Module"}));export{o as E,F as S};
//# sourceMappingURL=Select.stories-BQvKRjNH.js.map
