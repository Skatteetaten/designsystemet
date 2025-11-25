import{j as r,f as e,h as n,c as k,l as x,r as p}from"./iframe-Cq9sN_Dz.js";import"./index-DRFs0UrV.js";import{S as c}from"./icon.systems-BAELjml7.js";import{e as E}from"./stories.utils-CZ5hej_8.js";import{g as j,S as t}from"./DatePickerCalendar-DQrt2Pnq.js";const M={component:t,title:"Komponenter/Select",argTypes:{children:{control:!1,table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},defaultValue:{control:"text",table:{category:e.props}},value:{control:"text",table:{category:e.props}},placeholder:{table:{category:e.props,defaultValue:{summary:j()}}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(c),mapping:c,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},hidePlaceholder:{table:{category:e.props}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:x()}}},label:{table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:k()}}},autoComplete:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...n},onChange:{...n},onFocus:{...n},onHelpToggle:{control:!1,table:{category:e.event}}},args:{label:"Farge",children:[r.jsx(t.Option,{value:1,children:"Blå"},"option1"),r.jsx(t.Option,{value:2,children:"Gul"},"option2"),r.jsx(t.Option,{value:3,children:"Grønn"},"option3"),r.jsx(t.Option,{value:4,children:"Rød"},"option4")]}},l={},o={render:F=>{const[S,v]=p.useState(0),[y,s]=p.useState(""),f=a=>{i(a),v(Number(a.target.value))},O=a=>{i(a)},i=a=>{s(""),a.target.validity.valueMissing&&s("Fruktsort er påkrevd.")};return r.jsxs(t,{label:"Fruktsort",value:S,helpText:"Velg frukten du liker best.",errorMessage:y,required:!0,onBlur:O,onChange:f,children:[r.jsx(t.Option,{value:1,children:"Banan"}),r.jsx(t.Option,{value:2,children:"Eple"}),r.jsx(t.Option,{value:3,children:"Kiwi"}),r.jsx(t.Option,{value:4,children:"Pære"}),r.jsx(t.Option,{value:5,children:"Sitron"})]})}};o.parameters=E;var u,g,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:"{} satisfies Story",...(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,h,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const C=["Preview","Examples"],H=Object.freeze(Object.defineProperty({__proto__:null,Examples:o,Preview:l,__namedExportsOrder:C,default:M},Symbol.toStringTag,{value:"Module"}));export{o as E,H as S};
//# sourceMappingURL=Select.stories-Dmghvp7B.js.map
