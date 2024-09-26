import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{L as b}from"./index-BpsKvWdW.js";import{w as u,e as a}from"./index-hUG6DWTw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-e2J6NVvS.js";const R={component:b.Element,title:"Tester/List/Element",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"}}},p={children:"Kjenner du behovet til brukeren?"},f=e=>i.jsx("ul",{children:i.jsx(b.Element,{...e})}),s={render:f,name:"With Ref (FA1)",args:{...p,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=u(e).getByRole("listitem");await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},n={render:f,name:"With Attributes (FA2-5)",args:{...p,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=u(e).getByRole("listitem");await a(t).toHaveAttribute("id","htmlid"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}};var l,r,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLLIElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    }
  },
  argTypes: {
    ref: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('listitem');
    await expect(list).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(d=(r=s.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var m,o,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID'
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('listitem');
    await expect(list).toHaveAttribute('id', 'htmlid');
    await expect(list).toHaveClass('dummyClassname');
    await expect(list).toHaveAttribute('lang', 'nb');
    await expect(list).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const F=["WithRef","WithAttributes"];export{n as WithAttributes,s as WithRef,F as __namedExportsOrder,R as default};
//# sourceMappingURL=ListElement.test.stories-Gd_cvBrn.js.map
