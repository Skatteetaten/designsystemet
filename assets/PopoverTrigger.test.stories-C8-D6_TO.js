import{j as y,h as d,e as g}from"./iframe-VHQh6taY.js";import{P as b}from"./index-CqsuB6cf.js";import{S as v}from"./icon.systems-pjRjKMCZ.js";const{expect:a,fn:m,userEvent:f,waitFor:u,within:c}=__STORYBOOK_MODULE_TEST__,h=(e,n)=>async({canvasElement:t})=>{const p=c(t).getByRole("button");await a(p).toBeInTheDocument(),await a(p).toHaveAttribute(e,n)},w={component:b.Trigger,title:"Tester/Popover/Trigger",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},svgPath:{options:Object.keys(v),mapping:v,table:{disable:!0}},title:{table:{category:g.htmlAttribute,disable:!0}},ariaDescribedby:{table:{category:g.aria,disable:!0}},onFocus:{...d,table:{disable:!0}},onClick:{...d,table:{disable:!0}},onBlur:{...d,table:{disable:!0}}},render:e=>y.jsx(b,{children:y.jsx(b.Trigger,{...e})}),tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},s={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=c(e).getByRole("button");await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},r={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=c(e).getByRole("button");await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","en"),await a(t).toHaveAttribute("data-testid","123ID")}},i={name:"With AriaDescribedby",args:{ariaDescribedby:"araiDescId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:h("aria-describedby","araiDescId")},o={name:"With EventHandlers",args:{onFocus:m(),onBlur:m(),onClick:m()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:n})=>{const l=c(n).getByRole("button");await a(l).toBeInTheDocument(),l.focus(),await u(()=>a(e.onFocus).toHaveBeenCalled()),await f.tab(),await u(()=>a(e.onBlur).toHaveBeenCalled()),await f.click(l),await u(()=>a(e.onClick).toHaveBeenCalled())}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      disable: true
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
} satisfies Story`,...o.parameters?.docs?.source}}};const B=["WithRef","WithAttributes","WithAriaDescribedby","WithEventHandlers"],H=Object.freeze(Object.defineProperty({__proto__:null,WithAriaDescribedby:i,WithAttributes:r,WithEventHandlers:o,WithRef:s,__namedExportsOrder:B,default:w},Symbol.toStringTag,{value:"Module"}));export{H as P};
//# sourceMappingURL=PopoverTrigger.test.stories-C8-D6_TO.js.map
