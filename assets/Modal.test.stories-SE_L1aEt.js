import{j as t,r as d,d as ze}from"./iframe-DRo7xN6O.js";import{B as c}from"./index-C6akGUuV.js";import"./index-CJxdEpCy.js";import{h as Ye}from"./index-CIGiQTsv.js";import{T as V}from"./index-D7FhWP7R.js";import{M as p}from"./index-B5WJrEEq.js";import{P as u}from"./index-K3PRhlds.js";import{l as F}from"./storybook.testing.utils-CMs160i9.js";import{w as Qe}from"./webcomponent-decorator-BHRSHv5y.js";import{f as Ze,w as Ge}from"./wait-alert-illustration-WfBZYz21.js";import{T as Je}from"./DatePickerCalendar-CUYwtYgr.js";import"./index-AjPAYYXA.js";import"./Help-Ifm0iuuA.js";import"./LabelWithHelp-BVIbSHOi.js";import"./index-hkRDeZHX.js";import"./index-CHHc706Z.js";import"./TopBannerButton-C2ELRsfh.js";import"./floating-ui.react-IcOuk_wg.js";import"./index-DA0HsgN3.js";import"./index-DOQ9qhsR.js";import"./TopBannerLangPicker-BW74ufXQ.js";import"./TopBannerLangPickerButton-CIMt-Om0.js";import"./TopBannerLogo-D0_DV1Pw.js";import"./TopBannerSkipLink-b18V5XQT.js";import"./TopBannerUserButton-BCzVJE_M.js";import"./index-Ck9Bd1tT.js";import"./client-C8Q-eJHp.js";const{expect:i,userEvent:l,fireEvent:$e,within:r,waitFor:N}=__STORYBOOK_MODULE_TEST__,H="Vil du erstatte nye opplysninger fra fil?",Dn={component:p,title:"Tester/Modal",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",Ze,Ge]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0}},renderIcon:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{children:"Modal innhold",title:H},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},m=a=>{const e=d.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{hasSpacing:!0,children:F}),t.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne modal"}),t.jsxs(p,{...a,ref:e,children:[t.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),t.jsxs("div",{className:"flex",children:[t.jsx(c,{className:"marginRightM",children:"Erstatt opplysninger"}),t.jsx(c,{variant:"tertiary",onClick:()=>{var n;return(n=e.current)==null?void 0:n.close()},children:"Avbryt"})]})]})]})},h={render:m,name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByRole("dialog");await i(s).toHaveAttribute("id","htmlId"),await i(s).toHaveClass("dummyClassname"),await i(s).toHaveAttribute("lang","nb"),await i(s).toHaveAttribute("data-testid","123ID")}},b={render:m,name:"Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)",args:{},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByLabelText(H);await i(s).toBeInTheDocument();const o=e.getAllByRole("button")[0];await i(o).toBeInTheDocument(),await i(e.getByTitle(ze.t("ds_overlays:modal.CloseModal"))).toBeInTheDocument(),await i(s.tagName).toBe("DIALOG");const g=e.getByText(H);await i(g.tagName).toBe("H1")}},y={render:m,name:"Variant Plain (A8)",args:{variant:"plain"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await l.click(n)}},v={render:m,name:"With Image (A1)",args:{imageSource:Ge,imageSourceAltText:"Image alt tekst"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const o=e.getByRole("dialog").querySelector("img");await i(o).toBeInTheDocument(),await i(o).toHaveAttribute("alt","Image alt tekst")}},w={render:m,name:"With Icon",args:{renderIcon:()=>t.jsx(Ye,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await l.click(n)}},B={render:m,name:"With Transparent Background (A4, A10)",args:{},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await l.click(n)}},f={render:m,name:"Without CloseButton (A7)",args:{hideCloseButton:!0},argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await l.click(n)}},k={render:m,name:"With Padding (A9)",args:{padding:"none"},argTypes:{padding:{table:{disable:!1}}},play:async({canvasElement:a})=>{const n=r(a).getByRole("button");await l.click(n)}},en=a=>{const e=d.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(u,{hasSpacing:!0,children:F}),t.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne modal"}),t.jsx(p,{...a,ref:e})]})},x={render:en,name:"With Vertical Scrolling (A12)",args:{children:F.repeat(5)},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{options:{maxHeight:{maxHeight:{name:"maxHeight",styles:{height:"500px"}}}}},chromatic:{modes:{maxHeight:{viewport:"maxHeight"}}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByRole("dialog");$e.scroll(s,{target:{scrollTop:200}})}},T={render:m,name:"Click Close Button (A13)",args:{onClose:()=>{console.log("Click CloseButton: onClose har blitt kalt")}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByTitle(ze.t("ds_overlays:modal.CloseModal"));await l.click(s),await i(e.queryByRole("dialog")).not.toBeInTheDocument()}},E={render:m,name:"With AutoClose (A14, A15)",args:{onClose:()=>{console.log("AutoClose: onClose har blitt kalt")}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByRole("dialog");await l.click(s),await i(e.queryByRole("dialog")).not.toBeInTheDocument()}},S={render:m,name:"With AutoClose Disabled (A14)",args:{dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByRole("dialog");await l.click(s),await i(s).toBeInTheDocument()}},C={render:m,name:"With HideTitle (B4)",args:{hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByRole("heading",{level:1});await i(s).toBeInTheDocument()}},nn=a=>{const e=document.querySelector("modal-customelement"),n=e==null?void 0:e.shadowRoot,s=d.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsxs(p,{ref:s,...a,shadowRootNode:n??void 0,children:[t.jsx(u,{hasSpacing:!0,children:F}),t.jsx("div",{className:"borderLeftBlack",children:"Klikk til venstre for border skal ikke lukke modal"}),t.jsx("div",{className:"flex",children:t.jsx(c,{variant:"primary",onClick:()=>{var o;return(o=s.current)==null?void 0:o.close()},children:"Lukk"})})]})]})},R={render:nn,name:"With ShadowDom Click Outside",decorators:[Qe],parameters:{chromatic:{disableSnapshot:!0},a11y:{disable:!0},customElementName:"modal-customelement"},args:{dismissOnOutsideClick:!0},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a);await i(e.queryByRole("dialog")).not.toBeInTheDocument();const n=a.querySelector("modal-customelement");await i(n).toBeInTheDocument()}},tn=a=>{const e=d.useRef(null),[n,s]=d.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsx(p,{...a,ref:e,children:n?t.jsx(Je,{ref:o=>{o==null||o.focus()},label:"Navn"}):t.jsx(c,{className:"marginRightM",onClick:()=>s(!0),children:"Vis og fokuser inputfelt"})})]})},an=a=>{const e=d.useRef(null),[n,s]=d.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsx(p,{...a,ref:e,children:n?t.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}):t.jsx(c,{className:"marginRightM",onClick:()=>s(!0),children:"Erstatt opplysninger"})})]})},A={render:an,parameters:{chromatic:{disableSnapshot:!0}},name:"With State Change and Focus Modal",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByRole("dialog"),o=e.getByText("Erstatt opplysninger");await l.click(o),await i(o).not.toBeInTheDocument(),await l.keyboard("{Escape}"),await i(s).toBeInTheDocument()}},O={render:tn,parameters:{chromatic:{disableSnapshot:!0}},name:"With State Change and Focus TextField",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button");await l.click(n);const s=e.getByRole("dialog"),o=r(s).getByText("Vis og fokuser inputfelt");await l.click(o),await i(o).not.toBeInTheDocument();const g=e.getByRole("textbox");await i(g).toHaveFocus()}},sn=a=>{const e=d.useRef(null);d.useEffect(()=>{var s;(s=e.current)==null||s.showModal()},[]);const n=()=>{var s;(s=e.current)==null||s.close()};return t.jsxs(t.Fragment,{children:[t.jsx(V,{}),t.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes.
        Testes ved å reloade siden. Det er ved programatisk åpning av modalen at fokus tidligere ikke har blitt satt korrekt.`}),t.jsxs(p,{...a,ref:e,children:[t.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),t.jsxs("div",{className:"flex",children:[t.jsx(c,{className:"marginRightM",children:"Erstatt opplysninger"}),t.jsx(c,{variant:"tertiary",onClick:n,children:"Avbryt"})]})]}),t.jsx(c,{className:"marginRightM",onClick:()=>{var s;return(s=e.current)==null?void 0:s.showModal()},children:"Åpne modal ref.current.showModal"})]})},I={decorators:[a=>(document.body.classList.add("bodyFocus"),t.jsx(a,{}))],render:sn,name:"With Auto Open Close ",args:{variant:"plain"},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a,step:e})=>{const n=r(a);await e("Fokus skal settes på skjult div-element når modalen lukkes etter programatisk åpnet modal.",async()=>{const s=await n.findByRole("dialog",{hidden:!1});await i(s).toBeVisible();const o=r(a).getByRole("button",{name:"Avbryt"});await l.click(o);const g=document.querySelector("#topbanner-focus-target");await N(()=>{i(g).toHaveFocus()});const D=await n.findByRole("dialog",{hidden:!0});await i(D).not.toBeVisible()}),await e("Fokus skal IKKE settes på div-element hvis bruker-interaksjon har åpnet modal",async()=>{const s=r(a).getByRole("button",{name:"Åpne modal ref.current.showModal"});await l.click(s);const o=await n.findByRole("dialog",{hidden:!1});await i(o).toBeVisible();const g=r(a).getByRole("button",{name:"Avbryt"});await l.click(g);const D=document.querySelector("#topbanner-focus-target"),Xe=await n.findByRole("dialog",{hidden:!0});await i(Xe).not.toBeVisible(),await N(()=>{i(D).not.toHaveFocus()})})}},on=a=>{const e=d.useRef(null);return d.useEffect(()=>{var n;(n=e.current)==null||n.showModal()},[]),t.jsxs(t.Fragment,{children:[t.jsx(V,{}),t.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes etter at bruker har trykket på Escape-knappen.
        Modalen åpnes ved å laste siden på nytt. `}),t.jsx(p,{...a,ref:e,children:t.jsx(u,{hasSpacing:!0,children:"Modalinnhold"})}),t.jsx(c,{className:"marginRightM",onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne med klikk"})]})},W={render:on,name:"With Auto Open and Close on Escape",args:{variant:"outline",dismissOnEsc:!0},argTypes:{dismissOnEsc:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:a})=>{const e=r(a),n=await e.findByRole("dialog",{hidden:!1});await i(n).toBeVisible(),await l.keyboard("{Escape}");const s=await e.findByRole("dialog",{hidden:!0});await i(s).not.toBeVisible()}},ln=a=>{const e=d.useRef(null);return d.useEffect(()=>{var n;(n=e.current)==null||n.showModal()},[]),t.jsxs(t.Fragment,{children:[t.jsx(V,{}),t.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes etter at bruker har trykket på Escape-knappen.
        Modalen åpnes ved å laste siden på nytt. `}),t.jsxs(p,{...a,ref:e,children:[t.jsx(u,{hasSpacing:!0,children:"Modalinnhold"}),t.jsx(c,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.close()},children:"Lukk modal"})]}),t.jsx(c,{className:"marginRightM",onClick:()=>{var n;return(n=e.current)==null?void 0:n.showModal()},children:"Åpne med klikk"})]})},j={render:ln,name:"With Auto Open and Close on User Input",args:{variant:"outline",dismissOnEsc:!1},parameters:{chromatic:{disableSnapshot:!0}},argTypes:{dismissOnEsc:{table:{disable:!1}}}},rn=a=>{const e=d.useRef(null),[n,s]=d.useState("");return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsxs(p,{...a,ref:e,children:[t.jsx(Je,{label:"Navn (minst 3 tegn)",errorMessage:n,onBlur:()=>s("Navnet må være minst 3 tegn")}),t.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.close()},children:"Lukk"})]})]})},M={render:rn,name:"With Form Validation Focus Retention",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},parameters:{chromatic:{disableSnapshot:!0}},argTypes:{dismissOnEsc:{table:{disable:!1}},dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=r(a),n=e.getByRole("button",{name:"Åpne modal"});await l.click(n);const s=e.getByRole("dialog");await i(s).toBeInTheDocument();const o=e.getByRole("textbox");await l.click(o),await l.tab();const g=e.getByRole("button",{name:"Lukk"});await i(e.getByText("Navnet må være minst 3 tegn")).toBeInTheDocument(),await i(g).toHaveFocus()}};var P,L,q;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    a11y: {
      test: 'off'
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
} satisfies Story`,...(q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var _,U,K;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
} satisfies Story`,...(K=(U=b.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var z,G,J;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Q;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var Z,$,ee;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
} satisfies Story`,...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,ae;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,ie;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
} satisfies Story`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,re,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
} satisfies Story`,...(ce=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,me,ue;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
  parameters: {
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
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const modal = canvas.getByRole('dialog');
    fireEvent.scroll(modal, {
      target: {
        scrollTop: 200
      }
    });
  }
} satisfies Story`,...(ue=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,ge,he;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'Click Close Button (A13)',
  args: {
    onClose: (): void => {
      console.log('Click CloseButton: onClose har blitt kalt');
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...(he=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,ye,ve;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'With AutoClose (A14, A15)',
  args: {
    onClose: (): void => {
      console.log('AutoClose: onClose har blitt kalt');
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...(ve=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var we,Be,fe;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...(fe=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:fe.source}}};var ke,xe,Te;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
} satisfies Story`,...(Te=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Ee,Se,Ce;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: TemplateWithShadowDom,
  name: 'With ShadowDom Click Outside',
  decorators: [webComponent],
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...(Ce=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Re,Ae,Oe;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: TemplateModalWithStateChange,
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...(Oe=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Ie,We,je;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: TemplateModalWithStateChangeAndFocusedInput,
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...(je=(We=O.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};var Me,Fe,De;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
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
} satisfies Story`,...(De=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var He,Ve,Ne;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
  parameters: {
    chromatic: {
      disableSnapshot: true
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
} satisfies Story`,...(Ne=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Ne.source}}};var Pe,Le,qe;j.parameters={...j.parameters,docs:{...(Pe=j.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: TemplateWithAutoOpenAndCloseOnUserInput,
  name: 'With Auto Open and Close on User Input',
  args: {
    variant: 'outline',
    dismissOnEsc: false
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  argTypes: {
    dismissOnEsc: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(qe=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var _e,Ue,Ke;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: TemplateWithFormValidation,
  name: 'With Form Validation Focus Retention',
  args: {
    dismissOnEsc: false,
    dismissOnOutsideClick: false
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  argTypes: {
    dismissOnEsc: {
      table: {
        disable: false
      }
    },
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
    const openButton = canvas.getByRole('button', {
      name: 'Åpne modal'
    });
    await userEvent.click(openButton);
    const modal = canvas.getByRole('dialog');
    await expect(modal).toBeInTheDocument();
    const textField = canvas.getByRole('textbox');
    await userEvent.click(textField);
    await userEvent.tab();
    const closeButton = canvas.getByRole('button', {
      name: 'Lukk'
    });
    await expect(canvas.getByText('Navnet må være minst 3 tegn')).toBeInTheDocument();
    await expect(closeButton).toHaveFocus();
  }
} satisfies Story`,...(Ke=(Ue=M.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};const Hn=["WithAttributes","Defaults","VariantPlain","WithImage","WithIcon","WithTransparentBackground","WithoutCloseButton","WithPadding","WithVerticalScrolling","ClickCloseButton","WithAutoClose","WithAutoCloseDisabled","WithHideTitle","WithShadowDom","WithStateChangeAndFocus","WithStateChangeAndTextFieldFocus","AutoOpen","AutoOpenAndCloseOnEscape","AutoOpenAndCloseOnUserInput","WithFormValidationFocusRetention"];export{I as AutoOpen,W as AutoOpenAndCloseOnEscape,j as AutoOpenAndCloseOnUserInput,T as ClickCloseButton,b as Defaults,y as VariantPlain,h as WithAttributes,E as WithAutoClose,S as WithAutoCloseDisabled,M as WithFormValidationFocusRetention,C as WithHideTitle,w as WithIcon,v as WithImage,k as WithPadding,R as WithShadowDom,A as WithStateChangeAndFocus,O as WithStateChangeAndTextFieldFocus,B as WithTransparentBackground,x as WithVerticalScrolling,f as WithoutCloseButton,Hn as __namedExportsOrder,Dn as default};
//# sourceMappingURL=Modal.test.stories-SE_L1aEt.js.map
