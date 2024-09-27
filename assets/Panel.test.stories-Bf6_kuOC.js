import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as ga}from"./index-DMYlLpXe.js";import{P as l}from"./index-DyVxOV_M.js";import"./index-CI44Z2h3.js";import{v as p}from"./index-DcL_RvKM.js";import{P as d}from"./index-CCUfsLXI.js";import{w as i,e as s}from"./index-hUG6DWTw.js";import{l as o}from"./storybook.testing.utils-CMs160i9.js";import{f as g,w as ha}from"./wait-alert-illustration-BZ1f2OL4.js";import{c as ua,h as ba,e as h}from"./base-props.types-BkCKQDF7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cq8GVsVj.js";const da=["outline","filled"],ma=["s","m","l","xl","xxl","mega"],pa=["xxs","xs","s","m","l","xl","xxl","mega"],k="Det er en tittel",C="Det er en undertittel",z=[h[0],h[1],h[2],h[3],h[5]],Da={component:l,title:"Tester/Panel",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0},options:["dummyPanelOverridesWidthAndPadding"]},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0},options:[...z],control:"inline-radio"},hideGraphicMobile:{table:{disable:!0}},hideSubtitle:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",g,ha]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0},options:[...ma],control:"inline-radio"},renderIcon:{table:{disable:!0},control:{disable:!0}},spacing:{table:{disable:!0},options:[...pa],control:"inline-radio"},subtitle:{table:{disable:!0}},subtitleAs:{options:[...ua],control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},titleAs:{options:[...ba],control:"inline-radio",table:{disable:!0}},variant:{table:{disable:!0},options:[...da],control:"inline-radio"}}},r={children:e.jsxs(e.Fragment,{children:[e.jsx(d,{hasSpacing:!0,children:o}),e.jsx(ga,{children:"Trykk på meg"})]})},u={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const n=i(a).getAllByRole("generic")[1];await s(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getAllByRole("generic")[1];await s(n).toHaveClass("dummyClassname"),await s(n).toHaveAttribute("id","htmlId"),await s(n).toHaveAttribute("lang","nb"),await s(n).toHaveAttribute("data-testid","123ID")}},A={name:"With ClassName Overrides Panel Width And Padding none (A2, A10)",args:{...r,className:"dummyPanelOverridesWidthAndPadding"},argTypes:{className:{table:{disable:!1}}}},f={name:"Defaults Variant Outline (A1, A2 delvis, A3)",args:{...r},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByText(o);await s(n).toBeInTheDocument()}},y={name:"Variant Filled (A1)",args:{...r,variant:"filled"},argTypes:{variant:{table:{disable:!1}}}},v={name:"With Title (A5, A3)",args:{...r,title:k,children:e.jsx(d,{children:o})},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await s(n).toBeInTheDocument(),await s(n).toHaveTextContent(k),await s(n.tagName).toBe("H3")}},T={name:"With TitleAs (A5)",args:{...r,title:k,titleAs:"h1"},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await s(n.tagName).toBe("H1")}},S={name:"With HideTitle (A6)",args:{...r,title:k,hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await s(n).toBeInTheDocument()}},x={name:"With Subtitle (A7, A3)",args:{...r,subtitle:C,children:e.jsx(d,{children:o})},argTypes:{subtitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await s(n).toBeInTheDocument(),await s(n).toHaveTextContent(C),await s(n.tagName).toBe("H4")}},I={name:"With SubtitleAs (A7)",args:{...r,subtitle:"Det er en undertittel med valgt heading nivå",subtitleAs:"h2"},argTypes:{subtitleAs:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await s(n.tagName).toBe("H2")}},W={name:"With HideSubtitle (A8)",args:{...r,subtitle:C,hideSubtitle:!0},argTypes:{hideSubtitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=i(a).getByRole("heading");await s(n).toBeInTheDocument()}},c=a=>e.jsxs(e.Fragment,{children:[e.jsx(l,{...a,variant:"outline",children:e.jsx(d,{children:o})}),e.jsx(l,{...a,variant:"filled",children:e.jsx(d,{children:o})})]}),w={render:c,name:"With Image (A9)",args:{...r,imageSource:g},argTypes:{imageSource:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("img",{hidden:!0}).forEach(m=>{s(m).toBeInTheDocument(),s(m).toHaveAttribute("alt","")})}},B={render:c,name:"With Image With Alt Text (A9)",args:{...r,imageSource:g,imageSourceAltText:"Bonde med ku"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("img",{hidden:!0}).forEach(m=>{s(m).toBeInTheDocument(),s(m).toHaveAttribute("alt","Bonde med ku")})}},H={render:c,name:"With Image On Small Screen (A9)",args:{...r,imageSource:g},argTypes:{imageSource:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},P={render:c,name:"With Icon (A11 delvis)",args:{...r,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:a})=>{i(a).getAllByRole("img",{hidden:!0}).forEach(m=>{s(m).toBeInTheDocument()})}},G={render:c,name:"With Icon On Small Screen (A12)",args:{...r,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},E={render:c,name:"With HideGraphicMobile And Icon On Small Screen (A12, A9)",args:{...r,hideGraphicMobile:!0,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},M={render:c,name:"With HideGraphicMobile And Image On Small Screen (A12, A9)",args:{...r,hideGraphicMobile:!0,imageSource:g},argTypes:{hideGraphicMobile:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},j={render:c,name:"With HideGraphicMobile And Icon On Big Screen (A12, A9)",args:{...r,hideGraphicMobile:!0,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},D={render:c,name:"With HideGraphicMobile And Image On Big Screen (A12, A9)",args:{...r,hideGraphicMobile:!0,imageSource:g},argTypes:{hideGraphicMobile:{table:{disable:!1}}}},Aa=a=>e.jsxs(e.Fragment,{children:[z.map((t,n)=>e.jsx(l,{...a,color:t,variant:"outline",children:`color: ${t}`},`panel_${n}`)),z.map((t,n)=>e.jsx(l,{...a,color:t,variant:"filled",children:`color: ${t}`},`panel_${n}`))]}),R={render:Aa,name:"With Color And Variant (A1)",args:{...r},argTypes:{color:{table:{disable:!1},control:{disable:!0}}}},fa=a=>e.jsx(e.Fragment,{children:pa.map((t,n)=>e.jsx(l,{...a,spacing:t,children:`spacing: ${t}`},`panel_${n}`))}),N={render:fa,name:"With Spacing (A4)",args:{...r},argTypes:{spacing:{table:{disable:!1},control:{disable:!0}}}},ya=a=>e.jsx(e.Fragment,{children:ma.map((t,n)=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{...a,padding:t,children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(d,{children:o})]},`panel1_${n}`),e.jsxs(l,{...a,padding:t,variant:"filled",children:[e.jsx("div",{children:`padding: ${t}`}),e.jsx(d,{children:o})]},`panel2_${n}`)]}))}),V={render:ya,name:"With Padding (A10)",args:{...r},argTypes:{padding:{table:{disable:!1},control:{disable:!0}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},va=a=>e.jsx(e.Fragment,{children:da.map((t,n)=>e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:t,renderIcon:a.renderIcon,title:"En overskrift",children:o},`panel1_${n}`),e.jsx(l,{variant:t,children:o},`panel2_${n}`)]}))}),F={render:va,name:"Text Aligned Vertical (A13)",args:{...r,renderIcon:()=>e.jsx(p,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}}},O={name:"Text Short And Icon (A11)",args:{title:"Kort tittel",children:e.jsx(d,{children:"Kort test ..."}),renderIcon:()=>e.jsx(p,{size:"large"})},argTypes:{renderIcon:{table:{disable:!1}}}};var $,L,_;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLParagraphElement | null): void => {
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
} satisfies Story`,...(_=(L=u.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var J,X,K;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(X=b.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var q,Q,U;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,ie;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,oe,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,me,pe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,he,ue;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(he=x.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var be,Ae,fe;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(Ae=I.parameters)==null?void 0:Ae.docs)==null?void 0:fe.source}}};var ye,ve,Te;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var Se,xe,Ie;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
    const images = canvas.getAllByRole('img', {
      hidden: true
    });
    images.forEach(img => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', '');
    });
  }
} satisfies Story`,...(Ie=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var We,we,Be;B.parameters={...B.parameters,docs:{...(We=B.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(we=B.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var He,Pe,Ge;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ge=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:Ge.source}}};var Ee,Me,je;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var De,Re,Ne;G.parameters={...G.parameters,docs:{...(De=G.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ne=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Ve,Fe,Oe;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};var ke,Ce,ze;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(ze=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var $e,Le,_e;j.parameters={...j.parameters,docs:{...($e=j.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
} satisfies Story`,...(_e=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};var Je,Xe,Ke;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(Xe=D.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source}}};var qe,Qe,Ue;R.parameters={...R.parameters,docs:{...(qe=R.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ue=(Qe=R.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ye,Ze,ea;N.parameters={...N.parameters,docs:{...(Ye=N.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(ea=(Ze=N.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,na,ta;V.parameters={...V.parameters,docs:{...(aa=V.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
} satisfies Story`,...(ta=(na=V.parameters)==null?void 0:na.docs)==null?void 0:ta.source}}};var ra,sa,ia;F.parameters={...F.parameters,docs:{...(ra=F.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
} satisfies Story`,...(ia=(sa=F.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var la,oa,ca;O.parameters={...O.parameters,docs:{...(la=O.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
} satisfies Story`,...(ca=(oa=O.parameters)==null?void 0:oa.docs)==null?void 0:ca.source}}};const Ra=["WithRef","WithAttributes","WithClassNameOverridesPanelWidthAndPadding","Defaults","VariantFilled","WithTitle","WithTitleAs","WithHideTitle","WithSubtitle","WithSubtitleAs","WithHideSubtitle","WithImage","WithImageSourceAltText","WithImageMobile","WithIcon","WithIconMobile","WithHideGraphicMobileAndIcon","WithHideGraphicMobileAndImage","WithHideGraphicMobileAndIconDesktop","WithHideGraphicMobileAndImageDesktop","WithColorAndVariant","WithSpacing","WithPadding","TextAlignedVertical","TextShortAndIcon"];export{f as Defaults,F as TextAlignedVertical,O as TextShortAndIcon,y as VariantFilled,b as WithAttributes,A as WithClassNameOverridesPanelWidthAndPadding,R as WithColorAndVariant,E as WithHideGraphicMobileAndIcon,j as WithHideGraphicMobileAndIconDesktop,M as WithHideGraphicMobileAndImage,D as WithHideGraphicMobileAndImageDesktop,W as WithHideSubtitle,S as WithHideTitle,P as WithIcon,G as WithIconMobile,w as WithImage,H as WithImageMobile,B as WithImageSourceAltText,V as WithPadding,u as WithRef,N as WithSpacing,x as WithSubtitle,I as WithSubtitleAs,v as WithTitle,T as WithTitleAs,Ra as __namedExportsOrder,Da as default};
//# sourceMappingURL=Panel.test.stories-Bf6_kuOC.js.map
