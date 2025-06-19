import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as L}from"./index-D_ouKaeX.js";import{w as i,e as r,u as xa}from"./index-DIxTUSTt.js";import{B as Sa}from"./index-CUnERQXD.js";import{P as l}from"./index-j9ELDiWk.js";import{$ as p}from"./index-BQO_0U1F.js";import{P as o}from"./index-BAA7SjBM.js";import{l as d}from"./storybook.testing.utils-CMs160i9.js";import{f as g,w as Ia}from"./wait-alert-illustration-BYTJWND6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CwaotbcG.js";import"./index-BQtvKDNR.js";const Wa=["outline","filled"],_=["ochre","forest","burgundy","denim","graphite"],wa=["s","m","l","xl","xxl","mega"],Pa=["xxs","xs","s","m","l","xl","xxl","mega"],z="Det er en tittel",$="Det er en undertittel",_a={component:l,title:"Tester/Panel",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0},options:["dummyPanelOverridesWidthAndPadding"]},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canManuallySetTitleFocus:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}},color:{table:{disable:!0},control:"inline-radio"},hasResponsivePadding:{table:{disable:!0}},headingRef:{table:{disable:!0},control:{disable:!0}},hideGraphicMobile:{table:{disable:!0}},hideSubtitle:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",g,Ia]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0},control:"inline-radio"},renderIcon:{table:{disable:!0},control:{disable:!0}},spacing:{table:{disable:!0},control:"inline-radio"},subtitle:{table:{disable:!0}},subtitleAs:{control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"}}},s={children:e.jsxs(e.Fragment,{children:[e.jsx(o,{hasSpacing:!0,children:d}),e.jsx(Sa,{children:"Trykk på meg"})]})},u={name:"With Ref (FA1)",args:{...s,ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=i(n).getAllByRole("generic")[1];await r(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},h={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getAllByRole("generic")[1];await r(a).toHaveClass("dummyClassname"),await r(a).toHaveAttribute("id","htmlId"),await r(a).toHaveAttribute("lang","nb"),await r(a).toHaveAttribute("data-testid","123ID")}},b={name:"With ClassName Overrides Panel Width And Padding none (A2, A10)",args:{...s,className:"dummyPanelOverridesWidthAndPadding"},argTypes:{className:{table:{disable:!1}}}},f={name:"Defaults Variant Outline (A1, A2 delvis, A3)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByText(d);await r(a).toBeInTheDocument()}},y={name:"Variant Filled (A1)",args:{...s,variant:"filled"},argTypes:{variant:{table:{disable:!1}}}},A={name:"With Title (A5, A3)",args:{...s,title:z,children:e.jsx(o,{children:d})},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument(),await r(a).toHaveTextContent(z),await r(a.tagName).toBe("H3")}},v={name:"With TitleAs (A5)",args:{...s,title:z,titleAs:"h1"},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a.tagName).toBe("H1")}},T={name:"With HideTitle (A6)",args:{...s,title:z,hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument()}},S={name:"With Subtitle (A7, A3)",args:{...s,subtitle:$,children:e.jsx(o,{children:d})},argTypes:{subtitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument(),await r(a).toHaveTextContent($),await r(a.tagName).toBe("H4")}},x={name:"With SubtitleAs (A7)",args:{...s,subtitle:"Det er en undertittel med valgt heading nivå",subtitleAs:"h2"},argTypes:{subtitleAs:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a.tagName).toBe("H2")}},I={name:"With HideSubtitle (A8)",args:{...s,subtitle:$,hideSubtitle:!0},argTypes:{hideSubtitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading");await r(a).toBeInTheDocument()}},m=n=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,variant:"outline",children:e.jsx(o,{children:d})}),e.jsx(l,{...n,variant:"filled",children:e.jsx(o,{children:d})})]}),W={render:m,name:"With Image (A9)",args:{...s,imageSource:g},argTypes:{imageSource:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("presentation",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","")})}},w={render:m,name:"With Image With Alt Text (A9)",args:{...s,imageSource:g,imageSourceAltText:"Bonde med ku"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","Bonde med ku")})}},P={render:m,name:"With Image On Small Screen (A9)",args:{...s,imageSource:g},argTypes:{imageSource:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},H={render:m,name:"With Icon (A11 delvis)",args:{...s,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:n})=>{i(n).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument()})}},R={render:m,name:"With Icon On Small Screen (A12)",args:{...s,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},B={render:m,name:"With HideGraphicMobile And Icon On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},M={render:m,name:"With HideGraphicMobile And Image On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:g},argTypes:{hideGraphicMobile:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},E={render:m,name:"With HideGraphicMobile And Icon On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},j={render:m,name:"With HideGraphicMobile And Image On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:g},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},Ha=n=>e.jsxs(e.Fragment,{children:[_.map((t,a)=>e.jsx(l,{...n,color:t,variant:"outline",children:`color: ${t}`},`panel_${a}`)),_.map((t,a)=>e.jsx(l,{...n,color:t,variant:"filled",children:`color: ${t}`},`panel_${a}`))]}),F={render:Ha,name:"With Color And Variant (A1)",args:{...s},argTypes:{color:{table:{disable:!1},control:{disable:!0}}}},Ra=n=>e.jsx(e.Fragment,{children:Pa.map((t,a)=>e.jsx(l,{...n,spacing:t,children:`spacing: ${t}`},`panel_${a}`))}),G={render:Ra,name:"With Spacing (A4)",args:{...s},argTypes:{spacing:{table:{disable:!1},control:{disable:!0}}}},Ba=n=>e.jsx(e.Fragment,{children:wa.map((t,a)=>e.jsxs(L.Fragment,{children:[e.jsxs(l,{padding:t,children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(o,{children:d})]}),e.jsxs(l,{padding:t,variant:"filled",children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(o,{children:d})]})]},a))}),k={render:Ba,name:"With Padding (A10)",args:{...s},argTypes:{padding:{table:{disable:!1},control:{disable:!0}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},Ma=n=>e.jsx(e.Fragment,{children:Wa.map((t,a)=>e.jsxs("div",{children:[e.jsx(l,{variant:t,renderIcon:n.renderIcon,title:"En overskrift",children:d},`panel1_${a}`),e.jsx(l,{variant:t,children:d},`panel2_${a}`)]},a))}),D={render:Ma,name:"Text Aligned Vertical (A13)",args:{...s,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}}},N={name:"Text Short And Icon (A11)",args:{title:"Kort tittel",children:e.jsx(o,{children:"Kort test ..."}),renderIcon:()=>e.jsx(p,{size:"large"})},argTypes:{renderIcon:{table:{disable:!1}}}},V={args:{...s,title:"Tittel i Panel",canManuallySetTitleFocus:!0},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const a=i(n).getByRole("heading",{level:3});a.focus(),await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("tabIndex","-1")}},C={name:"With Panel Heading Ref",render:n=>{const t=L.useRef(null);return L.useEffect(()=>{t.current!==null&&(t.current.id="dummyIdForwardedFromRef")},[]),e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,headingRef:t,children:e.jsx(o,{children:d})}),e.jsx(Sa,{onClick:()=>{var a;(a=t.current)==null||a.focus()},children:"Sett fokus på Panel Header"})]})},args:{...s,title:"Panel Header skal kunne få fokus",canManuallySetTitleFocus:!0,variant:"outline"},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}},headingRef:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=i(n),a=t.getByRole("button");await xa.click(a);const c=t.getByRole("heading",{level:3});await r(c).toHaveAttribute("id","dummyIdForwardedFromRef"),await r(c).toHaveFocus()}},Ea=n=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...n,title:"Med responsive padding ",children:e.jsx(o,{children:`
      Her har vi satt hasResponsivePadding:true og endret følgende tokens for responsive visning. 
      --pandel-padding-xs, --pandel-padding-m og --pandel-padding-l
      `})}),e.jsx(l,{title:"Med default padding",padding:n.padding,children:e.jsx(o,{children:"Denne Panel bruker standard 'padding'-prop for å kontrollere padding."})})]}),O={render:Ea,name:"With Responsive Padding",args:{children:"",hasResponsivePadding:!0,classNames:{padding:"dummyPanelPaddingResponsive"}},argTypes:{hasResponsivePadding:{description:"lskjf"},padding:{table:{disable:!1,readonly:!1},control:{disable:!1}},classNames:{table:{readonly:!0},disable:!1,control:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}};var J,X,K;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(X=u.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var q,Q,U;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,oe,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,me,pe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(me=v.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ue,he;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Ae,ve,Te;x.parameters={...x.parameters,docs:{...(Ae=x.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var Se,xe,Ie;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var We,we,Pe;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pe=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var He,Re,Be;w.parameters={...w.parameters,docs:{...(He=w.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Re=w.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var Me,Ee,je;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var Fe,Ge,ke;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(Ge=H.parameters)==null?void 0:Ge.docs)==null?void 0:ke.source}}};var De,Ne,Ve;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ve=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var Ce,Oe,ze;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(Oe=B.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Le,$e,_e;M.parameters={...M.parameters,docs:{...(Le=M.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
} satisfies Story`,...(_e=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:_e.source}}};var Je,Xe,Ke;E.parameters={...E.parameters,docs:{...(Je=E.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(Xe=E.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source}}};var qe,Qe,Ue;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ue=(Qe=j.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ye,Ze,ea;F.parameters={...F.parameters,docs:{...(Ye=F.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
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
} satisfies Story`,...(da=(oa=D.parameters)==null?void 0:oa.docs)==null?void 0:da.source}}};var ca,ma,pa;N.parameters={...N.parameters,docs:{...(ca=N.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
} satisfies Story`,...(pa=(ma=N.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var ga,ua,ha;V.parameters={...V.parameters,docs:{...(ga=V.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
} satisfies Story`,...(ha=(ua=V.parameters)==null?void 0:ua.docs)==null?void 0:ha.source}}};var ba,fa,ya;C.parameters={...C.parameters,docs:{...(ba=C.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
} satisfies Story`,...(ya=(fa=C.parameters)==null?void 0:fa.docs)==null?void 0:ya.source}}};var Aa,va,Ta;O.parameters={...O.parameters,docs:{...(Aa=O.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ta=(va=O.parameters)==null?void 0:va.docs)==null?void 0:Ta.source}}};const Ja=["WithRef","WithAttributes","WithClassNameOverridesPanelWidthAndPadding","Defaults","VariantFilled","WithTitle","WithTitleAs","WithHideTitle","WithSubtitle","WithSubtitleAs","WithHideSubtitle","WithImage","WithImageSourceAltText","WithImageMobile","WithIcon","WithIconMobile","WithHideGraphicMobileAndIcon","WithHideGraphicMobileAndImage","WithHideGraphicMobileAndIconDesktop","WithHideGraphicMobileAndImageDesktop","WithColorAndVariant","WithSpacing","WithPadding","TextAlignedVertical","TextShortAndIcon","WithCanManuallySetTitleFocus","WithPanelHeadingRef","WithResponsivePadding"];export{f as Defaults,D as TextAlignedVertical,N as TextShortAndIcon,y as VariantFilled,h as WithAttributes,V as WithCanManuallySetTitleFocus,b as WithClassNameOverridesPanelWidthAndPadding,F as WithColorAndVariant,B as WithHideGraphicMobileAndIcon,E as WithHideGraphicMobileAndIconDesktop,M as WithHideGraphicMobileAndImage,j as WithHideGraphicMobileAndImageDesktop,I as WithHideSubtitle,T as WithHideTitle,H as WithIcon,R as WithIconMobile,W as WithImage,P as WithImageMobile,w as WithImageSourceAltText,k as WithPadding,C as WithPanelHeadingRef,u as WithRef,O as WithResponsivePadding,G as WithSpacing,S as WithSubtitle,x as WithSubtitleAs,A as WithTitle,v as WithTitleAs,Ja as __namedExportsOrder,_a as default};
//# sourceMappingURL=Panel.test.stories-OXOs5qjS.js.map
