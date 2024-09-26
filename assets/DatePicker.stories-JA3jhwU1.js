import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{d as p,b as k,g as E,c as P}from"./index-e2J6NVvS.js";import{D as m,g as A}from"./index-CJloTDHB.js";import{c as e,h as c}from"./helpers-Dccz2jQ-.js";import{S as g}from"./icon.systems-Dz6DRmJR.js";import{e as F}from"./stories.utils-Ys3NG0dr.js";import{f as _}from"./base-props.types-BkCKQDF7.js";import{T as M}from"./DatePickerCalendar-Bhlu0kBA.js";const{useArgs:V}=__STORYBOOK_MODULE_PREVIEW_API__,j={component:m,title:"Komponenter/DatePicker",argTypes:{classNames:{table:{category:e.props}},value:{table:{category:e.props},control:"date"},description:{table:{category:e.props}},dateFormat:{table:{category:e.props,defaultValue:{summary:A()}}},label:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(g),mapping:g,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLabel:{table:{category:e.props}},initialPickerDate:{table:{category:e.props},control:"date"},minDate:{table:{category:e.props},control:"date"},maxDate:{table:{category:e.props},control:"date"},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:p.t("Shared:shared.Help")}}},variant:{options:[..._],control:"inline-radio",table:{category:e.props,defaultValue:{summary:k()}}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:E()},type:{summary:"string"}},type:"string",description:P()},disabled:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute,defaultValue:{summary:p.t("ds_forms:datepicker.TypeOrSelect")}}},readOnly:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...c},onChange:{...c},onFocus:{...c},onHelpToggle:{table:{category:e.event}},onSelectDate:{table:{category:e.event}}},args:{label:"Fødselsdato"}},o={render:t=>{const[,s]=V();t.value=t.value?new Date(t.value):null,t.minDate=t.minDate===void 0?void 0:new Date(t.minDate),t.maxDate=t.maxDate===void 0?void 0:new Date(t.maxDate),t.initialPickerDate=t.initialPickerDate===void 0?void 0:new Date(t.initialPickerDate);const i=l=>{var r;(r=t.onSelectDate)==null||r.call(t,l),s({value:l})};return n.jsx(m,{...t,onSelectDate:i})}},a={render:t=>{const[s,i]=u.useState(null),[l,r]=u.useState(""),x=d=>{d.target.validity.valueMissing&&r("Fødselsnummer er påkrevd.")},h=d=>{i(d),r("")};return n.jsxs(n.Fragment,{children:[n.jsx(m,{label:"Fødselsdato",value:s,errorMessage:l,required:!0,onBlur:x,onSelectDate:h}),n.jsx(M,{className:"textField300",label:"Andre opplysninger",as:"textarea"})]})}};a.parameters=F;var D,y,b;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args): JSX.Element => {
    const [, setArgs] = useArgs();
    /* Fordi date control konverterer datoen til et UNIX-tidsstempel når verdien endres,
     må den konverteres til et date objekt. Dette er en kjent begrensing som vil bli fikset
    en gang i fremtiden står det i Storybook sin dokumentasjon over Controls. */

    // value settes til null dersom undefined for å unngå advarsel om controlled/uncontrolled.
    args.value = !args.value ? null : new Date(args.value);
    args.minDate = args.minDate === undefined ? undefined : new Date(args.minDate);
    args.maxDate = args.maxDate === undefined ? undefined : new Date(args.maxDate);
    args.initialPickerDate = args.initialPickerDate === undefined ? undefined : new Date(args.initialPickerDate as Date);
    const handleSelectDate = (date: Date | null): void => {
      args.onSelectDate?.(date);
      setArgs({
        value: date
      });
    };
    return <DatePicker {...args} onSelectDate={handleSelectDate} />;
  }
} satisfies Story`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,f,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<Date | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const handleBlur = (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.validity.valueMissing) {
        setErrorMessage('Fødselsnummer er påkrevd.');
      }
    };

    // Ved å lytte på onSelectDate får man tilgang til dato (eller null dersom datoen i feltet ikke er gyldig).
    const handleSelect = (date: Date | null): void => {
      setValue(date);
      setErrorMessage('');
    };
    return <>
        <DatePicker label={'Fødselsdato'} value={value} errorMessage={errorMessage} required onBlur={handleBlur} onSelectDate={handleSelect} />
        <TextField className={'textField300'} label={'Andre opplysninger'} as={'textarea'} />
      </>;
  }
} satisfies Story`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const w=["Preview","Examples"],L=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:o,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{L as D,a as E};
//# sourceMappingURL=DatePicker.stories-JA3jhwU1.js.map
