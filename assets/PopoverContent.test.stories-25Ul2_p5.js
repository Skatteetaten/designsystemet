import{j as t}from"./iframe-Cq9sN_Dz.js";import{P as u}from"./index-A7kidHJq.js";import{H as j,P as B}from"./index-DskRqDMQ.js";import{l as E}from"./storybook.testing.utils-BgHZnMzD.js";const{expect:n,within:m}=__STORYBOOK_MODULE_TEST__,F={component:u.Content,title:"Tester/Popover/Content",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},as:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}}},render:e=>t.jsx(u,{isOpen:!0,children:t.jsx(u.Content,{...e})}),tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},_="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",d={children:_},s={name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...d,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","en"),await n(a).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults",args:{...d},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await n(a.tagName.toLowerCase()).toBe("div")}},i={name:"With Markup (A6)",args:{...d,children:t.jsxs(t.Fragment,{children:[t.jsx(j,{as:"h1",level:4,children:"Avvist av kortutsteder"}),t.jsxs(B,{children:["Ta kontakt med kortutsteder for ",t.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]})},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},l={name:"With Scroll (A7)",args:{children:E.repeat(100)}},c={name:"As Span (A11)",args:{...d,as:"span"},argTypes:{as:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await n(a.tagName.toLowerCase()).toBe("span")}};var g,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,v,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    imageSnapshot: {
      disableSnapshot: true
    },
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'en');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var A,S,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Defaults',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container.tagName.toLowerCase()).toBe('div');
  }
} satisfies Story`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var x,T,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With Markup (A6)',
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
} satisfies Story`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var R,H,C;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With Scroll (A7)',
  args: {
    children: loremIpsum.repeat(100)
  }
} satisfies Story`,...(C=(H=l.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var I,P,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'As Span (A11)',
  args: {
    ...defaultArgs,
    as: 'span'
  },
  argTypes: {
    as: {
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
    await expect(container.tagName.toLowerCase()).toBe('span');
  }
} satisfies Story`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const D=["WithRef","WithAttributes","Defaults","WithMarkup","VerticalScroll","AsSpan"],V=Object.freeze(Object.defineProperty({__proto__:null,AsSpan:c,Defaults:o,VerticalScroll:l,WithAttributes:r,WithMarkup:i,WithRef:s,__namedExportsOrder:D,default:F},Symbol.toStringTag,{value:"Module"}));export{V as P};
//# sourceMappingURL=PopoverContent.test.stories-25Ul2_p5.js.map
