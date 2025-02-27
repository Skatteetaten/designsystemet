import{j as a}from"./jsx-runtime-BYYWji4R.js";import{w as o,e as t}from"./index-DIxTUSTt.js";import{S as s}from"./index-C176R4Vg.js";import{s as O,a as Y,b as q}from"./Spinner.types-BfmXqgj4.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9wdQ6Rv.js";import"./base-props.types-sXyoNogd.js";const ne={component:s,title:"Tester/Spinner",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},size:{table:{disable:!0},control:"inline-radio",options:[...q]},titlePosition:{table:{disable:!0},control:"inline-radio",options:[...Y]},color:{table:{disable:!0},control:"inline-radio",options:[...O]},classNames:{table:{disable:!0}},percentComplete:{table:{disable:!0}},hideTitle:{control:"boolean",table:{disable:!0}}}},l={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=o(e).getAllByRole("generic")[1];await t(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},c={name:"With Attributes (FA2-5)",args:{id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=o(e).getByTestId("123ID");await t(n).toHaveAttribute("id","htmlid"),await t(n).toHaveClass("dummyClassname"),await t(n).toHaveAttribute("lang","nb")}},d={name:"Defaults (B2)",argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=await o(e).findByText("Laster inn");await t(n).toBeInTheDocument()}},r={name:"With Size, TitlePostition, Children (A1, A2, A4)",render:e=>a.jsxs(a.Fragment,{children:[a.jsx(s,{className:"bottomSpacingXL",size:"small",...e}),a.jsx(s,{className:"bottomSpacingXL",size:"medium",...e}),a.jsx(s,{className:"bottomSpacingXL",size:"large",...e}),a.jsx(s,{className:"bottomSpacingXL",titlePosition:"right",size:"small",...e}),a.jsx(s,{className:"bottomSpacingXL",titlePosition:"right",size:"medium",...e}),a.jsx(s,{className:"bottomSpacingXL",titlePosition:"right",size:"large",...e})]}),args:{children:"henter innhold"},argTypes:{children:{table:{disable:!1}},size:{table:{disable:!1}},titlePosition:{table:{disable:!1}}}},m={...r,name:"With Size, Text Postition, Children, Long Text (A1, A2, A4)",args:{children:"Henter årsmiddelkurs fra valutakurstjenesten"}},p={name:"With Color (A3)",render:e=>a.jsxs(a.Fragment,{children:[a.jsx(s,{className:"bottomSpacingXL",color:"black",size:"medium",...e,children:"Henter innhold"}),a.jsx(s,{color:"blue",size:"medium",...e,children:"Henter innhold"})]}),argTypes:{color:{table:{disable:!1}}}},b={name:"With Color Dark Background(A3)",args:{color:"white"},argTypes:{color:{table:{disable:!1}}},parameters:{backgrounds:{default:"dark"}}},h="laster data",u={name:"With HideTitle (B1)",args:{hideTitle:!0,children:h},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:e})=>{const n=await o(e).findByText(h);await t(n).toBeInTheDocument()}},g={name:"With PercentComplete (B3)",args:{percentComplete:50,children:h},argTypes:{percentComplete:{table:{disable:!1}}},play:async({canvasElement:e})=>{const i=o(e),n=i.getByRole("progressbar");await t(i.getByText("50 %")).toBeInTheDocument(),await t(n).toHaveAttribute("aria-busy","true"),await t(n).toHaveAttribute("aria-valuenow","50"),await t(n).toHaveAttribute("aria-valuemin","0"),await t(n).toHaveAttribute("aria-valuemax","100"),await t(n).toBeInTheDocument()}};var y,f,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = canvas.getAllByRole('generic')[1];
    await expect(spinner).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,S,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByTestId('123ID');
    await expect(spinner).toHaveAttribute('id', 'htmlid');
    await expect(spinner).toHaveClass('dummyClassname');
    await expect(spinner).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var x,w,B;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var W,z,P;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'With Size, TitlePostition, Children (A1, A2, A4)',
  render: (args): JSX.Element => {
    return <>
        <Spinner className={'bottomSpacingXL'} size={'small'} {...args} />
        <Spinner className={'bottomSpacingXL'} size={'medium'} {...args} />
        <Spinner className={'bottomSpacingXL'} size={'large'} {...args} />

        <Spinner className={'bottomSpacingXL'} titlePosition={'right'} size={'small'} {...args} />
        <Spinner className={'bottomSpacingXL'} titlePosition={'right'} size={'medium'} {...args} />
        <Spinner className={'bottomSpacingXL'} titlePosition={'right'} size={'large'} {...args} />
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
} satisfies Story`,...(P=(z=r.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var H,C,k;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...WithSizeAndPosition,
  name: 'With Size, Text Postition, Children, Long Text (A1, A2, A4)',
  args: {
    children: 'Henter årsmiddelkurs fra valutakurstjenesten'
  }
}`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var L,D,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var E,I,X;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Story`,...(X=(I=b.parameters)==null?void 0:I.docs)==null?void 0:X.source}}};var j,F,R;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
} satisfies Story`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var J,_,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
} satisfies Story`,...(M=(_=g.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const ae=["WithRef","WithAttributes","Defaults","WithSizeAndPosition","WithSizeAndPositionLongText","WithColorsLightBackground","WithColorsDarkBackground","WithHideText","WithPercent"];export{d as Defaults,c as WithAttributes,b as WithColorsDarkBackground,p as WithColorsLightBackground,u as WithHideText,g as WithPercent,l as WithRef,r as WithSizeAndPosition,m as WithSizeAndPositionLongText,ae as __namedExportsOrder,ne as default};
//# sourceMappingURL=Spinner.test.stories-D2Jq8d3L.js.map
