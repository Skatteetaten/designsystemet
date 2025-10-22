import{j as t,r as W}from"./iframe-BoxHncFg.js";import{C as m}from"./index-CxRKwedM.js";import{a as E}from"./index-Mlou2Fgf.js";import{H as F,P as H}from"./index-COS0aIOi.js";const{expect:s,userEvent:B,waitFor:I,within:u}=__STORYBOOK_MODULE_TEST__,j={component:m.Alert,title:"Tester/Card/Alert",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},variant:{table:{disable:!0}},title:{table:{disable:!0}},titleAs:{table:{disable:!0}},showAlert:{table:{disable:!0}},svgPath:{table:{disable:!0}},onClose:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},P="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",r={children:P,title:"Merknad"},i={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=u(e).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=u(e).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("lang","en"),await s(a).toHaveAttribute("data-testid","123ID")}},l={name:"With custom icon, children and title (A7)",args:{...r,svgPath:E},argTypes:{children:{table:{disable:!1}}}},_=["info","warning","danger"],N=e=>t.jsx(m,{children:_.map((n,a)=>W.createElement(m.Alert,{title:r.title,...e,key:`card_${a}`,className:"bottomSpacingXL",variant:n},t.jsx(m.Content,{children:e.children})))}),d={render:N,name:"All Variants (A7)",args:{...r}},c={name:"With OnClose",args:{...r,children:t.jsxs(t.Fragment,{children:[t.jsx(F,{as:"h1",level:4,children:"Avvist av kortutsteder"}),t.jsxs(H,{children:["Ta kontakt med kortutsteder for ",t.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]})},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=u(e),a=n.getByRole("button");await B.click(a),await I(()=>{s(n.queryByText("Avvist av kortutsteder")).not.toBeInTheDocument()})}};var p,b,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,f,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,A,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var w,k,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A7)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,C,R;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const O=["WithRef","WithAttributes","WithSvgPath","AllVariants","WithOnClose"],L=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:d,WithAttributes:o,WithOnClose:c,WithRef:i,WithSvgPath:l,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{L as C};
//# sourceMappingURL=CardAlert.test.stories-DPH1vEYI.js.map
