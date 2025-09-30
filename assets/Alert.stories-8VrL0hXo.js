import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{g as p,A as t}from"./index-Bid14VJj.js";import{c as r}from"./helpers-B90wjoUE.js";import{S as o}from"./icon.systems-DGFW7KrD.js";import{e as d}from"./stories.utils-Ys3NG0dr.js";const f={component:t,title:"Komponenter/Alert",argTypes:{children:{control:"text",table:{category:r.props}},backgroundBrightness:{table:{category:r.props,defaultValue:{summary:p()}}},showAlert:{table:{category:r.props}},svgPath:{options:Object.keys(o),mapping:o,table:{category:r.props}},variant:{table:{category:r.props}},ariaLive:{table:{category:r.aria}},onClose:{table:{category:r.event}}},args:{children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",showAlert:!0,variant:"warning"}},s={},a={render:v=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"info",className:"bottomSpacingXL",showAlert:!0,children:"Disse feltene er låst for redigering fordi du har fått et varsel fra oss"}),e.jsx(t,{variant:"success",className:"bottomSpacingXL",showAlert:!0,children:"Filen ble lastet opp"}),e.jsx(t,{variant:"warning",className:"bottomSpacingXL",showAlert:!0,children:"Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser."}),e.jsx(t,{variant:"error",className:"bottomSpacingXL",showAlert:!0,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon."}),e.jsx(t,{variant:"danger",showAlert:!0,children:"Strengt fortrolig (Kode 6)"})]})};a.parameters=d;var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{} satisfies Story",...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const u=["Preview","Examples"],j=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:s,__namedExportsOrder:u,default:f},Symbol.toStringTag,{value:"Module"}));export{j as A,a as E};
//# sourceMappingURL=Alert.stories-8VrL0hXo.js.map
