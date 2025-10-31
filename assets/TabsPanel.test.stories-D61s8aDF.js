import{j as t}from"./iframe-C2uFIQ6s.js";import{T as e}from"./index-EzFuruR4.js";const{within:T,expect:a,userEvent:g}=__STORYBOOK_MODULE_TEST__,x={component:e.Panel,title:"Tester/Tabs/Panel",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},keepMounted:{table:{disable:!0}},children:{table:{disable:!1}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},f=n=>t.jsxs(e,{defaultValue:"tab1",children:[t.jsxs(e.List,{children:[t.jsx(e.Tab,{value:"tab1",children:"Person"}),t.jsx(e.Tab,{value:"tab2",children:"Bedrift"})]}),t.jsx(e.Panel,{...n,value:"tab1",children:"PanelInnhold"}),t.jsx(e.Panel,{...n,value:"tab2",children:"Tabs.Panel Bedrift"})]}),o={name:"With Attributes (FA2-5, B1)",render:f,args:{className:"dummyClassname",lang:"nb","data-testid":"123ID",children:"PanelInnhold",value:"tab1"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:n,step:s})=>{const i=T(n);await s('Autogenerert id-attributt basert på tab name "tab1"',async()=>{const l=i.getByRole("tabpanel",{name:"Person",hidden:!0});await a(l).toHaveAttribute("id",a.stringMatching(/^ds-tab-panel-.*-tab1$/)),await a(l).toHaveClass("dummyClassname"),await a(l).toHaveAttribute("lang","nb"),await a(l).toHaveAttribute("data-testid","123ID")})}},B=n=>t.jsxs(e,{defaultValue:"tab1",children:[t.jsxs(e.List,{children:[t.jsx(e.Tab,{value:"tab1",children:"Tab 1"}),t.jsx(e.Tab,{value:"tab2",children:"Tab 2"})]}),t.jsx(e.Panel,{value:"tab1",keepMounted:n.keepMounted,children:"Content Tab 1"}),t.jsx(e.Panel,{value:"tab2",keepMounted:n.keepMounted,children:"Content Tab 2"})]}),b={name:"With KeepMounted False (A6)",render:B,args:{keepMounted:!1,children:"Test content",value:"tab1"},argTypes:{keepMounted:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const s=T(n),i=s.getByRole("tabpanel",{name:"Tab 1"});a(i).toBeInTheDocument(),a(i).not.toHaveAttribute("hidden");const l=s.queryByText("Content Tab 2");a(l).not.toBeInTheDocument();const v=s.getByRole("tab",{name:"Tab 2"});await g.click(v);const r=s.getByRole("tabpanel",{name:"Tab 2"});a(r).toBeInTheDocument(),a(r).not.toHaveAttribute("hidden");const y=s.queryByText("Content Tab 1");a(y).not.toBeInTheDocument()}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5, B1)',
  render: TemplateTabs,
  args: {
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    children: 'PanelInnhold',
    value: 'tab1'
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
    imageSnapshot: {
      disableSnapshot: true
    },
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Autogenerert id-attributt basert på tab name "tab1"', async () => {
      const tabpanel = canvas.getByRole('tabpanel', {
        name: 'Person',
        hidden: true
      });
      await expect(tabpanel).toHaveAttribute('id', expect.stringMatching(/^ds-tab-panel-.*-tab1$/));
      await expect(tabpanel).toHaveClass('dummyClassname');
      await expect(tabpanel).toHaveAttribute('lang', 'nb');
      await expect(tabpanel).toHaveAttribute('data-testid', '123ID');
    });
  }
} satisfies Story`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,h;b.parameters={...b.parameters,docs:{...(p=b.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'With KeepMounted False (A6)',
  render: TemplateWithKeepMounted,
  args: {
    keepMounted: false,
    children: 'Test content',
    value: 'tab1'
  },
  argTypes: {
    keepMounted: {
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

    // Initially tab1 should be active and visible, tab2 content should not be in DOM
    const tab1Panel = canvas.getByRole('tabpanel', {
      name: 'Tab 1'
    });
    expect(tab1Panel).toBeInTheDocument();
    expect(tab1Panel).not.toHaveAttribute('hidden');
    const tab2Content = canvas.queryByText('Content Tab 2');
    expect(tab2Content).not.toBeInTheDocument();

    // Click tab2 to switch
    const tab2Button = canvas.getByRole('tab', {
      name: 'Tab 2'
    });
    await userEvent.click(tab2Button);

    // Now tab2 should be visible, tab1 content should be removed from DOM
    const tab2Panel = canvas.getByRole('tabpanel', {
      name: 'Tab 2'
    });
    expect(tab2Panel).toBeInTheDocument();
    expect(tab2Panel).not.toHaveAttribute('hidden');
    const tab1Content = canvas.queryByText('Content Tab 1');
    expect(tab1Content).not.toBeInTheDocument();
  }
} satisfies Story`,...(h=(m=b.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const P=["WithAttributes","WithKeepMountedFalse"],C=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:o,WithKeepMountedFalse:b,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{C as T};
//# sourceMappingURL=TabsPanel.test.stories-D61s8aDF.js.map
