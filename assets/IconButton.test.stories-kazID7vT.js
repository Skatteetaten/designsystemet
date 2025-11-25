import{j as a,g as aa,r as sa}from"./iframe-Cq9sN_Dz.js";import{a as t}from"./index-5qJDb17Q.js";import{g as ta,D as na,B as ia,h as ra}from"./index-B4tfeJ0Q.js";import{S as F}from"./icon.systems-BAELjml7.js";const{expect:n,fn:C,userEvent:I,waitFor:H,within:P}=__STORYBOOK_MODULE_TEST__,$e=ta,la=ra,oa=ia,da=na,R=(e,l)=>async({canvasElement:i})=>{const j=P(i).getByRole("button");await n(j).toBeInTheDocument(),await n(j).toHaveAttribute(e,l)},ca={component:t,title:"Tester/IconButton",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},brightness:{table:{disable:!0}},hasSpinner:{table:{disable:!0}},spinnerTitle:{table:{disable:!0}},isOutlined:{table:{disable:!0}},size:{table:{disable:!0}},svgPath:{table:{disable:!0},options:Object.keys(F),mapping:F},title:{table:{disable:!0}},accessKey:{table:{disable:!0}},disabled:{table:{disable:!0}},type:{table:{disable:!0}},ariaDescribedby:{table:{disable:!0}},ariaExpanded:{table:{disable:!0}},onBlur:{table:{disable:!0}},onClick:{table:{disable:!0}},onFocus:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},ea="dummy tekst accessible name",s={svgPath:$e,title:ea},o={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("id","dummyIdForwardedFromRef")},d={name:"With Attributes(FA2-5)",args:{...s,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const i=P(e).getByRole("button");await n(i).toHaveClass("dummyClassname"),await n(i).toHaveAttribute("id","htmlId"),await n(i).toHaveAttribute("lang","nb"),await n(i).toHaveAttribute("data-testid","123ID")}},c={name:"Defaults (A1, B1, B2)",args:{...s},argTypes:{svgPath:{table:{disable:!1}},title:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const l=P(e),i=l.getByRole("button");n(i).toHaveAttribute("type",aa());const r=i.querySelector("svg");await n(r).toHaveAttribute("viewBox","0 0 24 24"),await n(r).toHaveAttribute("aria-hidden","false"),await n(l.getByTitle(ea)).toBeInTheDocument()}},u={name:"With Outline (A1)",args:{...s,isOutlined:!0},argTypes:{isOutlined:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}}},m={name:"With Custom SVGPath (A1)",args:{...s,svgPath:a.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})},argTypes:{svgPath:{table:{disable:!1},control:{disable:!0}}}},b={name:"With Size Extra Small (A1)",args:{...s,size:"extraSmall"},argTypes:{size:{table:{disable:!1}}}},p={name:"With Size Small (A1)",args:{...s,size:"small"},argTypes:{size:{table:{disable:!1}}}},g={name:"With Size Large (A1)",args:{...s,size:"large"},argTypes:{size:{table:{disable:!1}}}},h={name:"With Size Extra Small and Outline (A1)",args:{...s,size:"extraSmall",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},S={name:"With Size Small and Outline (A1)",args:{...s,size:"small",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},f={name:"With Size Large and Outline (A1)",args:{...s,size:"large",isOutlined:!0},argTypes:{size:{table:{disable:!1}},isOutlined:{table:{disable:!1}}}},y={name:"With Disabled (B5)",args:{...s,disabled:!0},argTypes:{disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},play:async({canvasElement:e})=>{const l=P(e);n(l.getByRole("button")).toBeDisabled()}},v={name:"With Disabled And Outline (B5)",args:{...s,isOutlined:!0,disabled:!0},argTypes:{isOutlined:{table:{disable:!1}},disabled:{table:{disable:!1}}}},A={name:"With Type (B1)",args:{...s,type:"submit"},argTypes:{type:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("type","submit")},B={name:"With AriaDescribedby (B3)",args:{...s,ariaDescribedby:"araiDescId"},argTypes:{ariaDescribedby:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("aria-describedby","araiDescId")},W={name:"With AriaExpanded (B6)",args:{...s,ariaExpanded:!0},argTypes:{ariaExpanded:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("aria-expanded","true")},x={name:"With AccessKey (B4)",args:{...s,accessKey:"a"},argTypes:{accessKey:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:R("accessKey","a")},ua=e=>{const[l,i]=sa.useState($e);return a.jsx(t,{...e,svgPath:l,onFocus:r=>{i(la),e.onFocus&&e.onFocus(r)},onBlur:r=>{i(oa),e.onBlur&&e.onBlur(r)},onClick:r=>{i(da),e.onClick&&e.onClick(r)}})},O={render:ua,name:"With EventHandlers (A2 delvis)",args:{...s,onFocus:C(),onBlur:C(),onClick:C()},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({args:e,canvasElement:l})=>{const r=P(l).getByRole("button");await n(r).toBeInTheDocument(),r.focus(),await H(()=>n(e.onFocus).toHaveBeenCalled()),await I.tab(),await H(()=>n(e.onBlur).toHaveBeenCalled()),await I.click(r),await H(()=>n(e.onClick).toHaveBeenCalled())}},ma=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(t,{...e,hasSpinner:!1,size:"extraSmall",className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,hasSpinner:!1,size:"small",className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,hasSpinner:!1,className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,hasSpinner:!1,size:"large",isOutlined:!0})]}),a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(t,{...e,size:"extraSmall",className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,size:"small",className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,className:"marginRightM",isOutlined:!0}),a.jsx(t,{...e,size:"large",isOutlined:!0})]}),a.jsxs("div",{className:"bottomSpacingXL",children:[a.jsx(t,{...e,hasSpinner:!1,size:"extraSmall",className:"marginRightM"}),a.jsx(t,{...e,hasSpinner:!1,size:"small",className:"marginRightM"}),a.jsx(t,{...e,hasSpinner:!1,className:"marginRightM"}),a.jsx(t,{...e,hasSpinner:!1,size:"large"})]}),a.jsx(t,{...e,size:"extraSmall",className:"marginRightM"}),a.jsx(t,{...e,size:"small",className:"marginRightM"}),a.jsx(t,{...e,className:"marginRightM"}),a.jsx(t,{...e,size:"large"})]}),T={render:ma,name:"With Spinner (A4)",args:{...s,hasSpinner:!0},argTypes:{hasSpinner:{table:{disable:!1}}}},z={name:"With Brightness (A5)",args:{...s,brightness:"light"},argTypes:{brightness:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}},D={name:"With Brightness And Outline (A5)",args:{...s,brightness:"light",isOutlined:!0},argTypes:{brightness:{table:{disable:!1}},isOutlined:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}},w={name:"With Brightness And Spinner (A5)",args:{...s,brightness:"light",hasSpinner:!0},argTypes:{brightness:{table:{disable:!1}},hasSpinner:{table:{disable:!1}}},globals:{backgrounds:{value:"themePrimary"}}},E={name:"With Brightness And Disabled (A5)",args:{...s,brightness:"light",isOutlined:!0,disabled:!0},argTypes:{brightness:{table:{disable:!1}},isOutlined:{table:{disable:!1}},disabled:{table:{disable:!1}}},parameters:{imageSnapshot:{pseudoStates:["hover","focus-visible","active"]}},globals:{backgrounds:{value:"themePrimary"}}};var k,N,M;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...(M=(N=o.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var G,L,V;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
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
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    await expect(iconButton).toHaveClass('dummyClassname');
    await expect(iconButton).toHaveAttribute('id', 'htmlId');
    await expect(iconButton).toHaveAttribute('lang', 'nb');
    await expect(iconButton).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(V=(L=d.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,K,X;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Defaults (A1, B1, B2)',
  args: {
    ...defaultArgs
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      }
    },
    title: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');
    expect(iconButton).toHaveAttribute('type', getCommonButtonTypeDefault());
    const svg = iconButton.querySelector('svg');
    await expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(svg).toHaveAttribute('aria-hidden', 'false');
    await expect(canvas.getByTitle(accessibleName)).toBeInTheDocument();
  }
} satisfies Story`,...(X=(K=c.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var q,U,Y;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Outline (A1)',
  args: {
    ...defaultArgs,
    isOutlined: true
  },
  argTypes: {
    isOutlined: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  }
} satisfies Story`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,Q,Z;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With Custom SVGPath (A1)',
  args: {
    ...defaultArgs,
    svgPath: <path d={'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'} />
  },
  argTypes: {
    svgPath: {
      table: {
        disable: false
      },
      control: {
        disable: true
      }
    }
  }
} satisfies Story`,...(Z=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,ae;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With Size Extra Small (A1)',
  args: {
    ...defaultArgs,
    size: 'extraSmall'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,te,ne;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'With Size Small (A1)',
  args: {
    ...defaultArgs,
    size: 'small'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,re,le;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'With Size Large (A1)',
  args: {
    ...defaultArgs,
    size: 'large'
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(le=(re=g.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,de,ce;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With Size Extra Small and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'extraSmall',
    isOutlined: true
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    isOutlined: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(ce=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,be;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With Size Small and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'small',
    isOutlined: true
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    isOutlined: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(be=(me=S.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var pe,ge,he;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'With Size Large and Outline (A1)',
  args: {
    ...defaultArgs,
    size: 'large',
    isOutlined: true
  },
  argTypes: {
    size: {
      table: {
        disable: false
      }
    },
    isOutlined: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(he=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Se,fe,ye;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'With Disabled (B5)',
  args: {
    ...defaultArgs,
    disabled: true
  },
  argTypes: {
    disabled: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeDisabled();
  }
} satisfies Story`,...(ye=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,Ae,Be;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'With Disabled And Outline (B5)',
  args: {
    ...defaultArgs,
    isOutlined: true,
    disabled: true
  },
  argTypes: {
    isOutlined: {
      table: {
        disable: false
      }
    },
    disabled: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Be=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var We,xe,Oe;A.parameters={...A.parameters,docs:{...(We=A.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'With Type (B1)',
  args: {
    ...defaultArgs,
    type: 'submit'
  },
  argTypes: {
    type: {
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
  play: verifyAttribute('type', 'submit')
} satisfies Story`,...(Oe=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Oe.source}}};var Te,ze,De;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'With AriaDescribedby (B3)',
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(De=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var we,Ee,Pe;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'With AriaExpanded (B6)',
  args: {
    ...defaultArgs,
    ariaExpanded: true
  },
  argTypes: {
    ariaExpanded: {
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
  play: verifyAttribute('aria-expanded', 'true')
} satisfies Story`,...(Pe=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var Re,Ce,He;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'With AccessKey (B4)',
  args: {
    ...defaultArgs,
    accessKey: 'a'
  },
  argTypes: {
    accessKey: {
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
  play: verifyAttribute('accessKey', 'a')
} satisfies Story`,...(He=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var je,Fe,Ie;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A2 delvis)',
  args: {
    ...defaultArgs,
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
} satisfies Story`,...(Ie=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var ke,Ne,Me;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: TemplateWithSpinner,
  name: 'With Spinner (A4)',
  args: {
    ...defaultArgs,
    hasSpinner: true
  },
  argTypes: {
    hasSpinner: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(Me=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var Ge,Le,Ve;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'With Brightness (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light'
  },
  argTypes: {
    brightness: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...(Ve=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var _e,Ke,Xe;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'With Brightness And Outline (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    isOutlined: true
  },
  argTypes: {
    brightness: {
      table: {
        disable: false
      }
    },
    isOutlined: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...(Xe=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var qe,Ue,Ye;w.parameters={...w.parameters,docs:{...(qe=w.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'With Brightness And Spinner (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    hasSpinner: true
  },
  argTypes: {
    brightness: {
      table: {
        disable: false
      }
    },
    hasSpinner: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...(Ye=(Ue=w.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Je,Qe,Ze;E.parameters={...E.parameters,docs:{...(Je=E.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'With Brightness And Disabled (A5)',
  args: {
    ...defaultArgs,
    brightness: 'light',
    isOutlined: true,
    disabled: true
  },
  argTypes: {
    brightness: {
      table: {
        disable: false
      }
    },
    isOutlined: {
      table: {
        disable: false
      }
    },
    disabled: {
      table: {
        disable: false
      }
    }
  },
  parameters: {
    imageSnapshot: {
      pseudoStates: ['hover', 'focus-visible', 'active']
    }
  },
  globals: {
    backgrounds: {
      value: 'themePrimary'
    }
  }
} satisfies Story`,...(Ze=(Qe=E.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};const ba=["WithRef","WithAttributes","Defaults","WithOutline","WithCustomSVGPath","WithSizeExtraSmall","WithSizeSmall","WithSizeLarge","WithSizeExtraSmallAndOutline","WithSizeSmallAndOutline","WithSizeLargeAndOutline","WithDisabled","WithDisabledAndOutline","WithType","WithAriaDescribedby","WithAriaExpanded","WithAccesskey","WithEventHandlers","WithSpinner","WithBrightness","WithBrightnessAndOutline","WithBrightnessAndSpinner","WithBrightnessAndDisabled"],fa=Object.freeze(Object.defineProperty({__proto__:null,Defaults:c,WithAccesskey:x,WithAriaDescribedby:B,WithAriaExpanded:W,WithAttributes:d,WithBrightness:z,WithBrightnessAndDisabled:E,WithBrightnessAndOutline:D,WithBrightnessAndSpinner:w,WithCustomSVGPath:m,WithDisabled:y,WithDisabledAndOutline:v,WithEventHandlers:O,WithOutline:u,WithRef:o,WithSizeExtraSmall:b,WithSizeExtraSmallAndOutline:h,WithSizeLarge:g,WithSizeLargeAndOutline:f,WithSizeSmall:p,WithSizeSmallAndOutline:S,WithSpinner:T,WithType:A,__namedExportsOrder:ba,default:ca},Symbol.toStringTag,{value:"Module"}));export{fa as I};
//# sourceMappingURL=IconButton.test.stories-kazID7vT.js.map
