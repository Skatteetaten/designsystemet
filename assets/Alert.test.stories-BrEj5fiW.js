import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as Le}from"./index-D_ouKaeX.js";import{f as je,w as o,e as n,u as Fe,b as Oe}from"./index-DIxTUSTt.js";import{d as Me}from"./index-CGk5cNE3.js";import{L as _e}from"./index-DAV9Xejq.js";import{A as I}from"./index-Bid14VJj.js";import{H as Ge,P as qe}from"./index-B0Glj4sP.js";import{w as C}from"./storybook.testing.utils-CMs160i9.js";import{S as H}from"./icon.systems-DGFW7KrD.js";import{s as Pe}from"./base-props.types-B340BQPQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfnG5Ebn.js";import"./index-uxUkjR_c.js";import"./icon.utils-XW2L0FSl.js";const{useArgs:$e}=__STORYBOOK_MODULE_PREVIEW_API__,oa={component:I,title:"Tester/Alert",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},backgroundBrightness:{table:{disable:!0}},showAlert:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(H),mapping:H},variant:{table:{disable:!0}},onClose:{table:{disable:!0}},ariaLive:{table:{disable:!0}}}},l="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",r={showAlert:!1,children:l,variant:Pe[1]},c={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",showAlert:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1],s=t.getAllByRole("generic")[2];await n(e).toHaveAttribute("id","htmlId"),await n(s).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("lang","en"),await n(e).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults (B1, B2)",args:{...r},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite"),await n(e).toHaveAttribute("aria-atomic");const s=e.querySelector("div");await n(s).not.toBeInTheDocument()}},u={name:"Defaults With Alert Content (B2)",args:{...r,showAlert:!0},argTypes:{children:{table:{disable:!1}},showAlert:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite");const s=e.querySelector("div");await n(s).toBeInTheDocument();const D=e.querySelector("button");await n(D).not.toBeInTheDocument()}},g={name:"Variant Success (A1, A3)",args:{...r,showAlert:!0,variant:"success"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},p={name:"Variant Neutral (A1, A3)",args:{...r,showAlert:!0,variant:"info"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},h={name:"Variant Warning (A1, A3)",args:{...r,showAlert:!0,variant:"warning"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},v={name:"Variant Danger (A1, A3, B4)",args:{...r,showAlert:!0,variant:"danger"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","assertive");const s=t.getByText(l);await n(s).toBeInTheDocument()}},V=a=>i.jsx(i.Fragment,{children:Pe.map((t,e)=>Le.createElement(I,{...a,key:`messageBar_${e}`,className:"bottomSpacingXL",variant:t}))}),A={render:V,name:"All Variants (A1)",args:{...r,showAlert:!0}},f={render:V,name:"All Variants On Small Screen (A1)",args:{...r,showAlert:!0},parameters:{viewport:{defaultViewport:"--mobile"}}},b={render:V,name:"All Light Variants",args:{...r,showAlert:!0,backgroundBrightness:"light"},parameters:{backgrounds:{default:"grey"}},argTypes:{backgroundBrightness:{table:{disable:!1}}}},y={name:"With Long Text (A2)",args:{...r,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon. Dersom teksten går over flere linjer, så vil ikonene beholde plasseringen sin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},w={name:"With Long Text And Breaking (A2)",args:{...r,children:"Avvistavkortutsteder.Takontaktmedkortutstederformerinformasjon.Dersomtekstengåroverflerelinjer,såvilikonenebeholdeplasseringensin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},B={name:"With Markup (A2)",args:{...r,children:i.jsxs(i.Fragment,{children:[i.jsx(Ge,{as:"h1",level:4,children:"Avvist av kortutsteder"}),i.jsxs(qe,{children:["Ta kontakt med kortutsteder for ",i.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]}),showAlert:!0}},T={name:"With Custom Icon (A3)",args:{...r,showAlert:!0,svgPath:_e},argTypes:{svgPath:{table:{disable:!1}}}},S={name:"With Custom SVG (A3)",args:{...r,showAlert:!0,svgPath:i.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1}}}},x={name:"With Close Button (A4)",args:{...r,showAlert:!0,onClose:je()},parameters:{imageSnapshot:{focus:`${C} button`,hover:`${C} button`}}},k={name:"With OnClick Close Button (A4)",args:{...r,showAlert:!0},parameters:{imageSnapshot:{disable:!0}},render:a=>{const[,t]=$e();return i.jsx(I,{...a,onClose:()=>{t({showAlert:!1})},children:a.children})},play:async({canvasElement:a})=>{const t=o(a),e=t.getByText(l);await n(e).toBeInTheDocument();const s=t.getByRole("button");await n(s).toBeInTheDocument();const D=t.getByTitle(Me.t("ds_status:alert.CloseMessage"));await n(D).toBeInTheDocument(),await Fe.click(s),await Oe(()=>n(e).not.toBeInTheDocument())}},W={name:"With Aria-Live Off (B3)",args:{...r,showAlert:!0,ariaLive:"off"},argTypes:{ariaLive:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","off")}};var N,R,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var P,L,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(L=d.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var F,O,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(O=m.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var _,G,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var $,X,Z;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,K,U;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=(K=p.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,z,Q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(z=h.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var ee,ae,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,se;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A1)',
  args: {
    ...defaultArgs,
    showAlert: true
  }
} satisfies Story`,...(se=(re=A.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,le;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants On Small Screen (A1)',
  args: {
    ...defaultArgs,
    showAlert: true
  },
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(le=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,me;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Light Variants',
  args: {
    ...defaultArgs,
    showAlert: true,
    backgroundBrightness: 'light'
  },
  parameters: {
    backgrounds: {
      default: 'grey'
    }
  },
  argTypes: {
    backgroundBrightness: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(me=(de=b.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,ge,pe;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var he,ve,Ae;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Ae.source}}};var fe,be,ye;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var we,Be,Te;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Se,xe,ke;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var We,De,Ie;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'With Close Button (A4)',
  args: {
    ...defaultArgs,
    showAlert: true,
    onClose: fn()
  },
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} button\`,
      hover: \`\${wrapper} button\`
    }
  }
} satisfies Story`,...(Ie=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ve,Ce,He;k.parameters={...k.parameters,docs:{...(Ve=k.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'With OnClick Close Button (A4)',
  args: {
    ...defaultArgs,
    showAlert: true
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  render: (args): JSX.Element => {
    const [, setArgs] = useArgs();
    return <Alert {...args} onClose={() => {
      setArgs({
        showAlert: false
      });
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
} satisfies Story`,...(He=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var Ne,Re,Ee;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('aria-live', 'off');
  }
} satisfies Story`,...(Ee=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};const ia=["WithRef","WithAttributes","Defaults","DefaultsWithMessage","VariantSuccess","VariantInfo","VariantWarning","VariantDanger","AllVariants","AllVariantsMobile","AllLightVariants","WithLongText","WithLongTextAndBreaking","WithMarkup","WithCustomIcon","WithCustomSVGPath","WithCloseButton","WithCloseOnClickButton","WithAriaLiveOff"];export{b as AllLightVariants,A as AllVariants,f as AllVariantsMobile,m as Defaults,u as DefaultsWithMessage,v as VariantDanger,p as VariantInfo,g as VariantSuccess,h as VariantWarning,W as WithAriaLiveOff,d as WithAttributes,x as WithCloseButton,k as WithCloseOnClickButton,T as WithCustomIcon,S as WithCustomSVGPath,y as WithLongText,w as WithLongTextAndBreaking,B as WithMarkup,c as WithRef,ia as __namedExportsOrder,oa as default};
//# sourceMappingURL=Alert.test.stories-BrEj5fiW.js.map
