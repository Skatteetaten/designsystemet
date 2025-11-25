import{j as t,r as F}from"./iframe-Cq9sN_Dz.js";import{C as u}from"./index-9jg8RjbV.js";import{a as H}from"./index-B4tfeJ0Q.js";import{H as I,P as j}from"./index-DskRqDMQ.js";const{expect:r,userEvent:_,waitFor:N,within:p}=__STORYBOOK_MODULE_TEST__,O={component:u.Alert,title:"Tester/Card/Alert",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},variant:{table:{disable:!0}},title:{table:{disable:!0}},titleAs:{table:{disable:!0}},showAlert:{table:{disable:!0}},svgPath:{table:{disable:!0}},onClose:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},D="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",n={children:D,title:"Merknad"},o={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=p(e).getAllByRole("generic")[1];await r(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=p(e).getAllByRole("generic")[1];await r(a).toHaveAttribute("id","htmlId"),await r(a).toHaveClass("dummyClassname"),await r(a).toHaveAttribute("lang","en"),await r(a).toHaveAttribute("data-testid","123ID")}},l={name:"With custom icon, children and title (A7)",args:{...n,svgPath:H},argTypes:{children:{table:{disable:!1}}}},V=["info","warning","danger"],M=e=>t.jsx(u,{children:V.map((s,a)=>F.createElement(u.Alert,{title:n.title,...e,key:`card_${a}`,className:"bottomSpacingXL",variant:s},t.jsx(u.Content,{children:e.children})))}),d={render:M,name:"All Variants (A7)",args:{...n}},c={name:"With OnClose",args:{...n,children:t.jsxs(t.Fragment,{children:[t.jsx(I,{as:"h1",level:4,children:"Avvist av kortutsteder"}),t.jsxs(j,{children:["Ta kontakt med kortutsteder for ",t.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]})},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const s=p(e),a=s.getByRole("button");await _.click(a),await N(()=>{r(s.queryByText("Avvist av kortutsteder")).not.toBeInTheDocument()})}},m={name:"With CloseButton Pseudo States",args:{...n},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,f,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var A,S,w;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With custom icon, children and title (A7)',
  args: {
    ...defaultArgs,
    svgPath: SkattetrekkSVGpath
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,x,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A7)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(T=(x=d.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var C,W,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With OnClose',
  args: {
    ...defaultArgs,
    children: <>
        <Heading as={'h1'} level={4}>
          {'Avvist av kortutsteder'}
        </Heading>
        <Paragraph>
          {'Ta kontakt med kortutsteder for '}
          <a href={'#storybook-root'}>{'mer informasjon'}</a>
        </Paragraph>
      </>
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
    const closeButton = canvas.getByRole('button');
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(canvas.queryByText('Avvist av kortutsteder')).not.toBeInTheDocument();
    });
  }
} satisfies Story`,...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var P,R,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'With CloseButton Pseudo States',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const G=["WithRef","WithAttributes","WithSvgPath","AllVariants","WithOnClose","WithCloseButtonPseudoStates"],U=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:d,WithAttributes:i,WithCloseButtonPseudoStates:m,WithOnClose:c,WithRef:o,WithSvgPath:l,__namedExportsOrder:G,default:O},Symbol.toStringTag,{value:"Module"}));export{U as C};
//# sourceMappingURL=CardAlert.test.stories-B21czmB5.js.map
