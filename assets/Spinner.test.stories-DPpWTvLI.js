import{j as n}from"./iframe-C2uFIQ6s.js";import{S as s}from"./index-wTBO3won.js";const{expect:t,within:g}=__STORYBOOK_MODULE_TEST__,J={component:s,title:"Tester/Spinner",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},size:{table:{disable:!0},control:"inline-radio"},titlePosition:{table:{disable:!0},control:"inline-radio"},color:{table:{disable:!0},control:"inline-radio"},classNames:{table:{disable:!0}},percentComplete:{table:{disable:!0}},hideTitle:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},o={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=g(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},l={name:"With Attributes (FA2-5)",args:{id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=g(e).getByTestId("123ID");await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb")}},c={name:"Defaults (B2)",argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=await g(e).findByText("Laster inn");await t(a).toBeInTheDocument()}},r={name:"With Size, TitlePostition, Children (A1, A2, A4)",render:e=>n.jsxs(n.Fragment,{children:[n.jsx(s,{className:"bottomSpacingXL",size:"small",...e}),n.jsx(s,{className:"bottomSpacingXL",size:"medium",...e}),n.jsx(s,{className:"bottomSpacingXL",size:"large",...e}),n.jsx(s,{className:"bottomSpacingXL",size:"extraLarge",...e}),n.jsx(s,{className:"bottomSpacingXL",titlePosition:"right",size:"small",...e}),n.jsx(s,{className:"bottomSpacingXL",titlePosition:"right",size:"medium",...e}),n.jsx(s,{className:"bottomSpacingXL",titlePosition:"right",size:"large",...e}),n.jsx(s,{className:"bottomSpacingXL",titlePosition:"right",size:"extraLarge",...e})]}),args:{children:"henter innhold"},argTypes:{children:{table:{disable:!1}},size:{table:{disable:!1}},titlePosition:{table:{disable:!1}}}},d={...r,name:"With Size, Text Postition, Children, Long Text (A1, A2, A4)",args:{children:"Henter årsmiddelkurs fra valutakurstjenesten"}},m={name:"With Color (A3)",render:e=>n.jsxs(n.Fragment,{children:[n.jsx(s,{className:"bottomSpacingXL",color:"black",size:"medium",...e,children:"Henter innhold"}),n.jsx(s,{color:"blue",size:"medium",...e,children:"Henter innhold"})]}),argTypes:{color:{table:{disable:!1}}}},p={name:"With Color Dark Background(A3)",args:{color:"white"},argTypes:{color:{table:{disable:!1}}},globals:{backgrounds:{value:"dark"}}},h="laster data",b={name:"With HideTitle (B1)",args:{hideTitle:!0,children:h},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=await g(e).findByText(h);await t(a).toBeInTheDocument()}},u={name:"With PercentComplete (B3)",args:{percentComplete:50,children:h},argTypes:{percentComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const i=g(e),a=i.getByRole("progressbar");await t(i.getByText("50 %")).toBeInTheDocument(),await t(a).toHaveAttribute("aria-busy","true"),await t(a).toHaveAttribute("aria-valuenow","50"),await t(a).toHaveAttribute("aria-valuemin","0"),await t(a).toHaveAttribute("aria-valuemax","100"),await t(a).toBeInTheDocument()}};var S,y,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
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
    const spinner = canvas.getAllByRole('generic')[1];
    await expect(spinner).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,T,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
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
    const spinner = canvas.getByTestId('123ID');
    await expect(spinner).toHaveAttribute('id', 'htmlid');
    await expect(spinner).toHaveClass('dummyClassname');
    await expect(spinner).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var A,w,B;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Defaults (B2)',
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = await canvas.findByText('Laster inn');
    await expect(spinner).toBeInTheDocument();
  }
} satisfies Story`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var z,W,L;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'With Size, TitlePostition, Children (A1, A2, A4)',
  render: (args): JSX.Element => {
    return <>
        <Spinner className={'bottomSpacingXL'} size={'small'} {...args} />
        <Spinner className={'bottomSpacingXL'} size={'medium'} {...args} />
        <Spinner className={'bottomSpacingXL'} size={'large'} {...args} />
        <Spinner className={'bottomSpacingXL'} size={'extraLarge'} {...args} />

        <Spinner className={'bottomSpacingXL'} titlePosition={'right'} size={'small'} {...args} />
        <Spinner className={'bottomSpacingXL'} titlePosition={'right'} size={'medium'} {...args} />
        <Spinner className={'bottomSpacingXL'} titlePosition={'right'} size={'large'} {...args} />
        <Spinner className={'bottomSpacingXL'} titlePosition={'right'} size={'extraLarge'} {...args} />
      </>;
  },
  args: {
    children: 'henter innhold'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    size: {
      table: {
        disable: false
      }
    },
    titlePosition: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(L=(W=r.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var P,H,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...WithSizeAndPosition,
  name: 'With Size, Text Postition, Children, Long Text (A1, A2, A4)',
  args: {
    children: 'Henter årsmiddelkurs fra valutakurstjenesten'
  }
}`,...(C=(H=d.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var N,k,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'With Color (A3)',
  render: (args): JSX.Element => {
    return <>
        <Spinner className={'bottomSpacingXL'} color={'black'} size={'medium'} {...args}>
          {'Henter innhold'}
        </Spinner>
        <Spinner color={'blue'} size={'medium'} {...args}>
          {'Henter innhold'}
        </Spinner>
      </>;
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var E,X,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With Color Dark Background(A3)',
  args: {
    color: 'white'
  },
  argTypes: {
    color: {
      table: {
        disable: false
      }
    }
  },
  globals: {
    backgrounds: {
      value: 'dark'
    }
  }
} satisfies Story`,...(j=(X=p.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var I,F,R;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With HideTitle (B1)',
  args: {
    hideTitle: true,
    children: spinnerTitle
  },
  argTypes: {
    hideTitle: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    // vi må bruke findBy i stedet for getBY her siden det er en liten delay før teksten rendres
    const spinnerTitleElement = await canvas.findByText(spinnerTitle);
    await expect(spinnerTitleElement).toBeInTheDocument();
  }
} satisfies Story`,...(R=(F=b.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var _,O,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With PercentComplete (B3)',
  args: {
    percentComplete: 50,
    children: spinnerTitle
  },
  argTypes: {
    percentComplete: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('progressbar');
    await expect(canvas.getByText('50 %')).toBeInTheDocument();
    await expect(spinner).toHaveAttribute('aria-busy', 'true');
    await expect(spinner).toHaveAttribute('aria-valuenow', '50');
    await expect(spinner).toHaveAttribute('aria-valuemin', '0');
    await expect(spinner).toHaveAttribute('aria-valuemax', '100');
    await expect(spinner).toBeInTheDocument();
  }
} satisfies Story`,...(M=(O=u.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const Y=["WithRef","WithAttributes","Defaults","WithSizeAndPosition","WithSizeAndPositionLongText","WithColorsLightBackground","WithColorsDarkBackground","WithHideText","WithPercent"],q=Object.freeze(Object.defineProperty({__proto__:null,Defaults:c,WithAttributes:l,WithColorsDarkBackground:p,WithColorsLightBackground:m,WithHideText:b,WithPercent:u,WithRef:o,WithSizeAndPosition:r,WithSizeAndPositionLongText:d,__namedExportsOrder:Y,default:J},Symbol.toStringTag,{value:"Module"}));export{q as S};
//# sourceMappingURL=Spinner.test.stories-DPpWTvLI.js.map
