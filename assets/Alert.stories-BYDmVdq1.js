import{g as c,A as l}from"./index-B7dLDHE3.js";import{c as e}from"./iframe-LV2IHoVd.js";import{S as i}from"./icon.systems-BccAeqUG.js";const d={component:l,title:"Komponenter/Alert",argTypes:{children:{control:"text",table:{category:e.props}},backgroundBrightness:{table:{category:e.props,defaultValue:{summary:c()}}},showAlert:{table:{category:e.props}},svgPath:{options:Object.keys(i),mapping:i,table:{category:e.props}},variant:{table:{category:e.props}},ariaLive:{table:{category:e.aria},defaultValue:{summary:"polite"}},onClose:{table:{category:e.event}}},args:{children:"Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.",showAlert:!0,variant:"warning"}},r={tags:["!dev"]},a={name:"Nøytral",args:{variant:"info",children:"Disse feltene er låst for redigering fordi du har fått et varsel fra oss"}},s={name:"Suksess",args:{variant:"success",children:"Filen ble lastet opp"}},t={name:"Advarsel",args:{variant:"warning",children:"Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser."}},n={name:"Feil",args:{variant:"error",children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon."}},o={name:"Fare",args:{variant:"danger",children:"Strengt fortrolig (Kode 6)"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev']
} satisfies Story`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Nøytral',
  args: {
    variant: 'info',
    children: 'Disse feltene er låst for redigering fordi du har fått et varsel fra oss'
  }
} satisfies Story`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Suksess',
  args: {
    variant: 'success',
    children: 'Filen ble lastet opp'
  }
} satisfies Story`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Advarsel',
  args: {
    variant: 'warning',
    children: 'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.'
  }
} satisfies Story`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Feil',
  args: {
    variant: 'error',
    children: 'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
  }
} satisfies Story`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Fare',
  args: {
    variant: 'danger',
    children: 'Strengt fortrolig (Kode 6)'
  }
} satisfies Story`,...o.parameters?.docs?.source}}};const g=["Preview","Info","Success","Warning","ErrorAlert","Danger"],u=Object.freeze(Object.defineProperty({__proto__:null,Danger:o,ErrorAlert:n,Info:a,Preview:r,Success:s,Warning:t,__namedExportsOrder:g,default:d},Symbol.toStringTag,{value:"Module"}));export{u as A,o as D,n as E,a as I,s as S,t as W};
//# sourceMappingURL=Alert.stories-BYDmVdq1.js.map
