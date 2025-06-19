import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as Pe}from"./index-D_ouKaeX.js";import{f as Fe,w as c,e as n,u as Me,b as Ge}from"./index-DIxTUSTt.js";import{d as $e}from"./index-CwaotbcG.js";import{g as Ve,i as Re}from"./index-BQO_0U1F.js";import{N as l}from"./index-BUexH3MM.js";import{w as m}from"./storybook.testing.utils-CMs160i9.js";import{S as z}from"./icon.systems-NRpsphgm.js";import{h as Ne}from"./base-props.types-B340BQPQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dvbywa6-.js";import"./index-BQtvKDNR.js";import"./icon.utils-D_vdkWhZ.js";const B="htmlId",je="0 0 24 24",I="Skatt",d="Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse), skatteoppgjør, skattelister. Tema og fradrag som hjelper deg til å få riktig skatt.",Le=(e,a)=>async({canvasElement:t})=>{const s=c(t);await n(s.getByRole("link")).toHaveAttribute(e,a)},ca={component:l,title:"Tester/NavigationTile",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},title:{control:"text",table:{disable:!0}},titleAs:{table:{disable:!0}},description:{control:"text",table:{disable:!0}},hasSpinner:{table:{disable:!0}},isExternal:{table:{disable:!0}},hideArrowIcon:{table:{disable:!0}},size:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(z),mapping:z},href:{table:{disable:!0}},target:{table:{disable:!0}},download:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaLabel:{table:{disable:!0}},onClick:{table:{disable:!0}}}},o=e=>i.jsx(l,{...e,onClick:a=>a.preventDefault()}),_e="Ny tittel",Oe=e=>{const[a,t]=Pe.useState(I);return i.jsx(l,{...e,title:a,onClick:s=>{s.preventDefault(),t(_e),e.onClick&&e.onClick(s)}})},qe=e=>i.jsx("nav",{className:"flex flexColumn gapXs",children:Ne.map((a,t)=>i.jsx(l,{...e,titleAs:a,title:`Heading ${a}`},`level_${t}`))}),Xe=e=>i.jsxs("nav",{className:"flex gapS",children:[i.jsx(l,{...e}),i.jsx(l,{...e})]}),Ue=e=>i.jsxs("nav",{children:[i.jsx(l,{...e}),i.jsx(l,{...e}),i.jsx(l,{...e})]}),r={title:I,href:"#storybook-root"},p={render:o,name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Le("id","dummyIdForwardedFromRef")},u={render:o,name:"With Attributes(FA2-5)",args:{...r,id:B,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e).getByRole("link");await n(t).toHaveClass("dummyClassname"),await n(t).toHaveAttribute("id",B),await n(t).toHaveAttribute("lang","nb"),await n(t).toHaveAttribute("data-testid","123ID")}},g={render:o,name:"Defaults (A1, A7)",args:{...r},argTypes:{href:{table:{disable:!1}},title:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${m} > a`,focus:`${m} > a`,click:`${m} > a`}},play:async({canvasElement:e})=>{const a=c(e),t=a.getByRole("link"),s=a.getByRole("heading");await n(t).not.toHaveAttribute("rel"),await n(t).not.toHaveAttribute("target"),await n(s.tagName).toBe("H2")}},b={render:o,name:"With Icon (A2, B2)",args:{...r,svgPath:Ve},argTypes:{svgPath:{table:{disable:!1}},size:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=c(e).getByRole("link").querySelector("svg");await n(s).toHaveAttribute("aria-hidden","true"),await n(s).toHaveAttribute("viewBox",je)}},h={render:o,name:"With External Icon (A6)",args:{...r,isExternal:!0},argTypes:{isExternal:{table:{disable:!1}},size:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=c(e).getByRole("link").querySelector("svg");await n(s).toHaveAttribute("aria-label",$e.t("ds_buttons:shared.ExternalIcon")),await n(s).toHaveAttribute("viewBox",je)}},f={render:o,name:"With Hidden Arrow Icon (A5)",args:{...r,hideArrowIcon:!0},argTypes:{hideArrowIcon:{table:{disable:!1}},size:{table:{disable:!1}}}},y={render:o,name:"With Description (A4)",args:{...r,description:d},argTypes:{isExternal:{table:{disable:!1}}}},v={render:o,name:"With Size Medium (A1)",args:{...r,description:d,size:"medium"}},A={render:o,name:"With Size Large (A1)",args:{...r,description:d,size:"large"}},k={render:o,name:"With Size ExtraLarge (A1)",args:{...r,description:d,size:"extraLarge",svgPath:Re}},T={render:o,name:"With Target (A8)",args:{...r,target:"_blank"},argTypes:{target:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=c(e).getByRole("link");n(t).toHaveAttribute("rel","noreferrer"),n(t).toHaveAttribute("target","_blank")}},x={render:o,name:"With AriaDescribedby (B4)",args:{...r,ariaDescribedby:B},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:Le("aria-describedby",B)},S={render:Oe,name:"With onClick (A3 delvis)",args:{...r,onClick:Fe()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:a})=>{const s=c(a).getByRole("link");await n(s).toHaveTextContent(I),await Me.click(s),await n(s).toHaveTextContent("Ny tittel"),await Ge(()=>n(e.onClick).toHaveBeenCalled())}},w={render:qe,name:"With TitleAs (B3)",args:{...r},play:async({canvasElement:e})=>{const t=c(e).getAllByRole("heading");for(const[s,D]of t.entries())await n(D.tagName).toBe(Ne[s].toLocaleUpperCase())}},W={render:Xe,name:"With Tiles in Columns (A9)",args:{...r,size:"extraLarge",svgPath:Re},argTypes:{size:{table:{disable:!1}}}},C={name:"With Custom ClassNames (FA3)",args:{...r,description:d,classNames:{container:"dummyClassname",title:"dummyClassname",description:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e),t=a.getByRole("link"),s=a.getByText(I),D=a.getByText(d);await n(t).toHaveClass("dummyClassname"),await n(s).toHaveClass("dummyClassname"),await n(D).toHaveClass("dummyClassname")}},Je=e=>i.jsxs(i.Fragment,{children:[i.jsx(l,{...e,className:"bottomSpacingXL",size:"extraLarge",onClick:a=>a.preventDefault()}),i.jsx(l,{...e,className:"bottomSpacingXL",onClick:a=>a.preventDefault()}),i.jsx(l,{...e,size:"medium",onClick:a=>a.preventDefault()})]}),E={render:Je,name:"With Spinner",args:{...r,hasSpinner:!0,description:"Eksempel på undertittel. Denne kan være litt lengre."},argTypes:{hasSpinner:{table:{disable:!1}},spinnerTitle:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${m} > a:first-child`,click:`${m} > a:first-child`},viewport:{defaultViewport:"--mobile"}}},H={render:Ue,name:"With Multiple Tiles Without Gap",args:{...r,description:"Eksempel på undertittel. Denne kan være litt lengre."},play:async({canvasElement:e})=>{c(e).getAllByRole("link")[0].focus()}};var R,N,j;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var L,P,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(P=u.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var M,G,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(G=g.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var V,_,O;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,X,U;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(X=h.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size Medium (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'medium'
  }
} satisfies Story`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,ie;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size Large (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'large'
  }
} satisfies Story`,...(ie=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,oe,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size ExtraLarge (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'extraLarge',
    svgPath: AccountEnkSVGpath
  }
} satisfies Story`,...(ce=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,me,pe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ge,be;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,fe,ye;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,Ae,ke;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var Te,xe,Se;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var we,We,Ce;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Ce.source}}};var Ee,He,Be;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(He=E.parameters)==null?void 0:He.docs)==null?void 0:Be.source}}};var Ie,De,ze;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: TemplateWithMultipleTilesWitoutGap,
  name: 'With Multiple Tiles Without Gap',
  args: {
    ...defaultArgs,
    description: 'Eksempel på undertittel. Denne kan være litt lengre.'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getAllByRole('link')[0];
    link.focus();
  }
} satisfies Story`,...(ze=(De=H.parameters)==null?void 0:De.docs)==null?void 0:ze.source}}};const da=["WithRef","WithAttributes","Defaults","WithIcon","WithExternalIcon","WithHiddenArrowIcon","WithDescription","WithSizeMedium","WithSizeLarge","WithSizeExtraLarge","WithTarget","WithAriaDescribedby","WithOnClick","WithTitleAs","WithTilesInColumns","WithCustomClassNames","WithSpinner","WithMultitpleTilesWithoutGap"];export{g as Defaults,x as WithAriaDescribedby,u as WithAttributes,C as WithCustomClassNames,y as WithDescription,h as WithExternalIcon,f as WithHiddenArrowIcon,b as WithIcon,H as WithMultitpleTilesWithoutGap,S as WithOnClick,p as WithRef,k as WithSizeExtraLarge,A as WithSizeLarge,v as WithSizeMedium,E as WithSpinner,T as WithTarget,W as WithTilesInColumns,w as WithTitleAs,da as __namedExportsOrder,ca as default};
//# sourceMappingURL=NavigationTile.test.stories-oR_vLcOB.js.map
