import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{T as e}from"./index-DrpnSDyL.js";import{P as S,L as o,D as h}from"./index-nyVGXzax.js";import{w as u,e as n}from"./index-hUG6DWTw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-e2J6NVvS.js";import"./index-C4S6bjjo.js";import"./index-DnZXMkM7.js";import"./index-C5i69K7H.js";import"./index-BpsKvWdW.js";const _={component:e.Tab,title:"Tester/Tabs/Tab",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},svgPath:{table:{disable:!0}},value:{table:{disable:!0}}}},m={children:"Person"},D=t=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,value:"tab1",children:"Person"}),a.jsx(e.Tab,{...t,value:"tab2",children:"Bedrift"}),a.jsx(e.Tab,{...t,value:"tab3",children:"Astronaut"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut"})]}),H=t=>a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:t.children}),a.jsx(e.Tab,{value:"tab2",children:"Bedrift"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),I=t=>a.jsxs(a.Fragment,{children:[a.jsxs(e,{defaultValue:"tab1",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:t.children}),a.jsx(e.Tab,{...t,svgPath:o,value:"tab2",children:"Bedrift"}),a.jsx(e.Tab,{...t,svgPath:h,value:"tab3",children:"Astronaut"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut"})]}),a.jsxs(e,{defaultValue:"tab1",variant:"compact",children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,children:"Person 2"}),a.jsx(e.Tab,{...t,svgPath:o,value:"tab2",children:"Bedrift 2"}),a.jsx(e.Tab,{...t,svgPath:h,value:"tab3",children:"Astronaut 2"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person 2, variant compact"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift 2, variant compact"}),a.jsx(e.Panel,{value:"tab3",children:"Tabs.Panel Astronaut 2, variant compact"})]})]}),W=t=>a.jsxs(e,{defaultValue:"tab1",hasBorder:!0,children:[a.jsxs(e.List,{children:[a.jsx(e.Tab,{...t,svgPath:S,value:"tab1",children:"Person"}),a.jsx(e.Tab,{...t,svgPath:o,value:"tab2",children:"Bedrift"})]}),a.jsx(e.Panel,{value:"tab1",children:"Tabs.Panel Person"}),a.jsx(e.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),i={name:"Defaults (A2)",render:H,args:{children:"TabText",value:"tab1"},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const l=u(t).getByRole("tab",{name:"TabText"});await n(l).toBeInTheDocument()}},b={name:"With Attributes (FA2-5, B1)",render:D,args:{...m,className:"dummyClassname",lang:"nb","data-testid":"123ID",value:"TabValue"},argTypes:{id:{table:{disable:!0}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{HTMLSnapshot:{disable:!0},imageSnapshot:{disable:!1}},play:async({canvasElement:t,step:r})=>{const s=u(t).getByRole("tab",{name:"Bedrift"});await r('Autogenerert id-attributt basert på tab name "tab2"',async()=>{await n(s).toHaveAttribute("id",n.stringMatching(/^ds-tab-id-.*-tab2$/))}),await n(s).toHaveClass("dummyClassname"),await n(s).toHaveAttribute("lang","nb"),await n(s).toHaveAttribute("data-testid","123ID")}},d={name:"With Icon (A4)",render:I,args:{...m,svgPath:S,value:"tab1"},parameters:{imageSnapshot:{disable:!1}},play:async({canvasElement:t,step:r})=>{const l=u(t);await r("Sjekk om svg-ikon finnes",async()=>{const s=l.getByRole("tab",{name:"Person"});await n(s).toHaveAttribute("id",n.stringMatching(/^ds-tab-id-.*-tab1$/))})}},c={name:"With Border (A1",render:W,args:{...m,value:"tab2"}};var p,v,T;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var x,P,g;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(P=b.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};var f,j,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      await expect(tab).toHaveAttribute('id', expect.stringMatching(/^ds-tab-id-.*-tab1$/));
    });
  }
} satisfies Story`,...(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var A,B,w;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Border (A1',
  render: TemplateTabsBorder,
  args: {
    ...defaultArgs,
    value: 'tab2'
  }
} satisfies Story`,...(w=(B=c.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const O=["Defaults","WithAttributes","WithIcon","WithBorder"];export{i as Defaults,b as WithAttributes,c as WithBorder,d as WithIcon,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=TabsTab.test.stories-BxM8O5Pn.js.map