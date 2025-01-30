import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as E}from"./index-ClcD9ViR.js";import{w as T,e as l}from"./index-XVqkR3zt.js";import"./index--O6iZ70i.js";import{T as a}from"./index-CHrQ5N2W.js";import{H as ce}from"./index-BaCHQVlv.js";import{w as o}from"./storybook.testing.utils-CMs160i9.js";import{d as me}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BWc9jU-Q.js";import"./index-U0B695k8.js";import"./index-Dxnk4fMh.js";const D="tabellcaption",We={component:a,title:"Tester/Table/Table",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},caption:{table:{disable:!0}},variant:{table:{disable:!0},options:[...me],control:"radio"},hasFullWidth:{table:{disable:!0}},showCaption:{table:{disable:!0}},sortState:{table:{disable:!0}},setSortState:{table:{disable:!0}},rowInEditModeId:{table:{disable:!0}},children:{table:{disable:!0}}},args:{caption:D}},i={caption:D},pe=()=>e.jsx("div",{className:"emptyExpandedTableRow"}),ue=t=>{const[n,r]=E.useState({direction:"none"}),oe=E.useRef(null),de=[{id:"s5f0e",rowData:{month:"Januar",amount:5426,coverage:"100 %",revenue:1e3}},{id:"3vesy",rowData:{month:"Februar",amount:5432,coverage:"50 %",revenue:500}},{id:"16prz",rowData:{month:"Mars",amount:4899,coverage:"20 %",revenue:2e3}},{id:"3xpjb",isExpandable:!0,rowData:{month:"April",amount:2344,coverage:"30 %",revenue:1055}}].slice().sort((C,d)=>{const s=n.sortKey,c=C.rowData,m=d.rowData;return!s||c[s]===m[s]?0:n.direction==="ascending"?c[s]>m[s]?1:-1:c[s]<m[s]?1:-1});return e.jsxs(a,{...t,sortState:n,setSortState:r,variant:t.variant,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"coverage",isSortable:!0,children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right","data-testid":"header-belop",scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",sortKey:"month",isSortable:!0,children:"Måned"}),e.jsx(a.HeaderCell,{"data-testid":"header-avkastning",alignment:"right",scope:"col",sortKey:"revenue",isSortable:!0,children:"Avkastning"})]})}),e.jsx(a.Body,{children:de.map(({isExpandable:C,id:d,rowData:s},c)=>{const m=e.jsxs(e.Fragment,{children:[e.jsx(a.DataCell,{alignment:"left",id:d,children:s.coverage}),e.jsx(a.DataCell,{alignment:"right",children:s.amount}),e.jsx(a.DataCell,{alignment:"center",children:s.month}),e.jsx(a.DataCell,{alignment:"right",children:s.revenue})]});return C?e.jsx(a.Row,{"data-testid":`row-expand-${c}`,expandButtonAriaDescribedby:d,expandableContent:e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(ce,{ref:oe,as:"h2",level:2,children:"data"})}),expandButtonPosition:"left",isExpandable:!0,children:m},d):e.jsx(a.EditableRow,{id:d,"data-testid":`row-${c}`,editButtonAriaDescribedby:d,editButtonPosition:"left",editableContent:pe,children:m},c)})}),e.jsx(a.Sum,{colSpan:4,hasTopSeparator:!0,children:"4555"})]})},S=t=>e.jsxs(a,{...t,variant:t.variant,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",children:"Expenditure"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{children:"9,000"})]})]}),e.jsx(a.Sum,{colSpan:2,children:"32,000"})]}),p=t=>e.jsx(ue,{...t}),u={render:S,name:"With Ref (FA1)",args:{...i,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const r=T(t).getByRole("table");await l(r).toBeInTheDocument(),await l(r).toHaveAttribute("id","dummyIdForwardedFromRef")}},h={render:S,name:"With Attributes (FA2-5)",args:{...i,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const r=T(t).getByRole("table");await l(r).toHaveClass("dummyClassname"),await l(r).toHaveAttribute("id","htmlId"),await l(r).toHaveAttribute("lang","nb"),await l(r).toHaveAttribute("data-testid","123ID")}},b={render:S,name:"Defaults (Table A1, A8, B1, B2, TableRow B1, A20)",args:{...i},play:async({canvasElement:t})=>{const n=T(t);await l(n.getByText(D)).toBeInTheDocument(),await l(n.getByRole("table")).toBeInTheDocument()}},x={render:p,name:"Variant compact(Table A1, A3, TableHeader A2, TableRow A3, A17, A19, A20)",args:{...i,variant:"compact"},argTypes:{variant:{table:{disable:!1}}}},he=t=>{const n=e.jsxs(a,{...t,variant:t.variant,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Forename"}),e.jsx(a.HeaderCell,{scope:"col",children:"Surname"}),e.jsx(a.HeaderCell,{scope:"col",children:"email"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Otto"}),e.jsx(a.DataCell,{children:"Octavius"}),e.jsx(a.DataCell,{children:"doc.ock@example.org"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Norman"}),e.jsx(a.DataCell,{children:"Osbourne"}),e.jsx(a.DataCell,{children:"norman.osbourne@example.org"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Curt"}),e.jsx(a.DataCell,{children:"Connors"}),e.jsx(a.DataCell,{children:"curt.connors@example.org"})]})]})]});return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Table med Scrollbar"}),e.jsx("div",{className:"scrollTableWrapper",children:n}),e.jsx("div",{className:"scrollTableWrapperSuccess",children:n}),e.jsx("div",{className:"scrollTableWrapperWarning",children:n})]})},g={render:he,name:"With scroll (A5)",parameters:{a11y:{disable:!0}}},be=t=>e.jsxs(a,{...t,variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{alignment:"left",scope:"col",children:"left"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",children:"center"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"right"}),e.jsx(a.HeaderCell,{scope:"col",children:"default"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"right"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"left",children:"left"}),e.jsx(a.DataCell,{alignment:"center",children:"center"}),e.jsx(a.DataCell,{alignment:"right",children:"right"}),e.jsx(a.DataCell,{children:"default"}),e.jsx(a.DataCell,{alignment:"left",children:"left"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"left",children:"left"}),e.jsx(a.DataCell,{alignment:"center",children:"center"}),e.jsx(a.DataCell,{alignment:"right",children:"right"}),e.jsx(a.DataCell,{children:"default"}),e.jsx(a.DataCell,{alignment:"right",children:"right"})]})]})]}),A={render:be,name:"With Full Width, text Alignment (Table A4, A10, TableHeader A1, TableRow A2)",args:{...i,hasFullWidth:!0}},w={render:p,name:"With Expand Edit Sort (Table A9, A11, A14, A15, TableHeader A4, A5, A6, A7, B2, TableRow B3, A14, A15, A19)",args:{...i},parameters:{imageSnapshot:{hover:[`${o} [data-testid="row-0"]`,`${o} [data-testid="header-belop"] button`],focus:[`${o} [data-testid="header-belop"] button`,`${o} [data-testid="row-0"] button`],click:[`${o} [data-testid="row-0"] button`,`${o} [data-testid="row-expand-3"] button`,`${o} [data-testid="header-belop"] button`,`${o} [data-testid="header-belop"] button`,`${o} [data-testid="header-avkastning"] button`]}}},f={render:p,name:"With Default Row In Edit Mode",args:{...i,rowInEditModeId:"3vesy"}},j={render:p,name:"With Wide screen (Table A1, A2)",args:{...i},parameters:{viewport:{defaultViewport:"--breakpoint-m"}}},v={render:p,name:"With FullWidth Edit Expand Sort",args:{...i,hasFullWidth:!0}},y={render:S,args:{...i,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:t})=>{const r=T(t).getByRole("table");r.focus(),await l(r).toBeInTheDocument(),await l(r).toHaveAttribute("tabIndex","-1")}};var W,R,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(B=(R=u.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var H,F,I;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var $,M,N;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (Table A1, A8, B1, B2, TableRow B1, A20)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(caption)).toBeInTheDocument();
    await expect(canvas.getByRole('table')).toBeInTheDocument();
  }
} satisfies Story`,...(N=(M=b.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var k,K,P;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'Variant compact(Table A1, A3, TableHeader A2, TableRow A3, A17, A19, A20)',
  args: {
    ...defaultArgs,
    variant: 'compact'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(P=(K=x.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var V,O,_;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: TemplateScroll,
  name: 'With scroll (A5)',
  parameters: {
    a11y: {
      disable: true
    }
  }
} satisfies Story`,...(_=(O=g.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var z,J,L;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: TemplateAlignment,
  name: 'With Full Width, text Alignment (Table A4, A10, TableHeader A1, TableRow A2)',
  args: {
    ...defaultArgs,
    hasFullWidth: true
  }
} satisfies Story`,...(L=(J=A.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var q,G,Q;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:'{\n  render: TemplateExpandEditSort,\n  name: \'With Expand Edit Sort (Table A9, A11, A14, A15, TableHeader A4, A5, A6, A7, B2, TableRow B3, A14, A15, A19)\',\n  args: {\n    ...defaultArgs\n  },\n  parameters: {\n    imageSnapshot: {\n      hover: [`${wrapper} [data-testid="row-0"]`, `${wrapper} [data-testid="header-belop"] button`],\n      focus: [`${wrapper} [data-testid="header-belop"] button`, `${wrapper} [data-testid="row-0"] button`],\n      click: [`${wrapper} [data-testid="row-0"] button`, `${wrapper} [data-testid="row-expand-3"] button`, `${wrapper} [data-testid="header-belop"] button`, `${wrapper} [data-testid="header-belop"] button`, `${wrapper} [data-testid="header-avkastning"] button`]\n    }\n  }\n} satisfies Story',...(Q=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'With Default Row In Edit Mode',
  args: {
    ...defaultArgs,
    rowInEditModeId: '3vesy'
  }
} satisfies Story`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'With Wide screen (Table A1, A2)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-m'
    }
  }
} satisfies Story`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'With FullWidth Edit Expand Sort',
  args: {
    ...defaultArgs,
    hasFullWidth: true
  }
} satisfies Story`,...(re=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,le,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Re=["WithRef","WithAttributes","Defaults","WithVariantCompact","WithScrollbar","WithFullWidthAndTextAlignment","WithExpandEditSort","WithDefaultRowInEditMode","WithWideScreen","WithFullWidthExpandableEdit","WithCanBeManuallyFocused"];export{b as Defaults,h as WithAttributes,y as WithCanBeManuallyFocused,f as WithDefaultRowInEditMode,w as WithExpandEditSort,A as WithFullWidthAndTextAlignment,v as WithFullWidthExpandableEdit,u as WithRef,g as WithScrollbar,x as WithVariantCompact,j as WithWideScreen,Re as __namedExportsOrder,We as default};
//# sourceMappingURL=Table.test.stories-ef9nsBmz.js.map
