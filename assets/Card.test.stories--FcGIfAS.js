import{j as m,r as E}from"./iframe-DRo7xN6O.js";import{C as p}from"./index-CHHc706Z.js";const D=["white","ochre","forest","burgundy","denim","graphite"],{expect:t,within:d}=__STORYBOOK_MODULE_TEST__,F={component:p,title:"Tester/Card/Card",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0}},spacing:{table:{disable:!0}},ariaLabelledBy:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},H="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",c={children:H},s={name:"With Ref (FA1)",args:{...c,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=d(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...c,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=d(e).getAllByRole("generic")[1];await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (B1, B2)",args:{...c},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=d(e),a=n.getAllByRole("generic")[1],x=n.queryByRole("region");await t(x).not.toBeInTheDocument(),await t(a).toBeInTheDocument()}},_=e=>m.jsx(m.Fragment,{children:D.map((n,a)=>E.createElement(p,{...e,key:`card_${a}`,className:"bottomSpacingXL",color:n},m.jsx(p.Content,{children:e.children})))}),o={render:_,name:"All Colors (A1, A2)",args:{...c}},i={name:"With aria-labelledby (B1)",argTypes:{ariaLabelledBy:{table:{disable:!1}}},args:{...c,ariaLabelledBy:"dummyId"},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=d(e).getByRole("region");await t(a).toHaveAttribute("aria-labelledby","dummyId")}};var b,u,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
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
    const card = canvas.getAllByRole('generic')[1];
    await expect(card).toHaveClass('dummyClassname');
    await expect(card).toHaveAttribute('id', 'htmlId');
    await expect(card).toHaveAttribute('lang', 'en');
    await expect(card).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,A,B;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Defaults (B1, B2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const section = canvas.queryByRole('region');
    await expect(section).not.toBeInTheDocument();
    await expect(container).toBeInTheDocument();
  }
} satisfies Story`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var w,S,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: TemplateAllColors,
  name: 'All Colors (A1, A2)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,I,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With aria-labelledby (B1)',
  argTypes: {
    ariaLabelledBy: {
      table: {
        disable: false
      }
    }
  },
  args: {
    ...defaultArgs,
    ariaLabelledBy: 'dummyId'
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
    const cardNote = canvas.getByRole('region');
    await expect(cardNote).toHaveAttribute('aria-labelledby', 'dummyId');
  }
} satisfies Story`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const W=["WithRef","WithAttributes","Defaults","AllColors","WithAriaLabelledBy"],j=Object.freeze(Object.defineProperty({__proto__:null,AllColors:o,Defaults:l,WithAriaLabelledBy:i,WithAttributes:r,WithRef:s,__namedExportsOrder:W,default:F},Symbol.toStringTag,{value:"Module"}));export{j as C};
//# sourceMappingURL=Card.test.stories--FcGIfAS.js.map
