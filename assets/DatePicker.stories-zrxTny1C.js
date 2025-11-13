import{f as e,h as p,k as V,a as j,l as w,c as A,j as n,r as g}from"./iframe-CdXtTKZQ.js";import{g as E,f as _,D,T as F,h as y}from"./index-CLKUz3Po.js";import{S as f}from"./icon.systems-eQup-rxy.js";import{e as O}from"./stories.utils-CZ5hej_8.js";import{i as C}from"./DatePickerCalendar-ByRci1Oe.js";const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,T={component:D,title:"Komponenter/DatePicker",argTypes:{classNames:{control:!1,table:{category:e.props}},value:{table:{category:e.props},control:"date"},description:{table:{category:e.props}},dateFormat:{table:{category:e.props,defaultValue:{summary:_()}}},label:{table:{category:e.props}},disabledDates:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(f),mapping:f,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},initialPickerDate:{table:{category:e.props},control:"date"},minDate:{table:{category:e.props},control:"date"},maxDate:{table:{category:e.props},control:"date"},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:A()}}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:w()}}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:j()},type:{summary:"string"}},type:"string",description:V()},disabled:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute,defaultValue:{summary:E()}}},readOnly:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...p},onChange:{...p},onFocus:{...p},onHelpToggle:{table:{category:e.event}},onSelectDate:{table:{category:e.event}}},args:{label:"Fødselsdato"}},o={render:t=>{const[,i]=I();t.value=t.value?new Date(t.value):null,t.minDate=t.minDate===void 0?void 0:new Date(t.minDate),t.maxDate=t.maxDate===void 0?void 0:new Date(t.maxDate),t.initialPickerDate=t.initialPickerDate===void 0?void 0:new Date(t.initialPickerDate);const m=s=>{var l;(l=t.onSelectDate)==null||l.call(t,s),i({value:s})};return n.jsx(D,{...t,onSelectDate:m})}},a={render:t=>{const[i,m]=g.useState(null),[s,l]=g.useState(""),[M,c]=g.useState(""),d=new Date(2024,6,1),u=new Date(2024,12,1),P=r=>{r===null?c(s!==""?"Datoen har ikke rett format. Skriv slik: 17.05.2024.":"Dato må fylles ut eller velges."):C(r,{start:d,end:u})?c(""):c(`Dato må være mellom ${y(d,"dd.MM.yyyy")} og ${y(u,"dd.MM.yyyy.")}.`),m(r)};return n.jsxs(n.Fragment,{children:[n.jsx(D,{label:"Fødselsdato",value:i,errorMessage:M,maxDate:u,minDate:d,hasSpacing:!0,required:!0,onSelectDate:P,onChange:r=>l(r.target.value)}),n.jsx(F,{className:"textField300",label:"Andre opplysninger"})]})}};a.parameters=O;var b,v,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,h,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const q=["Preview","Examples"],X=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:o,__namedExportsOrder:q,default:T},Symbol.toStringTag,{value:"Module"}));export{X as D,a as E};
//# sourceMappingURL=DatePicker.stories-zrxTny1C.js.map
