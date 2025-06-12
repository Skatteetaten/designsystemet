import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-D_ouKaeX.js";import{d as y,b as A,g as E,c as _}from"./index-ChzTQA-a.js";import{g as w,D,T as j,f}from"./index-DzkGBFys.js";import{c as e,h as g}from"./helpers-B7KPg_So.js";import{S as b}from"./icon.systems-BnMBg8hx.js";import{e as F}from"./stories.utils-Ys3NG0dr.js";import{f as I}from"./base-props.types-DUvlOF9f.js";import{i as O}from"./DatePickerCalendar-j9g8dyRt.js";const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,T={component:D,title:"Komponenter/DatePicker",argTypes:{classNames:{control:!1,table:{category:e.props}},value:{table:{category:e.props},control:"date"},description:{table:{category:e.props}},dateFormat:{table:{category:e.props,defaultValue:{summary:w()}}},label:{table:{category:e.props}},disabledDates:{table:{category:e.props}},errorMessage:{table:{category:e.props}},helpSvgPath:{options:Object.keys(b),mapping:b,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},initialPickerDate:{table:{category:e.props},control:"date"},minDate:{table:{category:e.props},control:"date"},maxDate:{table:{category:e.props},control:"date"},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:y.t("Shared:shared.Help")}}},variant:{options:[...I],control:"inline-radio",table:{category:e.props,defaultValue:{summary:_()}}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:E()},type:{summary:"string"}},type:"string",description:A()},disabled:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute,defaultValue:{summary:y.t("ds_forms:datepicker.TypeOrSelect")}}},readOnly:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...g},onChange:{...g},onFocus:{...g},onHelpToggle:{table:{category:e.event}},onSelectDate:{table:{category:e.event}}},args:{label:"Fødselsdato"}},o={render:t=>{const[,i]=C();t.value=t.value?new Date(t.value):null,t.minDate=t.minDate===void 0?void 0:new Date(t.minDate),t.maxDate=t.maxDate===void 0?void 0:new Date(t.maxDate),t.initialPickerDate=t.initialPickerDate===void 0?void 0:new Date(t.initialPickerDate);const m=l=>{var s;(s=t.onSelectDate)==null||s.call(t,l),i({value:l})};return n.jsx(D,{...t,onSelectDate:m})}},a={render:t=>{const[i,m]=p.useState(null),[l,s]=p.useState(""),[P,d]=p.useState(""),c=new Date(2024,6,1),u=new Date(2024,12,1),V=r=>{r===null?d(l!==""?"Datoen har ikke rett format. Skriv slik: 17.05.2024.":"Dato må fylles ut eller velges."):O(r,{start:c,end:u})?d(""):d(`Dato må være mellom ${f(c,"dd.MM.yyyy")} og ${f(u,"dd.MM.yyyy.")}.`),m(r)};return n.jsxs(n.Fragment,{children:[n.jsx(D,{label:"Fødselsdato",value:i,errorMessage:P,maxDate:u,minDate:c,required:!0,onSelectDate:V,onChange:r=>s(r.target.value)}),n.jsx(j,{className:"textField300",label:"Andre opplysninger"})]})}};a.parameters=F;var v,S,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args): JSX.Element => {
    const [, setArgs] = useArgs();
    /* Fordi date control konverterer datoen til et UNIX-tidsstempel når verdien endres,
     må den konverteres til et date objekt. Dette er en kjent begrensing som vil bli fikset
    en gang i fremtiden står det i Storybook sin dokumentasjon over Controls. */

    // value settes til null dersom undefined for å unngå advarsel om controlled/uncontrolled.
    args.value = !args.value ? null : new Date(args.value);
    args.minDate = args.minDate === undefined ? undefined : new Date(args.minDate);
    args.maxDate = args.maxDate === undefined ? undefined : new Date(args.maxDate);
    args.initialPickerDate = args.initialPickerDate === undefined ? undefined : new Date(args.initialPickerDate);
    const handleSelectDate = (date: Date | null): void => {
      args.onSelectDate?.(date);
      setArgs({
        value: date
      });
    };
    return <DatePicker {...args} onSelectDate={handleSelectDate} />;
  }
} satisfies Story`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var h,x,M;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<Date | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const minDate = new Date(2024, 6, 1);
    const maxDate = new Date(2024, 12, 1);

    // Ved å lytte på onSelectDate får man tilgang til dato (eller null dersom datoen i feltet ikke er gyldig).
    const handleSelect = (date: Date | null): void => {
      if (date === null) {
        const errorMessage = inputValue !== '' ? 'Datoen har ikke rett format. Skriv slik: 17.05.2024.' : 'Dato må fylles ut eller velges.';
        setErrorMessage(errorMessage);
      } else if (!isWithinInterval(date, {
        start: minDate,
        end: maxDate
      })) {
        // isWithinInterval og format kommer fra date-fns
        setErrorMessage(\`Dato må være mellom \${format(minDate, 'dd.MM.yyyy')} og \${format(maxDate, 'dd.MM.yyyy.')}.\`);
      } else {
        setErrorMessage('');
      }
      setValue(date);
    };
    return <>
        <DatePicker label={'Fødselsdato'} value={value} errorMessage={errorMessage} maxDate={maxDate} minDate={minDate} required onSelectDate={handleSelect} onChange={e => setInputValue(e.target.value)} />
        <TextArea className={'textField300'} label={'Andre opplysninger'} />
      </>;
  }
} satisfies Story`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const q=["Preview","Examples"],K=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:o,__namedExportsOrder:q,default:T},Symbol.toStringTag,{value:"Module"}));export{K as D,a as E};
//# sourceMappingURL=DatePicker.stories-C7qP4OwQ.js.map
