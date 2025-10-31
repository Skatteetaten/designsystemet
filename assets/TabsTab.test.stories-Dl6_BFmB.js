import{j as a}from"./iframe-C2uFIQ6s.js";import{T as e}from"./index-EzFuruR4.js";import{P as w,L as d,k as h}from"./index-Bs2jIcy5.js";const{expect:s,within:u}=__STORYBOOK_MODULE_TEST__,I={component:e.Tab,title:"Tester/Tabs/Tab",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},svgPath:{table:{disable:!0}},value:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},m={children:"Person"},W=t=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,value:"tab1",children:"Person"}),a.jsx(e.Tab,{...t,value:"tab2",children:"Bedrift"}),a.jsx(e.Tab,{...t,value:"tab3",children:"Astronaut"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut"})]}),_=t=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:t.children}),a.jsx(e.Tab,{value:"tab2",children:"Bedrift"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),V=t=>a.jsxs(a.Fragment,{children:[a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:t.children}),a.jsx(e.Tab,{...t,svgPath:d,value:"tab2",children:"Bedrift"}),a.jsx(e.Tab,{...t,svgPath:h,value:"tab3",children:"Astronaut"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut"})]}),a.jsxs(e,{defaultValue:"tab1",variant:"compact",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:"Person 2"}),a.jsx(e.Tab,{...t,svgPath:d,value:"tab2",children:"Bedrift 2"}),a.jsx(e.Tab,{...t,svgPath:h,value:"tab3",children:"Astronaut 2"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person 2, variant compact"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift 2, variant compact"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut 2, variant compact"})]})]}),E=t=>a.jsxs(e,{defaultValue:"tab1",hasBorder:!0,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,svgPath:w,value:"tab1",children:"Person"}),a.jsx(e.Tab,{...t,svgPath:d,value:"tab2",children:"Bedrift"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),r={name:"Defaults (A2)",render:_,args:{children:"TabText",value:"tab1"},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const o=u(t).getByRole("tab",{name:"TabText"});await s(o).toBeInTheDocument()}},l={name:"With Attributes (FA2-5, B1)",render:W,args:{...m,className:"dummyClassname",lang:"nb","data-testid":"123ID",value:"TabValue"},argTypes:{id:{table:{disable:!0}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1},a11y:{test:"off"}},play:async({canvasElement:t,step:c})=>{const n=u(t).getByRole("tab",{name:"Bedrift"});await c('Autogenerert id-attributt basert på tab name "tab2"',async()=>{await s(n).toHaveAttribute("id",s.stringMatching(/^ds-tab-id-.*-tab2$/))}),await s(n).toHaveClass("dummyClassname"),await s(n).toHaveAttribute("lang","nb"),await s(n).toHaveAttribute("data-testid","123ID")}},i={name:"With Icon (A4)",render:V,args:{...m,svgPath:w,value:"tab1"},parameters:{imageSnapshot:{disable:!1}},play:async({canvasElement:t,step:c})=>{const o=u(t);await c("Sjekk om svg-ikon finnes",async()=>{const D=o.getByRole("tab",{name:"Person"}).querySelector("svg");await s(D).toBeInTheDocument()})}},b={name:"With Border (A1",render:E,args:{...m,value:"tab2"}};var v,p,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Defaults (A2)',
  render: TemplateTabsTab,
  args: {
    children: 'TabText',
    value: 'tab1'
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', {
      name: 'TabText'
    });
    await expect(tab).toBeInTheDocument();
  }
} satisfies Story`,...(T=(p=r.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var g,f,P;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5, B1)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    value: 'TabValue'
  },
  argTypes: {
    id: {
      table: {
        disable: true
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
      disable: false
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
    const tab = canvas.getByRole('tab', {
      name: 'Bedrift'
    });
    await step('Autogenerert id-attributt basert på tab name "tab2"', async () => {
      await expect(tab).toHaveAttribute('id', expect.stringMatching(/^ds-tab-id-.*-tab2$/));
    });
    await expect(tab).toHaveClass('dummyClassname');
    await expect(tab).toHaveAttribute('lang', 'nb');
    await expect(tab).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(P=(f=l.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var x,j,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With Icon (A4)',
  render: TemplateTabsIcon,
  args: {
    ...defaultArgs,
    svgPath: PersonSVGpath,
    value: 'tab1'
  },
  parameters: {
    imageSnapshot: {
      disable: false
    }
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Sjekk om svg-ikon finnes', async () => {
      const tab = canvas.getByRole('tab', {
        name: 'Person'
      });
      const svg = tab.querySelector('svg');
      await expect(svg).toBeInTheDocument();
    });
  }
} satisfies Story`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var B,A,S;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'With Border (A1',
  render: TemplateTabsBorder,
  args: {
    ...defaultArgs,
    value: 'tab2'
  }
} satisfies Story`,...(S=(A=b.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const k=["Defaults","WithAttributes","WithIcon","WithBorder"],O=Object.freeze(Object.defineProperty({__proto__:null,Defaults:r,WithAttributes:l,WithBorder:b,WithIcon:i,__namedExportsOrder:k,default:I},Symbol.toStringTag,{value:"Module"}));export{O as T};
//# sourceMappingURL=TabsTab.test.stories-Dl6_BFmB.js.map
