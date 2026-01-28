import{j as r,g as R,r as C}from"./iframe-CBOQuZmX.js";import{I as l}from"./index-BxmwhRWV.js";import{i as o}from"./index-tEZUkoN5.js";import{S as j}from"./icon.systems-DLlbXhEY.js";const{expect:t,fn:w,userEvent:H,waitFor:x,within:d}=__STORYBOOK_MODULE_TEST__,E="Legg til rapport",P=(e,i)=>async({canvasElement:a})=>{const I=d(a).getByRole("button");await t(I).toBeInTheDocument(),await t(I).toHaveAttribute(e,i)},F={component:l,title:"Tester/InlineButton",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},iconPosition:{table:{disable:!0}},brightness:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(j),mapping:j},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},form:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},n={children:E},c={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:P("id","dummyIdForwardedFromRef")},p={name:"With Attributes(FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123")}},u={name:"Defaults (A1, B1)",args:{...n},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",R())}},m={name:"With Long Text (A1)",args:{...n,children:"Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert. Denne knappen har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert."},argTypes:{children:{table:{disable:!1}}}},b={name:"With Icon (A3, A4, B4)",args:{...n,svgPath:o},argTypes:{svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=d(e).getByRole("button"),s=a.querySelector("svg");await t(s).toHaveAttribute("viewBox","0 0 24 24"),await t(a).toBeInTheDocument()}},g={name:"With Custom Icon (A3)",args:{...n,svgPath:r.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},h={name:"With Long Text And Icon (A3)",args:{...n,svgPath:o,iconPosition:"right",children:"Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert. Denne knappen har en veldig lang tekst med ikon på høyre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er høyrejustert."},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},v={name:"With Icon Right (A5)",args:{...n,svgPath:o,iconPosition:"right"},argTypes:{iconPosition:{table:{disable:!1}}}},f={name:"With Disabled (B5)",args:{...n,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const i=d(e);t(i.getByRole("button")).toBeDisabled()}},y={name:"With Disabled And Icon (B5)",args:{...n,svgPath:o,disabled:!0},argTypes:{disabled:{table:{disable:!1}},svgPath:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},S={name:"With Disabled And Icon And Brightness (B5)",args:{...n,svgPath:o,disabled:!0,brightness:"light"},argTypes:{disabled:{table:{disable:!1}},svgPath:{table:{disable:!1}},brightness:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}},A={name:"With Type (B1)",args:{...n,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:P("type","submit")},B={name:"With AriaDescribedby (B2)",args:{...n,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:P("aria-describedby","testid1234")},k={name:"With Accesskey (B3)",args:{...n,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:P("accessKey","j")},O=e=>{const[i,a]=C.useState("bruk knapp for å events");return r.jsx(l,{...e,onFocus:s=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(s)},onClick:s=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(s)},children:i})},T={render:O,name:"With EventHandlers (A2 delvis)",args:{...n,onFocus:w(),onClick:w(),onBlur:w()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:i})=>{const s=d(i).getByRole("button");await t(s).toBeInTheDocument(),s.focus(),await x(()=>t(e.onFocus).toHaveBeenCalled()),await H.tab(),await x(()=>t(e.onBlur).toHaveBeenCalled()),await H.click(s),await x(()=>t(e.onClick).toHaveBeenCalled())}},L=e=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex bottomSpacingXL",children:[r.jsx(l,{...e,hasSpinner:!1,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,hasSpinner:!1,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,iconPosition:"right",hasSpinner:!1})]}),r.jsxs("div",{className:"flex",children:[r.jsx(l,{...e,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,className:"marginRightM"}),r.jsx(l,{...e,svgPath:o,iconPosition:"right"})]})]}),W={render:L,name:"With Spinner (A8)",args:{...n,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}},D={name:"With Brightness (A9)",args:{...n,brightness:"light",svgPath:o},argTypes:{brightness:{table:{disable:!1}}},parameters:{a11y:{test:"off"},imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
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
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
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
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...D.parameters?.docs?.source}}};const _=["WithRef","WithAttributes","Defaults","WithLongText","WithIcon","WithCustomIcon","WithLongTextAndIcon","WithIconRight","WithDisabled","WithDisabledAndIcon","WithDisabledAndBrightness","WithType","WithAriaDescribedby","WithAccesskey","WithEventHandlers","WithSpinner","WithBrightness"],G=Object.freeze(Object.defineProperty({__proto__:null,Defaults:u,WithAccesskey:k,WithAriaDescribedby:B,WithAttributes:p,WithBrightness:D,WithCustomIcon:g,WithDisabled:f,WithDisabledAndBrightness:S,WithDisabledAndIcon:y,WithEventHandlers:T,WithIcon:b,WithIconRight:v,WithLongText:m,WithLongTextAndIcon:h,WithRef:c,WithSpinner:W,WithType:A,__namedExportsOrder:_,default:F},Symbol.toStringTag,{value:"Module"}));export{G as I};
//# sourceMappingURL=InlineButton.test.stories-CboWkzoa.js.map
