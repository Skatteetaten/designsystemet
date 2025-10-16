import{r as Y,j as q}from"./iframe-DRo7xN6O.js";import{M as J,l as K,P as Q}from"./index-CIGiQTsv.js";import{T as z}from"./TopBannerButton-C2ELRsfh.js";import{S as h}from"./icon.systems-YNVHmwDx.js";const{expect:n,userEvent:X,within:r,waitFor:Z,fn:$}=__STORYBOOK_MODULE_TEST__,ee={component:z,title:"Tester/TopBanner/TopBannerButton (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(h),mapping:h},title:{table:{disable:!0}},variant:{table:{disable:!0}},ariaExpanded:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},v="Meny",s={children:v,svgPath:J},l={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("button");await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=r(e).getByRole("button");await n(a).toHaveAttribute("id","htmlid"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},c={name:"With ClassNames (FA3, Username A2)",args:{...s,classNames:{container:"dummyClassname",text:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=r(e),a=t.getByRole("button"),o=t.getByText(v);await n(a).toHaveClass("dummyClassname"),await n(o).toHaveClass("dummyClassname")}},m={name:"Defaults (LoginButton A1, A2)",args:{...s},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},globals:{viewport:{value:"--breakpoint-m"}},play:async({canvasElement:e})=>{const t=r(e),a=t.getByRole("button",{name:v}),o=t.getByRole("img",{hidden:!0});await n(a).toBeInTheDocument(),await n(o).toBeInTheDocument()}},d={name:"Variant Filled (LoginButton A1, A2)",args:{...s,children:"Logg inn",svgPath:K,variant:"filled"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},globals:{viewport:{value:"--breakpoint-m"}}},u={name:"With Title (Username A2)",args:{...s,variant:"filled",svgPath:Q,title:"Title",children:"Knotten, Gudleik"},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=r(e).getByText("Title");await n(a).toBeInTheDocument()}},p={name:"Defaults On Mobile Screen  (LoginButton A1, A2)",args:{...s},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},globals:{viewport:{value:"--mobile"}}},b={name:"Variant Filled On Mobile Screen  (LoginButton A1, A2)",args:{...s,children:"Logg inn",svgPath:K,variant:"filled"},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}},variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},globals:{viewport:{value:"--mobile"}}},ae=e=>{const[t,a]=Y.useState("Klikk på meg");return q.jsx(z,{...e,onClick:o=>{a("Blitt klikket på"),e.onClick&&e.onClick(o)},children:t})},g={render:ae,name:"With EventHandlers (LoginButton A3, Username A4)",args:{...s,onClick:$()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t})=>{const o=r(t).getByRole("button");await n(o).toBeInTheDocument(),await X.click(o),await Z(()=>n(e.onClick).toHaveBeenCalled())}};var f,y,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var T,A,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
  parameters: {
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
  }
} satisfies Story`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var w,C,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,k,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-m'
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
} satisfies Story`,...(P=(k=m.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var F,H,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var W,D,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('Title');
    await expect(title).toBeInTheDocument();
  }
} satisfies Story`,...(L=(D=u.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var O,I,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var M,N,_;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...(_=(N=b.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var G,U,j;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (LoginButton A3, Username A4)',
  args: {
    ...defaultArgs,
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
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(j=(U=g.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const te=["WithRef","WithAttributes","WithClassNames","Defaults","WithVariantFilled","WithTitle","DefaultsOnMobileScreen","VariantFilledOnMobileScreen","WithEventHandlers"],le=Object.freeze(Object.defineProperty({__proto__:null,Defaults:m,DefaultsOnMobileScreen:p,VariantFilledOnMobileScreen:b,WithAttributes:i,WithClassNames:c,WithEventHandlers:g,WithRef:l,WithTitle:u,WithVariantFilled:d,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{le as T};
//# sourceMappingURL=TopBannerButton.test.stories-Q5fSXfE-.js.map
