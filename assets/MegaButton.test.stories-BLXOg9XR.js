import{j as o,g as I,d as H,r as F}from"./iframe-s2_bNgHU.js";import{M as x}from"./index-Ck1G954W.js";const{expect:t,fn:k,userEvent:D,waitFor:E,within:i}=__STORYBOOK_MODULE_TEST__,T="Klikk her",w=(e,r)=>async({canvasElement:a})=>{const W=i(a).getByRole("button");await t(W).toBeInTheDocument(),await t(W).toHaveAttribute(e,r)},L={component:x,title:"Tester/MegaButton",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},isExternal:{table:{disable:!0}},accessKey:{table:{disable:!0},control:"text"},disabled:{table:{disable:!0}},href:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},n={children:T},l={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:w("id","dummyIdForwardedFromRef")},c={name:"With Attributes(FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults (A1, B2)",args:{...n,"data-testid":"pseudoStates"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("type",I())}},p={name:"With Long Text (A2)",args:{...n,children:"Denne knappen har en veldig lang tekst. Så lang at den må brekke."},argTypes:{children:{table:{disable:!1}}}},u={name:"With Long Text And Breaking (A1, A2)",args:{...n,children:"Denneknappenharenveldiglangtekst.Sålangatdenmåbrekke."},argTypes:{children:{table:{disable:!1}}}},m={name:"With External Icon (A4, B5, B7)",args:{...n,isExternal:!0,href:"#"},argTypes:{isExternal:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button"),s=a.querySelector("svg");await t(s).toHaveAttribute("aria-label",H.t("ds_buttons:shared.ExternalIcon")),await t(s).toHaveAttribute("viewBox","0 0 24 24"),await t(a).toBeInTheDocument()}},b={name:"With Long Text and External Icon (A2)",args:{...n,isExternal:!0,href:"#",children:"Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje"},argTypes:{children:{table:{disable:!1}},isExternal:{table:{disable:!1}}}},R={href:void 0,disabled:!0},g={name:"With Disabled (B6)",args:{...n,...R,"data-testid":"pseudoStates"},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const r=i(e);t(r.getByRole("button")).toBeDisabled()}},h={name:"With Type (B2)",args:{...n,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:w("type","submit")},y={name:"With AriaDescribedby (B1)",args:{...n,ariaDescribedby:"testid1234"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:w("aria-describedby","testid1234")},f={name:"With Accesskey (B4)",args:{children:T,accessKey:"j"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:w("accessKey","j")},v={name:"As Link (B3)",args:{...n,href:"https://www.skatteetaten.no","data-testid":"pseudoStates"},argTypes:{href:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},S={name:"As Link External (B3, A4)",args:{...n,href:"https://www.skatteetaten.no",isExternal:!0,"data-testid":"pseudoStates"},argTypes:{href:{table:{disable:!1}},isExternal:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=i(e).getByRole("button");await t(a).toBeInTheDocument(),await t(a.tagName).toBe("A"),await t(a).toHaveAttribute("role","button")}},C=e=>{const[r,a]=F.useState("bruk knapp for å teste events");return o.jsx(x,{...e,onFocus:s=>{a("Knapp har fått fokus"),e.onFocus&&e.onFocus(s)},onBlur:s=>{a("Knapp har blitt blurret"),e.onBlur&&e.onBlur(s)},onClick:s=>{a("Knapp har blitt klikket på"),e.onClick&&e.onClick(s)},children:r})},B={render:C,name:"With EventHandlers (A2 delvis)",args:{...n,onFocus:k(),onBlur:k(),onClick:k()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:r})=>{const s=i(r).getByRole("button");await t(s).toBeInTheDocument(),s.focus(),await E(()=>t(e.onFocus).toHaveBeenCalled()),await D.tab(),await E(()=>t(e.onBlur).toHaveBeenCalled()),await D.click(s),await E(()=>t(e.onClick).toHaveBeenCalled())}},j=e=>o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"bottomSpacingXL",children:o.jsx(x,{children:T})}),o.jsx(x,{...e,children:T})]}),A={render:j,name:"With Spinner (A7)",args:{...n,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toHaveClass('dummyClassname');
    await expect(megaButton).toHaveAttribute('id', 'htmlId');
    await expect(megaButton).toHaveAttribute('lang', 'nb');
    await expect(megaButton).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (A1, B2)',
  args: {
    ...defaultArgs,
    'data-testid': 'pseudoStates'
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
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    await expect(megaButton).toHaveAttribute('type', getCommonButtonTypeDefault());
  }
} satisfies Story`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text (A2)',
  args: {
    ...defaultArgs,
    children: 'Denne knappen har en veldig lang tekst. Så lang at den må brekke.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text And Breaking (A1, A2)',
  args: {
    ...defaultArgs,
    children: 'Denneknappenharenveldiglangtekst.Sålangatdenmåbrekke.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With External Icon (A4, B5, B7)',
  args: {
    ...defaultArgs,
    isExternal: true,
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
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text and External Icon (A2)',
  args: {
    ...defaultArgs,
    isExternal: true,
    href: '#',
    children: 'Denne knappen har en veldig lang tekst. Icon skal da plasseres løpende etter tekster på siste linje'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    isExternal: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled (B6)',
  args: {
    ...defaultArgs,
    ...discriminatedProps,
    'data-testid': 'pseudoStates'
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
} satisfies Story`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Type (B2)',
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
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedby (B1)',
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
} satisfies Story`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Accesskey (B4)',
  args: {
    children: defaultMegaButtonText,
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
} satisfies Story`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'As Link (B3)',
  args: {
    ...defaultArgs,
    href: 'https://www.skatteetaten.no',
    'data-testid': 'pseudoStates'
  },
  argTypes: {
    href: {
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
} satisfies Story`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'As Link External (B3, A4)',
  args: {
    ...defaultArgs,
    href: 'https://www.skatteetaten.no',
    isExternal: true,
    'data-testid': 'pseudoStates'
  },
  argTypes: {
    href: {
      table: {
        disable: false
      }
    },
    isExternal: {
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
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    await expect(megaButton.tagName).toBe('A');
    await expect(megaButton).toHaveAttribute('role', 'button');
  }
} satisfies Story`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    const megaButton = canvas.getByRole('button');
    await expect(megaButton).toBeInTheDocument();
    megaButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(megaButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: TemplateWithSpinner,
  name: 'With Spinner (A7)',
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
} satisfies Story`,...A.parameters?.docs?.source}}};const _=["WithRef","WithAttributes","Defaults","WithLongText","WithLongTextAndBreaking","WithExternalIcon","WithLongTextAndExternalIcon","WithDisabled","WithType","WithAriaDescribedby","WithAccesskey","AsLink","AsLinkExternal","WithEventHandlers","WithSpinner"],P=Object.freeze(Object.defineProperty({__proto__:null,AsLink:v,AsLinkExternal:S,Defaults:d,WithAccesskey:f,WithAriaDescribedby:y,WithAttributes:c,WithDisabled:g,WithEventHandlers:B,WithExternalIcon:m,WithLongText:p,WithLongTextAndBreaking:u,WithLongTextAndExternalIcon:b,WithRef:l,WithSpinner:A,WithType:h,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{P as M};
//# sourceMappingURL=MegaButton.test.stories-BLXOg9XR.js.map
