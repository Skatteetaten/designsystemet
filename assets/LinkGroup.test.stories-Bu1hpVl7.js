import{j as n}from"./iframe-s2_bNgHU.js";import{L as a}from"./index-Ck1G954W.js";import{j as k}from"./index-CUsfAC9p.js";import{l as b}from"./base-props.types-B340BQPQ.js";const{expect:r,within:p}=__STORYBOOK_MODULE_TEST__,f={component:a,title:"Tester/LinkGroup",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},hasSpacing:{table:{disable:!0}},color:{table:{disable:!0},options:[void 0,...b],control:"inline-radio"},variant:{table:{disable:!0},control:"inline-radio"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},t={children:[n.jsx(a.Link,{href:"#storybook-root",onClick:e=>e.preventDefault(),children:"Er du pendler?"},"linkGroupLink_1"),n.jsx(a.Link,{href:"#storybook-root",onClick:e=>e.preventDefault(),children:"Pendler du mye?"},"linkGroupLink_2"),n.jsx(a.Link,{href:"#storybook-root",onClick:e=>e.preventDefault(),children:"Pendler du dagen lang?"},"linkGroupLink_3")]},i={name:"With Ref (FA1)",args:{...t,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=p(e).getByRole("list");await r(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{...t,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const s=p(e).getByRole("list");await r(s).toHaveClass("dummyClassname"),await r(s).toHaveAttribute("id","htmlId"),await r(s).toHaveAttribute("lang","nb"),await r(s).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults Variant List (A1 delvis, A4 delvis, A5)",args:{...t},argTypes:{children:{table:{disable:!1}}}},d={name:"Variant Anchors (A1 delvis, A4 delvis, A6)",args:{...t,variant:"anchors"},argTypes:{variant:{table:{disable:!1}}}},c={name:"With Long Text And Icons (A2)",args:{...t,children:[n.jsx(a.Link,{href:"#storybook-root",isExternal:!0,children:"Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke og får et hengende innrykk."},"linkGroupLink_1"),n.jsx(a.Link,{href:"#storybook-root",svgPath:k,children:"Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke og får et hengende innrykk."},"linkGroupLink_2")]},argTypes:{children:{table:{disable:!1}}}},h=e=>n.jsxs(n.Fragment,{children:[n.jsx(a,{...e}),n.jsx(a,{...e})]}),m={render:h,name:"With Spacing (A3)",args:{...t,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},u={name:"With Color (A7)",args:{...t,color:"white"},argTypes:{color:{table:{disable:!1}}},globals:{backgrounds:{value:"themePrimary"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLUListElement | null): void => {
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const linkGroup = canvas.getByRole('list');
    await expect(linkGroup).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
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
    const linkGroup = canvas.getByRole('list');
    await expect(linkGroup).toHaveClass('dummyClassname');
    await expect(linkGroup).toHaveAttribute('id', 'htmlId');
    await expect(linkGroup).toHaveAttribute('lang', 'nb');
    await expect(linkGroup).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Defaults Variant List (A1 delvis, A4 delvis, A5)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Variant Anchors (A1 delvis, A4 delvis, A6)',
  args: {
    ...defaultArgs,
    variant: 'anchors'
  },
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Long Text And Icons (A2)',
  args: {
    ...defaultArgs,
    children: [<LinkGroup.Link key={'linkGroupLink_1'} href={'#storybook-root'} isExternal>
        {'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert ' + 'uansett om ikon eller ikke og får et hengende innrykk.'}
      </LinkGroup.Link>, <LinkGroup.Link key={'linkGroupLink_2'} href={'#storybook-root'} svgPath={CalendarSVGpath}>
        {'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert ' + 'uansett om ikon eller ikke og får et hengende innrykk.'}
      </LinkGroup.Link>]
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: TemplateWithTwoLinkGroups,
  name: 'With Spacing (A3)',
  args: {
    ...defaultArgs,
    hasSpacing: true
  },
  argTypes: {
    hasSpacing: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Color (A7)',
  args: {
    ...defaultArgs,
    color: 'white'
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};const y=["WithRef","WithAttributes","Defaults","VariantAnchors","WithLongTextAndIcons","WithSpacing","WithColor"],T=Object.freeze(Object.defineProperty({__proto__:null,Defaults:o,VariantAnchors:d,WithAttributes:l,WithColor:u,WithLongTextAndIcons:c,WithRef:i,WithSpacing:m,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{T as L};
//# sourceMappingURL=LinkGroup.test.stories-Bu1hpVl7.js.map
