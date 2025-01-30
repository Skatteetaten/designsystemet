import{j as i}from"./jsx-runtime-CfatFE5O.js";import{w as p,e,f as I,a as H}from"./index-XVqkR3zt.js";import{d as l}from"./index--O6iZ70i.js";import{T as s}from"./index-CHrQ5N2W.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BWc9jU-Q.js";import"./index-U0B695k8.js";import"./index-Dxnk4fMh.js";const M={component:s.Row,title:"Tester/Table/Row",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},expandableContent:{table:{disable:!0}},expandButtonAriaDescribedby:{table:{disable:!0}},expandButtonPosition:{table:{disable:!0}},expandButtonTitle:{table:{disable:!0}},isExpandable:{table:{disable:!0}},isExpanded:{table:{disable:!0}},children:{table:{disable:!0}},onClose:{table:{disable:!0}},onExpand:{table:{disable:!0}}}},u=t=>i.jsx(s,{caption:"testtabell",children:i.jsx(s.Body,{children:i.jsxs(s.Row,{...t,children:[i.jsx(s.DataCell,{id:"Id123",as:"th",children:"Cake"}),i.jsx(s.DataCell,{children:"3,000"})]})})}),o={render:u,name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=p(t).getByRole("row");await e(a).toBeInTheDocument(),await e(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={render:u,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=p(t).getByRole("row");await e(a).toHaveClass("dummyClassname"),await e(a).toHaveAttribute("id","htmlId"),await e(a).toHaveAttribute("lang","nb"),await e(a).toHaveAttribute("data-testid","123ID")}},b={render:u,name:"With Expandable (TableRow B6)",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",onExpand:I()},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t,args:r})=>{const a=p(t),n=a.getByRole("button");await e(n).toHaveAttribute("aria-describedby","Id123"),await e(n).toHaveAccessibleName(l.t("ds_tables:tablerow.Expandable")),await e(n).toHaveAttribute("aria-expanded","false"),await H.click(n),await e(a.queryByText(l.t("ds_tables:table.ExpandAreaStart"))).not.toBeInTheDocument(),await e(r.onExpand).toHaveBeenCalled(),await e(n).toHaveAttribute("aria-expanded","true")}},c={render:u,name:"With Expandable Multiple Rows",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",expandButtonPosition:"right",onExpand:I(),expandableContent:i.jsxs(s.Row,{children:[i.jsx(s.DataCell,{children:"Muffin"}),i.jsx(s.DataCell,{children:"9000"}),i.jsx(s.DataCell,{})]})},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t,args:r})=>{const a=p(t),n=a.getByRole("button");await e(n).toHaveAttribute("aria-describedby","Id123"),await e(n).toHaveAccessibleName(l.t("ds_tables:tablerow.Expandable")),await e(n).toHaveAttribute("aria-expanded","false"),await H.click(n),await e(a.getByText(l.t("ds_tables:table.ExpandAreaStart"))).toBeInTheDocument(),await e(a.getByText(l.t("ds_tables:table.ExpandAreaEnd"))).toBeInTheDocument(),await e(r.onExpand).toHaveBeenCalled(),await e(n).toHaveAttribute("aria-expanded","true")}};var m,x,w;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,v,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    const row = canvas.getByRole('row');
    await expect(row).toHaveClass('dummyClassname');
    await expect(row).toHaveAttribute('id', 'htmlId');
    await expect(row).toHaveAttribute('lang', 'nb');
    await expect(row).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,E,h;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      disable: true
    },
    HTMLSnapshot: {
      disable: true
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
} satisfies Story`,...(h=(E=b.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var B,T,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      disable: true
    },
    HTMLSnapshot: {
      disable: true
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
} satisfies Story`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const N=["WithRef","WithAttributes","WithExpandable","WithExpandableExtraRows"];export{d as WithAttributes,b as WithExpandable,c as WithExpandableExtraRows,o as WithRef,N as __namedExportsOrder,M as default};
//# sourceMappingURL=TableRow.test.stories-HHM3Th6x.js.map
