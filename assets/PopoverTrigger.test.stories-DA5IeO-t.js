import{j as y}from"./jsx-runtime-Nms4Y4qS.js";import{P as d}from"./index-oxXuVSoz.js";import{w as c,e,f as b,c as m,u as v}from"./index-hUG6DWTw.js";import{c as g,h as u}from"./helpers-Dccz2jQ-.js";import{S as f}from"./icon.systems-Dz6DRmJR.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C4S6bjjo.js";import"./index-e2J6NVvS.js";import"./index-nyVGXzax.js";import"./index-DnZXMkM7.js";import"./index-BpsKvWdW.js";import"./index-B8XB3FuZ.js";import"./icon.utils-CFaC4F3v.js";const R=(a,n)=>async({canvasElement:t})=>{const p=c(t).getByRole("button");await e(p).toBeInTheDocument(),await e(p).toHaveAttribute(a,n)},J={component:d.Trigger,title:"Tester/Popover/Trigger",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},svgPath:{options:Object.keys(f),mapping:f,table:{disable:!0}},title:{table:{category:g.htmlAttribute,disable:!0}},ariaDescribedby:{table:{category:g.aria,disable:!0}},onFocus:{...u,table:{disable:!0}},onClick:{...u,table:{disable:!0}},onBlur:{...u,table:{disable:!0}}},render:a=>y.jsx(d,{children:y.jsx(d.Trigger,{...a})})},r={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:a})=>{const t=c(a).getByRole("button");await e(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const t=c(a).getByRole("button");await e(t).toHaveAttribute("id","htmlId"),await e(t).toHaveClass("dummyClassname"),await e(t).toHaveAttribute("lang","en"),await e(t).toHaveAttribute("data-testid","123ID")}},o={name:"With AriaDescribedby",args:{ariaDescribedby:"araiDescId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("aria-describedby","araiDescId")},l={name:"With EventHandlers",args:{onFocus:b(),onBlur:b(),onClick:b()},parameters:{imageSnapshot:{disable:!0}},play:async({args:a,canvasElement:n})=>{const s=c(n).getByRole("button");await e(s).toBeInTheDocument(),await s.focus(),await m(()=>e(a.onFocus).toHaveBeenCalled()),await v.tab(),await m(()=>e(a.onBlur).toHaveBeenCalled()),await v.click(s),await m(()=>e(a.onClick).toHaveBeenCalled())}};var h,w,B;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var A,H,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(H=i.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var F,I,C;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var E,S,x;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With EventHandlers',
  args: {
    onFocus: fn(),
    onBlur: fn(),
    onClick: fn()
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  },
  play: async ({
    args,
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toBeInTheDocument();
    await iconButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(iconButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const K=["WithRef","WithAttributes","WithAriaDescribedby","WithEventHandlers"];export{o as WithAriaDescribedby,i as WithAttributes,l as WithEventHandlers,r as WithRef,K as __namedExportsOrder,J as default};
//# sourceMappingURL=PopoverTrigger.test.stories-DA5IeO-t.js.map
