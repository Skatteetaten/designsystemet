import{j as t}from"./jsx-runtime-BYYWji4R.js";import{r as m}from"./index-ClcD9ViR.js";import{w as r,u as l,e as i,a as ze,b as V}from"./index-DIxTUSTt.js";import{B as c}from"./index-DYo2YWtE.js";import{d as qe}from"./index-D9wdQ6Rv.js";import"./index-Sqvq7mYU.js";import{g as Ge}from"./index-BomPkCop.js";import{T as Le}from"./index-Cu8VyHvx.js";import{M as g}from"./index-BHh8H2oz.js";import{P as p}from"./index--gfV2u6P.js";import{l as D}from"./storybook.testing.utils-CMs160i9.js";import{w as Je}from"./webcomponent-decorator-CWEqNSfy.js";import{f as Xe,w as _e}from"./wait-alert-illustration-CyF06_2L.js";import{T as Qe}from"./DatePickerCalendar-CdhpCad8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C176R4Vg.js";import"./Help-qKV-_woo.js";import"./LabelWithHelp-Ck3epTxf.js";import"./index-DeA6s3pl.js";import"./TopBannerButton-CBPTQFjc.js";import"./TopBannerLangPicker-Bd2R10s_.js";import"./TopBannerLangPickerButton-DG6nj_pk.js";import"./TopBannerLogo-Bvp0m3uf.js";import"./TopBannerSkipLink-94qw7mEL.js";import"./TopBannerUserButton-Dy1Qn93E.js";import"./floating-ui.react-CRlmITer.js";import"./index-C-O_Pr5g.js";import"./index-RZuery3U.js";import"./client-uKoRHUzt.js";const F="Vil du erstatte nye opplysninger fra fil?",Oa={component:g,title:"Tester/Modal",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",Xe,_e]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0}},renderIcon:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{children:"Modal innhold",title:F}},d=n=>{const e=m.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(p,{hasSpacing:!0,children:D}),t.jsx(c,{onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne modal"}),t.jsxs(g,{...n,ref:e,children:[t.jsx(p,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),t.jsxs("div",{className:"flex",children:[t.jsx(c,{className:"marginRightM",children:"Erstatt opplysninger"}),t.jsx(c,{variant:"tertiary",onClick:()=>{var a;return(a=e.current)==null?void 0:a.close()},children:"Avbryt"})]})]})]})},b={render:d,name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog");await i(s).toHaveAttribute("id","htmlId"),await i(s).toHaveClass("dummyClassname"),await i(s).toHaveAttribute("lang","nb"),await i(s).toHaveAttribute("data-testid","123ID")}},y={render:d,name:"Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)",args:{},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByLabelText(F);await i(s).toBeInTheDocument();const o=e.getAllByRole("button")[0];await i(o).toBeInTheDocument(),await i(e.getByTitle(qe.t("ds_overlays:modal.CloseModal"))).toBeInTheDocument(),await i(s.tagName).toBe("DIALOG");const u=e.getByText(F);await i(u.tagName).toBe("H1")}},h={render:d,name:"Variant Plain (A8)",args:{variant:"plain"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=r(n).getByRole("button");await l.click(a)}},v={render:d,name:"Variant Important (A1)",args:{variant:"important"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=r(n).getByRole("button");await l.click(a)}},k={render:d,name:"With Image (A1)",args:{imageSource:_e,imageSourceAltText:"Image alt tekst"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const o=e.getByRole("dialog").querySelector("img");await i(o).toBeInTheDocument(),await i(o).toHaveAttribute("alt","Image alt tekst")}},w={render:d,name:"With Icon",args:{renderIcon:()=>t.jsx(Ge,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=r(n).getByRole("button");await l.click(a)}},B={render:d,name:"With Transparent Background (A4, A10)",args:{},play:async({canvasElement:n})=>{const a=r(n).getByRole("button");await l.click(a)}},f={render:d,name:"Without CloseButton (A7)",args:{hideCloseButton:!0},argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=r(n).getByRole("button");await l.click(a)}},T={render:d,name:"With Padding (A9)",args:{padding:"none"},argTypes:{padding:{table:{disable:!1}}},play:async({canvasElement:n})=>{const a=r(n).getByRole("button");await l.click(a)}},Ue=n=>{const e=m.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(p,{hasSpacing:!0,children:D}),t.jsx(c,{onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne modal"}),t.jsx(g,{...n,ref:e})]})},x={render:Ue,name:"With Vertical Scrolling (A12)",args:{children:D.repeat(5)},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog");ze.scroll(s,{target:{scrollTop:200}})}},E={render:d,name:"Click Close Button (A13)",args:{onClose:()=>{console.log("Click CloseButton: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByTitle(qe.t("ds_overlays:modal.CloseModal"));await l.click(s),await i(e.queryByRole("dialog")).not.toBeInTheDocument()}},S={render:d,name:"With AutoClose (A14, A15)",args:{onClose:()=>{console.log("AutoClose: onClose har blitt kalt")}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog");await l.click(s),await i(e.queryByRole("dialog")).not.toBeInTheDocument()}},C={render:d,name:"With AutoClose Disabled (A14)",args:{dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog");await l.click(s),await i(s).toBeInTheDocument()}},A={render:d,name:"With HideTitle (B4)",args:{hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByRole("heading",{level:1});await i(s).toBeInTheDocument()}},Ye=n=>{const e=document.querySelector("modal-customelement"),a=e==null?void 0:e.shadowRoot,s=m.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=s.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsxs(g,{ref:s,...n,shadowRootNode:a??void 0,children:[t.jsx(p,{hasSpacing:!0,children:D}),t.jsx("div",{className:"borderLeftBlack",children:"Klikk til venstre for border skal ikke lukke modal"}),t.jsx("div",{className:"flex",children:t.jsx(c,{variant:"primary",onClick:()=>{var o;return(o=s.current)==null?void 0:o.close()},children:"Lukk"})})]})]})},R={render:Ye,name:"With ShadowDom Click Outside",decorators:[Je],parameters:{imageSnapshot:{disable:!0},a11y:{disable:!0},customElementName:"modal-customelement"},args:{dismissOnOutsideClick:!0},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n);await i(e.queryByRole("dialog")).not.toBeInTheDocument();const a=n.querySelector("modal-customelement");await i(a).toBeInTheDocument()}},Ze=n=>{const e=m.useRef(null),[a,s]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsx(g,{...n,ref:e,children:a?t.jsx(Qe,{ref:o=>{var u;(u=o==null?void 0:o.textboxRef.current)==null||u.focus()},label:"Navn"}):t.jsx(c,{className:"marginRightM",onClick:()=>s(!0),children:"Vis og fokuser inputfelt"})})]})},$e=n=>{const e=m.useRef(null),[a,s]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{var o;return(o=e.current)==null?void 0:o.showModal()},children:"Åpne modal"}),t.jsx(g,{...n,ref:e,children:a?t.jsx(p,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}):t.jsx(c,{className:"marginRightM",onClick:()=>s(!0),children:"Erstatt opplysninger"})})]})},I={render:$e,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus Modal",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog"),o=e.getByText("Erstatt opplysninger");await l.click(o),await i(o).not.toBeInTheDocument(),await l.keyboard("{Escape}"),await i(s).toBeInTheDocument()}},O={render:Ze,parameters:{imageSnapshot:{disable:!0}},name:"With State Change and Focus TextField",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=e.getByRole("button");await l.click(a);const s=e.getByRole("dialog"),o=r(s).getByText("Vis og fokuser inputfelt");await l.click(o),await i(o).not.toBeInTheDocument();const u=e.getByRole("textbox");await i(u).toHaveFocus()}},ea=n=>{const e=m.useRef(null);m.useEffect(()=>{var s;(s=e.current)==null||s.showModal()},[]);const a=()=>{var s;(s=e.current)==null||s.close()};return t.jsxs(t.Fragment,{children:[t.jsx(Le,{}),t.jsx(p,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skiplink a-elementet når modalen lukkes. 
        Testes ved å reloade siden. Det er ved programatisk åpning av modalen at fokus tidligere ikke har blitt satt korrekt.`}),t.jsxs(g,{...n,ref:e,children:[t.jsx(p,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),t.jsxs("div",{className:"flex",children:[t.jsx(c,{className:"marginRightM",children:"Erstatt opplysninger"}),t.jsx(c,{variant:"tertiary",onClick:a,children:"Avbryt"})]})]}),t.jsx(c,{className:"marginRightM",onClick:()=>{var s;return(s=e.current)==null?void 0:s.showModal()},children:"Åpne modal ref.current.showModal"})]})},W={decorators:[n=>(document.body.classList.add("bodyFocus"),t.jsx(n,{}))],render:ea,name:"With Auto Open Close ",args:{variant:"plain"},play:async({canvasElement:n,step:e})=>{const a=r(n);await e("Fokus skal settes på skiplink a-elementet når modalen lukkes etter programatisk åpnet modal",async()=>{const s=await a.findByRole("dialog",{hidden:!1});await i(s).toBeVisible();const o=r(n).getByRole("button",{name:"Avbryt"});await l.click(o);const u=document.querySelector("a[data-skip-link]");await V(()=>{i(u).toHaveFocus()});const M=await a.findByRole("dialog",{hidden:!0});await i(M).not.toBeVisible()}),await e("Fokus skal IKKE settes på skiplink hvis bruker-interaksjon har åpnet modal",async()=>{const s=r(n).getByRole("button",{name:"Åpne modal ref.current.showModal"});await l.click(s);const o=await a.findByRole("dialog",{hidden:!1});await i(o).toBeVisible();const u=r(n).getByRole("button",{name:"Avbryt"});await l.click(u);const M=document.querySelector("a[data-skip-link]"),Ke=await a.findByRole("dialog",{hidden:!0});await i(Ke).not.toBeVisible(),await V(()=>{i(M).not.toHaveFocus()})})}},aa=n=>{const e=m.useRef(null);return m.useEffect(()=>{var a;(a=e.current)==null||a.showModal()},[]),t.jsxs(t.Fragment,{children:[t.jsx(Le,{}),t.jsx(p,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skiplink a-elementet når modalen lukkes etter at bruker har trykket på Escape-knappen. 
        Modalen åpnes ved å laste siden på nytt. `}),t.jsx(g,{...n,ref:e,children:t.jsx(p,{hasSpacing:!0,children:"Modalinnhold"})}),t.jsx(c,{className:"marginRightM",onClick:()=>{var a;return(a=e.current)==null?void 0:a.showModal()},children:"Åpne med klikk"})]})},j={render:aa,name:"With Auto Open and Close on Escape",args:{variant:"outline",dismissOnEsc:!0},argTypes:{dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:n})=>{const e=r(n),a=await e.findByRole("dialog",{hidden:!1});await i(a).toBeVisible(),await l.keyboard("{Escape}");const s=await e.findByRole("dialog",{hidden:!0});await i(s).not.toBeVisible()}};var P,H,N;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(H=b.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var q,L,_;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(L=y.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var K,z,G;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(z=h.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,X,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(Q=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var U,Y,Z;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
} satisfies Story`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
} satisfies Story`,...(se=(te=B.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ie,le;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
} satisfies Story`,...(le=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,ce,de;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(de=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,pe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,be,ye;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
} satisfies Story`,...(ye=(be=E.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,ve,ke;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var we,Be,fe;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(fe=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:fe.source}}};var Te,xe,Ee;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ee=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Se,Ce,Ae;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ae=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var Re,Ie,Oe;I.parameters={...I.parameters,docs:{...(Re=I.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
} satisfies Story`,...(Oe=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var We,je,De;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
} satisfies Story`,...(De=(je=O.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var Me,Fe,Ve;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
    await step('Fokus skal settes på skiplink a-elementet når modalen lukkes etter programatisk åpnet modal', async () => {
      const openmodal = await canvas.findByRole('dialog', {
        hidden: false
      });
      await expect(openmodal).toBeVisible();
      const button = within(canvasElement).getByRole('button', {
        name: 'Avbryt'
      });
      await userEvent.click(button);
      const skiplink = document.querySelector('a[data-skip-link]');
      await waitFor(() => {
        expect(skiplink).toHaveFocus();
      });
      const closedmodal = await canvas.findByRole('dialog', {
        hidden: true
      });
      await expect(closedmodal).not.toBeVisible();
    });
    await step('Fokus skal IKKE settes på skiplink hvis bruker-interaksjon har åpnet modal', async () => {
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
      const skiplink = document.querySelector('a[data-skip-link]');
      const closedmodal = await canvas.findByRole('dialog', {
        hidden: true
      });
      await expect(closedmodal).not.toBeVisible();
      await waitFor(() => {
        expect(skiplink).not.toHaveFocus();
      });
    });
  }
} satisfies Story`,...(Ve=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Pe,He,Ne;j.parameters={...j.parameters,docs:{...(Pe=j.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ne=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};const Wa=["WithAttributes","Defaults","VariantPlain","VariantImportant","WithImage","WithIcon","WithTransparentBackground","WithoutCloseButton","WithPadding","WithVerticalScrolling","ClickCloseButton","WithAutoClose","WithAutoCloseDisabled","WithHideTitle","WithShadowDom","WithStateChangeAndFocus","WithStateChangeAndTextFieldFocus","AutoOpen","AutoOpenAndCloseOnEscape"];export{W as AutoOpen,j as AutoOpenAndCloseOnEscape,E as ClickCloseButton,y as Defaults,v as VariantImportant,h as VariantPlain,b as WithAttributes,S as WithAutoClose,C as WithAutoCloseDisabled,A as WithHideTitle,w as WithIcon,k as WithImage,T as WithPadding,R as WithShadowDom,I as WithStateChangeAndFocus,O as WithStateChangeAndTextFieldFocus,B as WithTransparentBackground,x as WithVerticalScrolling,f as WithoutCloseButton,Wa as __namedExportsOrder,Oa as default};
//# sourceMappingURL=Modal.test.stories-j6No8sBZ.js.map
