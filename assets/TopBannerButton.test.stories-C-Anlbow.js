import{j as z}from"./jsx-runtime-BjG_zV1W.js";import{r as J}from"./index-D_ouKaeX.js";import{f as Q,w as i,e as n,u as X,b as Y}from"./index-DIxTUSTt.js";import{M as Z,l as _,P as ee}from"./index-DAV9Xejq.js";import{w as s}from"./storybook.testing.utils-CMs160i9.js";import{T as q}from"./TopBannerButton-gnYzOY4E.js";import{S as h}from"./icon.systems-DGFW7KrD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGk5cNE3.js";import"./icon.utils-XW2L0FSl.js";const ue={component:q,title:"Tester/TopBanner/TopBannerButton (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(h),mapping:h},title:{table:{disable:!0}},variant:{table:{disable:!0}},ariaExpanded:{table:{disable:!0}},onClick:{table:{disable:!0}}}},f="Meny",r={children:f,svgPath:Z},l={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button");await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button");await n(a).toHaveAttribute("id","htmlid"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},m={name:"With ClassNames (FA3, Username A2)",args:{...r,classNames:{container:"dummyClassname",text:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByRole("button"),o=t.getByText(f);await n(a).toHaveClass("dummyClassname"),await n(o).toHaveClass("dummyClassname")}},d={name:"Defaults (LoginButton A1, A2)",args:{...r},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"},imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`}},play:async({canvasElement:e})=>{const t=i(e),a=t.getByRole("button",{name:f}),o=t.getByRole("img",{hidden:!0});await n(a).toBeInTheDocument(),await n(o).toBeInTheDocument()}},u={name:"Variant Filled (LoginButton A1, A2)",args:{...r,children:"Logg inn",svgPath:_,variant:"filled"},argTypes:{variant:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-m"},imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`}}},p={name:"With Title (Username A2)",args:{...r,variant:"filled",svgPath:ee,title:"Title",children:"Knotten, Gudleik"},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByText("Title");await n(a).toBeInTheDocument()}},b={name:"Defaults On Mobile Screen  (LoginButton A1, A2)",args:{...r},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`},viewport:{defaultViewport:"--mobile"}}},g={name:"Variant Filled On Mobile Screen  (LoginButton A1, A2)",args:{...r,children:"Logg inn",svgPath:_,variant:"filled"},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}},variant:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${s} > button`,hover:`${s} > button`,click:`${s} > button`},viewport:{defaultViewport:"--mobile"}}},ae=e=>{const[t,a]=J.useState("Klikk på meg");return z.jsx(q,{...e,onClick:o=>{a("Blitt klikket på"),e.onClick&&e.onClick(o)},children:t})},v={render:ae,name:"With EventHandlers (LoginButton A3, Username A4)",args:{...r,onClick:Q()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:t})=>{const o=i(t).getByRole("button");await n(o).toBeInTheDocument(),await X.click(o),await Y(()=>n(e.onClick).toHaveBeenCalled())}};var y,w,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var S,T,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var k,C,x;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(C=m.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,F,P;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    viewport: {
      defaultViewport: '--breakpoint-m'
    },
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
} satisfies Story`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var $,H,V;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    viewport: {
      defaultViewport: '--breakpoint-m'
    },
    imageSnapshot: {
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
    }
  }
} satisfies Story`,...(V=(H=u.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var W,R,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(R=p.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var L,I,N;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(I=b.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var O,M,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(M=g.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var U,j,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(j=v.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};const pe=["WithRef","WithAttributes","WithClassNames","Defaults","WithVariantFilled","WithTitle","DefaultsOnMobileScreen","VariantFilledOnMobileScreen","WithEventHandlers"];export{d as Defaults,b as DefaultsOnMobileScreen,g as VariantFilledOnMobileScreen,c as WithAttributes,m as WithClassNames,v as WithEventHandlers,l as WithRef,p as WithTitle,u as WithVariantFilled,pe as __namedExportsOrder,ue as default};
//# sourceMappingURL=TopBannerButton.test.stories-C-Anlbow.js.map
