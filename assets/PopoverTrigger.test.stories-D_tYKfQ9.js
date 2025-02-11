import{j as y}from"./jsx-runtime-CfatFE5O.js";import{w as c,e as a,f as d,b as m,u as v}from"./index-XVqkR3zt.js";import{P as b}from"./index-D1Hhakcg.js";import{c as g,h as u}from"./helpers-Dccz2jQ-.js";import{S as f}from"./icon.systems-C3YHcMhe.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CT5qi75N.js";import"./index-qxaMszO_.js";import"./index-BYj_oXFq.js";import"./index-DVxy_Kbo.js";import"./index-DdP4wgFW.js";import"./index-ZuzByk-F.js";import"./index-DOHHf95q.js";import"./DatePickerCalendar-DkH0XVvE.js";import"./LabelWithHelp-CBkTgz7a.js";import"./Help-DD2Qmlbx.js";import"./index-DDpvzByM.js";import"./index-Deg9i1H2.js";import"./icon.utils-BQ79h5X2.js";const R=(e,n)=>async({canvasElement:t})=>{const p=c(t).getByRole("button");await a(p).toBeInTheDocument(),await a(p).toHaveAttribute(e,n)},Z={component:b.Trigger,title:"Tester/Popover/Trigger",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},size:{table:{disable:!0}},svgPath:{options:Object.keys(f),mapping:f,table:{disable:!0}},title:{table:{category:g.htmlAttribute,disable:!0}},ariaDescribedby:{table:{category:g.aria,disable:!0}},onFocus:{...u,table:{disable:!0}},onClick:{...u,table:{disable:!0}},onBlur:{...u,table:{disable:!0}}},render:e=>y.jsx(b,{children:y.jsx(b.Trigger,{...e})})},r={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=c(e).getByRole("button");await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=c(e).getByRole("button");await a(t).toHaveAttribute("id","htmlId"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","en"),await a(t).toHaveAttribute("data-testid","123ID")}},o={name:"With AriaDescribedby",args:{ariaDescribedby:"araiDescId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("aria-describedby","araiDescId")},l={name:"With EventHandlers",args:{onFocus:d(),onBlur:d(),onClick:d()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const s=c(n).getByRole("button");await a(s).toBeInTheDocument(),s.focus(),await m(()=>a(e.onFocus).toHaveBeenCalled()),await v.tab(),await m(()=>a(e.onBlur).toHaveBeenCalled()),await v.click(s),await m(()=>a(e.onClick).toHaveBeenCalled())}};var h,w,B;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    iconButton.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
    await userEvent.click(iconButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const $=["WithRef","WithAttributes","WithAriaDescribedby","WithEventHandlers"];export{o as WithAriaDescribedby,i as WithAttributes,l as WithEventHandlers,r as WithRef,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=PopoverTrigger.test.stories-D_tYKfQ9.js.map
