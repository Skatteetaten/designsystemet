import{j as e,r as M}from"./iframe-B8GUhlLl.js";import{T as a}from"./index-CU8F76KD.js";import{H as k}from"./index-BQLODoD0.js";const{expect:d,fireEvent:u,within:l}=__STORYBOOK_MODULE_TEST__,P="tabellcaption",O={component:a,title:"Tester/Table",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},caption:{table:{disable:!0}},variant:{table:{disable:!0}},size:{table:{disable:!0}},hasFullWidth:{table:{disable:!0}},showCaption:{table:{disable:!0}},sortState:{table:{disable:!0}},setSortState:{table:{disable:!0}},rowInEditModeId:{table:{disable:!0}},children:{table:{disable:!0}}},args:{caption:P},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},H=t=>e.jsxs(a,{...t,variant:t.variant,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Category"}),e.jsx(a.HeaderCell,{scope:"col",children:"Items"}),e.jsx(a.HeaderCell,{scope:"col",children:"Expenditure"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{className:"rowSpanRight",rowSpan:2,children:"Edible"}),e.jsx(a.DataCell,{children:"Donuts"}),e.jsx(a.DataCell,{alignment:"right",children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Cake"}),e.jsx(a.DataCell,{alignment:"right",children:"3,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{rowSpan:2,className:"rowSpanRight",children:"Non-Edible"}),e.jsx(a.DataCell,{children:"Stationery"}),e.jsx(a.DataCell,{alignment:"right",children:"18,000"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Batteries"}),e.jsx(a.DataCell,{alignment:"right",children:"9,000"})]})]}),e.jsx(a.Sum,{colSpan:2,children:"32,000"})]}),g={render:H,name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const s=l(t).getByRole("table");await d(s).toBeInTheDocument(),await d(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},x={render:H,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"},imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const s=l(t).getByRole("table");await d(s).toHaveClass("dummyClassname"),await d(s).toHaveAttribute("id","htmlId"),await d(s).toHaveAttribute("lang","nb"),await d(s).toHaveAttribute("data-testid","123ID")}},S={render:H,name:"Defaults (Table A1, A8, B1, B2, TableRow B1, A20)",play:async({canvasElement:t})=>{const n=l(t);await d(n.getByText(P)).toBeInTheDocument(),await d(n.getByRole("table")).toBeInTheDocument()}},V=t=>{const n=e.jsxs(a,{...t,variant:t.variant,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Forename"}),e.jsx(a.HeaderCell,{scope:"col",children:"Surname"}),e.jsx(a.HeaderCell,{scope:"col",children:"email"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Otto"}),e.jsx(a.DataCell,{children:"Octavius"}),e.jsx(a.DataCell,{children:"doc.ock@example.org"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Norman"}),e.jsx(a.DataCell,{children:"Osbourne"}),e.jsx(a.DataCell,{children:"norman.osbourne@example.org"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:"Curt"}),e.jsx(a.DataCell,{children:"Connors"}),e.jsx(a.DataCell,{children:"curt.connors@example.org"})]})]})]});return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Table med Scrollbar"}),e.jsx("div",{className:"scrollTableWrapper",children:n}),e.jsx("div",{className:"scrollTableWrapperSuccess",children:n}),e.jsx("div",{className:"scrollTableWrapperWarning",children:n})]})},y={render:V,name:"With Scroll (A5)",parameters:{a11y:{disable:!0}}},K=t=>e.jsxs(a,{...t,variant:"standard",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{alignment:"left",scope:"col",children:"left"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",children:"center"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"right"}),e.jsx(a.HeaderCell,{scope:"col",children:"default"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"right"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"left",children:"left"}),e.jsx(a.DataCell,{alignment:"center",children:"center"}),e.jsx(a.DataCell,{alignment:"right",children:"right"}),e.jsx(a.DataCell,{children:"default"}),e.jsx(a.DataCell,{alignment:"left",children:"left"})]}),e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{alignment:"left",children:"left"}),e.jsx(a.DataCell,{alignment:"center",children:"center"}),e.jsx(a.DataCell,{alignment:"right",children:"right"}),e.jsx(a.DataCell,{children:"default"}),e.jsx(a.DataCell,{alignment:"right",children:"right"})]})]})]}),w={render:K,name:"With Full Width And Text Alignment (Table A4, A10, TableHeader A1, TableRow A2)",args:{hasFullWidth:!0}},N=()=>e.jsx("div",{className:"emptyExpandedTableRow",children:"Rediger innhold"}),_=[{id:"s5f0e",rowData:{month:"Januar",amount:5426,coverage:"100 %",revenue:1e3}},{id:"3vesy",rowData:{month:"Februar",amount:5432,coverage:"50 %",revenue:500}},{id:"16prz",rowData:{month:"Mars",amount:4899,coverage:"20 %",revenue:2e3}},{id:"3xpjb",isExpandable:!0,rowData:{month:"April",amount:2344,coverage:"30 %",revenue:1055}},{id:"58pxb",isExpandable:!0,showExpandButtonTitle:!0,rowData:{month:"Mai",amount:3567,coverage:"40 %",revenue:1800}}],L=t=>{const[n,s]=M.useState({direction:"none"}),i=M.useRef(null),c=_.slice().sort((r,m)=>{const o=n.sortKey,b=r.rowData,p=m.rowData;return!o||b[o]===p[o]?0:n.direction==="ascending"?b[o]>p[o]?1:-1:b[o]<p[o]?1:-1});return e.jsxs(a,{...t,sortState:n,setSortState:s,variant:t.variant,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{as:"td"}),e.jsx(a.HeaderCell,{scope:"col",sortKey:"coverage",isSortable:!0,children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right","data-testid":"header-belop",scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",sortKey:"month",isSortable:!0,children:"Måned"}),e.jsx(a.HeaderCell,{"data-testid":"header-avkastning",alignment:"right",scope:"col",sortKey:"revenue",isSortable:!0,children:"Avkastning"})]})}),e.jsx(a.Body,{children:c.map(({isExpandable:r,id:m,rowData:o,showExpandButtonTitle:b},p)=>{const z=e.jsxs(e.Fragment,{children:[e.jsx(a.DataCell,{alignment:"left",children:o.coverage}),e.jsx(a.DataCell,{alignment:"right",children:o.amount}),e.jsx(a.DataCell,{alignment:"center",children:o.month}),e.jsx(a.DataCell,{alignment:"right",children:o.revenue})]});return r?e.jsx(a.Row,{"data-testid":`row-expand-${p}`,expandButtonAriaDescribedby:m,showExpandButtonTitle:b,expandableContent:e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(k,{ref:i,as:"h2",children:"data"})}),isExpandable:!0,children:z},m):e.jsx(a.EditableRow,{id:m,"data-testid":`row-${p}`,editButtonAriaDescribedby:m,editableContent:N,children:z},p)})}),e.jsx(a.Sum,{colSpan:4,hasTopSeparator:!0,children:"4555"})]})},h=t=>e.jsx(L,{...t}),I=t=>e.jsxs(a,{...t,caption:"Månedoversikt",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Beløp"}),e.jsx(a.HeaderCell,{alignment:"center",scope:"col",children:"Måned"}),e.jsx(a.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"}),e.jsx(a.HeaderCell,{as:"td"})]})}),e.jsx(a.Body,{children:_.map(({isExpandable:n,id:s,rowData:i,showExpandButtonTitle:c},r)=>{const m=e.jsxs(e.Fragment,{children:[e.jsx(a.DataCell,{alignment:"left",children:i.coverage}),e.jsx(a.DataCell,{alignment:"right",children:i.amount}),e.jsx(a.DataCell,{alignment:"center",children:i.month}),e.jsx(a.DataCell,{alignment:"right",children:i.revenue})]});return n?e.jsx(a.Row,{"data-testid":`row-expand-${r}`,expandButtonAriaDescribedby:s,expandButtonPosition:"right",showExpandButtonTitle:c,expandableContent:e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(k,{as:"h2",children:"data"})}),isExpandable:!0,children:m},s):e.jsx(a.EditableRow,{id:s,"data-testid":`row-${r}`,editButtonAriaDescribedby:s,editButtonPosition:"right",editableContent:N,children:m},r)})}),e.jsx(a.Sum,{colSpan:4,hasTopSeparator:!0,children:"4555"})]}),v={render:h,name:"Variant Compact (Table A1, A3, TableHeader A2, TableRow A3, A17, A19, A20)",args:{variant:"compact"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=l(t),s=n.getByTestId("row-0"),i=l(s).getByRole("button");await u.click(i);const c=n.getByTestId("row-expand-3"),r=l(c).getByRole("button");await u.click(r)}},f={render:I,name:"Variant Compact And Right Button Position",args:{variant:"compact"},argTypes:{variant:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=l(t),s=n.getByTestId("row-0"),i=l(s).getByRole("button");await u.click(i);const c=n.getByTestId("row-expand-3"),r=l(c).getByRole("button");await u.click(r)}},T={render:h,name:"With Expand Edit Sort (Table A9, A11, A14, A15, TableHeader A4, A5, A6, A7, B2, TableRow B3, A14, A15, A19)",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=l(t),s=n.getByTestId("row-0"),i=l(s).getByRole("button");await u.click(i);const c=n.getByTestId("row-expand-3"),r=l(c).getByRole("button");await u.click(r)}},j={render:I,name:"With Default Row In Edit Mode",args:{rowInEditModeId:"3vesy"},parameters:{imageSnapshot:{disableSnapshot:!1}}},B={render:I,name:"With Wide screen (Table A1, A2)",globals:{viewport:{value:"--breakpoint-m"}}},A={render:h,name:"With FullWidth Edit Expand Sort",args:{hasFullWidth:!0},argTypes:{hasFullWidth:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}}},R={render:I,name:"With FullWidth And Right Button Position",args:{hasFullWidth:!0},argTypes:{hasFullWidth:{table:{disable:!1}}}},W={render:H,args:{canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const s=l(t).getByRole("table");s.focus(),await d(s).toBeInTheDocument(),await d(s).toHaveAttribute("tabIndex","-1")}},E={render:h,name:"Size ExtraSmall",args:{size:"extraSmall"},argTypes:{size:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!1}}},C={render:h,name:"Size Small",args:{size:"small"},argTypes:{size:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!1}}},D={render:h,name:"Size Medium",args:{size:"medium"},argTypes:{size:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!1}}},F={render:h,name:"Size Large",args:{size:"large"},argTypes:{size:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!1}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'Defaults (Table A1, A8, B1, B2, TableRow B1, A20)',
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(caption)).toBeInTheDocument();
    await expect(canvas.getByRole('table')).toBeInTheDocument();
  }
} satisfies Story`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: TemplateScroll,
  name: 'With Scroll (A5)',
  parameters: {
    a11y: {
      disable: true
    }
  }
} satisfies Story`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: TemplateAlignment,
  name: 'With Full Width And Text Alignment (Table A4, A10, TableHeader A1, TableRow A2)',
  args: {
    hasFullWidth: true
  }
} satisfies Story`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: TemplateWithRightButtonPosition,
  name: 'With Wide screen (Table A1, A2)',
  globals: {
    viewport: {
      value: '--breakpoint-m'
    }
  }
} satisfies Story`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...R.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'Size ExtraSmall',
  args: {
    size: 'extraSmall'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: false
    }
  }
} satisfies Story`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'Size Small',
  args: {
    size: 'small'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: false
    }
  }
} satisfies Story`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'Size Medium',
  args: {
    size: 'medium'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: false
    }
  }
} satisfies Story`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: TemplateExpandEditSort,
  name: 'Size Large',
  args: {
    size: 'large'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: false
    }
  }
} satisfies Story`,...F.parameters?.docs?.source}}};const $=["WithRef","WithAttributes","Defaults","WithScrollbar","WithFullWidthAndTextAlignment","WithVariantCompact","WithVariantCompactAndRightButtonPosition","WithExpandEditSort","WithDefaultRowInEditMode","WithWideScreen","WithFullWidthExpandableEdit","WithFullWidthAndRightButtonPosition","WithCanBeManuallyFocused","WithSizeExtraSmall","WithSizeSmall","WithSizeMedium","WithSizeLarge"],q=Object.freeze(Object.defineProperty({__proto__:null,Defaults:S,WithAttributes:x,WithCanBeManuallyFocused:W,WithDefaultRowInEditMode:j,WithExpandEditSort:T,WithFullWidthAndRightButtonPosition:R,WithFullWidthAndTextAlignment:w,WithFullWidthExpandableEdit:A,WithRef:g,WithScrollbar:y,WithSizeExtraSmall:E,WithSizeLarge:F,WithSizeMedium:D,WithSizeSmall:C,WithVariantCompact:v,WithVariantCompactAndRightButtonPosition:f,WithWideScreen:B,__namedExportsOrder:$,default:O},Symbol.toStringTag,{value:"Module"}));export{q as T};
//# sourceMappingURL=Table.test.stories-Cx6cgHIb.js.map
