import{j as l,d as o}from"./iframe-VHQh6taY.js";import{T as i}from"./index-tZ1LD8cb.js";const{expect:e,fireEvent:b,fn:y,within:d}=__STORYBOOK_MODULE_TEST__,f={component:i.Row,title:"Tester/Table/Row",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},expandableContent:{table:{disable:!0}},expandButtonAriaDescribedby:{table:{disable:!0}},expandButtonPosition:{table:{disable:!0}},expandButtonTitle:{table:{disable:!0}},expandButtonProps:{table:{disable:!0}},showExpandButtonTitle:{table:{disable:!0}},isExpandable:{table:{disable:!0}},isExpanded:{table:{disable:!0}},children:{table:{disable:!0}},onClose:{table:{disable:!0}},onExpand:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r=t=>l.jsx(i,{caption:"testtabell",children:l.jsx(i.Body,{children:l.jsxs(i.Row,{...t,children:[l.jsx(i.DataCell,{id:"Id123",as:"th",children:"Cake"}),l.jsx(i.DataCell,{children:"3,000"})]})})}),p={render:r,name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t})=>{const n=d(t).getByRole("row");await e(n).toBeInTheDocument(),await e(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={render:r,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:t})=>{const n=d(t).getByRole("row");await e(n).toHaveClass("dummyClassname"),await e(n).toHaveAttribute("id","htmlId"),await e(n).toHaveAttribute("lang","nb"),await e(n).toHaveAttribute("data-testid","123ID")}},u={render:r,name:"With Expandable (TableRow B6)",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",onExpand:y()},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t,args:s})=>{const n=d(t),a=n.getByRole("button");await e(a).toHaveAttribute("aria-describedby","Id123"),await e(a).toHaveAccessibleName(o.t("ds_tables:tablerow.Expandable")),await e(a).toHaveAttribute("aria-expanded","false"),await b.click(a),await e(n.queryByText(o.t("ds_tables:table.ExpandAreaStart"))).not.toBeInTheDocument(),await e(s.onExpand).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-expanded","true")}},x={render:r,name:"With Expandable Multiple Rows",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",expandButtonPosition:"right",onExpand:y(),expandableContent:l.jsxs(i.Row,{children:[l.jsx(i.DataCell,{children:"Muffin"}),l.jsx(i.DataCell,{children:"9000"}),l.jsx(i.DataCell,{})]})},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t,args:s})=>{const n=d(t),a=n.getByRole("button");await e(a).toHaveAttribute("aria-describedby","Id123"),await e(a).toHaveAccessibleName(o.t("ds_tables:tablerow.Expandable")),await e(a).toHaveAttribute("aria-expanded","false"),await b.click(a),await e(n.getByText(o.t("ds_tables:table.ExpandAreaStart"))).toBeInTheDocument(),await e(n.getByText(o.t("ds_tables:table.ExpandAreaEnd"))).toBeInTheDocument(),await e(s.onExpand).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-expanded","true")}},m={render:r,name:"With Expandable Content",args:{isExpandable:!0,expandableContent:"Ekstra innhold"},argTypes:{isExpandable:{table:{disable:!1}},expandableContent:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=d(t).getByRole("button",{name:o.t("ds_tables:tablerow.Expandable")});await b.click(n)}},E={render:r,name:"With ExpandButtonPosition Right",args:{isExpandable:!0,expandButtonPosition:"right",expandableContent:"Ekstra innhold"},argTypes:{isExpandable:{table:{disable:!1}},expandButtonPosition:{table:{disable:!1}},expandableContent:{table:{disable:!1}}},play:async({canvasElement:t})=>{const n=d(t).getByRole("button",{name:o.t("ds_tables:tablerow.Expandable")});await b.click(n)}},B={render:r,name:"With ExpandText on Left Side (TableRow A11.1, B6)",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonAriaDescribedby:"Id123",expandableContent:"Ekstra innhold",onExpand:y()},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t,args:s})=>{const a=d(t).getByRole("button",{name:o.t("ds_tables:tablerow.ExpandText")});await e(a).toHaveAttribute("aria-describedby","Id123"),await e(a).toHaveAttribute("aria-expanded","false"),await b.click(a),await e(s.onExpand).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-expanded","true")}},h={render:r,name:"With ExpandText on Right Side (TableRow A11.1, B6)",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonPosition:"right",expandButtonAriaDescribedby:"Id123",expandableContent:"Ekstra innhold",onExpand:y()},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:t,args:s})=>{const a=d(t).getByRole("button",{name:o.t("ds_tables:tablerow.ExpandText")});await e(a).toHaveAttribute("aria-describedby","Id123"),await e(a).toHaveAttribute("aria-expanded","false"),await b.click(a),await e(s.onExpand).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-expanded","true")}},w={render:r,name:"With ExpandButtonTitle",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonTitle:"Vis mer",expandableContent:"Ekstra innhold",expandButtonPosition:"right"},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}},expandButtonPosition:{table:{disable:!1}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    await expect(iconButton).toHaveAccessibleName(dsI18n.t('ds_tables:tablerow.Expandable'));
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
} satisfies Story`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      name: dsI18n.t('ds_tables:tablerow.Expandable')
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
} satisfies Story`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      name: dsI18n.t('ds_tables:tablerow.ExpandText')
    });
    await expect(inlineButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(inlineButton);
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...B.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...w.parameters?.docs?.source}}};const g=["WithRef","WithAttributes","WithExpandable","WithExpandableExtraRows","WithExpandableContent","WithExpandButtonPositionRight","WithExpandTextLeft","WithExpandTextRight","WithExpandButtonTitle"],A=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:c,WithExpandButtonPositionRight:E,WithExpandButtonTitle:w,WithExpandTextLeft:B,WithExpandTextRight:h,WithExpandable:u,WithExpandableContent:m,WithExpandableExtraRows:x,WithRef:p,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{A as T};
//# sourceMappingURL=TableRow.test.stories-ms_bPz72.js.map
