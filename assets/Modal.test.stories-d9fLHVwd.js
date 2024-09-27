import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as R}from"./index-BwDkhjyp.js";import{B as d}from"./index-DMYlLpXe.js";import{d as he}from"./index-CI44Z2h3.js";import{M as S}from"./index-DDravkbj.js";import{P as C}from"./index-CCUfsLXI.js";import{w as i,u as l,e as o,b as Te}from"./index-hUG6DWTw.js";import{l as E}from"./storybook.testing.utils-CMs160i9.js";import{w as fe}from"./webcomponent-decorator-DlmhHjRY.js";import{f as ke,w as Be}from"./wait-alert-illustration-BZ1f2OL4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DcL_RvKM.js";import"./index-Cq8GVsVj.js";import"./index-B8XB3FuZ.js";import"./client-BCxScYCN.js";const x="Vil du erstatte nye opplysninger fra fil?",Le={component:S,title:"Tester/Modal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",ke,Be]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{children:"Modal innhold",title:x}},r=t=>{const e=R.useRef(null);return s.jsxs(s.Fragment,{children:[s.jsx(C,{hasSpacing:!0,children:E}),s.jsx(d,{onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne modal"}),s.jsxs(S,{...t,ref:e,children:[s.jsx(C,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),s.jsxs("div",{className:"flex",children:[s.jsx(d,{className:"marginRightM",children:"Erstatt opplysninger"}),s.jsx(d,{variant:"tertiary",onClick:()=>{var a;return(a=e.current)==null?void 0:a.close()},children:"Avbryt"})]})]})]})},m={render:r,name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("button");await l.click(a);const n=e.getByRole("dialog");await o(n).toHaveAttribute("id","htmlId"),await o(n).toHaveClass("dummyClassname"),await o(n).toHaveAttribute("lang","nb"),await o(n).toHaveAttribute("data-testid","123ID")}},u={render:r,name:"Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)",args:{},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("button");await l.click(a);const n=e.getByLabelText(x);await o(n).toBeInTheDocument();const c=e.getAllByRole("button")[0];await o(c).toBeInTheDocument(),await o(e.getByTitle(he.t("ds_overlays:modal.CloseModal"))).toBeInTheDocument(),await o(n.tagName).toBe("DIALOG");const we=e.getByText(x);await o(we.tagName).toBe("H1")}},g={render:r,name:"Variant Plain (A8)",args:{variant:"plain"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("button");await l.click(a)}},p={render:r,name:"Variant Important (A1)",args:{variant:"important"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("button");await l.click(a)}},b={render:r,name:"With Image (A1)",args:{imageSource:Be,imageSourceAltText:"Image alt tekst"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("button");await l.click(a);const c=e.getByRole("dialog").querySelector("img");await o(c).toBeInTheDocument(),await o(c).toHaveAttribute("alt","Image alt tekst")}},y={render:r,name:"With Transparent Background (A4, A10)",args:{},play:async({canvasElement:t})=>{const a=i(t).getByRole("button");await l.click(a)}},v={render:r,name:"Without CloseButton (A7)",args:{hideCloseButton:!0},argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("button");await l.click(a)}},h={render:r,name:"With Padding (A9)",args:{padding:"none"},argTypes:{padding:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=i(t).getByRole("button");await l.click(a)}},Ae=t=>{const e=R.useRef(null);return s.jsxs(s.Fragment,{children:[s.jsx(C,{hasSpacing:!0,children:E}),s.jsx(d,{onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne modal"}),s.jsx(S,{...t,ref:e})]})},B={render:Ae,name:"With Vertical Scrolling (A12)",args:{children:E.repeat(5)},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("button");await l.click(a);const n=e.getByRole("dialog");Te.scroll(n,{target:{scrollTop:200}})}},w={render:r,name:"Click Close Button (A13)",args:{onClose:()=>{console.log("Click CloseButton: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("button");await l.click(a);const n=e.getByTitle(he.t("ds_overlays:modal.CloseModal"));await l.click(n),await o(e.queryByRole("dialog")).not.toBeInTheDocument()}},T={render:r,name:"With AutoClose (A14, A15)",args:{onClose:()=>{console.log("AutoClose: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("button");await l.click(a);const n=e.getByRole("dialog");await l.click(n),await o(e.queryByRole("dialog")).not.toBeInTheDocument()}},f={render:r,name:"With AutoClose Disabled (A14)",args:{dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("button");await l.click(a);const n=e.getByRole("dialog");await l.click(n),await o(n).toBeInTheDocument()}},k={render:r,name:"With HideTitle (B4)",args:{hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("button");await l.click(a);const n=e.getByRole("heading",{level:1});await o(n).toBeInTheDocument()}},Ce=t=>{const e=document.querySelector("modal-customelement"),a=e==null?void 0:e.shadowRoot,n=R.useRef(null);return s.jsxs(s.Fragment,{children:[s.jsx(d,{onClick:()=>{var c;return(c=n.current)==null?void 0:c.showModal()},children:"Åpne modal"}),s.jsxs(S,{ref:n,...t,shadowRootNode:a??void 0,children:[s.jsx(C,{hasSpacing:!0,children:E}),s.jsx("div",{className:"flex",children:s.jsx(d,{variant:"primary",onClick:()=>{var c;return(c=n.current)==null?void 0:c.close()},children:"Lukk"})})]})]})},A={render:Ce,name:"With ShadowDom Click Outside",decorators:[fe],parameters:{imageSnapshot:{disable:!0},a11y:{disable:!0},customElementName:"modal-customelement"},args:{dismissOnOutsideClick:!0},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=i(t);await o(e.queryByRole("dialog")).not.toBeInTheDocument();const a=t.querySelector("modal-customelement");await o(a).toBeInTheDocument()}};var I,W,D;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With Attributes (FA2-5, B1)',
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
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    await expect(modal).toHaveAttribute('id', 'htmlId');
    await expect(modal).toHaveClass('dummyClassname');
    await expect(modal).toHaveAttribute('lang', 'nb');
    await expect(modal).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(D=(W=m.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var M,O,P;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)',
  args: {},
  argTypes: {
    children: {
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByLabelText(defaultTitle);
    await expect(modal).toBeInTheDocument();
    const closeButton = canvas.getAllByRole('button')[0];
    await expect(closeButton).toBeInTheDocument();
    await expect(canvas.getByTitle(dsI18n.t('ds_overlays:modal.CloseModal'))).toBeInTheDocument();
    await expect(modal.tagName).toBe('DIALOG');
    const heading = canvas.getByText(defaultTitle);
    await expect(heading.tagName).toBe('H1');
  }
} satisfies Story`,...(P=(O=u.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,H,N;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'Variant Plain (A8)',
  args: {
    variant: 'plain'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
} satisfies Story`,...(N=(H=g.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var V,q,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'Variant Important (A1)',
  args: {
    variant: 'important'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
} satisfies Story`,...(L=(q=p.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var _,F,G;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With Image (A1)',
  args: {
    imageSource: waitIllustration,
    imageSourceAltText: 'Image alt tekst'
  },
  argTypes: {
    imageSource: {
      table: {
        disable: false
      }
    },
    imageSourceAltText: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    // eslint-disable-next-line testing-library/no-node-access
    const image = modal.querySelector('img');
    await expect(image).toBeInTheDocument();
    await expect(image).toHaveAttribute('alt', 'Image alt tekst');
  }
} satisfies Story`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var z,J,K;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With Transparent Background (A4, A10)',
  args: {},
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
} satisfies Story`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'Without CloseButton (A7)',
  args: {
    hideCloseButton: true
  },
  argTypes: {
    hideCloseButton: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    // TODO mangler test for WithCloseButton
  }
} satisfies Story`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With Padding (A9)',
  args: {
    padding: 'none'
  },
  argTypes: {
    padding: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
} satisfies Story`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: TemplateWithScroll,
  name: 'With Vertical Scrolling (A12)',
  args: {
    children: loremIpsum.repeat(5)
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    fireEvent.scroll(modal, {
      target: {
        scrollTop: 200
      }
    });
  }
} satisfies Story`,...(te=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,oe;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'Click Close Button (A13)',
  args: {
    onClose: (): void => {
      console.log('Click CloseButton: onClose har blitt kalt');
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const closeButton = canvas.getByTitle(dsI18n.t('ds_overlays:modal.CloseModal'));
    await userEvent.click(closeButton);
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  }
} satisfies Story`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,re;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With AutoClose (A14, A15)',
  args: {
    onClose: (): void => {
      console.log('AutoClose: onClose har blitt kalt');
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    await userEvent.click(modal);
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  }
} satisfies Story`,...(re=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,de,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With AutoClose Disabled (A14)',
  args: {
    dismissOnOutsideClick: false
  },
  argTypes: {
    dismissOnOutsideClick: {
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    await userEvent.click(modal);
    await expect(modal).toBeInTheDocument();
  }
} satisfies Story`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,ge,pe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With HideTitle (B4)',
  args: {
    hideTitle: true
  },
  argTypes: {
    hideTitle: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const heading = canvas.getByRole('heading', {
      level: 1
    });
    await expect(heading).toBeInTheDocument();
  }
} satisfies Story`,...(pe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var be,ye,ve;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: TemplateWithShadowDom,
  name: 'With ShadowDom Click Outside',
  decorators: [webComponent],
  parameters: {
    imageSnapshot: {
      disable: true
    },
    a11y: {
      disable: true
    },
    customElementName: 'modal-customelement'
  },
  args: {
    dismissOnOutsideClick: true
  },
  argTypes: {
    dismissOnOutsideClick: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    const customElement = canvasElement.querySelector('modal-customelement') as HTMLElement;
    await expect(customElement).toBeInTheDocument();
  }
} satisfies Story`,...(ve=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};const _e=["WithAttributes","Defaults","VariantPlain","VariantImportant","WithImage","WithTransparentBackground","WithoutCloseButton","WithPadding","WithVerticalScrolling","ClickCloseButton","WithAutoClose","WithAutoCloseDisabled","WithHideTitle","WithShadowDom"];export{w as ClickCloseButton,u as Defaults,p as VariantImportant,g as VariantPlain,m as WithAttributes,T as WithAutoClose,f as WithAutoCloseDisabled,k as WithHideTitle,b as WithImage,h as WithPadding,A as WithShadowDom,y as WithTransparentBackground,B as WithVerticalScrolling,v as WithoutCloseButton,_e as __namedExportsOrder,Le as default};
//# sourceMappingURL=Modal.test.stories-d9fLHVwd.js.map
