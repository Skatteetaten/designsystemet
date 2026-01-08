import{j as n,g as D,r as P,d as C}from"./iframe-s2_bNgHU.js";import{B as s}from"./index-Ck1G954W.js";import{S as l}from"./index-CUsfAC9p.js";import{S as j}from"./icon.systems-DJyjpAy9.js";const{expect:t,fn:E,userEvent:R,waitFor:H,within:c}=__STORYBOOK_MODULE_TEST__,F="Klikk her",W=(e,o)=>async({canvasElement:a})=>{const I=c(a).getByRole("button");await t(I).toBeInTheDocument(),await t(I).toHaveAttribute(e,o)},N={component:s,title:"Tester/Button",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(j),mapping:j},variant:{table:{disable:!0}},isExternal:{table:{disable:!0}},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},href:{table:{disable:!0}},form:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaCurrent:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={children:F},d={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:W("id","dummyIdForwardedFromRef")},m={name:"With Attributes (FA2-5)",args:{...r,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID",form:"formid123"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}},form:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID"),await t(a).toHaveAttribute("form","formid123")}},p={name:"Defaults Variant Primary (A1, B1)",args:{...r},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",D())}},u={name:"Variant Secondary (A1)",args:{...r,variant:"secondary"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",D())}},b={name:"Variant Tertiary (A1)",args:{...r,variant:"tertiary"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",D())}},g={name:"Variant Danger (A1)",args:{...r,variant:"danger"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",D())}},v={name:"With Icon (A3, B3)",args:{...r,svgPath:l},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button"),i=a.querySelector("svg");await t(i).toHaveAttribute("viewBox","0 0 24 24"),await t(i).toHaveAttribute("aria-hidden","true"),await t(a).toBeInTheDocument()}},h={name:"With Long Text (A1 delvis)",args:{...r,children:"Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles. Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles"},argTypes:{children:{table:{disable:!1}}}},y={name:"With Long Text And Icon (A1 delvis)",args:{...r,svgPath:l,children:"Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres. Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres."},argTypes:{children:{table:{disable:!1}},svgPath:{table:{disable:!1}}}},f={name:"With Disabled (B5)",args:{...r,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const o=c(e);t(o.getByRole("button")).toBeDisabled()}},S={name:"With Disabled And Icon (B5)",args:{...r,svgPath:l,disabled:!0},argTypes:{svgPath:{table:{disable:!1}},disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},A={name:"With Type (B1)",args:{...r,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:W("type","submit")},T={name:"With AriaDescribedby (B2)",args:{...r,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:W("aria-describedby","testid1234")},B={name:"With Accesskey (B3)",args:{...r,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:W("accessKey","j")},V=e=>{const[o,a]=P.useState("bruk knapp for å teste events");return n.jsx(s,{...e,onFocus:i=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(i)},onBlur:i=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(i)},onClick:i=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(i)},children:o})},k={render:V,name:"With EventHandlers (A2 delvis)",args:{...r,onFocus:E(),onBlur:E(),onClick:E()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:o})=>{const i=c(o).getByRole("button");await t(i).toBeInTheDocument(),i.focus(),await H(()=>t(e.onFocus).toHaveBeenCalled()),await R.tab(),await H(()=>t(e.onBlur).toHaveBeenCalled()),await R.click(i),await H(()=>t(e.onClick).toHaveBeenCalled())}},M=e=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(s,{...e,hasSpinner:!1,className:"marginRightM"}),n.jsx(s,{...e,hasSpinner:!1,variant:"secondary",className:"marginRightM"}),n.jsx(s,{...e,hasSpinner:!1,variant:"tertiary",className:"marginRightM"}),n.jsx(s,{...e,hasSpinner:!1,variant:"danger"})]}),n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(s,{...e,className:"marginRightM"}),n.jsx(s,{...e,variant:"secondary",className:"marginRightM"}),n.jsx(s,{...e,variant:"tertiary",className:"marginRightM"}),n.jsx(s,{...e,variant:"danger"})]}),n.jsxs("div",{className:"bottomSpacingXL",children:[n.jsx(s,{...e,svgPath:l,hasSpinner:!1,className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,hasSpinner:!1,variant:"secondary",className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,hasSpinner:!1,variant:"tertiary",className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,hasSpinner:!1,variant:"danger"})]}),n.jsx(s,{...e,svgPath:l,className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,variant:"secondary",className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,variant:"tertiary",className:"marginRightM"}),n.jsx(s,{...e,svgPath:l,variant:"danger"})]}),x={render:M,name:"With Spinner (A6)",args:{...r,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}},w={name:"With External Icon (A7, B6)",args:{...r,isExternal:!0,children:"Til altinn.no",href:"#"},argTypes:{isExternal:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e).getByRole("button"),i=a.querySelector("svg");await t(i).toHaveAttribute("aria-label",C.t("ds_buttons:shared.ExternalIcon")),await t(i).toHaveAttribute("viewBox","0 0 24 24"),await t(a).toBeInTheDocument()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    imageSnapshot: {
      disableSnapshot: true
    },
    // customClassname sin farge gir ikke nok kontrast med knapp i modal ved hover
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
    await expect(button).toHaveAttribute('form', 'formid123');
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Defaults Variant Primary (A1, B1)',
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
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Variant Secondary (A1)',
  args: {
    ...defaultArgs,
    variant: 'secondary'
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Variant Tertiary (A1)',
  args: {
    ...defaultArgs,
    variant: 'tertiary'
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Variant Danger (A1)',
  args: {
    ...defaultArgs,
    variant: 'danger'
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Icon (A3, B3)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath
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
    const button = canvas.getByRole('button');
    const svg = button.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(button).toBeInTheDocument();
  }
} satisfies Story`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text (A1 delvis)',
  args: {
    ...defaultArgs,
    children: 'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles. ' + 'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Her har vi ikke ikon så da skal teksten midtstilles'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text And Icon (A1 delvis)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath,
    children: 'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres. ' + 'Denne knappen har en veldig lang tekst. Så lang at den tvinger fram linjeskift. Tekst skal venstrejusteres.'
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
} satisfies Story`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled And Icon (B5)',
  args: {
    ...defaultArgs,
    svgPath: SendSVGpath,
    disabled: true
  },
  argTypes: {
    svgPath: {
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
} satisfies Story`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    button.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: TemplateWithSpinner,
  name: 'With Spinner (A6)',
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
} satisfies Story`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With External Icon (A7, B6)',
  args: {
    ...defaultArgs,
    isExternal: true,
    children: 'Til altinn.no',
    href: '#'
  },
  argTypes: {
    isExternal: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const megaButton = canvas.getByRole('button');
    const svg = megaButton.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-label', dsI18n.t('ds_buttons:shared.ExternalIcon'));
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(megaButton).toBeInTheDocument();
  }
} satisfies Story`,...w.parameters?.docs?.source}}};const _=["WithRef","WithAttributes","Defaults","VariantSecondary","VariantTertiary","VariantDanger","WithIcon","WithLongText","WithLongTextAndIcon","WithDisabled","WithDisabledAndIcon","WithType","WithAriaDescribedby","WithAccesskey","WithEventHandlers","WithSpinner","WithExternalIcon"],q=Object.freeze(Object.defineProperty({__proto__:null,Defaults:p,VariantDanger:g,VariantSecondary:u,VariantTertiary:b,WithAccesskey:B,WithAriaDescribedby:T,WithAttributes:m,WithDisabled:f,WithDisabledAndIcon:S,WithEventHandlers:k,WithExternalIcon:w,WithIcon:v,WithLongText:h,WithLongTextAndIcon:y,WithRef:d,WithSpinner:x,WithType:A,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{q as B};
//# sourceMappingURL=Button.test.stories-DlXj2l4-.js.map
