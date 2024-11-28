import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as m}from"./index-BwDkhjyp.js";import{B as d}from"./index-CKHxS2Ra.js";import{d as Ee}from"./index-C498nvnC.js";import"./index-Be268C4q.js";import{M as g}from"./index-BFMd1xC6.js";import{P as p}from"./index-DWqb7jS3.js";import{w as r,u as i,e as l,a as Re}from"./index-B8otpkpo.js";import{l as W}from"./storybook.testing.utils-CMs160i9.js";import{w as Ie}from"./webcomponent-decorator-B15N6-ef.js";import{f as We,w as Ae}from"./wait-alert-illustration-BZ1f2OL4.js";import{T as De}from"./DatePickerCalendar-CBp1RHw1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C3Vp3Ydz.js";import"./index-jWwGX2yX.js";import"./Help-et05bSay.js";import"./LabelWithHelp-Cd6nOtjt.js";import"./index-BQwW25uL.js";import"./index-Drt3gf4w.js";import"./client-lOrgSeYQ.js";const D="Vil du erstatte nye opplysninger fra fil?",na={component:g,title:"Tester/Modal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",We,Ae]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{children:"Modal innhold",title:D}},c=t=>{const e=m.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(p,{hasSpacing:!0,children:W}),n.jsx(d,{onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne modal"}),n.jsxs(g,{...t,ref:e,children:[n.jsx(p,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),n.jsxs("div",{className:"flex",children:[n.jsx(d,{className:"marginRightM",children:"Erstatt opplysninger"}),n.jsx(d,{variant:"tertiary",onClick:()=>{var a;return(a=e.current)==null?void 0:a.close()},children:"Avbryt"})]})]})]})},b={render:c,name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog");await l(s).toHaveAttribute("id","htmlId"),await l(s).toHaveClass("dummyClassname"),await l(s).toHaveAttribute("lang","nb"),await l(s).toHaveAttribute("data-testid","123ID")}},h={render:c,name:"Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)",args:{},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByLabelText(D);await l(s).toBeInTheDocument();const o=e.getAllByRole("button")[0];await l(o).toBeInTheDocument(),await l(e.getByTitle(Ee.t("ds_overlays:modal.CloseModal"))).toBeInTheDocument(),await l(s.tagName).toBe("DIALOG");const u=e.getByText(D);await l(u.tagName).toBe("H1")}},y={render:c,name:"Variant Plain (A8)",args:{variant:"plain"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await i.click(a)}},v={render:c,name:"Variant Important (A1)",args:{variant:"important"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await i.click(a)}},B={render:c,name:"With Image (A1)",args:{imageSource:Ae,imageSourceAltText:"Image alt tekst"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const o=e.getByRole("dialog").querySelector("img");await l(o).toBeInTheDocument(),await l(o).toHaveAttribute("alt","Image alt tekst")}},w={render:c,name:"With Transparent Background (A4, A10)",args:{},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await i.click(a)}},f={render:c,name:"Without CloseButton (A7)",args:{hideCloseButton:!0},argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await i.click(a)}},T={render:c,name:"With Padding (A9)",args:{padding:"none"},argTypes:{padding:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await i.click(a)}},Oe=t=>{const e=m.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(p,{hasSpacing:!0,children:W}),n.jsx(d,{onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne modal"}),n.jsx(g,{...t,ref:e})]})},k={render:Oe,name:"With Vertical Scrolling (A12)",args:{children:W.repeat(5)},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog");Re.scroll(s,{target:{scrollTop:200}})}},C={render:c,name:"Click Close Button (A13)",args:{onClose:()=>{console.log("Click CloseButton: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByTitle(Ee.t("ds_overlays:modal.CloseModal"));await i.click(s),await l(e.queryByRole("dialog")).not.toBeInTheDocument()}},S={render:c,name:"With AutoClose (A14, A15)",args:{onClose:()=>{console.log("AutoClose: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog");await i.click(s),await l(e.queryByRole("dialog")).not.toBeInTheDocument()}},x={render:c,name:"With AutoClose Disabled (A14)",args:{dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog");await i.click(s),await l(s).toBeInTheDocument()}},E={render:c,name:"With HideTitle (B4)",args:{hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("heading",{level:1});await l(s).toBeInTheDocument()}},Me=t=>{const e=document.querySelector("modal-customelement"),a=e==null?void 0:e.shadowRoot,s=m.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(d,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.showModal()},children:"Åpne modal"}),n.jsxs(g,{ref:s,...t,shadowRootNode:a??void 0,children:[n.jsx(p,{hasSpacing:!0,children:W}),n.jsx("div",{className:"flex",children:n.jsx(d,{variant:"primary",onClick:()=>{var o;return(o=s.current)==null?void 0:o.close()},children:"Lukk"})})]})]})},A={render:Me,name:"With ShadowDom Click Outside",decorators:[Ie],parameters:{imageSnapshot:{disable:!0},a11y:{disable:!0},customElementName:"modal-customelement"},args:{dismissOnOutsideClick:!0},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t);await l(e.queryByRole("dialog")).not.toBeInTheDocument();const a=t.querySelector("modal-customelement");await l(a).toBeInTheDocument()}},je=t=>{const e=m.useRef(null),[a,s]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(d,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),n.jsx(g,{...t,ref:e,children:a?n.jsx(De,{ref:o=>{var u;(u=o==null?void 0:o.textboxRef.current)==null||u.focus()},label:"Navn"}):n.jsx(d,{className:"marginRightM",onClick:()=>s(!0),children:"Vis og fokuser inputfelt"})})]})},Fe=t=>{const e=m.useRef(null),[a,s]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(d,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),n.jsx(g,{...t,ref:e,children:a?n.jsx(p,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}):n.jsx(d,{className:"marginRightM",onClick:()=>s(!0),children:"Erstatt opplysninger"})})]})},R={render:Fe,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus Modal",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog"),o=e.getByText("Erstatt opplysninger");await i.click(o),await l(o).not.toBeInTheDocument(),await i.keyboard("{Escape}"),await l(s).toBeInTheDocument()}},I={render:je,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus TextField",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog"),o=r(s).getByText("Vis og fokuser inputfelt");await i.click(o),await l(o).not.toBeInTheDocument();const u=e.getByRole("textbox");await l(u).toHaveFocus()}};var O,M,j;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(M=b.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var F,P,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(P=h.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var N,V,q;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var L,_,G;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(_=v.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var z,J,K;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(J=B.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
  }
} satisfies Story`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(se=k.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,re;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,de,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,ge,pe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var be,he,ye;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(he=E.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ve,Be,we;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(we=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var fe,Te,ke;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: TemplateModalWithStateChange,
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  name: 'With State Change and Focus Modal',
  args: {
    dismissOnEsc: false,
    dismissOnOutsideClick: false
  },
  argTypes: {
    dismissOnOutsideClick: {
      table: {
        disable: false
      }
    },
    dismissOnEsc: {
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
    const innerButton = canvas.getByText('Erstatt opplysninger');
    await userEvent.click(innerButton);
    await expect(innerButton).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(modal).toBeInTheDocument();
  }
} satisfies Story`,...(ke=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Ce,Se,xe;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: TemplateModalWithStateChangeAndFocusedInput,
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  name: 'With State Change and Focus TextField',
  args: {
    dismissOnEsc: false,
    dismissOnOutsideClick: false
  },
  argTypes: {
    dismissOnOutsideClick: {
      table: {
        disable: false
      }
    },
    dismissOnEsc: {
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
    const innerButton = within(modal).getByText('Vis og fokuser inputfelt');
    await userEvent.click(innerButton);
    await expect(innerButton).not.toBeInTheDocument();
    const textField = canvas.getByRole('textbox');
    await expect(textField).toHaveFocus();
  }
} satisfies Story`,...(xe=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};const sa=["WithAttributes","Defaults","VariantPlain","VariantImportant","WithImage","WithTransparentBackground","WithoutCloseButton","WithPadding","WithVerticalScrolling","ClickCloseButton","WithAutoClose","WithAutoCloseDisabled","WithHideTitle","WithShadowDom","WithStateChangeAndFocus","WithStateChangeAndTextFieldFocus"];export{C as ClickCloseButton,h as Defaults,v as VariantImportant,y as VariantPlain,b as WithAttributes,S as WithAutoClose,x as WithAutoCloseDisabled,E as WithHideTitle,B as WithImage,T as WithPadding,A as WithShadowDom,R as WithStateChangeAndFocus,I as WithStateChangeAndTextFieldFocus,w as WithTransparentBackground,k as WithVerticalScrolling,f as WithoutCloseButton,sa as __namedExportsOrder,na as default};
//# sourceMappingURL=Modal.test.stories-Cma3FQnQ.js.map
