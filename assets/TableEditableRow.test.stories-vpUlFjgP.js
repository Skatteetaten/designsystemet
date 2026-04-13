import{j as a,d as o}from"./iframe-_BeEUj9n.js";import{T as n}from"./index-1LIl87kO.js";const{expect:s,fireEvent:y,within:l}=__STORYBOOK_MODULE_TEST__,w={component:n.EditableRow,title:"Tester/Table/EditableRow",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},editableContent:{table:{disable:!0}},editButtonAriaDescribedby:{table:{disable:!0}},editButtonPosition:{table:{disable:!0}},editButtonRef:{table:{disable:!0}},editableContentRef:{table:{disable:!0}},onEdit:{table:{disable:!0}},children:{table:{disable:!0}},isNew:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=e=>a.jsx(n,{caption:"testtabell",children:a.jsx(n.Body,{children:a.jsxs(n.EditableRow,{...e,children:[a.jsx(n.DataCell,{as:"th",children:"Cake"}),a.jsx(n.DataCell,{children:"3,000"})]})})}),d={render:r,name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=l(e).getByRole("row");await s(t).toBeInTheDocument(),await s(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={render:r,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=l(e).getByRole("row");await s(t).toHaveClass("dummyClassname"),await s(t).toHaveAttribute("id","htmlId"),await s(t).toHaveAttribute("lang","nb"),await s(t).toHaveAttribute("data-testid","123ID")}},b={render:r,name:"With EditButtonRef",args:{editButtonRef:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=l(e).getByRole("button");await s(t).toBeInTheDocument(),await s(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},m={render:r,name:"With EditableContentRef",args:{editableContentRef:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const i=l(e),t=i.getByRole("button");await y.click(t);const h=i.getByText("Rediger data");await s(h).toBeInTheDocument(),await s(h).toHaveAttribute("id","dummyIdForwardedFromRef")}},u={render:r,name:"With EditableContent",args:{editableContent:e=>a.jsx("span",{onClick:()=>{e()},children:"Rediger data"})},play:async({canvasElement:e})=>{const t=await l(e).findByRole("button",{name:`${o.t("ds_tables:tablerow.Editable")} ${o.t("ds_tables:tablerow.EditButtonScreenReaderText")}`});await y.click(t)}},p={render:r,name:"With EditButtonPosition Right",args:{editButtonPosition:"right",editableContent:e=>a.jsx("span",{onClick:()=>{e()},children:"Rediger data"})},argTypes:{editButtonPosition:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=l(e).getByRole("button",{name:o.t("ds_tables:tablerow.Editable")});await y.click(t)}},f={render:()=>a.jsx(n,{caption:"testtabell",children:a.jsxs(n.Body,{children:[a.jsxs(n.EditableRow,{editableContent:()=>a.jsx("span",{children:"Rediger data 1"}),children:[a.jsx(n.DataCell,{as:"th",children:"Cake"}),a.jsx(n.DataCell,{children:"3,000"})]}),a.jsxs(n.EditableRow,{editableContent:()=>a.jsx("span",{children:"Rediger data 2"}),children:[a.jsx(n.DataCell,{as:"th",children:"Muffin"}),a.jsx(n.DataCell,{children:"4,000"})]})]})}),name:"With ScreenReaderText only on first left editable row",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const i=l(e),[t,h]=i.getAllByRole("button");await s(t).toHaveAccessibleName(`${o.t("ds_tables:tablerow.Editable")} ${o.t("ds_tables:tablerow.EditButtonScreenReaderText")}`),await s(h).toHaveAccessibleName(o.t("ds_tables:tablerow.Editable"))}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    const inlineButton = await canvas.findByRole('button', {
      name: \`\${dsI18n.t('ds_tables:tablerow.Editable')} \${dsI18n.t('ds_tables:tablerow.EditButtonScreenReaderText')}\`
    });
    await fireEvent.click(inlineButton);
  }
} satisfies Story`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (): JSX.Element => <Table caption={'testtabell'}>
      <Table.Body>
        <Table.EditableRow editableContent={(): JSX.Element => <span>{'Rediger data 1'}</span>}>
          <Table.DataCell as={'th'}>{'Cake'}</Table.DataCell>
          <Table.DataCell>{'3,000'}</Table.DataCell>
        </Table.EditableRow>
        <Table.EditableRow editableContent={(): JSX.Element => <span>{'Rediger data 2'}</span>}>
          <Table.DataCell as={'th'}>{'Muffin'}</Table.DataCell>
          <Table.DataCell>{'4,000'}</Table.DataCell>
        </Table.EditableRow>
      </Table.Body>
    </Table>,
  name: 'With ScreenReaderText only on first left editable row',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const [firstButton, secondButton] = canvas.getAllByRole('button');
    await expect(firstButton).toHaveAccessibleName(\`\${dsI18n.t('ds_tables:tablerow.Editable')} \${dsI18n.t('ds_tables:tablerow.EditButtonScreenReaderText')}\`);
    await expect(secondButton).toHaveAccessibleName(dsI18n.t('ds_tables:tablerow.Editable'));
  }
} satisfies Story`,...f.parameters?.docs?.source}}};const g=["WithRef","WithAttributes","WithEditButtonRef","WithEditableContentRef","WithEditableContent","WithEditButtonPositionRight","WithScreenReaderTextOnlyOnFirstLeftEditableRow"],E=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:c,WithEditButtonPositionRight:p,WithEditButtonRef:b,WithEditableContent:u,WithEditableContentRef:m,WithRef:d,WithScreenReaderTextOnlyOnFirstLeftEditableRow:f,__namedExportsOrder:g,default:w},Symbol.toStringTag,{value:"Module"}));export{E as T};
//# sourceMappingURL=TableEditableRow.test.stories-vpUlFjgP.js.map
