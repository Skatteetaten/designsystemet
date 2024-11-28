import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r as Le}from"./index-BwDkhjyp.js";import{d as je}from"./index-C498nvnC.js";import{L as Fe}from"./index-C3Vp3Ydz.js";import{A as I}from"./index-BQwW25uL.js";import{H as Oe,P as Me}from"./index-DWqb7jS3.js";import{w as o,e as n,f as _e,u as Ge,b as qe}from"./index-B8otpkpo.js";import{w as N}from"./storybook.testing.utils-CMs160i9.js";import{S as H}from"./icon.systems-DsGmM1wX.js";import{s as V}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CKHxS2Ra.js";import"./index-jWwGX2yX.js";import"./icon.utils-Ceokxv4B.js";const{useArgs:$e}=__STORYBOOK_MODULE_PREVIEW_API__,oa={component:I,title:"Tester/Alert",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},backgroundBrightness:{table:{disable:!0}},showAlert:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(H),mapping:H},variant:{options:[...V],control:"radio",table:{disable:!0}},onClose:{table:{disable:!0}},ariaLive:{table:{disable:!0}}}},l="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",r={showAlert:!1,children:l,variant:V[1]},c={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",showAlert:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1],s=t.getAllByRole("generic")[2];await n(e).toHaveAttribute("id","htmlId"),await n(s).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("lang","en"),await n(e).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults (B1, B2)",args:{...r},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite"),await n(e).toHaveAttribute("aria-atomic");const s=e.querySelector("div");await n(s).not.toBeInTheDocument()}},u={name:"Defaults With Alert Content (B2)",args:{...r,showAlert:!0},argTypes:{children:{table:{disable:!1}},showAlert:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite");const s=e.querySelector("div");await n(s).toBeInTheDocument();const D=e.querySelector("button");await n(D).not.toBeInTheDocument()}},g={name:"Variant Success (A1, A3)",args:{...r,showAlert:!0,variant:"success"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},p={name:"Variant Neutral (A1, A3)",args:{...r,showAlert:!0,variant:"neutral"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},h={name:"Variant Warning (A1, A3)",args:{...r,showAlert:!0,variant:"warning"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},v={name:"Variant Danger (A1, A3, B4)",args:{...r,showAlert:!0,variant:"danger"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","assertive");const s=t.getByText(l);await n(s).toBeInTheDocument()}},C=a=>i.jsx(i.Fragment,{children:V.map((t,e)=>Le.createElement(I,{...a,key:`messageBar_${e}`,className:"bottomSpacingXL",variant:t}))}),A={render:C,name:"All Variants (A1)",args:{...r,showAlert:!0}},b={render:C,name:"All Variants On Small Screen (A1)",args:{...r,showAlert:!0},parameters:{viewport:{defaultViewport:"--mobile"}}},f={render:C,name:"All Light Variants",args:{...r,showAlert:!0,backgroundBrightness:"light"},parameters:{backgrounds:{default:"grey"}},argTypes:{backgroundBrightness:{table:{disable:!1}}}},y={name:"With Long Text (A2)",args:{...r,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon. Dersom teksten går over flere linjer, så vil ikonene beholde plasseringen sin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},w={name:"With Long Text And Breaking (A2)",args:{...r,children:"Avvistavkortutsteder.Takontaktmedkortutstederformerinformasjon.Dersomtekstengåroverflerelinjer,såvilikonenebeholdeplasseringensin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},B={name:"With Markup (A2)",args:{...r,children:i.jsxs(i.Fragment,{children:[i.jsx(Oe,{as:"h1",level:4,children:"Avvist av kortutsteder"}),i.jsxs(Me,{children:["Ta kontakt med kortutsteder for ",i.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]}),showAlert:!0}},T={name:"With Custom Icon (A3)",args:{...r,showAlert:!0,svgPath:Fe},argTypes:{svgPath:{table:{disable:!1}}}},S={name:"With Custom SVG (A3)",args:{...r,showAlert:!0,svgPath:i.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1}}}},x={name:"With Close Button (A4)",args:{...r,showAlert:!0,onClose:_e()},parameters:{imageSnapshot:{focus:`${N} button`,hover:`${N} button`}}},k={name:"With OnClick Close Button (A4)",args:{...r,showAlert:!0},parameters:{imageSnapshot:{disable:!0}},render:a=>{const[,t]=$e();return i.jsx(I,{...a,onClose:()=>{t({showAlert:!1})},children:a.children})},play:async({canvasElement:a})=>{const t=o(a),e=t.getByText(l);await n(e).toBeInTheDocument();const s=t.getByRole("button");await n(s).toBeInTheDocument();const D=t.getByTitle(je.t("ds_status:alert.CloseMessage"));await n(D).toBeInTheDocument(),await Ge.click(s),await qe(()=>n(e).not.toBeInTheDocument())}},W={name:"With Aria-Live Off (B3)",args:{...r,showAlert:!0,ariaLive:"off"},argTypes:{ariaLive:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","off")}};var R,E,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var L,j,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(j=d.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var O,M,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const alertNode = container.querySelector('div');
    await expect(alertNode).not.toBeInTheDocument();
  }
} satisfies Story`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var G,q,$;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const alertNode = container.querySelector('div');
    await expect(alertNode).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    const iconButtonNode = container.querySelector('button');
    await expect(iconButtonNode).not.toBeInTheDocument();
  }
} satisfies Story`,...($=(q=u.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var X,Z,J;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,U,Y;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Variant Neutral (A1, A3)',
  args: {
    ...defaultArgs,
    showAlert: true,
    variant: 'neutral'
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
} satisfies Story`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,Q,ee;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,te,ne;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,se,oe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A1)',
  args: {
    ...defaultArgs,
    showAlert: true
  }
} satisfies Story`,...(oe=(se=A.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,ce;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,ue;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,pe,he;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ve,Ae,be;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:be.source}}};var fe,ye,we;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Be,Te,Se;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var xe,ke,We;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:We.source}}};var De,Ie,Ve;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ve=(Ie=x.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Ce,Ne,He;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(He=(Ne=k.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var Re,Ee,Pe;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
} satisfies Story`,...(Pe=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};const ia=["WithRef","WithAttributes","Defaults","DefaultsWithMessage","VariantSuccess","VariantNeutral","VariantWarning","VariantDanger","AllVariants","AllVariantsMobile","AllLightVariants","WithLongText","WithLongTextAndBreaking","WithMarkup","WithCustomIcon","WithCustomSVGPath","WithCloseButton","WithCloseOnClickButton","WithAriaLiveOff"];export{f as AllLightVariants,A as AllVariants,b as AllVariantsMobile,m as Defaults,u as DefaultsWithMessage,v as VariantDanger,p as VariantNeutral,g as VariantSuccess,h as VariantWarning,W as WithAriaLiveOff,d as WithAttributes,x as WithCloseButton,k as WithCloseOnClickButton,T as WithCustomIcon,S as WithCustomSVGPath,y as WithLongText,w as WithLongTextAndBreaking,B as WithMarkup,c as WithRef,ia as __namedExportsOrder,oa as default};
//# sourceMappingURL=Alert.test.stories-CmevF7tT.js.map
