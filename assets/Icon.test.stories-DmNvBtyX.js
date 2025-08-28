import{j as ye}from"./jsx-runtime-BjG_zV1W.js";import{w as i,e as t}from"./index-DIxTUSTt.js";import"./index-CGk5cNE3.js";import{c as be,A as o,d as I}from"./index-CgEl4Pzg.js";import{S as T}from"./icon.systems-DzczaoTk.js";import{T as z}from"./icon.themes-CzxVKVCO.js";import{a as ve}from"./base-props.types-B340BQPQ.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon.utils-XW2L0FSl.js";const Se=ve.filter(a=>a!=="extraSmall"),pe=ve.filter(a=>a==="medium"||a==="large"),We={component:be,title:"Tester/Icon",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0},options:[...Se]},svgPath:{table:{disable:!0},options:Object.keys(T),mapping:T},title:{table:{disable:!0}},variant:{table:{disable:!0},control:"text"},ariaLabel:{table:{disable:!0}}}},s={svgPath:o},c={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes(FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e).toHaveAttribute("id","htmlid"),await t(e).toHaveClass("dummyClassname"),await t(e).toHaveAttribute("lang","nb"),await t(e).toHaveAttribute("data-testid","123ID")}},m={name:"Default - Variant SystemIcon (A1, B1, B5)",args:{...s},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("viewBox","0 0 24 24"),await t(e).toHaveAttribute("aria-hidden","true"),await t(e).not.toHaveAttribute("aria-label"),await t(e).not.toHaveAttribute("aria-labelledby")}},d={name:"With Variant ThemeIcon (A1)",args:{...s,svgPath:I,variant:"themeIcon"},argTypes:{svgPath:{table:{disable:!1},options:Object.keys(z),mapping:z}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("viewBox","0 0 48 48"),await t(e.classList.toString()).toContain("themeIcon_medium")}},g={name:"With Custom SVG (A4)",args:{...s,svgPath:ye.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},u={name:"With Title (B3)",args:{...s,title:"Min custom title beskrivelse"},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=i(a),e=n.getByRole("img");await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("aria-hidden","false"),await t(e).toHaveAttribute("aria-labelledby"),await t(e).not.toHaveAttribute("aria-label");const r="Min custom title beskrivelse",w=n.getByTitle(r);await t(w).toBeInTheDocument(),await t(w).toHaveAttribute("id");const he=n.getByLabelText(r,{selector:"svg"});await t(he).toBeInTheDocument()}},v={name:"With AriaLabel (B4)",args:{...s,ariaLabel:"min custom aria-label beskrivelse"},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img");await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("aria-hidden","false"),await t(e).toHaveAttribute("aria-label","min custom aria-label beskrivelse"),await t(e).not.toHaveAttribute("aria-labelledby");const r=e.querySelector("title");await t(r).not.toBeInTheDocument()}},p={name:"With Size Small - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"small"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_small")}},h={name:"With Size Medium - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"medium"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_medium")}},y={name:"With Size Large - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"large"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_large")}},b={name:"With Size Large Plus - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"largePlus"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_largePlus")}},S={name:"With Size Extra Large - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"extraLarge"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("systemIcon_extraLarge")}},f={name:"With Size Medium - ThemeIcon (A3)",args:{...s,svgPath:I,variant:"themeIcon",size:"medium"},argTypes:{size:{table:{disable:!1},options:[...pe]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("themeIcon_medium")}},A={name:"With Size Large - ThemeIcon (A3)",args:{...s,svgPath:I,variant:"themeIcon",size:"large"},argTypes:{size:{table:{disable:!1},options:[...pe]}},play:async({canvasElement:a})=>{const e=i(a).getByRole("img",{hidden:!0});await t(e.classList.toString()).toContain("themeIcon_large")}};var x,B,P;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var L,W,H;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(W=l.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var R,E,C;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var V,D,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var _,F,M;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(F=g.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var N,k,j;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(j=(k=u.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var O,q,Z;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(Z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,ae;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,oe,re;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ce,le,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(le=f.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var de,ge,ue;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};const He=["WithRef","WithAttributes","Defaults","WithVariant","WithCustomSVG","WithTitle","WithAriaLabel","SystemIconSizeSmall","SystemIconSizeMedium","SystemIconSizeLarge","SystemIconSizeLargePlus","SystemIconSizeExtraLarge","ThemeIconSizeMedium","ThemeIconSizeLarge"];export{m as Defaults,S as SystemIconSizeExtraLarge,y as SystemIconSizeLarge,b as SystemIconSizeLargePlus,h as SystemIconSizeMedium,p as SystemIconSizeSmall,A as ThemeIconSizeLarge,f as ThemeIconSizeMedium,v as WithAriaLabel,l as WithAttributes,g as WithCustomSVG,c as WithRef,u as WithTitle,d as WithVariant,He as __namedExportsOrder,We as default};
//# sourceMappingURL=Icon.test.stories-DmNvBtyX.js.map
