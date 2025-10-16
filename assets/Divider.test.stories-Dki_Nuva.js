import{a as E}from"./index-CHHc706Z.js";const{expect:t,within:c}=__STORYBOOK_MODULE_TEST__,D={component:E,title:"Tester/Divider",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},spacingTop:{table:{disable:!0}},spacingBottom:{table:{disable:!0}},variant:{table:{disable:!0}},ariaHidden:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},n={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=c(a).getByRole("separator");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=c(a).getByRole("separator");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id","htmlId"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},r={name:"Defaults (A1)"},i={name:"With Strong (A3)",args:{variant:"strong"},argTypes:{variant:{table:{disable:!1}}}},d={name:"Is <hr>-element (B1)",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const l=c(a);await t(l.getByRole("separator").nodeName).toBe("HR")}},o={name:"With ariaHidden (B2)",args:{ariaHidden:"true"},argTypes:{ariaHidden:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=c(a).getByRole("separator",{hidden:!0});await t(e).toHaveAttribute("aria-hidden","true")}};var m,p,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,v,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    a11y: {
      test: 'off'
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
} satisfies Story`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,f,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Defaults (A1)'
} satisfies Story`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,H,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(H=i.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var w,R,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Is <hr>-element (B1)',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('separator').nodeName).toBe('HR');
  }
} satisfies Story`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var I,T,W;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...(W=(T=o.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const F=["WithRef","WithAttributes","Defaults","WithStrong","IsHRElement","WithAriaHidden"],x=Object.freeze(Object.defineProperty({__proto__:null,Defaults:r,IsHRElement:d,WithAriaHidden:o,WithAttributes:s,WithRef:n,WithStrong:i,__namedExportsOrder:F,default:D},Symbol.toStringTag,{value:"Module"}));export{x as D};
//# sourceMappingURL=Divider.test.stories-Dki_Nuva.js.map
