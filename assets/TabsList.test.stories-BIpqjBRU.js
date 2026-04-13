import{j as e}from"./iframe-_BeEUj9n.js";import{T as a}from"./index-CBVTTW59.js";const{expect:b,within:d}=__STORYBOOK_MODULE_TEST__,o={component:a.List,title:"Tester/Tabs/List",argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!1}},ariaLabel:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=n=>e.jsxs(a,{defaultValue:"tab1",children:[e.jsxs(a.List,{...n,children:[e.jsx(a.Tab,{value:"tab1",children:"Person"}),e.jsx(a.Tab,{value:"tab2",children:"Bedrift"})]}),e.jsx(a.Panel,{value:"tab1",children:"Tabs.Panel Panel"}),e.jsx(a.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),t={name:"With Attributes (FA2-5, B1)",render:r,args:{className:"dummyClassname",lang:"nb","data-testid":"123ID",children:[e.jsx(a.Tab,{value:"tab1",children:"Person"},"k1"),e.jsx(a.Tab,{value:"tab2",children:"Bedrift"},"k1")]},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}}},l="Velg type",s={name:"With AriaLabel",render:r,args:{ariaLabel:l,children:[e.jsx(a.Tab,{value:"tab1",children:"Person"},"k1"),e.jsx(a.Tab,{value:"tab2",children:"Bedrift"},"k2")]},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const i=d(n).getByRole("tablist");await b(i).toHaveAttribute("aria-label",l)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With AriaLabel',
  render: TemplateTabsList,
  args: {
    ariaLabel,
    children: [<Tabs.Tab key={'k1'} value={'tab1'}>
        {'Person'}
      </Tabs.Tab>, <Tabs.Tab key={'k2'} value={'tab2'}>
        {'Bedrift'}
      </Tabs.Tab>]
  },
  argTypes: {
    ariaLabel: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const tablist = canvas.getByRole('tablist');
    await expect(tablist).toHaveAttribute('aria-label', ariaLabel);
  }
} satisfies Story`,...s.parameters?.docs?.source}}};const c=["WithAttributes","WithAriaLabel"],p=Object.freeze(Object.defineProperty({__proto__:null,WithAriaLabel:s,WithAttributes:t,__namedExportsOrder:c,default:o},Symbol.toStringTag,{value:"Module"}));export{p as T};
//# sourceMappingURL=TabsList.test.stories-BIpqjBRU.js.map
