import{j as i}from"./jsx-runtime-BYYWji4R.js";import{w as m,e as a,a as E}from"./index-DIxTUSTt.js";import{T as n}from"./index-m1pPjkGf.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9wdQ6Rv.js";import"./index-BomPkCop.js";import"./index-DYo2YWtE.js";import"./index-C176R4Vg.js";const L={component:n.EditableRow,title:"Tester/Table/EditableRow",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},editableContent:{table:{disable:!0}},editButtonAriaDescribedby:{table:{disable:!0}},editButtonPosition:{table:{disable:!0}},editButtonRef:{table:{disable:!0}},editableContentRef:{table:{disable:!0}},onEdit:{table:{disable:!0}},children:{table:{disable:!0}}}},c=e=>i.jsx(n,{caption:"testtabell",children:i.jsx(n.Body,{children:i.jsxs(n.EditableRow,{...e,children:[i.jsx(n.DataCell,{as:"th",children:"Cake"}),i.jsx(n.DataCell,{children:"3,000"})]})})}),r={render:c,name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=m(e).getByRole("row");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={render:c,name:"With EditButtonRef",args:{editButtonRef:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=m(e).getByRole("button");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={render:c,name:"With EditableContentRef",args:{editableContentRef:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const s=m(e),t=s.getByRole("button");await E.click(t);const b=s.getByText("Rediger data");await a(b).toBeInTheDocument(),await a(b).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={render:c,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=m(e).getByRole("row");await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}};var u,p,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLTableRowElement | null): void => {
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
    const table = canvas.getByRole('row');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var y,h,g;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  name: 'With EditButtonRef',
  args: {
    editButtonRef: (instance: HTMLButtonElement | null): void => {
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
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const editButton = canvas.getByRole('button');
    await expect(editButton).toBeInTheDocument();
    await expect(editButton).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(g=(h=d.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,v,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  name: 'With EditableContentRef',
  args: {
    editableContentRef: (instance: HTMLSpanElement | null): void => {
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
    },
    HTMLSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const editButton = canvas.getByRole('button');
    await fireEvent.click(editButton);
    const editableContent = canvas.getByText('Rediger data');
    await expect(editableContent).toBeInTheDocument();
    await expect(editableContent).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(R=(v=o.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var B,T,F;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('row');
    await expect(table).toHaveClass('dummyClassname');
    await expect(table).toHaveAttribute('id', 'htmlId');
    await expect(table).toHaveAttribute('lang', 'nb');
    await expect(table).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const M=["WithRef","WithEditButtonRef","WithEditableContentRef","WithAttributes"];export{l as WithAttributes,d as WithEditButtonRef,o as WithEditableContentRef,r as WithRef,M as __namedExportsOrder,L as default};
//# sourceMappingURL=TableEditableRow.test.stories-DJGZ8_Hn.js.map
