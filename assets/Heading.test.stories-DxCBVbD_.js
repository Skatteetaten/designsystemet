import{j as n}from"./iframe-C2uFIQ6s.js";import{H as i}from"./index-BEXGZWqo.js";import{h as q}from"./base-props.types-B340BQPQ.js";const G=[1,2,3,4,5],{expect:t,within:b}=__STORYBOOK_MODULE_TEST__,J={component:i,title:"Tester/Heading",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},as:{table:{disable:!0}},level:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},Q="h2",r={as:Q,level:2,children:"Dette er en heading"},l={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=b(e).getByRole("heading");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=b(e).getByRole("heading");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id","htmlId"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},v=e=>n.jsx(n.Fragment,{children:G.map((s,a)=>n.jsx(i,{...e,level:s,children:`Heading level ${s}`},`level_${a}`))}),d={render:v,name:"Defaults All Levels (A1, A2)",args:{...r},play:async({canvasElement:e})=>{const a=b(e).getAllByRole("heading",{level:2});for(const[A,f]of a.entries())await t(f).toBeInTheDocument(),await t(f.classList.toString()).toContain(`heading_level${G[A]}`)}},c={render:v,name:"Defaults All Levels On Small Screen (A1, A2)",args:{...r},globals:{viewport:{value:"--breakpoint-xs"}}},g={render:v,name:"With Spacing All Levels (A4)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},m={render:v,name:"With Spacing All Levels On Small Screen (A4)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}},globals:{viewport:{value:"--breakpoint-xs"}}},V=e=>n.jsx(n.Fragment,{children:q.map(s=>n.jsx(i,{...e,as:s,children:`Heading ${s}`},`heading-${s}`))}),p={render:V,name:"With As (B1)",args:{...r},play:async({canvasElement:e})=>{const a=b(e).getAllByRole("heading");for(const[A,f]of a.entries())await t(f.tagName).toBe(q[A].toLocaleUpperCase())}},X=e=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{...e,hasSpacing:!0,children:["Dette er den ",n.jsx("a",{href:"https://www.skatteetaten.no",children:"fyneste markup headingen"}),n.jsx("em",{children:" som finnes i italic "}),n.jsx("strong",{children:"og strong "}),n.jsx("mark",{children:"mark "}),n.jsx("code",{children:"code "}),"med spacing under og en skrivefeil"]}),n.jsx(i,{...e})]}),u={render:X,name:"With Markup And String (A3, B2)",args:{...r,children:"Dette er den fineste string headingen uten markup"},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},h={render:e=>n.jsx(i,{...e}),args:{...r,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=b(e).getByRole("heading");a.focus(),await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("tabIndex","-1")}};var y,S,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,T,W;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(T=o.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var B,L,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      await expect(heading.classList.toString()).toContain(\`heading_level\${headingLevelArr[index]}\`);
    }
  }
} satisfies Story`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,D,M;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(D=c.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var R,I,j;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(I=g.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var k,E,_;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var C,O,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(O=p.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var P,$,U;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
} satisfies Story`,...(U=($=u.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var z,K,Y;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
} satisfies Story`,...(Y=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const Z=["WithRef","WithAttributes","Defaults","DefaultsMobile","LevelsWithSpacing","LevelsWithSpacingMobile","WithAs","WithMarkup","WithCanBeManuallyFocused"],se=Object.freeze(Object.defineProperty({__proto__:null,Defaults:d,DefaultsMobile:c,LevelsWithSpacing:g,LevelsWithSpacingMobile:m,WithAs:p,WithAttributes:o,WithCanBeManuallyFocused:h,WithMarkup:u,WithRef:l,__namedExportsOrder:Z,default:J},Symbol.toStringTag,{value:"Module"}));export{se as H};
//# sourceMappingURL=Heading.test.stories-DxCBVbD_.js.map
