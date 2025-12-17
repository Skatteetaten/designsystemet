import{j as L}from"./iframe-VHQh6taY.js";import{b as W,A as o,f as I}from"./index-Di_7ammq.js";import{S as T}from"./icon.systems-pjRjKMCZ.js";import{T as z}from"./icon.themes-BHHmq2Rp.js";import{a as x}from"./base-props.types-B340BQPQ.js";const{expect:t,within:i}=__STORYBOOK_MODULE_TEST__,H=x.filter(a=>a!=="extraSmall"),B=x.filter(a=>a==="medium"||a==="large"),R={component:W,title:"Tester/Icon",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0},options:[...H]},svgPath:{table:{disable:!0},options:Object.keys(T),mapping:T},title:{table:{disable:!0}},variant:{table:{disable:!0},control:"text"},ariaLabel:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={svgPath:o},r={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes(FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e).toHaveAttribute("id","htmlid"),await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},l={name:"Default - Variant SystemIcon (A1, B1, B5)",args:{...s},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("viewBox","0 0 24 24"),await t(e).toHaveAttribute("aria-hidden","true"),await t(e).not.toHaveAttribute("aria-label"),await t(e).not.toHaveAttribute("aria-labelledby")}},m={name:"With Variant ThemeIcon (A1)",args:{...s,svgPath:I,variant:"themeIcon"},argTypes:{svgPath:{table:{disable:!1},options:Object.keys(z),mapping:z}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("viewBox","0 0 48 48"),await t(e.classList.toString()).toContain("themeIcon_medium")}},d={name:"With Custom SVG (A4)",args:{...s,svgPath:L.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},g={name:"With Title (B3)",args:{...s,title:"Min custom title beskrivelse"},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("img");await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("aria-hidden","false"),await t(e).toHaveAttribute("aria-labelledby"),await t(e).not.toHaveAttribute("aria-label");const A="Min custom title beskrivelse",w=n.getByTitle(A);await t(w).toBeInTheDocument(),await t(w).toHaveAttribute("id");const P=n.getByLabelText(A,{selector:"svg"});await t(P).toBeInTheDocument()}},u={name:"With AriaLabel (B4)",args:{...s,ariaLabel:"min custom aria-label beskrivelse"},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img");await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("aria-hidden","false"),await t(e).toHaveAttribute("aria-label","min custom aria-label beskrivelse"),await t(e).not.toHaveAttribute("aria-labelledby");const A=e.querySelector("title");await t(A).not.toBeInTheDocument()}},p={name:"With Size Small - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"small"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_small")}},h={name:"With Size Medium - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"medium"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_medium")}},v={name:"With Size Large - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"large"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_large")}},y={name:"With Size Large Plus - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"largePlus"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_largePlus")}},b={name:"With Size Extra Large - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"extraLarge"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_extraLarge")}},S={name:"With Size Medium - ThemeIcon (A3)",args:{...s,svgPath:I,variant:"themeIcon",size:"medium"},argTypes:{size:{table:{disable:!1},options:[...B]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("themeIcon_medium")}},f={name:"With Size Large - ThemeIcon (A3)",args:{...s,svgPath:I,variant:"themeIcon",size:"large"},argTypes:{size:{table:{disable:!1},options:[...B]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("themeIcon_large")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: SVGSVGElement | null): void => {
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
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
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
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon).toHaveAttribute('id', 'htmlid');
    await expect(icon).toHaveClass('dummyClassname');
    await expect(icon).toHaveAttribute('lang', 'nb');
    await expect(icon).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Default - Variant SystemIcon (A1, B1, B5)',
  args: {
    ...defaultArgs
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
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
    await expect(icon).not.toHaveAttribute('aria-label');
    await expect(icon).not.toHaveAttribute('aria-labelledby');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Variant ThemeIcon (A1)',
  args: {
    ...defaultArgs,
    svgPath: AndreForholdSVGpath,
    variant: 'themeIcon'
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      },
      options: Object.keys(ThemeSVGPaths),
      mapping: ThemeSVGPaths
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('viewBox', '0 0 48 48');
    await expect(icon.classList.toString()).toContain('themeIcon_medium');
  }
} satisfies Story`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Custom SVG (A4)',
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
} satisfies Story`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Title (B3)',
  args: {
    ...defaultArgs,
    title: 'Min custom title beskrivelse'
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
    const icon = canvas.getByRole('img');
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('aria-hidden', 'false');
    await expect(icon).toHaveAttribute('aria-labelledby');
    await expect(icon).not.toHaveAttribute('aria-label');
    const titleText = 'Min custom title beskrivelse';
    const titleNode = canvas.getByTitle(titleText);
    await expect(titleNode).toBeInTheDocument();
    await expect(titleNode).toHaveAttribute('id');
    const svgNode = canvas.getByLabelText(titleText, {
      selector: 'svg'
    });
    await expect(svgNode).toBeInTheDocument();
  }
} satisfies Story`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With AriaLabel (B4)',
  args: {
    ...defaultArgs,
    ariaLabel: 'min custom aria-label beskrivelse'
  },
  argTypes: {
    ariaLabel: {
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
    const icon = canvas.getByRole('img');
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('aria-hidden', 'false');
    await expect(icon).toHaveAttribute('aria-label', 'min custom aria-label beskrivelse');
    await expect(icon).not.toHaveAttribute('aria-labelledby');
    const title = icon.querySelector('title');
    await expect(title).not.toBeInTheDocument();
  }
} satisfies Story`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Size Small - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'small'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon.classList.toString()).toContain('systemIcon_small');
  }
} satisfies Story`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Size Medium - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'medium'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon.classList.toString()).toContain('systemIcon_medium');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Size Large - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'large'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon.classList.toString()).toContain('systemIcon_large');
  }
} satisfies Story`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Size Large Plus - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'largePlus'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon.classList.toString()).toContain('systemIcon_largePlus');
  }
} satisfies Story`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Size Extra Large - SystemIcon (A2)',
  args: {
    ...defaultArgs,
    svgPath: AccountChildSVGpath,
    variant: 'systemIcon',
    size: 'extraLarge'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon.classList.toString()).toContain('systemIcon_extraLarge');
  }
} satisfies Story`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With Size Medium - ThemeIcon (A3)',
  args: {
    ...defaultArgs,
    svgPath: AndreForholdSVGpath,
    variant: 'themeIcon',
    size: 'medium'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      },
      options: [...themeIconSizeArr]
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon.classList.toString()).toContain('themeIcon_medium');
  }
} satisfies Story`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Size Large - ThemeIcon (A3)',
  args: {
    ...defaultArgs,
    svgPath: AndreForholdSVGpath,
    variant: 'themeIcon',
    size: 'large'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      },
      options: [...themeIconSizeArr]
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon.classList.toString()).toContain('themeIcon_large');
  }
} satisfies Story`,...f.parameters?.docs?.source}}};const E=["WithRef","WithAttributes","Defaults","WithVariant","WithCustomSVG","WithTitle","WithAriaLabel","SystemIconSizeSmall","SystemIconSizeMedium","SystemIconSizeLarge","SystemIconSizeLargePlus","SystemIconSizeExtraLarge","ThemeIconSizeMedium","ThemeIconSizeLarge"],F=Object.freeze(Object.defineProperty({__proto__:null,Defaults:l,SystemIconSizeExtraLarge:b,SystemIconSizeLarge:v,SystemIconSizeLargePlus:y,SystemIconSizeMedium:h,SystemIconSizeSmall:p,ThemeIconSizeLarge:f,ThemeIconSizeMedium:S,WithAriaLabel:u,WithAttributes:c,WithCustomSVG:d,WithRef:r,WithTitle:g,WithVariant:m,__namedExportsOrder:E,default:R},Symbol.toStringTag,{value:"Module"}));export{F as I};
//# sourceMappingURL=Icon.test.stories-CfSz18Cy.js.map
