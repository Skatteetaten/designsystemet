import{h as b,c as g,j as h}from"./iframe-BQX7p2fO.js";import{P as u}from"./index-muUccCgb.js";import{S as v}from"./icon.systems-WAvM-z7u.js";const{expect:a,fn:m,userEvent:f,waitFor:p,within:d}=__STORYBOOK_MODULE_TEST__,w=(e,n)=>async({canvasElement:t})=>{const y=d(t).getByRole("button");await a(y).toBeInTheDocument(),await a(y).toHaveAttribute(e,n)},S={component:u.Trigger,title:"Tester/Popover/Trigger",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},hideOutline:{table:{disable:!0}},size:{table:{disable:!0}},svgPath:{options:Object.keys(v),mapping:v,table:{disable:!0}},title:{table:{category:g.htmlAttribute,disable:!0}},ariaDescribedby:{table:{category:g.aria,disable:!0}},onFocus:{...b,table:{disable:!0}},onClick:{...b,table:{disable:!0}},onBlur:{...b,table:{disable:!0}}},render:e=>h.jsx(u,{children:h.jsx(u.Trigger,{...e})}),tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=d(e).getByRole("button");await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=d(e).getByRole("button");await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","en"),await a(t).toHaveAttribute("data-testid","123ID")}},i={name:"With AriaDescribedby",args:{ariaDescribedby:"araiDescId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:w("aria-describedby","araiDescId")},o={name:"With EventHandlers",args:{onFocus:m(),onBlur:m(),onClick:m()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:n})=>{const c=d(n).getByRole("button");await a(c).toBeInTheDocument(),c.focus(),await p(()=>a(e.onFocus).toHaveBeenCalled()),await f.tab(),await p(()=>a(e.onBlur).toHaveBeenCalled()),await f.click(c),await p(()=>a(e.onClick).toHaveBeenCalled())}},l={name:"Without Outline",args:{hideOutline:!0},argTypes:{hideOutline:{table:{disable:!1}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLButtonElement | null): void => {
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlId');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'en');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With AriaDescribedby',
  args: {
    ariaDescribedby: 'araiDescId'
  },
  argTypes: {
    ariaDescribedby: {
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
  play: verifyAttribute('aria-describedby', 'araiDescId')
} satisfies Story`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With EventHandlers',
  args: {
    onFocus: fn(),
    onBlur: fn(),
    onClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disableSnapshot: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    iconButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(iconButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Without Outline',
  args: {
    hideOutline: true
  },
  argTypes: {
    hideOutline: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...l.parameters?.docs?.source}}};const B=["WithRef","WithAttributes","WithAriaDescribedby","WithEventHandlers","WithoutOutline"],T=Object.freeze(Object.defineProperty({__proto__:null,WithAriaDescribedby:i,WithAttributes:r,WithEventHandlers:o,WithRef:s,WithoutOutline:l,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{T as P};
//# sourceMappingURL=PopoverTrigger.test.stories-BAIy2g0X.js.map
