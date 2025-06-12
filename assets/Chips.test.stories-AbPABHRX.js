import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as O}from"./index-D_ouKaeX.js";import{w as l,e as t,u as b}from"./index-DIxTUSTt.js";import{C as i}from"./index-BKQUjYcP.js";import{d as P}from"./index-ChzTQA-a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CdwPxLML.js";import"./index-eDVrZHQi.js";import"./index-CPecIRii.js";import"./index-Bm-dj5jB.js";import"./index-DsfABT8I.js";const g="htmlId",$={component:i,title:"Tester/Chips/Chips",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},ariaLabel:{table:{disable:!0}}}},h={children:[r.jsx(i.Toggle,{showCheckmark:!1,children:"Trondheim"},"trd"),r.jsx(i.Toggle,{children:"Bergen"},"bgo"),r.jsx(i.Removable,{children:"Oslo"},"osl")]},_=["Trondheim","Bergen","Oslo"],D=()=>{const[a,s]=O.useState(_),e=n=>{s(j=>j.filter(q=>q!==n))};return r.jsx(i,{children:a.map(n=>r.jsx(i.Removable,{onClose:()=>e(n),children:n},n))})},o={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")},...h},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=l(a).getByRole("list");await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes(FA2-5)",args:{id:g,className:"dummyClassname",lang:"nb","data-testid":"123ID",...h},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=l(a).getByRole("list");await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("id",g),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults (B2 delvis)",args:h},v="Kontorsted",m={name:"With AriaLabel (B2 delvis)",args:{ariaLabel:v,...h},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=l(a).getByRole("list");await t(e).toHaveAttribute("aria-label",v)}},p={name:"With Close and Focus Next (B3)",render:D,play:async({canvasElement:a})=>{const s=l(a);let e=s.getAllByRole("button");await t(e.length).toEqual(3),await b.click(e[1]),e=s.getAllByRole("button"),await t(e.length).toEqual(2),await t(e[1]).toHaveFocus()}},u={name:"With Close Last Chip (B3)",render:D,play:async({canvasElement:a})=>{const s=l(a),e=s.getAllByRole("button");await t(e.length).toEqual(3),await b.click(e[2]),await b.click(e[1]),await b.click(e[0]);const n=s.getByText(P.t("ds_collections:chips.NoFilters"));await t(n).toHaveFocus()}};var y,f,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var A,x,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var E,B,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Defaults (B2 delvis)',
  args: defaultArgs
} satisfies Story`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var W,F,L;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('list');
    await expect(container).toHaveAttribute('aria-label', label);
  }
} satisfies Story`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var T,H,S;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(H=p.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var I,N,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(N=u.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const ee=["WithRef","WithAttributes","Defaults","WithAriaLabel","WithCloseAndFocusNext","WithCloseLastChip"];export{d as Defaults,m as WithAriaLabel,c as WithAttributes,p as WithCloseAndFocusNext,u as WithCloseLastChip,o as WithRef,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Chips.test.stories-AbPABHRX.js.map
