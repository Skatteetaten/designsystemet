import{j as a}from"./iframe-CiN0Q14g.js";import{I as x,m as w}from"./index-DPSubrBs.js";import{H as i}from"./index-BYrVrPct.js";import{h as S}from"./base-props.types-DHcpNXpn.js";const W=[1,2,3,4,5],{expect:t,within:f}=__STORYBOOK_MODULE_TEST__,T={component:i,title:"Tester/Heading",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},as:{table:{disable:!0}},level:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={as:"h2",children:"Dette er en heading"},l={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=f(e).getByRole("heading");await t(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=f(e).getByRole("heading");await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("id","htmlId"),await t(n).toHaveAttribute("lang","nb"),await t(n).toHaveAttribute("data-testid","123ID")}},y=e=>a.jsx(a.Fragment,{children:W.map((s,n)=>a.jsx(i,{...e,level:s,children:`Heading level ${s}`},`level_${n}`))}),d={render:y,name:"Defaults All Levels (A1, A2)",args:{...r},play:async({canvasElement:e})=>{const n=f(e).getAllByRole("heading",{level:2});for(const[A,v]of n.entries())await t(v).toBeInTheDocument(),await t(v).toHaveAttribute("data-level",`${A+1}`)}},c={render:y,name:"Defaults All Levels On Small Screen (A1, A2)",args:{...r},globals:{viewport:{value:"--breakpoint-xs"}}},g={render:y,name:"With Spacing All Levels (A4)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},m={render:y,name:"With Spacing All Levels On Small Screen (A4)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},B=e=>a.jsx(a.Fragment,{children:S.map(s=>a.jsx(i,{...e,as:s,children:`Heading ${s}`},`heading-${s}`))}),p={render:B,name:"With As (B1)",args:{...r},play:async({canvasElement:e})=>{const n=f(e).getAllByRole("heading");for(const[A,v]of n.entries())await t(v.tagName).toBe(S[A].toLocaleUpperCase())}},H=e=>a.jsxs(a.Fragment,{children:[a.jsxs(i,{...e,hasSpacing:!0,children:["Dette er den ",a.jsx("a",{href:"https://www.skatteetaten.no",children:"fyneste markup headingen"}),a.jsx("em",{children:" som finnes i italic "}),a.jsx("strong",{children:"og strong "}),a.jsx("mark",{children:"mark "}),a.jsx("code",{children:"code "}),"med spacing under og en skrivefeil"]}),a.jsx(i,{...e})]}),u={render:H,name:"With Markup And String (A3, B2)",args:{...r,children:"Dette er den fineste string headingen uten markup"},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},h={render:e=>a.jsx(i,{...e}),args:{...r,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=f(e).getByRole("heading");n.focus(),await t(n).toBeInTheDocument(),await t(n).toHaveAttribute("tabIndex","-1")}},b={args:{...r},render:e=>a.jsxs(i,{as:"h1",children:[a.jsx(x,{svgPath:w,size:"extraLarge"})," Dette er en overskrift som inneholder et systemikon i begynnelsen av teksten."]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: (_args): JSX.Element => {
    return <Heading as={'h1'}>
        <Icon svgPath={CompletedSVGpath} size={'extraLarge'} />
        {' Dette er en overskrift som inneholder et systemikon i begynnelsen av teksten.'}
      </Heading>;
  }
} satisfies Story`,...b.parameters?.docs?.source}}};const k=["WithRef","WithAttributes","Defaults","DefaultsMobile","LevelsWithSpacing","LevelsWithSpacingMobile","WithAs","WithMarkup","WithCanBeManuallyFocused","HeadingWithIcon"],M=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,DefaultsMobile:c,HeadingWithIcon:b,LevelsWithSpacing:g,LevelsWithSpacingMobile:m,WithAs:p,WithAttributes:o,WithCanBeManuallyFocused:h,WithMarkup:u,WithRef:l,__namedExportsOrder:k,default:T},Symbol.toStringTag,{value:"Module"}));export{M as H};
//# sourceMappingURL=Heading.test.stories-Bh2NHgiN.js.map
