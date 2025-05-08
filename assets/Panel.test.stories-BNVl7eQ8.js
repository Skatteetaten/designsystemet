import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as $}from"./index-7h80QhK_.js";import{w as i,e as r,u as Pa}from"./index-DIxTUSTt.js";import{B as xa}from"./index-TStLVSlm.js";import{P as l}from"./index-B4uH14t0.js";import"./index-EsEcB_zD.js";import{V as p}from"./index-MCo35TjR.js";import{P as o}from"./index-SYCMKRjb.js";import{l as d}from"./storybook.testing.utils-CMs160i9.js";import{f as g,w as Ha}from"./wait-alert-illustration-CKfOc_iA.js";import{h as Ra,b as Ba,c as u}from"./base-props.types-B2QwU1g4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-_-BAtSXr.js";const Ia=["outline","filled"],Wa=["s","m","l","xl","xxl","mega"],wa=["xxs","xs","s","m","l","xl","xxl","mega"],L="Det er en tittel",_="Det er en undertittel",J=[u[0],u[1],u[2],u[3],u[5]],qa={component:l,title:"Tester/Panel",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0},options:["dummyPanelOverridesWidthAndPadding"]},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canManuallySetTitleFocus:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}},color:{table:{disable:!0},options:[...J],control:"inline-radio"},hasResponsivePadding:{table:{disable:!0}},headingRef:{table:{disable:!0},control:{disable:!0}},hideGraphicMobile:{table:{disable:!0}},hideSubtitle:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",g,Ha]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0},options:[...Wa],control:"inline-radio"},renderIcon:{table:{disable:!0},control:{disable:!0}},spacing:{table:{disable:!0},options:[...wa],control:"inline-radio"},subtitle:{table:{disable:!0}},subtitleAs:{options:[...Ba],control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},titleAs:{options:[...Ra],control:"inline-radio",table:{disable:!0}},variant:{table:{disable:!0},options:[...Ia],control:"inline-radio"}}},s={children:e.jsxs(e.Fragment,{children:[e.jsx(o,{hasSpacing:!0,children:d}),e.jsx(xa,{children:"Trykk på meg"})]})},h={name:"With Ref (FA1)",args:{...s,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=i(n).getAllByRole("generic")[1];await r(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getAllByRole("generic")[1];await r(a).toHaveClass("dummyClassname"),await r(a).toHaveAttribute("id","htmlId"),await r(a).toHaveAttribute("lang","nb"),await r(a).toHaveAttribute("data-testid","123ID")}},f={name:"With ClassName Overrides Panel Width And Padding none (A2, A10)",args:{...s,className:"dummyPanelOverridesWidthAndPadding"},argTypes:{className:{table:{disable:!1}}}},y={name:"Defaults Variant Outline (A1, A2 delvis, A3)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByText(d);await r(a).toBeInTheDocument()}},A={name:"Variant Filled (A1)",args:{...s,variant:"filled"},argTypes:{variant:{table:{disable:!1}}}},v={name:"With Title (A5, A3)",args:{...s,title:L,children:e.jsx(o,{children:d})},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument(),await r(a).toHaveTextContent(L),await r(a.tagName).toBe("H3")}},T={name:"With TitleAs (A5)",args:{...s,title:L,titleAs:"h1"},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a.tagName).toBe("H1")}},S={name:"With HideTitle (A6)",args:{...s,title:L,hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument()}},x={name:"With Subtitle (A7, A3)",args:{...s,subtitle:_,children:e.jsx(o,{children:d})},argTypes:{subtitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument(),await r(a).toHaveTextContent(_),await r(a.tagName).toBe("H4")}},I={name:"With SubtitleAs (A7)",args:{...s,subtitle:"Det er en undertittel med valgt heading nivå",subtitleAs:"h2"},argTypes:{subtitleAs:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a.tagName).toBe("H2")}},W={name:"With HideSubtitle (A8)",args:{...s,subtitle:_,hideSubtitle:!0},argTypes:{hideSubtitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument()}},m=n=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,variant:"outline",children:e.jsx(o,{children:d})}),e.jsx(l,{...n,variant:"filled",children:e.jsx(o,{children:d})})]}),w={render:m,name:"With Image (A9)",args:{...s,imageSource:g},argTypes:{imageSource:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("presentation",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","")})}},P={render:m,name:"With Image With Alt Text (A9)",args:{...s,imageSource:g,imageSourceAltText:"Bonde med ku"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","Bonde med ku")})}},H={render:m,name:"With Image On Small Screen (A9)",args:{...s,imageSource:g},argTypes:{imageSource:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},R={render:m,name:"With Icon (A11 delvis)",args:{...s,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument()})}},B={render:m,name:"With Icon On Small Screen (A12)",args:{...s,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},M={render:m,name:"With HideGraphicMobile And Icon On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},E={render:m,name:"With HideGraphicMobile And Image On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:g},argTypes:{hideGraphicMobile:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},j={render:m,name:"With HideGraphicMobile And Icon On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},F={render:m,name:"With HideGraphicMobile And Image On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:g},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},Ma=n=>e.jsxs(e.Fragment,{children:[J.map((t,a)=>e.jsx(l,{...n,color:t,variant:"outline",children:`color: ${t}`},`panel_${a}`)),J.map((t,a)=>e.jsx(l,{...n,color:t,variant:"filled",children:`color: ${t}`},`panel_${a}`))]}),G={render:Ma,name:"With Color And Variant (A1)",args:{...s},argTypes:{color:{table:{disable:!1},control:{disable:!0}}}},Ea=n=>e.jsx(e.Fragment,{children:wa.map((t,a)=>e.jsx(l,{...n,spacing:t,children:`spacing: ${t}`},`panel_${a}`))}),k={render:Ea,name:"With Spacing (A4)",args:{...s},argTypes:{spacing:{table:{disable:!1},control:{disable:!0}}}},ja=n=>e.jsx(e.Fragment,{children:Wa.map((t,a)=>e.jsxs($.Fragment,{children:[e.jsxs(l,{padding:t,children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(o,{children:d})]}),e.jsxs(l,{padding:t,variant:"filled",children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(o,{children:d})]})]},a))}),D={render:ja,name:"With Padding (A10)",args:{...s},argTypes:{padding:{table:{disable:!1},control:{disable:!0}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},Fa=n=>e.jsx(e.Fragment,{children:Ia.map((t,a)=>e.jsxs("div",{children:[e.jsx(l,{variant:t,renderIcon:n.renderIcon,title:"En overskrift",children:d},`panel1_${a}`),e.jsx(l,{variant:t,children:d},`panel2_${a}`)]},a))}),N={render:Fa,name:"Text Aligned Vertical (A13)",args:{...s,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}}},V={name:"Text Short And Icon (A11)",args:{title:"Kort tittel",children:e.jsx(o,{children:"Kort test ..."}),renderIcon:()=>e.jsx(p,{size:"large"})},argTypes:{renderIcon:{table:{disable:!1}}}},C={args:{...s,title:"Tittel i Panel",canManuallySetTitleFocus:!0},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading",{level:3});a.focus(),await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("tabIndex","-1")}},O={name:"With Panel Heading Ref",render:n=>{const t=$.useRef(null);return $.useEffect(()=>{t.current!==null&&(t.current.id="dummyIdForwardedFromRef")},[]),e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,headingRef:t,children:e.jsx(o,{children:d})}),e.jsx(xa,{onClick:()=>{var a;(a=t.current)==null||a.focus()},children:"Sett fokus på Panel Header"})]})},args:{...s,title:"Panel Header skal kunne få fokus",canManuallySetTitleFocus:!0,variant:"outline"},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}},headingRef:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=i(n),a=t.getByRole("button");await Pa.click(a);const c=t.getByRole("heading",{level:3});await r(c).toHaveAttribute("id","dummyIdForwardedFromRef"),await r(c).toHaveFocus()}},Ga=n=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,title:"Med responsive padding ",children:e.jsx(o,{children:`
      Her har vi satt hasResponsivePadding:true og endret følgende tokens for responsive visning. 
      --pandel-padding-xs, --pandel-padding-m og --pandel-padding-l
      `})}),e.jsx(l,{title:"Med default padding",padding:n.padding,children:e.jsx(o,{children:"Denne Panel bruker standard 'padding'-prop for å kontrollere padding."})})]}),z={render:Ga,name:"With Responsive Padding",args:{children:"",hasResponsivePadding:!0,classNames:{padding:"dummyPanelPaddingResponsive"}},argTypes:{hasResponsivePadding:{description:"lskjf"},padding:{table:{disable:!1,readonly:!1},control:{disable:!1}},classNames:{table:{readonly:!0},disable:!1,control:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}};var X,K,q;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLHeadingElement | null): void => {
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var Q,U,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(Y=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With ClassName Overrides Panel Width And Padding none (A2, A10)',
  args: {
    ...defaultArgs,
    className: 'dummyPanelOverridesWidthAndPadding'
  },
  argTypes: {
    className: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Defaults Variant Outline (A1, A2 delvis, A3)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textNode = canvas.getByText(loremIpsum);
    await expect(textNode).toBeInTheDocument();
  }
} satisfies Story`,...(se=(te=y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ie,le;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Variant Filled (A1)',
  args: {
    ...defaultArgs,
    variant: 'filled'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(le=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,de,ce;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With Title (A5, A3)',
  args: {
    ...defaultArgs,
    title: tittelText,
    children: <Paragraph>{loremIpsum}</Paragraph>
  },
  argTypes: {
    title: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent(tittelText);
    await expect(heading.tagName).toBe('H3');
  }
} satisfies Story`,...(ce=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,ge;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'With TitleAs (A5)',
  args: {
    ...defaultArgs,
    title: tittelText,
    titleAs: 'h1'
  },
  argTypes: {
    titleAs: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading.tagName).toBe('H1');
  }
} satisfies Story`,...(ge=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,he,be;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With HideTitle (A6)',
  args: {
    ...defaultArgs,
    title: tittelText,
    hideTitle: true
  },
  argTypes: {
    hideTitle: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toBeInTheDocument();
  }
} satisfies Story`,...(be=(he=S.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var fe,ye,Ae;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'With Subtitle (A7, A3)',
  args: {
    ...defaultArgs,
    subtitle: subtittelText,
    children: <Paragraph>{loremIpsum}</Paragraph>
  },
  argTypes: {
    subtitle: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent(subtittelText);
    await expect(heading.tagName).toBe('H4');
  }
} satisfies Story`,...(Ae=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:Ae.source}}};var ve,Te,Se;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'With SubtitleAs (A7)',
  args: {
    ...defaultArgs,
    subtitle: 'Det er en undertittel med valgt heading nivå',
    subtitleAs: 'h2'
  },
  argTypes: {
    subtitleAs: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading.tagName).toBe('H2');
  }
} satisfies Story`,...(Se=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var xe,Ie,We;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'With HideSubtitle (A8)',
  args: {
    ...defaultArgs,
    subtitle: subtittelText,
    hideSubtitle: true
  },
  argTypes: {
    hideSubtitle: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toBeInTheDocument();
  }
} satisfies Story`,...(We=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var we,Pe,He;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With Image (A9)',
  args: {
    ...defaultArgs,
    imageSource: farmerIllustration
  },
  argTypes: {
    imageSource: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const images = canvas.getAllByRole('presentation', {
      hidden: true
    });
    images.forEach(img => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', '');
    });
  }
} satisfies Story`,...(He=(Pe=w.parameters)==null?void 0:Pe.docs)==null?void 0:He.source}}};var Re,Be,Me;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With Image With Alt Text (A9)',
  args: {
    ...defaultArgs,
    imageSource: farmerIllustration,
    imageSourceAltText: 'Bonde med ku'
  },
  argTypes: {
    imageSource: {
      table: {
        disable: false
      }
    },
    imageSourceAltText: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const images = canvas.getAllByRole('img', {
      hidden: true
    });
    images.forEach(img => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', 'Bonde med ku');
    });
  }
} satisfies Story`,...(Me=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:Me.source}}};var Ee,je,Fe;H.parameters={...H.parameters,docs:{...(Ee=H.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With Image On Small Screen (A9)',
  args: {
    ...defaultArgs,
    imageSource: farmerIllustration
  },
  argTypes: {
    imageSource: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Fe=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Ge,ke,De;R.parameters={...R.parameters,docs:{...(Ge=R.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With Icon (A11 delvis)',
  args: {
    ...defaultArgs,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />
  },
  argTypes: {
    renderIcon: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const icons = canvas.getAllByRole('img', {
      hidden: true
    });
    icons.forEach(icon => {
      expect(icon).toBeInTheDocument();
    });
  }
} satisfies Story`,...(De=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Ne,Ve,Ce;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With Icon On Small Screen (A12)',
  args: {
    ...defaultArgs,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />
  },
  argTypes: {
    renderIcon: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Ce=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source}}};var Oe,ze,Le;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With HideGraphicMobile And Icon On Small Screen (A12, A9)',
  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />
  },
  argTypes: {
    hideGraphicMobile: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Le=(ze=M.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var $e,_e,Je;E.parameters={...E.parameters,docs:{...($e=E.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With HideGraphicMobile And Image On Small Screen (A12, A9)',
  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    imageSource: farmerIllustration
  },
  argTypes: {
    hideGraphicMobile: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Je=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:Je.source}}};var Xe,Ke,qe;j.parameters={...j.parameters,docs:{...(Xe=j.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With HideGraphicMobile And Icon On Big Screen (A12, A9)',
  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />
  },
  argTypes: {
    hideGraphicMobile: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(qe=(Ke=j.parameters)==null?void 0:Ke.docs)==null?void 0:qe.source}}};var Qe,Ue,Ye;F.parameters={...F.parameters,docs:{...(Qe=F.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: TemplateWithGraphics,
  name: 'With HideGraphicMobile And Image On Big Screen (A12, A9)',
  args: {
    ...defaultArgs,
    hideGraphicMobile: true,
    imageSource: farmerIllustration
  },
  argTypes: {
    hideGraphicMobile: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Ye=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: TemplateWithAllColors,
  name: 'With Color And Variant (A1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    color: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...(aa=(ea=G.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var na,ta,sa;k.parameters={...k.parameters,docs:{...(na=k.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: TemplateWithAllSpacings,
  name: 'With Spacing (A4)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    spacing: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...(sa=(ta=k.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var ra,ia,la;D.parameters={...D.parameters,docs:{...(ra=D.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: TemplateWithAllPaddings,
  name: 'With Padding (A10)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    padding: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(la=(ia=D.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var oa,da,ca;N.parameters={...N.parameters,docs:{...(oa=N.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: TemplateTwoPanelWithTextAndOneWithIcon,
  name: 'Text Aligned Vertical (A13)',
  args: {
    ...defaultArgs,
    renderIcon: (): JSX.Element => <InfoIcon size={'extraLarge'} />
  },
  argTypes: {
    renderIcon: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ca=(da=N.parameters)==null?void 0:da.docs)==null?void 0:ca.source}}};var ma,pa,ga;V.parameters={...V.parameters,docs:{...(ma=V.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  name: 'Text Short And Icon (A11)',
  args: {
    title: 'Kort tittel',
    children: <Paragraph>{'Kort test ...'}</Paragraph>,
    renderIcon: (): JSX.Element => <InfoIcon size={'large'} />
  },
  argTypes: {
    renderIcon: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ga=(pa=V.parameters)==null?void 0:pa.docs)==null?void 0:ga.source}}};var ua,ha,ba;C.parameters={...C.parameters,docs:{...(ua=C.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: 'Tittel i Panel',
    canManuallySetTitleFocus: true
  },
  argTypes: {
    canManuallySetTitleFocus: {
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
    const panelHeading = canvas.getByRole('heading', {
      level: 3
    });
    panelHeading.focus();
    await expect(panelHeading).toBeInTheDocument();
    await expect(panelHeading).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...(ba=(ha=C.parameters)==null?void 0:ha.docs)==null?void 0:ba.source}}};var fa,ya,Aa;O.parameters={...O.parameters,docs:{...(fa=O.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: 'With Panel Heading Ref',
  render: (args): JSX.Element => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
      if (headingRef.current !== null) {
        headingRef.current.id = 'dummyIdForwardedFromRef';
      }
    }, []);
    return <>
        <Panel {...args} headingRef={headingRef}>
          <Paragraph>{loremIpsum}</Paragraph>
        </Panel>
        <Button onClick={(): void => {
        headingRef.current?.focus();
      }}>
          {'Sett fokus på Panel Header'}
        </Button>
      </>;
  },
  args: {
    ...defaultArgs,
    title: 'Panel Header skal kunne få fokus',
    canManuallySetTitleFocus: true,
    variant: 'outline'
  },
  argTypes: {
    canManuallySetTitleFocus: {
      table: {
        disable: false
      }
    },
    headingRef: {
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const panelHeading = canvas.getByRole('heading', {
      level: 3
    });
    await expect(panelHeading).toHaveAttribute('id', 'dummyIdForwardedFromRef');
    await expect(panelHeading).toHaveFocus();
  }
} satisfies Story`,...(Aa=(ya=O.parameters)==null?void 0:ya.docs)==null?void 0:Aa.source}}};var va,Ta,Sa;z.parameters={...z.parameters,docs:{...(va=z.parameters)==null?void 0:va.docs,source:{originalSource:`{
  render: TemplateResponsivePadding,
  name: 'With Responsive Padding',
  args: {
    children: '',
    hasResponsivePadding: true,
    classNames: {
      padding: 'dummyPanelPaddingResponsive'
    }
  },
  argTypes: {
    hasResponsivePadding: {
      description: 'lskjf'
    },
    padding: {
      table: {
        disable: false,
        readonly: false
      },
      control: {
        disable: false
      }
    },
    classNames: {
      table: {
        readonly: true
      },
      disable: false,
      control: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(Sa=(Ta=z.parameters)==null?void 0:Ta.docs)==null?void 0:Sa.source}}};const Qa=["WithRef","WithAttributes","WithClassNameOverridesPanelWidthAndPadding","Defaults","VariantFilled","WithTitle","WithTitleAs","WithHideTitle","WithSubtitle","WithSubtitleAs","WithHideSubtitle","WithImage","WithImageSourceAltText","WithImageMobile","WithIcon","WithIconMobile","WithHideGraphicMobileAndIcon","WithHideGraphicMobileAndImage","WithHideGraphicMobileAndIconDesktop","WithHideGraphicMobileAndImageDesktop","WithColorAndVariant","WithSpacing","WithPadding","TextAlignedVertical","TextShortAndIcon","WithCanManuallySetTitleFocus","WithPanelHeadingRef","WithResponsivePadding"];export{y as Defaults,N as TextAlignedVertical,V as TextShortAndIcon,A as VariantFilled,b as WithAttributes,C as WithCanManuallySetTitleFocus,f as WithClassNameOverridesPanelWidthAndPadding,G as WithColorAndVariant,M as WithHideGraphicMobileAndIcon,j as WithHideGraphicMobileAndIconDesktop,E as WithHideGraphicMobileAndImage,F as WithHideGraphicMobileAndImageDesktop,W as WithHideSubtitle,S as WithHideTitle,R as WithIcon,B as WithIconMobile,w as WithImage,H as WithImageMobile,P as WithImageSourceAltText,D as WithPadding,O as WithPanelHeadingRef,h as WithRef,z as WithResponsivePadding,k as WithSpacing,x as WithSubtitle,I as WithSubtitleAs,v as WithTitle,T as WithTitleAs,Qa as __namedExportsOrder,qa as default};
//# sourceMappingURL=Panel.test.stories-BNVl7eQ8.js.map
