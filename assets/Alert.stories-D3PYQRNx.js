import{j as r}from"./jsx-runtime-CfatFE5O.js";import"./index-qxaMszO_.js";import{A as a,g}from"./index-DDpvzByM.js";import{c as e}from"./helpers-Dccz2jQ-.js";import{S as o}from"./icon.systems-C3YHcMhe.js";import{e as d}from"./stories.utils-Ys3NG0dr.js";import{s as u}from"./base-props.types-sXyoNogd.js";const f={component:a,title:"Komponenter/Alert",argTypes:{children:{control:"text",table:{category:e.props}},backgroundBrightness:{table:{category:e.props,defaultValue:{summary:g()}}},showAlert:{table:{category:e.props},control:"radio",options:[!0,!1]},svgPath:{options:Object.keys(o),mapping:o,table:{category:e.props}},variant:{options:[...u],control:"radio",table:{category:e.props}},ariaLive:{table:{category:e.aria}},onClose:{table:{category:e.event}}},args:{children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",showAlert:!0,variant:"neutral"}},s={},t={render:h=>r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"success",className:"bottomSpacingXL",showAlert:!0,children:"Filen ble lastet opp"}),r.jsx(a,{variant:"neutral",className:"bottomSpacingXL",showAlert:!0,children:"Disse feltene er låst for redigering fordi du har fått et varsel fra oss"}),r.jsx(a,{variant:"warning",className:"bottomSpacingXL",showAlert:!0,children:"Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser."}),r.jsx(a,{variant:"danger",showAlert:!0,children:"Strengt fortrolig (Kode 6)"})]})};t.parameters=d;var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{} satisfies Story",...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <>
        <Alert variant={'success'} className={'bottomSpacingXL'} showAlert>
          {'Filen ble lastet opp'}
        </Alert>
        <Alert variant={'neutral'} className={'bottomSpacingXL'} showAlert>
          {'Disse feltene er låst for redigering fordi du har fått et varsel fra oss'}
        </Alert>
        <Alert variant={'warning'} className={'bottomSpacingXL'} showAlert>
          {'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.'}
        </Alert>
        <Alert variant={'danger'} showAlert>
          {'Strengt fortrolig (Kode 6)'}
        </Alert>
      </>;
  }
} satisfies Story`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const A=["Preview","Examples"],x=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:s,__namedExportsOrder:A,default:f},Symbol.toStringTag,{value:"Module"}));export{x as A,t as E};
//# sourceMappingURL=Alert.stories-D3PYQRNx.js.map
