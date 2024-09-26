import{j as h}from"./jsx-runtime-Nms4Y4qS.js";import{S as g}from"./index-DrpnSDyL.js";import{d as k}from"./index-e2J6NVvS.js";import{w as O}from"./index-nyVGXzax.js";import{f as _,w as b,e as n}from"./index-hUG6DWTw.js";import{l as r}from"./storybook.testing.utils-CMs160i9.js";import{c as e}from"./helpers-Dccz2jQ-.js";import{S as v}from"./icon.systems-Dz6DRmJR.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C4S6bjjo.js";import"./index-DnZXMkM7.js";import"./index-C5i69K7H.js";import"./index-BpsKvWdW.js";import"./icon.utils-CFaC4F3v.js";const M=["active","passive","positiveResult","neutralResult"],ie={component:g.Step,title:"Tester/StepList/Step",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},introContent:{table:{disable:!0,category:e.props}},introTitle:{table:{disable:!0,category:e.props}},introTitleAs:{table:{disable:!0,category:e.props}},stepTitle:{table:{disable:!0,category:e.props}},titleAs:{table:{disable:!0,category:e.props}},children:{table:{disable:!0,category:e.props}},onEdit:{table:{disable:!0,category:e.props}},onNext:{table:{disable:!0,category:e.props}},editButtonText:{table:{disable:!0,category:e.props}},nextButtonText:{table:{disable:!0,category:e.props}},nextButtonProps:{table:{disable:!0,category:e.props}},hasResultContentFullWidth:{table:{disable:!0,category:e.props}},title:{table:{disable:!0,category:e.props}},stepNumber:{table:{disable:!0,category:e.props}},svgPath:{options:Object.keys(v),mapping:v,table:{disable:!0,category:e.props}},svgTitle:{table:{disable:!0,category:e.props}},variant:{options:[...M],control:"inline-radio",table:{disable:!0,category:e.props}}}},G={stepNumber:1,title:"title",onNext:_()},i=t=>h.jsx(g,{children:h.jsx(g.Step,{...t})}),l={render:i,name:"With Ref (FA1)",args:{...G,ref:t=>{t&&(t.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:t})=>{const a=b(t).getByRole("listitem");await n(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={render:i,name:"With Attributes (FA2-5)",args:{...G,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=b(t).getByTestId("123ID");await n(a).toHaveAttribute("id","htmlid"),await n(a).toHaveClass("dummyClassname"),await n(a).toHaveAttribute("lang","nb")}},d={render:i,name:"With icon, titleAs, svgTitle, children (A4)",args:{variant:"active",title:"jeg er en tittel",titleAs:"h2",children:r,svgPath:O,svgTitle:"svg-tittel",onEdit:void 0},argTypes:{children:{table:{disable:!1}},title:{table:{disable:!1}},titleAs:{table:{disable:!1}},svgPath:{table:{disable:!1}}},play:async({canvasElement:t})=>{const s=b(t),a=s.getByRole("heading");await n(s.getByText("jeg er en tittel")).toBeInTheDocument(),await n(s.getByTitle("svg-tittel")).toBeInTheDocument(),await n(s.getByText(r)).toBeInTheDocument(),await n(a.tagName).toBe("H2")}},c={render:i,name:"With full width content in result (A10)",args:{variant:"neutralResult",title:"jeg er en tittel",children:r,onEdit:void 0,hasResultContentFullWidth:!0},argTypes:{hasResultContentFullWidth:{table:{disable:!1}}}},p={render:i,name:"With edit button accessible description (B2 delvis)",args:{stepNumber:1,variant:"active",title:"tittel",children:r,onEdit:_()},argTypes:{title:{table:{disable:!1}}},play:async({canvasElement:t})=>{const a=b(t).getByRole("button",{name:k.t("ds_collections:steplist.Edit")});n(a).toHaveAccessibleDescription("tittel")},parameters:{imageSnapshot:{disable:!0}}},m={render:i,name:"With Spinner In Next Button",args:{stepNumber:1,variant:"active",title:"tittel",children:r,nextButtonProps:{hasSpinner:!0},onNext:()=>console.log("next")},argTypes:{nextButtonProps:{table:{disable:!1}}}},u={render:i,name:"With Disabled Next Button",args:{stepNumber:1,variant:"active",title:"tittel",children:r,nextButtonProps:{disabled:!0},onNext:()=>console.log("next")},argTypes:{nextButtonProps:{table:{disable:!1}}}};var y,f,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLLIElement | null): void => {
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
    const step = canvas.getByRole('listitem');
    await expect(step).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,B,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
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
    const stepList = canvas.getByTestId('123ID');
    await expect(stepList).toHaveAttribute('id', 'htmlid');
    await expect(stepList).toHaveClass('dummyClassname');
    await expect(stepList).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var A,W,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  name: 'With icon, titleAs, svgTitle, children (A4)',
  args: {
    variant: 'active',
    title: 'jeg er en tittel',
    titleAs: 'h2',
    children: loremIpsum,
    svgPath: TimersandSVGpath,
    svgTitle: 'svg-tittel',
    onEdit: undefined
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    title: {
      table: {
        disable: false
      }
    },
    titleAs: {
      table: {
        disable: false
      }
    },
    svgPath: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading');
    await expect(canvas.getByText('jeg er en tittel')).toBeInTheDocument();
    await expect(canvas.getByTitle('svg-tittel')).toBeInTheDocument();
    await expect(canvas.getByText(loremIpsum)).toBeInTheDocument();
    await expect(heading.tagName).toBe('H2');
  }
} satisfies Story`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var w,N,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  name: 'With full width content in result (A10)',
  args: {
    variant: 'neutralResult',
    title: 'jeg er en tittel',
    children: loremIpsum,
    onEdit: undefined,
    hasResultContentFullWidth: true
  },
  argTypes: {
    hasResultContentFullWidth: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,F,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  name: 'With edit button accessible description (B2 delvis)',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    onEdit: fn()
  },
  argTypes: {
    title: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const endreButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_collections:steplist.Edit')
    });
    expect(endreButton).toHaveAccessibleDescription('tittel');
  },
  parameters: {
    imageSnapshot: {
      disable: true
    }
  }
} satisfies Story`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var D,H,C;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  name: 'With Spinner In Next Button',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    nextButtonProps: {
      hasSpinner: true
    },
    onNext: (): void => console.log('next')
  },
  argTypes: {
    nextButtonProps: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(C=(H=m.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var j,L,V;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Template,
  name: 'With Disabled Next Button',
  args: {
    stepNumber: 1,
    variant: 'active',
    title: 'tittel',
    children: loremIpsum,
    nextButtonProps: {
      disabled: true
    },
    onNext: (): void => console.log('next')
  },
  argTypes: {
    nextButtonProps: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(V=(L=u.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const re=["WithRef","WithAttributes","WithIconTitleAS","WithFullWidthResult","WithEditAccessibleDescription","NextButtonWithSpinner","NextButtonWithDisabled"];export{u as NextButtonWithDisabled,m as NextButtonWithSpinner,o as WithAttributes,p as WithEditAccessibleDescription,c as WithFullWidthResult,d as WithIconTitleAS,l as WithRef,re as __namedExportsOrder,ie as default};
//# sourceMappingURL=StepListStep.test.stories-ovlCUbS2.js.map
