import{j as a}from"./jsx-runtime-CfatFE5O.js";import{r as Me}from"./index-ClcD9ViR.js";import{w as d,e as n,f as E,b as R,u as H}from"./index-XVqkR3zt.js";import{a as s}from"./index-U0B695k8.js";import{a as Ge}from"./index--O6iZ70i.js";import{d as Ve,C as Le,B as $e,D as Ke}from"./index-BWc9jU-Q.js";import{w as o}from"./storybook.testing.utils-CMs160i9.js";import{S as F}from"./icon.systems-Dd2n3D8G.js";import{a as Xe}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dxnk4fMh.js";import"./icon.utils-BQ79h5X2.js";const Ne=Ve,qe=Le,_e=$e,Je=Ke,c=(e,l)=>async({canvasElement:i})=>{const C=d(i).getByRole("button");await n(C).toBeInTheDocument(),await n(C).toHaveAttribute(e,l)},Qe=[...Xe].slice(0,4),ua={component:s,title:"Tester/IconButton",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},isOutlined:{table:{disable:!0}},size:{table:{disable:!0},options:Qe,control:"radio"},svgPath:{table:{disable:!0},options:Object.keys(F),mapping:F},title:{table:{disable:!0}},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaExpanded:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}}},ke="dummy tekst accessible name",t={svgPath:Ne,title:ke},u={name:"With Ref (FA1)",args:{...t,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:c("id","dummyIdForwardedFromRef")},m={name:"With Attributes(FA2-5)",args:{...t,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const i=d(e).getByRole("button");await n(i).toHaveClass("dummyClassname"),await n(i).toHaveAttribute("id","htmlId"),await n(i).toHaveAttribute("lang","nb"),await n(i).toHaveAttribute("data-testid","123ID")}},p={name:"Defaults (A1, B1, B2)",args:{...t},argTypes:{svgPath:{table:{disable:!1}},title:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} > button`,focus:`${o} > button`,click:`${o} > button`}},play:async({canvasElement:e})=>{const l=d(e),i=l.getByRole("button");n(i).toHaveAttribute("type",Ge());const r=i.querySelector("svg");await n(r).toHaveAttribute("viewBox","0 0 24 24"),await n(r).toHaveAttribute("aria-hidden","false"),await n(l.getByTitle(ke)).toBeInTheDocument()}},b={name:"With Outline (A1)",args:{...t,isOutlined:!0},argTypes:{isOutlined:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} > button`,focus:`${o} > button`,click:`${o} > button`}}},g={name:"With Custom SVGPath (A1)",args:{...t,svgPath:a.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},h={name:"With Size Extra Small (A1)",args:{...t,size:"extraSmall"},argTypes:{size:{table:{disable:!1}}}},y={name:"With Size Small (A1)",args:{...t,size:"small"},argTypes:{size:{table:{disable:!1}}}},f={name:"With Size Large (A1)",args:{...t,size:"large"},argTypes:{size:{table:{disable:!1}}}},S={name:"With Size Extra Small and Outline (A1)",args:{...t,size:"extraSmall",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},v={name:"With Size Small and Outline (A1)",args:{...t,size:"small",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},A={name:"With Size Large and Outline (A1)",args:{...t,size:"large",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},B={name:"With Disabled (B5)",args:{...t,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const l=d(e);n(l.getByRole("button")).toBeDisabled()}},W={name:"With Disabled And Outline (B5)",args:{...t,isOutlined:!0,disabled:!0},argTypes:{isOutlined:{table:{disable:!1}},disabled:{table:{disable:!1}}}},x={name:"With Type (B1)",args:{...t,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:c("type","submit")},z={name:"With AriaDescribedby (B3)",args:{...t,ariaDescribedby:"araiDescId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:c("aria-describedby","araiDescId")},T={name:"With AriaExpanded (B6)",args:{...t,ariaExpanded:!0},argTypes:{ariaExpanded:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:c("aria-expanded","true")},w={name:"With AccessKey (B4)",args:{...t,accessKey:"a"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:c("accessKey","a")},Ue=e=>{const[l,i]=Me.useState(Ne);return a.jsx(s,{...e,svgPath:l,onFocus:r=>{i(qe),e.onFocus&&e.onFocus(r)},onBlur:r=>{i(_e),e.onBlur&&e.onBlur(r)},onClick:r=>{i(Je),e.onClick&&e.onClick(r)}})},O={render:Ue,name:"With EventHandlers (A2 delvis)",args:{...t,onFocus:E(),onBlur:E(),onClick:E()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:l})=>{const r=d(l).getByRole("button");await n(r).toBeInTheDocument(),r.focus(),await R(()=>n(e.onFocus).toHaveBeenCalled()),await H.tab(),await R(()=>n(e.onBlur).toHaveBeenCalled()),await H.click(r),await R(()=>n(e.onClick).toHaveBeenCalled())}},Ye=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(s,{...e,hasSpinner:!1,size:"extraSmall",className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,hasSpinner:!1,size:"small",className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,hasSpinner:!1,className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,hasSpinner:!1,size:"large",isOutlined:!0})]}),a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(s,{...e,size:"extraSmall",className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,size:"small",className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,size:"large",isOutlined:!0})]}),a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(s,{...e,hasSpinner:!1,size:"extraSmall",className:"marginRightM"}),a.jsx(s,{...e,hasSpinner:!1,size:"small",className:"marginRightM"}),a.jsx(s,{...e,hasSpinner:!1,className:"marginRightM"}),a.jsx(s,{...e,hasSpinner:!1,size:"large"})]}),a.jsx(s,{...e,size:"extraSmall",className:"marginRightM"}),a.jsx(s,{...e,size:"small",className:"marginRightM"}),a.jsx(s,{...e,className:"marginRightM"}),a.jsx(s,{...e,size:"large"})]}),D={render:Ye,name:"With Spinner (A4)",args:{...t,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}};var j,I,P;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var N,k,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toHaveClass('dummyClassname');
    await expect(iconButton).toHaveAttribute('id', 'htmlId');
    await expect(iconButton).toHaveAttribute('lang', 'nb');
    await expect(iconButton).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(M=(k=m.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var G,V,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Defaults (A1, B1, B2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    },
    title: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > button\`,
      focus: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    expect(iconButton).toHaveAttribute('type', getCommonButtonTypeDefault());
    const svg = iconButton.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('aria-hidden', 'false');
    await expect(canvas.getByTitle(accessibleName)).toBeInTheDocument();
  }
} satisfies Story`,...(L=(V=p.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var $,K,X;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With Outline (A1)',
  args: {
    ...defaultArgs,
    isOutlined: true
  },
  argTypes: {
    isOutlined: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > button\`,
      focus: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  }
} satisfies Story`,...(X=(K=b.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var q,_,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Custom SVGPath (A1)',
  args: {
    ...defaultArgs,
    svgPath: <path d={'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'} />
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
} satisfies Story`,...(J=(_=g.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Q,U,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'With Size Extra Small (A1)',
  args: {
    ...defaultArgs,
    size: 'extraSmall'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,ae;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Size Small (A1)',
  args: {
    ...defaultArgs,
    size: 'small'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'With Size Large (A1)',
  args: {
    ...defaultArgs,
    size: 'large'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,re,le;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'With Size Extra Small and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'extraSmall',
    isOutlined: true
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    isOutlined: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(le=(re=S.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,de,ce;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With Size Small and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'small',
    isOutlined: true
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    isOutlined: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ce=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,pe;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With Size Large and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'large',
    isOutlined: true
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    isOutlined: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(pe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,ge,he;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,fe,Se;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'With Disabled And Outline (B5)',
  args: {
    ...defaultArgs,
    isOutlined: true,
    disabled: true
  },
  argTypes: {
    isOutlined: {
      table: {
        disable: false
      }
    },
    disabled: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Se=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ve,Ae,Be;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var We,xe,ze;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'With AriaDescribedby (B3)',
  args: {
    ...defaultArgs,
    ariaDescribedby: 'araiDescId'
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
  play: verifyAttribute('aria-describedby', 'araiDescId')
} satisfies Story`,...(ze=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var Te,we,Oe;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'With AriaExpanded (B6)',
  args: {
    ...defaultArgs,
    ariaExpanded: true
  },
  argTypes: {
    ariaExpanded: {
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
  play: verifyAttribute('aria-expanded', 'true')
} satisfies Story`,...(Oe=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};var De,Ee,Re;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'With AccessKey (B4)',
  args: {
    ...defaultArgs,
    accessKey: 'a'
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
  play: verifyAttribute('accessKey', 'a')
} satisfies Story`,...(Re=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Ce,He,Fe;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    iconButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(iconButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(Fe=(He=O.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var je,Ie,Pe;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: TemplateWithSpinner,
  name: 'With Spinner (A4)',
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
} satisfies Story`,...(Pe=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};const ma=["WithRef","WithAttributes","Defaults","WithOutline","WithCustomSVGPath","WithSizeExtraSmall","WithSizeSmall","WithSizeLarge","WithSizeExtraSmallAndOutline","WithSizeSmallAndOutline","WithSizeLargeAndOutline","WithDisabled","WithDisabledAndOutline","WithType","WithAriaDescribedby","WithAriaExpanded","WithAccesskey","WithEventHandlers","WithSpinner"];export{p as Defaults,w as WithAccesskey,z as WithAriaDescribedby,T as WithAriaExpanded,m as WithAttributes,g as WithCustomSVGPath,B as WithDisabled,W as WithDisabledAndOutline,O as WithEventHandlers,b as WithOutline,u as WithRef,h as WithSizeExtraSmall,S as WithSizeExtraSmallAndOutline,f as WithSizeLarge,A as WithSizeLargeAndOutline,y as WithSizeSmall,v as WithSizeSmallAndOutline,D as WithSpinner,x as WithType,ma as __namedExportsOrder,ua as default};
//# sourceMappingURL=IconButton.test.stories-BHtABmER.js.map
