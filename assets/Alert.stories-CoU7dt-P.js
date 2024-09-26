import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import"./index-e2J6NVvS.js";import{A as a}from"./index-DJw2LVW1.js";import{c as r}from"./helpers-Dccz2jQ-.js";import{S as o}from"./icon.systems-Dz6DRmJR.js";import{e as g}from"./stories.utils-Ys3NG0dr.js";import{s as d}from"./base-props.types-BkCKQDF7.js";const f={component:a,title:"Komponenter/Alert",argTypes:{children:{control:"text",table:{category:r.props}},showAlert:{table:{category:r.props},control:"radio",options:[!0,!1]},svgPath:{options:Object.keys(o),mapping:o,table:{category:r.props}},variant:{options:[...d],control:"radio",table:{category:r.props}},ariaLive:{table:{category:r.aria}},onClose:{table:{category:r.event}}},args:{children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",showAlert:!0,variant:"neutral"}},s={},t={render:v=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"success",className:"bottomSpacingXL",showAlert:!0,children:"Filen ble lastet opp"}),e.jsx(a,{variant:"neutral",className:"bottomSpacingXL",showAlert:!0,children:"Disse feltene er låst for redigering fordi du har fått et varsel fra oss"}),e.jsx(a,{variant:"warning",className:"bottomSpacingXL",showAlert:!0,children:"Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser."}),e.jsx(a,{variant:"danger",showAlert:!0,children:"Strengt fortrolig (Kode 6)"})]})};t.parameters=g;var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{} satisfies Story",...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const u=["Preview","Examples"],j=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:s,__namedExportsOrder:u,default:f},Symbol.toStringTag,{value:"Module"}));export{j as A,t as E};
//# sourceMappingURL=Alert.stories-CoU7dt-P.js.map
