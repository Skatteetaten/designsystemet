import{w as l,e as a}from"./index-DIxTUSTt.js";import{T as y}from"./index-QDa3CmGl.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGk5cNE3.js";import"./index-CgEl4Pzg.js";import"./index-Du3yX_TW.js";import"./index-uxUkjR_c.js";const k={component:y.Sum,title:"Tester/Table/Sum",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},colSpan:{table:{disable:!0}},hasTopSeparator:{table:{disable:!0}},labelAlignment:{table:{disable:!0}},sumText:{table:{disable:!0}},valueAlignment:{table:{disable:!0}}},args:{children:"9 000 kr"}},s={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=l(e).getByRole("row");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=l(e).getByTestId("123ID");await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveAttribute("lang","nb")}},i={name:"With Multiple Sums",args:{children:["400 kr","899 kr","399 kr"]},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=l(e);await a(n.getByText("400 kr")).toBeInTheDocument(),await a(n.getByText("899 kr")).toBeInTheDocument(),await a(n.getByText("399 kr")).toBeInTheDocument()}};var m,o,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,b,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,g,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'With Multiple Sums',
  args: {
    children: ['400 kr', '899 kr', '399 kr']
  },
  argTypes: {
    children: {
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
    await expect(canvas.getByText('400 kr')).toBeInTheDocument();
    await expect(canvas.getByText('899 kr')).toBeInTheDocument();
    await expect(canvas.getByText('399 kr')).toBeInTheDocument();
  }
} satisfies Story`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const D=["WithRef","WithAttributes","WithMultipleSums"];export{r as WithAttributes,i as WithMultipleSums,s as WithRef,D as __namedExportsOrder,k as default};
//# sourceMappingURL=TableSum.test.stories-Cx4xUl37.js.map
