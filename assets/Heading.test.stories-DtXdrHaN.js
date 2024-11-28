import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import"./index-C498nvnC.js";import{H as i}from"./index-DWqb7jS3.js";import{w as l,e as s}from"./index-B8otpkpo.js";import{w as y}from"./storybook.testing.utils-CMs160i9.js";import{h as J}from"./base-props.types-sXyoNogd.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const K=[1,2,3,4,5],le={component:i,title:"Tester/Heading",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},canBeManuallyFocused:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},as:{table:{disable:!0}},level:{table:{disable:!0}}}},Q="h2",r={as:Q,level:2,children:"Dette er en heading"},d={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=l(e).getByRole("heading");await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("heading");await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveAttribute("lang","nb"),await s(a).toHaveAttribute("data-testid","123ID")}},v=e=>n.jsx(n.Fragment,{children:K.map((t,a)=>n.jsx(i,{...e,level:t,children:`Heading level ${t}`},`level_${a}`))}),m={render:v,name:"Defaults All Levels (A1, A2)",args:{...r},play:async({canvasElement:e})=>{const a=l(e).getAllByRole("heading",{level:2});for(const[A,o]of a.entries())await s(o).toBeInTheDocument(),await s(o.classList.toString()).toContain(`heading_level${K[A]}`)}},g={render:v,name:"Defaults All Levels On Small Screen (A1, A2)",args:{...r},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},p={render:v,name:"With Spacing All Levels (A4)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},h={render:v,name:"With Spacing All Levels On Small Screen (A4)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},X=e=>n.jsx(n.Fragment,{children:J.map(t=>n.jsx(i,{...e,as:t,children:`Heading ${t}`},`heading-${t}`))}),u={render:X,name:"With As (B1)",args:{...r},parameters:{viewport:{viewPortHeight:1200}},play:async({canvasElement:e})=>{const a=l(e).getAllByRole("heading");for(const[A,o]of a.entries())await s(o.tagName).toBe(J[A].toLocaleUpperCase())}},Y=e=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{...e,hasSpacing:!0,children:["Dette er den ",n.jsx("a",{href:"https://www.skatteetaten.no",children:"fyneste markup headingen"}),n.jsx("em",{children:" som finnes i italic "}),n.jsx("strong",{children:"og strong "}),n.jsx("mark",{children:"mark "}),n.jsx("code",{children:"code "}),"med spacing under og en skrivefeil"]}),n.jsx(i,{...e})]}),b={render:Y,name:"With Markup And String (A3, B2)",args:{...r,children:"Dette er den fineste string headingen uten markup"},argTypes:{children:{table:{disable:!1},control:{disable:!0}}},parameters:{imageSnapshot:{hover:`${y} > h2 > a`,focus:`${y} > h2 > a`}}},f={render:e=>n.jsx(i,{...e}),args:{...r,canBeManuallyFocused:!0},argTypes:{canBeManuallyFocused:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("heading");a.focus(),await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("tabIndex","-1")}};var S,w,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(heading).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var W,T,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var L,F,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var D,R,k;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: TemplateWithAllLevels,
  name: 'Defaults All Levels On Small Screen (A1, A2)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...(k=(R=g.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var I,M,j;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
} satisfies Story`,...(j=(M=p.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var E,C,$;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
  parameters: {
    viewport: {
      defaultViewport: '--breakpoint-xs'
    }
  }
} satisfies Story`,...($=(C=h.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var N,P,O;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: AsTemplate,
  name: 'With As (B1)',
  args: {
    ...defaultArgs
  },
  parameters: {
    viewport: {
      viewPortHeight: 1200
    }
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
} satisfies Story`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var _,V,U;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > h2 > a\`,
      focus: \`\${wrapper} > h2 > a\`
    }
  }
} satisfies Story`,...(U=(V=b.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var q,z,G;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
} satisfies Story`,...(G=(z=f.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const oe=["WithRef","WithAttributes","Defaults","DefaultsMobile","LevelsWithSpacing","LevelsWithSpacingMobile","WithAs","WithMarkup","WithCanBeManuallyFocused"];export{m as Defaults,g as DefaultsMobile,p as LevelsWithSpacing,h as LevelsWithSpacingMobile,u as WithAs,c as WithAttributes,f as WithCanBeManuallyFocused,b as WithMarkup,d as WithRef,oe as __namedExportsOrder,le as default};
//# sourceMappingURL=Heading.test.stories-DtXdrHaN.js.map
