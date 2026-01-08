import{j as e,r as z}from"./iframe-s2_bNgHU.js";import{B as J}from"./index-Ck1G954W.js";import{P as l}from"./index-jj9Gfu02.js";import{a7 as g}from"./index-CUsfAC9p.js";import{P as o}from"./index-CJpzHRrE.js";import{l as d}from"./storybook.testing.utils-BgHZnMzD.js";import{f as p,w as X}from"./wait-alert-illustration-BXqktCEg.js";const K=["outline","filled"],$=["ochre","forest","burgundy","denim","graphite"],U=["s","m","l","xl","xxl","mega"],Y=["xxs","xs","s","m","l","xl","xxl","mega"],{expect:r,userEvent:q,within:i}=__STORYBOOK_MODULE_TEST__,V="Det er en tittel",L="Det er en undertittel",Q={component:l,title:"Tester/Panel",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0},options:["dummyPanelOverridesWidthAndPadding"]},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canManuallySetTitleFocus:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}},color:{table:{disable:!0},control:"inline-radio"},hasResponsivePadding:{table:{disable:!0}},headingRef:{table:{disable:!0},control:{disable:!0}},hideGraphicMobile:{table:{disable:!0}},hideSubtitle:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",p,X]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0},control:"inline-radio"},renderIcon:{table:{disable:!0},control:{disable:!0}},spacing:{table:{disable:!0},control:"inline-radio"},subtitle:{table:{disable:!0}},subtitleAs:{control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}},variant:{table:{disable:!0},control:"inline-radio"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={children:e.jsxs(e.Fragment,{children:[e.jsx(o,{hasSpacing:!0,children:d}),e.jsx(J,{children:"Trykk på meg"})]})},u={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=i(a).getAllByRole("generic")[1];await r(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},h={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const n=i(a).getAllByRole("generic")[1];await r(n).toHaveClass("dummyClassname"),await r(n).toHaveAttribute("id","htmlId"),await r(n).toHaveAttribute("lang","nb"),await r(n).toHaveAttribute("data-testid","123ID")}},b={name:"With ClassName Overrides Panel Width And Padding none (A2, A10)",args:{...s,className:"dummyPanelOverridesWidthAndPadding"},argTypes:{className:{table:{disable:!1}}}},f={name:"Defaults Variant Outline (A1, A2 delvis, A3)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByText(d);await r(n).toBeInTheDocument()}},y={name:"Variant Filled (A1)",args:{...s,variant:"filled"},argTypes:{variant:{table:{disable:!1}}}},v={name:"With Title (A5, A3)",args:{...s,title:V,children:e.jsx(o,{children:d})},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await r(n).toBeInTheDocument(),await r(n).toHaveTextContent(V),await r(n.tagName).toBe("H3")}},A={name:"With TitleAs (A5)",args:{...s,title:V,titleAs:"h1"},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await r(n.tagName).toBe("H1")}},T={name:"With HideTitle (A6)",args:{...s,title:V,hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await r(n).toBeInTheDocument()}},S={name:"With Subtitle (A7, A3)",args:{...s,subtitle:L,children:e.jsx(o,{children:d})},argTypes:{subtitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await r(n).toBeInTheDocument(),await r(n).toHaveTextContent(L),await r(n.tagName).toBe("H4")}},x={name:"With SubtitleAs (A7)",args:{...s,subtitle:"Det er en undertittel med valgt heading nivå",subtitleAs:"h2"},argTypes:{subtitleAs:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await r(n.tagName).toBe("H2")}},I={name:"With HideSubtitle (A8)",args:{...s,subtitle:L,hideSubtitle:!0},argTypes:{hideSubtitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await r(n).toBeInTheDocument()}},m=a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...a,variant:"outline",children:e.jsx(o,{children:d})}),e.jsx(l,{...a,variant:"filled",children:e.jsx(o,{children:d})})]}),W={render:m,name:"With Image (A9)",args:{...s,imageSource:p},argTypes:{imageSource:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("presentation",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","")})}},P={render:m,name:"With Image With Alt Text (A9)",args:{...s,imageSource:p,imageSourceAltText:"Bonde med ku"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","Bonde med ku")})}},w={render:m,name:"With Image On Small Screen (A9)",args:{...s,imageSource:p},argTypes:{imageSource:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},H={render:m,name:"With Icon (A11 delvis)",args:{...s,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument()})}},R={render:m,name:"With Icon On Small Screen (A12)",args:{...s,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},B={render:m,name:"With HideGraphicMobile And Icon On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},M={render:m,name:"With HideGraphicMobile And Image On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:p},argTypes:{hideGraphicMobile:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},E={render:m,name:"With HideGraphicMobile And Icon On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},j={render:m,name:"With HideGraphicMobile And Image On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:p},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},Z=a=>e.jsxs(e.Fragment,{children:[$.map((t,n)=>e.jsx(l,{...a,color:t,variant:"outline",children:`color: ${t}`},`panel_${n}`)),$.map((t,n)=>e.jsx(l,{...a,color:t,variant:"filled",children:`color: ${t}`},`panel_${n}`))]}),F={render:Z,name:"With Color And Variant (A1)",args:{...s},argTypes:{color:{table:{disable:!1},control:{disable:!0}}}},ee=a=>e.jsx(e.Fragment,{children:Y.map((t,n)=>e.jsx(l,{...a,spacing:t,children:`spacing: ${t}`},`panel_${n}`))}),G={render:ee,name:"With Spacing (A4)",args:{...s},argTypes:{spacing:{table:{disable:!1},control:{disable:!0}}}},ae=a=>e.jsx(e.Fragment,{children:U.map((t,n)=>e.jsxs(z.Fragment,{children:[e.jsxs(l,{padding:t,children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(o,{children:d})]}),e.jsxs(l,{padding:t,variant:"filled",children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(o,{children:d})]})]},n))}),k={render:ae,name:"With Padding (A10)",args:{...s},argTypes:{padding:{table:{disable:!1},control:{disable:!0}}},globals:{viewport:{value:"--breakpoint-xs"}}},ne=a=>e.jsx(e.Fragment,{children:K.map((t,n)=>e.jsxs("div",{children:[e.jsx(l,{variant:t,renderIcon:a.renderIcon,title:"En overskrift",children:d},`panel1_${n}`),e.jsx(l,{variant:t,children:d},`panel2_${n}`)]},n))}),D={render:ne,name:"Text Aligned Vertical (A13)",args:{...s,renderIcon:()=>e.jsx(g,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}}},O={name:"Text Short And Icon (A11)",args:{title:"Kort tittel",children:e.jsx(o,{children:"Kort test ..."}),renderIcon:()=>e.jsx(g,{size:"large"})},argTypes:{renderIcon:{table:{disable:!1}}}},N={args:{...s,title:"Tittel i Panel",canManuallySetTitleFocus:!0},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading",{level:3});n.focus(),await r(n).toBeInTheDocument(),await r(n).toHaveAttribute("tabIndex","-1")}},C={name:"With Panel Heading Ref",render:a=>{const t=z.useRef(null);return z.useEffect(()=>{t.current!==null&&(t.current.id="dummyIdForwardedFromRef")},[]),e.jsxs(e.Fragment,{children:[e.jsx(l,{...a,headingRef:t,children:e.jsx(o,{children:d})}),e.jsx(J,{onClick:()=>{t.current?.focus()},children:"Sett fokus på Panel Header"})]})},args:{...s,title:"Panel Header skal kunne få fokus",canManuallySetTitleFocus:!0,variant:"outline"},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}},headingRef:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const t=i(a),n=t.getByRole("button");await q.click(n);const c=t.getByRole("heading",{level:3});await r(c).toHaveAttribute("id","dummyIdForwardedFromRef"),await r(c).toHaveFocus()}},te=a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...a,title:"Med responsive padding ",children:e.jsx(o,{children:`
      Her har vi satt hasResponsivePadding:true og endret følgende tokens for responsive visning.
      --pandel-padding-xs, --pandel-padding-m og --pandel-padding-l
      `})}),e.jsx(l,{title:"Med default padding",padding:a.padding,children:e.jsx(o,{children:"Denne Panel bruker standard 'padding'-prop for å kontrollere padding."})})]}),_={render:te,name:"With Responsive Padding",args:{children:"",hasResponsivePadding:!0,classNames:{padding:"dummyPanelPaddingResponsive"}},argTypes:{hasResponsivePadding:{description:"lskjf"},padding:{table:{disable:!1,readonly:!1},control:{disable:!1}},classNames:{table:{readonly:!0},disable:!1,control:{disable:!1}}},globals:{viewport:{value:"--mobile"}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...H.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...G.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,..._.parameters?.docs?.source}}};const se=["WithRef","WithAttributes","WithClassNameOverridesPanelWidthAndPadding","Defaults","VariantFilled","WithTitle","WithTitleAs","WithHideTitle","WithSubtitle","WithSubtitleAs","WithHideSubtitle","WithImage","WithImageSourceAltText","WithImageMobile","WithIcon","WithIconMobile","WithHideGraphicMobileAndIcon","WithHideGraphicMobileAndImage","WithHideGraphicMobileAndIconDesktop","WithHideGraphicMobileAndImageDesktop","WithColorAndVariant","WithSpacing","WithPadding","TextAlignedVertical","TextShortAndIcon","WithCanManuallySetTitleFocus","WithPanelHeadingRef","WithResponsivePadding"],ge=Object.freeze(Object.defineProperty({__proto__:null,Defaults:f,TextAlignedVertical:D,TextShortAndIcon:O,VariantFilled:y,WithAttributes:h,WithCanManuallySetTitleFocus:N,WithClassNameOverridesPanelWidthAndPadding:b,WithColorAndVariant:F,WithHideGraphicMobileAndIcon:B,WithHideGraphicMobileAndIconDesktop:E,WithHideGraphicMobileAndImage:M,WithHideGraphicMobileAndImageDesktop:j,WithHideSubtitle:I,WithHideTitle:T,WithIcon:H,WithIconMobile:R,WithImage:W,WithImageMobile:w,WithImageSourceAltText:P,WithPadding:k,WithPanelHeadingRef:C,WithRef:u,WithResponsivePadding:_,WithSpacing:G,WithSubtitle:S,WithSubtitleAs:x,WithTitle:v,WithTitleAs:A,__namedExportsOrder:se,default:Q},Symbol.toStringTag,{value:"Module"}));export{ge as P};
//# sourceMappingURL=Panel.test.stories-BmVmauj9.js.map
