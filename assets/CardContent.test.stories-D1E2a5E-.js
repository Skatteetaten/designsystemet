import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{w as g,e as a}from"./index-DIxTUSTt.js";import{C as c}from"./index-Bm-dj5jB.js";import"./index-ChzTQA-a.js";import{I as E}from"./index-CdwPxLML.js";import{T as R}from"./index-UoIuQY3B.js";import{L as m}from"./index-DsfABT8I.js";import{s as W}from"./base-props.types-DUvlOF9f.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-eDVrZHQi.js";import"./index-CPecIRii.js";const V={component:c.Content,title:"Tester/Card/Content",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},rightContent:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}}}},H="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",d={children:H,variant:W[1],title:"Merknad"},r={name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=g(e).getAllByRole("generic")[1];await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...d,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=g(e).getAllByRole("generic")[1];await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","en"),await a(t).toHaveAttribute("data-testid","123ID")}},l={name:"With Children RightContent (A5)",render:e=>n.jsx(c,{children:n.jsx(c.Content,{...e})}),args:{children:n.jsxs(m,{children:[n.jsx(m.Element,{children:"første element"}),n.jsx(m.Element,{children:"andre element"})]}),rightContent:n.jsx(R,{svgPath:E,children:"Endret av deg"})},argTypes:{children:{table:{disable:!1}},rightContent:{table:{disable:!1}}}},o={name:"With Custom ClassNames",args:{...d,rightContent:"høyrejustert innhold",classNames:{rightContent:"dummyClassname",children:"dummyClassname"}},argTypes:{classNames:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=g(e),t=s.getByText(d.children),T=s.getByText("høyrejustert innhold");await a(t).toHaveClass("dummyClassname"),await a(T).toHaveClass("dummyClassname")}};var h,u,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,C,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var y,v,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var x,w,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const _=["WithRef","WithAttributes","WithChildrenRigthContent","WithCustomClassNames"];export{i as WithAttributes,l as WithChildrenRigthContent,o as WithCustomClassNames,r as WithRef,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=CardContent.test.stories-D1E2a5E-.js.map
