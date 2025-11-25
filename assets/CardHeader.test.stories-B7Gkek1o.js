import{j as a}from"./jsx-runtime-BYYWji4R.js";import{w as v,e as n}from"./index-DIxTUSTt.js";import{C as d}from"./index-Dpx64Uiu.js";import"./index-BYKicpQW.js";import{I as C}from"./index-C8q4C1To.js";import{T as x}from"./index-Cs0ivlf6.js";import{L as l}from"./index-7bHEsQL_.js";import{s as w}from"./base-props.types-sXyoNogd.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CEFmy_Ic.js";import"./index-BuQZV-my.js";const B={component:d.Header,title:"Tester/Card/Header",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},rightContent:{table:{disable:!0},control:"text"},spacingVertical:{table:{disable:!0}},classNames:{table:{disable:!0}}}},R="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",y={children:R,variant:w[1],title:"Merknad"},s={name:"With Ref (FA1)",args:{...y,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=v(e).getAllByRole("generic")[1];await n(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...y,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=v(e).getAllByRole("generic")[1];await n(t).toHaveAttribute("id","htmlId"),await n(t).toHaveClass("dummyClassname"),await n(t).toHaveAttribute("lang","en"),await n(t).toHaveAttribute("data-testid","123ID")}},i={name:"With Children RightContent (A4)",render:e=>a.jsx(d,{children:a.jsx(d.Header,{...e})}),args:{children:a.jsxs(l,{children:[a.jsx(l.Element,{children:"første element"}),a.jsx(l.Element,{children:"andre element"})]}),rightContent:a.jsx(x,{svgPath:C,children:"Endret av deg"})},argTypes:{children:{table:{disable:!1}},rightContent:{table:{disable:!1}}}};var o,m,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} satisfies Story`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var b,p,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,f,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const P=["WithRef","WithAttributes","WithChildrenRigthContent"];export{r as WithAttributes,i as WithChildrenRigthContent,s as WithRef,P as __namedExportsOrder,B as default};
//# sourceMappingURL=CardHeader.test.stories-B7Gkek1o.js.map
