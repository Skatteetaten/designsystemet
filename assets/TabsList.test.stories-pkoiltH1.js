import{j as a}from"./iframe-Br1Xu9zr.js";import{T as e}from"./index-D26qgz4H.js";const n={component:e.List,title:"Tester/Tabs/List",argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!1}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},l=t=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{...t,children:[a.jsx(e.Tab,{value:"tab1",children:"Person"}),a.jsx(e.Tab,{value:"tab2",children:"Bedrift"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Panel"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),s={name:"With Attributes (FA2-5, B1)",render:l,args:{className:"dummyClassname",lang:"nb","data-testid":"123ID",children:[a.jsx(e.Tab,{value:"tab1",children:"Person"},"k1"),a.jsx(e.Tab,{value:"tab2",children:"Bedrift"},"k1")]},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5, B1)',
  render: TemplateTabsList,
  args: {
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    children: [<Tabs.Tab key={'k1'} value={'tab1'}>
        {'Person'}
      </Tabs.Tab>, <Tabs.Tab key={'k1'} value={'tab2'}>
        {'Bedrift'}
      </Tabs.Tab>]
  },
  argTypes: {
    id: {
      table: {
        disable: false
      }
    },
    className: {
      table: {
        disable: false
      }
    },
    lang: {
      table: {
        disable: false
      }
    },
    'data-testid': {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    a11y: {
      test: 'off'
    }
  }
} satisfies Story`,...s.parameters?.docs?.source}}};const r=["WithAttributes"],d=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:s,__namedExportsOrder:r,default:n},Symbol.toStringTag,{value:"Module"}));export{d as T};
//# sourceMappingURL=TabsList.test.stories-pkoiltH1.js.map
