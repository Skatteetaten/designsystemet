import{j as p}from"./jsx-runtime-BjG_zV1W.js";import{r as E}from"./index-D_ouKaeX.js";import{w as m,e as t}from"./index-DIxTUSTt.js";import{C as b}from"./index-Bm-dj5jB.js";import"./index-ChzTQA-a.js";import{c as s}from"./base-props.types-DUvlOF9f.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-eDVrZHQi.js";import"./index-CdwPxLML.js";import"./index-CPecIRii.js";import"./index-DsfABT8I.js";const F=[s[0],s[1],s[2],s[3],s[5],s[6]],$={component:b,title:"Tester/Card/Card",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0}},spacing:{table:{disable:!0}},ariaLabelledBy:{table:{disable:!0}}}},H="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",r={children:H},l={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults (B1, B2)",args:{...r},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=m(e),a=n.getAllByRole("generic")[1],D=n.queryByRole("region");await t(D).not.toBeInTheDocument(),await t(a).toBeInTheDocument()}},W=e=>p.jsx(p.Fragment,{children:F.map((n,a)=>E.createElement(b,{...e,key:`card_${a}`,className:"bottomSpacingXL",color:n},p.jsx(b.Content,{children:e.children})))}),c={render:W,name:"All Colors (A1, A2)",args:{...r}},d={name:"With aria-labelledby (B1)",argTypes:{ariaLabelledBy:{table:{disable:!1}}},args:{...r,ariaLabelledBy:"dummyId"},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=m(e).getByRole("region");await t(a).toHaveAttribute("aria-labelledby","dummyId")}};var u,y,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,A,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(A=i.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var h,B,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(B=o.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var I,R,x;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: TemplateAllColors,
  name: 'All Colors (A1, A2)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(x=(R=c.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var C,T,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const z=["WithRef","WithAttributes","Defaults","AllColors","WithAriaLabelledBy"];export{c as AllColors,o as Defaults,d as WithAriaLabelledBy,i as WithAttributes,l as WithRef,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=Card.test.stories-BZm29RDN.js.map
