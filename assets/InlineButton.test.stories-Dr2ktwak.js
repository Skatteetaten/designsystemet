import{j as r}from"./jsx-runtime-BYYWji4R.js";import{r as je}from"./index-ClcD9ViR.js";import{f as x,w as c,e as t,b as I,u as H}from"./index-DIxTUSTt.js";import{I as l}from"./index-DYo2YWtE.js";import{a as He}from"./index-D9wdQ6Rv.js";import{e as o}from"./index-BomPkCop.js";import{w as d}from"./storybook.testing.utils-CMs160i9.js";import{S as R}from"./icon.systems-Slcjg63N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C176R4Vg.js";import"./icon.utils-XW2L0FSl.js";const Re="Legg til rapport",P=(e,i)=>async({canvasElement:a})=>{const j=c(a).getByRole("button");await t(j).toBeInTheDocument(),await t(j).toHaveAttribute(e,i)},_e={component:l,title:"Tester/InlineButton",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},iconPosition:{table:{disable:!0}},brightness:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(R),mapping:R},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}}},n={children:Re},b={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:P("id","dummyIdForwardedFromRef")},m={name:"With Attributes(FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123")}},p={name:"Defaults (A1, B1)",args:{...n},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${d} > button`,hover:`${d} > button`,click:`${d} > button`}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",He())}},u={name:"With Long Text (A1)",args:{...n,children:"Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert."},argTypes:{children:{table:{disable:!1}}}},g={name:"With Icon (A3, A4, B4)",args:{...n,svgPath:o},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button"),s=a.querySelector("svg");await t(s).toHaveAttribute("viewBox","0 0 24 24"),await t(a).toBeInTheDocument()}},h={name:"With Custom Icon (A3)",args:{...n,svgPath:r.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},f={name:"With Long Text And Icon (A3)",args:{...n,svgPath:o,iconPosition:"right",children:"Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert."},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},y={name:"With Icon Right (A5)",args:{...n,svgPath:o,iconPosition:"right"},argTypes:{iconPosition:{table:{disable:!1}}}},v={name:"With Disabled (B5)",args:{...n,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const i=c(e);t(i.getByRole("button")).toBeDisabled()}},A={name:"With Disabled And Icon (B5)",args:{...n,svgPath:o,disabled:!0},argTypes:{disabled:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},B={name:"With Disabled And Icon And Brightness (B5)",args:{...n,svgPath:o,disabled:!0,brightness:"light"},argTypes:{disabled:{table:{disable:!1}},svgPath:{table:{disable:!1}},brightness:{table:{disable:!1}}},parameters:{backgrounds:{default:"themePrimary"}}},S={name:"With Type (B1)",args:{...n,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:P("type","submit")},k={name:"With AriaDescribedby (B2)",args:{...n,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:P("aria-describedby","testid1234")},W={name:"With Accesskey (B3)",args:{...n,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:P("accessKey","j")},Ce=e=>{const[i,a]=je.useState("bruk knapp for å events");return r.jsx(l,{...e,onFocus:s=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(s)},onClick:s=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(s)},children:i})},T={render:Ce,name:"With EventHandlers (A2 delvis)",args:{...n,onFocus:x(),onClick:x(),onBlur:x()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:i})=>{const s=c(i).getByRole("button");await t(s).toBeInTheDocument(),s.focus(),await I(()=>t(e.onFocus).toHaveBeenCalled()),await H.tab(),await I(()=>t(e.onBlur).toHaveBeenCalled()),await H.click(s),await I(()=>t(e.onClick).toHaveBeenCalled())}},Fe=e=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex bottomSpacingXL",children:[r.jsx(l,{...e,hasSpinner:!1,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,hasSpinner:!1,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,iconPosition:"right",hasSpinner:!1})]}),r.jsxs("div",{className:"flex",children:[r.jsx(l,{...e,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,iconPosition:"right"})]})]}),w={render:Fe,name:"With Spinner (A8)",args:{...n,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}},D={name:"With Brightness (A9)",args:{...n,brightness:"light",svgPath:o},argTypes:{brightness:{table:{disable:!1}}},parameters:{backgrounds:{default:"themePrimary"},imageSnapshot:{hover:`${d} > button`,focus:`${d} > button`,click:`${d} > button`}}};var C,F,E;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(F=b.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var $,L,N;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var K,V,O;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
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
} satisfies Story`,...(O=(V=p.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var G,M,q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var Z,_,X;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button');
    const svg = inlineButton.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(inlineButton).toBeInTheDocument();
  }
} satisfies Story`,...(X=(_=g.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var z,J,Q;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,Y,ee;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,ne,te;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,re,ie;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  }
} satisfies Story`,...(ie=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,de;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
  }
} satisfies Story`,...(de=(le=A.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,be,me;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    backgrounds: {
      default: 'themePrimary'
    }
  }
} satisfies Story`,...(me=(be=B.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var pe,ue,ge;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,fe,ye;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,Ae,Be;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var Se,ke,We;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(We=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:We.source}}};var Te,we,De;w.parameters={...w.parameters,docs:{...(Te=w.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(we=w.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var Pe,xe,Ie;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
    backgrounds: {
      default: 'themePrimary'
    },
    imageSnapshot: {
      hover: \`\${wrapper} > button\`,
      focus: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  }
} satisfies Story`,...(Ie=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};const Xe=["WithRef","WithAttributes","Defaults","WithLongText","WithIcon","WithCustomIcon","WithLongTextAndIcon","WithIconRight","WithDisabled","WithDisabledAndIcon","WithDisabledAndBrightness","WithType","WithAriaDescribedby","WithAccesskey","WithEventHandlers","WithSpinner","WithBrightness"];export{p as Defaults,W as WithAccesskey,k as WithAriaDescribedby,m as WithAttributes,D as WithBrightness,h as WithCustomIcon,v as WithDisabled,B as WithDisabledAndBrightness,A as WithDisabledAndIcon,T as WithEventHandlers,g as WithIcon,y as WithIconRight,u as WithLongText,f as WithLongTextAndIcon,b as WithRef,w as WithSpinner,S as WithType,Xe as __namedExportsOrder,_e as default};
//# sourceMappingURL=InlineButton.test.stories-Dr2ktwak.js.map
