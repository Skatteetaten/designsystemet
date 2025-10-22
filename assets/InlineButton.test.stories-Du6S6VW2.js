import{j as r,g as Ie,r as je}from"./iframe-BoxHncFg.js";import{I as l}from"./index-DyY5joHW.js";import{f as o}from"./index-Mlou2Fgf.js";import{S as j}from"./icon.systems-qsHVbejn.js";const{expect:t,fn:w,userEvent:H,waitFor:x,within:d}=__STORYBOOK_MODULE_TEST__,He="Legg til rapport",P=(e,i)=>async({canvasElement:a})=>{const I=d(a).getByRole("button");await t(I).toBeInTheDocument(),await t(I).toHaveAttribute(e,i)},Re={component:l,title:"Tester/InlineButton",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},iconPosition:{table:{disable:!0}},brightness:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(j),mapping:j},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},n={children:He},c={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:P("id","dummyIdForwardedFromRef")},p={name:"With Attributes(FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123")}},u={name:"Defaults (A1, B1)",args:{...n},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",Ie())}},m={name:"With Long Text (A1)",args:{...n,children:"Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert."},argTypes:{children:{table:{disable:!1}}}},g={name:"With Icon (A3, A4, B4)",args:{...n,svgPath:o},argTypes:{svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button"),s=a.querySelector("svg");await t(s).toHaveAttribute("viewBox","0 0 24 24"),await t(a).toBeInTheDocument()}},h={name:"With Custom Icon (A3)",args:{...n,svgPath:r.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},b={name:"With Long Text And Icon (A3)",args:{...n,svgPath:o,iconPosition:"right",children:"Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert."},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},f={name:"With Icon Right (A5)",args:{...n,svgPath:o,iconPosition:"right"},argTypes:{iconPosition:{table:{disable:!1}}}},v={name:"With Disabled (B5)",args:{...n,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const i=d(e);t(i.getByRole("button")).toBeDisabled()}},y={name:"With Disabled And Icon (B5)",args:{...n,svgPath:o,disabled:!0},argTypes:{disabled:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}}},S={name:"With Disabled And Icon And Brightness (B5)",args:{...n,svgPath:o,disabled:!0,brightness:"light"},argTypes:{disabled:{table:{disable:!1}},svgPath:{table:{disable:!1}},brightness:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},globals:{backgrounds:{value:"themePrimary"}}},A={name:"With Type (B1)",args:{...n,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:P("type","submit")},B={name:"With AriaDescribedby (B2)",args:{...n,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:P("aria-describedby","testid1234")},k={name:"With Accesskey (B3)",args:{...n,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:P("accessKey","j")},Ce=e=>{const[i,a]=je.useState("bruk knapp for å events");return r.jsx(l,{...e,onFocus:s=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(s)},onClick:s=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(s)},children:i})},T={render:Ce,name:"With EventHandlers (A2 delvis)",args:{...n,onFocus:w(),onClick:w(),onBlur:w()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:i})=>{const s=d(i).getByRole("button");await t(s).toBeInTheDocument(),s.focus(),await x(()=>t(e.onFocus).toHaveBeenCalled()),await H.tab(),await x(()=>t(e.onBlur).toHaveBeenCalled()),await H.click(s),await x(()=>t(e.onClick).toHaveBeenCalled())}},Ee=e=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex bottomSpacingXL",children:[r.jsx(l,{...e,hasSpinner:!1,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,hasSpinner:!1,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,iconPosition:"right",hasSpinner:!1})]}),r.jsxs("div",{className:"flex",children:[r.jsx(l,{...e,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,iconPosition:"right"})]})]}),W={render:Ee,name:"With Spinner (A8)",args:{...n,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}},D={name:"With Brightness (A9)",args:{...n,brightness:"light",svgPath:o},argTypes:{brightness:{table:{disable:!1}}},parameters:{a11y:{test:"off"},imageSnapshot:{pseudoStates:["hover","focus","active"]}},globals:{backgrounds:{value:"themePrimary"}}};var R,C,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var F,O,L;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
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
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toHaveClass('dummyClassname');
    await expect(inlineButton).toHaveAttribute('id', 'htmlId');
    await expect(inlineButton).toHaveAttribute('lang', 'nb');
    await expect(inlineButton).toHaveAttribute('data-testid', '123ID');
    await expect(inlineButton).toHaveAttribute('form', 'formid123');
  }
} satisfies Story`,...(L=(O=p.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var _,K,N;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Defaults (A1, B1)',
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
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toBeInTheDocument();
    await expect(inlineButton).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...(N=(K=u.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var V,M,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With Long Text (A1)',
  args: {
    ...defaultArgs,
    children: 'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. ' + 'Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(G=(M=m.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var q,Z,z;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Icon (A3, A4, B4)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath
  },
  argTypes: {
    svgPath: {
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
    const inlineButton = canvas.getByRole('button');
    const svg = inlineButton.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(inlineButton).toBeInTheDocument();
  }
} satisfies Story`,...(z=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Custom Icon (A3)',
  args: {
    ...defaultArgs,
    svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,Q,$;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With Long Text And Icon (A3)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath,
    iconPosition: 'right',
    children: 'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. ' + 'Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert.'
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
} satisfies Story`,...($=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var ee,ae,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'With Icon Right (A5)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath,
    iconPosition: 'right'
  },
  argTypes: {
    iconPosition: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(se=v.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,oe,le;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'With Disabled And Icon (B5)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath,
    disabled: true
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    },
    svgPath: {
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
} satisfies Story`,...(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var de,ce,pe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'With Disabled And Icon And Brightness (B5)',
  args: {
    ...defaultArgs,
    svgPath: AddOutlineSVGpath,
    disabled: true,
    brightness: 'light'
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    },
    svgPath: {
      table: {
        disable: false
      }
    },
    brightness: {
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
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...(pe=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,ge;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,be,fe;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(be=B.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ve,ye,Se;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Ae,Be,ke;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A2 delvis)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onClick: fn(),
    onBlur: fn()
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
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toBeInTheDocument();
    inlineButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(inlineButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(ke=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var Te,We,De;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: TemplateWithSpinner,
  name: 'With Spinner (A8)',
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
} satisfies Story`,...(De=(We=W.parameters)==null?void 0:We.docs)==null?void 0:De.source}}};var Pe,we,xe;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'With Brightness (A9)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    svgPath: AddOutlineSVGpath
  },
  argTypes: {
    brightness: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...(xe=(we=D.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};const Fe=["WithRef","WithAttributes","Defaults","WithLongText","WithIcon","WithCustomIcon","WithLongTextAndIcon","WithIconRight","WithDisabled","WithDisabledAndIcon","WithDisabledAndBrightness","WithType","WithAriaDescribedby","WithAccesskey","WithEventHandlers","WithSpinner","WithBrightness"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Defaults:u,WithAccesskey:k,WithAriaDescribedby:B,WithAttributes:p,WithBrightness:D,WithCustomIcon:h,WithDisabled:v,WithDisabledAndBrightness:S,WithDisabledAndIcon:y,WithEventHandlers:T,WithIcon:g,WithIconRight:f,WithLongText:m,WithLongTextAndIcon:b,WithRef:c,WithSpinner:W,WithType:A,__namedExportsOrder:Fe,default:Re},Symbol.toStringTag,{value:"Module"}));export{Ne as I};
//# sourceMappingURL=InlineButton.test.stories-Du6S6VW2.js.map
