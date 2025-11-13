import{j as me,d as ue,r as ge}from"./iframe-CdXtTKZQ.js";import{b as S}from"./index-CDWtp_lT.js";import{j as x,i as ve}from"./index-D0xxaDHU.js";import{S as w}from"./icon.systems-eQup-rxy.js";import{l as he}from"./base-props.types-B340BQPQ.js";const{expect:t,fn:ye,userEvent:ke,waitFor:fe,within:l}=__STORYBOOK_MODULE_TEST__,A="htmlId",pe="0 0 24 24",be="Er du pendler?",T=(e,s)=>async({canvasElement:a})=>{const n=l(a);await t(n.getByRole("link")).toHaveAttribute(e,s)},Ae={component:S,title:"Tester/Link",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},isExternal:{table:{disable:!0}},color:{table:{disable:!0},options:[void 0,...he],control:"inline-radio"},svgPath:{table:{disable:!0},options:Object.keys(w),mapping:w},title:{table:{disable:!0}},href:{table:{disable:!0}},target:{table:{disable:!0}},download:{table:{disable:!0}},ariaCurrent:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},i=e=>me.jsx(S,{...e,onClick:s=>s.preventDefault(),children:e.children}),r={href:"#storybook-root",children:be},o={render:i,name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:T("id","dummyIdForwardedFromRef")},c={render:i,name:"With Attributes(FA2-5)",args:{...r,id:A,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",A),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},d={render:i,name:"Defaults (A1 delvis, A2, A3 delvis, B1)",args:{...r},argTypes:{href:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");await t(a).not.toHaveAttribute("rel"),await t(a).not.toHaveAttribute("target");const n=a.querySelector("svg");await t(n).not.toBeInTheDocument(),t(a).toHaveTextContent(be)}},m={render:i,name:"With Long Text (A1 delvis)",args:{...r,children:"Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke."},argTypes:{children:{table:{disable:!1}}}},p={render:i,name:"With Long Text And Icons (A1 delvis)",args:{...r,isExternal:!0,svgPath:x,children:"Denne lenken har en veldig lang tekst med ikon på venstre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert."},argTypes:{isExternal:{table:{disable:!1}},svgPath:{table:{disable:!1}},children:{table:{disable:!1}}}},b={render:i,name:"With Icon (A4, B2)",args:{...r,svgPath:x},argTypes:{svgPath:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByRole("link").querySelector("svg");await t(n).toHaveAttribute("aria-hidden","true"),await t(n).toHaveAttribute("viewBox",pe)}},u={render:i,name:"With External Icon (A5)",args:{...r,isExternal:!0},argTypes:{isExternal:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e).getByRole("link").querySelector("svg");await t(n).toHaveAttribute("aria-label",ue.t("ds_buttons:shared.ExternalIcon")),await t(n).toHaveAttribute("viewBox",pe)}},g={render:i,name:"With Color (A6)",args:{...r,color:"white",isExternal:!0,svgPath:ve},argTypes:{color:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}},v={render:i,name:"With Target (A2)",args:{...r,target:"_blank"},argTypes:{target:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");t(a).toHaveAttribute("rel","noreferrer"),t(a).toHaveAttribute("target","_blank")}},h={render:i,name:"With Download",args:{...r,download:"testFil.txt"},argTypes:{download:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("link");t(a).toHaveAttribute("download","testFil.txt")}},y={render:i,name:"With AriaDescribedby (B3)",args:{...r,ariaDescribedby:A},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:T("aria-describedby",A)},k={name:"With AriaCurrent",args:{...r,ariaCurrent:!0},argTypes:{ariaCurrent:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:T("aria-current","true")},Se="Ny lenketekst slik at vi ser at event fungerte",xe=e=>{const[s,a]=ge.useState("Klikk på lenken for å teste onClick event");return me.jsx(S,{...e,onClick:n=>{n.preventDefault(),a(Se),e.onClick&&e.onClick(n)},children:s})},f={render:xe,name:"With onClick (A3 delvis)",args:{...r,svgPath:x,onClick:ye()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:s})=>{const n=l(s).getByRole("link");await t(n).toHaveTextContent("Klikk på lenken for å teste onClick event"),await ke.click(n),await t(n).toHaveTextContent("Ny lenketekst slik at vi ser at event fungerte"),await fe(()=>t(e.onClick).toHaveBeenCalled())}};var C,W,E;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(W=o.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var I,H,B;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(H=c.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var D,R,P;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).not.toHaveAttribute('rel');
    await expect(link).not.toHaveAttribute('target');
    const svg = link.querySelector('svg');
    await expect(svg).not.toBeInTheDocument();
    expect(link).toHaveTextContent(defaultLinkText);
  }
} satisfies Story`,...(P=(R=d.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var F,L,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var j,O,V;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var N,G,q;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  }
} satisfies Story`,...(q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var K,M,z;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    const svg = link.querySelector('svg');
    await expect(svg).toHaveAttribute('aria-label', dsI18n.t('ds_buttons:shared.ExternalIcon'));
    await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
  }
} satisfies Story`,...(z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var U,Y,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...(J=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    expect(link).toHaveAttribute('download', 'testFil.txt');
  }
} satisfies Story`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('aria-describedby', elementId)
} satisfies Story`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,ie,le;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: verifyAttribute('aria-current', 'true')
} satisfies Story`,...(le=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,ce,de;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: OnClickTemplate,
  name: 'With onClick (A3 delvis)',
  args: {
    ...defaultArgs,
    svgPath: CalendarSVGpath,
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
    await expect(link).toHaveTextContent('Klikk på lenken for å teste onClick event');
    await userEvent.click(link);
    await expect(link).toHaveTextContent('Ny lenketekst slik at vi ser at event fungerte');
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Te=["WithRef","WithAttributes","Defaults","WithLongText","WithLongTextIconAndExternalIcon","WithIcon","WithExternalIcon","WithColor","WithTarget","WithDownload","WithAriaDescribedby","WithAriaCurrent","WithOnClick"],He=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,WithAriaCurrent:k,WithAriaDescribedby:y,WithAttributes:c,WithColor:g,WithDownload:h,WithExternalIcon:u,WithIcon:b,WithLongText:m,WithLongTextIconAndExternalIcon:p,WithOnClick:f,WithRef:o,WithTarget:v,__namedExportsOrder:Te,default:Ae},Symbol.toStringTag,{value:"Module"}));export{He as L};
//# sourceMappingURL=Link.test.stories-DGfZqAPk.js.map
