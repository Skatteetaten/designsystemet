import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{S as r}from"./index-NyjG6AqI.js";import{d as A}from"./index-CI44Z2h3.js";import{R as w}from"./index-FK3RsA-s.js";import{H as z,P as x,L as c}from"./index-CCUfsLXI.js";import{w as T,e as o,u as i}from"./index-hUG6DWTw.js";import{c as Q}from"./helpers-CDRJ97Ot.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DcL_RvKM.js";import"./index-DMYlLpXe.js";import"./index-Cq8GVsVj.js";import"./index-DyVxOV_M.js";import"./DatePickerCalendar-CuGySpz0.js";import"./LabelWithHelp-BmjIbcxG.js";import"./Help-CLr4Mr4j.js";import"./index-BdP0pRE8.js";const ge={component:r,title:"Tester/StepList/StepList",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{control:!1,table:{disable:!0,category:Q.props}}},parameters:{a11y:{disable:!0}}},p={name:"With Ref (FA1)",args:{ref:s=>{s&&(s.id="dummyIdForwardedFromRef")},"data-testid":"123ID"},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:s})=>{const a=T(s).getByTestId("123ID");await o(a).toBeInTheDocument(),await o(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={name:"With Attributes (FA2-5)",args:{id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:s})=>{const a=T(s).getByTestId("123ID");await o(a).toHaveAttribute("id","htmlid"),await o(a).toHaveClass("dummyClassname"),await o(a).toHaveAttribute("lang","nb")}},f=()=>t.jsx("div",{children:t.jsxs(r,{children:[t.jsx(r.Step,{variant:"passive",title:"besvart",stepNumber:1,onEdit:()=>alert("endre"),children:"brødtekst"}),t.jsx(r.Step,{title:"besvart 2",stepNumber:2,children:"brødtekst"}),t.jsx(r.Step,{title:"aktivt",variant:"active",stepNumber:3,onNext:()=>console.log("next"),children:"brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst brødtekst "}),t.jsxs(r.Step,{title:"positivt resultat",variant:"positiveResult",stepNumber:4,children:[t.jsx(z,{as:"h3",level:4,children:"Virksomheten skal registreres som særavgiftspliktig."}),t.jsxs(x,{children:["For å bli registrert må du sende en søknad til Skatteetaten.","Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."]}),t.jsx(x,{children:"Du må gjøre følgende:"}),t.jsxs(c,{as:"ol",children:[t.jsx(c.Element,{children:"Du må bestemme hvilken organisasjonsform som passer best."}),t.jsxs(c.Element,{children:["Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet","registermelding"]}),t.jsxs(c.Element,{children:["Dersom bedriften din har avgiftspliktig omsetning og/eller uttak","overstiger kr 50 000 i løpet av en 12 måneders periode, må du","registrere virksomheten i Merverdiavgiftsregisteret."]})]})]}),t.jsx(r.Step,{title:"neutralt resultat",variant:"neutralResult",stepNumber:4,introTitle:"Intro til steget",introContent:"innhold",children:"more brødtekst"})]})}),u={name:"With step Variants (A1, A2, A3)",render:f,parameters:{viewport:{viewPortHeight:1200}}},v={name:"With step Variants breakpoint-s (A1, A2, A3)",render:f,parameters:{viewport:{defaultViewport:"--breakpoint-s",viewPortHeight:1200}}},g={name:"With step Variants breakpoint-xs (A1, A2, A3)",render:f,parameters:{viewport:{defaultViewport:"--breakpoint-xs",viewPortHeight:1200}}},b={name:"With step Variants mobile (A1, A2, A3)",render:f,parameters:{viewport:{defaultViewport:"--mobile",viewPortHeight:1550}}},U=()=>{const s=d.useId(),[e,a]=d.useState(1),[n,G]=d.useState(void 0),[K,S]=d.useState(!1),y=()=>{const l=e+1;a(l),setTimeout(()=>{const k=document.getElementById(`${s}-${l}-focus-target`);k==null||k.focus()},0)};return t.jsxs(r,{children:[e>=1&&t.jsx(r.Step,{id:`${s}-1`,variant:e===1?"active":"passive",title:"Hva holder du på med?",stepNumber:1,onEdit:e>1&&e<4?()=>a(1):void 0,onNext:y,children:"Varer og tjenester"}),e>=2&&t.jsx(r.Step,{id:`${s}-2`,variant:e===2?"active":"passive",title:"Hva gjør du?",stepNumber:2,onEdit:e>2&&e<4?()=>a(2):void 0,onNext:y,children:"Selger"}),e>=3&&t.jsx(r.Step,{id:`${s}-3`,variant:e===3?"active":"passive",title:"Salg av varer og tjenester",stepNumber:3,onNext:()=>{n?y():S(!0)},children:e===3?t.jsxs(w,{id:"step3radio",legend:"Selger du varer og tjenester for egen regning og risiko?",errorMessage:K?"Kryss av hvorvidt du selger varer  og tjenester":void 0,hideLegend:!0,onChange:l=>{S(!1),G(l.target.value)},children:[t.jsx(w.Radio,{value:"ja",children:"Ja"}),t.jsx(w.Radio,{value:"nei",children:"Nei"})]}):t.jsx("div",{children:n})}),e>=4&&n==="ja"&&t.jsx(r.Step,{id:`${s}-4`,title:"Vårt veiledende svar",variant:"positiveResult",stepNumber:4,introTitle:"Virksomheten skal registreres som særavgiftspliktig.",introTitleAs:"h4",introContent:t.jsx(x,{children:"brødtekst"}),children:t.jsx(x,{children:"brødtekst"})}),e>=4&&n==="nei"&&t.jsx(r.Step,{id:`${s}-4`,title:"neutralt resultat",variant:"neutralResult",stepNumber:4,children:"more brødtekst"})]})},h={name:"With steps (A6, A8, A9)",render:U,parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:s})=>{const e=T(s),a=A.t("ds_collections:steplist.Next"),n=A.t("ds_collections:steplist.Edit");await i.click(e.getByText(a)),await i.click(e.getByText(n)),await i.click(e.getByText(a)),await i.click(e.getByText(a)),await i.click(e.getByText(a)),await i.click(e.getByText("Ja")),await i.click(e.getByText(a)),await o(e.queryByText(a)).not.toBeInTheDocument(),await o(e.queryByText(n)).not.toBeInTheDocument()}};var j,B,E;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,W,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(W=m.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var N,V,P;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With step Variants (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      viewPortHeight: 1200
    }
  }
} satisfies Story`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var R,D,L;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With step Variants breakpoint-s (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-s',
      viewPortHeight: 1200
    }
  }
} satisfies Story`,...(L=(D=v.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var F,C,M;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With step Variants breakpoint-xs (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs',
      viewPortHeight: 1200
    }
  }
} satisfies Story`,...(M=(C=g.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var $,_,q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With step Variants mobile (A1, A2, A3)',
  render: TemplateExample,
  parameters: {
    viewport: {
      defaultViewport: '--mobile',
      viewPortHeight: 1550
    }
  }
} satisfies Story`,...(q=(_=b.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,O,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(O=h.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};const be=["WithRef","WithAttributes","WithVariants","WithBreakPointS","WithBreakPointXS","WithBreakPointMobile","WithMultipleSteps"];export{m as WithAttributes,b as WithBreakPointMobile,v as WithBreakPointS,g as WithBreakPointXS,h as WithMultipleSteps,p as WithRef,u as WithVariants,be as __namedExportsOrder,ge as default};
//# sourceMappingURL=StepList.test.stories-C7gXxR2q.js.map
