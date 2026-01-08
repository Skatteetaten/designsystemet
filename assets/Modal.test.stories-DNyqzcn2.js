import{j as n,r as d,d as q}from"./iframe-s2_bNgHU.js";import{B as r}from"./index-Ck1G954W.js";import"./index-D9_nlc1h.js";import{k as J}from"./index-CUsfAC9p.js";import{T as V}from"./index-7wWg-Emv.js";import{M as p}from"./index-C_DRppF7.js";import{P as u}from"./index-CJpzHRrE.js";import{l as h}from"./storybook.testing.utils-BgHZnMzD.js";import{w as X}from"./webcomponent-decorator-CriNZtyj.js";import{f as z,w as _}from"./wait-alert-illustration-BXqktCEg.js";import{T as U}from"./DatePickerCalendar-ePUd64Qm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcFKixUR.js";import"./Help-DC9TS-B6.js";import"./Combobox.module-CSHfGvVK.js";import"./ComboboxButton-COhLZqHg.js";import"./ComboboxSelectedOptions-DI0eIcsf.js";import"./index-DFs0_No2.js";import"./index-jj9Gfu02.js";import"./LabelWithHelp-rfkuXU1a.js";import"./index-DdQvxWAg.js";import"./TopBannerButton-DfVK1v-G.js";import"./floating-ui.react-E96A4XpZ.js";import"./index-Dl0hHgc-.js";import"./index-CYEZhpn0.js";import"./TopBannerLangPicker-B12Cqjgb.js";import"./TopBannerLangPickerButton-B89Cuo20.js";import"./TopBannerLogo-2_yXoyy5.js";import"./TopBannerSkipLink-pDXC9-Fu.js";import"./TopBannerUserButton-CgWAyyOh.js";import"./index-BjBiKebW.js";import"./client-BpwZUzjP.js";const{expect:o,userEvent:i,fireEvent:G,within:l,waitFor:L}=__STORYBOOK_MODULE_TEST__,P="Vil du erstatte nye opplysninger fra fil?",De={component:p,title:"Tester/Modal",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},dismissOnEsc:{table:{disable:!0}},dismissOnOutsideClick:{table:{disable:!0}},hideCloseButton:{table:{disable:!0}},hideTitle:{table:{disable:!0}},imageSource:{table:{disable:!0},control:"select",options:["",z,_]},imageSourceAltText:{table:{disable:!0}},padding:{table:{disable:!0}},renderIcon:{table:{disable:!0}},shadowRootNode:{table:{disable:!0}},title:{table:{disable:!0}},variant:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{children:"Modal innhold",title:P},tags:["test"],parameters:{chromatic:{disableSnapshot:!1}}},m=t=>{const e=d.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(u,{hasSpacing:!0,children:h}),n.jsx(r,{onClick:()=>e.current?.showModal(),children:"Åpne modal"}),n.jsxs(p,{...t,ref:e,children:[n.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),n.jsxs("div",{className:"flex",children:[n.jsx(r,{className:"marginRightM",children:"Erstatt opplysninger"}),n.jsx(r,{variant:"tertiary",onClick:()=>e.current?.close(),children:"Avbryt"})]})]})]})},b={render:m,name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog");await o(s).toHaveAttribute("id","htmlId"),await o(s).toHaveClass("dummyClassname"),await o(s).toHaveAttribute("lang","nb"),await o(s).toHaveAttribute("data-testid","123ID")}},y={render:m,name:"Defaults (A1, A2, A3 delvis, A5, A6 delvis, A10, B1, B3, B4, B5 delvis)",args:{},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByLabelText(P);await o(s).toBeInTheDocument();const c=e.getAllByRole("button")[0];await o(c).toBeInTheDocument(),await o(e.getByTitle(q.t("ds_overlays:modal.CloseModal"))).toBeInTheDocument(),await o(s.tagName).toBe("DIALOG");const g=e.getByText(P);await o(g.tagName).toBe("H1")}},v={render:m,name:"Variant Plain (A8)",args:{variant:"plain"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=l(t).getByRole("button");await i.click(a)}},w={render:m,name:"With Image (A1)",args:{imageSource:_,imageSourceAltText:"Image alt tekst"},argTypes:{imageSource:{table:{disable:!1}},imageSourceAltText:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const c=e.getByRole("dialog").querySelector("img");await o(c).toBeInTheDocument(),await o(c).toHaveAttribute("alt","Image alt tekst")}},B={render:m,name:"With Icon",args:{renderIcon:()=>n.jsx(J,{size:"extraLarge"})},argTypes:{renderIcon:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=l(t).getByRole("button");await i.click(a)}},f={render:m,name:"With Transparent Background (A4, A10)",args:{},play:async({canvasElement:t})=>{const a=l(t).getByRole("button");await i.click(a)}},k={render:m,name:"Without CloseButton (A7)",args:{hideCloseButton:!0},argTypes:{hideCloseButton:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=l(t).getByRole("button");await i.click(a)}},x={render:m,name:"With Padding (A9)",args:{padding:"none"},argTypes:{padding:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=l(t).getByRole("button");await i.click(a)}},Y=t=>{const e=d.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(u,{hasSpacing:!0,children:h}),n.jsx(r,{onClick:()=>e.current?.showModal(),children:"Åpne modal"}),n.jsx(p,{...t,ref:e})]})},T={render:Y,name:"With Vertical Scrolling (A12)",args:{children:h.repeat(5)},argTypes:{children:{table:{disable:!1}}},parameters:{viewport:{options:{maxHeight:{maxHeight:{name:"maxHeight",styles:{height:"500px"}}}}},chromatic:{modes:{maxHeight:{viewport:"maxHeight"}}}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog");G.scroll(s,{target:{scrollTop:200}})}},E={render:m,name:"Click Close Button (A13)",args:{onClose:()=>{console.log("Click CloseButton: onClose har blitt kalt")}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByTitle(q.t("ds_overlays:modal.CloseModal"));await i.click(s),await o(e.queryByRole("dialog")).not.toBeInTheDocument()}},S={render:m,name:"With AutoClose (A14, A15)",args:{onClose:()=>{console.log("AutoClose: onClose har blitt kalt")}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog");await i.click(s),await o(e.queryByRole("dialog")).not.toBeInTheDocument()}},C={render:m,name:"With AutoClose Disabled (A14)",args:{dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog");await i.click(s),await o(s).toBeInTheDocument()}},R={render:m,name:"With HideTitle (B4)",args:{hideTitle:!0},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("heading",{level:1});await o(s).toBeInTheDocument()}},Q=t=>{const a=document.querySelector("modal-customelement")?.shadowRoot,s=d.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>s.current?.showModal(),children:"Åpne modal"}),n.jsxs(p,{ref:s,...t,shadowRootNode:a??void 0,children:[n.jsx(u,{hasSpacing:!0,children:h}),n.jsx("div",{className:"borderLeftBlack",children:"Klikk til venstre for border skal ikke lukke modal"}),n.jsx("div",{className:"flex",children:n.jsx(r,{variant:"primary",onClick:()=>s.current?.close(),children:"Lukk"})})]})]})},A={render:Q,name:"With ShadowDom Click Outside",decorators:[X],parameters:{chromatic:{disableSnapshot:!0},a11y:{disable:!0},customElementName:"modal-customelement"},args:{dismissOnOutsideClick:!0},argTypes:{dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t);await o(e.queryByRole("dialog")).not.toBeInTheDocument();const a=t.querySelector("modal-customelement");await o(a).toBeInTheDocument()}},Z=t=>{const e=d.useRef(null),[a,s]=d.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>e.current?.showModal(),children:"Åpne modal"}),n.jsx(p,{...t,ref:e,children:a?n.jsx(U,{ref:c=>{c?.focus()},label:"Navn"}):n.jsx(r,{className:"marginRightM",onClick:()=>s(!0),children:"Vis og fokuser inputfelt"})})]})},$=t=>{const e=d.useRef(null),[a,s]=d.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>e.current?.showModal(),children:"Åpne modal"}),n.jsx(p,{...t,ref:e,children:a?n.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}):n.jsx(r,{className:"marginRightM",onClick:()=>s(!0),children:"Erstatt opplysninger"})})]})},O={render:$,parameters:{chromatic:{disableSnapshot:!0}},name:"With State Change and Focus Modal",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog"),c=e.getByText("Erstatt opplysninger");await i.click(c),await o(c).not.toBeInTheDocument(),await i.keyboard("{Escape}"),await o(s).toBeInTheDocument()}},j={render:Z,parameters:{chromatic:{disableSnapshot:!0}},name:"With State Change and Focus TextField",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},argTypes:{dismissOnOutsideClick:{table:{disable:!1}},dismissOnEsc:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button");await i.click(a);const s=e.getByRole("dialog"),c=l(s).getByText("Vis og fokuser inputfelt");await i.click(c),await o(c).not.toBeInTheDocument();const g=e.getByRole("textbox");await o(g).toHaveFocus()}},ee=t=>{const e=d.useRef(null);d.useEffect(()=>{e.current?.showModal()},[]);const a=()=>{e.current?.close()};return n.jsxs(n.Fragment,{children:[n.jsx(V,{}),n.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes.
        Testes ved å reloade siden. Det er ved programatisk åpning av modalen at fokus tidligere ikke har blitt satt korrekt.`}),n.jsxs(p,{...t,ref:e,children:[n.jsx(u,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),n.jsxs("div",{className:"flex",children:[n.jsx(r,{className:"marginRightM",children:"Erstatt opplysninger"}),n.jsx(r,{variant:"tertiary",onClick:a,children:"Avbryt"})]})]}),n.jsx(r,{className:"marginRightM",onClick:()=>e.current?.showModal(),children:"Åpne modal ref.current.showModal"})]})},I={decorators:[t=>(document.body.classList.add("bodyFocus"),n.jsx(t,{}))],render:ee,name:"With Auto Open Close ",args:{variant:"plain"},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t,step:e})=>{const a=l(t);await e("Fokus skal settes på skjult div-element når modalen lukkes etter programatisk åpnet modal.",async()=>{const s=await a.findByRole("dialog",{hidden:!1});await o(s).toBeVisible();const c=l(t).getByRole("button",{name:"Avbryt"});await i.click(c);const g=document.querySelector("#topbanner-focus-target");await L(()=>{o(g).toHaveFocus()});const N=await a.findByRole("dialog",{hidden:!0});await o(N).not.toBeVisible()}),await e("Fokus skal IKKE settes på div-element hvis bruker-interaksjon har åpnet modal",async()=>{const s=l(t).getByRole("button",{name:"Åpne modal ref.current.showModal"});await i.click(s);const c=await a.findByRole("dialog",{hidden:!1});await o(c).toBeVisible();const g=l(t).getByRole("button",{name:"Avbryt"});await i.click(g);const N=document.querySelector("#topbanner-focus-target"),K=await a.findByRole("dialog",{hidden:!0});await o(K).not.toBeVisible(),await L(()=>{o(N).not.toHaveFocus()})})}},ne=t=>{const e=d.useRef(null);return d.useEffect(()=>{e.current?.showModal()},[]),n.jsxs(n.Fragment,{children:[n.jsx(V,{}),n.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes etter at bruker har trykket på Escape-knappen.
        Modalen åpnes ved å laste siden på nytt. `}),n.jsx(p,{...t,ref:e,children:n.jsx(u,{hasSpacing:!0,children:"Modalinnhold"})}),n.jsx(r,{className:"marginRightM",onClick:()=>e.current?.showModal(),children:"Åpne med klikk"})]})},W={render:ne,name:"With Auto Open and Close on Escape",args:{variant:"outline",dismissOnEsc:!0},argTypes:{dismissOnEsc:{table:{disable:!1}}},parameters:{chromatic:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const e=l(t),a=await e.findByRole("dialog",{hidden:!1});await o(a).toBeVisible(),await i.keyboard("{Escape}");const s=await e.findByRole("dialog",{hidden:!0});await o(s).not.toBeVisible()}},te=t=>{const e=d.useRef(null);return d.useEffect(()=>{e.current?.showModal()},[]),n.jsxs(n.Fragment,{children:[n.jsx(V,{}),n.jsx(u,{hasSpacing:!0,children:`Denne testen skal sjekke om fokus blir satt på skjult div-element når modalen lukkes etter at bruker har trykket på Escape-knappen.
        Modalen åpnes ved å laste siden på nytt. `}),n.jsxs(p,{...t,ref:e,children:[n.jsx(u,{hasSpacing:!0,children:"Modalinnhold"}),n.jsx(r,{onClick:()=>e.current?.close(),children:"Lukk modal"})]}),n.jsx(r,{className:"marginRightM",onClick:()=>e.current?.showModal(),children:"Åpne med klikk"})]})},M={render:te,name:"With Auto Open and Close on User Input",args:{variant:"outline",dismissOnEsc:!1},parameters:{chromatic:{disableSnapshot:!0}},argTypes:{dismissOnEsc:{table:{disable:!1}}}},ae=t=>{const e=d.useRef(null),[a,s]=d.useState("");return n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>e.current?.showModal(),children:"Åpne modal"}),n.jsxs(p,{...t,ref:e,children:[n.jsx(U,{label:"Navn (minst 3 tegn)",errorMessage:a,onBlur:()=>s("Navnet må være minst 3 tegn")}),n.jsx(r,{onClick:()=>e.current?.close(),children:"Lukk"})]})]})},F={render:ae,name:"With Form Validation Focus Retention",args:{dismissOnEsc:!1,dismissOnOutsideClick:!1},parameters:{chromatic:{disableSnapshot:!0}},argTypes:{dismissOnEsc:{table:{disable:!1}},dismissOnOutsideClick:{table:{disable:!1}}},play:async({canvasElement:t})=>{const e=l(t),a=e.getByRole("button",{name:"Åpne modal"});await i.click(a);const s=e.getByRole("dialog");await o(s).toBeInTheDocument();const c=e.getByRole("textbox");await i.click(c),await i.tab();const g=e.getByRole("button",{name:"Lukk"});await o(e.getByText("Navnet må være minst 3 tegn")).toBeInTheDocument(),await o(g).toHaveFocus()}},D={render:t=>{const e=d.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(u,{hasSpacing:!0,children:h}),n.jsx(r,{onClick:()=>e.current?.showModal(),children:"Åpne modal"}),n.jsx(p,{...t,ref:e,children:n.jsxs("div",{className:"flex",children:[n.jsx(r,{className:"marginRightM",children:"Ja"}),n.jsx(r,{variant:"tertiary",onClick:()=>e.current?.close(),children:"Nei"})]})})]})},name:"Minimum width",args:{title:"Er du her?"},play:async({canvasElement:t})=>{const a=l(t).getByRole("button");await i.click(a)}},H={render:m,name:"On Mobile",args:{},globals:{viewport:{value:"--mobile"}},play:async({canvasElement:t})=>{const a=l(t).getByRole("button");await i.click(a)}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...O.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args): JSX.Element => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <Paragraph hasSpacing>{loremIpsum}</Paragraph>
        <Button onClick={(): void => ref.current?.showModal()}>
          {'Åpne modal'}
        </Button>
        <Modal {...args} ref={ref}>
          <div className={'flex'}>
            <Button className={'marginRightM'}>{'Ja'}</Button>
            <Button variant={'tertiary'} onClick={(): void => ref.current?.close()}>
              {'Nei'}
            </Button>
          </div>
        </Modal>
      </>;
  },
  name: 'Minimum width',
  args: {
    title: 'Er du her?'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
} satisfies Story`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: TemplateModal,
  name: 'On Mobile',
  args: {},
  globals: {
    viewport: {
      value: '--mobile'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
} satisfies Story`,...H.parameters?.docs?.source}}};const He=["WithAttributes","Defaults","VariantPlain","WithImage","WithIcon","WithTransparentBackground","WithoutCloseButton","WithPadding","WithVerticalScrolling","ClickCloseButton","WithAutoClose","WithAutoCloseDisabled","WithHideTitle","WithShadowDom","WithStateChangeAndFocus","WithStateChangeAndTextFieldFocus","AutoOpen","AutoOpenAndCloseOnEscape","AutoOpenAndCloseOnUserInput","WithFormValidationFocusRetention","MinimumWidth","OnMobile"];export{I as AutoOpen,W as AutoOpenAndCloseOnEscape,M as AutoOpenAndCloseOnUserInput,E as ClickCloseButton,y as Defaults,D as MinimumWidth,H as OnMobile,v as VariantPlain,b as WithAttributes,S as WithAutoClose,C as WithAutoCloseDisabled,F as WithFormValidationFocusRetention,R as WithHideTitle,B as WithIcon,w as WithImage,x as WithPadding,A as WithShadowDom,O as WithStateChangeAndFocus,j as WithStateChangeAndTextFieldFocus,f as WithTransparentBackground,T as WithVerticalScrolling,k as WithoutCloseButton,He as __namedExportsOrder,De as default};
//# sourceMappingURL=Modal.test.stories-DNyqzcn2.js.map
