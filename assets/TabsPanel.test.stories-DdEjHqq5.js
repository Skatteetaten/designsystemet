import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{T as a}from"./index-BdaHGl3n.js";import{w as m,e as t}from"./index-B8otpkpo.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C498nvnC.js";import"./index-C3Vp3Ydz.js";import"./index-CKHxS2Ra.js";import"./index-jWwGX2yX.js";import"./index-BjzvYn6A.js";import"./index-DWqb7jS3.js";const P={component:a.Panel,title:"Tester/Tabs/Panel",argTypes:{ref:{table:{disable:!0}},key:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!1}}}},p=i=>e.jsxs(a,{defaultValue:"tab1",children:[e.jsxs(a.List,{children:[e.jsx(a.Tab,{value:"tab1",children:"Person"}),e.jsx(a.Tab,{value:"tab2",children:"Bedrift"})]}),e.jsx(a.Panel,{...i,children:"PanelInnhold"}),e.jsx(a.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"})]}),l={name:"With Attributes (FA2-5, B1)",render:p,args:{className:"dummyClassname",lang:"nb","data-testid":"123ID",children:"PanelInnhold",value:"tab1"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{HTMLSnapshot:{disable:!0}},play:async({canvasElement:i,step:d})=>{const o=m(i);await d('Autogenerert id-attributt basert på tab name "tab1"',async()=>{const s=o.getByRole("tabpanel",{name:"Person",hidden:!0});await t(s).toHaveAttribute("id",t.stringMatching(/^ds-tab-panel-.*-tab1$/)),await t(s).toHaveClass("dummyClassname"),await t(s).toHaveAttribute("lang","nb"),await t(s).toHaveAttribute("data-testid","123ID")})}};var n,r,b;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    HTMLSnapshot: {
      disable: true
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
} satisfies Story`,...(b=(r=l.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};const H=["WithAttributes"];export{l as WithAttributes,H as __namedExportsOrder,P as default};
//# sourceMappingURL=TabsPanel.test.stories-DdEjHqq5.js.map