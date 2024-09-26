import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{S as T}from"./index-C4S6bjjo.js";import{d as X,E as K}from"./index-e2J6NVvS.js";import{w as l,e as n,u as Y}from"./index-hUG6DWTw.js";import{w as c}from"./storybook.testing.utils-CMs160i9.js";import{w as Z}from"./webcomponent-decorator-D_ZX8JPI.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-nyVGXzax.js";import"./index-DnZXMkM7.js";import"./client-BCxScYCN.js";import"./index-B8XB3FuZ.js";const ee="Til toppen",he={component:T,title:"Tester/ScrollToTopButton",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},visibilityThreshold:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},children:{table:{disable:!0}}},parameters:{backgrounds:{default:"grey"}}},r=e=>o.jsx("div",{className:"height100vh",children:o.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[o.jsx(K,{}),o.jsx(T,{...e})]})}),s={visibilityThreshold:0},m={render:r,name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e);n(a.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={render:r,name:"With Attributes(FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e).getByRole("button");await n(t).toHaveAttribute("id","htmlId"),await n(t).toHaveAttribute("lang","nb"),await n(t).toHaveAttribute("data-testid","123ID");const i=e.querySelector(`${c} > div > main > div:nth-child(2)`);await n(i).toHaveClass("dummyClassname")}},u={render:r,name:"With Custom ClassNames (FA3)",args:{...s,classNames:{container:"dummyClassname",button:"dummyClassname",iconContainer:"dummyClassname",icon:"dummyClassname",label:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e),t=e.querySelector(`${c} > div > main > div:nth-child(2)`),i=a.getByRole("button"),w=i.querySelector("div"),Q=a.getByRole("img",{hidden:!0}),U=a.getByText(X.t("ds_buttons:scrolltotopbutton.Title"));await n(t).toHaveClass("dummyClassname"),await n(i).toHaveClass("dummyClassname"),await n(w).toHaveClass("dummyClassname"),await n(Q).toHaveClass("dummyClassname"),await n(U).toHaveClass("dummyClassname")}},p={render:r,name:"Defaults (A1, A3, B4)",args:{...s},argTypes:{visibilityThreshold:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${c} > div > main > div:nth-child(2) > button`,focus:`${c} > div > main > div:nth-child(2) > button`,click:`${c} > div > main > div:nth-child(2) > button`}},play:async({canvasElement:e})=>{const a=l(e),t=a.getByText(ee);await n(t).toBeInTheDocument(),await n(a.getByRole("button")).toHaveAttribute("type","button")}},h={render:r,name:"With Children (A2)",args:{...s,children:"dummy string"},argTypes:{children:{table:{disable:!1}}},play:async({args:e,canvasElement:a})=>{const t=l(a);await n(t.getByText(e.children??"")).toBeInTheDocument()}},b={render:r,name:"With Small Screen (A5)",args:{...s},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},y={render:r,name:"With Wide Screen (A6)",args:{...s},parameters:{viewport:{defaultViewport:"--breakpoint-xl"}}},v={render:r,name:"With VisibilityThreshold and Scrolling (A7, A8)",args:{...s,visibilityThreshold:3},argTypes:{visibilityThreshold:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xl"},imageSnapshot:{scroll:{yPixels:10}}}},te=e=>{const a=document.querySelector("scrolltotop-customelement"),t=a==null?void 0:a.shadowRoot;return o.jsx("div",{className:"height100vh",children:o.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[o.jsx(K,{}),o.jsx(T,{...e,shadowRootNode:t??void 0})]})})},g={render:te,name:"With ShadowDom (B4)",args:{...s},decorators:[Z],parameters:{imageSnapshot:{disable:!0},customElementName:"scrolltotop-customelement"},play:async({canvasElement:e})=>{const a=l(e);await n(a.queryByRole("button")).not.toBeInTheDocument();const t=e.querySelector("scrolltotop-customelement");await n(t).toBeInTheDocument();const i=(t==null?void 0:t.shadowRoot)&&t.shadowRoot.querySelector("button");await n(i).toBeInTheDocument(),await Y.click(i);const w=(t==null?void 0:t.shadowRoot)&&t.shadowRoot.querySelector("main:focus");await n(w).toBeInTheDocument()}};var f,S,C;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var x,B,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvasElement.querySelector(\`\${wrapper} > div > main > div:nth-child(2)\`);
    await expect(container).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(A=(B=d.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var W,R,I;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    /* eslint-disable testing-library/no-node-access */
    const container = canvasElement.querySelector(\`\${wrapper} > div > main > div:nth-child(2)\`);
    const button = canvas.getByRole('button');
    const iconContainer = button.querySelector('div');
    /* eslint-disable testing-library/no-node-access */
    const icon = canvas.getByRole('img', {
      hidden: true
    });
    const label = canvas.getByText(dsI18n.t('ds_buttons:scrolltotopbutton.Title'));
    await expect(container).toHaveClass('dummyClassname');
    await expect(button).toHaveClass('dummyClassname');
    await expect(iconContainer).toHaveClass('dummyClassname');
    await expect(icon).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
  }
} satisfies Story`,...(I=(R=u.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var D,E,H;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var N,q,k;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(k=(q=h.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var F,j,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(V=(j=b.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var $,P,_;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(P=y.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var M,L,O;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(O=(L=v.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var z,G,J;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const be=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithChildren","WithMobileScreen","WithWideScreen","WithVisibilityThreshold","WithShadowDom"];export{p as Defaults,d as WithAttributes,h as WithChildren,u as WithCustomClassNames,b as WithMobileScreen,m as WithRef,g as WithShadowDom,v as WithVisibilityThreshold,y as WithWideScreen,be as __namedExportsOrder,he as default};
//# sourceMappingURL=ScrollToTopButton.test.stories-CTa5uHSV.js.map
