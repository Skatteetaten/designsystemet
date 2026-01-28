import{j as n}from"./iframe-CBOQuZmX.js";import{H as i}from"./index-B4-BoLKC.js";import{h as y}from"./base-props.types-B340BQPQ.js";const S=[1,2,3,4,5],{expect:s,within:b}=__STORYBOOK_MODULE_TEST__,x={component:i,title:"Tester/Heading",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},as:{table:{disable:!0}},level:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={as:"h2",children:"Dette er en heading"},l={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=b(e).getByRole("heading");await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=b(e).getByRole("heading");await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveAttribute("lang","nb"),await s(a).toHaveAttribute("data-testid","123ID")}},v=e=>n.jsx(n.Fragment,{children:S.map((t,a)=>n.jsx(i,{...e,level:t,children:`Heading level ${t}`},`level_${a}`))}),d={render:v,name:"Defaults All Levels (A1, A2)",args:{...r},play:async({canvasElement:e})=>{const a=b(e).getAllByRole("heading",{level:2});for(const[A,f]of a.entries())await s(f).toBeInTheDocument(),await s(f).toHaveAttribute("data-level",`${A+1}`)}},c={render:v,name:"Defaults All Levels On Small Screen (A1, A2)",args:{...r},globals:{viewport:{value:"--breakpoint-xs"}}},g={render:v,name:"With Spacing All Levels (A4)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},m={render:v,name:"With Spacing All Levels On Small Screen (A4)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},w=e=>n.jsx(n.Fragment,{children:y.map(t=>n.jsx(i,{...e,as:t,children:`Heading ${t}`},`heading-${t}`))}),p={render:w,name:"With As (B1)",args:{...r},play:async({canvasElement:e})=>{const a=b(e).getAllByRole("heading");for(const[A,f]of a.entries())await s(f.tagName).toBe(y[A].toLocaleUpperCase())}},W=e=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{...e,hasSpacing:!0,children:["Dette er den ",n.jsx("a",{href:"https://www.skatteetaten.no",children:"fyneste markup headingen"}),n.jsx("em",{children:" som finnes i italic "}),n.jsx("strong",{children:"og strong "}),n.jsx("mark",{children:"mark "}),n.jsx("code",{children:"code "}),"med spacing under og en skrivefeil"]}),n.jsx(i,{...e})]}),u={render:W,name:"With Markup And String (A3, B2)",args:{...r,children:"Dette er den fineste string headingen uten markup"},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},h={render:e=>n.jsx(i,{...e}),args:{...r,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=b(e).getByRole("heading");a.focus(),await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("tabIndex","-1")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLHeadingElement | null): void => {
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
    const heading = canvas.getByRole('heading');
    await expect(heading).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const heading = canvas.getByRole('heading');
    await expect(heading).toHaveClass('dummyClassname');
    await expect(heading).toHaveAttribute('id', 'htmlId');
    await expect(heading).toHaveAttribute('lang', 'nb');
    await expect(heading).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllLevels,
  name: 'Defaults All Levels (A1, A2)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading', {
      level: 2
    });
    for (const [index, heading] of headings.entries()) {
      await expect(heading).toBeInTheDocument();
      await expect(heading).toHaveAttribute('data-level', \`\${index + 1}\`);
    }
  }
} satisfies Story`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllLevels,
  name: 'Defaults All Levels On Small Screen (A1, A2)',
  args: {
    ...defaultArgs
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllLevels,
  name: 'With Spacing All Levels (A4)',
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
} satisfies Story`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: TemplateWithAllLevels,
  name: 'With Spacing All Levels On Small Screen (A4)',
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
  },
  globals: {
    viewport: {
      value: '--breakpoint-xs'
    }
  }
} satisfies Story`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: AsTemplate,
  name: 'With As (B1)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading');
    for (const [index, heading] of headings.entries()) {
      await expect(heading.tagName).toBe(headingAsArr[index].toLocaleUpperCase());
    }
  }
} satisfies Story`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: TemplateWithMarkup,
  name: 'With Markup And String (A3, B2)',
  args: {
    ...defaultArgs,
    children: 'Dette er den fineste string headingen uten markup'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Heading {...args} />,
  args: {
    ...defaultArgs,
    canBeManuallyFocused: true
  },
  argTypes: {
    canBeManuallyFocused: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    heading.focus();
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveAttribute('tabIndex', '-1');
  }
} satisfies Story`,...h.parameters?.docs?.source}}};const T=["WithRef","WithAttributes","Defaults","DefaultsMobile","LevelsWithSpacing","LevelsWithSpacingMobile","WithAs","WithMarkup","WithCanBeManuallyFocused"],D=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,DefaultsMobile:c,LevelsWithSpacing:g,LevelsWithSpacingMobile:m,WithAs:p,WithAttributes:o,WithCanBeManuallyFocused:h,WithMarkup:u,WithRef:l,__namedExportsOrder:T,default:x},Symbol.toStringTag,{value:"Module"}));export{D as H};
//# sourceMappingURL=Heading.test.stories-CiBuScwI.js.map
