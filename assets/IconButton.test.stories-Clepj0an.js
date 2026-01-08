import{j as a,g as M,r as G}from"./iframe-s2_bNgHU.js";import{a as t}from"./index-Ck1G954W.js";import{g as L,D as V,B as _,h as K}from"./index-CUsfAC9p.js";import{S as F}from"./icon.systems-DJyjpAy9.js";const{expect:n,fn:C,userEvent:I,waitFor:H,within:P}=__STORYBOOK_MODULE_TEST__,k=L,X=K,q=_,U=V,R=(e,l)=>async({canvasElement:i})=>{const j=P(i).getByRole("button");await n(j).toBeInTheDocument(),await n(j).toHaveAttribute(e,l)},Y={component:t,title:"Tester/IconButton",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},brightness:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},isOutlined:{table:{disable:!0}},size:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(F),mapping:F},title:{table:{disable:!0}},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaExpanded:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},N="dummy tekst accessible name",s={svgPath:k,title:N},o={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("id","dummyIdForwardedFromRef")},d={name:"With Attributes(FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const i=P(e).getByRole("button");await n(i).toHaveClass("dummyClassname"),await n(i).toHaveAttribute("id","htmlId"),await n(i).toHaveAttribute("lang","nb"),await n(i).toHaveAttribute("data-testid","123ID")}},c={name:"Defaults (A1, B1, B2)",args:{...s},argTypes:{svgPath:{table:{disable:!1}},title:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const l=P(e),i=l.getByRole("button");n(i).toHaveAttribute("type",M());const r=i.querySelector("svg");await n(r).toHaveAttribute("viewBox","0 0 24 24"),await n(r).toHaveAttribute("aria-hidden","false"),await n(l.getByTitle(N)).toBeInTheDocument()}},u={name:"With Outline (A1)",args:{...s,isOutlined:!0},argTypes:{isOutlined:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},m={name:"With Custom SVGPath (A1)",args:{...s,svgPath:a.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},b={name:"With Size Extra Small (A1)",args:{...s,size:"extraSmall"},argTypes:{size:{table:{disable:!1}}}},p={name:"With Size Small (A1)",args:{...s,size:"small"},argTypes:{size:{table:{disable:!1}}}},g={name:"With Size Large (A1)",args:{...s,size:"large"},argTypes:{size:{table:{disable:!1}}}},h={name:"With Size Extra Small and Outline (A1)",args:{...s,size:"extraSmall",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},S={name:"With Size Small and Outline (A1)",args:{...s,size:"small",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},f={name:"With Size Large and Outline (A1)",args:{...s,size:"large",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},y={name:"With Disabled (B5)",args:{...s,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const l=P(e);n(l.getByRole("button")).toBeDisabled()}},v={name:"With Disabled And Outline (B5)",args:{...s,isOutlined:!0,disabled:!0},argTypes:{isOutlined:{table:{disable:!1}},disabled:{table:{disable:!1}}}},A={name:"With Type (B1)",args:{...s,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("type","submit")},B={name:"With AriaDescribedby (B3)",args:{...s,ariaDescribedby:"araiDescId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("aria-describedby","araiDescId")},W={name:"With AriaExpanded (B6)",args:{...s,ariaExpanded:!0},argTypes:{ariaExpanded:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("aria-expanded","true")},x={name:"With AccessKey (B4)",args:{...s,accessKey:"a"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("accessKey","a")},J=e=>{const[l,i]=G.useState(k);return a.jsx(t,{...e,svgPath:l,onFocus:r=>{i(X),e.onFocus&&e.onFocus(r)},onBlur:r=>{i(q),e.onBlur&&e.onBlur(r)},onClick:r=>{i(U),e.onClick&&e.onClick(r)}})},O={render:J,name:"With EventHandlers (A2 delvis)",args:{...s,onFocus:C(),onBlur:C(),onClick:C()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:l})=>{const r=P(l).getByRole("button");await n(r).toBeInTheDocument(),r.focus(),await H(()=>n(e.onFocus).toHaveBeenCalled()),await I.tab(),await H(()=>n(e.onBlur).toHaveBeenCalled()),await I.click(r),await H(()=>n(e.onClick).toHaveBeenCalled())}},Q=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(t,{...e,hasSpinner:!1,size:"extraSmall",className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,hasSpinner:!1,size:"small",className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,hasSpinner:!1,className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,hasSpinner:!1,size:"large",isOutlined:!0})]}),a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(t,{...e,size:"extraSmall",className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,size:"small",className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,size:"large",isOutlined:!0})]}),a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(t,{...e,hasSpinner:!1,size:"extraSmall",className:"marginRightM"}),a.jsx(t,{...e,hasSpinner:!1,size:"small",className:"marginRightM"}),a.jsx(t,{...e,hasSpinner:!1,className:"marginRightM"}),a.jsx(t,{...e,hasSpinner:!1,size:"large"})]}),a.jsx(t,{...e,size:"extraSmall",className:"marginRightM"}),a.jsx(t,{...e,size:"small",className:"marginRightM"}),a.jsx(t,{...e,className:"marginRightM"}),a.jsx(t,{...e,size:"large"})]}),T={render:Q,name:"With Spinner (A4)",args:{...s,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}},z={name:"With Brightness (A5)",args:{...s,brightness:"light"},argTypes:{brightness:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}},D={name:"With Brightness And Outline (A5)",args:{...s,brightness:"light",isOutlined:!0},argTypes:{brightness:{table:{disable:!1}},isOutlined:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}},w={name:"With Brightness And Spinner (A5)",args:{...s,brightness:"light",hasSpinner:!0},argTypes:{brightness:{table:{disable:!1}},hasSpinner:{table:{disable:!1}}},globals:{backgrounds:{value:"themePrimary"}}},E={name:"With Brightness And Disabled (A5)",args:{...s,brightness:"light",isOutlined:!0,disabled:!0},argTypes:{brightness:{table:{disable:!1}},isOutlined:{table:{disable:!1}},disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
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
} satisfies Story`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  }
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    iconButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(iconButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'With Brightness (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light'
  },
  argTypes: {
    brightness: {
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
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...z.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With Brightness And Outline (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    isOutlined: true
  },
  argTypes: {
    brightness: {
      table: {
        disable: false
      }
    },
    isOutlined: {
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
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With Brightness And Spinner (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    hasSpinner: true
  },
  argTypes: {
    brightness: {
      table: {
        disable: false
      }
    },
    hasSpinner: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Brightness And Disabled (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    isOutlined: true,
    disabled: true
  },
  argTypes: {
    brightness: {
      table: {
        disable: false
      }
    },
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
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...E.parameters?.docs?.source}}};const Z=["WithRef","WithAttributes","Defaults","WithOutline","WithCustomSVGPath","WithSizeExtraSmall","WithSizeSmall","WithSizeLarge","WithSizeExtraSmallAndOutline","WithSizeSmallAndOutline","WithSizeLargeAndOutline","WithDisabled","WithDisabledAndOutline","WithType","WithAriaDescribedby","WithAriaExpanded","WithAccesskey","WithEventHandlers","WithSpinner","WithBrightness","WithBrightnessAndOutline","WithBrightnessAndSpinner","WithBrightnessAndDisabled"],te=Object.freeze(Object.defineProperty({__proto__:null,Defaults:c,WithAccesskey:x,WithAriaDescribedby:B,WithAriaExpanded:W,WithAttributes:d,WithBrightness:z,WithBrightnessAndDisabled:E,WithBrightnessAndOutline:D,WithBrightnessAndSpinner:w,WithCustomSVGPath:m,WithDisabled:y,WithDisabledAndOutline:v,WithEventHandlers:O,WithOutline:u,WithRef:o,WithSizeExtraSmall:b,WithSizeExtraSmallAndOutline:h,WithSizeLarge:g,WithSizeLargeAndOutline:f,WithSizeSmall:p,WithSizeSmallAndOutline:S,WithSpinner:T,WithType:A,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{te as I};
//# sourceMappingURL=IconButton.test.stories-Clepj0an.js.map
