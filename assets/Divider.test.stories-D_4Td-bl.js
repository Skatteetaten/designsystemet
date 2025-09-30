import{w as m,e as t}from"./index-DIxTUSTt.js";import{a as F}from"./index-sjPb88pE.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-CGk5cNE3.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfnG5Ebn.js";import"./index-DAV9Xejq.js";import"./index-uxUkjR_c.js";import"./index-B0Glj4sP.js";const j={component:F,title:"Tester/Divider",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},spacingTop:{table:{disable:!0}},spacingBottom:{table:{disable:!0}},variant:{table:{disable:!0}},ariaHidden:{table:{disable:!0}}}},s={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=m(a).getByRole("separator");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=m(a).getByRole("separator");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id","htmlId"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},i={name:"Defaults (A1)"},d={name:"With Strong (A3)",args:{variant:"strong"},argTypes:{variant:{table:{disable:!1}}}},o={name:"Is <hr>-element (B1)",parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=m(a);await t(n.getByRole("separator").nodeName).toBe("HR")}},l={name:"With ariaHidden (B2)",args:{ariaHidden:"true"},argTypes:{ariaHidden:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=m(a).getByRole("separator",{hidden:!0});await t(e).toHaveAttribute("aria-hidden","true")}};var c,p,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLHRElement | null): void => {
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
    const divider = canvas.getByRole('separator');
    await expect(divider).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,v,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const divider = canvas.getByRole('separator');
    await expect(divider).toHaveClass('dummyClassname');
    await expect(divider).toHaveAttribute('id', 'htmlId');
    await expect(divider).toHaveAttribute('lang', 'nb');
    await expect(divider).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,f,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Defaults (A1)'
} satisfies Story`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var H,w,A;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With Strong (A3)',
  args: {
    variant: 'strong'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var S,R,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Is <hr>-element (B1)',
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('separator').nodeName).toBe('HR');
  }
} satisfies Story`,...(I=(R=o.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var W,B,E;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'With ariaHidden (B2)',
  args: {
    ariaHidden: 'true'
  },
  argTypes: {
    ariaHidden: {
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
    const divider = canvas.getByRole('separator', {
      hidden: true
    });
    await expect(divider).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const k=["WithRef","WithAttributes","Defaults","WithStrong","IsHRElement","WithAriaHidden"];export{i as Defaults,o as IsHRElement,l as WithAriaHidden,r as WithAttributes,s as WithRef,d as WithStrong,k as __namedExportsOrder,j as default};
//# sourceMappingURL=Divider.test.stories-D_4Td-bl.js.map
