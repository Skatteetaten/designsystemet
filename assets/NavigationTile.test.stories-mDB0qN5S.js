import{j as i,d as Le,r as Pe}from"./iframe-C2uFIQ6s.js";import{g as _e,i as ze}from"./index-Bs2jIcy5.js";import{N as l}from"./index-BsLSi2HZ.js";import{S as D}from"./icon.systems-CMWPGVc8.js";import{h as Re}from"./base-props.types-B340BQPQ.js";const{expect:n,fn:Fe,userEvent:Me,waitFor:Ge,within:c}=__STORYBOOK_MODULE_TEST__,H="htmlId",Ne="0 0 24 24",B="Skatt",d="Skattekort, frikort, forskuddsskatt, skattemelding (selvangivelse), skatteoppgjør, skattelister. Tema og fradrag som hjelper deg til å få riktig skatt.",je=(e,a)=>async({canvasElement:t})=>{const s=c(t);await n(s.getByRole("link")).toHaveAttribute(e,a)},Oe={component:l,title:"Tester/NavigationTile",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},title:{control:"text",table:{disable:!0}},titleAs:{table:{disable:!0}},description:{control:"text",table:{disable:!0}},hasSpinner:{table:{disable:!0}},isExternal:{table:{disable:!0}},hideArrowIcon:{table:{disable:!0}},size:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(D),mapping:D},href:{table:{disable:!0}},target:{table:{disable:!0}},download:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaLabel:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},o=e=>i.jsx(l,{...e,onClick:a=>a.preventDefault()}),Ve="Ny tittel",qe=e=>{const[a,t]=Pe.useState(B);return i.jsx(l,{...e,title:a,onClick:s=>{s.preventDefault(),t(Ve),e.onClick&&e.onClick(s)}})},Ue=e=>i.jsx("nav",{className:"flex flexColumn gapXs",children:Re.map((a,t)=>i.jsx(l,{...e,titleAs:a,title:`Heading ${a}`},`level_${t}`))}),Xe=e=>i.jsxs("nav",{className:"flex gapS",children:[i.jsx(l,{...e}),i.jsx(l,{...e})]}),$e=e=>i.jsxs("nav",{children:[i.jsx(l,{...e}),i.jsx(l,{...e}),i.jsx(l,{...e})]}),r={title:B,href:"#storybook-root"},m={render:o,name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:je("id","dummyIdForwardedFromRef")},p={render:o,name:"With Attributes(FA2-5)",args:{...r,id:H,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=c(e).getByRole("link");await n(t).toHaveClass("dummyClassname"),await n(t).toHaveAttribute("id",H),await n(t).toHaveAttribute("lang","nb"),await n(t).toHaveAttribute("data-testid","123ID")}},u={render:o,name:"Defaults (A1, A7)",args:{...r},argTypes:{href:{table:{disable:!1}},title:{table:{disable:!1}},description:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=c(e),t=a.getByRole("link"),s=a.getByRole("heading");await n(t).not.toHaveAttribute("rel"),await n(t).not.toHaveAttribute("target"),await n(s.tagName).toBe("H2")}},g={render:o,name:"With Icon (A2, B2)",args:{...r,svgPath:_e},argTypes:{svgPath:{table:{disable:!1}},size:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=c(e).getByRole("link").querySelector("svg");await n(s).toHaveAttribute("aria-hidden","true"),await n(s).toHaveAttribute("viewBox",Ne)}},b={render:o,name:"With External Icon (A6)",args:{...r,isExternal:!0},argTypes:{isExternal:{table:{disable:!1}},size:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=c(e).getByRole("link").querySelector("svg");await n(s).toHaveAttribute("aria-label",Le.t("ds_buttons:shared.ExternalIcon")),await n(s).toHaveAttribute("viewBox",Ne)}},h={render:o,name:"With Hidden Arrow Icon (A5)",args:{...r,hideArrowIcon:!0},argTypes:{hideArrowIcon:{table:{disable:!1}},size:{table:{disable:!1}}}},v={render:o,name:"With Description (A4)",args:{...r,description:d},argTypes:{isExternal:{table:{disable:!1}}}},y={render:o,name:"With Size Medium (A1)",args:{...r,description:d,size:"medium"}},f={render:o,name:"With Size Large (A1)",args:{...r,description:d,size:"large"}},A={render:o,name:"With Size ExtraLarge (A1)",args:{...r,description:d,size:"extraLarge",svgPath:ze}},S={render:o,name:"With Target (A8)",args:{...r,target:"_blank"},argTypes:{target:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=c(e).getByRole("link");n(t).toHaveAttribute("rel","noreferrer"),n(t).toHaveAttribute("target","_blank")}},k={render:o,name:"With AriaDescribedby (B4)",args:{...r,ariaDescribedby:H},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:je("aria-describedby",H)},T={render:qe,name:"With onClick (A3 delvis)",args:{...r,onClick:Fe()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:a})=>{const s=c(a).getByRole("link");await n(s).toHaveTextContent(B),await Me.click(s),await n(s).toHaveTextContent("Ny tittel"),await Ge(()=>n(e.onClick).toHaveBeenCalled())}},x={render:Ue,name:"With TitleAs (B3)",args:{...r},play:async({canvasElement:e})=>{const t=c(e).getAllByRole("heading");for(const[s,I]of t.entries())await n(I.tagName).toBe(Re[s].toLocaleUpperCase())}},W={render:Xe,name:"With Tiles in Columns (A9)",args:{...r,size:"extraLarge",svgPath:ze},argTypes:{size:{table:{disable:!1}}}},w={name:"With Custom ClassNames (FA3)",args:{...r,description:d,classNames:{container:"dummyClassname",title:"dummyClassname",description:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=c(e),t=a.getByRole("link"),s=a.getByText(B),I=a.getByText(d);await n(t).toHaveClass("dummyClassname"),await n(s).toHaveClass("dummyClassname"),await n(I).toHaveClass("dummyClassname")}},Ke=e=>i.jsxs(i.Fragment,{children:[i.jsx(l,{...e,className:"bottomSpacingXL",size:"extraLarge",onClick:a=>a.preventDefault()}),i.jsx(l,{...e,className:"bottomSpacingXL",onClick:a=>a.preventDefault()}),i.jsx(l,{...e,size:"medium",onClick:a=>a.preventDefault()})]}),C={render:Ke,name:"With Spinner",args:{...r,hasSpinner:!0,description:"Eksempel på undertittel. Denne kan være litt lengre."},argTypes:{hasSpinner:{table:{disable:!1}},spinnerTitle:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},E={render:$e,name:"With Multiple Tiles Without Gap",args:{...r,description:"Eksempel på undertittel. Denne kan være litt lengre."},play:async({canvasElement:e})=>{c(e).getAllByRole("link")[0].focus()}};var z,R,N;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var j,L,P;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var _,F,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus', 'active']
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
} satisfies Story`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var G,O,V;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var q,U,X;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var $,K,Y;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var J,Q,Z;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ae,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size Medium (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'medium'
  }
} satisfies Story`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size Large (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'large'
  }
} satisfies Story`,...(re=(se=f.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,oe;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: Template,
  name: 'With Size ExtraLarge (A1)',
  args: {
    ...defaultArgs,
    description: defaultDescription,
    size: 'extraLarge',
    svgPath: AccountEnkSVGpath
  }
} satisfies Story`,...(oe=(le=A.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,de,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,ge;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('aria-describedby', elementId)
} satisfies Story`,...(ge=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var be,he,ve;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: OnClickTemplate,
  name: 'With onClick (A3 delvis)',
  args: {
    ...defaultArgs,
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
    await expect(link).toHaveTextContent(defaultTitle);
    await userEvent.click(link);
    await expect(link).toHaveTextContent('Ny tittel');
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(ve=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ye,fe,Ae;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var Se,ke,Te;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var xe,We,we;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(We=w.parameters)==null?void 0:We.docs)==null?void 0:we.source}}};var Ce,Ee,He;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...(He=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Be,Ie,De;E.parameters={...E.parameters,docs:{...(Be=E.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};const Ye=["WithRef","WithAttributes","Defaults","WithIcon","WithExternalIcon","WithHiddenArrowIcon","WithDescription","WithSizeMedium","WithSizeLarge","WithSizeExtraLarge","WithTarget","WithAriaDescribedby","WithOnClick","WithTitleAs","WithTilesInColumns","WithCustomClassNames","WithSpinner","WithMultitpleTilesWithoutGap"],ta=Object.freeze(Object.defineProperty({__proto__:null,Defaults:u,WithAriaDescribedby:k,WithAttributes:p,WithCustomClassNames:w,WithDescription:v,WithExternalIcon:b,WithHiddenArrowIcon:h,WithIcon:g,WithMultitpleTilesWithoutGap:E,WithOnClick:T,WithRef:m,WithSizeExtraLarge:A,WithSizeLarge:f,WithSizeMedium:y,WithSpinner:C,WithTarget:S,WithTilesInColumns:W,WithTitleAs:x,__namedExportsOrder:Ye,default:Oe},Symbol.toStringTag,{value:"Module"}));export{ta as N};
//# sourceMappingURL=NavigationTile.test.stories-mDB0qN5S.js.map
