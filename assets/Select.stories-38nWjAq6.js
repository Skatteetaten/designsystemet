import{j as r}from"./jsx-runtime-BYYWji4R.js";import{r as p}from"./index-ClcD9ViR.js";import{d as c,c as x}from"./index-BYKicpQW.js";import"./index-DEJUArlV.js";import{c as e,h as n}from"./helpers-Q4uYuiE4.js";import{S as u}from"./icon.systems-D4eM4wId.js";import{e as k}from"./stories.utils-BbHpJfAb.js";import{f as M}from"./base-props.types-sXyoNogd.js";import{S as t}from"./DatePickerCalendar-HH4LMRzz.js";const j={component:t,title:"Komponenter/Select/Select",argTypes:{children:{table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},defaultValue:{control:"text",table:{category:e.props}},value:{control:"text",table:{category:e.props}},placeholder:{table:{category:e.props,defaultValue:{summary:c.t("Shared:shared.ChooseValue")}}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(u),mapping:u,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLabel:{table:{category:e.props}},hidePlaceholder:{table:{category:e.props}},variant:{options:[...M],control:"inline-radio",table:{category:e.props,defaultValue:{summary:x()}}},label:{table:{category:e.props}},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:c.t("Shared:shared.Help")}}},autoComplete:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...n},onChange:{...n},onFocus:{...n},onHelpToggle:{table:{category:e.event}}},args:{label:"Farge",children:[r.jsx(t.Option,{value:1,children:"Blå"},"option1"),r.jsx(t.Option,{value:2,children:"Gul"},"option2"),r.jsx(t.Option,{value:3,children:"Grønn"},"option3"),r.jsx(t.Option,{value:4,children:"Rød"},"option4")]}},l={},a={render:V=>{const[v,y]=p.useState(0),[f,s]=p.useState(""),O=o=>{i(o),y(Number(o.target.value))},E=o=>{i(o)},i=o=>{s(""),o.target.validity.valueMissing&&s("Fruktsort er påkrevd.")};return r.jsxs(t,{label:"Fruktsort",value:v,helpText:"Velg frukten du liker best.",errorMessage:f,required:!0,onBlur:E,onChange:O,children:[r.jsx(t.Option,{value:1,children:"Banan"}),r.jsx(t.Option,{value:2,children:"Eple"}),r.jsx(t.Option,{value:3,children:"Kiwi"}),r.jsx(t.Option,{value:4,children:"Pære"}),r.jsx(t.Option,{value:5,children:"Sitron"})]})}};a.parameters=k;var m,d,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"{} satisfies Story",...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,S,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const C=["Preview","Examples"],G=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:l,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{a as E,G as S};
//# sourceMappingURL=Select.stories-38nWjAq6.js.map
