import{r as b,d as c,u as n,j as e}from"./iframe-_BeEUj9n.js";import"./index-jV6wSCam.js";import{A as F}from"./index-BUfGp1h_.js";import{T as t}from"./DatePickerCalendar-BqUDbnkt.js";const p=d=>{switch(d){case"maxDigitsReached":return"Du kan ikke legge inn flere siffer";case"maxDecimalsReached":return"Du kan ikke legge inn flere desimaler";case"duplicateDecimalSeparator":return"Desimalskilletegn er allerede lagt inn";case"valid":return}},y={title:"Verktøy/Formatters"},v={className:{table:{disable:!0}},"data-testid":{table:{disable:!0}},id:{table:{disable:!0}},key:{table:{disable:!0}},lang:{table:{disable:!0}},ref:{table:{disable:!0}}},o={argTypes:v,render:function(){const[l,h]=b.useState(c.language.replace("_","-"));b.useEffect(()=>{const g=N=>{h(N.replace("_","-"))};return c.on("languageChanged",g),()=>{c.off("languageChanged",g)}},[]);const s=n({type:"phoneNumber",initialValue:"12345678"}),u=n({type:"organisationNumber",initialValue:"974761076"}),i=n({type:"nationalIdentityNumber",initialValue:"26301518292"}),m=n({type:"bankAccountNumber",initialValue:"76940524802"}),r=n({type:"number",initialValue:"50400,32",locale:l}),a=n({type:"number",initialValue:"50400,32",locale:l,allowDecimals:!0});return console.log("displayValue: ",a.value),console.log("rawValue: ",a.rawValue),console.log("numberValue: ",a.numberValue),e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Telefonnummer",value:s.value,className:"textField300",hasSpacing:!0,onChange:s.onChange,onKeyDown:s.onKeyDown}),e.jsx(t,{label:"Organisasjonsnummer (9 siffer)",value:u.value,className:"textField300",hasSpacing:!0,onChange:u.onChange,onKeyDown:u.onKeyDown}),e.jsx(t,{label:"Fødselsnummer (11 siffer)",value:i.value,className:"textField300",hasSpacing:!0,onChange:i.onChange,onKeyDown:i.onKeyDown}),e.jsx(t,{label:"Kontonummer",value:m.value,className:"textField300",hasSpacing:!0,onChange:m.onChange,onKeyDown:m.onKeyDown}),e.jsx(t,{label:"Beløp",description:`Formatert etter valgt språk: ${l}`,value:r.value,className:"textField300",hasSpacing:!0,onChange:r.onChange,onKeyDown:r.onKeyDown}),e.jsx(F,{className:"textField300",variant:"warning",showAlert:r.status!=="valid",children:p(r.status)}),e.jsx(t,{label:"Beløp med desimal",description:`Formatert etter valgt språk: ${l}`,value:a.value,className:"textField300",hasSpacing:!0,onChange:a.onChange,onKeyDown:a.onKeyDown}),e.jsx(F,{className:"textField300",variant:"warning",showAlert:a.status!=="valid",children:p(a.status)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes: defaultArgs,
  render: function Render() {
    const [locale, setLocale] = useState(dsI18n.language.replace('_', '-'));
    useEffect(() => {
      const handleLanguageChange = (lng: string): void => {
        setLocale(lng.replace('_', '-'));
      };
      dsI18n.on('languageChanged', handleLanguageChange);
      return (): void => {
        dsI18n.off('languageChanged', handleLanguageChange);
      };
    }, []);
    const phoneNumberFormatter = useFormattedInput({
      type: 'phoneNumber',
      initialValue: '12345678'
    });
    const organisationNumberFormatter = useFormattedInput({
      type: 'organisationNumber',
      initialValue: '974761076'
    });
    const nationalIdentityNumberFormatter = useFormattedInput({
      type: 'nationalIdentityNumber',
      initialValue: '26301518292'
    });
    const bankAccountNumberFormatter = useFormattedInput({
      type: 'bankAccountNumber',
      initialValue: '76940524802'
    });
    const numberFormatter = useFormattedInput({
      type: 'number',
      initialValue: '50400,32',
      locale: locale
    });
    const decimalNumberFormatter = useFormattedInput({
      type: 'number',
      initialValue: '50400,32',
      locale: locale,
      allowDecimals: true
    });
    console.log('displayValue: ', decimalNumberFormatter.value);
    console.log('rawValue: ', decimalNumberFormatter.rawValue);
    console.log('numberValue: ', decimalNumberFormatter.numberValue);
    return <>
        <TextField label={'Telefonnummer'} value={phoneNumberFormatter.value} className={'textField300'} hasSpacing onChange={phoneNumberFormatter.onChange} onKeyDown={phoneNumberFormatter.onKeyDown} />
        <TextField label={'Organisasjonsnummer (9 siffer)'} value={organisationNumberFormatter.value} className={'textField300'} hasSpacing onChange={organisationNumberFormatter.onChange} onKeyDown={organisationNumberFormatter.onKeyDown} />
        <TextField label={'Fødselsnummer (11 siffer)'} value={nationalIdentityNumberFormatter.value} className={'textField300'} hasSpacing onChange={nationalIdentityNumberFormatter.onChange} onKeyDown={nationalIdentityNumberFormatter.onKeyDown} />
        <TextField label={'Kontonummer'} value={bankAccountNumberFormatter.value} className={'textField300'} hasSpacing onChange={bankAccountNumberFormatter.onChange} onKeyDown={bankAccountNumberFormatter.onKeyDown} />
        <TextField label={'Beløp'} description={\`Formatert etter valgt språk: \${locale}\`} value={numberFormatter.value} className={'textField300'} hasSpacing onChange={numberFormatter.onChange} onKeyDown={numberFormatter.onKeyDown} />
        <Alert className={'textField300'} variant={'warning'} showAlert={numberFormatter.status !== 'valid'}>
          {mapStatusToMessage(numberFormatter.status)}
        </Alert>
        <TextField label={'Beløp med desimal'} description={\`Formatert etter valgt språk: \${locale}\`} value={decimalNumberFormatter.value} className={'textField300'} hasSpacing onChange={decimalNumberFormatter.onChange} onKeyDown={decimalNumberFormatter.onKeyDown} />
        <Alert className={'textField300'} variant={'warning'} showAlert={decimalNumberFormatter.status !== 'valid'}>
          {mapStatusToMessage(decimalNumberFormatter.status)}
        </Alert>
      </>;
  }
}`,...o.parameters?.docs?.source}}};const w=["Formatters"],K=Object.freeze(Object.defineProperty({__proto__:null,Formatters:o,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{K as F,o as a};
//# sourceMappingURL=Formatters.stories-BWlslzaE.js.map
