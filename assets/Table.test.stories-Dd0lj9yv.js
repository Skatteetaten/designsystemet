import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as E}from"./index-D_ouKaeX.js";import{w as W,e as o}from"./index-DIxTUSTt.js";import{T as a}from"./index-CuNl2EzI.js";import{H as ge}from"./index-BAA7SjBM.js";import{w as s}from"./storybook.testing.utils-CMs160i9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CwaotbcG.js";import"./index-BQO_0U1F.js";import"./index-CUnERQXD.js";import"./index-BQtvKDNR.js";const we="tabellcaption",Me={component:a,title:"Tester/Table/Table",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},caption:{table:{disable:!0}},variant:{table:{disable:!0}},hasFullWidth:{table:{disable:!0}},showCaption:{table:{disable:!0}},sortState:{table:{disable:!0}},setSortState:{table:{disable:!0}},rowInEditModeId:{table:{disable:!0}},children:{table:{disable:!0}}},args:{caption:we}},D=t=>e.jsxs(a,{...t,variant:t.variant,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",children:"Expenditure"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{children:"9,000"})]})]}),e.jsx(a.Sum,{colSpan:2,children:"32,000"})]}),u={render:D,name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=W(t).getByRole("table");await o(n).toBeInTheDocument(),await o(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={render:D,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=W(t).getByRole("table");await o(n).toHaveClass("dummyClassname"),await o(n).toHaveAttribute("id","htmlId"),await o(n).toHaveAttribute("lang","nb"),await o(n).toHaveAttribute("data-testid","123ID")}},x={render:D,name:"Defaults (Table A1, A8, B1, B2, TableRow B1, A20)",play:async({canvasElement:t})=>{const r=W(t);await o(r.getByText(we)).toBeInTheDocument(),await o(r.getByRole("table")).toBeInTheDocument()}},ye=t=>{const r=e.jsxs(a,{...t,variant:t.variant,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Forename"}),e.jsx(a.HeaderCell,{scope:"col",children:"Surname"}),e.jsx(a.HeaderCell,{scope:"col",children:"email"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Otto"}),e.jsx(a.DataCell,{children:"Octavius"}),e.jsx(a.DataCell,{children:"doc.ock@example.org"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Norman"}),e.jsx(a.DataCell,{children:"Osbourne"}),e.jsx(a.DataCell,{children:"norman.osbourne@example.org"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Curt"}),e.jsx(a.DataCell,{children:"Connors"}),e.jsx(a.DataCell,{children:"curt.connors@example.org"})]})]})]});return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Table med Scrollbar"}),e.jsx("div",{className:"scrollTableWrapper",children:r}),e.jsx("div",{className:"scrollTableWrapperSuccess",children:r}),e.jsx("div",{className:"scrollTableWrapperWarning",children:r})]})},g={render:ye,name:"With Scroll (A5)",parameters:{a11y:{disable:!0}}},fe=t=>e.jsxs(a,{...t,variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{alignment:"left",scope:"col",children:"left"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",children:"center"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"right"}),e.jsx(a.HeaderCell,{scope:"col",children:"default"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"right"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"left",children:"left"}),e.jsx(a.DataCell,{alignment:"center",children:"center"}),e.jsx(a.DataCell,{alignment:"right",children:"right"}),e.jsx(a.DataCell,{children:"default"}),e.jsx(a.DataCell,{alignment:"left",children:"left"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"left",children:"left"}),e.jsx(a.DataCell,{alignment:"center",children:"center"}),e.jsx(a.DataCell,{alignment:"right",children:"right"}),e.jsx(a.DataCell,{children:"default"}),e.jsx(a.DataCell,{alignment:"right",children:"right"})]})]})]}),w={render:fe,name:"With Full Width And Text Alignment (Table A4, A10, TableHeader A1, TableRow A2)",args:{hasFullWidth:!0}},je=()=>e.jsx("div",{className:"emptyExpandedTableRow",children:"Rediger innhold"}),Ae=[{id:"s5f0e",rowData:{month:"Januar",amount:5426,coverage:"100 %",revenue:1e3}},{id:"3vesy",rowData:{month:"Februar",amount:5432,coverage:"50 %",revenue:500}},{id:"16prz",rowData:{month:"Mars",amount:4899,coverage:"20 %",revenue:2e3}},{id:"3xpjb",isExpandable:!0,rowData:{month:"April",amount:2344,coverage:"30 %",revenue:1055}},{id:"58pxb",isExpandable:!0,showExpandButtonTitle:!0,rowData:{month:"Mai",amount:3567,coverage:"40 %",revenue:1800}}],Te=t=>{const[r,n]=E.useState({direction:"none"}),p=E.useRef(null),R=Ae.slice().sort((d,i)=>{const l=r.sortKey,m=d.rowData,c=i.rowData;return!l||m[l]===c[l]?0:r.direction==="ascending"?m[l]>c[l]?1:-1:m[l]<c[l]?1:-1});return e.jsxs(a,{...t,sortState:r,setSortState:n,variant:t.variant,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"coverage",isSortable:!0,children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right","data-testid":"header-belop",scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",sortKey:"month",isSortable:!0,children:"Måned"}),e.jsx(a.HeaderCell,{"data-testid":"header-avkastning",alignment:"right",scope:"col",sortKey:"revenue",isSortable:!0,children:"Avkastning"})]})}),e.jsx(a.Body,{children:R.map(({isExpandable:d,id:i,rowData:l,showExpandButtonTitle:m},c)=>{const B=e.jsxs(e.Fragment,{children:[e.jsx(a.DataCell,{alignment:"left",id:i,children:l.coverage}),e.jsx(a.DataCell,{alignment:"right",children:l.amount}),e.jsx(a.DataCell,{alignment:"center",children:l.month}),e.jsx(a.DataCell,{alignment:"right",children:l.revenue})]});return d?e.jsx(a.Row,{"data-testid":`row-expand-${c}`,expandButtonAriaDescribedby:i,showExpandButtonTitle:m,expandableContent:e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(ge,{ref:p,as:"h2",level:2,children:"data"})}),isExpandable:!0,children:B},i):e.jsx(a.EditableRow,{id:i,"data-testid":`row-${c}`,editButtonAriaDescribedby:i,editableContent:je,children:B},c)})}),e.jsx(a.Sum,{colSpan:4,hasTopSeparator:!0,children:"4555"})]})},h=t=>e.jsx(Te,{...t}),ve=t=>e.jsxs(a,{...t,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Beløp"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",children:"Måned"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:Ae.map(({isExpandable:r,id:n,rowData:p,showExpandButtonTitle:R},d)=>{const i=e.jsxs(e.Fragment,{children:[e.jsx(a.DataCell,{alignment:"left",id:n,children:p.coverage}),e.jsx(a.DataCell,{alignment:"right",children:p.amount}),e.jsx(a.DataCell,{alignment:"center",children:p.month}),e.jsx(a.DataCell,{alignment:"right",children:p.revenue})]});return r?e.jsx(a.Row,{"data-testid":`row-expand-${d}`,expandButtonAriaDescribedby:n,expandButtonPosition:"right",showExpandButtonTitle:R,expandableContent:e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(ge,{as:"h2",level:2,children:"data"})}),isExpandable:!0,children:i},n):e.jsx(a.EditableRow,{id:n,"data-testid":`row-${d}`,editButtonAriaDescribedby:n,editButtonPosition:"right",editableContent:je,children:i},d)})}),e.jsx(a.Sum,{colSpan:4,hasTopSeparator:!0,children:"4555"})]}),j={render:h,name:"Variant Compact (Table A1, A3, TableHeader A2, TableRow A3, A17, A19, A20)",args:{variant:"compact"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{click:[`${s} [data-testid="row-0"] button`,`${s} [data-testid="row-expand-3"] button`]}}},A={render:ve,name:"Variant Compact And Right Button Position",args:{variant:"compact"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{click:[`${s} [data-testid="row-0"] button`,`${s} [data-testid="row-expand-3"] button`]}}},v={render:h,name:"With Expand Edit Sort (Table A9, A11, A14, A15, TableHeader A4, A5, A6, A7, B2, TableRow B3, A14, A15, A19)",parameters:{imageSnapshot:{hover:[`${s} [data-testid="row-0"]`,`${s} [data-testid="header-belop"] button`],focus:[`${s} [data-testid="header-belop"] button`,`${s} [data-testid="row-0"] button`],click:[`${s} [data-testid="row-0"] button`,`${s} [data-testid="row-expand-3"] button`,`${s} [data-testid="header-belop"] button`,`${s} [data-testid="header-belop"] button`,`${s} [data-testid="header-avkastning"] button`]}}},y={render:h,name:"With Default Row In Edit Mode",args:{rowInEditModeId:"3vesy"}},f={render:h,name:"With Wide screen (Table A1, A2)",parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},T={render:h,name:"With FullWidth Edit Expand Sort",args:{hasFullWidth:!0},argTypes:{hasFullWidth:{table:{disable:!1}}}},C={render:ve,name:"With FullWidth And Right Button Position",args:{hasFullWidth:!0},argTypes:{hasFullWidth:{table:{disable:!1}}}},S={render:D,args:{canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=W(t).getByRole("table");n.focus(),await o(n).toBeInTheDocument(),await o(n).toHaveAttribute("tabIndex","-1")}};var F,H,I;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLTableElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    }
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
    const table = canvas.getByRole('table');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var $,M,k;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes (FA2-5)',
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
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('table');
    await expect(table).toHaveClass('dummyClassname');
    await expect(table).toHaveAttribute('id', 'htmlId');
    await expect(table).toHaveAttribute('lang', 'nb');
    await expect(table).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(k=(M=b.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var P,N,V;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (Table A1, A8, B1, B2, TableRow B1, A20)',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(caption)).toBeInTheDocument();
    await expect(canvas.getByRole('table')).toBeInTheDocument();
  }
} satisfies Story`,...(V=(N=x.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var K,O,_;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: TemplateScroll,
  name: 'With Scroll (A5)',
  parameters: {
    a11y: {
      disable: true
    }
  }
} satisfies Story`,...(_=(O=g.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var z,J,L;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: TemplateAlignment,
  name: 'With Full Width And Text Alignment (Table A4, A10, TableHeader A1, TableRow A2)',
  args: {
    hasFullWidth: true
  }
} satisfies Story`,...(L=(J=w.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var q,G,Q;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'Variant Compact (Table A1, A3, TableHeader A2, TableRow A3, A17, A19, A20)',
  args: {
    variant: 'compact'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      click: [\`\${wrapper} [data-testid="row-0"] button\`, \`\${wrapper} [data-testid="row-expand-3"] button\`]
    }
  }
} satisfies Story`,...(Q=(G=j.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,X,Y;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: TemplateWithRightButtonPosition,
  name: 'Variant Compact And Right Button Position',
  args: {
    variant: 'compact'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      click: [\`\${wrapper} [data-testid="row-0"] button\`, \`\${wrapper} [data-testid="row-expand-3"] button\`]
    }
  }
} satisfies Story`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:'{\n  render: TemplateExpandEditSort,\n  name: \'With Expand Edit Sort (Table A9, A11, A14, A15, TableHeader A4, A5, A6, A7, B2, TableRow B3, A14, A15, A19)\',\n  parameters: {\n    imageSnapshot: {\n      hover: [`${wrapper} [data-testid="row-0"]`, `${wrapper} [data-testid="header-belop"] button`],\n      focus: [`${wrapper} [data-testid="header-belop"] button`, `${wrapper} [data-testid="row-0"] button`],\n      click: [`${wrapper} [data-testid="row-0"] button`, `${wrapper} [data-testid="row-expand-3"] button`, `${wrapper} [data-testid="header-belop"] button`, `${wrapper} [data-testid="header-belop"] button`, `${wrapper} [data-testid="header-avkastning"] button`]\n    }\n  }\n} satisfies Story',...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'With Default Row In Edit Mode',
  args: {
    rowInEditModeId: '3vesy'
  }
} satisfies Story`,...(re=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,le,ie;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'With Wide screen (Table A1, A2)',
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
    }
  }
} satisfies Story`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var oe,de,ce;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'With FullWidth Edit Expand Sort',
  args: {
    hasFullWidth: true
  },
  argTypes: {
    hasFullWidth: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ce=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,he;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: TemplateWithRightButtonPosition,
  name: 'With FullWidth And Right Button Position',
  args: {
    hasFullWidth: true
  },
  argTypes: {
    hasFullWidth: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(he=(me=C.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ue,be,xe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: Template,
  args: {
    canBeManuallyFocused: true
  },
  argTypes: {
    canBeManuallyFocused: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('table');
    table.focus();
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...(xe=(be=S.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};const ke=["WithRef","WithAttributes","Defaults","WithScrollbar","WithFullWidthAndTextAlignment","WithVariantCompact","WithVariantCompactAndRightButtonPosition","WithExpandEditSort","WithDefaultRowInEditMode","WithWideScreen","WithFullWidthExpandableEdit","WithFullWidthAndRightButtonPosition","WithCanBeManuallyFocused"];export{x as Defaults,b as WithAttributes,S as WithCanBeManuallyFocused,y as WithDefaultRowInEditMode,v as WithExpandEditSort,C as WithFullWidthAndRightButtonPosition,w as WithFullWidthAndTextAlignment,T as WithFullWidthExpandableEdit,u as WithRef,g as WithScrollbar,j as WithVariantCompact,A as WithVariantCompactAndRightButtonPosition,f as WithWideScreen,ke as __namedExportsOrder,Me as default};
//# sourceMappingURL=Table.test.stories-Dd0lj9yv.js.map
