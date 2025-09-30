import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as ce}from"./index-D_ouKaeX.js";import{w as i,e as a,u as E,b as ie}from"./index-DIxTUSTt.js";import{B as me}from"./index-DfnG5Ebn.js";import{E as o}from"./index-DkXzVmhj.js";import{P as S}from"./index-B0Glj4sP.js";import{l as A}from"./storybook.testing.utils-CMs160i9.js";import{w as de}from"./webcomponent-decorator-CC8-LmJl.js";import{T as I}from"./DatePickerCalendar-PuG5IodJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGk5cNE3.js";import"./index-DAV9Xejq.js";import"./index-uxUkjR_c.js";import"./Help-ChcS7hng.js";import"./LabelWithHelp-B8AAT5XN.js";import"./index-Bid14VJj.js";import"./index-sjPb88pE.js";import"./client-DJ5fKs0O.js";import"./index-D9u29hOa.js";const He={component:o,title:"Tester/ErrorSummary/ErrorSummary",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},content:{table:{disable:!0},control:{disable:!0}},hasSpacing:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},showErrorSummary:{table:{disable:!0}},title:{table:{disable:!0}},titleAs:{control:"inline-radio",table:{disable:!0}}}},l=[n.jsx(o.Error,{referenceId:"id_1",children:"Husk å fylle ut type varer"},"errorSummaryError_1"),n.jsx(o.Error,{referenceId:"id_2",children:"Selger du varer og tjenester for egen regning?"},"errorSummaryError_2"),!1],c={name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t).getAllByRole("generic")[1];await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",showErrorSummary:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const r=i(t),e=r.getAllByRole("generic")[1],s=r.getAllByRole("generic")[2];await a(e).toHaveAttribute("id","htmlId"),await a(s).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID")}},d={name:"Default (B2, B3 delvis)",play:async({canvasElement:t})=>{const e=i(t).getAllByRole("generic")[1];await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-live","assertive"),await a(e).toHaveAttribute("aria-atomic"),await a(e).toHaveAttribute("tabIndex","-1");const s=e.querySelector("div");await a(s).not.toBeInTheDocument()}},u={name:"With Children (A1, A2, A3 delvis)",args:{showErrorSummary:!0,children:l},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getAllByRole("listitem");await a(e).toHaveLength(2)}},h={name:"With Content (A1, A5, B1)",args:{showErrorSummary:!0,title:"Inntektsmottaker inneholder 2 feil:",content:n.jsx(S,{children:A})},argTypes:{content:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("img",{hidden:!0});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("aria-hidden","true")}},p={name:"With Children And Content (A1, A3 delvis, A5)",args:{showErrorSummary:!0,children:l,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}}},y={name:"With Children And Content Mobile",args:{showErrorSummary:!0,children:l,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},b={name:"With Children And Content Breakpoint Xs",args:{showErrorSummary:!0,children:l,content:n.jsx(S,{children:A})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},v={name:"With TitleAs (A2)",args:{showErrorSummary:!0,titleAs:"h1",children:l},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t).getByRole("heading",{level:1});await a(e).toBeInTheDocument()}},ue=()=>n.jsxs(n.Fragment,{children:[n.jsx(I,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{showErrorSummary:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]}),g={render:ue,name:"With Input (A4)",play:async({canvasElement:t})=>{const r=i(t),e=r.getByRole("link"),s=r.getByLabelText("År");await E.click(e),await ie(()=>a(s).toHaveFocus())}},he=()=>{const t=document.querySelector("errorsummary-customelement"),r=t==null?void 0:t.shadowRoot;return n.jsxs("div",{"data-test-block":!0,children:[n.jsx(I,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{shadowRootNode:r??void 0,showErrorSummary:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]})},w={render:he,name:"With ShadowRootNode",decorators:[de],parameters:{a11y:{disable:!0},imageSnapshot:{disable:!0},customElementName:"errorsummary-customelement"},play:async({canvasElement:t})=>{const r=i(t);await a(r.queryByRole("link")).not.toBeInTheDocument();const e=t.querySelector("errorsummary-customelement");await a(e).toBeInTheDocument();const s=(e==null?void 0:e.shadowRoot)&&e.shadowRoot.querySelector("a");await a(s).toBeInTheDocument(),await E.click(s);const le=(e==null?void 0:e.shadowRoot)&&e.shadowRoot.querySelector("input:focus");await a(le).toBeInTheDocument()}},pe=()=>{const[t,r]=ce.useState({hasError:!1});return n.jsxs(n.Fragment,{children:[n.jsx(I,{id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasSpacing:!0,required:!0}),n.jsx(o,{id:"errorSummary1",showErrorSummary:t.hasError,hasSpacing:!0,children:n.jsx(o.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})}),n.jsx(me,{onClick:()=>{r({hasError:!t.hasError}),setTimeout(()=>{const e=document.getElementById("errorSummary1");e==null||e.focus()},0)},children:"Send"})]})},f={render:pe,name:"With Focus",play:async({canvasElement:t})=>{const r=i(t),e=r.getByRole("button");await E.click(e);const s=r.getAllByRole("generic")[4];await ie(()=>a(s).toHaveFocus())}};var B,x,T;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(x=c.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var W,R,C;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(R=m.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var k,F,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var H,j,P;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(P=(j=u.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var N,q,_;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(q=h.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var L,M,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var X,O,z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(O=y.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,ae;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,se,oe;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const je=["WithRef","WithAttributes","Defaults","WithChildren","WithContent","WithChildrenAndContent","WithChildrenAndContentMobile","WithChildrenAndContentBreakpointXs","WithTitleAs","WithInput","WithShadowRootNode","WithFocus"];export{d as Defaults,m as WithAttributes,u as WithChildren,p as WithChildrenAndContent,b as WithChildrenAndContentBreakpointXs,y as WithChildrenAndContentMobile,h as WithContent,f as WithFocus,g as WithInput,c as WithRef,w as WithShadowRootNode,v as WithTitleAs,je as __namedExportsOrder,He as default};
//# sourceMappingURL=ErrorSummary.test.stories-CJ1H67cf.js.map
