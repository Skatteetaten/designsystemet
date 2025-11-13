import{j as s,r as D}from"./iframe-CdXtTKZQ.js";import{C as r}from"./index-BEPTjI1-.js";import{H as j}from"./index-DUrzBgqO.js";const F=["white","ochre","forest","burgundy","denim","graphite"],{expect:t,within:l}=__STORYBOOK_MODULE_TEST__,_={component:r,title:"Tester/Card/Card",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0}},spacing:{table:{disable:!0}},ariaLabelledBy:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},N="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",i={children:N},o={name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...i,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=l(e).getAllByRole("generic")[1];await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},c={name:"Defaults (B1, B2)",args:{...i},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=n.getAllByRole("generic")[1],u=n.queryByRole("region");await t(u).not.toBeInTheDocument(),await t(a).toBeInTheDocument()}},O=e=>s.jsx(s.Fragment,{children:F.map((n,a)=>D.createElement(r,{...e,key:`card_${a}`,className:"bottomSpacingXL",color:n},s.jsx(r.Content,{children:e.children})))}),m={render:O,name:"All Colors (A1, A2)",args:{...i}},b={name:"With aria-labelledby (B1)",argTypes:{ariaLabelledBy:{table:{disable:!1}}},args:{...i,ariaLabelledBy:"dummyId"},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("region");await t(a).toHaveAttribute("aria-labelledby","dummyId")}},P=e=>s.jsxs(r,{...e,children:[s.jsx(r.Alert,{title:"Informasjon",children:"Alert message content"}),s.jsx(r.Header,{children:s.jsx(j,{id:e.ariaLabelledBy,as:"h3",level:3,children:"Card Heading"})}),s.jsx(r.Content,{children:e.children})]}),p={render:P,name:"With ariaLabelledBy and Card.Alert",args:{...i,ariaLabelledBy:"dummyId"},play:async({canvasElement:e})=>{const a=l(e).getByRole("region"),u=l(a).getByRole("heading",{name:"Informasjon"});await t(u).toBeInTheDocument(),await t(a).toHaveAttribute("aria-labelledby",`${u.id} dummyId`)}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,A,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(A=d.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var B,w,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var I,C,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: TemplateAllColors,
  name: 'All Colors (A1, A2)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var x,R,H;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(R=b.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var W,E,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: TemplateWithAlert,
  name: 'With ariaLabelledBy and Card.Alert',
  args: {
    ...defaultArgs,
    ariaLabelledBy: 'dummyId'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const cardSection = canvas.getByRole('region');
    const alertHeading = within(cardSection).getByRole('heading', {
      name: 'Informasjon'
    });
    await expect(alertHeading).toBeInTheDocument();
    await expect(cardSection).toHaveAttribute('aria-labelledby', \`\${alertHeading.id} dummyId\`);
  }
} satisfies Story`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const k=["WithRef","WithAttributes","Defaults","AllColors","WithAriaLabelledBy","WithAriaLabelledByAndCardAlert"],z=Object.freeze(Object.defineProperty({__proto__:null,AllColors:m,Defaults:c,WithAriaLabelledBy:b,WithAriaLabelledByAndCardAlert:p,WithAttributes:d,WithRef:o,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{z as C};
//# sourceMappingURL=Card.test.stories-Drm_e9Nr.js.map
