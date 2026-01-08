import{j as i,r as H,d as R}from"./iframe-Br1Xu9zr.js";import{L as E}from"./index-Xbc0duXx.js";import{A as I}from"./index-8xSWa2YY.js";import{H as L,P}from"./index-DCwxX22m.js";import{S as C}from"./icon.systems-BmhPSTgm.js";import{s as N}from"./base-props.types-B340BQPQ.js";const{expect:n,fn:j,userEvent:O,waitFor:F,within:o}=__STORYBOOK_MODULE_TEST__,M={component:I,title:"Tester/Alert",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},backgroundBrightness:{table:{disable:!0}},showAlert:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(C),mapping:C},variant:{table:{disable:!0}},onClose:{table:{disable:!0}},ariaLive:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},l="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",s={showAlert:!1,children:l,variant:N[1]},c={name:"With Ref (FA1)",args:{...s,ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID",showAlert:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1],r=t.getAllByRole("generic")[2];await n(e).toHaveAttribute("id","htmlId"),await n(r).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("lang","en"),await n(e).toHaveAttribute("data-testid","123ID")}},u={name:"Defaults (B1, B2)",args:{...s},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite"),await n(e).toHaveAttribute("aria-atomic");const r=e.querySelector("div");await n(r).not.toBeInTheDocument()}},m={name:"Defaults With Alert Content (B2)",args:{...s,showAlert:!0},argTypes:{children:{table:{disable:!1}},showAlert:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","polite");const r=e.querySelector("div");await n(r).toBeInTheDocument();const W=e.querySelector("button");await n(W).not.toBeInTheDocument()}},g={name:"Variant Success (A1, A3)",args:{...s,showAlert:!0,variant:"success"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const r=t.getByText(l);await n(r).toBeInTheDocument()}},p={name:"Variant Neutral (A1, A3)",args:{...s,showAlert:!0,variant:"info"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const r=t.getByText(l);await n(r).toBeInTheDocument()}},h={name:"Variant Warning (A1, A3)",args:{...s,showAlert:!0,variant:"warning"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","polite");const r=t.getByText(l);await n(r).toBeInTheDocument()}},v={name:"Variant Danger (A1, A3, B4)",args:{...s,showAlert:!0,variant:"danger"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=o(a),e=t.getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","assertive");const r=t.getByText(l);await n(r).toBeInTheDocument()}},V=a=>i.jsx(i.Fragment,{children:N.map((t,e)=>H.createElement(I,{...a,key:`messageBar_${e}`,className:"bottomSpacingXL",variant:t}))}),A={render:V,name:"All Variants (A1)",args:{...s,showAlert:!0}},f={render:V,name:"All Variants On Small Screen (A1)",args:{...s,showAlert:!0},globals:{viewport:{value:"--mobile"}}},b={render:V,name:"All Light Variants",args:{...s,showAlert:!0,backgroundBrightness:"light"},globals:{backgrounds:{value:"grey"}},argTypes:{backgroundBrightness:{table:{disable:!1}}}},y={name:"With Long Text (A2)",args:{...s,children:"Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon. Dersom teksten går over flere linjer, så vil ikonene beholde plasseringen sin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},w={name:"With Long Text And Breaking (A2)",args:{...s,children:"Avvistavkortutsteder.Takontaktmedkortutstederformerinformasjon.Dersomtekstengåroverflerelinjer,såvilikonenebeholdeplasseringensin.",showAlert:!0},argTypes:{children:{table:{disable:!1}}}},T={name:"With Markup (A2)",args:{...s,children:i.jsxs(i.Fragment,{children:[i.jsx(L,{as:"h1",level:4,children:"Avvist av kortutsteder"}),i.jsxs(P,{children:["Ta kontakt med kortutsteder for ",i.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]}),showAlert:!0}},B={name:"With Custom Icon (A3)",args:{...s,showAlert:!0,svgPath:E},argTypes:{svgPath:{table:{disable:!1}}}},S={name:"With Custom SVG (A3)",args:{...s,showAlert:!0,svgPath:i.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"})},argTypes:{svgPath:{table:{disable:!1}}}},x={name:"With Close Button (A4)",args:{...s,showAlert:!0,onClose:j()}},k={name:"With OnClick Close Button (A4)",args:{...s,showAlert:!0},parameters:{imageSnapshot:{disableSnapshot:!0}},render:a=>{const[t,e]=H.useState(!0);return i.jsx(I,{...a,showAlert:t,onClose:()=>{e(!1)},children:a.children})},play:async({canvasElement:a})=>{const t=o(a),e=t.getByText(l);await n(e).toBeInTheDocument();const r=t.getByRole("button");await n(r).toBeInTheDocument();const W=t.getByTitle(R.t("ds_status:alert.CloseMessage"));await n(W).toBeInTheDocument(),await O.click(r),await F(()=>n(e).not.toBeInTheDocument())}},D={name:"With Aria-Live Off (B3)",args:{...s,showAlert:!0,ariaLive:"off"},argTypes:{ariaLive:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=o(a).getAllByRole("generic")[1];await n(e).toHaveAttribute("aria-live","off")}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A1)',
  args: {
    ...defaultArgs,
    showAlert: true
  }
} satisfies Story`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Close Button (A4)',
  args: {
    ...defaultArgs,
    showAlert: true,
    onClose: fn()
  }
} satisfies Story`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...D.parameters?.docs?.source}}};const _=["WithRef","WithAttributes","Defaults","DefaultsWithMessage","VariantSuccess","VariantInfo","VariantWarning","VariantDanger","AllVariants","AllVariantsMobile","AllLightVariants","WithLongText","WithLongTextAndBreaking","WithMarkup","WithCustomIcon","WithCustomSVGPath","WithCloseButton","WithCloseOnClickButton","WithAriaLiveOff"],K=Object.freeze(Object.defineProperty({__proto__:null,AllLightVariants:b,AllVariants:A,AllVariantsMobile:f,Defaults:u,DefaultsWithMessage:m,VariantDanger:v,VariantInfo:p,VariantSuccess:g,VariantWarning:h,WithAriaLiveOff:D,WithAttributes:d,WithCloseButton:x,WithCloseOnClickButton:k,WithCustomIcon:B,WithCustomSVGPath:S,WithLongText:y,WithLongTextAndBreaking:w,WithMarkup:T,WithRef:c,__namedExportsOrder:_,default:M},Symbol.toStringTag,{value:"Module"}));export{K as A};
//# sourceMappingURL=Alert.test.stories-DdYm8Gnq.js.map
