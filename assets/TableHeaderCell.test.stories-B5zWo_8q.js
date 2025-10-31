import{j as d}from"./iframe-C2uFIQ6s.js";import{T as c}from"./index-BuJMEA-1.js";const{expect:t,within:m}=__STORYBOOK_MODULE_TEST__,I={component:c.HeaderCell,title:"Tester/Table/HeaderCell",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},alignment:{table:{disable:!0}},as:{table:{disable:!0}},children:{table:{disable:!0}},colSpan:{table:{disable:!0}},isSortDisabled:{table:{disable:!0}},isSortable:{table:{disable:!0}},scope:{table:{disable:!0}},sortKey:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},H={children:"cake"},o=e=>d.jsx("table",{children:d.jsx(c.Header,{children:d.jsx(c.Row,{children:d.jsx(c.HeaderCell,{...e,children:e.children})})})}),n={render:o,name:"With Ref (FA1)",args:{...H,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getByRole("columnheader");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={render:o,name:"With Attributes (FA2-5)",args:{...H,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=m(e).getByRole("columnheader");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},r={render:o,name:"With Children (Table A8)",args:{children:"columnheader"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getByText("columnheader");await t(a).toBeInTheDocument()}},l={render:o,name:"With Sortable",args:{children:"columnheader",isSortable:!0,sortKey:"columnheader"},argTypes:{isSortable:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}}},i={render:o,name:"With Disabled (Table Header A8)",args:{children:"columnheader",isSortable:!0,isSortDisabled:!0,sortKey:"columnheader"},argTypes:{isSortDisabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const a=m(e).getByText("columnheader");await t(a).toBeDisabled()}};var u,p,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLTableCellElement | null): void => {
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
    const table = canvas.getByRole('columnheader');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,y,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    },
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const dataCell = canvas.getByRole('columnheader');
    await expect(dataCell).toHaveClass('dummyClassname');
    await expect(dataCell).toHaveAttribute('id', 'htmlId');
    await expect(dataCell).toHaveAttribute('lang', 'nb');
    await expect(dataCell).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,v,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  name: 'With Children (Table A8)',
  args: {
    children: 'columnheader'
  },
  argTypes: {
    children: {
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
    const dataCell = canvas.getByText('columnheader');
    await expect(dataCell).toBeInTheDocument();
  }
} satisfies Story`,...(T=(v=r.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,w,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  name: 'With Sortable',
  args: {
    children: 'columnheader',
    isSortable: true,
    sortKey: 'columnheader'
  },
  argTypes: {
    isSortable: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  }
} satisfies Story`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var x,D,W;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  name: 'With Disabled (Table Header A8)',
  args: {
    children: 'columnheader',
    isSortable: true,
    isSortDisabled: true,
    sortKey: 'columnheader'
  },
  argTypes: {
    isSortDisabled: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const dataCell = canvas.getByText('columnheader');
    await expect(dataCell).toBeDisabled();
  }
} satisfies Story`,...(W=(D=i.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const B=["WithRef","WithAttributes","WithChildren","WithSortable","WithDisabled"],F=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:s,WithChildren:r,WithDisabled:i,WithRef:n,WithSortable:l,__namedExportsOrder:B,default:I},Symbol.toStringTag,{value:"Module"}));export{F as T};
//# sourceMappingURL=TableHeaderCell.test.stories-B5zWo_8q.js.map
