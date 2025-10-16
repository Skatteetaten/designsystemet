import{r,j as I}from"./iframe-DRo7xN6O.js";import{T as R}from"./TopBannerLangPickerButton-CIMt-Om0.js";function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},b.apply(null,arguments)}var D=function(n){return r.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 1100 800"},n),r.createElement("path",{d:"M500 0h-50v350h650v-50H500zM450 450v350h50V500h600v-50zM350 450H0v50h300v300h50zM350 350V0h-50v300H0v50z",style:{fill:"#fff"}}),r.createElement("path",{d:"M0 0h300v300H0zM500 0h600v300H500zM0 500h300v300H0zM500 500h600v300H500z",style:{fill:"#ef2b2d"}}),r.createElement("path",{d:"M450 350V0H350v350H0v100h350v350h100V450h650V350z",style:{fill:"#002868"}}))};const{expect:s,userEvent:F,within:d,waitFor:P,fn:W}=__STORYBOOK_MODULE_TEST__,_={component:R,title:"Tester/TopBanner/TopBannerLangPickerButton (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},flagIcon:{table:{disable:!0}},children:{table:{disable:!0}},ariaCurrent:{table:{disable:!0}},onClick:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},g="Bokmål",m={flagIcon:I.jsx(D,{}),children:g},o={name:"With Ref (FA1)",args:{...m,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=d(e).getByRole("button");await s(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5)",args:{...m,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=d(e).getByRole("button");await s(t).toHaveAttribute("id","htmlid"),await s(t).toHaveClass("dummyClassname"),await s(t).toHaveAttribute("lang","nb"),await s(t).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (LanguagePicker A1, B1, B2, C1 delvis)",args:{...m},argTypes:{flagIcon:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus","active"]}},play:async({canvasElement:e})=>{const t=d(e).getByRole("button",{name:g});await s(t).toBeInTheDocument();const a=t.querySelector("svg");await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("aria-hidden","true")}},c={name:"With AriaCurrent (LanguagePicker A1, B2)",args:{...m,ariaCurrent:!0},argTypes:{ariaCurrent:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=d(e).getByRole("button",{name:g});await s(t).toHaveAttribute("aria-current","true");const a=t.querySelectorAll("svg")[1];await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("aria-hidden","true")}},M=e=>{const[n,t]=r.useState("Klikk på meg");return I.jsx(R,{...e,onClick:a=>{t("Blitt klikket på"),e.onClick&&e.onClick(a)},children:n})},u={render:M,name:"With EventHandlers (LanguagePicker A4)",args:{...m,onClick:W()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:n})=>{const a=d(n).getByRole("button");await s(a).toBeInTheDocument(),await F.click(a),await P(()=>s(e.onClick).toHaveBeenCalled())}};var v,p,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,y,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
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
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('id', 'htmlid');
    await expect(button).toHaveClass('dummyClassname');
    await expect(button).toHaveAttribute('lang', 'nb');
    await expect(button).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,A,B;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Defaults (LanguagePicker A1, B1, B2, C1 delvis)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    flagIcon: {
      table: {
        disable: false
      }
    },
    children: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: buttonText
    });
    await expect(button).toBeInTheDocument();
    const flagSvg = button.querySelector('svg');
    await expect(flagSvg).toBeInTheDocument();
    await expect(flagSvg).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var T,H,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With AriaCurrent (LanguagePicker A1, B2)',
  args: {
    ...defaultArgs,
    ariaCurrent: true
  },
  argTypes: {
    ariaCurrent: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: buttonText
    });
    await expect(button).toHaveAttribute('aria-current', 'true');
    const checkSvg = button.querySelectorAll('svg')[1];
    await expect(checkSvg).toBeInTheDocument();
    await expect(checkSvg).toHaveAttribute('aria-hidden', 'true');
  }
} satisfies Story`,...(k=(H=c.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var x,E,C;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (LanguagePicker A4)',
  args: {
    ...defaultArgs,
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
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(C=(E=u.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const L=["WithRef","WithAttributes","Defaults","WithAriaCurrent","WithEventHandlers"],j=Object.freeze(Object.defineProperty({__proto__:null,Defaults:l,WithAriaCurrent:c,WithAttributes:i,WithEventHandlers:u,WithRef:o,__namedExportsOrder:L,default:_},Symbol.toStringTag,{value:"Module"}));export{j as T};
//# sourceMappingURL=TopBannerLangPickerButton.test.stories-CiUreWNj.js.map
