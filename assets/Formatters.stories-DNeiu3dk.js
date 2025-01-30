import{j as t}from"./jsx-runtime-CfatFE5O.js";import{r}from"./index-ClcD9ViR.js";import{f as a}from"./index--O6iZ70i.js";import"./index-GOkwpqhH.js";import{T as u}from"./DatePickerCalendar-BtRIsojo.js";const g={title:"Verktøy/Formatters"},N={className:{table:{disable:!0}},"data-testid":{table:{disable:!0}},id:{table:{disable:!0}},key:{table:{disable:!0}},lang:{table:{disable:!0}},ref:{table:{disable:!0}}},n={argTypes:N,render:function(){const[c,l]=r.useState(""),[d,s]=r.useState(""),[v,o]=r.useState("");return r.useEffect(()=>{s(a({value:"26301518292",type:"nationalIdentityNumber"}).value),l(a({value:"974 761 076",type:"organisationNumber"}).value),o(a({value:"7694 05 24802",type:"bankAccountNumber"}).value)},[]),t.jsxs(t.Fragment,{children:[t.jsx(u,{label:"Fødselsnummer (11 siffer)",value:d,className:"textField300",onChange:e=>s(a({value:e.target.value?e.target.value:"",type:"nationalIdentityNumber"}).value)}),t.jsx(u,{label:"Organisasjonsnummer (9 siffer)",value:c,className:"textField300",onChange:e=>l(a({value:e.target.value?e.target.value:"",type:"organisationNumber"}).value)}),t.jsx(u,{label:"Kontonummer",value:v,className:"textField300",onChange:e=>o(a({value:e.target.value?e.target.value:"",type:"bankAccountNumber"}).value)})]})}};var i,m,b;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: defaultArgs,
  render: function Render() {
    const [organisationNumberValue, setOrganisationNumberValue] = useState('');
    const [nationalidentitynumberValue, setNationalidentitynumberValue] = useState('');
    const [bankAccountNumberValue, setBankAccountNumberValue] = useState('');
    useEffect(() => {
      setNationalidentitynumberValue(formatter({
        value: '26301518292',
        type: 'nationalIdentityNumber'
      }).value);
      setOrganisationNumberValue(formatter({
        value: '974 761 076',
        type: 'organisationNumber'
      }).value);
      setBankAccountNumberValue(formatter({
        value: '7694 05 24802',
        type: 'bankAccountNumber'
      }).value);
    }, []);
    return <>
        <TextField label={'Fødselsnummer (11 siffer)'} value={nationalidentitynumberValue} className={'textField300'} onChange={e => setNationalidentitynumberValue(formatter({
        value: e.target.value ? e.target.value : '',
        type: 'nationalIdentityNumber'
      }).value)} />

        <TextField label={'Organisasjonsnummer (9 siffer)'} value={organisationNumberValue} className={'textField300'} onChange={e => setOrganisationNumberValue(formatter({
        value: e.target.value ? e.target.value : '',
        type: 'organisationNumber'
      }).value)} />

        <TextField label={'Kontonummer'} value={bankAccountNumberValue} className={'textField300'} onChange={e => setBankAccountNumberValue(formatter({
        value: e.target.value ? e.target.value : '',
        type: 'bankAccountNumber'
      }).value)} />
      </>;
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const f=["Formatters"],A=Object.freeze(Object.defineProperty({__proto__:null,Formatters:n,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{A as F,n as a};
//# sourceMappingURL=Formatters.stories-DNeiu3dk.js.map
