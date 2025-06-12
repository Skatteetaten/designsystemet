import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-D_ouKaeX.js";import{d as c,c as E}from"./index-ChzTQA-a.js";import"./index-DzkGBFys.js";import{c as e,h as n}from"./helpers-B7KPg_So.js";import{S as u}from"./icon.systems-BnMBg8hx.js";import{e as k}from"./stories.utils-Ys3NG0dr.js";import{f as M}from"./base-props.types-DUvlOF9f.js";import{S as t}from"./DatePickerCalendar-j9g8dyRt.js";const j={component:t,title:"Komponenter/Select",argTypes:{children:{control:!1,table:{category:e.props}},classNames:{control:!1,table:{category:e.props}},defaultValue:{control:"text",table:{category:e.props}},value:{control:"text",table:{category:e.props}},placeholder:{table:{category:e.props,defaultValue:{summary:c.t("Shared:shared.ChooseValue")}}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(u),mapping:u,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},hidePlaceholder:{table:{category:e.props}},variant:{options:[...M],control:"inline-radio",table:{category:e.props,defaultValue:{summary:E()}}},label:{table:{category:e.props}},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:c.t("Shared:shared.Help")}}},autoComplete:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...n},onChange:{...n},onFocus:{...n},onHelpToggle:{control:!1,table:{category:e.event}}},args:{label:"Farge",children:[r.jsx(t.Option,{value:1,children:"Blå"},"option1"),r.jsx(t.Option,{value:2,children:"Gul"},"option2"),r.jsx(t.Option,{value:3,children:"Grønn"},"option3"),r.jsx(t.Option,{value:4,children:"Rød"},"option4")]}},l={},a={render:V=>{const[v,y]=p.useState(0),[f,s]=p.useState(""),O=o=>{i(o),y(Number(o.target.value))},x=o=>{i(o)},i=o=>{s(""),o.target.validity.valueMissing&&s("Fruktsort er påkrevd.")};return r.jsxs(t,{label:"Fruktsort",value:v,helpText:"Velg frukten du liker best.",errorMessage:f,required:!0,onBlur:x,onChange:O,children:[r.jsx(t.Option,{value:1,children:"Banan"}),r.jsx(t.Option,{value:2,children:"Eple"}),r.jsx(t.Option,{value:3,children:"Kiwi"}),r.jsx(t.Option,{value:4,children:"Pære"}),r.jsx(t.Option,{value:5,children:"Sitron"})]})}};a.parameters=k;var m,d,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"{} satisfies Story",...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,S,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
//# sourceMappingURL=Select.stories-C2y5HD0T.js.map
