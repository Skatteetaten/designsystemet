import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{T as t}from"./index-BXoGGLso.js";import{w as p,e as n}from"./index-hUG6DWTw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CI44Z2h3.js";import"./index-DcL_RvKM.js";import"./index-yuNN44a_.js";import"./index-Cq8GVsVj.js";const I={component:t.EditableRow,title:"Tester/Table/EditableRow",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},editableContent:{table:{disable:!0}},editButtonAriaDescribedby:{table:{disable:!0}},editButtonPosition:{table:{disable:!0}},onEdit:{table:{disable:!0}},children:{table:{disable:!0}}}},u=e=>s.jsx(t,{caption:"testtabell",children:s.jsx(t.Body,{children:s.jsxs(t.EditableRow,{...e,children:[s.jsx(t.DataCell,{as:"th",children:"Cake"}),s.jsx(t.DataCell,{children:"3,000"})]})})}),i={render:u,name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=p(e).getByRole("row");await n(a).toBeInTheDocument(),await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={render:u,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=p(e).getByRole("row");await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveAttribute("lang","nb"),await n(a).toHaveAttribute("data-testid","123ID")}};var r,d,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
} satisfies Story`,...(o=(d=i.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var b,m,c;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
} satisfies Story`,...(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const F=["WithRef","WithAttributes"];export{l as WithAttributes,i as WithRef,F as __namedExportsOrder,I as default};
//# sourceMappingURL=TableEditableRow.test.stories-UDTqw9ea.js.map
