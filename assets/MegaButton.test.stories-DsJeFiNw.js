import{j as l}from"./jsx-runtime-Nms4Y4qS.js";import{r as Te}from"./index-BwDkhjyp.js";import{M as k}from"./index-yuNN44a_.js";import{a as Ee,d as We}from"./index-CI44Z2h3.js";import{w as o,e as t,f as W,c as D,u as H}from"./index-hUG6DWTw.js";import{w as i}from"./storybook.testing.utils-CMs160i9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";const T="Klikk her",E=(e,r)=>async({canvasElement:a})=>{const I=o(a).getByRole("button");await t(I).toBeInTheDocument(),await t(I).toHaveAttribute(e,r)},Me={component:k,title:"Tester/MegaButton",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},isExternal:{table:{disable:!0}},accessKey:{table:{disable:!0},control:"text"},disabled:{table:{disable:!0}},href:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}}},n={children:T},c={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:E("id","dummyIdForwardedFromRef")},d={name:"With Attributes(FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=o(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},p={name:"Defaults (A1, B2)",args:{...n},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${i} > button`,hover:`${i} > button`,click:`${i} > button`}},play:async({canvasElement:e})=>{const a=o(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",Ee())}},m={name:"With Long Text (A2)",args:{...n,children:"Denne knappen har en veldig lang tekst. Så lang at den må brekke."},argTypes:{children:{table:{disable:!1}}}},u={name:"With Long Text And Breaking (A1, A2)",args:{...n,children:"Denneknappenharenveldiglangtekst.Sålangatdenmåbrekke."},argTypes:{children:{table:{disable:!1}}}},b={name:"With External Icon (A4, B5, B7)",args:{...n,isExternal:!0,href:"#"},argTypes:{isExternal:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=o(e).getByRole("button"),s=a.querySelector("svg");await t(s).toHaveAttribute("aria-label",We.t("ds_buttons:shared.ExternalIcon")),await t(s).toHaveAttribute("viewBox","0 0 24 24"),await t(a).toBeInTheDocument()}},g={name:"With Long Text and External Icon (A2)",args:{...n,isExternal:!0,href:"#",children:"Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje"},argTypes:{children:{table:{disable:!1}},isExternal:{table:{disable:!1}}}},De={href:void 0,disabled:!0},h={name:"With Disabled (B6)",args:{...n,...De},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=o(e);t(r.getByRole("button")).toBeDisabled()}},y={name:"With Type (B2)",args:{...n,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:E("type","submit")},f={name:"With AriaDescribedby (B1)",args:{...n,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:E("aria-describedby","testid1234")},v={name:"With Accesskey (B4)",args:{children:T,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:E("accessKey","j")},B={name:"As Link (B3)",args:{...n,href:"https://www.skatteetaten.no"},argTypes:{href:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${i} > a`,hover:`${i} > a`}}},A={name:"As Link with empty href (B3)",args:{...n,href:""},argTypes:{href:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},w={name:"As Link External (B3, A4)",args:{...n,href:"https://www.skatteetaten.no",isExternal:!0},argTypes:{href:{table:{disable:!1}},isExternal:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${i} > a`,hover:`${i} > a`}},play:async({canvasElement:e})=>{const a=o(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a.tagName).toBe("A"),await t(a).toHaveAttribute("role","button")}},Ie=e=>{const[r,a]=Te.useState("bruk knapp for å teste events");return l.jsx(k,{...e,onFocus:s=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(s)},onClick:s=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(s)},children:r})},x={render:Ie,name:"With EventHandlers (A2 delvis)",args:{...n,onFocus:W(),onBlur:W(),onClick:W()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:r})=>{const s=o(r).getByRole("button");await t(s).toBeInTheDocument(),await s.focus(),await D(()=>t(e.onFocus).toHaveBeenCalled()),await H.tab(),await D(()=>t(e.onBlur).toHaveBeenCalled()),await H.click(s),await D(()=>t(e.onClick).toHaveBeenCalled())}},He=e=>l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"bottomSpacingXL",children:l.jsx(k,{children:T})}),l.jsx(k,{...e,children:T})]}),S={render:He,name:"With Spinner (A7)",args:{...n,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}};var F,L,C;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(L=c.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var R,$,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
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
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toHaveClass('dummyClassname');
    await expect(megaButton).toHaveAttribute('id', 'htmlId');
    await expect(megaButton).toHaveAttribute('lang', 'nb');
    await expect(megaButton).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(j=($=d.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var K,N,P;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Defaults (A1, B2)',
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
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    await expect(megaButton).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var M,_,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With Long Text (A2)',
  args: {
    ...defaultArgs,
    children: 'Denne knappen har en veldig lang tekst. Så lang at den må brekke.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var O,X,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With Long Text And Breaking (A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Denneknappenharenveldiglangtekst.Sålangatdenmåbrekke.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var G,J,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With External Icon (A4, B5, B7)',
  args: {
    ...defaultArgs,
    isExternal: true,
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
} satisfies Story`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,V,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Long Text and External Icon (A2)',
  args: {
    ...defaultArgs,
    isExternal: true,
    href: '#',
    children: 'Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    isExternal: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Y=(V=g.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Disabled (B6)',
  args: {
    ...defaultArgs,
    ...discriminatedProps
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  }
} satisfies Story`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'With Type (B2)',
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
} satisfies Story`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,ie,oe;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'With AriaDescribedby (B1)',
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
} satisfies Story`,...(oe=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ce,de;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'With Accesskey (B4)',
  args: {
    children: defaultMegaButtonText,
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
} satisfies Story`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,ue;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'As Link (B3)',
  args: {
    ...defaultArgs,
    href: 'https://www.skatteetaten.no'
  },
  argTypes: {
    href: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > a\`,
      hover: \`\${wrapper} > a\`
    }
  }
} satisfies Story`,...(ue=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var be,ge,he;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'As Link with empty href (B3)',
  args: {
    ...defaultArgs,
    href: ''
  },
  argTypes: {
    href: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(he=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,fe,ve;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'As Link External (B3, A4)',
  args: {
    ...defaultArgs,
    href: 'https://www.skatteetaten.no',
    isExternal: true
  },
  argTypes: {
    href: {
      table: {
        disable: false
      }
    },
    isExternal: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > a\`,
      hover: \`\${wrapper} > a\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    await expect(megaButton.tagName).toBe('A');
    await expect(megaButton).toHaveAttribute('role', 'button');
  }
} satisfies Story`,...(ve=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Be,Ae,we;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    await megaButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(megaButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(we=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var xe,Se,ke;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: TemplateWithSpinner,
  name: 'With Spinner (A7)',
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
} satisfies Story`,...(ke=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};const _e=["WithRef","WithAttributes","Defaults","WithLongText","WithLongTextAndBreaking","WithExternalIcon","WithLongTextAndExternalIcon","WithDisabled","WithType","WithAriaDescribedby","WithAccesskey","AsLink","AsLinkEmptyString","AsLinkExternal","WithEventHandlers","WithSpinner"];export{B as AsLink,A as AsLinkEmptyString,w as AsLinkExternal,p as Defaults,v as WithAccesskey,f as WithAriaDescribedby,d as WithAttributes,h as WithDisabled,x as WithEventHandlers,b as WithExternalIcon,m as WithLongText,u as WithLongTextAndBreaking,g as WithLongTextAndExternalIcon,c as WithRef,S as WithSpinner,y as WithType,_e as __namedExportsOrder,Me as default};
//# sourceMappingURL=MegaButton.test.stories-DsJeFiNw.js.map
