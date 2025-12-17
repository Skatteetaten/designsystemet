import{j as i,d as v}from"./iframe-VHQh6taY.js";import{T as h}from"./TopBannerSkipLink-Br1ef_2-.js";import{w}from"./webcomponent-decorator-CkCEOQby.js";const{expect:a,fireEvent:b,userEvent:S,within:o}=__STORYBOOK_MODULE_TEST__,T={component:h,title:"Tester/TopBannerSkipLink (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},target:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},g="ds_layout:topbanner.SkipLinkText",u={},r={name:"With Ref (FA1)",args:{ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const e=o(n).getByRole("link");await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:n})=>{const e=o(n).getByRole("link");await a(e).toHaveAttribute("id","htmlId"),await a(e).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID"),e.focus()}},c={name:"Defaults (B2)",args:{...u},parameters:{imageSnapshot:{pseudoStates:["focus-visible"]}},play:async({canvasElement:n})=>{const e=o(n).getByRole("link",{name:v.t(g)});a(e).toBeInTheDocument(),a(e.tagName).toBe("A")}},k="hovedinnhold",y=n=>i.jsxs(i.Fragment,{children:[i.jsx(h,{...n}),i.jsx("main",{id:k,children:"Hovedinnholdet på siden"})]}),m={render:y,name:"With Target And Children (A3 delvis)",args:{...u,target:`#${k}`,children:"Snarvei til hovedinnhold"},argTypes:{target:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const t=o(n),e=t.getByRole("link",{name:"Snarvei til hovedinnhold"});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("href",`#${k}`),await b.click(e);const s=t.getByRole("main");await a(s).toHaveFocus()}},d={render:y,name:"Click SkipLink (A3, C1 delvis)",args:{...u},argTypes:{},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:n})=>{const t=o(n),e=t.getByRole("main"),s=t.getByRole("link",{name:v.t(g)});s.focus(),await b.click(s),await a(e).toHaveFocus()}},L=n=>{const e=document.querySelector("skiplink-customelement")?.shadowRoot;return i.jsxs("div",{children:[i.jsx(h,{...n,shadowRootNode:e??void 0}),i.jsx("main",{children:"Hovedinnholdet på siden"})]})},p={render:L,name:"With ShadowDom",args:{...u},decorators:[w],parameters:{imageSnapshot:{disable:!0},customElementName:"skiplink-customelement"},play:async({canvasElement:n})=>{const t=o(n);await a(t.queryByRole("link")).not.toBeInTheDocument();const e=n.querySelector("skiplink-customelement");await a(e).toBeInTheDocument();const s=e?.shadowRoot&&e.shadowRoot.querySelector("a");await a(s).toBeInTheDocument(),await S.click(s);const f=e?.shadowRoot&&e.shadowRoot.querySelector("main:focus");await a(f).toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLAnchorElement | null): void => {
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
    const skipLink = canvas.getByRole('link');
    await expect(skipLink).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
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
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link');
    await expect(skipLink).toHaveAttribute('id', 'htmlId');
    await expect(skipLink).toHaveClass('dummyClassname');
    await expect(skipLink).toHaveAttribute('lang', 'nb');
    await expect(skipLink).toHaveAttribute('data-testid', '123ID');
    skipLink.focus();
  }
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (B2)',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['focus-visible']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: dsI18n.t(skipLinkText)
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.tagName).toBe('A');
  }
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: MainTemplate,
  name: 'With Target And Children (A3 delvis)',
  args: {
    ...defaultArgs,
    target: \`#\${mainId}\`,
    children: 'Snarvei til hovedinnhold'
  },
  argTypes: {
    target: {
      table: {
        disable: false
      }
    },
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
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link', {
      name: 'Snarvei til hovedinnhold'
    });
    await expect(skipLink).toBeInTheDocument();
    await expect(skipLink).toHaveAttribute('href', \`#\${mainId}\`);
    await fireEvent.click(skipLink);
    const main = canvas.getByRole('main');
    await expect(main).toHaveFocus();
  }
} satisfies Story`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: MainTemplate,
  name: 'Click SkipLink (A3, C1 delvis)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const main = canvas.getByRole('main');
    const skipLink = canvas.getByRole('link', {
      name: dsI18n.t(skipLinkText)
    });
    skipLink.focus();
    await fireEvent.click(skipLink);
    await expect(main).toHaveFocus();
  }
} satisfies Story`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: TemplateWithShadowDom,
  name: 'With ShadowDom',
  args: {
    ...defaultArgs
  },
  decorators: [webComponent],
  parameters: {
    imageSnapshot: {
      disable: true
    },
    customElementName: 'skiplink-customelement'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    //skipLink finnes ikke utenfor shadowDom
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument();
    const customElement = canvasElement.querySelector(\`skiplink-customelement\`);
    await expect(customElement).toBeInTheDocument();
    const skipLink = customElement?.shadowRoot && customElement.shadowRoot.querySelector('a');
    await expect(skipLink).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(skipLink!);
    const main = customElement?.shadowRoot && customElement.shadowRoot.querySelector('main:focus');
    await expect(main).toBeInTheDocument();
  }
} satisfies Story`,...p.parameters?.docs?.source}}};const R=["WithRef","WithAttributes","Defaults","WithTargetAndChildren","ClickSkipLink","WithShadowDom"],E=Object.freeze(Object.defineProperty({__proto__:null,ClickSkipLink:d,Defaults:c,WithAttributes:l,WithRef:r,WithShadowDom:p,WithTargetAndChildren:m,__namedExportsOrder:R,default:T},Symbol.toStringTag,{value:"Module"}));export{E as T};
//# sourceMappingURL=TopBannerSkipLink.test.stories-XtEqRTqu.js.map
