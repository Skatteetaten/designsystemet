import{j as a}from"./jsx-runtime-CfatFE5O.js";import{w as R,e as i}from"./index-XVqkR3zt.js";import{L as n}from"./index-U0B695k8.js";import"./index--O6iZ70i.js";import{f as E}from"./index-BWc9jU-Q.js";import{w as t}from"./storybook.testing.utils-CMs160i9.js";import{l as V}from"./base-props.types-sXyoNogd.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dxnk4fMh.js";const _=["list","anchors"],X={component:n,title:"Tester/LinkGroup",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},hasSpacing:{table:{disable:!0}},color:{table:{disable:!0},options:[void 0,...V],control:"inline-radio"},variant:{table:{disable:!0},options:[..._],control:"inline-radio"}}},r={children:[a.jsx(n.Link,{href:"#storybook-root",onClick:e=>e.preventDefault(),children:"Er du pendler?"},"linkGroupLink_1"),a.jsx(n.Link,{href:"#storybook-root",onClick:e=>e.preventDefault(),children:"Pendler du mye?"},"linkGroupLink_2"),a.jsx(n.Link,{href:"#storybook-root",onClick:e=>e.preventDefault(),children:"Pendler du dagen lang?"},"linkGroupLink_3")]},l={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=R(e).getByRole("list");await i(s).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const s=R(e).getByRole("list");await i(s).toHaveClass("dummyClassname"),await i(s).toHaveAttribute("id","htmlId"),await i(s).toHaveAttribute("lang","nb"),await i(s).toHaveAttribute("data-testid","123ID")}},d={name:"Defaults Variant List (A1 delvis, A4 delvis, A5)",args:{...r},argTypes:{children:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${t} > ul > li:first-child > a`,focus:`${t} > ul > li:first-child > a`,click:`${t} > ul > li:first-child > a`}}},c={name:"Variant Anchors (A1 delvis, A4 delvis, A6)",args:{...r,variant:"anchors"},argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{hover:`${t} > ul > li:first-child > a`}}},p={name:"With Long Text And Icons (A2)",args:{...r,children:[a.jsx(n.Link,{href:"#storybook-root",isExternal:!0,children:"Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke og får et hengende innrykk."},"linkGroupLink_1"),a.jsx(n.Link,{href:"#storybook-root",svgPath:E,children:"Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke og får et hengende innrykk."},"linkGroupLink_2")]},argTypes:{children:{table:{disable:!1}}}},P=e=>a.jsxs(a.Fragment,{children:[a.jsx(n,{...e}),a.jsx(n,{...e})]}),m={render:P,name:"With Spacing (A3)",args:{...r,hasSpacing:!0},argTypes:{hasSpacing:{table:{disable:!1}}}},u={name:"With Color (A7)",args:{...r,color:"white"},argTypes:{color:{table:{disable:!1}}},parameters:{backgrounds:{default:"themePrimary"},imageSnapshot:{hover:`${t} > ul > li:first-child > a`,focus:`${t} > ul > li:first-child > a`,click:`${t} > ul > li:first-child > a`}}};var g,f,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,b,v;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    const linkGroup = canvas.getByRole('list');
    await expect(linkGroup).toHaveClass('dummyClassname');
    await expect(linkGroup).toHaveAttribute('id', 'htmlId');
    await expect(linkGroup).toHaveAttribute('lang', 'nb');
    await expect(linkGroup).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,A,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > ul > li:first-child > a\`,
      focus: \`\${wrapper} > ul > li:first-child > a\`,
      click: \`\${wrapper} > ul > li:first-child > a\`
    }
  }
} satisfies Story`,...(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var L,w,G;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  },
  parameters: {
    imageSnapshot: {
      hover: \`\${wrapper} > ul > li:first-child > a\`
    }
  }
} satisfies Story`,...(G=(w=c.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var T,x,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(W=(x=p.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var j,C,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var D,$,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
  parameters: {
    backgrounds: {
      default: 'themePrimary'
    },
    imageSnapshot: {
      hover: \`\${wrapper} > ul > li:first-child > a\`,
      focus: \`\${wrapper} > ul > li:first-child > a\`,
      click: \`\${wrapper} > ul > li:first-child > a\`
    }
  }
} satisfies Story`,...(F=($=u.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const Y=["WithRef","WithAttributes","Defaults","VariantAnchors","WithLongTextAndIcons","WithSpacing","WithColor"];export{d as Defaults,c as VariantAnchors,o as WithAttributes,u as WithColor,p as WithLongTextAndIcons,l as WithRef,m as WithSpacing,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=LinkGroup.test.stories-DW76lghB.js.map
