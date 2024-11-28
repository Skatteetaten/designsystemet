import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as Ee}from"./index-BwDkhjyp.js";import{d as Ie}from"./index-C498nvnC.js";import{C as De,c as We}from"./index-C3Vp3Ydz.js";import{N as c}from"./index-CAmv3zaC.js";import{w as l,e as n,f as ze,u as Re,b as Ne}from"./index-B8otpkpo.js";import{w as E}from"./storybook.testing.utils-CMs160i9.js";import{S as I}from"./icon.systems-DsGmM1wX.js";import{h as Ce}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKHxS2Ra.js";import"./index-jWwGX2yX.js";import"./icon.utils-Ceokxv4B.js";const C="htmlId",He="0 0 24 24",H="Skatt",d="Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse), skatteoppgjør, skattelister. Tema og fradrag som hjelper deg til å få riktig skatt.",Be=(e,t)=>async({canvasElement:a})=>{const s=l(a);await n(s.getByRole("link")).toHaveAttribute(e,t)},Ze={component:c,title:"Tester/NavigationTile",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},title:{control:"text",table:{disable:!0}},titleAs:{table:{disable:!0}},description:{control:"text",table:{disable:!0}},isExternal:{table:{disable:!0}},hideArrowIcon:{table:{disable:!0}},size:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(I),mapping:I},href:{table:{disable:!0}},target:{table:{disable:!0}},download:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaLabel:{table:{disable:!0}},onClick:{table:{disable:!0}}}},i=e=>o.jsx(c,{...e,onClick:t=>t.preventDefault()}),Pe="Ny tittel",Fe=e=>{const[t,a]=Ee.useState(H);return o.jsx(c,{...e,title:t,onClick:s=>{s.preventDefault(),a(Pe),e.onClick&&e.onClick(s)}})},Le=e=>o.jsx("nav",{className:"flex flexColumn gapXs",children:Ce.map((t,a)=>o.jsx(c,{...e,titleAs:t,title:`Heading ${t}`},`level_${a}`))}),je=e=>o.jsxs("nav",{className:"flex gapS",children:[o.jsx(c,{...e}),o.jsx(c,{...e})]}),r={title:H,href:"#storybook-root"},m={render:i,name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Be("id","dummyIdForwardedFromRef")},p={render:i,name:"With Attributes(FA2-5)",args:{...r,id:C,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("id",C),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},g={render:i,name:"Defaults (A1, A7)",args:{...r},argTypes:{href:{table:{disable:!1}},title:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${E} > a`,focus:`${E} > a`,click:`${E} > a`}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("link"),s=t.getByRole("heading");await n(a).not.toHaveAttribute("rel"),await n(a).not.toHaveAttribute("target"),await n(s.tagName).toBe("H2")}},u={render:i,name:"With Icon (A2, B2)",args:{...r,svgPath:De},argTypes:{svgPath:{table:{disable:!1}},size:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e).getByRole("link").querySelector("svg");await n(s).toHaveAttribute("aria-hidden","true"),await n(s).toHaveAttribute("viewBox",He)}},b={render:i,name:"With External Icon (A6)",args:{...r,isExternal:!0},argTypes:{isExternal:{table:{disable:!1}},size:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=l(e).getByRole("link").querySelector("svg");await n(s).toHaveAttribute("aria-label",Ie.t("ds_buttons:shared.ExternalIcon")),await n(s).toHaveAttribute("viewBox",He)}},y={render:i,name:"With Hidden Arrow Icon (A5)",args:{...r,hideArrowIcon:!0},argTypes:{hideArrowIcon:{table:{disable:!1}},size:{table:{disable:!1}}}},v={render:i,name:"With Description (A4)",args:{...r,description:d},argTypes:{isExternal:{table:{disable:!1}}}},f={render:i,name:"With Size Medium (A1)",args:{...r,description:d,size:"medium"}},h={render:i,name:"With Size Large (A1)",args:{...r,description:d,size:"large"}},A={render:i,name:"With Size ExtraLarge (A1)",args:{...r,description:d,size:"extraLarge",svgPath:We}},k={render:i,name:"With Target (A8)",args:{...r,target:"_blank"},argTypes:{target:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");n(a).toHaveAttribute("rel","noreferrer"),n(a).toHaveAttribute("target","_blank")}},x={render:i,name:"With AriaDescribedby (B4)",args:{...r,ariaDescribedby:C},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Be("aria-describedby",C)},w={render:Fe,name:"With onClick (A3 delvis)",args:{...r,onClick:ze()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:t})=>{const s=l(t).getByRole("link");await n(s).toHaveTextContent(H),await Re.click(s),await n(s).toHaveTextContent("Ny tittel"),await Ne(()=>n(e.onClick).toHaveBeenCalled())}},T={render:Le,name:"With TitleAs (B3)",args:{...r},play:async({canvasElement:e})=>{const a=l(e).getAllByRole("heading");for(const[s,B]of a.entries())await n(B.tagName).toBe(Ce[s].toLocaleUpperCase())}},S={render:je,name:"With Tiles in Columns (A9)",args:{...r,size:"extraLarge",svgPath:We},argTypes:{size:{table:{disable:!1}}}},W={name:"With Custom ClassNames (FA3)",args:{...r,description:d,classNames:{container:"dummyClassname",title:"dummyClassname",description:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e),a=t.getByRole("link"),s=t.getByText(H),B=t.getByText(d);await n(a).toHaveClass("dummyClassname"),await n(s).toHaveClass("dummyClassname"),await n(B).toHaveClass("dummyClassname")}};var D,z,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...(R=(z=m.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var N,P,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var L,j,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (A1, A7)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    href: {
      table: {
        disable: false
      }
    },
    title: {
      table: {
        disable: false
      }
    },
    description: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > a\`,
      focus: \`\${wrapper} > a\`,
      click: \`\${wrapper} > a\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    const title = canvas.getByRole('heading');
    await expect(link).not.toHaveAttribute('rel');
    await expect(link).not.toHaveAttribute('target');
    await expect(title.tagName).toBe('H2');
  }
} satisfies Story`,...(V=(j=g.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var _,$,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  name: 'With Icon (A2, B2)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    },
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
    const link = canvas.getByRole('link');
    // eslint-disable-next-line testing-library/no-node-access
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  }
} satisfies Story`,...(M=($=u.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var G,O,q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  name: 'With External Icon (A6)',
  args: {
    ...defaultArgs,
    isExternal: true
  },
  argTypes: {
    isExternal: {
      table: {
        disable: false
      }
    },
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
    const link = canvas.getByRole('link');
    // eslint-disable-next-line testing-library/no-node-access
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-label', dsI18n.t('ds_buttons:shared.ExternalIcon'));
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  }
} satisfies Story`,...(q=(O=b.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var U,X,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: Template,
  name: 'With Hidden Arrow Icon (A5)',
  args: {
    ...defaultArgs,
    hideArrowIcon: true
  },
  argTypes: {
    hideArrowIcon: {
      table: {
        disable: false
      }
    },
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(J=(X=y.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  name: 'With Description (A4)',
  args: {
    ...defaultArgs,
    description: defaultDescription
  },
  argTypes: {
    isExternal: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Y=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size Medium (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'medium'
  }
} satisfies Story`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size Large (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'large'
  }
} satisfies Story`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,ie,le;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size ExtraLarge (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'extraLarge',
    svgPath: AccountEnkSVGpath
  }
} satisfies Story`,...(le=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,ce,de;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: Template,
  name: 'With Target (A8)',
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
      disable: true
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
} satisfies Story`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ge;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: Template,
  name: 'With AriaDescribedby (B4)',
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
      disable: true
    }
  },
  play: verifyAttribute('aria-describedby', elementId)
} satisfies Story`,...(ge=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,be,ye;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: OnClickTemplate,
  name: 'With onClick (A3 delvis)',
  args: {
    ...defaultArgs,
    onClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toHaveTextContent(defaultTitle);
    await userEvent.click(link);
    await expect(link).toHaveTextContent('Ny tittel');
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(ye=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ve,fe,he;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: TemplateWithAllHeadings,
  name: 'With TitleAs (B3)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading');
    for (const [index, heading] of headings.entries()) {
      await expect(heading.tagName).toBe(headingAsArr[index].toLocaleUpperCase());
    }
  }
} satisfies Story`,...(he=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var Ae,ke,xe;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: TemplateWithMultipleTiles,
  name: 'With Tiles in Columns (A9)',
  args: {
    ...defaultArgs,
    size: 'extraLarge',
    svgPath: AccountEnkSVGpath
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(xe=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var we,Te,Se;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    classNames: {
      container: 'dummyClassname',
      title: 'dummyClassname',
      description: 'dummyClassname'
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
    const container = canvas.getByRole('link');
    const title = canvas.getByText(defaultTitle);
    const description = canvas.getByText(defaultDescription);
    await expect(container).toHaveClass('dummyClassname');
    await expect(title).toHaveClass('dummyClassname');
    await expect(description).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(Se=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};const ea=["WithRef","WithAttributes","Defaults","WithIcon","WithExternalIcon","WithHiddenArrowIcon","WithDescription","WithSizeMedium","WithSizeLarge","WithSizeExtraLarge","WithTarget","WithAriaDescribedby","WithOnClick","WithTitleAs","WithTilesInColumns","WithCustomClassNames"];export{g as Defaults,x as WithAriaDescribedby,p as WithAttributes,W as WithCustomClassNames,v as WithDescription,b as WithExternalIcon,y as WithHiddenArrowIcon,u as WithIcon,w as WithOnClick,m as WithRef,A as WithSizeExtraLarge,h as WithSizeLarge,f as WithSizeMedium,k as WithTarget,S as WithTilesInColumns,T as WithTitleAs,ea as __namedExportsOrder,Ze as default};
//# sourceMappingURL=NavigationTile.test.stories-Fqs443Uz.js.map
