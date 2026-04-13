import{j as e,d as i}from"./iframe-_BeEUj9n.js";import{T as t}from"./index-1LIl87kO.js";const{expect:a,fireEvent:b,fn:f,within:d}=__STORYBOOK_MODULE_TEST__,R={component:t.Row,title:"Tester/Table/Row",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},expandableContent:{table:{disable:!0}},expandButtonAriaDescribedby:{table:{disable:!0}},expandButtonPosition:{table:{disable:!0}},expandButtonTitle:{table:{disable:!0}},expandButtonProps:{table:{disable:!0}},showExpandButtonTitle:{table:{disable:!0}},isExpandable:{table:{disable:!0}},isExpanded:{table:{disable:!0}},children:{table:{disable:!0}},onClose:{table:{disable:!0}},onExpand:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=s=>e.jsx(t,{caption:"testtabell",children:e.jsx(t.Body,{children:e.jsxs(t.Row,{...s,children:[e.jsx(t.DataCell,{id:"Id123",as:"th",children:"Cake"}),e.jsx(t.DataCell,{children:"3,000"})]})})}),c={render:r,name:"With Ref (FA1)",args:{ref:s=>{s&&(s.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const l=d(s).getByRole("row");await a(l).toBeInTheDocument(),await a(l).toHaveAttribute("id","dummyIdForwardedFromRef")}},p={render:r,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:s})=>{const l=d(s).getByRole("row");await a(l).toHaveClass("dummyClassname"),await a(l).toHaveAttribute("id","htmlId"),await a(l).toHaveAttribute("lang","nb"),await a(l).toHaveAttribute("data-testid","123ID")}},x={render:r,name:"With Expandable (TableRow B6)",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",onExpand:f()},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s,args:o})=>{const l=d(s),n=l.getByRole("button");await a(n).toHaveAttribute("aria-describedby","Id123"),await a(n).toHaveAccessibleName(`${i.t("ds_tables:tablerow.Expandable")} ${i.t("ds_tables:tablerow.ExpandButtonScreenReaderText")}`),await a(n).toHaveAttribute("aria-expanded","false"),await b.click(n),await a(l.queryByText(i.t("ds_tables:table.ExpandAreaStart"))).not.toBeInTheDocument(),await a(o.onExpand).toHaveBeenCalled(),await a(n).toHaveAttribute("aria-expanded","true")}},u={render:r,name:"With Expandable Multiple Rows",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",expandButtonPosition:"right",onExpand:f(),expandableContent:e.jsxs(t.Row,{children:[e.jsx(t.DataCell,{children:"Muffin"}),e.jsx(t.DataCell,{children:"9000"}),e.jsx(t.DataCell,{})]})},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s,args:o})=>{const l=d(s),n=l.getByRole("button");await a(n).toHaveAttribute("aria-describedby","Id123"),await a(n).toHaveAccessibleName(i.t("ds_tables:tablerow.Expandable")),await a(n).toHaveAttribute("aria-expanded","false"),await b.click(n),await a(l.getByText(i.t("ds_tables:table.ExpandAreaStart"))).toBeInTheDocument(),await a(l.getByText(i.t("ds_tables:table.ExpandAreaEnd"))).toBeInTheDocument(),await a(o.onExpand).toHaveBeenCalled(),await a(n).toHaveAttribute("aria-expanded","true")}},m={render:r,name:"With Expandable Content",args:{isExpandable:!0,expandableContent:"Ekstra innhold"},argTypes:{isExpandable:{table:{disable:!1}},expandableContent:{table:{disable:!1}}},play:async({canvasElement:s})=>{const l=d(s).getByRole("button",{name:`${i.t("ds_tables:tablerow.Expandable")} ${i.t("ds_tables:tablerow.ExpandButtonScreenReaderText")}`});await b.click(l)}},E={render:r,name:"With ExpandButtonPosition Right",args:{isExpandable:!0,expandButtonPosition:"right",expandableContent:"Ekstra innhold"},argTypes:{isExpandable:{table:{disable:!1}},expandButtonPosition:{table:{disable:!1}},expandableContent:{table:{disable:!1}}},play:async({canvasElement:s})=>{const l=d(s).getByRole("button",{name:i.t("ds_tables:tablerow.Expandable")});await b.click(l)}},w={render:r,name:"With ExpandText on Left Side (TableRow A11.1, B6)",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonAriaDescribedby:"Id123",expandableContent:"Ekstra innhold",onExpand:f()},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s,args:o})=>{const n=d(s).getByRole("button",{name:`${i.t("ds_tables:tablerow.ExpandText")} ${i.t("ds_tables:tablerow.ExpandButtonScreenReaderText")}`});await a(n).toHaveAttribute("aria-describedby","Id123"),await a(n).toHaveAttribute("aria-expanded","false"),await b.click(n),await a(o.onExpand).toHaveBeenCalled(),await a(n).toHaveAttribute("aria-expanded","true")}},h={render:r,name:"With ExpandText on Right Side (TableRow A11.1, B6)",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonPosition:"right",expandButtonAriaDescribedby:"Id123",expandableContent:"Ekstra innhold",onExpand:f()},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s,args:o})=>{const n=d(s).getByRole("button",{name:i.t("ds_tables:tablerow.ExpandText")});await a(n).toHaveAttribute("aria-describedby","Id123"),await a(n).toHaveAttribute("aria-expanded","false"),await b.click(n),await a(o.onExpand).toHaveBeenCalled(),await a(n).toHaveAttribute("aria-expanded","true")}},B={render:r,name:"With ExpandButtonTitle",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonTitle:"Vis mer",expandableContent:"Ekstra innhold",expandButtonPosition:"right"},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}},expandButtonPosition:{table:{disable:!1}}}},T={render:()=>e.jsx(t,{caption:"testtabell",children:e.jsxs(t.Body,{children:[e.jsxs(t.Row,{expandButtonAriaDescribedby:"Id123",isExpandable:!0,children:[e.jsx(t.DataCell,{id:"Id123",as:"th",children:"Cake"}),e.jsx(t.DataCell,{children:"3,000"})]}),e.jsxs(t.Row,{expandButtonAriaDescribedby:"Id456",isExpandable:!0,children:[e.jsx(t.DataCell,{id:"Id456",as:"th",children:"Muffin"}),e.jsx(t.DataCell,{children:"4,000"})]})]})}),name:"With ScreenReaderText only on first left expandable row",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const o=d(s),[l,n]=o.getAllByRole("button");await a(l).toHaveAccessibleName(`${i.t("ds_tables:tablerow.Expandable")} ${i.t("ds_tables:tablerow.ExpandButtonScreenReaderText")}`),await a(n).toHaveAccessibleName(i.t("ds_tables:tablerow.Expandable"))}},y={render:()=>e.jsx(t,{caption:"testtabell",children:e.jsxs(t.Body,{children:[e.jsxs(t.Row,{expandButtonAriaDescribedby:"Id123",isExpandable:!0,children:[e.jsx(t.DataCell,{id:"Id123",as:"th",children:"Cake"}),e.jsx(t.DataCell,{children:"3,000"})]}),e.jsxs(t.Row,{expandButtonAriaDescribedby:"Id456",isExpandable:!0,children:[e.jsx(t.DataCell,{id:"Id456",as:"th",children:"Muffin"}),e.jsx(t.DataCell,{children:"4,000"})]}),e.jsxs(t.EditableRow,{editableContent:()=>e.jsx("span",{children:"Rediger data 1"}),children:[e.jsx(t.DataCell,{as:"th",children:"Cookie"}),e.jsx(t.DataCell,{children:"5,000"})]}),e.jsxs(t.EditableRow,{editableContent:()=>e.jsx("span",{children:"Rediger data 2"}),children:[e.jsx(t.DataCell,{as:"th",children:"Brownie"}),e.jsx(t.DataCell,{children:"6,000"})]})]})}),name:"With ScreenReaderText only on first row of each type",parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:s})=>{const o=d(s),[l,n,v,g]=o.getAllByRole("button");await a(l).toHaveAccessibleName(`${i.t("ds_tables:tablerow.Expandable")} ${i.t("ds_tables:tablerow.ExpandButtonScreenReaderText")}`),await a(n).toHaveAccessibleName(i.t("ds_tables:tablerow.Expandable")),await a(v).toHaveAccessibleName(`${i.t("ds_tables:tablerow.Editable")} ${i.t("ds_tables:tablerow.EditButtonScreenReaderText")}`),await a(g).toHaveAccessibleName(i.t("ds_tables:tablerow.Editable"))}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    const row = canvas.getByRole('row');
    await expect(row).toHaveClass('dummyClassname');
    await expect(row).toHaveAttribute('id', 'htmlId');
    await expect(row).toHaveAttribute('lang', 'nb');
    await expect(row).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Expandable (TableRow B6)',
  args: {
    isExpandable: true,
    expandButtonAriaDescribedby: 'Id123',
    onExpand: fn()
  },
  argTypes: {
    isExpandable: {
      table: {
        disable: false
      }
    },
    expandButtonAriaDescribedby: {
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
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(iconButton).toHaveAccessibleName(\`\${dsI18n.t('ds_tables:tablerow.Expandable')} \${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}\`);
    await expect(iconButton).toHaveAttribute('aria-expanded', 'false');
    /* Etter bytte fra @storybook/jest til @storybook/test må denne testen bruke
    fireevent i stedet for UserEvent. Med userEVent gir testen ustabilt resultat.
    I tillegg ser det ut som visningen i interactions fanen i storybook ikke samsvarer med resultatet til testen.
     */
    await fireEvent.click(iconButton);
    await expect(canvas.queryByText(dsI18n.t('ds_tables:table.ExpandAreaStart'))).not.toBeInTheDocument();
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(iconButton).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Expandable Multiple Rows',
  args: {
    isExpandable: true,
    expandButtonAriaDescribedby: 'Id123',
    expandButtonPosition: 'right',
    onExpand: fn(),
    expandableContent: <Table.Row>
        <Table.DataCell>{'Muffin'}</Table.DataCell>
        <Table.DataCell>{'9000'}</Table.DataCell>
        <Table.DataCell />
      </Table.Row>
  },
  argTypes: {
    isExpandable: {
      table: {
        disable: false
      }
    },
    expandButtonAriaDescribedby: {
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
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(iconButton).toHaveAccessibleName(dsI18n.t('ds_tables:tablerow.Expandable'));
    await expect(iconButton).toHaveAttribute('aria-expanded', 'false');
    /* Etter bytte fra @storybook/jest til @storybook/test må denne testen bruke
    fireevent i stedet for UserEvent. Med userEVent gir testen ustabilt resultat.
    I tillegg ser det ut som visningen i interactions fanen i storybook ikke samsvarer med resultatet til testen.
     */
    await fireEvent.click(iconButton);
    await expect(canvas.getByText(dsI18n.t('ds_tables:table.ExpandAreaStart'))).toBeInTheDocument();
    await expect(canvas.getByText(dsI18n.t('ds_tables:table.ExpandAreaEnd'))).toBeInTheDocument();
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(iconButton).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With Expandable Content',
  args: {
    isExpandable: true,
    expandableContent: 'Ekstra innhold'
  },
  argTypes: {
    isExpandable: {
      table: {
        disable: false
      }
    },
    expandableContent: {
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
      name: \`\${dsI18n.t('ds_tables:tablerow.Expandable')} \${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}\`
    });
    await fireEvent.click(inlineButton);
  }
} satisfies Story`,...m.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With ExpandButtonPosition Right',
  args: {
    isExpandable: true,
    expandButtonPosition: 'right',
    expandableContent: 'Ekstra innhold'
  },
  argTypes: {
    isExpandable: {
      table: {
        disable: false
      }
    },
    expandButtonPosition: {
      table: {
        disable: false
      }
    },
    expandableContent: {
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
      name: dsI18n.t('ds_tables:tablerow.Expandable')
    });
    await fireEvent.click(inlineButton);
  }
} satisfies Story`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With ExpandText on Left Side (TableRow A11.1, B6)',
  args: {
    isExpandable: true,
    showExpandButtonTitle: true,
    expandButtonAriaDescribedby: 'Id123',
    expandableContent: 'Ekstra innhold',
    onExpand: fn()
  },
  argTypes: {
    isExpandable: {
      table: {
        disable: false
      }
    },
    showExpandButtonTitle: {
      table: {
        disable: false
      }
    },
    expandButtonTitle: {
      table: {
        disable: false
      }
    },
    expandButtonAriaDescribedby: {
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
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button', {
      name: \`\${dsI18n.t('ds_tables:tablerow.ExpandText')} \${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}\`
    });
    await expect(inlineButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(inlineButton);
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With ExpandText on Right Side (TableRow A11.1, B6)',
  args: {
    isExpandable: true,
    showExpandButtonTitle: true,
    expandButtonPosition: 'right',
    expandButtonAriaDescribedby: 'Id123',
    expandableContent: 'Ekstra innhold',
    onExpand: fn()
  },
  argTypes: {
    isExpandable: {
      table: {
        disable: false
      }
    },
    showExpandButtonTitle: {
      table: {
        disable: false
      }
    },
    expandButtonTitle: {
      table: {
        disable: false
      }
    },
    expandButtonAriaDescribedby: {
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
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_tables:tablerow.ExpandText')
    });
    await expect(inlineButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(inlineButton);
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: Template,
  name: 'With ExpandButtonTitle',
  args: {
    isExpandable: true,
    showExpandButtonTitle: true,
    expandButtonTitle: 'Vis mer',
    expandableContent: 'Ekstra innhold',
    expandButtonPosition: 'right'
  },
  argTypes: {
    isExpandable: {
      table: {
        disable: false
      }
    },
    showExpandButtonTitle: {
      table: {
        disable: false
      }
    },
    expandButtonTitle: {
      table: {
        disable: false
      }
    },
    expandButtonPosition: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (): JSX.Element => <Table caption={'testtabell'}>
      <Table.Body>
        <Table.Row expandButtonAriaDescribedby={'Id123'} isExpandable>
          <Table.DataCell id={'Id123'} as={'th'}>
            {'Cake'}
          </Table.DataCell>
          <Table.DataCell>{'3,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row expandButtonAriaDescribedby={'Id456'} isExpandable>
          <Table.DataCell id={'Id456'} as={'th'}>
            {'Muffin'}
          </Table.DataCell>
          <Table.DataCell>{'4,000'}</Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>,
  name: 'With ScreenReaderText only on first left expandable row',
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
    await expect(firstButton).toHaveAccessibleName(\`\${dsI18n.t('ds_tables:tablerow.Expandable')} \${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}\`);
    await expect(secondButton).toHaveAccessibleName(dsI18n.t('ds_tables:tablerow.Expandable'));
  }
} satisfies Story`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (): JSX.Element => <Table caption={'testtabell'}>
      <Table.Body>
        <Table.Row expandButtonAriaDescribedby={'Id123'} isExpandable>
          <Table.DataCell id={'Id123'} as={'th'}>
            {'Cake'}
          </Table.DataCell>
          <Table.DataCell>{'3,000'}</Table.DataCell>
        </Table.Row>
        <Table.Row expandButtonAriaDescribedby={'Id456'} isExpandable>
          <Table.DataCell id={'Id456'} as={'th'}>
            {'Muffin'}
          </Table.DataCell>
          <Table.DataCell>{'4,000'}</Table.DataCell>
        </Table.Row>
        <Table.EditableRow editableContent={(): JSX.Element => <span>{'Rediger data 1'}</span>}>
          <Table.DataCell as={'th'}>{'Cookie'}</Table.DataCell>
          <Table.DataCell>{'5,000'}</Table.DataCell>
        </Table.EditableRow>
        <Table.EditableRow editableContent={(): JSX.Element => <span>{'Rediger data 2'}</span>}>
          <Table.DataCell as={'th'}>{'Brownie'}</Table.DataCell>
          <Table.DataCell>{'6,000'}</Table.DataCell>
        </Table.EditableRow>
      </Table.Body>
    </Table>,
  name: 'With ScreenReaderText only on first row of each type',
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const [firstExpandButton, secondExpandButton, firstEditButton, secondEditButton] = canvas.getAllByRole('button');
    await expect(firstExpandButton).toHaveAccessibleName(\`\${dsI18n.t('ds_tables:tablerow.Expandable')} \${dsI18n.t('ds_tables:tablerow.ExpandButtonScreenReaderText')}\`);
    await expect(secondExpandButton).toHaveAccessibleName(dsI18n.t('ds_tables:tablerow.Expandable'));
    await expect(firstEditButton).toHaveAccessibleName(\`\${dsI18n.t('ds_tables:tablerow.Editable')} \${dsI18n.t('ds_tables:tablerow.EditButtonScreenReaderText')}\`);
    await expect(secondEditButton).toHaveAccessibleName(dsI18n.t('ds_tables:tablerow.Editable'));
  }
} satisfies Story`,...y.parameters?.docs?.source}}};const A=["WithRef","WithAttributes","WithExpandable","WithExpandableExtraRows","WithExpandableContent","WithExpandButtonPositionRight","WithExpandTextLeft","WithExpandTextRight","WithExpandButtonTitle","WithScreenReaderTextOnlyOnFirstLeftExpandableRow","WithScreenReaderTextOnlyOnFirstRowOfEachType"],D=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:p,WithExpandButtonPositionRight:E,WithExpandButtonTitle:B,WithExpandTextLeft:w,WithExpandTextRight:h,WithExpandable:x,WithExpandableContent:m,WithExpandableExtraRows:u,WithRef:c,WithScreenReaderTextOnlyOnFirstLeftExpandableRow:T,WithScreenReaderTextOnlyOnFirstRowOfEachType:y,__namedExportsOrder:A,default:R},Symbol.toStringTag,{value:"Module"}));export{D as T};
//# sourceMappingURL=TableRow.test.stories-DZWf9Raw.js.map
