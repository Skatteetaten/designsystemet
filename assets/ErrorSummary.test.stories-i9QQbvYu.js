import{j as n,r as ce}from"./iframe-CdXtTKZQ.js";import{B as me}from"./index-CDWtp_lT.js";import{E as o}from"./index-CLKUz3Po.js";import{P as S}from"./index-DUrzBgqO.js";import{l as A}from"./storybook.testing.utils-BgHZnMzD.js";import{w as de}from"./webcomponent-decorator-lYdcJsLo.js";import{T as E}from"./DatePickerCalendar-ByRci1Oe.js";const{expect:a,userEvent:I,waitFor:ie,within:i}=__STORYBOOK_MODULE_TEST__,ue={component:o,title:"Tester/ErrorSummary/ErrorSummary",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},content:{table:{disable:!0},control:{disable:!0}},hasSpacing:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},showErrorSummary:{table:{disable:!0}},title:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}}},tags:["test"]},f=[n.jsx(o.Error,{referenceId:"id_1",children:"Husk å fylle ut type varer"},"errorSummaryError_1"),n.jsx(o.Error,{referenceId:"id_2",children:"Selger du varer og tjenester for egen regning?"},"errorSummaryError_2"),!1],l={name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getAllByRole("generic")[1];await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",showErrorSummary:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:t})=>{const r=i(t),e=r.getAllByRole("generic")[1],s=r.getAllByRole("generic")[2];await a(e).toHaveAttribute("id","htmlId"),await a(s).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID")}},m={name:"Default (B2, B3 delvis)",play:async({canvasElement:t})=>{const e=i(t).getAllByRole("generic")[1];await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-live","assertive"),await a(e).toHaveAttribute("aria-atomic"),await a(e).toHaveAttribute("tabIndex","-1");const s=e.querySelector("div");await a(s).not.toBeInTheDocument()}},d={name:"With Children (A1, A2, A3 delvis)",args:{showErrorSummary:!0,children:f},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getAllByRole("listitem");await a(e).toHaveLength(2)}},u={name:"With Content (A1, A5, B1)",args:{showErrorSummary:!0,title:"Inntektsmottaker inneholder 2 feil:",content:n.jsx(S,{children:A})},argTypes:{content:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-hidden","true")}},h={name:"With Children And Content (A1, A3 delvis, A5)",args:{showErrorSummary:!0,children:f,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}}},p={name:"With Children And Content Mobile",args:{showErrorSummary:!0,children:f,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},globals:{viewport:{value:"--mobile"}}},y={name:"With Children And Content Breakpoint Xs",args:{showErrorSummary:!0,children:f,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},b={name:"With TitleAs (A2)",args:{showErrorSummary:!0,titleAs:"h1",children:f},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("heading",{level:1});await a(e).toBeInTheDocument()}},he=()=>n.jsxs(n.Fragment,{children:[n.jsx(E,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{showErrorSummary:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]}),v={render:he,name:"With Input (A4)",play:async({canvasElement:t})=>{const r=i(t),e=r.getByRole("link"),s=r.getByLabelText("År");await I.click(e),await ie(()=>a(s).toHaveFocus())}},pe=()=>{const t=document.querySelector("errorsummary-customelement"),r=t==null?void 0:t.shadowRoot;return n.jsxs("div",{"data-test-block":!0,children:[n.jsx(E,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{shadowRootNode:r??void 0,showErrorSummary:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]})},g={render:pe,name:"With ShadowRootNode",decorators:[de],parameters:{a11y:{disable:!0},imageSnapshot:{disable:!0},customElementName:"errorsummary-customelement"},play:async({canvasElement:t})=>{const r=i(t);await a(r.queryByRole("link")).not.toBeInTheDocument();const e=t.querySelector("errorsummary-customelement");await a(e).toBeInTheDocument();const s=(e==null?void 0:e.shadowRoot)&&e.shadowRoot.querySelector("a");await a(s).toBeInTheDocument(),await I.click(s);const le=(e==null?void 0:e.shadowRoot)&&e.shadowRoot.querySelector("input:focus");await a(le).toBeInTheDocument()}},ye=()=>{const[t,r]=ce.useState({hasError:!1});return n.jsxs(n.Fragment,{children:[n.jsx(E,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{id:"errorSummary1",showErrorSummary:t.hasError,hasSpacing:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})}),n.jsx(me,{onClick:()=>{r({hasError:!t.hasError}),setTimeout(()=>{const e=document.getElementById("errorSummary1");e==null||e.focus()},0)},children:"Send"})]})},w={render:ye,name:"With Focus",play:async({canvasElement:t})=>{const r=i(t),e=r.getByRole("button");await I.click(e);const s=r.getAllByRole("generic")[4];await ie(()=>a(s).toHaveFocus())}};var B,T,x;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var R,W,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var k,D,F;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,j,_;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(j=d.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var P,N,q;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var L,M,O;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var X,z,K;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(z=p.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var U,Y,G;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,V;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,ae;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,se,oe;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const be=["WithRef","WithAttributes","Defaults","WithChildren","WithContent","WithChildrenAndContent","WithChildrenAndContentMobile","WithChildrenAndContentBreakpointXs","WithTitleAs","WithInput","WithShadowRootNode","WithFocus"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Defaults:m,WithAttributes:c,WithChildren:d,WithChildrenAndContent:h,WithChildrenAndContentBreakpointXs:y,WithChildrenAndContentMobile:p,WithContent:u,WithFocus:w,WithInput:v,WithRef:l,WithShadowRootNode:g,WithTitleAs:b,__namedExportsOrder:be,default:ue},Symbol.toStringTag,{value:"Module"}));export{Ie as E};
//# sourceMappingURL=ErrorSummary.test.stories-i9QQbvYu.js.map
