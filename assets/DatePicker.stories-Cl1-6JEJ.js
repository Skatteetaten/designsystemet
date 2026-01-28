import{e,h as u,i as k,a as S,k as h,c as x,j as n,r as g}from"./iframe-CBOQuZmX.js";import{g as M,f as P,D as p,T as V,h as D}from"./index-D76sDZza.js";import{S as y}from"./icon.systems-DLlbXhEY.js";import{e as j}from"./stories.utils-CZ5hej_8.js";import{i as w}from"./DatePickerCalendar-DF1H3gtV.js";const{useArgs:A}=__STORYBOOK_MODULE_PREVIEW_API__,E={component:p,title:"Komponenter/DatePicker",argTypes:{classNames:{control:!1,table:{category:e.props}},value:{table:{category:e.props},control:"date"},description:{table:{category:e.props}},dateFormat:{table:{category:e.props,defaultValue:{summary:P()}}},label:{table:{category:e.props}},disabledDates:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(y),mapping:y,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},initialPickerDate:{table:{category:e.props},control:"date"},minDate:{table:{category:e.props},control:"date"},maxDate:{table:{category:e.props},control:"date"},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:x()}}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:h()}}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:S()},type:{summary:"string"}},type:"string",description:k()},disabled:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute,defaultValue:{summary:M()}}},readOnly:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...u},onChange:{...u},onFocus:{...u},onHelpToggle:{table:{category:e.event}},onSelectDate:{table:{category:e.event}}},args:{label:"Fødselsdato"}},o={render:t=>{const[,l]=A();t.value=t.value?new Date(t.value):null,t.minDate=t.minDate===void 0?void 0:new Date(t.minDate),t.maxDate=t.maxDate===void 0?void 0:new Date(t.maxDate),t.initialPickerDate=t.initialPickerDate===void 0?void 0:new Date(t.initialPickerDate);const i=s=>{t.onSelectDate?.(s),l({value:s})};return n.jsx(p,{...t,onSelectDate:i})}},a={render:t=>{const[l,i]=g.useState(null),[s,f]=g.useState(""),[b,m]=g.useState(""),c=new Date(2024,6,1),d=new Date(2024,12,1),v=r=>{r===null?m(s!==""?"Datoen har ikke rett format. Skriv slik: 17.05.2024.":"Dato må fylles ut eller velges."):w(r,{start:c,end:d})?m(""):m(`Dato må være mellom ${D(c,"dd.MM.yyyy")} og ${D(d,"dd.MM.yyyy.")}.`),i(r)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Fødselsdato",value:l,errorMessage:b,maxDate:d,minDate:c,hasSpacing:!0,required:!0,onSelectDate:v,onChange:r=>f(r.target.value)}),n.jsx(V,{className:"textField300",label:"Andre opplysninger"})]})}};a.parameters=j;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...a.parameters?.docs?.source}}};const _=["Preview","Examples"],H=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:o,__namedExportsOrder:_,default:E},Symbol.toStringTag,{value:"Module"}));export{H as D,a as E};
//# sourceMappingURL=DatePicker.stories-Cl1-6JEJ.js.map
