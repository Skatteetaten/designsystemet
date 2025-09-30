import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{w as p,e as a,a as D}from"./index-DIxTUSTt.js";import{T as i}from"./index-IazW8HN4.js";import{w as u}from"./storybook.testing.utils-CMs160i9.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGk5cNE3.js";import"./index-DAV9Xejq.js";import"./index-DfnG5Ebn.js";import"./index-uxUkjR_c.js";const q={component:i.EditableRow,title:"Tester/Table/EditableRow",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},editableContent:{table:{disable:!0}},editButtonAriaDescribedby:{table:{disable:!0}},editButtonPosition:{table:{disable:!0}},editButtonRef:{table:{disable:!0}},editableContentRef:{table:{disable:!0}},onEdit:{table:{disable:!0}},children:{table:{disable:!0}}}},s=e=>n.jsx(i,{caption:"testtabell",children:n.jsx(i.Body,{children:n.jsxs(i.EditableRow,{...e,children:[n.jsx(i.DataCell,{as:"th",children:"Cake"}),n.jsx(i.DataCell,{children:"3,000"})]})})}),o={render:s,name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=p(e).getByRole("row");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={render:s,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{click:`${u} button`}},play:async({canvasElement:e})=>{const t=p(e).getByRole("row");await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}},l={render:s,name:"With EditButtonRef",args:{editButtonRef:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=p(e).getByRole("button");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={render:s,name:"With EditableContentRef",args:{editableContentRef:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const r=p(e),t=r.getByRole("button");await D.click(t);const f=r.getByText("Rediger data");await a(f).toBeInTheDocument(),await a(f).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={render:s,name:"With EditableContent",args:{editableContent:e=>n.jsx("span",{onClick:()=>{e()},children:"Rediger data"})},parameters:{imageSnapshot:{click:`${u} button`}}},b={render:s,name:"With EditButtonPosition Right",args:{editButtonPosition:"right",editableContent:e=>n.jsx("span",{onClick:()=>{e()},children:"Rediger data"})},argTypes:{editButtonPosition:{table:{disable:!1}}},parameters:{imageSnapshot:{click:`${u} button`}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var w,R,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      click: \`\${wrapper} button\`
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
} satisfies Story`,...(v=(R=d.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var B,E,T;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
} satisfies Story`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var C,S,F;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(F=(S=m.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var I,x,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  name: 'With EditableContent',
  args: {
    editableContent: (closeEditing): JSX.Element => <span onClick={(): void => {
      closeEditing();
    }}>
        {'Rediger data'}
      </span>
  },
  parameters: {
    imageSnapshot: {
      click: \`\${wrapper} button\`
    }
  }
} satisfies Story`,...(W=(x=c.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var A,H,k;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  name: 'With EditButtonPosition Right',
  args: {
    editButtonPosition: 'right',
    editableContent: (closeEditing): JSX.Element => <span onClick={(): void => {
      closeEditing();
    }}>
        {'Rediger data'}
      </span>
  },
  argTypes: {
    editButtonPosition: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      click: \`\${wrapper} button\`
    }
  }
} satisfies Story`,...(k=(H=b.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const z=["WithRef","WithAttributes","WithEditButtonRef","WithEditableContentRef","WithEditableContent","WithEditButtonPositionRight"];export{d as WithAttributes,b as WithEditButtonPositionRight,l as WithEditButtonRef,c as WithEditableContent,m as WithEditableContentRef,o as WithRef,z as __namedExportsOrder,q as default};
//# sourceMappingURL=TableEditableRow.test.stories-C8sgNxIW.js.map
