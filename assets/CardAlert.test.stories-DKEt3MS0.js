import{j as t,r as g}from"./iframe-Br1Xu9zr.js";import{C as u}from"./index-BVXicwjt.js";import{a as b}from"./index-Xbc0duXx.js";import{H as h,P as v}from"./index-DCwxX22m.js";const{expect:r,userEvent:f,waitFor:y,within:p}=__STORYBOOK_MODULE_TEST__,A={component:u.Alert,title:"Tester/Card/Alert",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},variant:{table:{disable:!0}},title:{table:{disable:!0}},titleAs:{table:{disable:!0}},showAlert:{table:{disable:!0}},svgPath:{table:{disable:!0}},onClose:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},S="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",n={children:S,title:"Merknad"},o={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=p(e).getAllByRole("generic")[1];await r(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=p(e).getAllByRole("generic")[1];await r(a).toHaveAttribute("id","htmlId"),await r(a).toHaveClass("dummyClassname"),await r(a).toHaveAttribute("lang","en"),await r(a).toHaveAttribute("data-testid","123ID")}},l={name:"With custom icon, children and title (A7)",args:{...n,svgPath:b},argTypes:{children:{table:{disable:!1}}}},w=["info","warning","danger"],k=e=>t.jsx(u,{children:w.map((s,a)=>g.createElement(u.Alert,{title:n.title,...e,key:`card_${a}`,className:"bottomSpacingXL",variant:s},t.jsx(u.Content,{children:e.children})))}),d={render:k,name:"All Variants (A7)",args:{...n}},c={name:"With OnClose",args:{...n,children:t.jsxs(t.Fragment,{children:[t.jsx(h,{as:"h1",level:4,children:"Avvist av kortutsteder"}),t.jsxs(v,{children:["Ta kontakt med kortutsteder for ",t.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]})},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const s=p(e),a=s.getByRole("button");await f.click(a),await y(()=>{r(s.queryByText("Avvist av kortutsteder")).not.toBeInTheDocument()})}},m={name:"With CloseButton Pseudo States",args:{...n},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A7)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With CloseButton Pseudo States',
  args: {
    ...defaultArgs
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};const x=["WithRef","WithAttributes","WithSvgPath","AllVariants","WithOnClose","WithCloseButtonPseudoStates"],P=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:d,WithAttributes:i,WithCloseButtonPseudoStates:m,WithOnClose:c,WithRef:o,WithSvgPath:l,__namedExportsOrder:x,default:A},Symbol.toStringTag,{value:"Module"}));export{P as C};
//# sourceMappingURL=CardAlert.test.stories-DKEt3MS0.js.map
