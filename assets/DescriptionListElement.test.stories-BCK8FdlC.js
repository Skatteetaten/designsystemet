import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{D as f}from"./index-C5i69K7H.js";import{w as b,e as s}from"./index-hUG6DWTw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-e2J6NVvS.js";import"./index-BpsKvWdW.js";const D={component:f.Element,title:"Tester/DescriptionList/Element",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},term:{table:{disable:!0}}},args:{term:"Ansvarlig fagperson",children:"Kenneth Performance"},decorators:[e=>r.jsx("dl",{children:r.jsx(e,{})})]},p={},t={name:"With Ref (FA1)",args:{...p,"data-testid":"123ID",ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=b(e).getByTestId("123ID");await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},n={name:"With Attributes (FA2-5)",args:{...p,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=b(e).getByTestId("123ID");await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveAttribute("lang","nb")}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    'data-testid': '123ID',
    ref: (instance: HTMLDListElement | null): void => {
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
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var o,m,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
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
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const F=["WithRef","WithAttributes"];export{n as WithAttributes,t as WithRef,F as __namedExportsOrder,D as default};
//# sourceMappingURL=DescriptionListElement.test.stories-BCK8FdlC.js.map
