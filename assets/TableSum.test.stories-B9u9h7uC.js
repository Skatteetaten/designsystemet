import{T as o}from"./index-ZHg7ycEM.js";const{expect:a,within:i}=__STORYBOOK_MODULE_TEST__,m={component:o.Sum,title:"Tester/Table/Sum",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},colSpan:{table:{disable:!0}},hasTopSeparator:{table:{disable:!0}},labelAlignment:{table:{disable:!0}},sumText:{table:{disable:!0}},valueAlignment:{table:{disable:!0}}},args:{children:"9 000 kr"},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=i(e).getByRole("row");await a(t).toBeInTheDocument(),await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=i(e).getByTestId("123ID");await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveAttribute("lang","nb")}},l={name:"With Multiple Sums",args:{children:["400 kr","899 kr","399 kr"]},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=i(e);await a(n.getByText("400 kr")).toBeInTheDocument(),await a(n.getByText("899 kr")).toBeInTheDocument(),await a(n.getByText("399 kr")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    const sum = canvas.getByTestId('123ID');
    await expect(sum).toHaveClass('dummyClassname');
    await expect(sum).toHaveAttribute('id', 'htmlId');
    await expect(sum).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Multiple Sums',
  args: {
    children: ['400 kr', '899 kr', '399 kr']
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
    await expect(canvas.getByText('400 kr')).toBeInTheDocument();
    await expect(canvas.getByText('899 kr')).toBeInTheDocument();
    await expect(canvas.getByText('399 kr')).toBeInTheDocument();
  }
} satisfies Story`,...l.parameters?.docs?.source}}};const d=["WithRef","WithAttributes","WithMultipleSums"],b=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:r,WithMultipleSums:l,WithRef:s,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{b as T};
//# sourceMappingURL=TableSum.test.stories-B9u9h7uC.js.map
