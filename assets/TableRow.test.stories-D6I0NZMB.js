import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{f as h,w as o,e,a as f}from"./index-DIxTUSTt.js";import{d}from"./index-CwaotbcG.js";import{T as s}from"./index-CPraUE2S.js";import{w as J}from"./storybook.testing.utils-CMs160i9.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BQO_0U1F.js";import"./index-Dvbywa6-.js";import"./index-BQtvKDNR.js";const ie={component:s.Row,title:"Tester/Table/Row",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},expandableContent:{table:{disable:!0}},expandButtonAriaDescribedby:{table:{disable:!0}},expandButtonPosition:{table:{disable:!0}},expandButtonTitle:{table:{disable:!0}},showExpandButtonTitle:{table:{disable:!0}},isExpandable:{table:{disable:!0}},isExpanded:{table:{disable:!0}},children:{table:{disable:!0}},onClose:{table:{disable:!0}},onExpand:{table:{disable:!0}}}},l=t=>r.jsx(s,{caption:"testtabell",children:r.jsx(s.Body,{children:r.jsxs(s.Row,{...t,children:[r.jsx(s.DataCell,{id:"Id123",as:"th",children:"Cake"}),r.jsx(s.DataCell,{children:"3,000"})]})})}),b={render:l,name:"With Ref (FA1)",args:{ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=o(t).getByRole("row");await e(n).toBeInTheDocument(),await e(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},p={render:l,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const n=o(t).getByRole("row");await e(n).toHaveClass("dummyClassname"),await e(n).toHaveAttribute("id","htmlId"),await e(n).toHaveAttribute("lang","nb"),await e(n).toHaveAttribute("data-testid","123ID")}},c={render:l,name:"With Expandable (TableRow B6)",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",onExpand:h()},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t,args:i})=>{const n=o(t),a=n.getByRole("button");await e(a).toHaveAttribute("aria-describedby","Id123"),await e(a).toHaveAccessibleName(d.t("ds_tables:tablerow.Expandable")),await e(a).toHaveAttribute("aria-expanded","false"),await f.click(a),await e(n.queryByText(d.t("ds_tables:table.ExpandAreaStart"))).not.toBeInTheDocument(),await e(i.onExpand).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-expanded","true")}},u={render:l,name:"With Expandable Multiple Rows",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",expandButtonPosition:"right",onExpand:h(),expandableContent:r.jsxs(s.Row,{children:[r.jsx(s.DataCell,{children:"Muffin"}),r.jsx(s.DataCell,{children:"9000"}),r.jsx(s.DataCell,{})]})},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:t,args:i})=>{const n=o(t),a=n.getByRole("button");await e(a).toHaveAttribute("aria-describedby","Id123"),await e(a).toHaveAccessibleName(d.t("ds_tables:tablerow.Expandable")),await e(a).toHaveAttribute("aria-expanded","false"),await f.click(a),await e(n.getByText(d.t("ds_tables:table.ExpandAreaStart"))).toBeInTheDocument(),await e(n.getByText(d.t("ds_tables:table.ExpandAreaEnd"))).toBeInTheDocument(),await e(i.onExpand).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-expanded","true")}},x={render:l,name:"With Expandable Content",args:{isExpandable:!0,expandableContent:"Ekstra innhold"},argTypes:{isExpandable:{table:{disable:!1}},expandableContent:{table:{disable:!1}}},parameters:{imageSnapshot:{click:`${J} button`}}},m={render:l,name:"With ExpandButtonPosition Right",args:{isExpandable:!0,expandButtonPosition:"right",expandableContent:"Ekstra innhold"},argTypes:{isExpandable:{table:{disable:!1}},expandButtonPosition:{table:{disable:!1}},expandableContent:{table:{disable:!1}}},parameters:{imageSnapshot:{click:`${J} button`}}},E={render:l,name:"With ExpandText on Left Side (TableRow A11.1, B6)",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonAriaDescribedby:"Id123",expandableContent:"Ekstra innhold",onExpand:h()},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},play:async({canvasElement:t,args:i})=>{const a=o(t).getByRole("button");await e(a).toHaveAttribute("aria-describedby","Id123"),await e(a).toHaveAttribute("aria-expanded","false"),await f.click(a),await e(i.onExpand).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-expanded","true")}},B={render:l,name:"With ExpandText on Right Side (TableRow A11.1, B6)",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonPosition:"right",expandButtonAriaDescribedby:"Id123",expandableContent:"Ekstra innhold",onExpand:h()},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},play:async({canvasElement:t,args:i})=>{const a=o(t).getByRole("button");await e(a).toHaveAttribute("aria-describedby","Id123"),await e(a).toHaveAttribute("aria-expanded","false"),await f.click(a),await e(i.onExpand).toHaveBeenCalled(),await e(a).toHaveAttribute("aria-expanded","true")}},w={render:l,name:"With ExpandButtonTitle",args:{isExpandable:!0,showExpandButtonTitle:!0,expandButtonTitle:"Vis mer",expandableContent:"Ekstra innhold"},argTypes:{isExpandable:{table:{disable:!1}},showExpandButtonTitle:{table:{disable:!1}},expandButtonTitle:{table:{disable:!1}}}};var y,g,v;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(g=b.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var T,A,H;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var C,R,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var S,D,W;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var k,P,j;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      click: \`\${wrapper} button\`
    }
  }
} satisfies Story`,...(j=(P=x.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var F,_,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  parameters: {
    imageSnapshot: {
      click: \`\${wrapper} button\`
    }
  }
} satisfies Story`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var L,N,V;E.parameters={...E.parameters,docs:{...(L=E.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(inlineButton);
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...(V=(N=E.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var $,q,U;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement,
    args
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const inlineButton = canvas.getByRole('button');
    await expect(inlineButton).toHaveAttribute('aria-describedby', 'Id123');
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(inlineButton);
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(inlineButton).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...(U=(q=B.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var O,z,G;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  name: 'With ExpandButtonTitle',
  args: {
    isExpandable: true,
    showExpandButtonTitle: true,
    expandButtonTitle: 'Vis mer',
    expandableContent: 'Ekstra innhold'
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
    }
  }
} satisfies Story`,...(G=(z=w.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const re=["WithRef","WithAttributes","WithExpandable","WithExpandableExtraRows","WithExpandableContent","WithExpandButtonPositionRight","WithExpandTextLeft","WithExpandTextRight","WithExpandButtonTitle"];export{p as WithAttributes,m as WithExpandButtonPositionRight,w as WithExpandButtonTitle,E as WithExpandTextLeft,B as WithExpandTextRight,c as WithExpandable,x as WithExpandableContent,u as WithExpandableExtraRows,b as WithRef,re as __namedExportsOrder,ie as default};
//# sourceMappingURL=TableRow.test.stories-D6I0NZMB.js.map
