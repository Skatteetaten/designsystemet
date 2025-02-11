import{j as i}from"./jsx-runtime-CfatFE5O.js";import{r as Ne}from"./index-ClcD9ViR.js";import{w as c,e as n,f as Re,u as Le,b as Pe}from"./index-XVqkR3zt.js";import{d as Fe}from"./index-qxaMszO_.js";import{f as je,h as Be}from"./index-BYj_oXFq.js";import{N as o}from"./index-Deg9i1H2.js";import{w as m}from"./storybook.testing.utils-CMs160i9.js";import{S as D}from"./icon.systems-C3YHcMhe.js";import{h as Ie}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CT5qi75N.js";import"./index-DVxy_Kbo.js";import"./icon.utils-BQ79h5X2.js";const E="htmlId",De="0 0 24 24",B="Skatt",d="Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse), skatteoppgjør, skattelister. Tema og fradrag som hjelper deg til å få riktig skatt.",ze=(e,a)=>async({canvasElement:t})=>{const s=c(t);await n(s.getByRole("link")).toHaveAttribute(e,a)},sa={component:o,title:"Tester/NavigationTile",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},title:{control:"text",table:{disable:!0}},titleAs:{table:{disable:!0}},description:{control:"text",table:{disable:!0}},hasSpinner:{table:{disable:!0}},isExternal:{table:{disable:!0}},hideArrowIcon:{table:{disable:!0}},size:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(D),mapping:D},href:{table:{disable:!0}},target:{table:{disable:!0}},download:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaLabel:{table:{disable:!0}},onClick:{table:{disable:!0}}}},l=e=>i.jsx(o,{...e,onClick:a=>a.preventDefault()}),$e="Ny tittel",Ve=e=>{const[a,t]=Ne.useState(B);return i.jsx(o,{...e,title:a,onClick:s=>{s.preventDefault(),t($e),e.onClick&&e.onClick(s)}})},_e=e=>i.jsx("nav",{className:"flex flexColumn gapXs",children:Ie.map((a,t)=>i.jsx(o,{...e,titleAs:a,title:`Heading ${a}`},`level_${t}`))}),Me=e=>i.jsxs("nav",{className:"flex gapS",children:[i.jsx(o,{...e}),i.jsx(o,{...e})]}),r={title:B,href:"#storybook-root"},p={render:l,name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:ze("id","dummyIdForwardedFromRef")},u={render:l,name:"With Attributes(FA2-5)",args:{...r,id:E,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e).getByRole("link");await n(t).toHaveClass("dummyClassname"),await n(t).toHaveAttribute("id",E),await n(t).toHaveAttribute("lang","nb"),await n(t).toHaveAttribute("data-testid","123ID")}},g={render:l,name:"Defaults (A1, A7)",args:{...r},argTypes:{href:{table:{disable:!1}},title:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${m} > a`,focus:`${m} > a`,click:`${m} > a`}},play:async({canvasElement:e})=>{const a=c(e),t=a.getByRole("link"),s=a.getByRole("heading");await n(t).not.toHaveAttribute("rel"),await n(t).not.toHaveAttribute("target"),await n(s.tagName).toBe("H2")}},b={render:l,name:"With Icon (A2, B2)",args:{...r,svgPath:je},argTypes:{svgPath:{table:{disable:!1}},size:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=c(e).getByRole("link").querySelector("svg");await n(s).toHaveAttribute("aria-hidden","true"),await n(s).toHaveAttribute("viewBox",De)}},f={render:l,name:"With External Icon (A6)",args:{...r,isExternal:!0},argTypes:{isExternal:{table:{disable:!1}},size:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=c(e).getByRole("link").querySelector("svg");await n(s).toHaveAttribute("aria-label",Fe.t("ds_buttons:shared.ExternalIcon")),await n(s).toHaveAttribute("viewBox",De)}},y={render:l,name:"With Hidden Arrow Icon (A5)",args:{...r,hideArrowIcon:!0},argTypes:{hideArrowIcon:{table:{disable:!1}},size:{table:{disable:!1}}}},h={render:l,name:"With Description (A4)",args:{...r,description:d},argTypes:{isExternal:{table:{disable:!1}}}},v={render:l,name:"With Size Medium (A1)",args:{...r,description:d,size:"medium"}},A={render:l,name:"With Size Large (A1)",args:{...r,description:d,size:"large"}},k={render:l,name:"With Size ExtraLarge (A1)",args:{...r,description:d,size:"extraLarge",svgPath:Be}},S={render:l,name:"With Target (A8)",args:{...r,target:"_blank"},argTypes:{target:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=c(e).getByRole("link");n(t).toHaveAttribute("rel","noreferrer"),n(t).toHaveAttribute("target","_blank")}},x={render:l,name:"With AriaDescribedby (B4)",args:{...r,ariaDescribedby:E},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:ze("aria-describedby",E)},w={render:Ve,name:"With onClick (A3 delvis)",args:{...r,onClick:Re()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:a})=>{const s=c(a).getByRole("link");await n(s).toHaveTextContent(B),await Le.click(s),await n(s).toHaveTextContent("Ny tittel"),await Pe(()=>n(e.onClick).toHaveBeenCalled())}},T={render:_e,name:"With TitleAs (B3)",args:{...r},play:async({canvasElement:e})=>{const t=c(e).getAllByRole("heading");for(const[s,I]of t.entries())await n(I.tagName).toBe(Ie[s].toLocaleUpperCase())}},W={render:Me,name:"With Tiles in Columns (A9)",args:{...r,size:"extraLarge",svgPath:Be},argTypes:{size:{table:{disable:!1}}}},C={name:"With Custom ClassNames (FA3)",args:{...r,description:d,classNames:{container:"dummyClassname",title:"dummyClassname",description:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e),t=a.getByRole("link"),s=a.getByText(B),I=a.getByText(d);await n(t).toHaveClass("dummyClassname"),await n(s).toHaveClass("dummyClassname"),await n(I).toHaveClass("dummyClassname")}},Ge=e=>i.jsxs(i.Fragment,{children:[i.jsx(o,{...e,className:"bottomSpacingXL",size:"extraLarge",onClick:a=>a.preventDefault()}),i.jsx(o,{...e,className:"bottomSpacingXL",onClick:a=>a.preventDefault()}),i.jsx(o,{...e,size:"medium",onClick:a=>a.preventDefault()})]}),H={render:Ge,name:"With Spinner",args:{...r,hasSpinner:!0,description:"Eksempel på undertittel. Denne kan være litt lengre."},argTypes:{hasSpinner:{table:{disable:!1}},spinnerTitle:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${m} > a:first-child`,click:`${m} > a:first-child`},viewport:{defaultViewport:"--mobile"}}};var z,N,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var L,P,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(P=u.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var j,$,V;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=($=g.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var _,M,G;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  }
} satisfies Story`,...(G=(M=b.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var O,q,X;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-label', dsI18n.t('ds_buttons:shared.ExternalIcon'));
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  }
} satisfies Story`,...(X=(q=f.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var U,J,K;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size Medium (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'medium'
  }
} satisfies Story`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size Large (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'large'
  }
} satisfies Story`,...(re=(se=A.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,oe;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size ExtraLarge (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'extraLarge',
    svgPath: AccountEnkSVGpath
  }
} satisfies Story`,...(oe=(le=k.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,de,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,ge;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var be,fe,ye;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var he,ve,Ae;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:Ae.source}}};var ke,Se,xe;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(xe=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var we,Te,We;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var Ce,He,Ee;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: TemplateWithSpinner,
  name: 'With Spinner',
  args: {
    ...defaultArgs,
    hasSpinner: true,
    description: 'Eksempel på undertittel. Denne kan være litt lengre.'
  },
  argTypes: {
    hasSpinner: {
      table: {
        disable: false
      }
    },
    spinnerTitle: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} > a:first-child\`,
      click: \`\${wrapper} > a:first-child\`
    },
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(Ee=(He=H.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};const ra=["WithRef","WithAttributes","Defaults","WithIcon","WithExternalIcon","WithHiddenArrowIcon","WithDescription","WithSizeMedium","WithSizeLarge","WithSizeExtraLarge","WithTarget","WithAriaDescribedby","WithOnClick","WithTitleAs","WithTilesInColumns","WithCustomClassNames","WithSpinner"];export{g as Defaults,x as WithAriaDescribedby,u as WithAttributes,C as WithCustomClassNames,h as WithDescription,f as WithExternalIcon,y as WithHiddenArrowIcon,b as WithIcon,w as WithOnClick,p as WithRef,k as WithSizeExtraLarge,A as WithSizeLarge,v as WithSizeMedium,H as WithSpinner,S as WithTarget,W as WithTilesInColumns,T as WithTitleAs,ra as __namedExportsOrder,sa as default};
//# sourceMappingURL=NavigationTile.test.stories-COnEx3Kx.js.map
