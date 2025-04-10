import{j as R}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-7h80QhK_.js";import{f as F,w as o,e as s,u as W,b as P}from"./index-DIxTUSTt.js";import{w as b}from"./storybook.testing.utils-CMs160i9.js";import{T as D}from"./TopBannerLangPickerButton-BWRgeVQq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EsEcB_zD.js";import"./index-vpaAjjI_.js";function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(null,arguments)}var M=function(n){return r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 1100 800"},n),r.createElement("path",{d:"M500 0h-50v350h650v-50H500zM450 450v350h50V500h600v-50zM350 450H0v50h300v300h50zM350 350V0h-50v300H0v50z",style:{fill:"#fff"}}),r.createElement("path",{d:"M0 0h300v300H0zM500 0h600v300H500zM0 500h300v300H0zM500 500h600v300H500z",style:{fill:"#ef2b2d"}}),r.createElement("path",{d:"M450 350V0H350v350H0v100h350v350h100V450h650V350z",style:{fill:"#002868"}}))};const K={component:D,title:"Tester/TopBanner/TopBannerLangPickerButton (intern)",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},classNames:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},flagIcon:{table:{disable:!0}},children:{table:{disable:!0}},ariaCurrent:{table:{disable:!0}},onClick:{table:{disable:!0}}}},g="Bokmål",i={flagIcon:R.jsx(M,{}),children:g},l={name:"With Ref (FA1)",args:{...i,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const t=o(e).getByRole("button");await s(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{...i,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=o(e).getByRole("button");await s(t).toHaveAttribute("id","htmlid"),await s(t).toHaveClass("dummyClassname"),await s(t).toHaveAttribute("lang","nb"),await s(t).toHaveAttribute("data-testid","123ID")}},u={name:"Defaults (LanguagePicker A1, B1, B2, C1 delvis)",args:{...i},argTypes:{flagIcon:{table:{disable:!1}},children:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:`${b} > button`,hover:`${b} > button`,click:`${b} > button`}},play:async({canvasElement:e})=>{const t=o(e).getByRole("button",{name:g});await s(t).toBeInTheDocument();const a=t.querySelector("svg");await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("aria-hidden","true")}},d={name:"With AriaCurrent (LanguagePicker A1, B2)",args:{...i,ariaCurrent:!0},argTypes:{ariaCurrent:{table:{disable:!1}}},play:async({canvasElement:e})=>{const t=o(e).getByRole("button",{name:g});await s(t).toHaveAttribute("aria-current","true");const a=t.querySelectorAll("svg")[1];await s(a).toBeInTheDocument(),await s(a).toHaveAttribute("aria-hidden","true")}},z=e=>{const[n,t]=r.useState("Klikk på meg");return R.jsx(D,{...e,onClick:a=>{t("Blitt klikket på"),e.onClick&&e.onClick(a)},children:n})},m={render:z,name:"With EventHandlers (LanguagePicker A4)",args:{...i,onClick:F()},parameters:{imageSnapshot:{disable:!0}},play:async({args:e,canvasElement:n})=>{const a=o(n).getByRole("button");await s(a).toBeInTheDocument(),await W.click(a),await P(()=>s(e.onClick).toHaveBeenCalled())}};var p,f,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,w,A;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var B,H,S;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
      focus: \`\${wrapper} > button\`,
      hover: \`\${wrapper} > button\`,
      click: \`\${wrapper} > button\`
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
} satisfies Story`,...(S=(H=u.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var k,T,x;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
} satisfies Story`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var C,E,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (LanguagePicker A4)',
  args: {
    ...defaultArgs,
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
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
} satisfies Story`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const G=["WithRef","WithAttributes","Defaults","WithAriaCurrent","WithEventHandlers"];export{u as Defaults,d as WithAriaCurrent,c as WithAttributes,m as WithEventHandlers,l as WithRef,G as __namedExportsOrder,K as default};
//# sourceMappingURL=TopBannerLangPickerButton.test.stories-Du63q-Fb.js.map
