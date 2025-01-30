import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as ke}from"./index-ClcD9ViR.js";import{w as c,e as n,f as w,b as x,u as P}from"./index-XVqkR3zt.js";import{I as o}from"./index-U0B695k8.js";import{a as Te}from"./index--O6iZ70i.js";import{e as l}from"./index-BWc9jU-Q.js";import{w as D}from"./storybook.testing.utils-CMs160i9.js";import{S as j}from"./icon.systems-Dd2n3D8G.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dxnk4fMh.js";import"./icon.utils-BQ79h5X2.js";const We="Legg til rapport",W=(e,i)=>async({canvasElement:a})=>{const I=c(a).getByRole("button");await n(I).toBeInTheDocument(),await n(I).toHaveAttribute(e,i)},Ke={component:o,title:"Tester/InlineButton",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},iconPosition:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(j),mapping:j},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}}},t={children:We},d={name:"With Ref (FA1)",args:{...t,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:W("id","dummyIdForwardedFromRef")},m={name:"With Attributes(FA2-5)",args:{...t,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID"),await n(a).toHaveAttribute("form","formid123")}},p={name:"Defaults (A1, B1)",args:{...t},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${D} > button`,hover:`${D} > button`,click:`${D} > button`}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("type",Te())}},u={name:"With Long Text (A1)",args:{...t,children:"Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert."},argTypes:{children:{table:{disable:!1}}}},b={name:"With Icon (A3, A4, B4)",args:{...t,svgPath:l},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button"),s=a.querySelector("svg");await n(s).toHaveAttribute("viewBox","0 0 24 24"),await n(a).toBeInTheDocument()}},g={name:"With Custom Icon (A3)",args:{...t,svgPath:r.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},h={name:"With Long Text And Icon (A3)",args:{...t,svgPath:l,iconPosition:"right",children:"Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert."},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},f={name:"With Icon Right (A5)",args:{...t,svgPath:l,iconPosition:"right"},argTypes:{iconPosition:{table:{disable:!1}}}},v={name:"With Disabled (B5)",args:{...t,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const i=c(e);n(i.getByRole("button")).toBeDisabled()}},y={name:"With Disabled And Icon (B5)",args:{...t,svgPath:l,disabled:!0},argTypes:{disabled:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},A={name:"With Type (B1)",args:{...t,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:W("type","submit")},B={name:"With AriaDescribedby (B2)",args:{...t,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:W("aria-describedby","testid1234")},S={name:"With Accesskey (B3)",args:{...t,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:W("accessKey","j")},we=e=>{const[i,a]=ke.useState("bruk knapp for å events");return r.jsx(o,{...e,onFocus:s=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(s)},onClick:s=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(s)},children:i})},k={render:we,name:"With EventHandlers (A2 delvis)",args:{...t,onFocus:w(),onClick:w(),onBlur:w()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:i})=>{const s=c(i).getByRole("button");await n(s).toBeInTheDocument(),s.focus(),await x(()=>n(e.onFocus).toHaveBeenCalled()),await P.tab(),await x(()=>n(e.onBlur).toHaveBeenCalled()),await P.click(s),await x(()=>n(e.onClick).toHaveBeenCalled())}},xe=e=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex bottomSpacingXL",children:[r.jsx(o,{...e,hasSpinner:!1,className:"marginRightM"}),r.jsx(o,{...e,svgPath:l,hasSpinner:!1,className:"marginRightM"}),r.jsx(o,{...e,svgPath:l,iconPosition:"right",hasSpinner:!1})]}),r.jsxs("div",{className:"flex",children:[r.jsx(o,{...e,className:"marginRightM"}),r.jsx(o,{...e,svgPath:l,className:"marginRightM"}),r.jsx(o,{...e,svgPath:l,iconPosition:"right"})]})]}),T={render:xe,name:"With Spinner (A8)",args:{...t,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}};var H,R,C;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(R=d.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var F,E,L;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,K,V;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(K=p.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var M,O,G;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(O=u.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var $,q,Z;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(q=b.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};var _,X,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var J,Q,U;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,ee,ae;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(te=v.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ie,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ce,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ue;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,ge,he;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,ve,ye;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ae,Be,Se;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};const Ve=["WithRef","WithAttributes","Defaults","WithLongText","WithIcon","WithCustomIcon","WithLongTextAndIcon","WithIconRight","WithDisabled","WithDisabledAndIcon","WithType","WithAriaDescribedby","WithAccesskey","WithEventHandlers","WithSpinner"];export{p as Defaults,S as WithAccesskey,B as WithAriaDescribedby,m as WithAttributes,g as WithCustomIcon,v as WithDisabled,y as WithDisabledAndIcon,k as WithEventHandlers,b as WithIcon,f as WithIconRight,u as WithLongText,h as WithLongTextAndIcon,d as WithRef,T as WithSpinner,A as WithType,Ve as __namedExportsOrder,Ke as default};
//# sourceMappingURL=InlineButton.test.stories-jkjFlB08.js.map
