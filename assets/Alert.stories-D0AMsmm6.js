import{j as e,e as t}from"./iframe-s2_bNgHU.js";import{A as r,b as g}from"./index-DdQvxWAg.js";import{S as m}from"./icon.systems-DJyjpAy9.js";function n(){var o="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/apps/ds-playground/src/stories/components/Alert/AlertExample.tsx",p="c5cdd9951b92b05a654103e7491f669f737a6834",l=globalThis,i="__coverage__",d={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/apps/ds-playground/src/stories/components/Alert/AlertExample.tsx",statementMap:{0:{start:{line:3,column:21},end:{line:11,column:1}},1:{start:{line:4,column:2},end:{line:10,column:7}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:21},end:{line:3,column:22}},loc:{start:{line:3,column:27},end:{line:11,column:1}},line:3}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/var/jenkins_home/workspace/gnsystemet_designsystemet_master/apps/ds-playground/src/stories/components/Alert/AlertExample.tsx"],names:[],mappings:"AAMI,mBACE,KADF;AAJJ,SAAS,aAAa;AAEtB,MAAM,eAAe,MAAmB;AACtC,SACE,iCACE;AAAA,wBAAC,SAAM,SAAS,QAAQ,WAAW,mBAAmB,WAAS,MAE3D,sFAEJ;AAAA,IACA,oBAAC,SAAM,SAAS,WAAW,WAAW,mBAAmB,WAAS,MAC/D,kCACH;AAAA,IAEA,oBAAC,SAAM,SAAS,WAAW,WAAW,mBAAmB,WAAS,MAE9D,kGAEJ;AAAA,IACA,oBAAC,SAAM,SAAS,SAAS,WAAW,mBAAmB,WAAS,MAE5D,sFAEJ;AAAA,IACA,oBAAC,SAAM,SAAS,UAAU,WAAS,MAChC,wCACH;AAAA,KACF;AAEJ;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c5cdd9951b92b05a654103e7491f669f737a6834"},A=l[i]||(l[i]={});(!A[o]||A[o].hash!==p)&&(A[o]=d);var c=A[o];return n=function(){return c},c}n();n().s[0]++;const u=()=>(n().f[0]++,n().s[1]++,e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"info",className:"bottomSpacingXL",showAlert:!0,children:"Disse feltene er låst for redigering fordi du har fått et varsel fra oss"}),e.jsx(r,{variant:"success",className:"bottomSpacingXL",showAlert:!0,children:"Filen ble lastet opp"}),e.jsx(r,{variant:"warning",className:"bottomSpacingXL",showAlert:!0,children:"Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser."}),e.jsx(r,{variant:"error",className:"bottomSpacingXL",showAlert:!0,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon."}),e.jsx(r,{variant:"danger",showAlert:!0,children:"Strengt fortrolig (Kode 6)"})]})),f=`import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';

const AlertExample = (): JSX.Element => {
  return (
    <>
      <Alert variant={'info'} className={'bottomSpacingXL'} showAlert>
        {
          'Disse feltene er låst for redigering fordi du har fått et varsel fra oss'
        }
      </Alert>
      <Alert variant={'success'} className={'bottomSpacingXL'} showAlert>
        {'Filen ble lastet opp'}
      </Alert>

      <Alert variant={'warning'} className={'bottomSpacingXL'} showAlert>
        {
          'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.'
        }
      </Alert>
      <Alert variant={'error'} className={'bottomSpacingXL'} showAlert>
        {
          'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
        }
      </Alert>
      <Alert variant={'danger'} showAlert>
        {'Strengt fortrolig (Kode 6)'}
      </Alert>
    </>
  );
};

export default AlertExample;
`,v={component:r,title:"Komponenter/Alert",argTypes:{children:{control:"text",table:{category:t.props}},backgroundBrightness:{table:{category:t.props,defaultValue:{summary:g()}}},showAlert:{table:{category:t.props}},svgPath:{options:Object.keys(m),mapping:m,table:{category:t.props}},variant:{table:{category:t.props}},ariaLive:{table:{category:t.aria}},onClose:{table:{category:t.event}}},args:{children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",showAlert:!0,variant:"warning"}},a={},s={parameters:{docs:{codePanel:!0,source:{code:f,type:"auto",language:"tsx"}},controls:{exclude:/.*/}},render:()=>e.jsx(u,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{} satisfies Story",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      codePanel: true,
      source: {
        code: alertExampleCode,
        type: 'auto',
        language: 'tsx'
      }
    },
    controls: {
      exclude: /.*/
    }
  },
  render: (): JSX.Element => <AlertExample />
} satisfies Story`,...s.parameters?.docs?.source}}};const S=["Preview","Examples"],x=Object.freeze(Object.defineProperty({__proto__:null,Examples:s,Preview:a,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{x as A,s as E};
//# sourceMappingURL=Alert.stories-D0AMsmm6.js.map
