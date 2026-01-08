import{j as n}from"./iframe-s2_bNgHU.js";import{C as c}from"./index-jj9Gfu02.js";import{I as u}from"./index-CUsfAC9p.js";import{T as p}from"./index-DdQvxWAg.js";import{L as m}from"./index-CJpzHRrE.js";const{expect:a,within:g}=__STORYBOOK_MODULE_TEST__,b={component:c.Content,title:"Tester/Card/Content",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},rightContent:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},f="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",d={children:f},s={name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=g(e).getAllByRole("generic")[1];await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...d,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=g(e).getAllByRole("generic")[1];await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","en"),await a(t).toHaveAttribute("data-testid","123ID")}},i={name:"With Children RightContent (A5)",render:e=>n.jsx(c,{children:n.jsx(c.Content,{...e})}),args:{children:n.jsxs(m,{children:[n.jsx(m.Element,{children:"første element"}),n.jsx(m.Element,{children:"andre element"})]}),rightContent:n.jsx(p,{svgPath:u,children:"Endret av deg"})},argTypes:{children:{table:{disable:!1}},rightContent:{table:{disable:!1}}}},l={name:"With Custom ClassNames",args:{...d,rightContent:"høyrejustert innhold",classNames:{rightContent:"dummyClassname",children:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const o=g(e),t=o.getByText(d.children),h=o.getByText("høyrejustert innhold");await a(t).toHaveClass("dummyClassname"),await a(h).toHaveClass("dummyClassname")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  name: 'With Children RightContent (A5)',
  render: args => <Card>
      <Card.Content {...args} />
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
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Custom ClassNames',
  args: {
    ...defaultArgs,
    rightContent: 'høyrejustert innhold',
    classNames: {
      rightContent: 'dummyClassname',
      children: 'dummyClassname'
    }
  },
  argTypes: {
    classNames: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const content = canvas.getByText(defaultArgs.children);
    const rightContent = canvas.getByText('høyrejustert innhold');
    await expect(content).toHaveClass('dummyClassname');
    await expect(rightContent).toHaveClass('dummyClassname');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};const C=["WithRef","WithAttributes","WithChildrenRigthContent","WithCustomClassNames"],w=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:r,WithChildrenRigthContent:i,WithCustomClassNames:l,WithRef:s,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{w as C};
//# sourceMappingURL=CardContent.test.stories-BvM3I4JG.js.map
