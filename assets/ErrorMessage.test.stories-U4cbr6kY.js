import{j as p}from"./iframe-DRo7xN6O.js";import"./index-CJxdEpCy.js";import{E as N}from"./DatePickerCalendar-CUYwtYgr.js";const{expect:t,within:m}=__STORYBOOK_MODULE_TEST__,L={component:N,title:"Tester/ErrorMessage",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},showError:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},F="Feilmelding",n={showError:!1,children:F},r={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5, B1)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",showError:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const s=m(e),a=s.getAllByRole("generic")[1],g=s.getAllByRole("generic")[2];await t(a).toHaveAttribute("id","htmlId"),await t(g).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},i={name:"Default (A1, A2)",args:{...n},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-live","assertive"),await t(a).toHaveAttribute("aria-atomic");const g=a.querySelector("p");await t(g).not.toBeInTheDocument()}},l={name:"With <p>-element (B1)",args:{...n,showError:!0},argTypes:{showError:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=m(e).getByText(F);await t(a.tagName).toBe("P")}},_=e=>p.jsx("div",{className:"errorMessageContainer",children:p.jsx(N,{...e})}),c={render:_,name:"With Long Text (A3)",args:{...n,showError:!0,children:"Dette blir en veldig lang feilmelding for å teste om du oppfører seg om den skal."},argTypes:{children:{table:{disable:!1}}}},d={render:_,name:"With Long Text And Breaking",args:{...n,showError:!0,children:"Detteblirenveldiglangfeilmeldingforåtesteomduoppførersegomdenskal."},argTypes:{children:{table:{disable:!1}}}};var u,b,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,y,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5, B1)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    showError: true
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
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    const errorMessage = canvas.getAllByRole('generic')[2];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(errorMessage).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var A,w,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Default (A1, A2)',
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute('aria-live', 'assertive');
    await expect(container).toHaveAttribute('aria-atomic');
    const textNode = container.querySelector('p');
    await expect(textNode).not.toBeInTheDocument();
  }
} satisfies Story`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var x,E,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With <p>-element (B1)',
  args: {
    ...defaultArgs,
    showError: true
  },
  argTypes: {
    showError: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const textNode = canvas.getByText(defaultText);
    await expect(textNode.tagName).toBe('P');
  }
} satisfies Story`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var B,W,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: TemplateWithInput,
  name: 'With Long Text (A3)',
  args: {
    ...defaultArgs,
    showError: true,
    children: 'Dette blir en veldig lang feilmelding for å teste om du oppfører seg om den skal.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var D,R,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: TemplateWithInput,
  name: 'With Long Text And Breaking',
  args: {
    ...defaultArgs,
    showError: true,
    children: 'Detteblirenveldiglangfeilmeldingforåtesteomduoppførersegomdenskal.'
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const M=["WithRef","WithAttributes","Defaults","WithPElement","WithLongText","WithLongTextAndBreaking"],O=Object.freeze(Object.defineProperty({__proto__:null,Defaults:i,WithAttributes:o,WithLongText:c,WithLongTextAndBreaking:d,WithPElement:l,WithRef:r,__namedExportsOrder:M,default:L},Symbol.toStringTag,{value:"Module"}));export{O as E};
//# sourceMappingURL=ErrorMessage.test.stories-U4cbr6kY.js.map
