import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{w as u,e as s}from"./index-DIxTUSTt.js";import{T as e}from"./index-B7e1UgbU.js";import{P as w,L as d,i as h}from"./index-MCo35TjR.js";import"./index-EsEcB_zD.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-TStLVSlm.js";import"./index-_-BAtSXr.js";import"./index-B4uH14t0.js";import"./index-SYCMKRjb.js";const $={component:e.Tab,title:"Tester/Tabs/Tab",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},svgPath:{table:{disable:!0}},value:{table:{disable:!0}}}},m={children:"Person"},D=t=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,value:"tab1",children:"Person"}),a.jsx(e.Tab,{...t,value:"tab2",children:"Bedrift"}),a.jsx(e.Tab,{...t,value:"tab3",children:"Astronaut"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut"})]}),W=t=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:t.children}),a.jsx(e.Tab,{value:"tab2",children:"Bedrift"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),V=t=>a.jsxs(a.Fragment,{children:[a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:t.children}),a.jsx(e.Tab,{...t,svgPath:d,value:"tab2",children:"Bedrift"}),a.jsx(e.Tab,{...t,svgPath:h,value:"tab3",children:"Astronaut"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut"})]}),a.jsxs(e,{defaultValue:"tab1",variant:"compact",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:"Person 2"}),a.jsx(e.Tab,{...t,svgPath:d,value:"tab2",children:"Bedrift 2"}),a.jsx(e.Tab,{...t,svgPath:h,value:"tab3",children:"Astronaut 2"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person 2, variant compact"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift 2, variant compact"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut 2, variant compact"})]})]}),H=t=>a.jsxs(e,{defaultValue:"tab1",hasBorder:!0,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,svgPath:w,value:"tab1",children:"Person"}),a.jsx(e.Tab,{...t,svgPath:d,value:"tab2",children:"Bedrift"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),i={name:"Defaults (A2)",render:W,args:{children:"TabText",value:"tab1"},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const l=u(t).getByRole("tab",{name:"TabText"});await s(l).toBeInTheDocument()}},b={name:"With Attributes (FA2-5, B1)",render:D,args:{...m,className:"dummyClassname",lang:"nb","data-testid":"123ID",value:"TabValue"},argTypes:{id:{table:{disable:!0}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{HTMLSnapshot:{disable:!0},imageSnapshot:{disable:!1}},play:async({canvasElement:t,step:r})=>{const n=u(t).getByRole("tab",{name:"Bedrift"});await r('Autogenerert id-attributt basert på tab name "tab2"',async()=>{await s(n).toHaveAttribute("id",s.stringMatching(/^ds-tab-id-.*-tab2$/))}),await s(n).toHaveClass("dummyClassname"),await s(n).toHaveAttribute("lang","nb"),await s(n).toHaveAttribute("data-testid","123ID")}},o={name:"With Icon (A4)",render:V,args:{...m,svgPath:w,value:"tab1"},parameters:{imageSnapshot:{disable:!1}},play:async({canvasElement:t,step:r})=>{const l=u(t);await r("Sjekk om svg-ikon finnes",async()=>{const I=l.getByRole("tab",{name:"Person"}).querySelector("svg");await s(I).toBeInTheDocument()})}},c={name:"With Border (A1",render:H,args:{...m,value:"tab2"}};var p,v,T;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var P,g,x;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    HTMLSnapshot: {
      disable: true
    },
    imageSnapshot: {
      disable: false
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
} satisfies Story`,...(x=(g=b.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,j,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var B,A,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'With Border (A1',
  render: TemplateTabsBorder,
  args: {
    ...defaultArgs,
    value: 'tab2'
  }
} satisfies Story`,...(S=(A=c.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const O=["Defaults","WithAttributes","WithIcon","WithBorder"];export{i as Defaults,b as WithAttributes,c as WithBorder,o as WithIcon,O as __namedExportsOrder,$ as default};
//# sourceMappingURL=TabsTab.test.stories-CFJGkLZT.js.map
