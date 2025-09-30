import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{w as l,e as t,u as Z}from"./index-DIxTUSTt.js";import{S as w,g as ne}from"./index-DfnG5Ebn.js";import{E as S}from"./index-CGk5cNE3.js";import{w as c}from"./storybook.testing.utils-CMs160i9.js";import{w as se}from"./webcomponent-decorator-CC8-LmJl.js";import"./index-DAV9Xejq.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-uxUkjR_c.js";import"./client-DJ5fKs0O.js";import"./index-D9u29hOa.js";const ee="Til toppen",ge={component:w,title:"Tester/ScrollToTopButton",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},scrollToMain:{table:{disable:!0}},visibilityThreshold:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},children:{table:{disable:!0}}},parameters:{backgrounds:{default:"grey"}}},r=e=>s.jsx("div",{className:"height100vh",children:s.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[s.jsx(S,{}),s.jsx(w,{...e})]})}),o={visibilityThreshold:0},m={render:r,name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=l(e);t(n.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={render:r,name:"With Attributes(FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button");await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID");const i=e.querySelector(`${c} > div > main > div:nth-child(2)`);await t(i).toHaveClass("dummyClassname")}},u={render:r,name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",button:"dummyClassname",iconContainer:"dummyClassname",icon:"dummyClassname",label:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=e.querySelector(`${c} > div > main > div:nth-child(2)`),i=n.getByRole("button"),f=i.querySelector("div"),ae=n.getByRole("img",{hidden:!0}),te=n.getByText(ne());await t(a).toHaveClass("dummyClassname"),await t(i).toHaveClass("dummyClassname"),await t(f).toHaveClass("dummyClassname"),await t(ae).toHaveClass("dummyClassname"),await t(te).toHaveClass("dummyClassname")}},p={render:r,name:"Defaults (A1, A3, B4)",args:{...o},argTypes:{visibilityThreshold:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${c} > div > main > div:nth-child(2) > button`,focus:`${c} > div > main > div:nth-child(2) > button`,click:`${c} > div > main > div:nth-child(2) > button`}},play:async({canvasElement:e})=>{const n=l(e),a=n.getByText(ee);await t(a).toBeInTheDocument(),await t(n.getByRole("button")).toHaveAttribute("type","button")}},h={render:r,name:"With Children (A2)",args:{...o,children:"dummy string"},argTypes:{children:{table:{disable:!1}}},play:async({args:e,canvasElement:n})=>{const a=l(n);await t(a.getByText(e.children??"")).toBeInTheDocument()}},b={render:r,name:"With Small Screen (A5)",args:{...o},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},y={render:r,name:"With Wide Screen (A6)",args:{...o},parameters:{viewport:{defaultViewport:"--breakpoint-xl"}}},v={render:r,name:"With VisibilityThreshold and Scrolling (A7, A8)",args:{...o,visibilityThreshold:3},argTypes:{visibilityThreshold:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xl"},imageSnapshot:{scroll:{yPixels:10}}}},oe=e=>{const n=document.querySelector("scrolltotop-customelement"),a=n==null?void 0:n.shadowRoot;return s.jsx("div",{className:"height100vh",children:s.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[s.jsx(S,{}),s.jsx(w,{...e,shadowRootNode:a??void 0})]})})},T={render:oe,name:"With ShadowDom (B4)",args:{...o},decorators:[se],parameters:{imageSnapshot:{disable:!0},customElementName:"scrolltotop-customelement"},play:async({canvasElement:e})=>{const n=l(e);await t(n.queryByRole("button")).not.toBeInTheDocument();const a=e.querySelector("scrolltotop-customelement");await t(a).toBeInTheDocument();const i=(a==null?void 0:a.shadowRoot)&&a.shadowRoot.querySelector("button");await t(i).toBeInTheDocument(),await Z.click(i);const f=(a==null?void 0:a.shadowRoot)&&a.shadowRoot.querySelector("main:focus");await t(f).toBeInTheDocument()}},re=e=>s.jsxs("div",{className:"height200vh",children:[s.jsx("div",{className:"scrollToTopMainPusher",children:"Mainpusher"}),s.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[s.jsx(S,{}),s.jsx(w,{...e})]})]}),g={render:re,name:"Not Scroll To Main",args:{...o,scrollToMain:!1},argTypes:{scrollToMain:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("button",{name:ee});await t(a).toBeInTheDocument(),await Z.click(a),await t(e.querySelector("main")).toHaveFocus()}};var x,B,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLButtonElement | null): void => {
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
    expect(canvas.getByRole('button')).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var A,W,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const scrollToTopButton = canvas.getByRole('button');
    await expect(scrollToTopButton).toHaveAttribute('id', 'htmlId');
    await expect(scrollToTopButton).toHaveAttribute('lang', 'nb');
    await expect(scrollToTopButton).toHaveAttribute('data-testid', '123ID');
    const container = canvasElement.querySelector(\`\${wrapper} > div > main > div:nth-child(2)\`);
    await expect(container).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(R=(W=d.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var D,I,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      button: 'dummyClassname',
      iconContainer: 'dummyClassname',
      icon: 'dummyClassname',
      label: 'dummyClassname'
    }
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvasElement.querySelector(\`\${wrapper} > div > main > div:nth-child(2)\`);
    const button = canvas.getByRole('button');
    const iconContainer = button.querySelector('div');
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    const label = canvas.getByText(getScrollToTopButtonTextDefault());
    await expect(container).toHaveClass('dummyClassname');
    await expect(button).toHaveClass('dummyClassname');
    await expect(iconContainer).toHaveClass('dummyClassname');
    await expect(icon).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var E,H,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (A1, A3, B4)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    visibilityThreshold: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > div > main > div:nth-child(2) > button\`,
      focus: \`\${wrapper} > div > main > div:nth-child(2) > button\`,
      click: \`\${wrapper} > div > main > div:nth-child(2) > button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const scrollToTopButton = canvas.getByText(defaultButtonText);
    await expect(scrollToTopButton).toBeInTheDocument();
    await expect(canvas.getByRole('button')).toHaveAttribute('type', 'button');
  }
} satisfies Story`,...(F=(H=p.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var q,M,j;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  name: 'With Children (A2)',
  args: {
    ...defaultArgs,
    children: 'dummy string'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.children ?? '')).toBeInTheDocument();
  }
} satisfies Story`,...(j=(M=h.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var k,P,V;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  name: 'With Small Screen (A5)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(V=(P=b.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var $,L,_;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  name: 'With Wide Screen (A6)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xl'
    }
  }
} satisfies Story`,...(_=(L=y.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,z,G;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  name: 'With VisibilityThreshold and Scrolling (A7, A8)',
  args: {
    ...defaultArgs,
    visibilityThreshold: 3
  },
  argTypes: {
    visibilityThreshold: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xl'
    },
    imageSnapshot: {
      scroll: {
        yPixels: 10
      }
    }
  }
} satisfies Story`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: TemplateWithShadowDom,
  name: 'With ShadowDom (B4)',
  args: {
    ...defaultArgs
  },
  decorators: [webComponent],
  parameters: {
    imageSnapshot: {
      disable: true
    },
    customElementName: 'scrolltotop-customelement'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    //button finnes ikke utenfor shadowDom
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
    const customElement = canvasElement.querySelector(\`scrolltotop-customelement\`);
    await expect(customElement).toBeInTheDocument();
    const button = customElement?.shadowRoot && customElement.shadowRoot.querySelector('button');
    await expect(button).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(button!);
    const main = customElement?.shadowRoot && customElement.shadowRoot.querySelector('main:focus');
    await expect(main).toBeInTheDocument();
  }
} satisfies Story`,...(Q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: TemplateMainFarDown,
  name: 'Not Scroll To Main',
  args: {
    ...defaultArgs,
    scrollToMain: false
  },
  argTypes: {
    scrollToMain: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const scrollToTopButton = canvas.getByRole('button', {
      name: defaultButtonText
    });
    await expect(scrollToTopButton).toBeInTheDocument();
    await userEvent.click(scrollToTopButton);
    await expect(canvasElement.querySelector('main')).toHaveFocus();
  }
} satisfies Story`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const we=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithChildren","WithMobileScreen","WithWideScreen","WithVisibilityThreshold","WithShadowDom","WithNotScrollToMain"];export{p as Defaults,d as WithAttributes,h as WithChildren,u as WithCustomClassNames,b as WithMobileScreen,g as WithNotScrollToMain,m as WithRef,T as WithShadowDom,v as WithVisibilityThreshold,y as WithWideScreen,we as __namedExportsOrder,ge as default};
//# sourceMappingURL=ScrollToTopButton.test.stories-ZHhhqCdA.js.map
