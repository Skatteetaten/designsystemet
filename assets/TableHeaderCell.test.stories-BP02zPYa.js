import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{w as o,e as t}from"./index-DIxTUSTt.js";import{T as d}from"./index-IazW8HN4.js";import{w as b}from"./storybook.testing.utils-CMs160i9.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGk5cNE3.js";import"./index-DAV9Xejq.js";import"./index-DfnG5Ebn.js";import"./index-uxUkjR_c.js";const P={component:d.HeaderCell,title:"Tester/Table/HeaderCell",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},alignment:{table:{disable:!0}},as:{table:{disable:!0}},children:{table:{disable:!0}},colSpan:{table:{disable:!0}},isSortDisabled:{table:{disable:!0}},isSortable:{table:{disable:!0}},scope:{table:{disable:!0}},sortKey:{table:{disable:!0}}}},x={children:"cake"},c=e=>n.jsx("table",{children:n.jsx(d.Header,{children:n.jsx(d.Row,{children:n.jsx(d.HeaderCell,{...e,children:e.children})})})}),s={render:c,name:"With Ref (FA1)",args:{...x,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=o(e).getByRole("columnheader");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={render:c,name:"With Attributes (FA2-5)",args:{...x,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=o(e).getByRole("columnheader");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},l={render:c,name:"With Children (Table A8)",args:{children:"columnheader"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=o(e).getByText("columnheader");await t(a).toBeInTheDocument()}},i={render:c,name:"With Disabled (Table Header A8)",args:{children:"columnheader",isSortable:!0,isSortDisabled:!0,sortKey:"columnheader"},argTypes:{isSortDisabled:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${b} button`,hover:`${b} button`}},play:async({canvasElement:e})=>{const a=o(e).getByText("columnheader");await t(a).toBeDisabled()}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,T,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,S,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      focus: \`\${wrapper} button\`,
      hover: \`\${wrapper} button\`
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const dataCell = canvas.getByText('columnheader');
    await expect(dataCell).toBeDisabled();
  }
} satisfies Story`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const $=["WithRef","WithAttributes","WithChildren","WithDisabled"];export{r as WithAttributes,l as WithChildren,i as WithDisabled,s as WithRef,$ as __namedExportsOrder,P as default};
//# sourceMappingURL=TableHeaderCell.test.stories-BP02zPYa.js.map
