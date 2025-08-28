import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-D_ouKaeX.js";import{c as V,a as A,e as E,b as w}from"./index-CGk5cNE3.js";import{g as _,b as j,D,T as F,f as y}from"./index-BuHbB7kV.js";import{c as e,h as g}from"./helpers-B90wjoUE.js";import{S as b}from"./icon.systems-DzczaoTk.js";import{e as C}from"./stories.utils-Ys3NG0dr.js";import{i as I}from"./DatePickerCalendar-wzrlqniL.js";const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,T={component:D,title:"Komponenter/DatePicker",argTypes:{classNames:{control:!1,table:{category:e.props}},value:{table:{category:e.props},control:"date"},description:{table:{category:e.props}},dateFormat:{table:{category:e.props,defaultValue:{summary:j()}}},label:{table:{category:e.props}},disabledDates:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(b),mapping:b,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},initialPickerDate:{table:{category:e.props},control:"date"},minDate:{table:{category:e.props},control:"date"},maxDate:{table:{category:e.props},control:"date"},showRequiredMark:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:w()}}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:E()}}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:A()},type:{summary:"string"}},type:"string",description:V()},disabled:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute,defaultValue:{summary:_()}}},readOnly:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...g},onChange:{...g},onFocus:{...g},onHelpToggle:{table:{category:e.event}},onSelectDate:{table:{category:e.event}}},args:{label:"Fødselsdato"}},o={render:t=>{const[,i]=O();t.value=t.value?new Date(t.value):null,t.minDate=t.minDate===void 0?void 0:new Date(t.minDate),t.maxDate=t.maxDate===void 0?void 0:new Date(t.maxDate),t.initialPickerDate=t.initialPickerDate===void 0?void 0:new Date(t.initialPickerDate);const m=l=>{var s;(s=t.onSelectDate)==null||s.call(t,l),i({value:l})};return n.jsx(D,{...t,onSelectDate:m})}},a={render:t=>{const[i,m]=p.useState(null),[l,s]=p.useState(""),[M,c]=p.useState(""),u=new Date(2024,6,1),d=new Date(2024,12,1),P=r=>{r===null?c(l!==""?"Datoen har ikke rett format. Skriv slik: 17.05.2024.":"Dato må fylles ut eller velges."):I(r,{start:u,end:d})?c(""):c(`Dato må være mellom ${y(u,"dd.MM.yyyy")} og ${y(d,"dd.MM.yyyy.")}.`),m(r)};return n.jsxs(n.Fragment,{children:[n.jsx(D,{label:"Fødselsdato",value:i,errorMessage:M,maxDate:d,minDate:u,hasSpacing:!0,required:!0,onSelectDate:P,onChange:r=>s(r.target.value)}),n.jsx(F,{className:"textField300",label:"Andre opplysninger"})]})}};a.parameters=C;var f,v,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var h,k,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        <DatePicker label={'Fødselsdato'} value={value} errorMessage={errorMessage} maxDate={maxDate} minDate={minDate} hasSpacing required onSelectDate={handleSelect} onChange={e => setInputValue(e.target.value)} />
        <TextArea className={'textField300'} label={'Andre opplysninger'} />
      </>;
  }
} satisfies Story`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const H=["Preview","Examples"],K=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:o,__namedExportsOrder:H,default:T},Symbol.toStringTag,{value:"Module"}));export{K as D,a as E};
//# sourceMappingURL=DatePicker.stories-Gt0KALCf.js.map
