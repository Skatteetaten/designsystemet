import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import"./index-CPXmgfFQ.js";import{w as m,e as t}from"./index-B8otpkpo.js";import{E as N}from"./DatePickerCalendar-C0jMV8LR.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BSjcMZTJ.js";import"./Help-C76d9zSg.js";import"./index-PT2LozU0.js";import"./index-BU2UjPj9.js";import"./index-DoWIm2Z4.js";import"./LabelWithHelp-CLPg-H2L.js";import"./index-BFUMlpsH.js";import"./index-i_3--Rbb.js";const V={component:N,title:"Tester/ErrorMessage",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},showError:{table:{disable:!0}}}},F="Feilmelding",n={showError:!1,children:F},s={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},i={name:"With Attributes (FA2-5, B1)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",showError:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=m(e),a=r.getAllByRole("generic")[1],g=r.getAllByRole("generic")[2];await t(a).toHaveAttribute("id","htmlId"),await t(g).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},o={name:"Default (A1, A2)",args:{...n},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-live","assertive"),await t(a).toHaveAttribute("aria-atomic");const g=a.querySelector("p");await t(g).not.toBeInTheDocument()}},l={name:"With <p>-element (B1)",args:{...n,showError:!0},argTypes:{showError:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=m(e).getByText(F);await t(a.tagName).toBe("P")}},L=e=>p.jsx("div",{className:"errorMessageContainer",children:p.jsx(N,{...e})}),c={render:L,name:"With Long Text (A3)",args:{...n,showError:!0,children:"Dette blir en veldig lang feilmelding for å teste om du oppfører seg om den skal."},argTypes:{children:{table:{disable:!1}}}},d={render:L,name:"With Long Text And Breaking",args:{...n,showError:!0,children:"Detteblirenveldiglangfeilmeldingforåtesteomduoppførersegomdenskal."},argTypes:{children:{table:{disable:!1}}}};var u,b,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,y,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var A,w,x;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    // eslint-disable-next-line testing-library/no-node-access
    const textNode = container.querySelector('p');
    await expect(textNode).not.toBeInTheDocument();
  }
} satisfies Story`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var T,E,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
} satisfies Story`,...(B=(E=l.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var W,I,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
} satisfies Story`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var R,H,S;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};const X=["WithRef","WithAttributes","Defaults","WithPElement","WithLongText","WithLongTextAndBreaking"];export{o as Defaults,i as WithAttributes,c as WithLongText,d as WithLongTextAndBreaking,l as WithPElement,s as WithRef,X as __namedExportsOrder,V as default};
//# sourceMappingURL=ErrorMessage.test.stories-BgNaYtv7.js.map
