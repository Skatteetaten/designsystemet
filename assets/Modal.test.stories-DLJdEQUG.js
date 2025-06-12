import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-D_ouKaeX.js";import{w as r,u as i,e as l,a as Ke,b as V}from"./index-DIxTUSTt.js";import{B as c}from"./index-eDVrZHQi.js";import{d as Le}from"./index-ChzTQA-a.js";import"./index-DzkGBFys.js";import{g as ze}from"./index-CdwPxLML.js";import{T as P}from"./index-DyriRbJa.js";import{M as p}from"./index-DoReeGMy.js";import{P as u}from"./index-DsfABT8I.js";import{l as M}from"./storybook.testing.utils-CMs160i9.js";import{w as Ge}from"./webcomponent-decorator-CC8-LmJl.js";import{f as Je,w as Ue}from"./wait-alert-illustration-BYTJWND6.js";import{T as Xe}from"./DatePickerCalendar-j9g8dyRt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CPecIRii.js";import"./Help-DpeK2zjo.js";import"./LabelWithHelp-IJvVpsNu.js";import"./index-UoIuQY3B.js";import"./index-Bm-dj5jB.js";import"./TopBannerButton-0jIvVBn9.js";import"./TopBannerLangPicker-Dx4oc0U9.js";import"./TopBannerLangPickerButton-B5uH1qxT.js";import"./TopBannerLogo-BXuDjKJZ.js";import"./TopBannerSkipLink-CqJlQyOT.js";import"./TopBannerUserButton-C9FIE6r6.js";import"./floating-ui.react-B78-7X4S.js";import"./index-D9u29hOa.js";import"./index-DE1tsBZG.js";import"./client-DJ5fKs0O.js";const F="Vil du erstatte nye opplysninger fra fil?",Mn={component:p,title:"Tester/Modal",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",Je,Ue]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0}},renderIcon:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{children:"Modal innhold",title:F}},m=a=>{const e=d.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{hasSpacing:!0,children:M}),t.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne modal"}),t.jsxs(p,{...a,ref:e,children:[t.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),t.jsxs("div",{className:"flex",children:[t.jsx(c,{className:"marginRightM",children:"Erstatt opplysninger"}),t.jsx(c,{variant:"tertiary",onClick:()=>{var n;return(n=e.current)==null?void 0:n.close()},children:"Avbryt"})]})]})]})},b={render:m,name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog");await l(s).toHaveAttribute("id","htmlId"),await l(s).toHaveClass("dummyClassname"),await l(s).toHaveAttribute("lang","nb"),await l(s).toHaveAttribute("data-testid","123ID")}},h={render:m,name:"Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)",args:{},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByLabelText(F);await l(s).toBeInTheDocument();const o=e.getAllByRole("button")[0];await l(o).toBeInTheDocument(),await l(e.getByTitle(Le.t("ds_overlays:modal.CloseModal"))).toBeInTheDocument(),await l(s.tagName).toBe("DIALOG");const g=e.getByText(F);await l(g.tagName).toBe("H1")}},y={render:m,name:"Variant Plain (A8)",args:{variant:"plain"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await i.click(n)}},v={render:m,name:"With Image (A1)",args:{imageSource:Ue,imageSourceAltText:"Image alt tekst"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const o=e.getByRole("dialog").querySelector("img");await l(o).toBeInTheDocument(),await l(o).toHaveAttribute("alt","Image alt tekst")}},w={render:m,name:"With Icon",args:{renderIcon:()=>t.jsx(ze,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await i.click(n)}},f={render:m,name:"With Transparent Background (A4, A10)",args:{},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await i.click(n)}},k={render:m,name:"Without CloseButton (A7)",args:{hideCloseButton:!0},argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await i.click(n)}},B={render:m,name:"With Padding (A9)",args:{padding:"none"},argTypes:{padding:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await i.click(n)}},Qe=a=>{const e=d.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{hasSpacing:!0,children:M}),t.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne modal"}),t.jsx(p,{...a,ref:e})]})},T={render:Qe,name:"With Vertical Scrolling (A12)",args:{children:M.repeat(5)},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog");Ke.scroll(s,{target:{scrollTop:200}})}},E={render:m,name:"Click Close Button (A13)",args:{onClose:()=>{console.log("Click CloseButton: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByTitle(Le.t("ds_overlays:modal.CloseModal"));await i.click(s),await l(e.queryByRole("dialog")).not.toBeInTheDocument()}},x={render:m,name:"With AutoClose (A14, A15)",args:{onClose:()=>{console.log("AutoClose: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog");await i.click(s),await l(e.queryByRole("dialog")).not.toBeInTheDocument()}},S={render:m,name:"With AutoClose Disabled (A14)",args:{dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog");await i.click(s),await l(s).toBeInTheDocument()}},C={render:m,name:"With HideTitle (B4)",args:{hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByRole("heading",{level:1});await l(s).toBeInTheDocument()}},Ye=a=>{const e=document.querySelector("modal-customelement"),n=e==null?void 0:e.shadowRoot,s=d.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsxs(p,{ref:s,...a,shadowRootNode:n??void 0,children:[t.jsx(u,{hasSpacing:!0,children:M}),t.jsx("div",{className:"borderLeftBlack",children:"Klikk til venstre for border skal ikke lukke modal"}),t.jsx("div",{className:"flex",children:t.jsx(c,{variant:"primary",onClick:()=>{var o;return(o=s.current)==null?void 0:o.close()},children:"Lukk"})})]})]})},A={render:Ye,name:"With ShadowDom Click Outside",decorators:[Ge],parameters:{imageSnapshot:{disable:!0},a11y:{disable:!0},customElementName:"modal-customelement"},args:{dismissOnOutsideClick:!0},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a);await l(e.queryByRole("dialog")).not.toBeInTheDocument();const n=a.querySelector("modal-customelement");await l(n).toBeInTheDocument()}},Ze=a=>{const e=d.useRef(null),[n,s]=d.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsx(p,{...a,ref:e,children:n?t.jsx(Xe,{ref:o=>{o==null||o.focus()},label:"Navn"}):t.jsx(c,{className:"marginRightM",onClick:()=>s(!0),children:"Vis og fokuser inputfelt"})})]})},$e=a=>{const e=d.useRef(null),[n,s]=d.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsx(p,{...a,ref:e,children:n?t.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}):t.jsx(c,{className:"marginRightM",onClick:()=>s(!0),children:"Erstatt opplysninger"})})]})},R={render:$e,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus Modal",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog"),o=e.getByText("Erstatt opplysninger");await i.click(o),await l(o).not.toBeInTheDocument(),await i.keyboard("{Escape}"),await l(s).toBeInTheDocument()}},O={render:Ze,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus TextField",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog"),o=r(s).getByText("Vis og fokuser inputfelt");await i.click(o),await l(o).not.toBeInTheDocument();const g=e.getByRole("textbox");await l(g).toHaveFocus()}},en=a=>{const e=d.useRef(null);d.useEffect(()=>{var s;(s=e.current)==null||s.showModal()},[]);const n=()=>{var s;(s=e.current)==null||s.close()};return t.jsxs(t.Fragment,{children:[t.jsx(P,{}),t.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes.
        Testes ved å reloade siden. Det er ved programatisk åpning av modalen at fokus tidligere ikke har blitt satt korrekt.`}),t.jsxs(p,{...a,ref:e,children:[t.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),t.jsxs("div",{className:"flex",children:[t.jsx(c,{className:"marginRightM",children:"Erstatt opplysninger"}),t.jsx(c,{variant:"tertiary",onClick:n,children:"Avbryt"})]})]}),t.jsx(c,{className:"marginRightM",onClick:()=>{var s;return(s=e.current)==null?void 0:s.showModal()},children:"Åpne modal ref.current.showModal"})]})},I={decorators:[a=>(document.body.classList.add("bodyFocus"),t.jsx(a,{}))],render:en,name:"With Auto Open Close ",args:{variant:"plain"},play:async({canvasElement:a,step:e})=>{const n=r(a);await e("Fokus skal settes på skjult div-element når modalen lukkes etter programatisk åpnet modal.",async()=>{const s=await n.findByRole("dialog",{hidden:!1});await l(s).toBeVisible();const o=r(a).getByRole("button",{name:"Avbryt"});await i.click(o);const g=document.querySelector("#topbanner-focus-target");await V(()=>{l(g).toHaveFocus()});const D=await n.findByRole("dialog",{hidden:!0});await l(D).not.toBeVisible()}),await e("Fokus skal IKKE settes på div-element hvis bruker-interaksjon har åpnet modal",async()=>{const s=r(a).getByRole("button",{name:"Åpne modal ref.current.showModal"});await i.click(s);const o=await n.findByRole("dialog",{hidden:!1});await l(o).toBeVisible();const g=r(a).getByRole("button",{name:"Avbryt"});await i.click(g);const D=document.querySelector("#topbanner-focus-target"),_e=await n.findByRole("dialog",{hidden:!0});await l(_e).not.toBeVisible(),await V(()=>{l(D).not.toHaveFocus()})})}},nn=a=>{const e=d.useRef(null);return d.useEffect(()=>{var n;(n=e.current)==null||n.showModal()},[]),t.jsxs(t.Fragment,{children:[t.jsx(P,{}),t.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes etter at bruker har trykket på Escape-knappen.
        Modalen åpnes ved å laste siden på nytt. `}),t.jsx(p,{...a,ref:e,children:t.jsx(u,{hasSpacing:!0,children:"Modalinnhold"})}),t.jsx(c,{className:"marginRightM",onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne med klikk"})]})},W={render:nn,name:"With Auto Open and Close on Escape",args:{variant:"outline",dismissOnEsc:!0},argTypes:{dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=await e.findByRole("dialog",{hidden:!1});await l(n).toBeVisible(),await i.keyboard("{Escape}");const s=await e.findByRole("dialog",{hidden:!0});await l(s).not.toBeVisible()}},tn=a=>{const e=d.useRef(null);return d.useEffect(()=>{var n;(n=e.current)==null||n.showModal()},[]),t.jsxs(t.Fragment,{children:[t.jsx(P,{}),t.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes etter at bruker har trykket på Escape-knappen.
        Modalen åpnes ved å laste siden på nytt. `}),t.jsxs(p,{...a,ref:e,children:[t.jsx(u,{hasSpacing:!0,children:"Modalinnhold"}),t.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.close()},children:"Lukk modal"})]}),t.jsx(c,{className:"marginRightM",onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne med klikk"})]})},j={render:tn,name:"With Auto Open and Close on User Input",args:{variant:"outline",dismissOnEsc:!1},parameters:{imageSnapshot:{disable:!0}},argTypes:{dismissOnEsc:{table:{disable:!1}}}};var N,H,q;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
} satisfies Story`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var L,U,_;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(U=h.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var K,z,G;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,X,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,Z,$;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
} satisfies Story`,...($=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,se,oe;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(oe=(se=k.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,re;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(re=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,de,me;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(me=(de=T.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,ge;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var be,he,ye;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(he=x.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ve,we,fe;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(we=S.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var ke,Be,Te;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,xe,Se;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
} satisfies Story`,...(Se=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ce,Ae,Re;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
} satisfies Story`,...(Re=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var Oe,Ie,We;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(We=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var je,Me,De;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
  decorators: [(Story): JSX.Element => {
    const body = document.body;
    body.classList.add('bodyFocus');
    return <Story />;
  }],
  render: TemplateWithAutoOpen,
  name: 'With Auto Open Close ',
  args: {
    variant: 'plain'
  },
  play: async ({
    canvasElement,
    step
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Fokus skal settes på skjult div-element når modalen lukkes etter programatisk åpnet modal.', async () => {
      const openmodal = await canvas.findByRole('dialog', {
        hidden: false
      });
      await expect(openmodal).toBeVisible();
      const button = within(canvasElement).getByRole('button', {
        name: 'Avbryt'
      });
      await userEvent.click(button);
      const focusedElement = document.querySelector('#topbanner-focus-target');
      await waitFor(() => {
        expect(focusedElement).toHaveFocus();
      });
      const closedmodal = await canvas.findByRole('dialog', {
        hidden: true
      });
      await expect(closedmodal).not.toBeVisible();
    });
    await step('Fokus skal IKKE settes på div-element hvis bruker-interaksjon har åpnet modal', async () => {
      const openButton = within(canvasElement).getByRole('button', {
        name: 'Åpne modal ref.current.showModal'
      });
      await userEvent.click(openButton);
      const openmodal = await canvas.findByRole('dialog', {
        hidden: false
      });
      await expect(openmodal).toBeVisible();
      const button = within(canvasElement).getByRole('button', {
        name: 'Avbryt'
      });
      await userEvent.click(button);
      const focusedElement = document.querySelector('#topbanner-focus-target');
      const closedmodal = await canvas.findByRole('dialog', {
        hidden: true
      });
      await expect(closedmodal).not.toBeVisible();
      await waitFor(() => {
        expect(focusedElement).not.toHaveFocus();
      });
    });
  }
} satisfies Story`,...(De=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Fe,Pe,Ve;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: TemplateAutoOpenAndCloseOnEscape,
  name: 'With Auto Open and Close on Escape',
  args: {
    variant: 'outline',
    dismissOnEsc: true
  },
  argTypes: {
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
    const openmodal = await canvas.findByRole('dialog', {
      hidden: false
    });
    await expect(openmodal).toBeVisible();
    await userEvent.keyboard('{Escape}');
    const closedmodal = await canvas.findByRole('dialog', {
      hidden: true
    });
    await expect(closedmodal).not.toBeVisible();
  }
} satisfies Story`,...(Ve=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Ne,He,qe;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: TemplateWithAutoOpenAndCloseOnUserInput,
  name: 'With Auto Open and Close on User Input',
  args: {
    variant: 'outline',
    dismissOnEsc: false
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  argTypes: {
    dismissOnEsc: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(qe=(He=j.parameters)==null?void 0:He.docs)==null?void 0:qe.source}}};const Dn=["WithAttributes","Defaults","VariantPlain","WithImage","WithIcon","WithTransparentBackground","WithoutCloseButton","WithPadding","WithVerticalScrolling","ClickCloseButton","WithAutoClose","WithAutoCloseDisabled","WithHideTitle","WithShadowDom","WithStateChangeAndFocus","WithStateChangeAndTextFieldFocus","AutoOpen","AutoOpenAndCloseOnEscape","AutoOpenAndCloseOnUserInput"];export{I as AutoOpen,W as AutoOpenAndCloseOnEscape,j as AutoOpenAndCloseOnUserInput,E as ClickCloseButton,h as Defaults,y as VariantPlain,b as WithAttributes,x as WithAutoClose,S as WithAutoCloseDisabled,C as WithHideTitle,w as WithIcon,v as WithImage,B as WithPadding,A as WithShadowDom,R as WithStateChangeAndFocus,O as WithStateChangeAndTextFieldFocus,f as WithTransparentBackground,T as WithVerticalScrolling,k as WithoutCloseButton,Dn as __namedExportsOrder,Mn as default};
//# sourceMappingURL=Modal.test.stories-DLJdEQUG.js.map
