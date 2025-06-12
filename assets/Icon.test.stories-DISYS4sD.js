import{j as he}from"./jsx-runtime-BjG_zV1W.js";import{w as i,e as a}from"./index-DIxTUSTt.js";import"./index-ChzTQA-a.js";import{b as ye,A as o,c as w}from"./index-CdwPxLML.js";import{S as z}from"./icon.systems-BnMBg8hx.js";import{T as x}from"./icon.themes-C-RQHYag.js";import{a as r}from"./base-props.types-DUvlOF9f.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon.utils-XW2L0FSl.js";const Pe={component:ye,title:"Tester/Icon",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0},control:"radio",options:[...r].slice(1)},svgPath:{table:{disable:!0},options:Object.keys(z),mapping:z},title:{table:{disable:!0}},variant:{table:{disable:!0},control:"text"},ariaLabel:{table:{disable:!0}}}},s={svgPath:o},l={name:"With Ref (FA1)",args:{...s,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes(FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toHaveAttribute("id","htmlid"),await a(e).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID")}},d={name:"Default - Variant SystemIcon (A1, B1, B5)",args:{...s},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("viewBox","0 0 24 24"),await a(e).toHaveAttribute("aria-hidden","true"),await a(e).not.toHaveAttribute("aria-label"),await a(e).not.toHaveAttribute("aria-labelledby")}},g={name:"With Variant ThemeIcon (A1)",args:{...s,svgPath:w,variant:"themeIcon"},argTypes:{svgPath:{table:{disable:!1},options:Object.keys(x),mapping:x}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("viewBox","0 0 48 48"),await a(e.classList.toString()).toContain("themeIcon_medium")}},u={name:"With Custom SVG (A4)",args:{...s,svgPath:he.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},v={name:"With Title (B3)",args:{...s,title:"Min custom title beskrivelse"},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("img");await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-hidden","false"),await a(e).toHaveAttribute("aria-labelledby"),await a(e).not.toHaveAttribute("aria-label");const c="Min custom title beskrivelse",T=n.getByTitle(c);await a(T).toBeInTheDocument(),await a(T).toHaveAttribute("id");const pe=n.getByLabelText(c,{selector:"svg"});await a(pe).toBeInTheDocument()}},p={name:"With AriaLabel (B4)",args:{...s,ariaLabel:"min custom aria-label beskrivelse"},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img");await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-hidden","false"),await a(e).toHaveAttribute("aria-label","min custom aria-label beskrivelse"),await a(e).not.toHaveAttribute("aria-labelledby");const c=e.querySelector("title");await a(c).not.toBeInTheDocument()}},h={name:"With Size Small - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"small"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_small")}},y={name:"With Size Medium - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"medium"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_medium")}},b={name:"With Size Large - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"large"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_large")}},S={name:"With Size Large Plus - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"largePlus"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_largePlus")}},A={name:"With Size Extra Large - SystemIcon (A2)",args:{...s,svgPath:o,variant:"systemIcon",size:"extraLarge"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_extraLarge")}},f={name:"With Size Medium - ThemeIcon (A3)",args:{...s,svgPath:w,variant:"themeIcon",size:"medium"},argTypes:{size:{table:{disable:!1},options:[r[2],r[3]]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("themeIcon_medium")}},I={name:"With Size Large - ThemeIcon (A3)",args:{...s,svgPath:w,variant:"themeIcon",size:"large"},argTypes:{size:{table:{disable:!1},options:[r[2],r[3]]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("themeIcon_large")}};var B,P,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var W,H,R;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var E,C,V;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var D,G,_;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(G=g.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var F,M,N;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var k,j,O;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(j=v.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var q,Z,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,U;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ae,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,ie;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,re,ce;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var le,me,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
      options: [sizeArr[2], sizeArr[3]]
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
} satisfies Story`,...(de=(me=f.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,ue,ve;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
      options: [sizeArr[2], sizeArr[3]]
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
} satisfies Story`,...(ve=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};const Le=["WithRef","WithAttributes","Defaults","WithVariant","WithCustomSVG","WithTitle","WithAriaLabel","SystemIconSizeSmall","SystemIconSizeMedium","SystemIconSizeLarge","SystemIconSizeLargePlus","SystemIconSizeExtraLarge","ThemeIconSizeMedium","ThemeIconSizeLarge"];export{d as Defaults,A as SystemIconSizeExtraLarge,b as SystemIconSizeLarge,S as SystemIconSizeLargePlus,y as SystemIconSizeMedium,h as SystemIconSizeSmall,I as ThemeIconSizeLarge,f as ThemeIconSizeMedium,p as WithAriaLabel,m as WithAttributes,u as WithCustomSVG,l as WithRef,v as WithTitle,g as WithVariant,Le as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Icon.test.stories-DISYS4sD.js.map
