import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import"./index-e2J6NVvS.js";import{E as i}from"./index-CJloTDHB.js";import{P as f}from"./index-BpsKvWdW.js";import{w as o,e as n,u as te,c as re}from"./index-hUG6DWTw.js";import{l as A}from"./storybook.testing.utils-CMs160i9.js";import{w as se}from"./webcomponent-decorator-D_ZX8JPI.js";import{h as oe}from"./base-props.types-BkCKQDF7.js";import{T as ne}from"./DatePickerCalendar-Bhlu0kBA.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Help-Bjo-3yoG.js";import"./index-C4S6bjjo.js";import"./index-nyVGXzax.js";import"./index-DnZXMkM7.js";import"./LabelWithHelp-agrIQouL.js";import"./index-DJw2LVW1.js";import"./client-BCxScYCN.js";import"./index-B8XB3FuZ.js";const Te={component:i,title:"Tester/ErrorSummary/ErrorSummary",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},content:{table:{disable:!0},control:{disable:!0}},shadowRootNode:{table:{disable:!0}},showErrorSummary:{table:{disable:!0}},title:{table:{disable:!0}},titleAs:{options:[...oe],control:"inline-radio",table:{disable:!0}}}},l=[a.jsx(i.Error,{referenceId:"id_1",children:"Husk å fylle ut type varer"},"errorSummaryError_1"),a.jsx(i.Error,{referenceId:"id_2",children:"Selger du varer og tjenester for egen regning?"},"errorSummaryError_2"),!1],c={name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=o(t).getAllByRole("generic")[1];await n(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",showErrorSummary:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const r=o(t),e=r.getAllByRole("generic")[1],s=r.getAllByRole("generic")[2];await n(e).toHaveAttribute("id","htmlId"),await n(s).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID")}},d={name:"Default (B2, B3 delvis)",play:async({canvasElement:t})=>{const e=o(t).getAllByRole("generic")[1];await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-live","assertive"),await n(e).toHaveAttribute("aria-atomic"),await n(e).toHaveAttribute("tabIndex","-1");const s=e.querySelector("div");await n(s).not.toBeInTheDocument()}},u={name:"With Children (A1, A2, A3 delvis)",args:{showErrorSummary:!0,children:l},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getAllByRole("listitem");await n(e).toHaveLength(2)}},h={name:"With Content (A1, A5, B1)",args:{showErrorSummary:!0,title:"Inntektsmottaker inneholder 2 feil:",content:a.jsx(f,{children:A})},argTypes:{content:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("img",{hidden:!0});await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("aria-hidden","true")}},p={name:"With Children And Content (A1, A3 delvis, A5)",args:{showErrorSummary:!0,children:l,content:a.jsx(f,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}}},b={name:"With Children And Content Mobile",args:{showErrorSummary:!0,children:l,content:a.jsx(f,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},y={name:"With Children And Content Breakpoint Xs",args:{showErrorSummary:!0,children:l,content:a.jsx(f,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},g={name:"With TitleAs (A2)",args:{showErrorSummary:!0,titleAs:"h1",children:l},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=o(t).getByRole("heading",{level:1});await n(e).toBeInTheDocument()}},ie=()=>a.jsxs(a.Fragment,{children:[a.jsx(ne,{className:"bottomSpacingXL",id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",required:!0}),a.jsx(i,{showErrorSummary:!0,children:a.jsx(i.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]}),v={render:ie,name:"With Input (A4)",play:async({canvasElement:t})=>{const r=o(t),e=r.getByRole("link"),s=r.getByLabelText("År");await te.click(e),await re(()=>n(s).toHaveFocus())}},le=()=>{const t=document.querySelector("errorsummary-customelement"),r=t==null?void 0:t.shadowRoot;return a.jsxs("div",{"data-test-block":!0,children:[a.jsx(ne,{className:"bottomSpacingXL",id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",required:!0}),a.jsx(i,{shadowRootNode:r??void 0,showErrorSummary:!0,children:a.jsx(i.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]})},w={render:le,name:"With ShadowRootNode",decorators:[se],parameters:{a11y:{disable:!0},imageSnapshot:{disable:!0},customElementName:"errorsummary-customelement"},play:async({canvasElement:t})=>{const r=o(t);await n(r.queryByRole("link")).not.toBeInTheDocument();const e=t.querySelector("errorsummary-customelement");await n(e).toBeInTheDocument();const s=(e==null?void 0:e.shadowRoot)&&e.shadowRoot.querySelector("a");await n(s).toBeInTheDocument(),await te.click(s);const ae=(e==null?void 0:e.shadowRoot)&&e.shadowRoot.querySelector("input:focus");await n(ae).toBeInTheDocument()}};var S,E,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(E=c.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,B,C;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var T,R,W;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const errorSummary = container.querySelector('div');
    await expect(errorSummary).not.toBeInTheDocument();
  }
} satisfies Story`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var k,D,H;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(D=u.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var F,P,j;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(P=h.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,q,L;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(q=p.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var _,M,X;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--mobile'
    }
  }
} satisfies Story`,...(X=(M=b.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var V,O,z;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(z=(O=y.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const customElement = canvasElement.querySelector(\`errorsummary-customelement\`);
    await expect(customElement).toBeInTheDocument();
    const errorLink =
    // eslint-disable-next-line testing-library/no-node-access
    customElement?.shadowRoot && customElement.shadowRoot.querySelector('a');
    await expect(errorLink).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(errorLink!);
    const input = customElement?.shadowRoot &&
    // eslint-disable-next-line testing-library/no-node-access
    customElement.shadowRoot.querySelector('input:focus');
    await expect(input).toBeInTheDocument();
  }
} satisfies Story`,...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Re=["WithRef","WithAttributes","Defaults","WithChildren","WithContent","WithChildrenAndContent","WithChildrenAndContentMobile","WithChildrenAndContentBreakpointXs","WithTitleAs","WithInput","WithShadowRootNode"];export{d as Defaults,m as WithAttributes,u as WithChildren,p as WithChildrenAndContent,y as WithChildrenAndContentBreakpointXs,b as WithChildrenAndContentMobile,h as WithContent,v as WithInput,c as WithRef,w as WithShadowRootNode,g as WithTitleAs,Re as __namedExportsOrder,Te as default};
//# sourceMappingURL=ErrorSummary.test.stories-YZfsIBX3.js.map
