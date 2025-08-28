import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as t}from"./index-CGk5cNE3.js";import"./index-BuHbB7kV.js";import{T as a}from"./DatePickerCalendar-wzrlqniL.js";const b={title:"Verktøy/Formatters"},c={className:{table:{disable:!0}},"data-testid":{table:{disable:!0}},id:{table:{disable:!0}},key:{table:{disable:!0}},lang:{table:{disable:!0}},ref:{table:{disable:!0}}},n={argTypes:c,render:function(){const r=t({type:"phoneNumber",initialValue:"12345678"}),o=t({type:"organisationNumber",initialValue:"974761076"}),l=t({type:"nationalIdentityNumber",initialValue:"26301518292"}),s=t({type:"bankAccountNumber",initialValue:"76940524802"});return e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Telefonnummer",value:r.value,className:"textField300",hasSpacing:!0,onChange:r.onChange,onKeyDown:r.onKeyDown}),e.jsx(a,{label:"Organisasjonsnummer (9 siffer)",value:o.value,className:"textField300",hasSpacing:!0,onChange:o.onChange,onKeyDown:o.onKeyDown}),e.jsx(a,{label:"Fødselsnummer (11 siffer)",value:l.value,className:"textField300",hasSpacing:!0,onChange:l.onChange,onKeyDown:l.onKeyDown}),e.jsx(a,{label:"Kontonummer",value:s.value,className:"textField300",onChange:s.onChange,onKeyDown:s.onKeyDown})]})}};var u,i,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: defaultArgs,
  render: function Render() {
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
    return <>
        <TextField label={'Telefonnummer'} value={phoneNumberFormatter.value} className={'textField300'} hasSpacing onChange={phoneNumberFormatter.onChange} onKeyDown={phoneNumberFormatter.onKeyDown} />
        <TextField label={'Organisasjonsnummer (9 siffer)'} value={organisationNumberFormatter.value} className={'textField300'} hasSpacing onChange={organisationNumberFormatter.onChange} onKeyDown={organisationNumberFormatter.onKeyDown} />

        <TextField label={'Fødselsnummer (11 siffer)'} value={nationalIdentityNumberFormatter.value} className={'textField300'} hasSpacing onChange={nationalIdentityNumberFormatter.onChange} onKeyDown={nationalIdentityNumberFormatter.onKeyDown} />
        <TextField label={'Kontonummer'} value={bankAccountNumberFormatter.value} className={'textField300'} onChange={bankAccountNumberFormatter.onChange} onKeyDown={bankAccountNumberFormatter.onKeyDown} />
      </>;
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const d=["Formatters"],h=Object.freeze(Object.defineProperty({__proto__:null,Formatters:n,__namedExportsOrder:d,default:b},Symbol.toStringTag,{value:"Module"}));export{h as F,n as a};
//# sourceMappingURL=Formatters.stories-DKmrAUQ-.js.map
