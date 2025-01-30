import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as m}from"./index-ClcD9ViR.js";import{w as r,u as l,e as i,a as De}from"./index-XVqkR3zt.js";import{B as d}from"./index-U0B695k8.js";import{d as We}from"./index--O6iZ70i.js";import"./index-GOkwpqhH.js";import{g as Me}from"./index-BWc9jU-Q.js";import{M as g}from"./index-D1gqbwNK.js";import{P as p}from"./index-BaCHQVlv.js";import{l as O}from"./storybook.testing.utils-CMs160i9.js";import{w as je}from"./webcomponent-decorator-CLpLjz2m.js";import{f as Fe,w as Oe}from"./wait-alert-illustration-CyF06_2L.js";import{T as Pe}from"./DatePickerCalendar-BtRIsojo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dxnk4fMh.js";import"./Help-CS2lfMec.js";import"./LabelWithHelp-b-VgeEnv.js";import"./index-8cXy7PJr.js";import"./index-ZuzByk-F.js";import"./index-DbZa4S7y.js";import"./client-CmY5Wfjt.js";const D="Vil du erstatte nye opplysninger fra fil?",ca={component:g,title:"Tester/Modal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",Fe,Oe]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0}},renderIcon:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{children:"Modal innhold",title:D}},c=t=>{const e=m.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(p,{hasSpacing:!0,children:O}),n.jsx(d,{onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne modal"}),n.jsxs(g,{...t,ref:e,children:[n.jsx(p,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),n.jsxs("div",{className:"flex",children:[n.jsx(d,{className:"marginRightM",children:"Erstatt opplysninger"}),n.jsx(d,{variant:"tertiary",onClick:()=>{var a;return(a=e.current)==null?void 0:a.close()},children:"Avbryt"})]})]})]})},b={render:c,name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog");await i(s).toHaveAttribute("id","htmlId"),await i(s).toHaveClass("dummyClassname"),await i(s).toHaveAttribute("lang","nb"),await i(s).toHaveAttribute("data-testid","123ID")}},h={render:c,name:"Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)",args:{},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByLabelText(D);await i(s).toBeInTheDocument();const o=e.getAllByRole("button")[0];await i(o).toBeInTheDocument(),await i(e.getByTitle(We.t("ds_overlays:modal.CloseModal"))).toBeInTheDocument(),await i(s.tagName).toBe("DIALOG");const u=e.getByText(D);await i(u.tagName).toBe("H1")}},y={render:c,name:"Variant Plain (A8)",args:{variant:"plain"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await l.click(a)}},v={render:c,name:"Variant Important (A1)",args:{variant:"important"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await l.click(a)}},B={render:c,name:"With Image (A1)",args:{imageSource:Oe,imageSourceAltText:"Image alt tekst"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const o=e.getByRole("dialog").querySelector("img");await i(o).toBeInTheDocument(),await i(o).toHaveAttribute("alt","Image alt tekst")}},w={render:c,name:"With Icon",args:{renderIcon:()=>n.jsx(Me,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await l.click(a)}},f={render:c,name:"With Transparent Background (A4, A10)",args:{},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await l.click(a)}},T={render:c,name:"Without CloseButton (A7)",args:{hideCloseButton:!0},argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await l.click(a)}},k={render:c,name:"With Padding (A9)",args:{padding:"none"},argTypes:{padding:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=r(t).getByRole("button");await l.click(a)}},Ne=t=>{const e=m.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(p,{hasSpacing:!0,children:O}),n.jsx(d,{onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne modal"}),n.jsx(g,{...t,ref:e})]})},S={render:Ne,name:"With Vertical Scrolling (A12)",args:{children:O.repeat(5)},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog");De.scroll(s,{target:{scrollTop:200}})}},C={render:c,name:"Click Close Button (A13)",args:{onClose:()=>{console.log("Click CloseButton: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByTitle(We.t("ds_overlays:modal.CloseModal"));await l.click(s),await i(e.queryByRole("dialog")).not.toBeInTheDocument()}},x={render:c,name:"With AutoClose (A14, A15)",args:{onClose:()=>{console.log("AutoClose: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog");await l.click(s),await i(e.queryByRole("dialog")).not.toBeInTheDocument()}},E={render:c,name:"With AutoClose Disabled (A14)",args:{dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog");await l.click(s),await i(s).toBeInTheDocument()}},A={render:c,name:"With HideTitle (B4)",args:{hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByRole("heading",{level:1});await i(s).toBeInTheDocument()}},He=t=>{const e=document.querySelector("modal-customelement"),a=e==null?void 0:e.shadowRoot,s=m.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(d,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.showModal()},children:"Åpne modal"}),n.jsxs(g,{ref:s,...t,shadowRootNode:a??void 0,children:[n.jsx(p,{hasSpacing:!0,children:O}),n.jsx("div",{className:"borderLeftBlack",children:"Klikk til venstre for border skal ikke lukke modal"}),n.jsx("div",{className:"flex",children:n.jsx(d,{variant:"primary",onClick:()=>{var o;return(o=s.current)==null?void 0:o.close()},children:"Lukk"})})]})]})},R={render:He,name:"With ShadowDom Click Outside",decorators:[je],parameters:{imageSnapshot:{disable:!0},a11y:{disable:!0},customElementName:"modal-customelement"},args:{dismissOnOutsideClick:!0},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t);await i(e.queryByRole("dialog")).not.toBeInTheDocument();const a=t.querySelector("modal-customelement");await i(a).toBeInTheDocument()}},Ve=t=>{const e=m.useRef(null),[a,s]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(d,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),n.jsx(g,{...t,ref:e,children:a?n.jsx(Pe,{ref:o=>{var u;(u=o==null?void 0:o.textboxRef.current)==null||u.focus()},label:"Navn"}):n.jsx(d,{className:"marginRightM",onClick:()=>s(!0),children:"Vis og fokuser inputfelt"})})]})},qe=t=>{const e=m.useRef(null),[a,s]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(d,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),n.jsx(g,{...t,ref:e,children:a?n.jsx(p,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}):n.jsx(d,{className:"marginRightM",onClick:()=>s(!0),children:"Erstatt opplysninger"})})]})},I={render:qe,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus Modal",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog"),o=e.getByText("Erstatt opplysninger");await l.click(o),await i(o).not.toBeInTheDocument(),await l.keyboard("{Escape}"),await i(s).toBeInTheDocument()}},W={render:Ve,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus TextField",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog"),o=r(s).getByText("Vis og fokuser inputfelt");await l.click(o),await i(o).not.toBeInTheDocument();const u=e.getByRole("textbox");await i(u).toHaveFocus()}};var M,j,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(j=b.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var P,N,H;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(N=h.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var V,q,L;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(q=y.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var _,z,G;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,X;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    const image = modal.querySelector('img');
    await expect(image).toBeInTheDocument();
    await expect(image).toHaveAttribute('alt', 'Image alt tekst');
  }
} satisfies Story`,...(X=(K=B.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Q,U,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With Icon',
  args: {
    renderIcon: (): JSX.Element => <WarningOutlineIcon size={'extraLarge'} />
  },
  argTypes: {
    renderIcon: {
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
} satisfies Story`,...(Y=(U=w.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(ne=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,le;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,re,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,me,ue;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,pe,be;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,ye,ve;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ve=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Be,we,fe;A.parameters={...A.parameters,docs:{...(Be=A.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(we=A.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var Te,ke,Se;R.parameters={...R.parameters,docs:{...(Te=R.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
    const customElement = canvasElement.querySelector('modal-customelement') as HTMLElement;
    await expect(customElement).toBeInTheDocument();
  }
} satisfies Story`,...(Se=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Ce,xe,Ee;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Ae,Re,Ie;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ie=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};const da=["WithAttributes","Defaults","VariantPlain","VariantImportant","WithImage","WithIcon","WithTransparentBackground","WithoutCloseButton","WithPadding","WithVerticalScrolling","ClickCloseButton","WithAutoClose","WithAutoCloseDisabled","WithHideTitle","WithShadowDom","WithStateChangeAndFocus","WithStateChangeAndTextFieldFocus"];export{C as ClickCloseButton,h as Defaults,v as VariantImportant,y as VariantPlain,b as WithAttributes,x as WithAutoClose,E as WithAutoCloseDisabled,A as WithHideTitle,w as WithIcon,B as WithImage,k as WithPadding,R as WithShadowDom,I as WithStateChangeAndFocus,W as WithStateChangeAndTextFieldFocus,f as WithTransparentBackground,S as WithVerticalScrolling,T as WithoutCloseButton,da as __namedExportsOrder,ca as default};
//# sourceMappingURL=Modal.test.stories-BMfHx21G.js.map
