import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as L}from"./index-BwDkhjyp.js";import{B as ya}from"./index-PT2LozU0.js";import{P as l}from"./index-Cons3ews.js";import"./index-BSjcMZTJ.js";import{v as p}from"./index-BU2UjPj9.js";import{P as d}from"./index-BFUMlpsH.js";import{w as i,e as r,u as xa}from"./index-B8otpkpo.js";import{l as o}from"./storybook.testing.utils-CMs160i9.js";import{f as g,w as Ia}from"./wait-alert-illustration-BZ1f2OL4.js";import{b as Wa,h as wa,c as u}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DoWIm2Z4.js";const va=["outline","filled"],Ta=["s","m","l","xl","xxl","mega"],Sa=["xxs","xs","s","m","l","xl","xxl","mega"],z="Det er en tittel",$="Det er en undertittel",J=[u[0],u[1],u[2],u[3],u[5]],$a={component:l,title:"Tester/Panel",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0},options:["dummyPanelOverridesWidthAndPadding"]},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canManuallySetTitleFocus:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0},options:[...J],control:"inline-radio"},headingRef:{table:{disable:!0},control:{disable:!0}},hideGraphicMobile:{table:{disable:!0}},hideSubtitle:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",g,Ia]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0},options:[...Ta],control:"inline-radio"},renderIcon:{table:{disable:!0},control:{disable:!0}},spacing:{table:{disable:!0},options:[...Sa],control:"inline-radio"},subtitle:{table:{disable:!0}},subtitleAs:{options:[...Wa],control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},titleAs:{options:[...wa],control:"inline-radio",table:{disable:!0}},variant:{table:{disable:!0},options:[...va],control:"inline-radio"}}},s={children:n.jsxs(n.Fragment,{children:[n.jsx(d,{hasSpacing:!0,children:o}),n.jsx(ya,{children:"Trykk på meg"})]})},h={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getAllByRole("generic")[1];await r(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getAllByRole("generic")[1];await r(e).toHaveClass("dummyClassname"),await r(e).toHaveAttribute("id","htmlId"),await r(e).toHaveAttribute("lang","nb"),await r(e).toHaveAttribute("data-testid","123ID")}},f={name:"With ClassName Overrides Panel Width And Padding none (A2, A10)",args:{...s,className:"dummyPanelOverridesWidthAndPadding"},argTypes:{className:{table:{disable:!1}}}},A={name:"Defaults Variant Outline (A1, A2 delvis, A3)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByText(o);await r(e).toBeInTheDocument()}},y={name:"Variant Filled (A1)",args:{...s,variant:"filled"},argTypes:{variant:{table:{disable:!1}}}},v={name:"With Title (A5, A3)",args:{...s,title:z,children:n.jsx(d,{children:o})},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("heading");await r(e).toBeInTheDocument(),await r(e).toHaveTextContent(z),await r(e.tagName).toBe("H3")}},T={name:"With TitleAs (A5)",args:{...s,title:z,titleAs:"h1"},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("heading");await r(e.tagName).toBe("H1")}},S={name:"With HideTitle (A6)",args:{...s,title:z,hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("heading");await r(e).toBeInTheDocument()}},x={name:"With Subtitle (A7, A3)",args:{...s,subtitle:$,children:n.jsx(d,{children:o})},argTypes:{subtitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("heading");await r(e).toBeInTheDocument(),await r(e).toHaveTextContent($),await r(e.tagName).toBe("H4")}},I={name:"With SubtitleAs (A7)",args:{...s,subtitle:"Det er en undertittel med valgt heading nivå",subtitleAs:"h2"},argTypes:{subtitleAs:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("heading");await r(e.tagName).toBe("H2")}},W={name:"With HideSubtitle (A8)",args:{...s,subtitle:$,hideSubtitle:!0},argTypes:{hideSubtitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=i(a).getByRole("heading");await r(e).toBeInTheDocument()}},m=a=>n.jsxs(n.Fragment,{children:[n.jsx(l,{...a,variant:"outline",children:n.jsx(d,{children:o})}),n.jsx(l,{...a,variant:"filled",children:n.jsx(d,{children:o})})]}),w={render:m,name:"With Image (A9)",args:{...s,imageSource:g},argTypes:{imageSource:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("presentation",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","")})}},H={render:m,name:"With Image With Alt Text (A9)",args:{...s,imageSource:g,imageSourceAltText:"Bonde med ku"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument(),r(c).toHaveAttribute("alt","Bonde med ku")})}},B={render:m,name:"With Image On Small Screen (A9)",args:{...s,imageSource:g},argTypes:{imageSource:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},P={render:m,name:"With Icon (A11 delvis)",args:{...s,renderIcon:()=>n.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("img",{hidden:!0}).forEach(c=>{r(c).toBeInTheDocument()})}},R={render:m,name:"With Icon On Small Screen (A12)",args:{...s,renderIcon:()=>n.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},E={render:m,name:"With HideGraphicMobile And Icon On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>n.jsx(p,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},M={render:m,name:"With HideGraphicMobile And Image On Small Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:g},argTypes:{hideGraphicMobile:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},F={render:m,name:"With HideGraphicMobile And Icon On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,renderIcon:()=>n.jsx(p,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},G={render:m,name:"With HideGraphicMobile And Image On Big Screen (A12, A9)",args:{...s,hideGraphicMobile:!0,imageSource:g},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},Ha=a=>n.jsxs(n.Fragment,{children:[J.map((t,e)=>n.jsx(l,{...a,color:t,variant:"outline",children:`color: ${t}`},`panel_${e}`)),J.map((t,e)=>n.jsx(l,{...a,color:t,variant:"filled",children:`color: ${t}`},`panel_${e}`))]}),j={render:Ha,name:"With Color And Variant (A1)",args:{...s},argTypes:{color:{table:{disable:!1},control:{disable:!0}}}},Ba=a=>n.jsx(n.Fragment,{children:Sa.map((t,e)=>n.jsx(l,{...a,spacing:t,children:`spacing: ${t}`},`panel_${e}`))}),k={render:Ba,name:"With Spacing (A4)",args:{...s},argTypes:{spacing:{table:{disable:!1},control:{disable:!0}}}},Pa=a=>n.jsx(n.Fragment,{children:Ta.map((t,e)=>n.jsxs(L.Fragment,{children:[n.jsxs(l,{...a,padding:t,children:[n.jsx("div",{children:`padding: ${t}`}),n.jsx(d,{children:o})]}),n.jsxs(l,{...a,padding:t,variant:"filled",children:[n.jsx("div",{children:`padding: ${t}`}),n.jsx(d,{children:o})]})]},e))}),D={render:Pa,name:"With Padding (A10)",args:{...s},argTypes:{padding:{table:{disable:!1},control:{disable:!0}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},Ra=a=>n.jsx(n.Fragment,{children:va.map((t,e)=>n.jsxs("div",{children:[n.jsx(l,{variant:t,renderIcon:a.renderIcon,title:"En overskrift",children:o},`panel1_${e}`),n.jsx(l,{variant:t,children:o},`panel2_${e}`)]},e))}),C={render:Ra,name:"Text Aligned Vertical (A13)",args:{...s,renderIcon:()=>n.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}}},N={name:"Text Short And Icon (A11)",args:{title:"Kort tittel",children:n.jsx(d,{children:"Kort test ..."}),renderIcon:()=>n.jsx(p,{size:"large"})},argTypes:{renderIcon:{table:{disable:!1}}}},V={args:{...s,title:"Tittel i Panel",canManuallySetTitleFocus:!0},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=i(a).getByRole("heading",{level:3});e.focus(),await r(e).toBeInTheDocument(),await r(e).toHaveAttribute("tabIndex","-1")}},O={name:"With Panel Heading Ref",render:a=>{const t=L.useRef(null);return L.useEffect(()=>{t.current!==null&&(t.current.id="dummyIdForwardedFromRef")},[]),n.jsxs(n.Fragment,{children:[n.jsx(l,{...a,headingRef:t,children:n.jsx(d,{children:o})}),n.jsx(ya,{onClick:()=>{var e;(e=t.current)==null||e.focus()},children:"Sett fokus på Panel Header"})]})},args:{...s,title:"Panel Header skal kunne få fokus",canManuallySetTitleFocus:!0,variant:"outline"},argTypes:{canManuallySetTitleFocus:{table:{disable:!1}},headingRef:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const t=i(a),e=t.getByRole("button");await xa.click(e);const c=t.getByRole("heading",{level:3});await r(c).toHaveAttribute("id","dummyIdForwardedFromRef"),await r(c).toHaveFocus()}};var X,_,K;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(_=h.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var q,Q,U;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,re,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,oe,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,me,pe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ue,he;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var be,fe,Ae;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var ye,ve,Te;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var Se,xe,Ie;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var We,we,He;w.parameters={...w.parameters,docs:{...(We=w.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(we=w.parameters)==null?void 0:we.docs)==null?void 0:He.source}}};var Be,Pe,Re;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Ee,Me,Fe;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ge,je,ke;P.parameters={...P.parameters,docs:{...(Ge=P.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(je=P.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var De,Ce,Ne;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ne=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var Ve,Oe,ze;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Le,$e,Je;M.parameters={...M.parameters,docs:{...(Le=M.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
} satisfies Story`,...(Je=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Xe,_e,Ke;F.parameters={...F.parameters,docs:{...(Xe=F.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var qe,Qe,Ue;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ue=(Qe=G.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ye,Ze,ea;j.parameters={...j.parameters,docs:{...(Ye=j.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(ea=(Ze=j.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,na,ta;k.parameters={...k.parameters,docs:{...(aa=k.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(na=k.parameters)==null?void 0:na.docs)==null?void 0:ta.source}}};var sa,ra,ia;D.parameters={...D.parameters,docs:{...(sa=D.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ia=(ra=D.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var la,oa,ca;C.parameters={...C.parameters,docs:{...(la=C.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
} satisfies Story`,...(ca=(oa=C.parameters)==null?void 0:oa.docs)==null?void 0:ca.source}}};var da,ma,pa;N.parameters={...N.parameters,docs:{...(da=N.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
} satisfies Story`,...(ha=(ua=V.parameters)==null?void 0:ua.docs)==null?void 0:ha.source}}};var ba,fa,Aa;O.parameters={...O.parameters,docs:{...(ba=O.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
} satisfies Story`,...(Aa=(fa=O.parameters)==null?void 0:fa.docs)==null?void 0:Aa.source}}};const Ja=["WithRef","WithAttributes","WithClassNameOverridesPanelWidthAndPadding","Defaults","VariantFilled","WithTitle","WithTitleAs","WithHideTitle","WithSubtitle","WithSubtitleAs","WithHideSubtitle","WithImage","WithImageSourceAltText","WithImageMobile","WithIcon","WithIconMobile","WithHideGraphicMobileAndIcon","WithHideGraphicMobileAndImage","WithHideGraphicMobileAndIconDesktop","WithHideGraphicMobileAndImageDesktop","WithColorAndVariant","WithSpacing","WithPadding","TextAlignedVertical","TextShortAndIcon","WithCanManuallySetTitleFocus","WithPanelHeadingRef"];export{A as Defaults,C as TextAlignedVertical,N as TextShortAndIcon,y as VariantFilled,b as WithAttributes,V as WithCanManuallySetTitleFocus,f as WithClassNameOverridesPanelWidthAndPadding,j as WithColorAndVariant,E as WithHideGraphicMobileAndIcon,F as WithHideGraphicMobileAndIconDesktop,M as WithHideGraphicMobileAndImage,G as WithHideGraphicMobileAndImageDesktop,W as WithHideSubtitle,S as WithHideTitle,P as WithIcon,R as WithIconMobile,w as WithImage,B as WithImageMobile,H as WithImageSourceAltText,D as WithPadding,O as WithPanelHeadingRef,h as WithRef,k as WithSpacing,x as WithSubtitle,I as WithSubtitleAs,v as WithTitle,T as WithTitleAs,Ja as __namedExportsOrder,$a as default};
//# sourceMappingURL=Panel.test.stories-SILrxEBr.js.map
