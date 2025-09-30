import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-D_ouKaeX.js";import{w,e as o,u as i}from"./index-DIxTUSTt.js";import{S as r}from"./index-B6IstKQD.js";import{d as S}from"./index-CGk5cNE3.js";import{R as k}from"./index-DkXzVmhj.js";import{H as K,P as h,L as d}from"./index-B0Glj4sP.js";import{c as z}from"./helpers-B90wjoUE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DAV9Xejq.js";import"./index-DfnG5Ebn.js";import"./index-uxUkjR_c.js";import"./index-sjPb88pE.js";import"./DatePickerCalendar-PuG5IodJ.js";import"./LabelWithHelp-B8AAT5XN.js";import"./Help-ChcS7hng.js";import"./index-Bid14VJj.js";const ve={component:r,title:"Tester/StepList/StepList",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:!1,table:{disable:!0,category:z.props}}},parameters:{a11y:{disable:!0}}},c={name:"With Ref (FA1)",args:{ref:s=>{s&&(s.id="dummyIdForwardedFromRef")},"data-testid":"123ID"},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:s})=>{const a=w(s).getByTestId("123ID");await o(a).toBeInTheDocument(),await o(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},p={name:"With Attributes (FA2-5)",args:{id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:s})=>{const a=w(s).getByTestId("123ID");await o(a).toHaveAttribute("id","htmlid"),await o(a).toHaveClass("dummyClassname"),await o(a).toHaveAttribute("lang","nb")}},x=()=>t.jsx("div",{children:t.jsxs(r,{children:[t.jsx(r.Step,{variant:"passive",title:"besvart",stepNumber:1,onEdit:()=>alert("endre"),children:"brødtekst"}),t.jsx(r.Step,{title:"besvart 2",stepNumber:2,children:"brødtekst"}),t.jsx(r.Step,{title:"aktivt",variant:"active",stepNumber:3,shouldAutoFocusWhenActive:!1,onNext:()=>console.log("next"),children:"brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst "}),t.jsxs(r.Step,{title:"positivt resultat",variant:"positiveResult",stepNumber:4,children:[t.jsx(K,{as:"h3",level:4,children:"Virksomheten skal registreres som særavgiftspliktig."}),t.jsxs(h,{children:["For å bli registrert må du sende en søknad til Skatteetaten.","Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."]}),t.jsx(h,{children:"Du må gjøre følgende:"}),t.jsxs(d,{as:"ol",children:[t.jsx(d.Element,{children:"Du må bestemme hvilken organisasjonsform som passer best."}),t.jsxs(d.Element,{children:["Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet","registermelding"]}),t.jsxs(d.Element,{children:["Dersom bedriften din har avgiftspliktig omsetning og/eller uttak","overstiger kr 50 000 i løpet av en 12 måneders periode, må du","registrere virksomheten i Merverdiavgiftsregisteret."]})]})]}),t.jsx(r.Step,{title:"neutralt resultat",variant:"neutralResult",stepNumber:4,introTitle:"Intro til steget",introContent:"innhold",children:"more brødtekst"})]})}),m={name:"With step Variants (A1, A2, A3)",render:x,parameters:{viewport:{viewPortHeight:1200}}},u={name:"With step Variants breakpoint-s (A1, A2, A3)",render:x,parameters:{viewport:{defaultViewport:"--breakpoint-s",viewPortHeight:1200}}},v={name:"With step Variants breakpoint-xs (A1, A2, A3)",render:x,parameters:{viewport:{defaultViewport:"--breakpoint-xs",viewPortHeight:1200}}},g={name:"With step Variants mobile (A1, A2, A3)",render:x,parameters:{viewport:{defaultViewport:"--mobile",viewPortHeight:1550}}},Q=()=>{const s=l.useId(),[e,a]=l.useState(1),[n,X]=l.useState(void 0),[G,T]=l.useState(!1),f=()=>{const y=e+1;a(y)};return t.jsxs(r,{children:[e>=1&&t.jsx(r.Step,{id:`${s}-1`,variant:e===1?"active":"passive",title:"Hva holder du på med?",stepNumber:1,onEdit:e>1&&e<4?()=>a(1):void 0,onNext:f,children:"Varer og tjenester"}),e>=2&&t.jsx(r.Step,{id:`${s}-2`,variant:e===2?"active":"passive",title:"Hva gjør du?",stepNumber:2,onEdit:e>2&&e<4?()=>a(2):void 0,onNext:f,children:"Selger"}),e>=3&&t.jsx(r.Step,{id:`${s}-3`,variant:e===3?"active":"passive",title:"Salg av varer og tjenester",stepNumber:3,onNext:()=>{n?f():T(!0)},children:e===3?t.jsxs(k,{id:"step3radio",legend:"Selger du varer og tjenester for egen regning og risiko?",errorMessage:G?"Kryss av hvorvidt du selger varer  og tjenester":void 0,hideLegend:!0,onChange:y=>{T(!1),X(y.target.value)},children:[t.jsx(k.Radio,{value:"ja",children:"Ja"}),t.jsx(k.Radio,{value:"nei",children:"Nei"})]}):t.jsx("div",{children:n})}),e>=4&&n==="ja"&&t.jsx(r.Step,{id:`${s}-4`,title:"Vårt veiledende svar",variant:"positiveResult",stepNumber:4,introTitle:"Virksomheten skal registreres som særavgiftspliktig.",introTitleAs:"h4",introContent:t.jsx(h,{children:"brødtekst"}),children:t.jsx(h,{children:"brødtekst"})}),e>=4&&n==="nei"&&t.jsx(r.Step,{id:`${s}-4`,title:"neutralt resultat",variant:"neutralResult",stepNumber:4,children:"more brødtekst"})]})},b={name:"With steps (A6, A8, A9)",render:Q,parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:s})=>{const e=w(s),a=S.t("ds_collections:steplist.Next"),n=S.t("ds_collections:steplist.Edit");await i.click(e.getByText(a)),await i.click(e.getByText(n)),await i.click(e.getByText(a)),await i.click(e.getByText(a)),await i.click(e.getByText(a)),await i.click(e.getByText("Ja")),await i.click(e.getByText(a)),await o(e.queryByText(a)).not.toBeInTheDocument(),await o(e.queryByText(n)).not.toBeInTheDocument()}};var A,j,B;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var E,W,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toHaveAttribute('id', 'htmlid');
    await expect(stepList).toHaveClass('dummyClassname');
    await expect(stepList).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(I=(W=p.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var H,N,V;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With step Variants (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      viewPortHeight: 1200
    }
  }
} satisfies Story`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var P,R,D;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With step Variants breakpoint-s (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
      viewPortHeight: 1200
    }
  }
} satisfies Story`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var L,F,C;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With step Variants breakpoint-xs (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
      viewPortHeight: 1200
    }
  }
} satisfies Story`,...(C=(F=v.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var M,_,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'With step Variants mobile (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
      viewPortHeight: 1550
    }
  }
} satisfies Story`,...($=(_=g.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var q,J,O;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With steps (A6, A8, A9)',
  render: TemplateMultipleSteps,
  parameters: {
    imageSnapshot: {
      disable: true
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
} satisfies Story`,...(O=(J=b.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};const ge=["WithRef","WithAttributes","WithVariants","WithBreakPointS","WithBreakPointXS","WithBreakPointMobile","WithMultipleSteps"];export{p as WithAttributes,g as WithBreakPointMobile,u as WithBreakPointS,v as WithBreakPointXS,b as WithMultipleSteps,c as WithRef,m as WithVariants,ge as __namedExportsOrder,ve as default};
//# sourceMappingURL=StepList.test.stories-BetKdFx-.js.map
