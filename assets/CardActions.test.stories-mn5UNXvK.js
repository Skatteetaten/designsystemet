import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{w as y,e as t}from"./index-DIxTUSTt.js";import{I as d}from"./index-DfnG5Ebn.js";import{C as l}from"./index-CWrHDE5u.js";import{E as w,D as I}from"./index-DAV9Xejq.js";import"./index-CGk5cNE3.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-uxUkjR_c.js";import"./index-DXWIZOJk.js";const D={component:l.Actions,title:"Tester/Card/Actions",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"}}},x="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",v={children:x},s={name:"With Ref (FA1)",args:{...v,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=y(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...v,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=y(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},i={name:"With Children (A6)",render:e=>n.jsx(l,{children:n.jsx(l.Actions,{...e})}),args:{children:[n.jsx(d,{svgPath:w,children:"Endre"},"button1"),n.jsx(d,{svgPath:I,children:"Slett"},"button2")]},argTypes:{children:{table:{disable:!1}}}};var o,c,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const j=["WithRef","WithAttributes","WithChildren"];export{r as WithAttributes,i as WithChildren,s as WithRef,j as __namedExportsOrder,D as default};
//# sourceMappingURL=CardActions.test.stories-mn5UNXvK.js.map
