import{j as pe}from"./jsx-runtime-Nms4Y4qS.js";import{r as ge}from"./index-BwDkhjyp.js";import{b as w}from"./index-DMYlLpXe.js";import{d as ve}from"./index-CI44Z2h3.js";import{C as T,b as he}from"./index-DcL_RvKM.js";import{w as l,e as n,f as ye,u as ke,c as fe}from"./index-hUG6DWTw.js";import{w as o}from"./storybook.testing.utils-CMs160i9.js";import{S as C}from"./icon.systems-Cj7Nt_Zb.js";import{l as Ae}from"./base-props.types-BkCKQDF7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cq8GVsVj.js";import"./icon.utils-Djpt9B5F.js";const x="htmlId",be="0 0 24 24",ue="Er du pendler?",S=(e,s)=>async({canvasElement:a})=>{const t=l(a);await n(t.getByRole("link")).toHaveAttribute(e,s)},Le={component:w,title:"Tester/Link",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},isExternal:{table:{disable:!0}},color:{table:{disable:!0},options:[void 0,...Ae],control:"inline-radio"},svgPath:{table:{disable:!0},options:Object.keys(C),mapping:C},title:{table:{disable:!0}},href:{table:{disable:!0}},target:{table:{disable:!0}},download:{table:{disable:!0}},ariaCurrent:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}}},i=e=>pe.jsx(w,{...e,onClick:s=>s.preventDefault(),children:e.children}),r={href:"#storybook-root",children:ue},c={render:i,name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:S("id","dummyIdForwardedFromRef")},d={render:i,name:"With Attributes(FA2-5)",args:{...r,id:x,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("id",x),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}},m={render:i,name:"Defaults (A1 delvis, A2, A3 delvis, B1)",args:{...r},argTypes:{href:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${o} > a`,focus:`${o} > a`,click:`${o} > a`}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await n(a).not.toHaveAttribute("rel"),await n(a).not.toHaveAttribute("target");const t=a.querySelector("svg");await n(t).not.toBeInTheDocument(),n(a).toHaveTextContent(ue)}},p={render:i,name:"With Long Text (A1 delvis)",args:{...r,children:"Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke."},argTypes:{children:{table:{disable:!1}}}},b={render:i,name:"With Long Text And Icons (A1 delvis)",args:{...r,isExternal:!0,svgPath:T,children:"Denne lenken har en veldig lang tekst med ikon på venstre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert."},argTypes:{isExternal:{table:{disable:!1}},svgPath:{table:{disable:!1}},children:{table:{disable:!1}}}},u={render:i,name:"With Icon (A4, B2)",args:{...r,svgPath:T},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e).getByRole("link").querySelector("svg");await n(t).toHaveAttribute("aria-hidden","true"),await n(t).toHaveAttribute("viewBox",be)}},g={render:i,name:"With External Icon (A5)",args:{...r,isExternal:!0},argTypes:{isExternal:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e).getByRole("link").querySelector("svg");await n(t).toHaveAttribute("aria-label",ve.t("ds_buttons:shared.ExternalIcon")),await n(t).toHaveAttribute("viewBox",be)}},v={render:i,name:"With Color (A6)",args:{...r,color:"white",isExternal:!0,svgPath:he},argTypes:{color:{table:{disable:!1}}},parameters:{backgrounds:{default:"themePrimary"},imageSnapshot:{hover:`${o} > a`,focus:`${o} > a`}}},h={render:i,name:"With Target (A2)",args:{...r,target:"_blank"},argTypes:{target:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");n(a).toHaveAttribute("rel","noreferrer"),n(a).toHaveAttribute("target","_blank")}},y={render:i,name:"With Download",args:{...r,download:"testFil.txt"},argTypes:{download:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");n(a).toHaveAttribute("download","testFil.txt")}},k={render:i,name:"With AriaDescribedby (B3)",args:{...r,ariaDescribedby:x},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:S("aria-describedby",x)},f={name:"With AriaCurrent",args:{...r,ariaCurrent:!0},argTypes:{ariaCurrent:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:S("aria-current","true")},xe="Ny lenketekst slik at vi ser at event fungerte",we=e=>{const[s,a]=ge.useState("Klikk på lenken for å teste onClick event");return pe.jsx(w,{...e,onClick:t=>{t.preventDefault(),a(xe),e.onClick&&e.onClick(t)},children:s})},A={render:we,name:"With onClick (A3 delvis)",args:{...r,svgPath:T,onClick:ye()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:s})=>{const t=l(s).getByRole("link");await n(t).toHaveTextContent("Klikk på lenken for å teste onClick event"),await ke.click(t),await n(t).toHaveTextContent("Ny lenketekst slik at vi ser at event fungerte"),await fe(()=>n(e.onClick).toHaveBeenCalled())}};var W,E,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var H,B,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var R,P,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (A1 delvis, A2, A3 delvis, B1)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    href: {
      table: {
        disable: false
      }
    },
    children: {
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
    await expect(link).not.toHaveAttribute('rel');
    await expect(link).not.toHaveAttribute('target');
    // eslint-disable-next-line testing-library/no-node-access
    const svg = link.querySelector('svg');
    await expect(svg).not.toBeInTheDocument();
    expect(link).toHaveTextContent(defaultLinkText);
  }
} satisfies Story`,...(F=(P=m.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var L,j,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  name: 'With Long Text (A1 delvis)',
  args: {
    ...defaultArgs,
    children: 'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(V=(j=p.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var $,N,O;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  name: 'With Long Text And Icons (A1 delvis)',
  args: {
    ...defaultArgs,
    isExternal: true,
    svgPath: CalendarSVGpath,
    children: 'Denne lenken har en veldig lang tekst med ikon på venstre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.'
  },
  argTypes: {
    isExternal: {
      table: {
        disable: false
      }
    },
    svgPath: {
      table: {
        disable: false
      }
    },
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(O=(N=b.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,G,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  name: 'With Icon (A4, B2)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath
  },
  argTypes: {
    svgPath: {
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
} satisfies Story`,...(q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var K,M,z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  name: 'With External Icon (A5)',
  args: {
    ...defaultArgs,
    isExternal: true
  },
  argTypes: {
    isExternal: {
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
} satisfies Story`,...(z=(M=g.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var J,Q,U;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: Template,
  name: 'With Color (A6)',
  args: {
    ...defaultArgs,
    color: 'white',
    isExternal: true,
    svgPath: AddOutlineSVGpath
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'themePrimary'
    },
    imageSnapshot: {
      hover: \`\${wrapper} > a\`,
      focus: \`\${wrapper} > a\`
    }
  }
} satisfies Story`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: Template,
  name: 'With Target (A2)',
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
} satisfies Story`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: Template,
  name: 'With Download',
  args: {
    ...defaultArgs,
    download: 'testFil.txt'
  },
  argTypes: {
    download: {
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
    expect(link).toHaveAttribute('download', 'testFil.txt');
  }
} satisfies Story`,...(ne=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: Template,
  name: 'With AriaDescribedby (B3)',
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
} satisfies Story`,...(re=(se=k.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,oe;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'With AriaCurrent',
  args: {
    ...defaultArgs,
    ariaCurrent: true
  },
  argTypes: {
    ariaCurrent: {
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
  play: verifyAttribute('aria-current', 'true')
} satisfies Story`,...(oe=(le=f.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,de,me;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: OnClickTemplate,
  name: 'With onClick (A3 delvis)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath,
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
    await expect(link).toHaveTextContent('Klikk på lenken for å teste onClick event');
    await userEvent.click(link);
    await expect(link).toHaveTextContent('Ny lenketekst slik at vi ser at event fungerte');
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(me=(de=A.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const je=["WithRef","WithAttributes","Defaults","WithLongText","WithLongTextIconAndExternalIcon","WithIcon","WithExternalIcon","WithColor","WithTarget","WithDownload","WithAriaDescribedby","WithAriaCurrent","WithOnClick"];export{m as Defaults,f as WithAriaCurrent,k as WithAriaDescribedby,d as WithAttributes,v as WithColor,y as WithDownload,g as WithExternalIcon,u as WithIcon,p as WithLongText,b as WithLongTextIconAndExternalIcon,A as WithOnClick,c as WithRef,h as WithTarget,je as __namedExportsOrder,Le as default};
//# sourceMappingURL=Link.test.stories-MuHE9R0r.js.map
