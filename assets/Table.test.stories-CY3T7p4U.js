import{j as e,r as F}from"./iframe-CdXtTKZQ.js";import{T as a}from"./index-D_51gR3W.js";import{H as ye}from"./index-DUrzBgqO.js";const{expect:c,fireEvent:m,within:l}=__STORYBOOK_MODULE_TEST__,we="tabellcaption",Te={component:a,title:"Tester/Table/Table",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},caption:{table:{disable:!0}},variant:{table:{disable:!0}},hasFullWidth:{table:{disable:!0}},showCaption:{table:{disable:!0}},sortState:{table:{disable:!0}},setSortState:{table:{disable:!0}},rowInEditModeId:{table:{disable:!0}},children:{table:{disable:!0}}},args:{caption:we},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},C=t=>e.jsxs(a,{...t,variant:t.variant,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",children:"Expenditure"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{children:"9,000"})]})]}),e.jsx(a.Sum,{colSpan:2,children:"32,000"})]}),b={render:C,name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=l(t).getByRole("table");await c(n).toBeInTheDocument(),await c(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},g={render:C,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=l(t).getByRole("table");await c(n).toHaveClass("dummyClassname"),await c(n).toHaveAttribute("id","htmlId"),await c(n).toHaveAttribute("lang","nb"),await c(n).toHaveAttribute("data-testid","123ID")}},x={render:C,name:"Defaults (Table A1, A8, B1, B2, TableRow B1, A20)",play:async({canvasElement:t})=>{const s=l(t);await c(s.getByText(we)).toBeInTheDocument(),await c(s.getByRole("table")).toBeInTheDocument()}},Be=t=>{const s=e.jsxs(a,{...t,variant:t.variant,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Forename"}),e.jsx(a.HeaderCell,{scope:"col",children:"Surname"}),e.jsx(a.HeaderCell,{scope:"col",children:"email"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Otto"}),e.jsx(a.DataCell,{children:"Octavius"}),e.jsx(a.DataCell,{children:"doc.ock@example.org"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Norman"}),e.jsx(a.DataCell,{children:"Osbourne"}),e.jsx(a.DataCell,{children:"norman.osbourne@example.org"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Curt"}),e.jsx(a.DataCell,{children:"Connors"}),e.jsx(a.DataCell,{children:"curt.connors@example.org"})]})]})]});return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Table med Scrollbar"}),e.jsx("div",{className:"scrollTableWrapper",children:s}),e.jsx("div",{className:"scrollTableWrapperSuccess",children:s}),e.jsx("div",{className:"scrollTableWrapperWarning",children:s})]})},y={render:Be,name:"With Scroll (A5)",parameters:{a11y:{disable:!0}}},Se=t=>e.jsxs(a,{...t,variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{alignment:"left",scope:"col",children:"left"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",children:"center"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"right"}),e.jsx(a.HeaderCell,{scope:"col",children:"default"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"right"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"left",children:"left"}),e.jsx(a.DataCell,{alignment:"center",children:"center"}),e.jsx(a.DataCell,{alignment:"right",children:"right"}),e.jsx(a.DataCell,{children:"default"}),e.jsx(a.DataCell,{alignment:"left",children:"left"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"left",children:"left"}),e.jsx(a.DataCell,{alignment:"center",children:"center"}),e.jsx(a.DataCell,{alignment:"right",children:"right"}),e.jsx(a.DataCell,{children:"default"}),e.jsx(a.DataCell,{alignment:"right",children:"right"})]})]})]}),w={render:Se,name:"With Full Width And Text Alignment (Table A4, A10, TableHeader A1, TableRow A2)",args:{hasFullWidth:!0}},ve=()=>e.jsx("div",{className:"emptyExpandedTableRow",children:"Rediger innhold"}),je=[{id:"s5f0e",rowData:{month:"Januar",amount:5426,coverage:"100 %",revenue:1e3}},{id:"3vesy",rowData:{month:"Februar",amount:5432,coverage:"50 %",revenue:500}},{id:"16prz",rowData:{month:"Mars",amount:4899,coverage:"20 %",revenue:2e3}},{id:"3xpjb",isExpandable:!0,rowData:{month:"April",amount:2344,coverage:"30 %",revenue:1055}},{id:"58pxb",isExpandable:!0,showExpandButtonTitle:!0,rowData:{month:"Mai",amount:3567,coverage:"40 %",revenue:1800}}],fe=t=>{const[s,n]=F.useState({direction:"none"}),i=F.useRef(null),p=je.slice().sort((r,d)=>{const o=s.sortKey,u=r.rowData,h=d.rowData;return!o||u[o]===h[o]?0:s.direction==="ascending"?u[o]>h[o]?1:-1:u[o]<h[o]?1:-1});return e.jsxs(a,{...t,sortState:s,setSortState:n,variant:t.variant,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"coverage",isSortable:!0,children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right","data-testid":"header-belop",scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",sortKey:"month",isSortable:!0,children:"Måned"}),e.jsx(a.HeaderCell,{"data-testid":"header-avkastning",alignment:"right",scope:"col",sortKey:"revenue",isSortable:!0,children:"Avkastning"})]})}),e.jsx(a.Body,{children:p.map(({isExpandable:r,id:d,rowData:o,showExpandButtonTitle:u},h)=>{const D=e.jsxs(e.Fragment,{children:[e.jsx(a.DataCell,{alignment:"left",id:d,children:o.coverage}),e.jsx(a.DataCell,{alignment:"right",children:o.amount}),e.jsx(a.DataCell,{alignment:"center",children:o.month}),e.jsx(a.DataCell,{alignment:"right",children:o.revenue})]});return r?e.jsx(a.Row,{"data-testid":`row-expand-${h}`,expandButtonAriaDescribedby:d,showExpandButtonTitle:u,expandableContent:e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(ye,{ref:i,as:"h2",level:2,children:"data"})}),isExpandable:!0,children:D},d):e.jsx(a.EditableRow,{id:d,"data-testid":`row-${h}`,editButtonAriaDescribedby:d,editableContent:ve,children:D},h)})}),e.jsx(a.Sum,{colSpan:4,hasTopSeparator:!0,children:"4555"})]})},E=t=>e.jsx(fe,{...t}),W=t=>e.jsxs(a,{...t,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Beløp"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",children:"Måned"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:je.map(({isExpandable:s,id:n,rowData:i,showExpandButtonTitle:p},r)=>{const d=e.jsxs(e.Fragment,{children:[e.jsx(a.DataCell,{alignment:"left",id:n,children:i.coverage}),e.jsx(a.DataCell,{alignment:"right",children:i.amount}),e.jsx(a.DataCell,{alignment:"center",children:i.month}),e.jsx(a.DataCell,{alignment:"right",children:i.revenue})]});return s?e.jsx(a.Row,{"data-testid":`row-expand-${r}`,expandButtonAriaDescribedby:n,expandButtonPosition:"right",showExpandButtonTitle:p,expandableContent:e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(ye,{as:"h2",level:2,children:"data"})}),isExpandable:!0,children:d},n):e.jsx(a.EditableRow,{id:n,"data-testid":`row-${r}`,editButtonAriaDescribedby:n,editButtonPosition:"right",editableContent:ve,children:d},r)})}),e.jsx(a.Sum,{colSpan:4,hasTopSeparator:!0,children:"4555"})]}),v={render:E,name:"Variant Compact (Table A1, A3, TableHeader A2, TableRow A3, A17, A19, A20)",args:{variant:"compact"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const s=l(t),n=s.getByTestId("row-0"),i=l(n).getByRole("button");await m.click(i);const p=s.getByTestId("row-expand-3"),r=l(p).getByRole("button");await m.click(r)}},j={render:W,name:"Variant Compact And Right Button Position",args:{variant:"compact"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=l(t),n=s.getByTestId("row-0"),i=l(n).getByRole("button");await m.click(i);const p=s.getByTestId("row-expand-3"),r=l(p).getByRole("button");await m.click(r)}},T={render:E,name:"With Expand Edit Sort (Table A9, A11, A14, A15, TableHeader A4, A5, A6, A7, B2, TableRow B3, A14, A15, A19)",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const s=l(t),n=s.getByTestId("row-0"),i=l(n).getByRole("button");await m.click(i);const p=s.getByTestId("row-expand-3"),r=l(p).getByRole("button");await m.click(r)}},B={render:W,name:"With Default Row In Edit Mode",args:{rowInEditModeId:"3vesy"},parameters:{imageSnapshot:{disableSnapshot:!1}}},S={render:W,name:"With Wide screen (Table A1, A2)",globals:{viewport:{value:"--breakpoint-m"}}},f={render:E,name:"With FullWidth Edit Expand Sort",args:{hasFullWidth:!0},argTypes:{hasFullWidth:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}}},A={render:W,name:"With FullWidth And Right Button Position",args:{hasFullWidth:!0},argTypes:{hasFullWidth:{table:{disable:!1}}}},R={render:C,args:{canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=l(t).getByRole("table");n.focus(),await c(n).toBeInTheDocument(),await c(n).toHaveAttribute("tabIndex","-1")}};var H,I,k;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...(k=(I=b.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var M,P,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
    },
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...(N=(P=g.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var _,O,V;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (Table A1, A8, B1, B2, TableRow B1, A20)',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(caption)).toBeInTheDocument();
    await expect(canvas.getByRole('table')).toBeInTheDocument();
  }
} satisfies Story`,...(V=(O=x.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var K,$,z;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: TemplateScroll,
  name: 'With Scroll (A5)',
  parameters: {
    a11y: {
      disable: true
    }
  }
} satisfies Story`,...(z=($=y.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var L,J,U;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: TemplateAlignment,
  name: 'With Full Width And Text Alignment (Table A4, A10, TableHeader A1, TableRow A2)',
  args: {
    hasFullWidth: true
  }
} satisfies Story`,...(U=(J=w.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Y,q,G;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const editableRow = canvas.getByTestId('row-0');
    const editButton = within(editableRow).getByRole('button');
    await fireEvent.click(editButton);
    const expandableRow = canvas.getByTestId('row-expand-3');
    const expandButton = within(expandableRow).getByRole('button');
    await fireEvent.click(expandButton);
  }
} satisfies Story`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Q,X,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const editableRow = canvas.getByTestId('row-0');
    const editButton = within(editableRow).getByRole('button');
    await fireEvent.click(editButton);
    const expandableRow = canvas.getByTestId('row-expand-3');
    const expandButton = within(expandableRow).getByRole('button');
    await fireEvent.click(expandButton);
  }
} satisfies Story`,...(Z=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'With Expand Edit Sort (Table A9, A11, A14, A15, TableHeader A4, A5, A6, A7, B2, TableRow B3, A14, A15, A19)',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const editableRow = canvas.getByTestId('row-0');
    const editButton = within(editableRow).getByRole('button');
    await fireEvent.click(editButton);
    const expandableRow = canvas.getByTestId('row-expand-3');
    const expandButton = within(expandableRow).getByRole('button');
    await fireEvent.click(expandButton);
  }
} satisfies Story`,...(te=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: TemplateWithRightButtonPosition,
  name: 'With Default Row In Edit Mode',
  args: {
    rowInEditModeId: '3vesy'
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: false
    }
  }
} satisfies Story`,...(re=(se=B.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var le,ie,oe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: TemplateWithRightButtonPosition,
  name: 'With Wide screen (Table A1, A2)',
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...(oe=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var de,ce,pe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  }
} satisfies Story`,...(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var he,me,ue;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var be,ge,xe;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
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
} satisfies Story`,...(xe=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};const Ae=["WithRef","WithAttributes","Defaults","WithScrollbar","WithFullWidthAndTextAlignment","WithVariantCompact","WithVariantCompactAndRightButtonPosition","WithExpandEditSort","WithDefaultRowInEditMode","WithWideScreen","WithFullWidthExpandableEdit","WithFullWidthAndRightButtonPosition","WithCanBeManuallyFocused"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Defaults:x,WithAttributes:g,WithCanBeManuallyFocused:R,WithDefaultRowInEditMode:B,WithExpandEditSort:T,WithFullWidthAndRightButtonPosition:A,WithFullWidthAndTextAlignment:w,WithFullWidthExpandableEdit:f,WithRef:b,WithScrollbar:y,WithVariantCompact:v,WithVariantCompactAndRightButtonPosition:j,WithWideScreen:S,__namedExportsOrder:Ae,default:Te},Symbol.toStringTag,{value:"Module"}));export{Ee as T};
//# sourceMappingURL=Table.test.stories-CY3T7p4U.js.map
