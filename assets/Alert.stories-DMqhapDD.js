import{e,j as r}from"./iframe-BoxHncFg.js";import{g as p,A as t}from"./index-k61vOTBl.js";import{S as o}from"./icon.systems-qsHVbejn.js";import{e as d}from"./stories.utils-CZ5hej_8.js";const f={component:t,title:"Komponenter/Alert",argTypes:{children:{control:"text",table:{category:e.props}},backgroundBrightness:{table:{category:e.props,defaultValue:{summary:p()}}},showAlert:{table:{category:e.props}},svgPath:{options:Object.keys(o),mapping:o,table:{category:e.props}},variant:{table:{category:e.props}},ariaLive:{table:{category:e.aria}},onClose:{table:{category:e.event}}},args:{children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",showAlert:!0,variant:"warning"}},s={},a={render:v=>r.jsxs(r.Fragment,{children:[r.jsx(t,{variant:"info",className:"bottomSpacingXL",showAlert:!0,children:"Disse feltene er låst for redigering fordi du har fått et varsel fra oss"}),r.jsx(t,{variant:"success",className:"bottomSpacingXL",showAlert:!0,children:"Filen ble lastet opp"}),r.jsx(t,{variant:"warning",className:"bottomSpacingXL",showAlert:!0,children:"Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser."}),r.jsx(t,{variant:"error",className:"bottomSpacingXL",showAlert:!0,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon."}),r.jsx(t,{variant:"danger",showAlert:!0,children:"Strengt fortrolig (Kode 6)"})]})};a.parameters=d;var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{} satisfies Story",...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <>
        <Alert variant={'info'} className={'bottomSpacingXL'} showAlert>
          {'Disse feltene er låst for redigering fordi du har fått et varsel fra oss'}
        </Alert>
        <Alert variant={'success'} className={'bottomSpacingXL'} showAlert>
          {'Filen ble lastet opp'}
        </Alert>

        <Alert variant={'warning'} className={'bottomSpacingXL'} showAlert>
          {'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.'}
        </Alert>
        <Alert variant={'error'} className={'bottomSpacingXL'} showAlert>
          {'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'}
        </Alert>
        <Alert variant={'danger'} showAlert>
          {'Strengt fortrolig (Kode 6)'}
        </Alert>
      </>;
  }
} satisfies Story`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const u=["Preview","Examples"],b=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:s,__namedExportsOrder:u,default:f},Symbol.toStringTag,{value:"Module"}));export{b as A,a as E};
//# sourceMappingURL=Alert.stories-DMqhapDD.js.map
