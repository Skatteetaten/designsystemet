import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./index-ChzTQA-a.js";import{g,A as t}from"./index-UoIuQY3B.js";import{c as r}from"./helpers-B7KPg_So.js";import{S as o}from"./icon.systems-BnMBg8hx.js";import{e as d}from"./stories.utils-Ys3NG0dr.js";import{s as f}from"./base-props.types-DUvlOF9f.js";const u={component:t,title:"Komponenter/Alert",argTypes:{children:{control:"text",table:{category:r.props}},backgroundBrightness:{table:{category:r.props,defaultValue:{summary:g()}}},showAlert:{table:{category:r.props},control:"radio",options:[!0,!1]},svgPath:{options:Object.keys(o),mapping:o,table:{category:r.props}},variant:{options:[...f],control:"radio",table:{category:r.props}},ariaLive:{table:{category:r.aria}},onClose:{table:{category:r.event}}},args:{children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",showAlert:!0,variant:"warning"}},s={},a={render:A=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"info",className:"bottomSpacingXL",showAlert:!0,children:"Disse feltene er låst for redigering fordi du har fått et varsel fra oss"}),e.jsx(t,{variant:"success",className:"bottomSpacingXL",showAlert:!0,children:"Filen ble lastet opp"}),e.jsx(t,{variant:"warning",className:"bottomSpacingXL",showAlert:!0,children:"Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser."}),e.jsx(t,{variant:"error",className:"bottomSpacingXL",showAlert:!0,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon."}),e.jsx(t,{variant:"danger",showAlert:!0,children:"Strengt fortrolig (Kode 6)"})]})};a.parameters=d;var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{} satisfies Story",...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const v=["Preview","Examples"],x=Object.freeze(Object.defineProperty({__proto__:null,Examples:a,Preview:s,__namedExportsOrder:v,default:u},Symbol.toStringTag,{value:"Module"}));export{x as A,a as E};
//# sourceMappingURL=Alert.stories-BaGD_y74.js.map
