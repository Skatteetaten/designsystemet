import{j as i}from"./iframe-Cq9sN_Dz.js";import{L as b}from"./index-DskRqDMQ.js";const{expect:a,within:u}=__STORYBOOK_MODULE_TEST__,y={component:b.Element,title:"Tester/List/Element",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},p={children:"Kjenner du behovet til brukeren?"},f=e=>i.jsx("ul",{children:i.jsx(b.Element,{...e})}),s={render:f,name:"With Ref (FA1)",args:{...p,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=u(e).getByRole("listitem");await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},n={render:f,name:"With Attributes (FA2-5)",args:{...p,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=u(e).getByRole("listitem");await a(t).toHaveAttribute("id","htmlid"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}};var l,r,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('listitem');
    await expect(list).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(d=(r=s.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var o,m,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const v=["WithRef","WithAttributes"],w=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:n,WithRef:s,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{w as L};
//# sourceMappingURL=ListElement.test.stories-DgyTfbyN.js.map
