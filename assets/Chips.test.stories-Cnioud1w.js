import{j as p,r as D,d as q}from"./iframe-CdXtTKZQ.js";import{C as i}from"./index-C6J3KzFu.js";const{expect:t,userEvent:b,within:u}=__STORYBOOK_MODULE_TEST__,g="htmlId",P={component:i,title:"Tester/Chips/Chips",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},ariaLabel:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},h={children:[p.jsx(i.Toggle,{showCheckmark:!1,children:"Trondheim"},"trd"),p.jsx(i.Toggle,{children:"Bergen"},"bgo"),p.jsx(i.Removable,{children:"Oslo"},"osl")]},M=["Trondheim","Bergen","Oslo"],N=()=>{const[a,s]=D.useState(M),e=n=>{s(k=>k.filter(j=>j!==n))};return p.jsx(i,{children:a.map(n=>p.jsx(i.Removable,{onClose:()=>e(n),children:n},n))})},l={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")},...h},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=u(a).getByRole("list");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes(FA2-5)",args:{id:g,className:"dummyClassname",lang:"nb","data-testid":"123ID",...h},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=u(a).getByRole("list");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id",g),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults (B2 delvis)",args:h},v="Kontorsted",c={name:"With AriaLabel (B2 delvis)",args:{ariaLabel:v,...h},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=u(a).getByRole("list");await t(e).toHaveAttribute("aria-label",v)}},d={name:"With Close and Focus Next (B3)",render:N,play:async({canvasElement:a})=>{const s=u(a);let e=s.getAllByRole("button");await t(e.length).toEqual(3),await b.click(e[1]),e=s.getAllByRole("button"),await t(e.length).toEqual(2),await t(e[1]).toHaveFocus()}},m={name:"With Close Last Chip (B3)",render:N,play:async({canvasElement:a})=>{const s=u(a),e=s.getAllByRole("button");await t(e.length).toEqual(3),await b.click(e[2]),await b.click(e[1]),await b.click(e[0]);const n=s.getByText(q.t("ds_collections:chips.NoFilters"));await t(n).toHaveFocus()}};var y,f,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLUListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
    ...defaultArgs
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var A,C,x;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
    id: elementId,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    ...defaultArgs
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var S,E,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Defaults (B2 delvis)',
  args: defaultArgs
} satisfies Story`,...(B=(E=o.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var R,W,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With AriaLabel (B2 delvis)',
  args: {
    ariaLabel: label,
    ...defaultArgs
  },
  argTypes: {
    ariaLabel: {
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('aria-label', label);
  }
} satisfies Story`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var T,L,H;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With Close and Focus Next (B3)',
  render: TemplateWithOnClose,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    let chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(3);
    await userEvent.click(chips[1]);
    chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(2);
    await expect(chips[1]).toHaveFocus();
  }
} satisfies Story`,...(H=(L=d.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var I,_,O;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Close Last Chip (B3)',
  render: TemplateWithOnClose,
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole('button');
    await expect(chips.length).toEqual(3);
    await userEvent.click(chips[2]);
    await userEvent.click(chips[1]);
    await userEvent.click(chips[0]);
    const span = canvas.getByText(dsI18n.t('ds_collections:chips.NoFilters'));
    await expect(span).toHaveFocus();
  }
} satisfies Story`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const K=["WithRef","WithAttributes","Defaults","WithAriaLabel","WithCloseAndFocusNext","WithCloseLastChip"],Y=Object.freeze(Object.defineProperty({__proto__:null,Defaults:o,WithAriaLabel:c,WithAttributes:r,WithCloseAndFocusNext:d,WithCloseLastChip:m,WithRef:l,__namedExportsOrder:K,default:P},Symbol.toStringTag,{value:"Module"}));export{Y as C};
//# sourceMappingURL=Chips.test.stories-Cnioud1w.js.map
