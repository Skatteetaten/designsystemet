import{j as a}from"./iframe-VHQh6taY.js";import{C as d}from"./index-CEjXTNb1.js";import{I as b}from"./index-Di_7ammq.js";import{T as g}from"./index-BJkQPiPu.js";import{L as l}from"./index-Don9wpRQ.js";const{expect:n,within:o}=__STORYBOOK_MODULE_TEST__,p={component:d.Header,title:"Tester/Card/Header",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},rightContent:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},f="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",m={children:f},s={name:"With Ref (FA1)",args:{...m,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=o(e).getAllByRole("generic")[1];await n(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...m,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=o(e).getAllByRole("generic")[1];await n(t).toHaveAttribute("id","htmlId"),await n(t).toHaveClass("dummyClassname"),await n(t).toHaveAttribute("lang","en"),await n(t).toHaveAttribute("data-testid","123ID")}},i={name:"With Children RightContent (A4)",render:e=>a.jsx(d,{children:a.jsx(d.Header,{...e})}),args:{children:a.jsxs(l,{children:[a.jsx(l.Element,{children:"første element"}),a.jsx(l.Element,{children:"andre element"})]}),rightContent:a.jsx(g,{svgPath:b,children:"Endret av deg"})},argTypes:{children:{table:{disable:!1}},rightContent:{table:{disable:!1}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
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
    const cardNote = canvas.getAllByRole('generic')[1];
    await expect(cardNote).toHaveAttribute('id', 'htmlId');
    await expect(cardNote).toHaveClass('dummyClassname');
    await expect(cardNote).toHaveAttribute('lang', 'en');
    await expect(cardNote).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Children RightContent (A4)',
  render: args => <Card>
      <Card.Header {...args} />
    </Card>,
  args: {
    children: <List>
        <List.Element>{'første element'}</List.Element>
        <List.Element>{'andre element'}</List.Element>
      </List>,
    rightContent: <Tag svgPath={InfoOutlineSVGpath}>{'Endret av deg'}</Tag>
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    rightContent: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...i.parameters?.docs?.source}}};const h=["WithRef","WithAttributes","WithChildrenRigthContent"],x=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:r,WithChildrenRigthContent:i,WithRef:s,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{x as C};
//# sourceMappingURL=CardHeader.test.stories-JRw4kBGn.js.map
