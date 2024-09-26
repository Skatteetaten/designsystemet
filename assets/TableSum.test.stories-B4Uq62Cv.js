import{j as f}from"./jsx-runtime-Nms4Y4qS.js";import{T as b}from"./index-ux_AYBE_.js";import{w as c,e as t}from"./index-hUG6DWTw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-e2J6NVvS.js";import"./index-nyVGXzax.js";import"./index-C4S6bjjo.js";import"./index-DnZXMkM7.js";const x={component:b.Sum,title:"Tester/Table/Sum",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},colSpan:{table:{disable:!0}},hasTopSeparator:{table:{disable:!0}},labelAlignment:{table:{disable:!0}},sumText:{table:{disable:!0}},valueAlignment:{table:{disable:!0}}}},u=e=>f.jsx(b.Sum,{...e,children:"9 000 kr"}),n={render:u,name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=c(e).getByRole("row");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={render:u,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=c(e).getByTestId("123ID");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb")}};var r,l,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLTableRowElement | null): void => {
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
    const table = canvas.getByRole('row');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,d,o;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
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
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const sum = canvas.getByTestId('123ID');
    await expect(sum).toHaveClass('dummyClassname');
    await expect(sum).toHaveAttribute('id', 'htmlId');
    await expect(sum).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const F=["WithRef","WithAttributes"];export{s as WithAttributes,n as WithRef,F as __namedExportsOrder,x as default};
//# sourceMappingURL=TableSum.test.stories-B4Uq62Cv.js.map
