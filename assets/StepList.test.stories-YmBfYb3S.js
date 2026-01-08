import{e as E,j as t,d as A,r as b}from"./iframe-Br1Xu9zr.js";import{S as n}from"./index-D26qgz4H.js";import{c as k}from"./index-B55DkYFu.js";import{H as B,P as h,L as g}from"./index-DCwxX22m.js";const{expect:o,userEvent:i,within:f}=__STORYBOOK_MODULE_TEST__,W={component:n,title:"Tester/StepList",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:!1,table:{disable:!0,category:E.props}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},a11y:{disable:!0}}},l={name:"With Ref (FA1)",args:{ref:s=>{s&&(s.id="dummyIdForwardedFromRef")},"data-testid":"123ID"},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const a=f(s).getByTestId("123ID");await o(a).toBeInTheDocument(),await o(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:s})=>{const a=f(s).getByTestId("123ID");await o(a).toHaveAttribute("id","htmlid"),await o(a).toHaveClass("dummyClassname"),await o(a).toHaveAttribute("lang","nb")}},x=()=>t.jsx("div",{children:t.jsxs(n,{children:[t.jsx(n.Step,{variant:"passive",title:"besvart",stepNumber:1,onEdit:()=>alert("endre"),children:"brødtekst"}),t.jsx(n.Step,{title:"besvart 2",stepNumber:2,children:"brødtekst"}),t.jsx(n.Step,{title:"aktivt",variant:"active",stepNumber:3,shouldAutoFocusWhenActive:!1,onNext:()=>console.log("next"),children:"brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst "}),t.jsxs(n.Step,{title:"positivt resultat",variant:"positiveResult",stepNumber:4,children:[t.jsx(B,{as:"h3",level:4,children:"Virksomheten skal registreres som særavgiftspliktig."}),t.jsxs(h,{children:["For å bli registrert må du sende en søknad til Skatteetaten.","Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."]}),t.jsx(h,{children:"Du må gjøre følgende:"}),t.jsxs(g,{as:"ol",children:[t.jsx(g.Element,{children:"Du må bestemme hvilken organisasjonsform som passer best."}),t.jsxs(g.Element,{children:["Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet","registermelding"]}),t.jsxs(g.Element,{children:["Dersom bedriften din har avgiftspliktig omsetning og/eller uttak","overstiger kr 50 000 i løpet av en 12 måneders periode, må du","registrere virksomheten i Merverdiavgiftsregisteret."]})]})]}),t.jsx(n.Step,{title:"neutralt resultat",variant:"neutralResult",stepNumber:4,introTitle:"Intro til steget",introContent:"innhold",children:"more brødtekst"})]})}),c={name:"With step Variants (A1, A2, A3)",render:x},p={name:"With step Variants breakpoint-s (A1, A2, A3)",render:x,globals:{viewport:{value:"--breakpoint-s"}}},m={name:"With step Variants breakpoint-xs (A1, A2, A3)",render:x,globals:{viewport:{value:"--breakpoint-xs"}}},u={name:"With step Variants mobile (A1, A2, A3)",render:x,globals:{viewport:{value:"--mobile"}}},I=()=>{const s=b.useId(),[e,a]=b.useState(1),[r,w]=b.useState(void 0),[j,T]=b.useState(!1),y=()=>{const S=e+1;a(S)};return t.jsxs(n,{children:[e>=1&&t.jsx(n.Step,{id:`${s}-1`,variant:e===1?"active":"passive",title:"Hva holder du på med?",stepNumber:1,onEdit:e>1&&e<4?()=>a(1):void 0,onNext:y,children:"Varer og tjenester"}),e>=2&&t.jsx(n.Step,{id:`${s}-2`,variant:e===2?"active":"passive",title:"Hva gjør du?",stepNumber:2,onEdit:e>2&&e<4?()=>a(2):void 0,onNext:y,children:"Selger"}),e>=3&&t.jsx(n.Step,{id:`${s}-3`,variant:e===3?"active":"passive",title:"Salg av varer og tjenester",stepNumber:3,onNext:()=>{r?y():T(!0)},children:e===3?t.jsxs(k,{id:"step3radio",legend:"Selger du varer og tjenester for egen regning og risiko?",errorMessage:j?"Kryss av hvorvidt du selger varer  og tjenester":void 0,hideLegend:!0,onChange:S=>{T(!1),w(S.target.value)},children:[t.jsx(k.Radio,{value:"ja",children:"Ja"}),t.jsx(k.Radio,{value:"nei",children:"Nei"})]}):t.jsx("div",{children:r})}),e>=4&&r==="ja"&&t.jsx(n.Step,{id:`${s}-4`,title:"Vårt veiledende svar",variant:"positiveResult",stepNumber:4,introTitle:"Virksomheten skal registreres som særavgiftspliktig.",introTitleAs:"h4",introContent:t.jsx(h,{children:"brødtekst"}),children:t.jsx(h,{children:"brødtekst"})}),e>=4&&r==="nei"&&t.jsx(n.Step,{id:`${s}-4`,title:"neutralt resultat",variant:"neutralResult",stepNumber:4,children:"more brødtekst"})]})},v={name:"With steps (A6, A8, A9)",render:I,parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const e=f(s),a=A.t("ds_collections:steplist.Next"),r=A.t("ds_collections:steplist.Edit");await i.click(e.getByText(a)),await i.click(e.getByText(r)),await i.click(e.getByText(a)),await i.click(e.getByText(a)),await i.click(e.getByText(a)),await i.click(e.getByText("Ja")),await i.click(e.getByText(a)),await o(e.queryByText(a)).not.toBeInTheDocument(),await o(e.queryByText(r)).not.toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLOListElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
    'data-testid': '123ID'
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
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toBeInTheDocument();
    await expect(stepList).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlid',
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
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toHaveAttribute('id', 'htmlid');
    await expect(stepList).toHaveClass('dummyClassname');
    await expect(stepList).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With step Variants (A1, A2, A3)',
  render: TemplateExample
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With step Variants breakpoint-s (A1, A2, A3)',
  render: TemplateExample,
  globals: {
    viewport: {
      value: '--breakpoint-s'
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With step Variants breakpoint-xs (A1, A2, A3)',
  render: TemplateExample,
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With step Variants mobile (A1, A2, A3)',
  render: TemplateExample,
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With steps (A6, A8, A9)',
  render: TemplateMultipleSteps,
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const nextText = dsI18n.t('ds_collections:steplist.Next');
    const editText = dsI18n.t('ds_collections:steplist.Edit');
    await userEvent.click(canvas.getByText(nextText));
    await userEvent.click(canvas.getByText(editText));
    await userEvent.click(canvas.getByText(nextText));
    await userEvent.click(canvas.getByText(nextText));
    await userEvent.click(canvas.getByText(nextText));
    await userEvent.click(canvas.getByText('Ja'));
    await userEvent.click(canvas.getByText(nextText));
    await expect(canvas.queryByText(nextText)).not.toBeInTheDocument();
    await expect(canvas.queryByText(editText)).not.toBeInTheDocument();
  }
} satisfies Story`,...v.parameters?.docs?.source}}};const N=["WithRef","WithAttributes","WithVariants","WithBreakPointS","WithBreakPointXS","WithBreakPointMobile","WithMultipleSteps"],F=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:d,WithBreakPointMobile:u,WithBreakPointS:p,WithBreakPointXS:m,WithMultipleSteps:v,WithRef:l,WithVariants:c,__namedExportsOrder:N,default:W},Symbol.toStringTag,{value:"Module"}));export{F as S};
//# sourceMappingURL=StepList.test.stories-YmBfYb3S.js.map
