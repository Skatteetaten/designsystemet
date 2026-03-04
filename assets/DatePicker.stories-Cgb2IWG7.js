import{c as e,h as b,e as x,f as M,i as P,b as V,j as d,r as c}from"./iframe-CiN0Q14g.js";import{g as j,b as O,D,c as E,f}from"./index-CXQcQlzF.js";import{S as k}from"./icon.systems-Bl-E5KUb.js";import{e as y}from"./stories.utils-CY4KCgXE.js";import{i as _}from"./DatePickerCalendar-33-6eNA3.js";const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,A={component:D,title:"Komponenter/DatePicker",argTypes:{classNames:{control:!1,table:{category:e.props}},value:{table:{category:e.props},control:"date"},description:{table:{category:e.props}},dateFormat:{table:{category:e.props,defaultValue:{summary:O()}}},label:{table:{category:e.props}},disabledDates:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(k),mapping:k,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},initialPickerDate:{table:{category:e.props},control:"date"},minDate:{table:{category:e.props},control:"date"},maxDate:{table:{category:e.props},control:"date"},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:V()}}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:P()}}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:M()},type:{summary:"string"}},type:"string",description:x()},disabled:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute,defaultValue:{summary:j()}}},readOnly:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},onBlur:{...b},onChange:{...b},onFocus:{...b},onCalendarToggle:{table:{category:e.event}},onHelpToggle:{table:{category:e.event}},onSelectDate:{table:{category:e.event}}},args:{label:"Fødselsdato"}},p={tags:["!dev"],render:t=>{const[,n]=w();t.value=t.value?new Date(t.value):null,t.minDate=t.minDate===void 0?void 0:new Date(t.minDate),t.maxDate=t.maxDate===void 0?void 0:new Date(t.maxDate),t.initialPickerDate=t.initialPickerDate===void 0?void 0:new Date(t.initialPickerDate);const o=s=>{t.onSelectDate?.(s),n({value:s})};return d.jsx(D,{...t,onSelectDate:o})}},i={render:t=>{const[n,o]=c.useState(null);return d.jsx(D,{label:"Dato (dd.mm.åååå)",value:n,required:!0,onSelectDate:o})}};i.parameters=y;const m={name:"Med min- og maxdato",render:t=>{const[n,o]=c.useState(null),[s,v]=c.useState(""),[S,a]=c.useState(""),r=new Date(2024,6,1),l=new Date(2024,12,1),h=g=>{g===null?a(s!==""?"Datoen har ikke rett format. Skriv slik: 17.05.2024.":"Dato må fylles ut eller velges."):_(g,{start:r,end:l})?a(""):a(`Dato må være mellom ${f(r,"dd.MM.yyyy")} og ${f(l,"dd.MM.yyyy")}.`),o(g)};return d.jsx(D,{label:"Oppstartsdato (dd.mm.åååå)",value:n,errorMessage:S,maxDate:l,minDate:r,hasSpacing:!0,required:!0,onSelectDate:h,onChange:g=>v(g.target.value)})}};m.parameters=y;const u={name:"Dato og klokkeslett",render:t=>{const[n,o]=c.useState(null),[s,v]=c.useState(""),S=[];for(let a=8;a<=16;a++)for(let r=0;r<60&&!(a===16&&r>0);r+=30){const l=`${a.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`;S.push({value:l,label:l})}return d.jsxs("div",{className:"flex gapM",children:[d.jsx(D,{label:"Dato (dd.mm.åååå)",value:n,onSelectDate:o}),d.jsx(E,{label:"Tid (tt:mm)",value:s,options:S,placeholder:"",className:"textField150",onSelectionChange:a=>v(a?.value??"")})]})}};u.parameters=y;p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
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
} satisfies Story`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<Date | null>(null);
    return <DatePicker label={'Dato (dd.mm.åååå)'} value={value} required onSelectDate={setValue} />;
  }
} satisfies Story`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Med min- og maxdato',
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
        setErrorMessage(\`Dato må være mellom \${format(minDate, 'dd.MM.yyyy')} og \${format(maxDate, 'dd.MM.yyyy')}.\`);
      } else {
        setErrorMessage('');
      }
      setValue(date);
    };
    return <DatePicker label={'Oppstartsdato (dd.mm.åååå)'} value={value} errorMessage={errorMessage} maxDate={maxDate} minDate={minDate} hasSpacing required onSelectDate={handleSelect} onChange={e => setInputValue(e.target.value)} />;
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Dato og klokkeslett',
  render: (_args): JSX.Element => {
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<string>('');

    // Generer klokkeslett fra 08:00 til 16:00 med 30 minutters intervall
    const timeOptions = [];
    for (let hour = 8; hour <= 16; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 16 && minute > 0) break; // Stopp ved 16:00
        const timeString = \`\${hour.toString().padStart(2, '0')}:\${minute.toString().padStart(2, '0')}\`;
        timeOptions.push({
          value: timeString,
          label: timeString
        });
      }
    }
    return <div className={'flex gapM'}>
        <DatePicker label={'Dato (dd.mm.åååå)'} value={date} onSelectDate={setDate} />
        <Combobox label={'Tid (tt:mm)'} value={time} options={timeOptions} placeholder={''} className={'textField150'} onSelectionChange={option => setTime(option?.value ?? '')} />
      </div>;
  }
} satisfies Story`,...u.parameters?.docs?.source}}};const C=["Preview","Enkeltdato","MedMinOgMaxDato","DatoOgKlokkeslett"],H=Object.freeze(Object.defineProperty({__proto__:null,DatoOgKlokkeslett:u,Enkeltdato:i,MedMinOgMaxDato:m,Preview:p,__namedExportsOrder:C,default:A},Symbol.toStringTag,{value:"Module"}));export{H as D,i as E,m as M,u as a};
//# sourceMappingURL=DatePicker.stories-Cgb2IWG7.js.map
