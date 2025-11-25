import{j as n}from"./jsx-runtime-BYYWji4R.js";import{w as d,e as t}from"./index-DIxTUSTt.js";import{T as i}from"./index-DUEJWUfC.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BYKicpQW.js";import"./index-C8q4C1To.js";import"./index-CEFmy_Ic.js";import"./index-BuQZV-my.js";const W={component:i.HeaderCell,title:"Tester/Table/HeaderCell",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},alignment:{table:{disable:!0}},as:{table:{disable:!0}},children:{table:{disable:!0}},colSpan:{table:{disable:!0}},isSortable:{table:{disable:!0}},scope:{table:{disable:!0}},sortKey:{table:{disable:!0}}}},T={children:"cake"},o=e=>n.jsx("table",{children:n.jsx(i.Header,{children:n.jsx(i.Row,{children:n.jsx(i.HeaderCell,{...e,children:e.children})})})}),s={render:o,name:"With Ref (FA1)",args:{...T,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=d(e).getByRole("columnheader");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={render:o,name:"With Attributes (FA2-5)",args:{...T,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=d(e).getByRole("columnheader");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},r={render:o,name:"With Children (Table A8)",args:{children:"columnheader"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=d(e).getByText("columnheader");await t(a).toBeInTheDocument()}};var c,b,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,h,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const dataCell = canvas.getByText('columnheader');
    await expect(dataCell).toBeInTheDocument();
  }
} satisfies Story`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const B=["WithRef","WithAttributes","WithChildren"];export{l as WithAttributes,r as WithChildren,s as WithRef,B as __namedExportsOrder,W as default};
//# sourceMappingURL=TableHeaderCell.test.stories-BpA_WE6M.js.map
