import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{d as h}from"./index-e2J6NVvS.js";import{T as n}from"./index-ux_AYBE_.js";import{w as b,e,f as E,b as A}from"./index-hUG6DWTw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-nyVGXzax.js";import"./index-C4S6bjjo.js";import"./index-DnZXMkM7.js";const W={component:n.Row,title:"Tester/Table/Row",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},expandableContent:{table:{disable:!0}},expandButtonAriaDescribedby:{table:{disable:!0}},expandButtonPosition:{table:{disable:!0}},expandButtonTitle:{table:{disable:!0}},isExpandable:{table:{disable:!0}},isExpanded:{table:{disable:!0}},children:{table:{disable:!0}},onClose:{table:{disable:!0}},onExpand:{table:{disable:!0}}}},c=a=>i.jsx(n,{caption:"testtabell",children:i.jsx(n.Body,{children:i.jsxs(n.Row,{...a,children:[i.jsx(n.DataCell,{id:"Id123",as:"th",children:"Cake"}),i.jsx(n.DataCell,{children:"3,000"})]})})}),r={render:c,name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const t=b(a).getByRole("row");await e(t).toBeInTheDocument(),await e(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={render:c,name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const t=b(a).getByRole("row");await e(t).toHaveClass("dummyClassname"),await e(t).toHaveAttribute("id","htmlId"),await e(t).toHaveAttribute("lang","nb"),await e(t).toHaveAttribute("data-testid","123ID")}},o={render:c,name:"With Expandable (TableRow B6)",args:{isExpandable:!0,expandButtonAriaDescribedby:"Id123",onExpand:E()},argTypes:{isExpandable:{table:{disable:!1}},expandButtonAriaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement:a,args:d})=>{const s=b(a).getByRole("button");await e(s).toHaveAttribute("aria-describedby","Id123"),await e(s).toHaveAccessibleName(h.t("ds_tables:tablerow.Expandable")),await e(s).toHaveAttribute("aria-expanded","false"),await A.click(s),await e(d.onExpand).toHaveBeenCalled(),await e(s).toHaveAttribute("aria-expanded","true")}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var w,x,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,v,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    /*TODO etter bytte fra @storybook/jest til @storybook/test må denne testen bruke
    fireevent i stedet for UserEvent. Med userEVent gir testen ustabilt resultat.
    I tillegg ser det ut som visningen i interactions fanen i storybook ikke samsvarer med resultatet til testen.
     */
    await fireEvent.click(iconButton);
    await expect(args.onExpand).toHaveBeenCalled();
    await expect(iconButton).toHaveAttribute('aria-expanded', 'true');
  }
} satisfies Story`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const k=["WithRef","WithAttributes","WithExpandable"];export{l as WithAttributes,o as WithExpandable,r as WithRef,k as __namedExportsOrder,W as default};
//# sourceMappingURL=TableRow.test.stories-DwUE-E6F.js.map
