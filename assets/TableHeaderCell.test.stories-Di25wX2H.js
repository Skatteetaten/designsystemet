import{j as d}from"./iframe-Br1Xu9zr.js";import{T as c}from"./index-Dw0yNRIm.js";const{expect:t,within:m}=__STORYBOOK_MODULE_TEST__,p={component:c.HeaderCell,title:"Tester/Table/HeaderCell",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},alignment:{table:{disable:!0}},as:{table:{disable:!0}},children:{table:{disable:!0}},colSpan:{table:{disable:!0}},isSortDisabled:{table:{disable:!0}},isSortable:{table:{disable:!0}},scope:{table:{disable:!0}},sortKey:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},u={children:"cake"},o=e=>d.jsx("table",{children:d.jsx(c.Header,{children:d.jsx(c.Row,{children:d.jsx(c.HeaderCell,{...e,children:e.children})})})}),n={render:o,name:"With Ref (FA1)",args:{...u,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getByRole("columnheader");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={render:o,name:"With Attributes (FA2-5)",args:{...u,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=m(e).getByRole("columnheader");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},r={render:o,name:"With Children (Table A8)",args:{children:"columnheader"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getByText("columnheader");await t(a).toBeInTheDocument()}},l={render:o,name:"With Sortable",args:{children:"columnheader",isSortable:!0,sortKey:"columnheader"},argTypes:{isSortable:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},i={render:o,name:"With Disabled (Table Header A8)",args:{children:"columnheader",isSortable:!0,isSortDisabled:!0,sortKey:"columnheader"},argTypes:{isSortDisabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const a=m(e).getByText("columnheader");await t(a).toBeDisabled()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const dataCell = canvas.getByText('columnheader');
    await expect(dataCell).toBeDisabled();
  }
} satisfies Story`,...i.parameters?.docs?.source}}};const h=["WithRef","WithAttributes","WithChildren","WithSortable","WithDisabled"],S=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:s,WithChildren:r,WithDisabled:i,WithRef:n,WithSortable:l,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{S as T};
//# sourceMappingURL=TableHeaderCell.test.stories-Di25wX2H.js.map
