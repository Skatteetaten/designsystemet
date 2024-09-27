import{T}from"./index-D5d3H3y9.js";import{w as o,e as t}from"./index-hUG6DWTw.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CI44Z2h3.js";import"./index-DcL_RvKM.js";import"./index-DMYlLpXe.js";import"./index-Cq8GVsVj.js";const D={component:T.DataCell,title:"Tester/Table/DataCell",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},alignment:{table:{disable:!0}},as:{table:{disable:!0}},colSpan:{table:{disable:!0}},rowSpan:{table:{disable:!0}},scope:{table:{disable:!0}},children:{table:{disable:!0}}}},d={children:"cake"},s={name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=o(e).getByRole("cell");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{...d,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=o(e).getByRole("cell");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},r={name:"With Scope And As th (TableRow B2, TableHeader B1)",args:{...d,as:"th",scope:"row"},argTypes:{as:{table:{disable:!1}},scope:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=o(e).getByRole("rowheader");await t(a).toHaveAttribute("scope","row")}},i={name:"With children (TableRow A1)",args:{children:"cellChildren"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e);await t(n.getByText("cellChildren")).toBeInTheDocument()}};var c,m,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    const table = canvas.getByRole('cell');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,u,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    const dataCell = canvas.getByRole('cell');
    await expect(dataCell).toHaveClass('dummyClassname');
    await expect(dataCell).toHaveAttribute('id', 'htmlId');
    await expect(dataCell).toHaveAttribute('lang', 'nb');
    await expect(dataCell).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'With Scope And As th (TableRow B2, TableHeader B1)',
  args: {
    ...defaultArgs,
    as: 'th',
    scope: 'row'
  },
  argTypes: {
    as: {
      table: {
        disable: false
      }
    },
    scope: {
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
    const dataCell = canvas.getByRole('rowheader');
    await expect(dataCell).toHaveAttribute('scope', 'row');
  }
} satisfies Story`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,w,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With children (TableRow A1)',
  args: {
    children: 'cellChildren'
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
    await expect(canvas.getByText('cellChildren')).toBeInTheDocument();
  }
} satisfies Story`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const E=["WithRef","WithAttributes","WithThAndScope","WithChildren"];export{l as WithAttributes,i as WithChildren,s as WithRef,r as WithThAndScope,E as __namedExportsOrder,D as default};
//# sourceMappingURL=TableDataCell.test.stories-BBBk853e.js.map
