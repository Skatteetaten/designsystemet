import{j as ge}from"./jsx-runtime-Nms4Y4qS.js";import"./index-CI44Z2h3.js";import{I as ue,A as w,a as r}from"./index-DcL_RvKM.js";import{w as i,e as a}from"./index-hUG6DWTw.js";import{S as T}from"./icon.systems-CzzhySyt.js";import{T as x}from"./icon.themes-6WdPDIYq.js";import{a as o}from"./base-props.types-BkCKQDF7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon.utils-DR_7ncCd.js";const Te={component:ue,title:"Tester/Icon",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0},control:"radio",options:[...o].slice(1)},svgPath:{table:{disable:!0},options:Object.keys(T),mapping:T},title:{table:{disable:!0}},variant:{table:{disable:!0},control:"text"},ariaLabel:{table:{disable:!0}}}},s={svgPath:r},l={name:"With Ref (FA1)",args:{...s,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes(FA2-5)",args:{...s,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toHaveAttribute("id","htmlid"),await a(e).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID")}},d={name:"Default - Variant SystemIcon (A1, B1, B5)",args:{...s},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("viewBox","0 0 24 24"),await a(e).toHaveAttribute("aria-hidden","true"),await a(e).not.toHaveAttribute("aria-label"),await a(e).not.toHaveAttribute("aria-labelledby")}},g={name:"With Variant ThemeIcon (A1)",args:{...s,svgPath:w,variant:"themeIcon"},argTypes:{svgPath:{table:{disable:!1},options:Object.keys(x),mapping:x}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("viewBox","0 0 48 48"),await a(e.classList.toString()).toContain("themeIcon_medium")}},u={name:"With Custom SVG (A4)",args:{...s,svgPath:ge.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},p={name:"With Title (B3)",args:{...s,title:"Min custom title beskrivelse"},argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=i(t),e=n.getByRole("img");await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-hidden","false"),await a(e).toHaveAttribute("aria-labelledby"),await a(e).not.toHaveAttribute("aria-label");const c="Min custom title beskrivelse",I=n.getByTitle(c);await a(I).toBeInTheDocument(),await a(I).toHaveAttribute("id");const de=n.getByLabelText(c,{selector:"svg"});await a(de).toBeInTheDocument()}},v={name:"With AriaLabel (B4)",args:{...s,ariaLabel:"min custom aria-label beskrivelse"},argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img");await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-hidden","false"),await a(e).toHaveAttribute("aria-label","min custom aria-label beskrivelse"),await a(e).not.toHaveAttribute("aria-labelledby");const c=e.querySelector("title");await a(c).not.toBeInTheDocument()}},h={name:"With Size Small - SystemIcon (A2)",args:{...s,svgPath:r,variant:"systemIcon",size:"small"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_small")}},b={name:"With Size Medium - SystemIcon (A2)",args:{...s,svgPath:r,variant:"systemIcon",size:"medium"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_medium")}},y={name:"With Size Large - SystemIcon (A2)",args:{...s,svgPath:r,variant:"systemIcon",size:"large"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_large")}},S={name:"With Size Extra Large - SystemIcon (A2)",args:{...s,svgPath:r,variant:"systemIcon",size:"extraLarge"},argTypes:{size:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("systemIcon_extraLarge")}},A={name:"With Size Medium - ThemeIcon (A3)",args:{...s,svgPath:w,variant:"themeIcon",size:"medium"},argTypes:{size:{table:{disable:!1},options:[o[2],o[3]]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("themeIcon_medium")}},f={name:"With Size Large - ThemeIcon (A3)",args:{...s,svgPath:w,variant:"themeIcon",size:"large"},argTypes:{size:{table:{disable:!1},options:[o[2],o[3]]}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e.classList.toString()).toContain("themeIcon_large")}};var z,B,L;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var P,H,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var R,E,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var V,D,G;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(D=g.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var F,_,M;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(_=u.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var k,N,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var O,q,Z;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const title = icon.querySelector('title');
    await expect(title).not.toBeInTheDocument();
  }
} satisfies Story`,...(Z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,ae;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,oe,re;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ce,le,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(le=f.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};const xe=["WithRef","WithAttributes","Defaults","WithVariant","WithCustomSVG","WithTitle","WithAriaLabel","SystemIconSizeSmall","SystemIconSizeMedium","SystemIconSizeLarge","SystemIconSizeExtraLarge","ThemeIconSizeMedium","ThemeIconSizeLarge"];export{d as Defaults,S as SystemIconSizeExtraLarge,y as SystemIconSizeLarge,b as SystemIconSizeMedium,h as SystemIconSizeSmall,f as ThemeIconSizeLarge,A as ThemeIconSizeMedium,v as WithAriaLabel,m as WithAttributes,u as WithCustomSVG,l as WithRef,p as WithTitle,g as WithVariant,xe as __namedExportsOrder,Te as default};
//# sourceMappingURL=Icon.test.stories-aSKy04Vi.js.map
