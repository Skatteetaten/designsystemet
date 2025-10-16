import{j as i,r as Ee,d as Pe}from"./iframe-DRo7xN6O.js";import{L as je}from"./index-CIGiQTsv.js";import{A as I}from"./index-hkRDeZHX.js";import{H as Oe,P as Fe}from"./index-K3PRhlds.js";import{S as C}from"./icon.systems-YNVHmwDx.js";import{s as Le}from"./base-props.types-B340BQPQ.js";const{expect:n,fn:Me,userEvent:_e,waitFor:Ge,within:o}=__STORYBOOK_MODULE_TEST__,qe={component:I,title:"Tester/Alert",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},backgroundBrightness:{table:{disable:!0}},showAlert:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(C),mapping:C},variant:{table:{disable:!0}},onClose:{table:{disable:!0}},ariaLive:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},l="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",s={showAlert:!1,children:l,variant:Le[1]},c={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",showAlert:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1],r=t.getAllByRole("generic")[2];await n(e).toHaveAttribute("id","htmlId"),await n(r).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("lang","en"),await n(e).toHaveAttribute("data-testid","123ID")}},u={name:"Defaults (B1, B2)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite"),await n(e).toHaveAttribute("aria-atomic");const r=e.querySelector("div");await n(r).not.toBeInTheDocument()}},m={name:"Defaults With Alert Content (B2)",args:{...s,showAlert:!0},argTypes:{children:{table:{disable:!1}},showAlert:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite");const r=e.querySelector("div");await n(r).toBeInTheDocument();const W=e.querySelector("button");await n(W).not.toBeInTheDocument()}},g={name:"Variant Success (A1, A3)",args:{...s,showAlert:!0,variant:"success"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const r=t.getByText(l);await n(r).toBeInTheDocument()}},p={name:"Variant Neutral (A1, A3)",args:{...s,showAlert:!0,variant:"info"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const r=t.getByText(l);await n(r).toBeInTheDocument()}},h={name:"Variant Warning (A1, A3)",args:{...s,showAlert:!0,variant:"warning"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const r=t.getByText(l);await n(r).toBeInTheDocument()}},v={name:"Variant Danger (A1, A3, B4)",args:{...s,showAlert:!0,variant:"danger"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","assertive");const r=t.getByText(l);await n(r).toBeInTheDocument()}},V=a=>i.jsx(i.Fragment,{children:Le.map((t,e)=>Ee.createElement(I,{...a,key:`messageBar_${e}`,className:"bottomSpacingXL",variant:t}))}),A={render:V,name:"All Variants (A1)",args:{...s,showAlert:!0}},f={render:V,name:"All Variants On Small Screen (A1)",args:{...s,showAlert:!0},globals:{viewport:{value:"--mobile"}}},b={render:V,name:"All Light Variants",args:{...s,showAlert:!0,backgroundBrightness:"light"},globals:{backgrounds:{value:"grey"}},argTypes:{backgroundBrightness:{table:{disable:!1}}}},y={name:"With Long Text (A2)",args:{...s,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon. Dersom teksten går over flere linjer, så vil ikonene beholde plasseringen sin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},w={name:"With Long Text And Breaking (A2)",args:{...s,children:"Avvistavkortutsteder.Takontaktmedkortutstederformerinformasjon.Dersomtekstengåroverflerelinjer,såvilikonenebeholdeplasseringensin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},T={name:"With Markup (A2)",args:{...s,children:i.jsxs(i.Fragment,{children:[i.jsx(Oe,{as:"h1",level:4,children:"Avvist av kortutsteder"}),i.jsxs(Fe,{children:["Ta kontakt med kortutsteder for ",i.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]}),showAlert:!0}},B={name:"With Custom Icon (A3)",args:{...s,showAlert:!0,svgPath:je},argTypes:{svgPath:{table:{disable:!1}}}},S={name:"With Custom SVG (A3)",args:{...s,showAlert:!0,svgPath:i.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1}}}},x={name:"With Close Button (A4)",args:{...s,showAlert:!0,onClose:Me()}},k={name:"With OnClick Close Button (A4)",args:{...s,showAlert:!0},parameters:{imageSnapshot:{disableSnapshot:!0}},render:a=>{const[t,e]=Ee.useState(!0);return i.jsx(I,{...a,showAlert:t,onClose:()=>{e(!1)},children:a.children})},play:async({canvasElement:a})=>{const t=o(a),e=t.getByText(l);await n(e).toBeInTheDocument();const r=t.getByRole("button");await n(r).toBeInTheDocument();const W=t.getByTitle(Pe.t("ds_status:alert.CloseMessage"));await n(W).toBeInTheDocument(),await _e.click(r),await Ge(()=>n(e).not.toBeInTheDocument())}},D={name:"With Aria-Live Off (B3)",args:{...s,showAlert:!0,ariaLive:"off"},argTypes:{ariaLive:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","off")}};var H,N,R;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,L,P;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
    'data-testid': '123ID',
    showAlert: true
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
    const alert = canvas.getAllByRole('generic')[2];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(alert).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var j,O,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Defaults (B1, B2)',
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute('aria-live', 'polite');
    await expect(container).toHaveAttribute('aria-atomic');
    const alertNode = container.querySelector('div');
    await expect(alertNode).not.toBeInTheDocument();
  }
} satisfies Story`,...(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var M,_,G;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Defaults With Alert Content (B2)',
  args: {
    ...defaultArgs,
    showAlert: true
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    showAlert: {
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
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute('aria-live', 'polite');
    const alertNode = container.querySelector('div');
    await expect(alertNode).toBeInTheDocument();
    const iconButtonNode = container.querySelector('button');
    await expect(iconButtonNode).not.toBeInTheDocument();
  }
} satisfies Story`,...(G=(_=m.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var q,X,Z;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Variant Success (A1, A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'success'
  },
  argTypes: {
    variant: {
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
    await expect(container).toHaveAttribute('aria-live', 'polite');
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
  }
} satisfies Story`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var z,J,K;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Variant Neutral (A1, A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'info'
  },
  argTypes: {
    variant: {
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
    await expect(container).toHaveAttribute('aria-live', 'polite');
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
  }
} satisfies Story`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,Y,$;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Variant Warning (A1, A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'warning'
  },
  argTypes: {
    variant: {
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
    await expect(container).toHaveAttribute('aria-live', 'polite');
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
  }
} satisfies Story`,...($=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var Q,ee,ae;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Variant Danger (A1, A3, B4)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'danger'
  },
  argTypes: {
    variant: {
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
    await expect(container).toHaveAttribute('aria-live', 'assertive');
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
  }
} satisfies Story`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A1)',
  args: {
    ...defaultArgs,
    showAlert: true
  }
} satisfies Story`,...(se=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants On Small Screen (A1)',
  args: {
    ...defaultArgs,
    showAlert: true
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Light Variants',
  args: {
    ...defaultArgs,
    showAlert: true,
    backgroundBrightness: 'light'
  },
  globals: {
    backgrounds: {
      value: 'grey'
    }
  },
  argTypes: {
    backgroundBrightness: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(de=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With Long Text (A2)',
  args: {
    ...defaultArgs,
    children: 'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon. Dersom teksten går over flere linjer, så vil ikonene beholde plasseringen sin.',
    showAlert: true
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ge=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var pe,he,ve;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'With Long Text And Breaking (A2)',
  args: {
    ...defaultArgs,
    children: 'Avvistavkortutsteder.Takontaktmedkortutstederformerinformasjon.Dersomtekstengåroverflerelinjer,såvilikonenebeholdeplasseringensin.',
    showAlert: true
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ve=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Ae,fe,be;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'With Markup (A2)',
  args: {
    ...defaultArgs,
    children: <>
        <Heading as={'h1'} level={4}>
          {'Avvist av kortutsteder'}
        </Heading>
        <Paragraph>
          {'Ta kontakt med kortutsteder for '}
          <a href={'#storybook-root'}>{'mer informasjon'}</a>
        </Paragraph>
      </>,
    showAlert: true
  }
} satisfies Story`,...(be=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,we,Te;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'With Custom Icon (A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    svgPath: LockSVGpath
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Te=(we=B.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Be,Se,xe;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'With Custom SVG (A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    svgPath: <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z'} />
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(xe=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var ke,De,We;x.parameters={...x.parameters,docs:{...(ke=x.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'With Close Button (A4)',
  args: {
    ...defaultArgs,
    showAlert: true,
    onClose: fn()
  }
} satisfies Story`,...(We=(De=x.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var Ie,Ve,Ce;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'With OnClick Close Button (A4)',
  args: {
    ...defaultArgs,
    showAlert: true
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  render: (args): JSX.Element => {
    const [showAlert, setShowAlert] = useState(true);
    return <Alert {...args} showAlert={showAlert} onClose={() => {
      setShowAlert(false);
    }}>
        {args.children}
      </Alert>;
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const alertNode = canvas.getByText(defaultText);
    await expect(alertNode).toBeInTheDocument();
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    const svg = canvas.getByTitle(dsI18n.t('ds_status:alert.CloseMessage'));
    await expect(svg).toBeInTheDocument();
    await userEvent.click(iconButton);
    await waitFor(() => expect(alertNode).not.toBeInTheDocument());
  }
} satisfies Story`,...(Ce=(Ve=k.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source}}};var He,Ne,Re;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'With Aria-Live Off (B3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    ariaLive: 'off'
  },
  argTypes: {
    ariaLive: {
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('aria-live', 'off');
  }
} satisfies Story`,...(Re=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};const Xe=["WithRef","WithAttributes","Defaults","DefaultsWithMessage","VariantSuccess","VariantInfo","VariantWarning","VariantDanger","AllVariants","AllVariantsMobile","AllLightVariants","WithLongText","WithLongTextAndBreaking","WithMarkup","WithCustomIcon","WithCustomSVGPath","WithCloseButton","WithCloseOnClickButton","WithAriaLiveOff"],$e=Object.freeze(Object.defineProperty({__proto__:null,AllLightVariants:b,AllVariants:A,AllVariantsMobile:f,Defaults:u,DefaultsWithMessage:m,VariantDanger:v,VariantInfo:p,VariantSuccess:g,VariantWarning:h,WithAriaLiveOff:D,WithAttributes:d,WithCloseButton:x,WithCloseOnClickButton:k,WithCustomIcon:B,WithCustomSVGPath:S,WithLongText:y,WithLongTextAndBreaking:w,WithMarkup:T,WithRef:c,__namedExportsOrder:Xe,default:qe},Symbol.toStringTag,{value:"Module"}));export{$e as A};
//# sourceMappingURL=Alert.test.stories-zJm6wcuk.js.map
