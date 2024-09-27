import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as Me}from"./index-BwDkhjyp.js";import{I as s}from"./index-DMYlLpXe.js";import{a as Le}from"./index-CI44Z2h3.js";import{w as c,e as n,f as R,c as j,u as C}from"./index-hUG6DWTw.js";import{w as o}from"./storybook.testing.utils-CMs160i9.js";import{S as d}from"./icon.systems-Cj7Nt_Zb.js";import{a as $e}from"./base-props.types-BkCKQDF7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./icon.utils-Djpt9B5F.js";const Ne=Object.values(d)[14],Ge=Object.values(d)[40],Ke=Object.values(d)[15],Ve=Object.values(d)[52],u=(e,l)=>async({canvasElement:i})=>{const H=c(i).getByRole("button");await n(H).toBeInTheDocument(),await n(H).toHaveAttribute(e,l)},Xe=[...$e].slice(0,4),la={component:s,title:"Tester/IconButton",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},isOutlined:{table:{disable:!0}},size:{table:{disable:!0},options:Xe,control:"radio"},svgPath:{table:{disable:!0},options:Object.keys(d),mapping:d},title:{table:{disable:!0}},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaExpanded:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}}},ke="dummy tekst accessible name",t={svgPath:Ne,title:ke},m={name:"With Ref (FA1)",args:{...t,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:u("id","dummyIdForwardedFromRef")},b={name:"With Attributes(FA2-5)",args:{...t,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const i=c(e).getByRole("button");await n(i).toHaveClass("dummyClassname"),await n(i).toHaveAttribute("id","htmlId"),await n(i).toHaveAttribute("lang","nb"),await n(i).toHaveAttribute("data-testid","123ID")}},p={name:"Defaults (A1, B1, B2)",args:{...t},argTypes:{svgPath:{table:{disable:!1}},title:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} > button`,focus:`${o} > button`,click:`${o} > button`}},play:async({canvasElement:e})=>{const l=c(e),i=l.getByRole("button");n(i).toHaveAttribute("type",Le());const r=i.querySelector("svg");await n(r).toHaveAttribute("viewBox","0 0 24 24"),await n(r).toHaveAttribute("aria-hidden","false"),await n(l.getByTitle(ke)).toBeInTheDocument()}},g={name:"With Outline (A1)",args:{...t,isOutlined:!0},argTypes:{isOutlined:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} > button`,focus:`${o} > button`,click:`${o} > button`}}},h={name:"With Custom SVGPath (A1)",args:{...t,svgPath:a.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},y={name:"With Size Extra Small (A1)",args:{...t,size:"extraSmall"},argTypes:{size:{table:{disable:!1}}}},f={name:"With Size Small (A1)",args:{...t,size:"small"},argTypes:{size:{table:{disable:!1}}}},S={name:"With Size Large (A1)",args:{...t,size:"large"},argTypes:{size:{table:{disable:!1}}}},v={name:"With Size Extra Small and Outline (A1)",args:{...t,size:"extraSmall",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},A={name:"With Size Small and Outline (A1)",args:{...t,size:"small",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},W={name:"With Size Large and Outline (A1)",args:{...t,size:"large",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},B={name:"With Disabled (B5)",args:{...t,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},play:async({canvasElement:e})=>{const l=c(e);n(l.getByRole("button")).toBeDisabled()}},x={name:"With Disabled And Outline (B5)",args:{...t,isOutlined:!0,disabled:!0},argTypes:{isOutlined:{table:{disable:!1}},disabled:{table:{disable:!1}}}},z={name:"With Type (B1)",args:{...t,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:u("type","submit")},T={name:"With AriaDescribedby (B3)",args:{...t,ariaDescribedby:"araiDescId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:u("aria-describedby","araiDescId")},O={name:"With AriaExpanded (B6)",args:{...t,ariaExpanded:!0},argTypes:{ariaExpanded:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:u("aria-expanded","true")},w={name:"With AccessKey (B4)",args:{...t,accessKey:"a"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:u("accessKey","a")},qe=e=>{const[l,i]=Me.useState(Ne);return a.jsx(s,{...e,svgPath:l,onFocus:r=>{i(Ge),e.onFocus&&e.onFocus(r)},onBlur:r=>{i(Ke),e.onBlur&&e.onBlur(r)},onClick:r=>{i(Ve),e.onClick&&e.onClick(r)}})},D={render:qe,name:"With EventHandlers (A2 delvis)",args:{...t,onFocus:R(),onBlur:R(),onClick:R()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:l})=>{const r=c(l).getByRole("button");await n(r).toBeInTheDocument(),await r.focus(),await j(()=>n(e.onFocus).toHaveBeenCalled()),await C.tab(),await j(()=>n(e.onBlur).toHaveBeenCalled()),await C.click(r),await j(()=>n(e.onClick).toHaveBeenCalled())}},_e=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(s,{...e,hasSpinner:!1,size:"extraSmall",className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,hasSpinner:!1,size:"small",className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,hasSpinner:!1,className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,hasSpinner:!1,size:"large",isOutlined:!0})]}),a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(s,{...e,size:"extraSmall",className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,size:"small",className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,className:"marginRightM",isOutlined:!0}),a.jsx(s,{...e,size:"large",isOutlined:!0})]}),a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(s,{...e,hasSpinner:!1,size:"extraSmall",className:"marginRightM"}),a.jsx(s,{...e,hasSpinner:!1,size:"small",className:"marginRightM"}),a.jsx(s,{...e,hasSpinner:!1,className:"marginRightM"}),a.jsx(s,{...e,hasSpinner:!1,size:"large"})]}),a.jsx(s,{...e,size:"extraSmall",className:"marginRightM"}),a.jsx(s,{...e,size:"small",className:"marginRightM"}),a.jsx(s,{...e,className:"marginRightM"}),a.jsx(s,{...e,size:"large"})]}),E={render:_e,name:"With Spinner (A4)",args:{...t,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}};var F,I,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var N,k,M;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(k=b.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var L,$,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const svg = iconButton.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('aria-hidden', 'false');
    await expect(canvas.getByTitle(accessibleName)).toBeInTheDocument();
  }
} satisfies Story`,...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,V,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var q,_,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(_=h.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Q,U,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(U=y.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,re,le;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(re=v.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,de,ce;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,be;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(me=W.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var pe,ge,he;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,fe,Se;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ve,Ae,We;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var Be,xe,ze;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var Te,Oe,we;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Oe=O.parameters)==null?void 0:Oe.docs)==null?void 0:we.source}}};var De,Ee,Re;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var je,He,Ce;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
    await iconButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(iconButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(Ce=(He=D.parameters)==null?void 0:He.docs)==null?void 0:Ce.source}}};var Fe,Ie,Pe;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pe=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};const oa=["WithRef","WithAttributes","Defaults","WithOutline","WithCustomSVGPath","WithSizeExtraSmall","WithSizeSmall","WithSizeLarge","WithSizeExtraSmallAndOutline","WithSizeSmallAndOutline","WithSizeLargeAndOutline","WithDisabled","WithDisabledAndOutline","WithType","WithAriaDescribedby","WithAriaExpanded","WithAccesskey","WithEventHandlers","WithSpinner"];export{p as Defaults,w as WithAccesskey,T as WithAriaDescribedby,O as WithAriaExpanded,b as WithAttributes,h as WithCustomSVGPath,B as WithDisabled,x as WithDisabledAndOutline,D as WithEventHandlers,g as WithOutline,m as WithRef,y as WithSizeExtraSmall,v as WithSizeExtraSmallAndOutline,S as WithSizeLarge,W as WithSizeLargeAndOutline,f as WithSizeSmall,A as WithSizeSmallAndOutline,E as WithSpinner,z as WithType,oa as __namedExportsOrder,la as default};
//# sourceMappingURL=IconButton.test.stories-COtY2X-S.js.map
