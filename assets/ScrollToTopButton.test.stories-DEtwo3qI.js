import{j as s,E as S}from"./iframe-s2_bNgHU.js";import{S as T,g as R}from"./index-Ck1G954W.js";import{w as B}from"./storybook.testing.utils-BgHZnMzD.js";import{w as W}from"./webcomponent-decorator-CriNZtyj.js";const{expect:t,userEvent:f,within:r}=__STORYBOOK_MODULE_TEST__,x="Til toppen",H={component:T,title:"Tester/ScrollToTopButton",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},classNames:{table:{disable:!0}},scrollToMain:{table:{disable:!0}},visibilityThreshold:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},children:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}},globals:{backgrounds:{value:"grey"}}},l=e=>s.jsxs("div",{className:"height120vh",children:[s.jsx(S,{}),s.jsx(T,{...e})]}),o={visibilityThreshold:0},c={render:l,name:"With Ref (FA1)",args:{...o,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=r(e);t(n.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={render:l,name:"With Attributes(FA2-5)",args:{...o,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("button");await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID");const i=e.querySelector(`${B} > div > div:nth-child(2)`);await t(i).toHaveClass("dummyClassname")}},d={render:l,name:"With Custom ClassNames (FA3)",args:{...o,classNames:{container:"dummyClassname",button:"dummyClassname",iconContainer:"dummyClassname",icon:"dummyClassname",label:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=r(e),a=e.querySelector(`${B} > div > div:nth-child(2)`),i=n.getByRole("button"),w=i.querySelector("div"),C=n.getByRole("img",{hidden:!0}),A=n.getByText(R());await t(a).toHaveClass("dummyClassname"),await t(i).toHaveClass("dummyClassname"),await t(w).toHaveClass("dummyClassname"),await t(C).toHaveClass("dummyClassname"),await t(A).toHaveClass("dummyClassname")}},u={render:l,name:"Defaults (A1, A3, B4)",args:{...o},argTypes:{visibilityThreshold:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByText(x);await t(a).toBeInTheDocument(),await t(n.getByRole("button")).toHaveAttribute("type","button")}},p={render:l,name:"With Children (A2)",args:{...o,children:"dummy string"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:n})=>{const a=r(n);await t(a.getByText(e.children??"")).toBeInTheDocument()}},h={render:l,name:"With Small Screen (A5)",args:{...o},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{viewport:{value:"--breakpoint-xs"}}},b={render:l,name:"With Wide Screen (A6)",args:{...o},globals:{viewport:{value:"--breakpoint-xl"}}},y={render:l,name:"With VisibilityThreshold and Scrolling (A7, A8)",args:{...o,visibilityThreshold:3},argTypes:{visibilityThreshold:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},viewport:{options:{maxHeight:{maxHeight:{name:"maxHeight",styles:{height:"500px"}}}}},chromatic:{modes:{maxHeight:{viewport:"maxHeight"}}}},play:async({canvasElement:e})=>{const n=r(e),a=n.getByRole("button",{hidden:!0});await t(a).not.toBeVisible(),window.scrollTo(0,10),await t(await n.findByRole("button")).toBeVisible(),await t(a).toBeInTheDocument(),await f.click(a),await t(e.querySelector("main")).toHaveFocus(),await t(window.scrollY).toBe(0)}},D=e=>{const a=document.querySelector("scrolltotop-customelement")?.shadowRoot;return s.jsxs("div",{className:"height100vh",children:[s.jsx(S,{}),s.jsx(T,{...e,shadowRootNode:a??void 0})]})},g={render:D,name:"With ShadowDom (B4)",args:{...o},decorators:[W],parameters:{imageSnapshot:{disableSnapshot:!0},customElementName:"scrolltotop-customelement"},play:async({canvasElement:e})=>{const n=r(e);await t(n.queryByRole("button")).not.toBeInTheDocument();const a=e.querySelector("scrolltotop-customelement");await t(a).toBeInTheDocument();const i=a?.shadowRoot&&a.shadowRoot.querySelector("button");await t(i).toBeInTheDocument(),await f.click(i);const w=a?.shadowRoot&&a.shadowRoot.querySelector("main:focus");await t(w).toBeInTheDocument()}},E=e=>s.jsxs("div",{className:"height200vh",children:[s.jsx("div",{className:"scrollToTopMainPusher",children:"Mainpusher"}),s.jsx(S,{}),s.jsx(T,{...e})]}),v={render:E,name:"Not Scroll To Main",args:{...o,scrollToMain:!1},argTypes:{scrollToMain:{table:{disable:!1}}},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=r(e).getByRole("button",{name:x});await t(a).toBeInTheDocument(),await f.click(a),await t(e.querySelector("main")).toHaveFocus(),await t(window.scrollY).toBe(0)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    const container = canvasElement.querySelector(\`\${wrapper} > div > div:nth-child(2)\`);
    await expect(container).toHaveClass('dummyClassname');
  }
} satisfies Story`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const container = canvasElement.querySelector(\`\${wrapper} > div > div:nth-child(2)\`);
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
} satisfies Story`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Small Screen (A5)',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};const I=["WithRef","WithAttributes","WithCustomClassNames","Defaults","WithChildren","WithMobileScreen","WithWideScreen","WithVisibilityThreshold","WithShadowDom","WithNotScrollToMain"],j=Object.freeze(Object.defineProperty({__proto__:null,Defaults:u,WithAttributes:m,WithChildren:p,WithCustomClassNames:d,WithMobileScreen:h,WithNotScrollToMain:v,WithRef:c,WithShadowDom:g,WithVisibilityThreshold:y,WithWideScreen:b,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{j as S};
//# sourceMappingURL=ScrollToTopButton.test.stories-DEtwo3qI.js.map
