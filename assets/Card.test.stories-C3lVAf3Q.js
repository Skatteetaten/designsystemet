import{j as s,r as y}from"./iframe-CBOQuZmX.js";import{C as r}from"./index-haEYng38.js";import{H as g}from"./index-B4-BoLKC.js";const h=["white","ochre","forest","burgundy","denim","graphite"],{expect:t,within:l}=__STORYBOOK_MODULE_TEST__,f={component:r,title:"Tester/Card",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},color:{table:{disable:!0}},spacing:{table:{disable:!0}},ariaLabelledBy:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},A="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",i={children:A},o={name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},d={name:"With Attributes (FA2-5)",args:{...i,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=l(e).getAllByRole("generic")[1];await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","en"),await t(a).toHaveAttribute("data-testid","123ID")}},c={name:"Defaults (B1, B2)",args:{...i},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=l(e),a=n.getAllByRole("generic")[1],u=n.queryByRole("region");await t(u).not.toBeInTheDocument(),await t(a).toBeInTheDocument()}},v=e=>s.jsx(s.Fragment,{children:h.map((n,a)=>y.createElement(r,{...e,key:`card_${a}`,className:"bottomSpacingXL",color:n},s.jsx(r.Content,{children:e.children})))}),m={render:v,name:"All Colors (A1, A2)",args:{...i}},b={name:"With aria-labelledby (B1)",argTypes:{ariaLabelledBy:{table:{disable:!1}}},args:{...i,ariaLabelledBy:"dummyId"},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("region");await t(a).toHaveAttribute("aria-labelledby","dummyId")}},B=e=>s.jsxs(r,{...e,children:[s.jsx(r.Alert,{title:"Informasjon",children:"Alert message content"}),s.jsx(r.Header,{children:s.jsx(g,{id:e.ariaLabelledBy,as:"h3",children:"Card Heading"})}),s.jsx(r.Content,{children:e.children})]}),p={render:B,name:"With ariaLabelledBy and Card.Alert",args:{...i,ariaLabelledBy:"dummyId"},play:async({canvasElement:e})=>{const a=l(e).getByRole("region"),u=l(a).getByRole("heading",{name:"Informasjon"});await t(u).toBeInTheDocument(),await t(a).toHaveAttribute("aria-labelledby",`${u.id} dummyId`)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const card = canvas.getAllByRole('generic')[1];
    await expect(card).toHaveClass('dummyClassname');
    await expect(card).toHaveAttribute('id', 'htmlId');
    await expect(card).toHaveAttribute('lang', 'en');
    await expect(card).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Defaults (B1, B2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const section = canvas.queryByRole('region');
    await expect(section).not.toBeInTheDocument();
    await expect(container).toBeInTheDocument();
  }
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: TemplateAllColors,
  name: 'All Colors (A1, A2)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With aria-labelledby (B1)',
  argTypes: {
    ariaLabelledBy: {
      table: {
        disable: false
      }
    }
  },
  args: {
    ...defaultArgs,
    ariaLabelledBy: 'dummyId'
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
    const cardNote = canvas.getByRole('region');
    await expect(cardNote).toHaveAttribute('aria-labelledby', 'dummyId');
  }
} satisfies Story`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAlert,
  name: 'With ariaLabelledBy and Card.Alert',
  args: {
    ...defaultArgs,
    ariaLabelledBy: 'dummyId'
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const cardSection = canvas.getByRole('region');
    const alertHeading = within(cardSection).getByRole('heading', {
      name: 'Informasjon'
    });
    await expect(alertHeading).toBeInTheDocument();
    await expect(cardSection).toHaveAttribute('aria-labelledby', \`\${alertHeading.id} dummyId\`);
  }
} satisfies Story`,...p.parameters?.docs?.source}}};const w=["WithRef","WithAttributes","Defaults","AllColors","WithAriaLabelledBy","WithAriaLabelledByAndCardAlert"],x=Object.freeze(Object.defineProperty({__proto__:null,AllColors:m,Defaults:c,WithAriaLabelledBy:b,WithAriaLabelledByAndCardAlert:p,WithAttributes:d,WithRef:o,__namedExportsOrder:w,default:f},Symbol.toStringTag,{value:"Module"}));export{x as C};
//# sourceMappingURL=Card.test.stories-C3lVAf3Q.js.map
