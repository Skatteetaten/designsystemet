import{r as S,j as T}from"./iframe-VHQh6taY.js";import{M as A,o as f,P as B}from"./index-Di_7ammq.js";import{T as y}from"./TopBannerButton-CyO2leJr.js";import{S as h}from"./icon.systems-pjRjKMCZ.js";const{expect:n,userEvent:w,within:l,waitFor:x,fn:C}=__STORYBOOK_MODULE_TEST__,E={component:y,title:"Tester/TopBannerExternal/Button (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(h),mapping:h},title:{table:{disable:!0}},variant:{table:{disable:!0}},ariaExpanded:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},v="Meny",s={children:v,svgPath:A},o={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button");await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button");await n(a).toHaveAttribute("id","htmlid"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},c={name:"With ClassNames (FA3, Username A2)",args:{...s,classNames:{container:"dummyClassname",text:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("button"),i=t.getByText(v);await n(a).toHaveClass("dummyClassname"),await n(i).toHaveClass("dummyClassname")}},m={name:"Defaults (LoginButton A1, A2)",args:{...s},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{viewport:{value:"--breakpoint-m"}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("button",{name:v}),i=t.getByRole("img",{hidden:!0});await n(a).toBeInTheDocument(),await n(i).toBeInTheDocument()}},d={name:"Variant Filled (LoginButton A1, A2)",args:{...s,children:"Logg inn",svgPath:f,variant:"filled"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{viewport:{value:"--breakpoint-m"}}},u={name:"With Title (Username A2)",args:{...s,variant:"filled",svgPath:B,title:"Title",children:"Knotten, Gudleik"},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByText("Title");await n(a).toBeInTheDocument()}},b={name:"Defaults On Mobile Screen  (LoginButton A1, A2)",args:{...s},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{viewport:{value:"--mobile"}}},p={name:"Variant Filled On Mobile Screen  (LoginButton A1, A2)",args:{...s,children:"Logg inn",svgPath:f,variant:"filled"},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}},variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{viewport:{value:"--mobile"}}},k=e=>{const[t,a]=S.useState("Klikk på meg");return T.jsx(y,{...e,onClick:i=>{a("Blitt klikket på"),e.onClick&&e.onClick(i)},children:t})},g={render:k,name:"With EventHandlers (LoginButton A3, Username A4)",args:{...s,onClick:C()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:t})=>{const i=l(t).getByRole("button");await n(i).toBeInTheDocument(),await w.click(i),await x(()=>n(e.onClick).toHaveBeenCalled())}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
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
} satisfies Story`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};const P=["WithRef","WithAttributes","WithClassNames","Defaults","WithVariantFilled","WithTitle","DefaultsOnMobileScreen","VariantFilledOnMobileScreen","WithEventHandlers"],D=Object.freeze(Object.defineProperty({__proto__:null,Defaults:m,DefaultsOnMobileScreen:b,VariantFilledOnMobileScreen:p,WithAttributes:r,WithClassNames:c,WithEventHandlers:g,WithRef:o,WithTitle:u,WithVariantFilled:d,__namedExportsOrder:P,default:E},Symbol.toStringTag,{value:"Module"}));export{D as T};
//# sourceMappingURL=TopBannerButton.test.stories-Brq7JQWJ.js.map
