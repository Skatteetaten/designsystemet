import{j as e}from"./iframe-DyzX2HZk.js";import{T as a}from"./index-GCI7kVAR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cocas2j2.js";import"./index-tiKhdOIe.js";import"./index-CkEqEoBc.js";import"./index-C34PYbPl.js";import"./index-CMkU_MzX.js";const{expect:b,within:d}=__STORYBOOK_MODULE_TEST__,v={component:a.List,title:"Tester/Tabs/List",argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!1}},ariaLabel:{table:{disable:!0}}},tags:["test"]},r=n=>e.jsxs(a,{defaultValue:"tab1",children:[e.jsxs(a.List,{...n,children:[e.jsx(a.Tab,{value:"tab1",children:"Person"}),e.jsx(a.Tab,{value:"tab2",children:"Bedrift"})]}),e.jsx(a.Panel,{value:"tab1",children:"Tabs.Panel Panel"}),e.jsx(a.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),t={name:"With Attributes (FA2-5, B1)",render:r,args:{className:"dummyClassname",lang:"nb","data-testid":"123ID",children:[e.jsx(a.Tab,{value:"tab1",children:"Person"},"k1"),e.jsx(a.Tab,{value:"tab2",children:"Bedrift"},"k1")]},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}}},l="Velg type",s={name:"With AriaLabel",render:r,args:{ariaLabel:l,children:[e.jsx(a.Tab,{value:"tab1",children:"Person"},"k1"),e.jsx(a.Tab,{value:"tab2",children:"Bedrift"},"k2")]},argTypes:{ariaLabel:{table:{disable:!1}}},play:async({canvasElement:n})=>{const i=d(n).getByRole("tablist");await b(i).toHaveAttribute("aria-label",l)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const tablist = canvas.getByRole('tablist');
    await expect(tablist).toHaveAttribute('aria-label', ariaLabel);
  }
} satisfies Story`,...s.parameters?.docs?.source}}};const g=["WithAttributes","WithAriaLabel"];export{s as WithAriaLabel,t as WithAttributes,g as __namedExportsOrder,v as default};
//# sourceMappingURL=TabsList.test.stories-DaYu_zcW.js.map
