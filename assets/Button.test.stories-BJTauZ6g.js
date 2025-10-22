import{j as n,g as D,r as Ie,d as je}from"./iframe-BoxHncFg.js";import{B as s}from"./index-DyY5joHW.js";import{S as l}from"./index-Mlou2Fgf.js";import{S as j}from"./icon.systems-qsHVbejn.js";const{expect:t,fn:E,userEvent:R,waitFor:H,within:c}=__STORYBOOK_MODULE_TEST__,Re="Klikk her",W=(e,o)=>async({canvasElement:a})=>{const I=c(a).getByRole("button");await t(I).toBeInTheDocument(),await t(I).toHaveAttribute(e,o)},Pe={component:s,title:"Tester/Button",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(j),mapping:j},variant:{table:{disable:!0}},isExternal:{table:{disable:!0}},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},href:{table:{disable:!0}},form:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaCurrent:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={children:Re},d={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:W("id","dummyIdForwardedFromRef")},m={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123")}},p={name:"Defaults Variant Primary (A1, B1)",args:{...r},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",D())}},u={name:"Variant Secondary (A1)",args:{...r,variant:"secondary"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",D())}},b={name:"Variant Tertiary (A1)",args:{...r,variant:"tertiary"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",D())}},g={name:"Variant Danger (A1)",args:{...r,variant:"danger"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",D())}},v={name:"With Icon (A3, B3)",args:{...r,svgPath:l},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button"),i=a.querySelector("svg");await t(i).toHaveAttribute("viewBox","0 0 24 24"),await t(i).toHaveAttribute("aria-hidden","true"),await t(a).toBeInTheDocument()}},h={name:"With Long Text (A1 delvis)",args:{...r,children:"Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles. Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles"},argTypes:{children:{table:{disable:!1}}}},y={name:"With Long Text And Icon (A1 delvis)",args:{...r,svgPath:l,children:"Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres. Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres."},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},f={name:"With Disabled (B5)",args:{...r,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const o=c(e);t(o.getByRole("button")).toBeDisabled()}},S={name:"With Disabled And Icon (B5)",args:{...r,svgPath:l,disabled:!0},argTypes:{svgPath:{table:{disable:!1}},disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}}},A={name:"With Type (B1)",args:{...r,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:W("type","submit")},T={name:"With AriaDescribedby (B2)",args:{...r,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:W("aria-describedby","testid1234")},B={name:"With Accesskey (B3)",args:{...r,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:W("accessKey","j")},Ce=e=>{const[o,a]=Ie.useState("bruk knapp for å teste events");return n.jsx(s,{...e,onFocus:i=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(i)},onBlur:i=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(i)},onClick:i=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(i)},children:o})},k={render:Ce,name:"With EventHandlers (A2 delvis)",args:{...r,onFocus:E(),onBlur:E(),onClick:E()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:o})=>{const i=c(o).getByRole("button");await t(i).toBeInTheDocument(),i.focus(),await H(()=>t(e.onFocus).toHaveBeenCalled()),await R.tab(),await H(()=>t(e.onBlur).toHaveBeenCalled()),await R.click(i),await H(()=>t(e.onClick).toHaveBeenCalled())}},Fe=e=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(s,{...e,hasSpinner:!1,className:"marginRightM"}),n.jsx(s,{...e,hasSpinner:!1,variant:"secondary",className:"marginRightM"}),n.jsx(s,{...e,hasSpinner:!1,variant:"tertiary",className:"marginRightM"}),n.jsx(s,{...e,hasSpinner:!1,variant:"danger"})]}),n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(s,{...e,className:"marginRightM"}),n.jsx(s,{...e,variant:"secondary",className:"marginRightM"}),n.jsx(s,{...e,variant:"tertiary",className:"marginRightM"}),n.jsx(s,{...e,variant:"danger"})]}),n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(s,{...e,svgPath:l,hasSpinner:!1,className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,hasSpinner:!1,variant:"secondary",className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,hasSpinner:!1,variant:"tertiary",className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,hasSpinner:!1,variant:"danger"})]}),n.jsx(s,{...e,svgPath:l,className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,variant:"secondary",className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,variant:"tertiary",className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,variant:"danger"})]}),x={render:Fe,name:"With Spinner (A6)",args:{...r,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}},w={name:"With External Icon (A7, B6)",args:{...r,isExternal:!0,children:"Til altinn.no",href:"#"},argTypes:{isExternal:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button"),i=a.querySelector("svg");await t(i).toHaveAttribute("aria-label",je.t("ds_buttons:shared.ExternalIcon")),await t(i).toHaveAttribute("viewBox","0 0 24 24"),await t(a).toBeInTheDocument()}};var P,C,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var N,V,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      disableSnapshot: true
    },
    // customClassname sin farge gir ikke nok kontrast med knapp i modal ved hover
    a11y: {
      test: 'off'
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
} satisfies Story`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var _,L,K;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(K=(L=p.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var O,G,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var X,z,U;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(U=(z=b.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var Y,J,Q;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
    const svg = button.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(button).toBeInTheDocument();
  }
} satisfies Story`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,ce;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  }
} satisfies Story`,...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  }
} satisfies Story`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,be,ge;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('type', 'submit')
} satisfies Story`,...(ge=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ve,he,ye;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('aria-describedby', 'testid1234')
} satisfies Story`,...(ye=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var fe,Se,Ae;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('accessKey', 'j')
} satisfies Story`,...(Ae=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var Te,Be,ke;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    button.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(ke=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var xe,we,De;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(we=x.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var We,Ee,He;w.parameters={...w.parameters,docs:{...(We=w.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
    const svg = megaButton.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-label', dsI18n.t('ds_buttons:shared.ExternalIcon'));
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(megaButton).toBeInTheDocument();
  }
} satisfies Story`,...(He=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};const Ne=["WithRef","WithAttributes","Defaults","VariantSecondary","VariantTertiary","VariantDanger","WithIcon","WithLongText","WithLongTextAndIcon","WithDisabled","WithDisabledAndIcon","WithType","WithAriaDescribedby","WithAccesskey","WithEventHandlers","WithSpinner","WithExternalIcon"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,VariantDanger:g,VariantSecondary:u,VariantTertiary:b,WithAccesskey:B,WithAriaDescribedby:T,WithAttributes:m,WithDisabled:f,WithDisabledAndIcon:S,WithEventHandlers:k,WithExternalIcon:w,WithIcon:v,WithLongText:h,WithLongTextAndIcon:y,WithRef:d,WithSpinner:x,WithType:A,__namedExportsOrder:Ne,default:Pe},Symbol.toStringTag,{value:"Module"}));export{Ke as B};
//# sourceMappingURL=Button.test.stories-BJTauZ6g.js.map
