import{j as C,d as I,r as H}from"./iframe-CBOQuZmX.js";import{b as S}from"./index-BxmwhRWV.js";import{j as x,i as B}from"./index-tEZUkoN5.js";import{S as w}from"./icon.systems-DLlbXhEY.js";import{l as D}from"./base-props.types-B340BQPQ.js";const{expect:t,fn:R,userEvent:P,waitFor:F,within:l}=__STORYBOOK_MODULE_TEST__,A="htmlId",W="0 0 24 24",E="Er du pendler?",T=(e,s)=>async({canvasElement:a})=>{const n=l(a);await t(n.getByRole("link")).toHaveAttribute(e,s)},L={component:S,title:"Tester/Link",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},isExternal:{table:{disable:!0}},color:{table:{disable:!0},options:[void 0,...D],control:"inline-radio"},svgPath:{table:{disable:!0},options:Object.keys(w),mapping:w},title:{table:{disable:!0}},href:{table:{disable:!0}},target:{table:{disable:!0}},download:{table:{disable:!0}},ariaCurrent:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},i=e=>C.jsx(S,{...e,onClick:s=>s.preventDefault(),children:e.children}),r={href:"#storybook-root",children:E},o={render:i,name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:T("id","dummyIdForwardedFromRef")},c={render:i,name:"With Attributes(FA2-5)",args:{...r,id:A,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",A),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},d={render:i,name:"Defaults (A1 delvis, A2, A3 delvis, B1)",args:{...r},argTypes:{href:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await t(a).not.toHaveAttribute("rel"),await t(a).not.toHaveAttribute("target");const n=a.querySelector("svg");await t(n).not.toBeInTheDocument(),t(a).toHaveTextContent(E)}},m={render:i,name:"With Long Text (A1 delvis)",args:{...r,children:"Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke."},argTypes:{children:{table:{disable:!1}}}},p={render:i,name:"With Long Text And Icons (A1 delvis)",args:{...r,isExternal:!0,svgPath:x,children:"Denne lenken har en veldig lang tekst med ikon på venstre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert."},argTypes:{isExternal:{table:{disable:!1}},svgPath:{table:{disable:!1}},children:{table:{disable:!1}}}},b={render:i,name:"With Icon (A4, B2)",args:{...r,svgPath:x},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByRole("link").querySelector("svg");await t(n).toHaveAttribute("aria-hidden","true"),await t(n).toHaveAttribute("viewBox",W)}},u={render:i,name:"With External Icon (A5)",args:{...r,isExternal:!0},argTypes:{isExternal:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByRole("link").querySelector("svg");await t(n).toHaveAttribute("aria-label",I.t("ds_buttons:shared.ExternalIcon")),await t(n).toHaveAttribute("viewBox",W)}},g={render:i,name:"With Color (A6)",args:{...r,color:"white",isExternal:!0,svgPath:B},argTypes:{color:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}},v={render:i,name:"With Target (A2)",args:{...r,target:"_blank"},argTypes:{target:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");t(a).toHaveAttribute("rel","noreferrer"),t(a).toHaveAttribute("target","_blank")}},h={render:i,name:"With Download",args:{...r,download:"testFil.txt"},argTypes:{download:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");t(a).toHaveAttribute("download","testFil.txt")}},y={render:i,name:"With AriaDescribedby (B3)",args:{...r,ariaDescribedby:A},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:T("aria-describedby",A)},k={name:"With AriaCurrent",args:{...r,ariaCurrent:!0},argTypes:{ariaCurrent:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:T("aria-current","true")},_="Ny lenketekst slik at vi ser at event fungerte",j=e=>{const[s,a]=H.useState("Klikk på lenken for å teste onClick event");return C.jsx(S,{...e,onClick:n=>{n.preventDefault(),a(_),e.onClick&&e.onClick(n)},children:s})},f={render:j,name:"With onClick (A3 delvis)",args:{...r,svgPath:x,onClick:R()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=l(s).getByRole("link");await t(n).toHaveTextContent("Klikk på lenken for å teste onClick event"),await P.click(n),await t(n).toHaveTextContent("Ny lenketekst slik at vi ser at event fungerte"),await F(()=>t(e.onClick).toHaveBeenCalled())}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLAnchorElement | null): void => {
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
} satisfies Story`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: elementId,
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
    const link = canvas.getByRole('link');
    await expect(link).toHaveClass('dummyClassname');
    await expect(link).toHaveAttribute('id', elementId);
    await expect(link).toHaveAttribute('lang', 'nb');
    await expect(link).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (A1 delvis, A2, A3 delvis, B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    href: {
      table: {
        disable: false
      }
    },
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
    const link = canvas.getByRole('link');
    await expect(link).not.toHaveAttribute('rel');
    await expect(link).not.toHaveAttribute('target');
    const svg = link.querySelector('svg');
    await expect(svg).not.toBeInTheDocument();
    expect(link).toHaveTextContent(defaultLinkText);
  }
} satisfies Story`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Long Text (A1 delvis)',
  args: {
    ...defaultArgs,
    children: 'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Long Text And Icons (A1 delvis)',
  args: {
    ...defaultArgs,
    isExternal: true,
    svgPath: CalendarSVGpath,
    children: 'Denne lenken har en veldig lang tekst med ikon på venstre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.'
  },
  argTypes: {
    isExternal: {
      table: {
        disable: false
      }
    },
    svgPath: {
      table: {
        disable: false
      }
    },
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Icon (A4, B2)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath
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
    const link = canvas.getByRole('link');
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  }
} satisfies Story`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With External Icon (A5)',
  args: {
    ...defaultArgs,
    isExternal: true
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
    const link = canvas.getByRole('link');
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-label', dsI18n.t('ds_buttons:shared.ExternalIcon'));
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  }
} satisfies Story`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Color (A6)',
  args: {
    ...defaultArgs,
    color: 'white',
    isExternal: true,
    svgPath: AddOutlineSVGpath
  },
  argTypes: {
    color: {
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
} satisfies Story`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Target (A2)',
  args: {
    ...defaultArgs,
    target: '_blank'
  },
  argTypes: {
    target: {
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
    const link = canvas.getByRole('link');
    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  }
} satisfies Story`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Download',
  args: {
    ...defaultArgs,
    download: 'testFil.txt'
  },
  argTypes: {
    download: {
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
    const link = canvas.getByRole('link');
    expect(link).toHaveAttribute('download', 'testFil.txt');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With AriaDescribedby (B3)',
  args: {
    ...defaultArgs,
    ariaDescribedby: elementId
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
  play: verifyAttribute('aria-describedby', elementId)
} satisfies Story`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With AriaCurrent',
  args: {
    ...defaultArgs,
    ariaCurrent: true
  },
  argTypes: {
    ariaCurrent: {
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
  play: verifyAttribute('aria-current', 'true')
} satisfies Story`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: OnClickTemplate,
  name: 'With onClick (A3 delvis)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath,
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
    const link = canvas.getByRole('link');
    await expect(link).toHaveTextContent('Klikk på lenken for å teste onClick event');
    await userEvent.click(link);
    await expect(link).toHaveTextContent('Ny lenketekst slik at vi ser at event fungerte');
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...f.parameters?.docs?.source}}};const O=["WithRef","WithAttributes","Defaults","WithLongText","WithLongTextIconAndExternalIcon","WithIcon","WithExternalIcon","WithColor","WithTarget","WithDownload","WithAriaDescribedby","WithAriaCurrent","WithOnClick"],M=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAriaCurrent:k,WithAriaDescribedby:y,WithAttributes:c,WithColor:g,WithDownload:h,WithExternalIcon:u,WithIcon:b,WithLongText:m,WithLongTextIconAndExternalIcon:p,WithOnClick:f,WithRef:o,WithTarget:v,__namedExportsOrder:O,default:L},Symbol.toStringTag,{value:"Module"}));export{M as L};
//# sourceMappingURL=Link.test.stories-BF9V6fND.js.map
