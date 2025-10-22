import{j as s,E as S}from"./iframe-BoxHncFg.js";import{S as v,g as ne}from"./index-DyY5joHW.js";import{w as Z}from"./storybook.testing.utils-CMs160i9.js";import{w as se}from"./webcomponent-decorator-Dm3T5iLt.js";const{expect:t,userEvent:f,within:r}=__STORYBOOK_MODULE_TEST__,ee="Til toppen",oe={component:v,title:"Tester/ScrollToTopButton",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},scrollToMain:{table:{disable:!0}},visibilityThreshold:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},children:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}},globals:{backgrounds:{value:"grey"}}},i=e=>s.jsx("div",{className:"height120vh",children:s.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[s.jsx(S,{}),s.jsx(v,{...e})]})}),o={visibilityThreshold:0},c={render:i,name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=r(e);t(n.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={render:i,name:"With Attributes(FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("button");await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID");const l=e.querySelector(`${Z} > div > main > div:nth-child(2)`);await t(l).toHaveClass("dummyClassname")}},d={render:i,name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",button:"dummyClassname",iconContainer:"dummyClassname",icon:"dummyClassname",label:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=r(e),a=e.querySelector(`${Z} > div > main > div:nth-child(2)`),l=n.getByRole("button"),w=l.querySelector("div"),ae=n.getByRole("img",{hidden:!0}),te=n.getByText(ne());await t(a).toHaveClass("dummyClassname"),await t(l).toHaveClass("dummyClassname"),await t(w).toHaveClass("dummyClassname"),await t(ae).toHaveClass("dummyClassname"),await t(te).toHaveClass("dummyClassname")}},u={render:i,name:"Defaults (A1, A3, B4)",args:{...o},argTypes:{visibilityThreshold:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByText(ee);await t(a).toBeInTheDocument(),await t(n.getByRole("button")).toHaveAttribute("type","button")}},p={render:i,name:"With Children (A2)",args:{...o,children:"dummy string"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:n})=>{const a=r(n);await t(a.getByText(e.children??"")).toBeInTheDocument()}},h={render:i,name:"With Small Screen (A5)",args:{...o},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},globals:{viewport:{value:"--breakpoint-xs"}}},b={render:i,name:"With Wide Screen (A6)",args:{...o},globals:{viewport:{value:"--breakpoint-xl"}}},y={render:i,name:"With VisibilityThreshold and Scrolling (A7, A8)",args:{...o,visibilityThreshold:3},argTypes:{visibilityThreshold:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},viewport:{options:{maxHeight:{maxHeight:{name:"maxHeight",styles:{height:"500px"}}}}},chromatic:{modes:{maxHeight:{viewport:"maxHeight"}}}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByRole("button",{hidden:!0});await t(a).not.toBeVisible(),window.scrollTo(0,10),await t(await n.findByRole("button")).toBeVisible(),await t(a).toBeInTheDocument(),await f.click(a),await t(e.querySelector("main")).toHaveFocus(),await t(window.scrollY).toBe(0)}},re=e=>{const n=document.querySelector("scrolltotop-customelement"),a=n==null?void 0:n.shadowRoot;return s.jsx("div",{className:"height100vh",children:s.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[s.jsx(S,{}),s.jsx(v,{...e,shadowRootNode:a??void 0})]})})},T={render:re,name:"With ShadowDom (B4)",args:{...o},decorators:[se],parameters:{imageSnapshot:{disableSnapshot:!0},customElementName:"scrolltotop-customelement"},play:async({canvasElement:e})=>{const n=r(e);await t(n.queryByRole("button")).not.toBeInTheDocument();const a=e.querySelector("scrolltotop-customelement");await t(a).toBeInTheDocument();const l=(a==null?void 0:a.shadowRoot)&&a.shadowRoot.querySelector("button");await t(l).toBeInTheDocument(),await f.click(l);const w=(a==null?void 0:a.shadowRoot)&&a.shadowRoot.querySelector("main:focus");await t(w).toBeInTheDocument()}},ie=e=>s.jsxs("div",{className:"height200vh",children:[s.jsx("div",{className:"scrollToTopMainPusher",children:"Mainpusher"}),s.jsxs("main",{className:"scrollToTopContainer",tabIndex:-1,children:[s.jsx(S,{}),s.jsx(v,{...e})]})]}),g={render:ie,name:"Not Scroll To Main",args:{...o,scrollToMain:!1},argTypes:{scrollToMain:{table:{disable:!1}}},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("button",{name:ee});await t(a).toBeInTheDocument(),await f.click(a),await t(e.querySelector("main")).toHaveFocus(),await t(window.scrollY).toBe(0)}};var B,x,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var A,R,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var H,D,E;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,N,F;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const scrollToTopButton = canvas.getByText(defaultButtonText);
    await expect(scrollToTopButton).toBeInTheDocument();
    await expect(canvas.getByRole('button')).toHaveAttribute('type', 'button');
  }
} satisfies Story`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var q,M,j;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.children ?? '')).toBeInTheDocument();
  }
} satisfies Story`,...(j=(M=p.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var k,_,P;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  name: 'With Small Screen (A5)',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(P=(_=h.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var V,O,Y;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: Template,
  name: 'With Wide Screen (A6)',
  args: {
    ...defaultArgs
  },
  globals: {
    viewport: {
      value: '--breakpoint-xl'
    }
  }
} satisfies Story`,...(Y=(O=b.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var $,L,z;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    imageSnapshot: {
      disableSnapshot: true
    },
    viewport: {
      options: {
        maxHeight: {
          maxHeight: {
            name: 'maxHeight',
            styles: {
              height: '500px'
            }
          }
        }
      }
    },
    chromatic: {
      modes: {
        maxHeight: {
          viewport: 'maxHeight'
        }
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const scrollToTopButton = canvas.getByRole('button', {
      hidden: true
    });
    await expect(scrollToTopButton).not.toBeVisible();
    window.scrollTo(0, 10);
    await expect(await canvas.findByRole('button')).toBeVisible();
    await expect(scrollToTopButton).toBeInTheDocument();
    await userEvent.click(scrollToTopButton);
    await expect(canvasElement.querySelector('main')).toHaveFocus();
    await expect(window.scrollY).toBe(0);
  }
} satisfies Story`,...(z=(L=y.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var K,U,G;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: TemplateWithShadowDom,
  name: 'With ShadowDom (B4)',
  args: {
    ...defaultArgs
  },
  decorators: [webComponent],
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...(G=(U=T.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      disableSnapshot: true
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
    await expect(window.scrollY).toBe(0);
  }
} satisfies Story`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const le=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithChildren","WithMobileScreen","WithWideScreen","WithVisibilityThreshold","WithShadowDom","WithNotScrollToMain"],pe=Object.freeze(Object.defineProperty({__proto__:null,Defaults:u,WithAttributes:m,WithChildren:p,WithCustomClassNames:d,WithMobileScreen:h,WithNotScrollToMain:g,WithRef:c,WithShadowDom:T,WithVisibilityThreshold:y,WithWideScreen:b,__namedExportsOrder:le,default:oe},Symbol.toStringTag,{value:"Module"}));export{pe as S};
//# sourceMappingURL=ScrollToTopButton.test.stories-DWcWc2qU.js.map
