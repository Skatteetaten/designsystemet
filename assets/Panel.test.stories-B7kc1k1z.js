import{j as e,r as z}from"./iframe-DRo7xN6O.js";import{B as Sa}from"./index-C6akGUuV.js";import{P as l}from"./index-CHHc706Z.js";import{a3 as g}from"./index-CIGiQTsv.js";import{P as o}from"./index-K3PRhlds.js";import{l as d}from"./storybook.testing.utils-CMs160i9.js";import{f as p,w as xa}from"./wait-alert-illustration-WfBZYz21.js";const Ia=["outline","filled"],$=["ochre","forest","burgundy","denim","graphite"],Wa=["s","m","l","xl","xxl","mega"],Pa=["xxs","xs","s","m","l","xl","xxl","mega"],{expect:r,userEvent:wa,within:i}=__STORYBOOK_MODULE_TEST__,V="Det er en tittel",L="Det er en undertittel",Ha={component:l,title:"Tester/Panel",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0},options:["dummyPanelOverridesWidthAndPadding"]},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canManuallySetTitleFocus:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}},color:{table:{disable:!0},control:"inline-radio"},hasResponsivePadding:{table:{disable:!0}},headingRef:{table:{disable:!0},control:{disable:!0}},hideGraphicMobile:{table:{disable:!0}},hideSubtitle:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",p,xa]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0},control:"inline-radio"},renderIcon:{table:{disable:!0},control:{disable:!0}},spacing:{table:{disable:!0},control:"inline-radio"},subtitle:{table:{disable:!0}},subtitleAs:{control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={children:e.jsxs(e.Fragment,{children:[e.jsx(o,{hasSpacing:!0,children:d}),e.jsx(Sa,{children:"Trykk på meg"})]})},u={name:"With Ref (FA1)",args:{...s,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=i(n).getAllByRole("generic")[1];await r(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},h={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const a=i(n).getAllByRole("generic")[1];await r(a).toHaveClass("dummyClassname"),await r(a).toHaveAttribute("id","htmlId"),await r(a).toHaveAttribute("lang","nb"),await r(a).toHaveAttribute("data-testid","123ID")}},b={name:"With ClassName Overrides Panel Width And Padding none (A2, A10)",args:{...s,className:"dummyPanelOverridesWidthAndPadding"},argTypes:{className:{table:{disable:!1}}}},f={name:"Defaults Variant Outline (A1, A2 delvis, A3)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByText(d);await r(a).toBeInTheDocument()}},y={name:"Variant Filled (A1)",args:{...s,variant:"filled"},argTypes:{variant:{table:{disable:!1}}}},v={name:"With Title (A5, A3)",args:{...s,title:V,children:e.jsx(o,{children:d})},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument(),await r(a).toHaveTextContent(V),await r(a.tagName).toBe("H3")}},A={name:"With TitleAs (A5)",args:{...s,title:V,titleAs:"h1"},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a.tagName).toBe("H1")}},T={name:"With HideTitle (A6)",args:{...s,title:V,hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument()}},S={name:"With Subtitle (A7, A3)",args:{...s,subtitle:L,children:e.jsx(o,{children:d})},argTypes:{subtitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument(),await r(a).toHaveTextContent(L),await r(a.tagName).toBe("H4")}},x={name:"With SubtitleAs (A7)",args:{...s,subtitle:"Det er en undertittel med valgt heading nivå",subtitleAs:"h2"},argTypes:{subtitleAs:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a.tagName).toBe("H2")}},I={name:"With HideSubtitle (A8)",args:{...s,subtitle:L,hideSubtitle:!0},argTypes:{hideSubtitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument()}},m=n=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,variant:"outline",children:e.jsx(o,{children:d})}),e.jsx(l,{...n,variant:"filled",children:e.jsx(o,{children:d})})]}),W={render:m,name:"With Image (A9)",args:{...s,imageSource:p},argTypes:{imageSource:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("presentation",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","")})}},P={render:m,name:"With Image With Alt Text (A9)",args:{...s,imageSource:p,imageSourceAltText:"Bonde med ku"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","Bonde med ku")})}},w={render:m,name:"With Image On Small Screen (A9)",args:{...s,imageSource:p},argTypes:{imageSource:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},H={render:m,name:"With Icon (A11 delvis)",args:{...s,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument()})}},R={render:m,name:"With Icon On Small Screen (A12)",args:{...s,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},B={render:m,name:"With HideGraphicMobile And Icon On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},M={render:m,name:"With HideGraphicMobile And Image On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:p},argTypes:{hideGraphicMobile:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},E={render:m,name:"With HideGraphicMobile And Icon On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},j={render:m,name:"With HideGraphicMobile And Image On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:p},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},Ra=n=>e.jsxs(e.Fragment,{children:[$.map((t,a)=>e.jsx(l,{...n,color:t,variant:"outline",children:`color: ${t}`},`panel_${a}`)),$.map((t,a)=>e.jsx(l,{...n,color:t,variant:"filled",children:`color: ${t}`},`panel_${a}`))]}),F={render:Ra,name:"With Color And Variant (A1)",args:{...s},argTypes:{color:{table:{disable:!1},control:{disable:!0}}}},Ba=n=>e.jsx(e.Fragment,{children:Pa.map((t,a)=>e.jsx(l,{...n,spacing:t,children:`spacing: ${t}`},`panel_${a}`))}),G={render:Ba,name:"With Spacing (A4)",args:{...s},argTypes:{spacing:{table:{disable:!1},control:{disable:!0}}}},Ma=n=>e.jsx(e.Fragment,{children:Wa.map((t,a)=>e.jsxs(z.Fragment,{children:[e.jsxs(l,{padding:t,children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(o,{children:d})]}),e.jsxs(l,{padding:t,variant:"filled",children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(o,{children:d})]})]},a))}),k={render:Ma,name:"With Padding (A10)",args:{...s},argTypes:{padding:{table:{disable:!1},control:{disable:!0}}},globals:{viewport:{value:"--breakpoint-xs"}}},Ea=n=>e.jsx(e.Fragment,{children:Ia.map((t,a)=>e.jsxs("div",{children:[e.jsx(l,{variant:t,renderIcon:n.renderIcon,title:"En overskrift",children:d},`panel1_${a}`),e.jsx(l,{variant:t,children:d},`panel2_${a}`)]},a))}),D={render:Ea,name:"Text Aligned Vertical (A13)",args:{...s,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}}},O={name:"Text Short And Icon (A11)",args:{title:"Kort tittel",children:e.jsx(o,{children:"Kort test ..."}),renderIcon:()=>e.jsx(g,{size:"large"})},argTypes:{renderIcon:{table:{disable:!1}}}},N={args:{...s,title:"Tittel i Panel",canManuallySetTitleFocus:!0},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading",{level:3});a.focus(),await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("tabIndex","-1")}},C={name:"With Panel Heading Ref",render:n=>{const t=z.useRef(null);return z.useEffect(()=>{t.current!==null&&(t.current.id="dummyIdForwardedFromRef")},[]),e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,headingRef:t,children:e.jsx(o,{children:d})}),e.jsx(Sa,{onClick:()=>{var a;(a=t.current)==null||a.focus()},children:"Sett fokus på Panel Header"})]})},args:{...s,title:"Panel Header skal kunne få fokus",canManuallySetTitleFocus:!0,variant:"outline"},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}},headingRef:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=i(n),a=t.getByRole("button");await wa.click(a);const c=t.getByRole("heading",{level:3});await r(c).toHaveAttribute("id","dummyIdForwardedFromRef"),await r(c).toHaveFocus()}},ja=n=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,title:"Med responsive padding ",children:e.jsx(o,{children:`
      Her har vi satt hasResponsivePadding:true og endret følgende tokens for responsive visning.
      --pandel-padding-xs, --pandel-padding-m og --pandel-padding-l
      `})}),e.jsx(l,{title:"Med default padding",padding:n.padding,children:e.jsx(o,{children:"Denne Panel bruker standard 'padding'-prop for å kontrollere padding."})})]}),_={render:ja,name:"With Responsive Padding",args:{children:"",hasResponsivePadding:!0,classNames:{padding:"dummyPanelPaddingResponsive"}},argTypes:{hasResponsivePadding:{description:"lskjf"},padding:{table:{disable:!1,readonly:!1},control:{disable:!1}},classNames:{table:{readonly:!0},disable:!1,control:{disable:!1}}},globals:{viewport:{value:"--mobile"}}};var J,X,K;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(X=u.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var U,Y,q;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
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
} satisfies Story`,...(q=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var Q,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,re,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,oe,de;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,me,ge;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var pe,ue,he;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var be,fe,ye;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,Ae,Te;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var Se,xe,Ie;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var We,Pe,we;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};var He,Re,Be;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var Me,Ee,je;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(je=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var Fe,Ge,ke;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Ge=H.parameters)==null?void 0:Ge.docs)==null?void 0:ke.source}}};var De,Oe,Ne;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Ne=(Oe=R.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var Ce,_e,Ve;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(Ve=(_e=B.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var ze,Le,$e;M.parameters={...M.parameters,docs:{...(ze=M.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...($e=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Je,Xe,Ke;E.parameters={...E.parameters,docs:{...(Je=E.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(Xe=E.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source}}};var Ue,Ye,qe;j.parameters={...j.parameters,docs:{...(Ue=j.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(qe=(Ye=j.parameters)==null?void 0:Ye.docs)==null?void 0:qe.source}}};var Qe,Ze,ea;F.parameters={...F.parameters,docs:{...(Qe=F.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ea=(Ze=F.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,na,ta;G.parameters={...G.parameters,docs:{...(aa=G.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(na=G.parameters)==null?void 0:na.docs)==null?void 0:ta.source}}};var sa,ra,ia;k.parameters={...k.parameters,docs:{...(sa=k.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(ia=(ra=k.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var la,oa,da;D.parameters={...D.parameters,docs:{...(la=D.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
} satisfies Story`,...(da=(oa=D.parameters)==null?void 0:oa.docs)==null?void 0:da.source}}};var ca,ma,ga;O.parameters={...O.parameters,docs:{...(ca=O.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
} satisfies Story`,...(ga=(ma=O.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};var pa,ua,ha;N.parameters={...N.parameters,docs:{...(pa=N.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ha=(ua=N.parameters)==null?void 0:ua.docs)==null?void 0:ha.source}}};var ba,fa,ya;C.parameters={...C.parameters,docs:{...(ba=C.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
} satisfies Story`,...(ya=(fa=C.parameters)==null?void 0:fa.docs)==null?void 0:ya.source}}};var va,Aa,Ta;_.parameters={..._.parameters,docs:{...(va=_.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...(Ta=(Aa=_.parameters)==null?void 0:Aa.docs)==null?void 0:Ta.source}}};const Fa=["WithRef","WithAttributes","WithClassNameOverridesPanelWidthAndPadding","Defaults","VariantFilled","WithTitle","WithTitleAs","WithHideTitle","WithSubtitle","WithSubtitleAs","WithHideSubtitle","WithImage","WithImageSourceAltText","WithImageMobile","WithIcon","WithIconMobile","WithHideGraphicMobileAndIcon","WithHideGraphicMobileAndImage","WithHideGraphicMobileAndIconDesktop","WithHideGraphicMobileAndImageDesktop","WithColorAndVariant","WithSpacing","WithPadding","TextAlignedVertical","TextShortAndIcon","WithCanManuallySetTitleFocus","WithPanelHeadingRef","WithResponsivePadding"],Va=Object.freeze(Object.defineProperty({__proto__:null,Defaults:f,TextAlignedVertical:D,TextShortAndIcon:O,VariantFilled:y,WithAttributes:h,WithCanManuallySetTitleFocus:N,WithClassNameOverridesPanelWidthAndPadding:b,WithColorAndVariant:F,WithHideGraphicMobileAndIcon:B,WithHideGraphicMobileAndIconDesktop:E,WithHideGraphicMobileAndImage:M,WithHideGraphicMobileAndImageDesktop:j,WithHideSubtitle:I,WithHideTitle:T,WithIcon:H,WithIconMobile:R,WithImage:W,WithImageMobile:w,WithImageSourceAltText:P,WithPadding:k,WithPanelHeadingRef:C,WithRef:u,WithResponsivePadding:_,WithSpacing:G,WithSubtitle:S,WithSubtitleAs:x,WithTitle:v,WithTitleAs:A,__namedExportsOrder:Fa,default:Ha},Symbol.toStringTag,{value:"Module"}));export{Va as P};
//# sourceMappingURL=Panel.test.stories-B7kc1k1z.js.map
