import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as je}from"./index-BwDkhjyp.js";import{B as r}from"./index-DMYlLpXe.js";import{a as W,d as Re}from"./index-CI44Z2h3.js";import{t as c}from"./index-DcL_RvKM.js";import{w as d,e as t,f as H,c as I,u as R}from"./index-hUG6DWTw.js";import{w as s}from"./storybook.testing.utils-CMs160i9.js";import{S as $}from"./icon.systems-Cj7Nt_Zb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cq8GVsVj.js";import"./icon.utils-Djpt9B5F.js";const $e=["primary","secondary","tertiary","danger"],Pe="Klikk her",E=(e,l)=>async({canvasElement:a})=>{const j=d(a).getByRole("button");await t(j).toBeInTheDocument(),await t(j).toHaveAttribute(e,l)},Je={component:r,title:"Tester/Button",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys($),mapping:$},variant:{table:{disable:!0},options:[...$e],control:"radio"},isExternal:{table:{disable:!0}},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},href:{table:{disable:!0}},form:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaCurrent:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}}},i={children:Pe},u={name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:E("id","dummyIdForwardedFromRef")},p={name:"With Attributes (FA2-5)",args:{...i,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123")}},b={name:"Defaults Variant Primary (A1, B1)",args:{...i},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",W())}},m={name:"Variant Secondary (A1)",args:{...i,variant:"secondary"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",W())}},g={name:"Variant Tertiary (A1)",args:{...i,variant:"tertiary"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",W())}},v={name:"Variant Danger (A1)",args:{...i,variant:"danger"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",W())}},h={name:"With Icon (A3, B3)",args:{...i,svgPath:c},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button"),o=a.querySelector("svg");await t(o).toHaveAttribute("viewBox","0 0 24 24"),await t(o).toHaveAttribute("aria-hidden","true"),await t(a).toBeInTheDocument()}},y={name:"With Long Text (A1 delvis)",args:{...i,children:"Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles. Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles"},argTypes:{children:{table:{disable:!1}}}},f={name:"With Long Text And Icon (A1 delvis)",args:{...i,svgPath:c,children:"Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres. Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres."},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},S={name:"With Disabled (B5)",args:{...i,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`}},play:async({canvasElement:e})=>{const l=d(e);t(l.getByRole("button")).toBeDisabled()}},w={name:"With Disabled And Icon (B5)",args:{...i,svgPath:c,disabled:!0},argTypes:{svgPath:{table:{disable:!1}},disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`}}},A={name:"With Type (B1)",args:{...i,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:E("type","submit")},k={name:"With AriaDescribedby (B2)",args:{...i,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:E("aria-describedby","testid1234")},x={name:"With Accesskey (B3)",args:{...i,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:E("accessKey","j")},Ce=e=>{const[l,a]=je.useState("bruk knapp for å teste events");return n.jsx(r,{...e,onFocus:o=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(o)},onBlur:o=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(o)},onClick:o=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(o)},children:l})},B={render:Ce,name:"With EventHandlers (A2 delvis)",args:{...i,onFocus:H(),onBlur:H(),onClick:H()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:l})=>{const o=d(l).getByRole("button");await t(o).toBeInTheDocument(),await o.focus(),await I(()=>t(e.onFocus).toHaveBeenCalled()),await R.tab(),await I(()=>t(e.onBlur).toHaveBeenCalled()),await R.click(o),await I(()=>t(e.onClick).toHaveBeenCalled())}},Fe=e=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(r,{...e,hasSpinner:!1,className:"marginRightM"}),n.jsx(r,{...e,hasSpinner:!1,variant:"secondary",className:"marginRightM"}),n.jsx(r,{...e,hasSpinner:!1,variant:"tertiary",className:"marginRightM"}),n.jsx(r,{...e,hasSpinner:!1,variant:"danger"})]}),n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(r,{...e,className:"marginRightM"}),n.jsx(r,{...e,variant:"secondary",className:"marginRightM"}),n.jsx(r,{...e,variant:"tertiary",className:"marginRightM"}),n.jsx(r,{...e,variant:"danger"})]}),n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(r,{...e,svgPath:c,hasSpinner:!1,className:"marginRightM"}),n.jsx(r,{...e,svgPath:c,hasSpinner:!1,variant:"secondary",className:"marginRightM"}),n.jsx(r,{...e,svgPath:c,hasSpinner:!1,variant:"tertiary",className:"marginRightM"}),n.jsx(r,{...e,svgPath:c,hasSpinner:!1,variant:"danger"})]}),n.jsx(r,{...e,svgPath:c,className:"marginRightM"}),n.jsx(r,{...e,svgPath:c,variant:"secondary",className:"marginRightM"}),n.jsx(r,{...e,svgPath:c,variant:"tertiary",className:"marginRightM"}),n.jsx(r,{...e,svgPath:c,variant:"danger"})]}),T={render:Fe,name:"With Spinner (A6)",args:{...i,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}},D={name:"With External Icon (A7, B6)",args:{...i,isExternal:!0,children:"Til altinn.no",href:"#"},argTypes:{isExternal:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button"),o=a.querySelector("svg");await t(o).toHaveAttribute("aria-label",Re.t("ds_buttons:shared.ExternalIcon")),await t(o).toHaveAttribute("viewBox","0 0 24 24"),await t(a).toBeInTheDocument()}};var P,C,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLButtonElement | null): void => {
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
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...(F=(C=u.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var N,V,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: 'formid123'
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
    },
    form: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlid');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
    await expect(button).toHaveAttribute('form', 'formid123');
  }
} satisfies Story`,...(M=(V=p.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var L,K,G;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Defaults Variant Primary (A1, B1)',
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
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...(G=(K=b.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var q,_,X;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Variant Secondary (A1)',
  args: {
    ...defaultArgs,
    variant: 'secondary'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...(X=(_=m.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var O,z,J;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Variant Tertiary (A1)',
  args: {
    ...defaultArgs,
    variant: 'tertiary'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Variant Danger (A1)',
  args: {
    ...defaultArgs,
    variant: 'danger'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...(Y=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Icon (A3, B3)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    // eslint-disable-next-line testing-library/no-node-access
    const svg = button.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(button).toBeInTheDocument();
  }
} satisfies Story`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'With Long Text (A1 delvis)',
  args: {
    ...defaultArgs,
    children: 'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles. ' + 'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,ie,oe;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'With Long Text And Icon (A1 delvis)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath,
    children: 'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres. ' + 'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    svgPath: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(oe=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ce,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'With Disabled (B5)',
  args: {
    ...defaultArgs,
    disabled: true
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  }
} satisfies Story`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,be;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With Disabled And Icon (B5)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath,
    disabled: true
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    },
    disabled: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`
    }
  }
} satisfies Story`,...(be=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var me,ge,ve;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'With Type (B1)',
  args: {
    ...defaultArgs,
    type: 'submit'
  },
  argTypes: {
    type: {
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
  play: verifyAttribute('type', 'submit')
} satisfies Story`,...(ve=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var he,ye,fe;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'With AriaDescribedby (B2)',
  args: {
    ...defaultArgs,
    ariaDescribedby: 'testid1234'
  },
  argTypes: {
    ariaDescribedby: {
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
  play: verifyAttribute('aria-describedby', 'testid1234')
} satisfies Story`,...(fe=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Se,we,Ae;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'With Accesskey (B3)',
  args: {
    ...defaultArgs,
    accessKey: 'j'
  },
  argTypes: {
    accessKey: {
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
  play: verifyAttribute('accessKey', 'j')
} satisfies Story`,...(Ae=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var ke,xe,Be;B.parameters={...B.parameters,docs:{...(ke=B.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A2 delvis)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await button.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(Be=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Te,De,We;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: TemplateWithSpinner,
  name: 'With Spinner (A6)',
  args: {
    ...defaultArgs,
    hasSpinner: true
  },
  argTypes: {
    hasSpinner: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(We=(De=T.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var Ee,He,Ie;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'With External Icon (A7, B6)',
  args: {
    ...defaultArgs,
    isExternal: true,
    children: 'Til altinn.no',
    href: '#'
  },
  argTypes: {
    isExternal: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const megaButton = canvas.getByRole('button');
    // eslint-disable-next-line testing-library/no-node-access
    const svg = megaButton.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-label', dsI18n.t('ds_buttons:shared.ExternalIcon'));
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(megaButton).toBeInTheDocument();
  }
} satisfies Story`,...(Ie=(He=D.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};const Qe=["WithRef","WithAttributes","Defaults","VariantSecondary","VariantTertiary","VariantDanger","WithIcon","WithLongText","WithLongTextAndIcon","WithDisabled","WithDisabledAndIcon","WithType","WithAriaDescribedby","WithAccesskey","WithEventHandlers","WithSpinner","WithExternalIcon"];export{b as Defaults,v as VariantDanger,m as VariantSecondary,g as VariantTertiary,x as WithAccesskey,k as WithAriaDescribedby,p as WithAttributes,S as WithDisabled,w as WithDisabledAndIcon,B as WithEventHandlers,D as WithExternalIcon,h as WithIcon,y as WithLongText,f as WithLongTextAndIcon,u as WithRef,T as WithSpinner,A as WithType,Qe as __namedExportsOrder,Je as default};
//# sourceMappingURL=Button.test.stories-CvL7fKBe.js.map
