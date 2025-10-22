import{j as s,d as _}from"./iframe-BoxHncFg.js";import{T as i}from"./index-ClyrOAuv.js";const{expect:a,fireEvent:p,within:o}=__STORYBOOK_MODULE_TEST__,D={component:i.EditableRow,title:"Tester/Table/EditableRow",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},editableContent:{table:{disable:!0}},editButtonAriaDescribedby:{table:{disable:!0}},editButtonPosition:{table:{disable:!0}},editButtonRef:{table:{disable:!0}},editableContentRef:{table:{disable:!0}},onEdit:{table:{disable:!0}},children:{table:{disable:!0}},isNew:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=e=>s.jsx(i,{caption:"testtabell",children:s.jsx(i.Body,{children:s.jsxs(i.EditableRow,{...e,children:[s.jsx(i.DataCell,{as:"th",children:"Cake"}),s.jsx(i.DataCell,{children:"3,000"})]})})}),d={render:r,name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=o(e).getByRole("row");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={render:r,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=o(e).getByRole("row");await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}},c={render:r,name:"With EditButtonRef",args:{editButtonRef:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=o(e).getByRole("button");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={render:r,name:"With EditableContentRef",args:{editableContentRef:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=o(e),t=n.getByRole("button");await p.click(t);const f=n.getByText("Rediger data");await a(f).toBeInTheDocument(),await a(f).toHaveAttribute("id","dummyIdForwardedFromRef")}},b={render:r,name:"With EditableContent",args:{editableContent:e=>s.jsx("span",{onClick:()=>{e()},children:"Rediger data"})},play:async({canvasElement:e})=>{const t=o(e).getByRole("button",{name:_.t("ds_tables:tablerow.Editable")});await p.click(t)}},u={render:r,name:"With EditButtonPosition Right",args:{editButtonPosition:"right",editableContent:e=>s.jsx("span",{onClick:()=>{e()},children:"Rediger data"})},argTypes:{editButtonPosition:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=o(e).getByRole("button",{name:_.t("ds_tables:tablerow.Editable")});await p.click(t)}};var y,g,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,w,R;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(w=l.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var E,B,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var S,C,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      disableSnapshot: true
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
} satisfies Story`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var F,x,W;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  name: 'With EditableContent',
  args: {
    editableContent: (closeEditing): JSX.Element => <span onClick={(): void => {
      closeEditing();
    }}>
        {'Rediger data'}
      </span>
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_tables:tablerow.Editable')
    });
    await fireEvent.click(inlineButton);
  }
} satisfies Story`,...(W=(x=b.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var A,H,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_tables:tablerow.Editable')
    });
    await fireEvent.click(inlineButton);
  }
} satisfies Story`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const j=["WithRef","WithAttributes","WithEditButtonRef","WithEditableContentRef","WithEditableContent","WithEditButtonPositionRight"],N=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:l,WithEditButtonPositionRight:u,WithEditButtonRef:c,WithEditableContent:b,WithEditableContentRef:m,WithRef:d,__namedExportsOrder:j,default:D},Symbol.toStringTag,{value:"Module"}));export{N as T};
//# sourceMappingURL=TableEditableRow.test.stories-Bkivda3i.js.map
