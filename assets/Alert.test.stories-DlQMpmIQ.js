import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r as Ne}from"./index-BwDkhjyp.js";import{d as He}from"./index-e2J6NVvS.js";import{L as Re}from"./index-nyVGXzax.js";import{A as D}from"./index-DJw2LVW1.js";import{H as Pe,P as Le}from"./index-BpsKvWdW.js";import{w as o,e as n,f as je,u as Fe,c as Oe}from"./index-hUG6DWTw.js";import{w as V}from"./storybook.testing.utils-CMs160i9.js";import{S as C}from"./icon.systems-Dz6DRmJR.js";import{s as I}from"./base-props.types-BkCKQDF7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C4S6bjjo.js";import"./index-DnZXMkM7.js";import"./icon.utils-CFaC4F3v.js";const{useArgs:Me}=__STORYBOOK_MODULE_PREVIEW_API__,ta={component:D,title:"Tester/Alert",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},showAlert:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(C),mapping:C},variant:{options:[...I],control:"radio",table:{disable:!0}},onClose:{table:{disable:!0}},ariaLive:{table:{disable:!0}}}},l="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",r={showAlert:!1,children:l,variant:I[1]},c={name:"With Ref (FA1)",args:{...r,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",showAlert:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1],s=t.getAllByRole("generic")[2];await n(e).toHaveAttribute("id","htmlId"),await n(s).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("lang","en"),await n(e).toHaveAttribute("data-testid","123ID")}},m={name:"Defaults (B1, B2)",args:{...r},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite"),await n(e).toHaveAttribute("aria-atomic");const s=e.querySelector("div");await n(s).not.toBeInTheDocument()}},u={name:"Defaults With Alert Content (B2)",args:{...r,showAlert:!0},argTypes:{children:{table:{disable:!1}},showAlert:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite");const s=e.querySelector("div");await n(s).toBeInTheDocument();const W=e.querySelector("button");await n(W).not.toBeInTheDocument()}},g={name:"Variant Success (A1, A3)",args:{...r,showAlert:!0,variant:"success"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},p={name:"Variant Neutral (A1, A3)",args:{...r,showAlert:!0,variant:"neutral"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},v={name:"Variant Warning (A1, A3)",args:{...r,showAlert:!0,variant:"warning"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const s=t.getByText(l);await n(s).toBeInTheDocument()}},h={name:"Variant Danger (A1, A3, B4)",args:{...r,showAlert:!0,variant:"danger"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","assertive");const s=t.getByText(l);await n(s).toBeInTheDocument()}},Ee=a=>i.jsx(i.Fragment,{children:I.map((t,e)=>Ne.createElement(D,{...a,key:`messageBar_${e}`,className:"bottomSpacingXL",variant:t}))}),A={render:Ee,name:"All Variants (A1)",args:{...r,showAlert:!0}},f={render:Ee,name:"All Variants On Small Screen (A1)",args:{...r,showAlert:!0},parameters:{viewport:{defaultViewport:"--mobile"}}},b={name:"With Long Text (A2)",args:{...r,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon. Dersom teksten går over flere linjer, så vil ikonene beholde plasseringen sin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},y={name:"With Long Text And Breaking (A2)",args:{...r,children:"Avvistavkortutsteder.Takontaktmedkortutstederformerinformasjon.Dersomtekstengåroverflerelinjer,såvilikonenebeholdeplasseringensin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},w={name:"With Markup (A2)",args:{...r,children:i.jsxs(i.Fragment,{children:[i.jsx(Pe,{as:"h1",level:4,children:"Avvist av kortutsteder"}),i.jsxs(Le,{children:["Ta kontakt med kortutsteder for ",i.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]}),showAlert:!0}},T={name:"With Custom Icon (A3)",args:{...r,showAlert:!0,svgPath:Re},argTypes:{svgPath:{table:{disable:!1}}}},B={name:"With Custom SVG (A3)",args:{...r,showAlert:!0,svgPath:i.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1}}}},x={name:"With Close Button (A4)",args:{...r,showAlert:!0,onClose:je()},parameters:{imageSnapshot:{focus:`${V} button`,hover:`${V} button`}}},S={name:"With OnClick Close Button (A4)",args:{...r,showAlert:!0},parameters:{imageSnapshot:{disable:!0}},render:a=>{const[,t]=Me();return i.jsx(D,{...a,onClose:()=>{t({showAlert:!1})},children:a.children})},play:async({canvasElement:a})=>{const t=o(a),e=t.getByText(l);await n(e).toBeInTheDocument();const s=t.getByRole("button");await n(s).toBeInTheDocument();const W=t.getByTitle(He.t("ds_status:alert.CloseMessage"));await n(W).toBeInTheDocument(),await Fe.click(s),await Oe(()=>n(e).not.toBeInTheDocument())}},k={name:"With Aria-Live Off (B3)",args:{...r,showAlert:!0,ariaLive:"off"},argTypes:{ariaLive:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","off")}};var E,N,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(N=c.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var R,P,L;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var j,F,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var M,_,G;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var q,$,X;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=($=g.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var Z,J,K;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,Y,z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var Q,ee,ae;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A1)',
  args: {
    ...defaultArgs,
    showAlert: true
  }
} satisfies Story`,...(re=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,oe,ie;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,ge;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var pe,ve,he;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(he=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Ae,fe,be;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,we,Te;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(we=B.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Be,xe,Se;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var ke,We,De;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(We=S.parameters)==null?void 0:We.docs)==null?void 0:De.source}}};var Ie,Ve,Ce;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(Ve=k.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source}}};const na=["WithRef","WithAttributes","Defaults","DefaultsWithMessage","VariantSuccess","VariantNeutral","VariantWarning","VariantDanger","AllVariants","AllVariantsMobile","WithLongText","WithLongTextAndBreaking","WithMarkup","WithCustomIcon","WithCustomSVGPath","WithCloseButton","WithCloseOnClickButton","WithAriaLiveOff"];export{A as AllVariants,f as AllVariantsMobile,m as Defaults,u as DefaultsWithMessage,h as VariantDanger,p as VariantNeutral,g as VariantSuccess,v as VariantWarning,k as WithAriaLiveOff,d as WithAttributes,x as WithCloseButton,S as WithCloseOnClickButton,T as WithCustomIcon,B as WithCustomSVGPath,b as WithLongText,y as WithLongTextAndBreaking,w as WithMarkup,c as WithRef,na as __namedExportsOrder,ta as default};
//# sourceMappingURL=Alert.test.stories-DlQMpmIQ.js.map
