import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{S as t}from"./index-DnZXMkM7.js";import{w as b,e as s}from"./index-hUG6DWTw.js";import{s as R,a as J,b as _}from"./Spinner.types-RZy5JIMg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-e2J6NVvS.js";import"./base-props.types-BkCKQDF7.js";const V={component:t,title:"Tester/Spinner",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},size:{table:{disable:!0},control:"inline-radio",options:[...R]},titlePosition:{table:{disable:!0},control:"inline-radio",options:[...J]},color:{table:{disable:!0},control:"inline-radio",options:[..._]},hideTitle:{control:"boolean",table:{disable:!0}}}},r={name:"With Ref (FA1)",args:{ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=b(e).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=b(e).getByTestId("123ID");await s(a).toHaveAttribute("id","htmlid"),await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("lang","nb")}},l={name:"Defaults (B2)",argTypes:{children:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=await b(e).findByText("Laster inn");await s(a).toBeInTheDocument()}},i={name:"With Size, TitlePostition, Children (A1, A2, A4)",render:e=>n.jsxs(n.Fragment,{children:[n.jsx(t,{className:"bottomSpacingXL",size:"small",...e}),n.jsx(t,{className:"bottomSpacingXL",size:"medium",...e}),n.jsx(t,{className:"bottomSpacingXL",size:"large",...e}),n.jsx(t,{className:"bottomSpacingXL",titlePosition:"right",size:"small",...e}),n.jsx(t,{className:"bottomSpacingXL",titlePosition:"right",size:"medium",...e}),n.jsx(t,{className:"bottomSpacingXL",titlePosition:"right",size:"large",...e})]}),args:{children:"henter innhold"},argTypes:{children:{table:{disable:!1}},size:{table:{disable:!1}},titlePosition:{table:{disable:!1}}}},c={...i,name:"With Size, Text Postition, Children, Long Text (A1, A2, A4)",args:{children:"Henter årsmiddelkurs fra valutakurstjenesten"}},d={name:"With Color (A3)",render:e=>n.jsxs(n.Fragment,{children:[n.jsx(t,{className:"bottomSpacingXL",color:"black",size:"medium",...e,children:"Henter innhold"}),n.jsx(t,{color:"blue",size:"medium",...e,children:"Henter innhold"})]}),argTypes:{color:{table:{disable:!1}}}},m={name:"With Color Dark Background(A3)",args:{color:"white"},argTypes:{color:{table:{disable:!1}}},parameters:{backgrounds:{default:"dark"}}},g="laster data",p={name:"With HideTitle (B1)",args:{hideTitle:!0,children:g},argTypes:{hideTitle:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=await b(e).findByText(g);await s(a).toBeInTheDocument()}};var h,f,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,T,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var A,x,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var W,w,B;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var k,L,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...WithSizeAndPosition,
  name: 'With Size, Text Postition, Children, Long Text (A1, A2, A4)',
  args: {
    children: 'Henter årsmiddelkurs fra valutakurstjenesten'
  }
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var C,H,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies Story`,...(N=(H=d.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var E,D,X;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies Story`,...(X=(D=m.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};var F,j,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const Z=["WithRef","WithAttributes","Defaults","WithSizeAndPosition","WithSizeAndPositionLongText","WithColorsLightBackground","WithColorsDarkBackground","WithHideText"];export{l as Defaults,o as WithAttributes,m as WithColorsDarkBackground,d as WithColorsLightBackground,p as WithHideText,r as WithRef,i as WithSizeAndPosition,c as WithSizeAndPositionLongText,Z as __namedExportsOrder,V as default};
//# sourceMappingURL=Spinner.test.stories-CqmvCN2q.js.map
