import{j as a}from"./jsx-runtime-BYYWji4R.js";import{r as d}from"./index-ClcD9ViR.js";import{w as r,u as i,e as l,a as Xe,b as N}from"./index-DIxTUSTt.js";import{B as c}from"./index-CEFmy_Ic.js";import{d as ze}from"./index-BYKicpQW.js";import"./index-DEJUArlV.js";import{g as Qe}from"./index-C8q4C1To.js";import{T as P}from"./index-VZVp1ZWa.js";import{M as g}from"./index-C22RbeRZ.js";import{P as u}from"./index-7bHEsQL_.js";import{l as D}from"./storybook.testing.utils-CMs160i9.js";import{w as Ye}from"./webcomponent-decorator-Cb8qaP0A.js";import{f as Ze,w as Ge}from"./wait-alert-illustration-CyF06_2L.js";import{T as $e}from"./DatePickerCalendar-HH4LMRzz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BuQZV-my.js";import"./Help-CJ8w0Npo.js";import"./LabelWithHelp-D9yud6GC.js";import"./index-Cs0ivlf6.js";import"./TopBannerButton-C_mTCJEu.js";import"./TopBannerLangPicker-A5eTa0P2.js";import"./TopBannerLangPickerButton-DVjpbIe0.js";import"./TopBannerLogo-CVMRMD-e.js";import"./TopBannerSkipLink-Drm7zQs5.js";import"./TopBannerUserButton-BYwrn7_j.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";import"./index-DBMXQzRX.js";import"./client-uKoRHUzt.js";const V="Vil du erstatte nye opplysninger fra fil?",Vn={component:g,title:"Tester/Modal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",Ze,Ge]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0}},renderIcon:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{children:"Modal innhold",title:V}},m=t=>{const e=d.useRef(null);return a.jsxs(a.Fragment,{children:[a.jsx(u,{hasSpacing:!0,children:D}),a.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne modal"}),a.jsxs(g,{...t,ref:e,children:[a.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),a.jsxs("div",{className:"flex",children:[a.jsx(c,{className:"marginRightM",children:"Erstatt opplysninger"}),a.jsx(c,{variant:"tertiary",onClick:()=>{var n;return(n=e.current)==null?void 0:n.close()},children:"Avbryt"})]})]})]})},b={render:m,name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog");await l(s).toHaveAttribute("id","htmlId"),await l(s).toHaveClass("dummyClassname"),await l(s).toHaveAttribute("lang","nb"),await l(s).toHaveAttribute("data-testid","123ID")}},h={render:m,name:"Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)",args:{},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByLabelText(V);await l(s).toBeInTheDocument();const o=e.getAllByRole("button")[0];await l(o).toBeInTheDocument(),await l(e.getByTitle(ze.t("ds_overlays:modal.CloseModal"))).toBeInTheDocument(),await l(s.tagName).toBe("DIALOG");const p=e.getByText(V);await l(p.tagName).toBe("H1")}},y={render:m,name:"Variant Plain (A8)",args:{variant:"plain"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=r(t).getByRole("button");await i.click(n)}},v={render:m,name:"Variant Important (A1)",args:{variant:"important"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=r(t).getByRole("button");await i.click(n)}},f={render:m,name:"With Image (A1)",args:{imageSource:Ge,imageSourceAltText:"Image alt tekst"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const o=e.getByRole("dialog").querySelector("img");await l(o).toBeInTheDocument(),await l(o).toHaveAttribute("alt","Image alt tekst")}},w={render:m,name:"With Icon",args:{renderIcon:()=>a.jsx(Qe,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=r(t).getByRole("button");await i.click(n)}},k={render:m,name:"With Transparent Background (A4, A10)",args:{},play:async({canvasElement:t})=>{const n=r(t).getByRole("button");await i.click(n)}},B={render:m,name:"Without CloseButton (A7)",args:{hideCloseButton:!0},argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=r(t).getByRole("button");await i.click(n)}},T={render:m,name:"With Padding (A9)",args:{padding:"none"},argTypes:{padding:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=r(t).getByRole("button");await i.click(n)}},en=t=>{const e=d.useRef(null);return a.jsxs(a.Fragment,{children:[a.jsx(u,{hasSpacing:!0,children:D}),a.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne modal"}),a.jsx(g,{...t,ref:e})]})},E={render:en,name:"With Vertical Scrolling (A12)",args:{children:D.repeat(5)},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog");Xe.scroll(s,{target:{scrollTop:200}})}},x={render:m,name:"Click Close Button (A13)",args:{onClose:()=>{console.log("Click CloseButton: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByTitle(ze.t("ds_overlays:modal.CloseModal"));await i.click(s),await l(e.queryByRole("dialog")).not.toBeInTheDocument()}},S={render:m,name:"With AutoClose (A14, A15)",args:{onClose:()=>{console.log("AutoClose: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog");await i.click(s),await l(e.queryByRole("dialog")).not.toBeInTheDocument()}},C={render:m,name:"With AutoClose Disabled (A14)",args:{dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog");await i.click(s),await l(s).toBeInTheDocument()}},A={render:m,name:"With HideTitle (B4)",args:{hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByRole("heading",{level:1});await l(s).toBeInTheDocument()}},nn=t=>{const e=document.querySelector("modal-customelement"),n=e==null?void 0:e.shadowRoot,s=d.useRef(null);return a.jsxs(a.Fragment,{children:[a.jsx(c,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.showModal()},children:"Åpne modal"}),a.jsxs(g,{ref:s,...t,shadowRootNode:n??void 0,children:[a.jsx(u,{hasSpacing:!0,children:D}),a.jsx("div",{className:"borderLeftBlack",children:"Klikk til venstre for border skal ikke lukke modal"}),a.jsx("div",{className:"flex",children:a.jsx(c,{variant:"primary",onClick:()=>{var o;return(o=s.current)==null?void 0:o.close()},children:"Lukk"})})]})]})},R={render:nn,name:"With ShadowDom Click Outside",decorators:[Ye],parameters:{imageSnapshot:{disable:!0},a11y:{disable:!0},customElementName:"modal-customelement"},args:{dismissOnOutsideClick:!0},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t);await l(e.queryByRole("dialog")).not.toBeInTheDocument();const n=t.querySelector("modal-customelement");await l(n).toBeInTheDocument()}},an=t=>{const e=d.useRef(null),[n,s]=d.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),a.jsx(g,{...t,ref:e,children:n?a.jsx($e,{ref:o=>{var p;(p=o==null?void 0:o.textboxRef.current)==null||p.focus()},label:"Navn"}):a.jsx(c,{className:"marginRightM",onClick:()=>s(!0),children:"Vis og fokuser inputfelt"})})]})},tn=t=>{const e=d.useRef(null),[n,s]=d.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),a.jsx(g,{...t,ref:e,children:n?a.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}):a.jsx(c,{className:"marginRightM",onClick:()=>s(!0),children:"Erstatt opplysninger"})})]})},O={render:tn,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus Modal",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog"),o=e.getByText("Erstatt opplysninger");await i.click(o),await l(o).not.toBeInTheDocument(),await i.keyboard("{Escape}"),await l(s).toBeInTheDocument()}},I={render:an,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus TextField",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),n=e.getByRole("button");await i.click(n);const s=e.getByRole("dialog"),o=r(s).getByText("Vis og fokuser inputfelt");await i.click(o),await l(o).not.toBeInTheDocument();const p=e.getByRole("textbox");await l(p).toHaveFocus()}},sn=t=>{const e=d.useRef(null);d.useEffect(()=>{var s;(s=e.current)==null||s.showModal()},[]);const n=()=>{var s;(s=e.current)==null||s.close()};return a.jsxs(a.Fragment,{children:[a.jsx(P,{}),a.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes.
        Testes ved å reloade siden. Det er ved programatisk åpning av modalen at fokus tidligere ikke har blitt satt korrekt.`}),a.jsxs(g,{...t,ref:e,children:[a.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),a.jsxs("div",{className:"flex",children:[a.jsx(c,{className:"marginRightM",children:"Erstatt opplysninger"}),a.jsx(c,{variant:"tertiary",onClick:n,children:"Avbryt"})]})]}),a.jsx(c,{className:"marginRightM",onClick:()=>{var s;return(s=e.current)==null?void 0:s.showModal()},children:"Åpne modal ref.current.showModal"})]})},W={decorators:[t=>(document.body.classList.add("bodyFocus"),a.jsx(t,{}))],render:sn,name:"With Auto Open Close ",args:{variant:"plain"},play:async({canvasElement:t,step:e})=>{const n=r(t);await e("Fokus skal settes på skjult div-element når modalen lukkes etter programatisk åpnet modal",async()=>{const s=await n.findByRole("dialog",{hidden:!1});await l(s).toBeVisible();const o=r(t).getByRole("button",{name:"Avbryt"});await i.click(o);const p=document.querySelector("#topbanner-focus-target");await N(()=>{l(p).toHaveFocus()});const F=await n.findByRole("dialog",{hidden:!0});await l(F).not.toBeVisible()}),await e("Fokus skal IKKE settes på div-element hvis bruker-interaksjon har åpnet modal",async()=>{const s=r(t).getByRole("button",{name:"Åpne modal ref.current.showModal"});await i.click(s);const o=await n.findByRole("dialog",{hidden:!1});await l(o).toBeVisible();const p=r(t).getByRole("button",{name:"Avbryt"});await i.click(p);const F=document.querySelector("#topbanner-focus-target"),Je=await n.findByRole("dialog",{hidden:!0});await l(Je).not.toBeVisible(),await N(()=>{l(F).not.toHaveFocus()})})}},on=t=>{const e=d.useRef(null);return d.useEffect(()=>{var n;(n=e.current)==null||n.showModal()},[]),a.jsxs(a.Fragment,{children:[a.jsx(P,{}),a.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes etter at bruker har trykket på Escape-knappen.
        Modalen åpnes ved å laste siden på nytt. `}),a.jsx(g,{...t,ref:e,children:a.jsx(u,{hasSpacing:!0,children:"Modalinnhold"})}),a.jsx(c,{className:"marginRightM",onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne med klikk"})]})},j={render:on,name:"With Auto Open and Close on Escape",args:{variant:"outline",dismissOnEsc:!0},argTypes:{dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=r(t),n=await e.findByRole("dialog",{hidden:!1});await l(n).toBeVisible(),await i.keyboard("{Escape}");const s=await e.findByRole("dialog",{hidden:!0});await l(s).not.toBeVisible()}},ln=t=>{const e=d.useRef(null);return d.useEffect(()=>{var n;(n=e.current)==null||n.showModal()},[]),a.jsxs(a.Fragment,{children:[a.jsx(P,{}),a.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes etter at bruker har trykket på Escape-knappen.
        Modalen åpnes ved å laste siden på nytt. `}),a.jsxs(g,{...t,ref:e,children:[a.jsx(u,{hasSpacing:!0,children:"Modalinnhold"}),a.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.close()},children:"Lukk modal"})]}),a.jsx(c,{className:"marginRightM",onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne med klikk"})]})},M={render:ln,name:"With Auto Open and Close on User Input",args:{variant:"outline",dismissOnEsc:!1},parameters:{imageSnapshot:{disable:!0}},argTypes:{dismissOnEsc:{table:{disable:!1}}}};var H,q,L;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(L=(q=b.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var U,_,K;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(_=h.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var z,G,J;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Q,Y;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,ae,te;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,le;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,re,ce;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,me,ue;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,ge,be;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(be=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,ye,ve;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ve=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,we,ke;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(we=S.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Be,Te,Ee;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var xe,Se,Ce;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Ae,Re,Oe;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:Oe.source}}};var Ie,We,je;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
} satisfies Story`,...(je=(We=O.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};var Me,De,Fe;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
} satisfies Story`,...(Fe=(De=I.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Ve,Pe,Ne;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
    await step('Fokus skal settes på skjult div-element når modalen lukkes etter programatisk åpnet modal', async () => {
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
} satisfies Story`,...(Ne=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var He,qe,Le;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
} satisfies Story`,...(Le=(qe=j.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Ue,_e,Ke;M.parameters={...M.parameters,docs:{...(Ue=M.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ke=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};const Pn=["WithAttributes","Defaults","VariantPlain","VariantImportant","WithImage","WithIcon","WithTransparentBackground","WithoutCloseButton","WithPadding","WithVerticalScrolling","ClickCloseButton","WithAutoClose","WithAutoCloseDisabled","WithHideTitle","WithShadowDom","WithStateChangeAndFocus","WithStateChangeAndTextFieldFocus","AutoOpen","AutoOpenAndCloseOnEscape","AutoOpenAndCloseOnUserInput"];export{W as AutoOpen,j as AutoOpenAndCloseOnEscape,M as AutoOpenAndCloseOnUserInput,x as ClickCloseButton,h as Defaults,v as VariantImportant,y as VariantPlain,b as WithAttributes,S as WithAutoClose,C as WithAutoCloseDisabled,A as WithHideTitle,w as WithIcon,f as WithImage,T as WithPadding,R as WithShadowDom,O as WithStateChangeAndFocus,I as WithStateChangeAndTextFieldFocus,k as WithTransparentBackground,E as WithVerticalScrolling,B as WithoutCloseButton,Pn as __namedExportsOrder,Vn as default};
//# sourceMappingURL=Modal.test.stories-DUKbqSjd.js.map
