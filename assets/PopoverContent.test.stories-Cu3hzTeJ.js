import{j as t}from"./iframe-s2_bNgHU.js";import{P as u}from"./index-C_DRppF7.js";import{H as g,P as b}from"./index-CJpzHRrE.js";import{l as f}from"./storybook.testing.utils-BgHZnMzD.js";const{expect:n,within:m}=__STORYBOOK_MODULE_TEST__,h={component:u.Content,title:"Tester/Popover/Content",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},as:{table:{disable:!0}},children:{table:{disable:!0},control:"text"},classNames:{table:{disable:!0}}},render:e=>t.jsx(u,{isOpen:!0,children:t.jsx(u.Content,{...e})}),tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},v="Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.",d={children:v},s={name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{...d,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0},a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await n(a).toHaveAttribute("id","htmlId"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","en"),await n(a).toHaveAttribute("data-testid","123ID")}},o={name:"Defaults",args:{...d},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await n(a.tagName.toLowerCase()).toBe("div")}},i={name:"With Markup (A6)",args:{...d,children:t.jsxs(t.Fragment,{children:[t.jsx(g,{as:"h1",level:4,children:"Avvist av kortutsteder"}),t.jsxs(b,{children:["Ta kontakt med kortutsteder for ",t.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]})},argTypes:{children:{table:{disable:!1},control:{disable:!0}}}},l={name:"With Scroll (A7)",args:{children:f.repeat(100)}},c={name:"As Span (A11)",args:{...d,as:"span"},argTypes:{as:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await n(a.tagName.toLowerCase()).toBe("span")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Scroll (A7)',
  args: {
    children: loremIpsum.repeat(100)
  }
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};const y=["WithRef","WithAttributes","Defaults","WithMarkup","VerticalScroll","AsSpan"],T=Object.freeze(Object.defineProperty({__proto__:null,AsSpan:c,Defaults:o,VerticalScroll:l,WithAttributes:r,WithMarkup:i,WithRef:s,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{T as P};
//# sourceMappingURL=PopoverContent.test.stories-Cu3hzTeJ.js.map
