import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as be}from"./index-7h80QhK_.js";import{f as ge,w as o,e as s,u as ve,b as he}from"./index-DIxTUSTt.js";import{Y as de,Z as B,_ as T,P as fe}from"./index-vpaAjjI_.js";import{w as a}from"./storybook.testing.utils-CMs160i9.js";import{T as c}from"./TopBannerButton-CIKRXb5P.js";import{S as k}from"./icon.systems-DPAJIO4Y.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EsEcB_zD.js";import"./icon.utils-XW2L0FSl.js";const ye=["outline","filled"],Ce={component:c,title:"Tester/TopBanner/TopBannerButton (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(k),mapping:k},title:{table:{disable:!0}},variant:{table:{disable:!0},options:[...ye],control:"radio"},ariaExpanded:{table:{disable:!0}},onClick:{table:{disable:!0}}}},V="Meny",r={children:V,svgPath:de},u={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e).getByRole("button");await s(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=o(e).getByRole("button");await s(n).toHaveAttribute("id","htmlid"),await s(n).toHaveClass("dummyClassname"),await s(n).toHaveAttribute("lang","nb"),await s(n).toHaveAttribute("data-testid","123ID")}},d={name:"With ClassNames (FA3, Username A2)",args:{...r,classNames:{container:"dummyClassname",text:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=o(e),n=t.getByRole("button"),i=t.getByText(V);await s(n).toHaveClass("dummyClassname"),await s(i).toHaveClass("dummyClassname")}},p={name:"Defaults (LoginButton A1, A2)",args:{...r},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${a} > button`,hover:`${a} > button`,click:`${a} > button`}},play:async({canvasElement:e})=>{const t=o(e),n=t.getByRole("button",{name:V}),i=t.getByRole("img",{hidden:!0});await s(n).toBeInTheDocument(),await s(i).toBeInTheDocument()}},b={name:"Variant Outline (LoginButton A1, A2)",args:{...r,children:"Logg ut",svgPath:B,variant:"outline"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${a} > button`,hover:`${a} > button`,click:`${a} > button`}}},g={name:"Variant Filled (LoginButton A1, A2)",args:{...r,children:"Logg inn",svgPath:T,variant:"filled"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${a} > button`,hover:`${a} > button`,click:`${a} > button`}}},v={name:"With Title (Username A2)",args:{...r,variant:"filled",svgPath:fe,title:"Title",children:"Knotten, Gudleik"},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e).getByText("Title");await s(n).toBeInTheDocument()}},h={name:"Defaults On Mobile Screen  (LoginButton A1, A2)",args:{...r},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${a} > button`,hover:`${a} > button`,click:`${a} > button`},viewport:{defaultViewport:"--mobile"}}},f={name:"Variant Outline On Mobile Screen  (LoginButton A1, A2)",args:{...r,children:"Logg ut",svgPath:B,variant:"outline"},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}},variant:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${a} > button`,hover:`${a} > button`,click:`${a} > button`},viewport:{defaultViewport:"--mobile"}}},y={name:"Variant Filled On Mobile Screen  (LoginButton A1, A2)",args:{...r,children:"Logg inn",svgPath:T,variant:"filled"},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}},variant:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${a} > button`,hover:`${a} > button`,click:`${a} > button`},viewport:{defaultViewport:"--mobile"}}},pe=()=>l.jsxs("div",{className:"topbannerButtonContainer",children:[l.jsx(c,{svgPath:de,children:"Meny"}),l.jsx(c,{svgPath:B,variant:"outline",children:"Logg ut"}),l.jsx(c,{svgPath:T,variant:"filled",children:"Logg in"})]}),A={render:pe,name:"All Variants On Mobile Screen (LoginButton A1, A2)",parameters:{viewport:{defaultViewport:"--mobile"}}},w={render:pe,name:"All Variants On Breakpoint-s (LoginButton A1, A2)",parameters:{viewport:{defaultViewport:"--breakpoint-s"}}},Ae=e=>{const[t,n]=be.useState("Klikk på meg");return l.jsx(c,{...e,onClick:i=>{n("Blitt klikket på"),e.onClick&&e.onClick(i)},children:t})},S={render:Ae,name:"With EventHandlers (LoginButton A3, Username A4)",args:{...r,onClick:ge()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:t})=>{const i=o(t).getByRole("button");await s(i).toBeInTheDocument(),await ve.click(i),await he(()=>s(e.onClick).toHaveBeenCalled())}};var O,$,x;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(x=($=u.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var L,C,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlid');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(P=(C=m.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var W,E,F;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'With ClassNames (FA3, Username A2)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      text: 'dummyClassname'
    }
  },
  argTypes: {
    classNames: {
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
    const span = canvas.getByText(defaultButtonText);
    await expect(button).toHaveClass('dummyClassname');
    await expect(span).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var H,R,D;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Defaults (LoginButton A1, A2)',
  args: {
    ...defaultArgs
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
    const button = canvas.getByRole('button', {
      name: defaultButtonText
    });
    const svg = canvas.getByRole('img', {
      hidden: true
    });
    await expect(button).toBeInTheDocument();
    await expect(svg).toBeInTheDocument();
  }
} satisfies Story`,...(D=(R=p.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var M,I,N;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Variant Outline (LoginButton A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Logg ut',
    svgPath: LogOutSVGpath,
    variant: 'outline'
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
  }
} satisfies Story`,...(N=(I=b.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var G,j,U;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Variant Filled (LoginButton A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Logg inn',
    svgPath: LockOutlineSVGpath,
    variant: 'filled'
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
  }
} satisfies Story`,...(U=(j=g.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var K,_,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Title (Username A2)',
  args: {
    ...defaultArgs,
    variant: 'filled',
    svgPath: PersonSVGpath,
    title: 'Title',
    children: 'Knotten, Gudleik'
  },
  argTypes: {
    title: {
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
    const title = canvas.getByText('Title');
    await expect(title).toBeInTheDocument();
  }
} satisfies Story`,...(Y=(_=v.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var Z,q,z;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Defaults On Mobile Screen  (LoginButton A1, A2)',
  args: {
    ...defaultArgs
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
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    },
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,Q,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Variant Outline On Mobile Screen  (LoginButton A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Logg ut',
    svgPath: LogOutSVGpath,
    variant: 'outline'
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
    },
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
    },
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ae,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Variant Filled On Mobile Screen  (LoginButton A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Logg inn',
    svgPath: LockOutlineSVGpath,
    variant: 'filled'
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
    },
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
    },
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(ne=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,re;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: TemplateWithAllVariant,
  name: 'All Variants On Mobile Screen (LoginButton A1, A2)',
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(re=(se=A.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,oe,le;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: TemplateWithAllVariant,
  name: 'All Variants On Breakpoint-s (LoginButton A1, A2)',
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s'
    }
  }
} satisfies Story`,...(le=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ue,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (LoginButton A3, Username A4)',
  args: {
    ...defaultArgs,
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
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const Pe=["WithRef","WithAttributes","WithClassNames","Defaults","WithVariantOutline","WithVariantFilled","WithTitle","DefaultsOnMobileScreen","VariantOutlineOnMobileScreen","VariantFilledOnMobileScreen","AllVariantOnMobileScreen","AllVariantOnBreakpointS","WithEventHandlers"];export{w as AllVariantOnBreakpointS,A as AllVariantOnMobileScreen,p as Defaults,h as DefaultsOnMobileScreen,y as VariantFilledOnMobileScreen,f as VariantOutlineOnMobileScreen,m as WithAttributes,d as WithClassNames,S as WithEventHandlers,u as WithRef,v as WithTitle,g as WithVariantFilled,b as WithVariantOutline,Pe as __namedExportsOrder,Ce as default};
//# sourceMappingURL=TopBannerButton.test.stories-DiCv9Nub.js.map
