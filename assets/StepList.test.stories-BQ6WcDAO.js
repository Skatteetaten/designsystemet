import{e as z,j as t,d as A,r as b}from"./iframe-DRo7xN6O.js";import{S as n}from"./index-CcgjbLA7.js";import{c as k}from"./index-CJxdEpCy.js";import{H as G,P as h,L as g}from"./index-K3PRhlds.js";const{expect:o,userEvent:i,within:f}=__STORYBOOK_MODULE_TEST__,U={component:n,title:"Tester/StepList/StepList",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:!1,table:{disable:!0,category:z.props}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1},a11y:{disable:!0}}},l={name:"With Ref (FA1)",args:{ref:s=>{s&&(s.id="dummyIdForwardedFromRef")},"data-testid":"123ID"},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const a=f(s).getByTestId("123ID");await o(a).toBeInTheDocument(),await o(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:s})=>{const a=f(s).getByTestId("123ID");await o(a).toHaveAttribute("id","htmlid"),await o(a).toHaveClass("dummyClassname"),await o(a).toHaveAttribute("lang","nb")}},x=()=>t.jsx("div",{children:t.jsxs(n,{children:[t.jsx(n.Step,{variant:"passive",title:"besvart",stepNumber:1,onEdit:()=>alert("endre"),children:"brødtekst"}),t.jsx(n.Step,{title:"besvart 2",stepNumber:2,children:"brødtekst"}),t.jsx(n.Step,{title:"aktivt",variant:"active",stepNumber:3,shouldAutoFocusWhenActive:!1,onNext:()=>console.log("next"),children:"brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst "}),t.jsxs(n.Step,{title:"positivt resultat",variant:"positiveResult",stepNumber:4,children:[t.jsx(G,{as:"h3",level:4,children:"Virksomheten skal registreres som særavgiftspliktig."}),t.jsxs(h,{children:["For å bli registrert må du sende en søknad til Skatteetaten.","Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."]}),t.jsx(h,{children:"Du må gjøre følgende:"}),t.jsxs(g,{as:"ol",children:[t.jsx(g.Element,{children:"Du må bestemme hvilken organisasjonsform som passer best."}),t.jsxs(g.Element,{children:["Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet","registermelding"]}),t.jsxs(g.Element,{children:["Dersom bedriften din har avgiftspliktig omsetning og/eller uttak","overstiger kr 50 000 i løpet av en 12 måneders periode, må du","registrere virksomheten i Merverdiavgiftsregisteret."]})]})]}),t.jsx(n.Step,{title:"neutralt resultat",variant:"neutralResult",stepNumber:4,introTitle:"Intro til steget",introContent:"innhold",children:"more brødtekst"})]})}),c={name:"With step Variants (A1, A2, A3)",render:x},p={name:"With step Variants breakpoint-s (A1, A2, A3)",render:x,globals:{viewport:{value:"--breakpoint-s"}}},m={name:"With step Variants breakpoint-xs (A1, A2, A3)",render:x,globals:{viewport:{value:"--breakpoint-xs"}}},u={name:"With step Variants mobile (A1, A2, A3)",render:x,globals:{viewport:{value:"--mobile"}}},Y=()=>{const s=b.useId(),[e,a]=b.useState(1),[r,K]=b.useState(void 0),[X,T]=b.useState(!1),y=()=>{const S=e+1;a(S)};return t.jsxs(n,{children:[e>=1&&t.jsx(n.Step,{id:`${s}-1`,variant:e===1?"active":"passive",title:"Hva holder du på med?",stepNumber:1,onEdit:e>1&&e<4?()=>a(1):void 0,onNext:y,children:"Varer og tjenester"}),e>=2&&t.jsx(n.Step,{id:`${s}-2`,variant:e===2?"active":"passive",title:"Hva gjør du?",stepNumber:2,onEdit:e>2&&e<4?()=>a(2):void 0,onNext:y,children:"Selger"}),e>=3&&t.jsx(n.Step,{id:`${s}-3`,variant:e===3?"active":"passive",title:"Salg av varer og tjenester",stepNumber:3,onNext:()=>{r?y():T(!0)},children:e===3?t.jsxs(k,{id:"step3radio",legend:"Selger du varer og tjenester for egen regning og risiko?",errorMessage:X?"Kryss av hvorvidt du selger varer  og tjenester":void 0,hideLegend:!0,onChange:S=>{T(!1),K(S.target.value)},children:[t.jsx(k.Radio,{value:"ja",children:"Ja"}),t.jsx(k.Radio,{value:"nei",children:"Nei"})]}):t.jsx("div",{children:r})}),e>=4&&r==="ja"&&t.jsx(n.Step,{id:`${s}-4`,title:"Vårt veiledende svar",variant:"positiveResult",stepNumber:4,introTitle:"Virksomheten skal registreres som særavgiftspliktig.",introTitleAs:"h4",introContent:t.jsx(h,{children:"brødtekst"}),children:t.jsx(h,{children:"brødtekst"})}),e>=4&&r==="nei"&&t.jsx(n.Step,{id:`${s}-4`,title:"neutralt resultat",variant:"neutralResult",stepNumber:4,children:"more brødtekst"})]})},v={name:"With steps (A6, A8, A9)",render:Y,parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const e=f(s),a=A.t("ds_collections:steplist.Next"),r=A.t("ds_collections:steplist.Edit");await i.click(e.getByText(a)),await i.click(e.getByText(r)),await i.click(e.getByText(a)),await i.click(e.getByText(a)),await i.click(e.getByText(a)),await i.click(e.getByText("Ja")),await i.click(e.getByText(a)),await o(e.queryByText(a)).not.toBeInTheDocument(),await o(e.queryByText(r)).not.toBeInTheDocument()}};var w,j,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var B,W,I;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var N,L,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With step Variants (A1, A2, A3)',
  render: TemplateExample
} satisfies Story`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var R,_,F;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With step Variants breakpoint-s (A1, A2, A3)',
  render: TemplateExample,
  globals: {
    viewport: {
      value: '--breakpoint-s'
    }
  }
} satisfies Story`,...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var H,V,P;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With step Variants breakpoint-xs (A1, A2, A3)',
  render: TemplateExample,
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(P=(V=m.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var M,C,O;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With step Variants mobile (A1, A2, A3)',
  render: TemplateExample,
  globals: {
    viewport: {
      value: '--mobile'
    }
  }
} satisfies Story`,...(O=(C=u.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var $,q,J;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
} satisfies Story`,...(J=(q=v.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const Q=["WithRef","WithAttributes","WithVariants","WithBreakPointS","WithBreakPointXS","WithBreakPointMobile","WithMultipleSteps"],se=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:d,WithBreakPointMobile:u,WithBreakPointS:p,WithBreakPointXS:m,WithMultipleSteps:v,WithRef:l,WithVariants:c,__namedExportsOrder:Q,default:U},Symbol.toStringTag,{value:"Module"}));export{se as S};
//# sourceMappingURL=StepList.test.stories-BQ6WcDAO.js.map
