import{j as n,r as x}from"./iframe-s2_bNgHU.js";import{B as R}from"./index-Ck1G954W.js";import{E as o}from"./index-D9_nlc1h.js";import{P as S}from"./index-CJpzHRrE.js";import{l as A}from"./storybook.testing.utils-BgHZnMzD.js";import{w as W}from"./webcomponent-decorator-CriNZtyj.js";import{T as E}from"./DatePickerCalendar-ePUd64Qm.js";const{expect:a,userEvent:I,waitFor:B,within:i}=__STORYBOOK_MODULE_TEST__,C={component:o,title:"Tester/ErrorSummary",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},content:{table:{disable:!0},control:{disable:!0}},hasSpacing:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},showErrorSummary:{table:{disable:!0}},title:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}}},tags:["test"]},f=[n.jsx(o.Error,{referenceId:"id_1",children:"Husk å fylle ut type varer"},"errorSummaryError_1"),n.jsx(o.Error,{referenceId:"id_2",children:"Selger du varer og tjenester for egen regning?"},"errorSummaryError_2"),!1],l={name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getAllByRole("generic")[1];await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",showErrorSummary:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const r=i(t),e=r.getAllByRole("generic")[1],s=r.getAllByRole("generic")[2];await a(e).toHaveAttribute("id","htmlId"),await a(s).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID")}},m={name:"Default (B2, B3 delvis)",play:async({canvasElement:t})=>{const e=i(t).getAllByRole("generic")[1];await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-live","assertive"),await a(e).toHaveAttribute("aria-atomic"),await a(e).toHaveAttribute("tabIndex","-1");const s=e.querySelector("div");await a(s).not.toBeInTheDocument()}},d={name:"With Children (A1, A2, A3 delvis)",args:{showErrorSummary:!0,children:f},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getAllByRole("listitem");await a(e).toHaveLength(2)}},u={name:"With Content (A1, A5, B1)",args:{showErrorSummary:!0,title:"Inntektsmottaker inneholder 2 feil:",content:n.jsx(S,{children:A})},argTypes:{content:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-hidden","true")}},h={name:"With Children And Content (A1, A3 delvis, A5)",args:{showErrorSummary:!0,children:f,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}}},p={name:"With Children And Content Mobile",args:{showErrorSummary:!0,children:f,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},y={name:"With Children And Content Breakpoint Xs",args:{showErrorSummary:!0,children:f,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},b={name:"With TitleAs (A2)",args:{showErrorSummary:!0,titleAs:"h1",children:f},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("heading",{level:1});await a(e).toBeInTheDocument()}},k=()=>n.jsxs(n.Fragment,{children:[n.jsx(E,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{showErrorSummary:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]}),v={render:k,name:"With Input (A4)",play:async({canvasElement:t})=>{const r=i(t),e=r.getByRole("link"),s=r.getByLabelText("År");await I.click(e),await B(()=>a(s).toHaveFocus())}},D=()=>{const r=document.querySelector("errorsummary-customelement")?.shadowRoot;return n.jsxs("div",{"data-test-block":!0,children:[n.jsx(E,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{shadowRootNode:r??void 0,showErrorSummary:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]})},g={render:D,name:"With ShadowRootNode",decorators:[W],parameters:{a11y:{disable:!0},imageSnapshot:{disable:!0},customElementName:"errorsummary-customelement"},play:async({canvasElement:t})=>{const r=i(t);await a(r.queryByRole("link")).not.toBeInTheDocument();const e=t.querySelector("errorsummary-customelement");await a(e).toBeInTheDocument();const s=e?.shadowRoot&&e.shadowRoot.querySelector("a");await a(s).toBeInTheDocument(),await I.click(s);const T=e?.shadowRoot&&e.shadowRoot.querySelector("input:focus");await a(T).toBeInTheDocument()}},F=()=>{const[t,r]=x.useState({hasError:!1});return n.jsxs(n.Fragment,{children:[n.jsx(E,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{id:"errorSummary1",showErrorSummary:t.hasError,hasSpacing:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})}),n.jsx(R,{onClick:()=>{r({hasError:!t.hasError}),setTimeout(()=>{document.getElementById("errorSummary1")?.focus()},0)},children:"Send"})]})},w={render:F,name:"With Focus",play:async({canvasElement:t})=>{const r=i(t),e=r.getByRole("button");await I.click(e);const s=r.getAllByRole("generic")[4];await B(()=>a(s).toHaveFocus())}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
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
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5, B1)',
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    showErrorSummary: true
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
    const errorSummary = canvas.getAllByRole('generic')[2];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(errorSummary).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Default (B2, B3 delvis)',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute('aria-live', 'assertive');
    await expect(container).toHaveAttribute('aria-atomic');
    await expect(container).toHaveAttribute('tabIndex', '-1');
    const errorSummary = container.querySelector('div');
    await expect(errorSummary).not.toBeInTheDocument();
  }
} satisfies Story`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Children (A1, A2, A3 delvis)',
  args: {
    showErrorSummary: true,
    children: defaultChildren
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
    const listItems = canvas.getAllByRole('listitem');
    await expect(listItems).toHaveLength(2);
  }
} satisfies Story`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Content (A1, A5, B1)',
  args: {
    showErrorSummary: true,
    title: 'Inntektsmottaker inneholder 2 feil:',
    content: <Paragraph>{loremIpsum}</Paragraph>
  },
  argTypes: {
    content: {
      table: {
        disable: false
      }
    },
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
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Children And Content (A1, A3 delvis, A5)',
  args: {
    showErrorSummary: true,
    children: defaultChildren,
    content: <Paragraph>{loremIpsum}</Paragraph>
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    content: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Children And Content Mobile',
  args: {
    showErrorSummary: true,
    children: defaultChildren,
    content: <Paragraph>{loremIpsum}</Paragraph>
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    content: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Children And Content Breakpoint Xs',
  args: {
    showErrorSummary: true,
    children: defaultChildren,
    content: <Paragraph>{loremIpsum}</Paragraph>
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    content: {
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
} satisfies Story`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With TitleAs (A2)',
  args: {
    showErrorSummary: true,
    titleAs: 'h1',
    children: defaultChildren
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
    const heading = canvas.getByRole('heading', {
      level: 1
    });
    await expect(heading).toBeInTheDocument();
  }
} satisfies Story`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: TemplateWithInput,
  name: 'With Input (A4)',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    const input = canvas.getByLabelText('År');
    await userEvent.click(link);
    await waitFor(() => expect(input).toHaveFocus());
  }
} satisfies Story`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: TemplateWithShadowRootNode,
  name: 'With ShadowRootNode',
  decorators: [webComponent],
  parameters: {
    a11y: {
      //Stilen som slår av transitions og animations finnes ikke på innsiden av shadowDom
      //Slår derfor av denne slik at vi ikke får false positives
      disable: true
    },
    imageSnapshot: {
      disable: true
    },
    customElementName: 'errorsummary-customelement'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    // errorLink finnes ikke utenfor shadowDom
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument();
    const customElement = canvasElement.querySelector(\`errorsummary-customelement\`);
    await expect(customElement).toBeInTheDocument();
    const errorLink = customElement?.shadowRoot && customElement.shadowRoot.querySelector('a');
    await expect(errorLink).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(errorLink!);
    const input = customElement?.shadowRoot && customElement.shadowRoot.querySelector('input:focus');
    await expect(input).toBeInTheDocument();
  }
} satisfies Story`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: TemplateWithFocus,
  name: 'With Focus',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const errorSummary = canvas.getAllByRole('generic')[4];
    await waitFor(() => expect(errorSummary).toHaveFocus());
  }
} satisfies Story`,...w.parameters?.docs?.source}}};const H=["WithRef","WithAttributes","Defaults","WithChildren","WithContent","WithChildrenAndContent","WithChildrenAndContentMobile","WithChildrenAndContentBreakpointXs","WithTitleAs","WithInput","WithShadowRootNode","WithFocus"],O=Object.freeze(Object.defineProperty({__proto__:null,Defaults:m,WithAttributes:c,WithChildren:d,WithChildrenAndContent:h,WithChildrenAndContentBreakpointXs:y,WithChildrenAndContentMobile:p,WithContent:u,WithFocus:w,WithInput:v,WithRef:l,WithShadowRootNode:g,WithTitleAs:b,__namedExportsOrder:H,default:C},Symbol.toStringTag,{value:"Module"}));export{O as E};
//# sourceMappingURL=ErrorSummary.test.stories-D9okX7GY.js.map
