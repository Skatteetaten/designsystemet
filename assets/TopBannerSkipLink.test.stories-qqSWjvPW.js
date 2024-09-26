import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{d as W}from"./index-e2J6NVvS.js";import{w as o,e as a,b as F,u as P}from"./index-hUG6DWTw.js";import{w as $}from"./storybook.testing.utils-CMs160i9.js";import{T as h}from"./TopBannerSkipLink-h64laaNP.js";import{w as M}from"./webcomponent-decorator-D_ZX8JPI.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-nyVGXzax.js";import"./client-BCxScYCN.js";import"./index-B8XB3FuZ.js";const ee={component:h,title:"Tester/TopBanner/TopBannerSkipLink (intern)",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},target:{table:{disable:!0}}}},N="ds_layout:topbanner.SkipLinkText",u={},r={name:"With Ref (FA1)",args:{ref:n=>{n&&(n.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=o(n).getByRole("link");await a(e).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=o(n).getByRole("link");await a(e).toHaveAttribute("id","htmlId"),await a(e).toHaveClass("dummyClassname"),await a(e).toHaveAttribute("lang","nb"),await a(e).toHaveAttribute("data-testid","123ID"),await e.focus()}},c={name:"Defaults (B2)",args:{...u},argTypes:{},parameters:{imageSnapshot:{focus:`${$} a`}},play:async({canvasElement:n})=>{const e=o(n).getByRole("link",{name:W.t(N)});a(e).toBeInTheDocument(),a(e.tagName).toBe("A")}},k="hovedinnhold",q=n=>i.jsxs(i.Fragment,{children:[i.jsx(h,{...n}),i.jsx("main",{id:k,children:"Hovedinnholdet på siden"})]}),m={render:q,name:"With Target And Children (A3 delvis)",args:{...u,target:`#${k}`,children:"Snarvei til hovedinnhold"},argTypes:{target:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=o(n),e=t.getByRole("link",{name:"Snarvei til hovedinnhold"});await a(e).toBeInTheDocument(),await a(e).toHaveAttribute("href",`#${k}`),await F.click(e);const s=t.getByRole("main");await a(s).toHaveFocus()}},d={render:q,name:"Click SkipLink (A3, C1 delvis)",args:{...u},argTypes:{},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const t=o(n),e=t.getByRole("main"),s=t.getByRole("link",{name:W.t(N)});await s.focus(),await F.click(s),await a(e).toHaveFocus()}},_=n=>{const t=document.querySelector("skiplink-customelement"),e=t==null?void 0:t.shadowRoot;return i.jsxs("div",{children:[i.jsx(h,{...n,shadowRootNode:e??void 0}),i.jsx("main",{children:"Hovedinnholdet på siden"})]})},p={render:_,name:"With ShadowDom",args:{...u},decorators:[M],parameters:{imageSnapshot:{disable:!0},customElementName:"skiplink-customelement"},play:async({canvasElement:n})=>{const t=o(n);await a(t.queryByRole("link")).not.toBeInTheDocument();const e=n.querySelector("skiplink-customelement");await a(e).toBeInTheDocument();const s=(e==null?void 0:e.shadowRoot)&&e.shadowRoot.querySelector("a");await a(s).toBeInTheDocument(),await P.click(s);const j=(e==null?void 0:e.shadowRoot)&&e.shadowRoot.querySelector("main:focus");await a(j).toBeInTheDocument()}};var b,g,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link');
    await expect(skipLink).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,w,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const skipLink = canvas.getByRole('link');
    await expect(skipLink).toHaveAttribute('id', 'htmlId');
    await expect(skipLink).toHaveClass('dummyClassname');
    await expect(skipLink).toHaveAttribute('lang', 'nb');
    await expect(skipLink).toHaveAttribute('data-testid', '123ID');
    await skipLink.focus();
  }
} satisfies Story`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,T,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Defaults (B2)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      focus: \`\${wrapper} a\`
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
} satisfies Story`,...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,B,x;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(x=(B=m.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var A,I,D;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: MainTemplate,
  name: 'Click SkipLink (A3, C1 delvis)',
  args: {
    ...defaultArgs
  },
  argTypes: {},
  parameters: {
    imageSnapshot: {
      disable: true
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
    await skipLink.focus();
    await fireEvent.click(skipLink);
    await expect(main).toHaveFocus();
  }
} satisfies Story`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,H,C;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const customElement = canvasElement.querySelector(\`skiplink-customelement\`);
    await expect(customElement).toBeInTheDocument();
    const skipLink = customElement?.shadowRoot &&
    // eslint-disable-next-line testing-library/no-node-access
    customElement.shadowRoot.querySelector('a');
    await expect(skipLink).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await userEvent.click(skipLink!);
    const main = customElement?.shadowRoot &&
    // eslint-disable-next-line testing-library/no-node-access
    customElement.shadowRoot.querySelector('main:focus');
    await expect(main).toBeInTheDocument();
  }
} satisfies Story`,...(C=(H=p.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};const ne=["WithRef","WithAttributes","Defaults","WithTargetAndChildren","ClickSkipLink","WithShadowDom"];export{d as ClickSkipLink,c as Defaults,l as WithAttributes,r as WithRef,p as WithShadowDom,m as WithTargetAndChildren,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=TopBannerSkipLink.test.stories-qqSWjvPW.js.map
