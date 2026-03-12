import{j as c}from"./iframe-BHAek7Q1.js";import{I as b,s as p}from"./index-k4H7HdQu.js";import{T as h}from"./index-4siuvGdV.js";const{expect:t,within:d}=__STORYBOOK_MODULE_TEST__,u={component:h.DataCell,title:"Tester/Table/DataCell",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},alignment:{table:{disable:!0}},as:{table:{disable:!0}},colSpan:{table:{disable:!0}},rowSpan:{table:{disable:!0}},scope:{table:{disable:!0}},children:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},m={children:"cake"},n={name:"With Ref (FA1)",args:{...m,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=d(e).getByRole("cell");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={name:"With Attributes (FA2-5)",args:{...m,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=d(e).getByRole("cell");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},l={name:"With Scope And As th (TableRow B2, TableHeader B1)",args:{...m,as:"th",scope:"row"},argTypes:{as:{table:{disable:!1}},scope:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=d(e).getByRole("rowheader");await t(a).toHaveAttribute("scope","row")}},r={name:"With children (TableRow A1)",args:{children:"cellChildren"},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const o=d(e);await t(o.getByText("cellChildren")).toBeInTheDocument()}},i={name:"With Icon",args:{children:c.jsxs(c.Fragment,{children:[c.jsx(b,{svgPath:p})," ","Innhold med ikon"]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLTableCellElement | null): void => {
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
    const table = canvas.getByRole('cell');
    await expect(table).toBeInTheDocument();
    await expect(table).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
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
    const dataCell = canvas.getByRole('cell');
    await expect(dataCell).toHaveClass('dummyClassname');
    await expect(dataCell).toHaveAttribute('id', 'htmlId');
    await expect(dataCell).toHaveAttribute('lang', 'nb');
    await expect(dataCell).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Scope And As th (TableRow B2, TableHeader B1)',
  args: {
    ...defaultArgs,
    as: 'th',
    scope: 'row'
  },
  argTypes: {
    as: {
      table: {
        disable: false
      }
    },
    scope: {
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
    const dataCell = canvas.getByRole('rowheader');
    await expect(dataCell).toHaveAttribute('scope', 'row');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With children (TableRow A1)',
  args: {
    children: 'cellChildren'
  },
  argTypes: {
    children: {
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
    await expect(canvas.getByText('cellChildren')).toBeInTheDocument();
  }
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    children: <>
        <Icon svgPath={AddOutlineSVGpath} /> {'Innhold med ikon'}
      </>
  }
} satisfies Story`,...i.parameters?.docs?.source}}};const g=["WithRef","WithAttributes","WithThAndScope","WithChildren","WithIcon"],S=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:s,WithChildren:r,WithIcon:i,WithRef:n,WithThAndScope:l,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{S as T};
//# sourceMappingURL=TableDataCell.test.stories-C_uSXKtR.js.map
