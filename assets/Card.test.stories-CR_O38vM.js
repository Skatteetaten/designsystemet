import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{r as D}from"./index-D_ouKaeX.js";import{w as d,e as t}from"./index-DIxTUSTt.js";import{C as p}from"./index-CWrHDE5u.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGk5cNE3.js";import"./index-DfnG5Ebn.js";import"./index-DAV9Xejq.js";import"./index-uxUkjR_c.js";import"./index-DXWIZOJk.js";const E=["white","ochre","forest","burgundy","denim","graphite"],O={component:p,title:"Tester/Card/Card",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0}},spacing:{table:{disable:!0}},ariaLabelledBy:{table:{disable:!0}}}},F="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",s={children:F},r={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=d(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=d(e).getAllByRole("generic")[1];await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},i={name:"Defaults (B1, B2)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=d(e),a=n.getAllByRole("generic")[1],S=n.queryByRole("region");await t(S).not.toBeInTheDocument(),await t(a).toBeInTheDocument()}},H=e=>m.jsx(m.Fragment,{children:E.map((n,a)=>D.createElement(p,{...e,key:`card_${a}`,className:"bottomSpacingXL",color:n},m.jsx(p.Content,{children:e.children})))}),o={render:H,name:"All Colors (A1, A2)",args:{...s}},c={name:"With aria-labelledby (B1)",argTypes:{ariaLabelledBy:{table:{disable:!1}}},args:{...s,ariaLabelledBy:"dummyId"},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=d(e).getByRole("region");await t(a).toHaveAttribute("aria-labelledby","dummyId")}};var b,u,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,f,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var A,h,w;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var B,I,R;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: TemplateAllColors,
  name: 'All Colors (A1, A2)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(R=(I=o.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var x,C,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const cardNote = canvas.getByRole('region');
    await expect(cardNote).toHaveAttribute('aria-labelledby', 'dummyId');
  }
} satisfies Story`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const X=["WithRef","WithAttributes","Defaults","AllColors","WithAriaLabelledBy"];export{o as AllColors,i as Defaults,c as WithAriaLabelledBy,l as WithAttributes,r as WithRef,X as __namedExportsOrder,O as default};
//# sourceMappingURL=Card.test.stories-CR_O38vM.js.map
