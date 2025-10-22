import{j as i}from"./iframe-BoxHncFg.js";import{I as o}from"./index-DyY5joHW.js";import{C as l}from"./index-CxRKwedM.js";import{E as S,D as C}from"./index-Mlou2Fgf.js";const{expect:t,within:y}=__STORYBOOK_MODULE_TEST__,I={component:l.Actions,title:"Tester/Card/Actions",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},w="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",v={children:w},n={name:"With Ref (FA1)",args:{...v,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=y(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},s={name:"With Attributes (FA2-5)",args:{...v,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=y(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},r={name:"With Children (A6)",render:e=>i.jsx(l,{children:i.jsx(l.Actions,{...e})}),args:{children:[i.jsx(o,{svgPath:S,children:"Endre"},"button1"),i.jsx(o,{svgPath:C,children:"Slett"},"button2")]},argTypes:{children:{table:{disable:!1}}}};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,b,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const x=["WithRef","WithAttributes","WithChildren"],W=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:s,WithChildren:r,WithRef:n,__namedExportsOrder:x,default:I},Symbol.toStringTag,{value:"Module"}));export{W as C};
//# sourceMappingURL=CardActions.test.stories-BM1jisfF.js.map
