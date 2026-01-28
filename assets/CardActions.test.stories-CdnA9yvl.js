import{j as i}from"./iframe-CBOQuZmX.js";import{I as o}from"./index-BxmwhRWV.js";import{C as l}from"./index-haEYng38.js";import{E as p,D as b}from"./index-tEZUkoN5.js";const{expect:t,within:d}=__STORYBOOK_MODULE_TEST__,u={component:l.Actions,title:"Tester/Card/Actions",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},g="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",c={children:g},n={name:"With Ref (FA1)",args:{...c,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=d(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={name:"With Attributes (FA2-5)",args:{...c,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=d(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},r={name:"With Children (A6)",render:e=>i.jsx(l,{children:i.jsx(l.Actions,{...e})}),args:{children:[i.jsx(o,{svgPath:p,children:"Endre"},"button1"),i.jsx(o,{svgPath:b,children:"Slett"},"button2")]},argTypes:{children:{table:{disable:!1}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Children (A6)',
  render: args => <Card>
      <Card.Actions {...args} />
    </Card>,
  args: {
    children: [<InlineButton key={'button1'} svgPath={EditSVGpath}>
        {'Endre'}
      </InlineButton>, <InlineButton key={'button2'} svgPath={DeleteSVGpath}>
        {'Slett'}
      </InlineButton>]
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...r.parameters?.docs?.source}}};const f=["WithRef","WithAttributes","WithChildren"],S=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:s,WithChildren:r,WithRef:n,__namedExportsOrder:f,default:u},Symbol.toStringTag,{value:"Module"}));export{S as C};
//# sourceMappingURL=CardActions.test.stories-CdnA9yvl.js.map
