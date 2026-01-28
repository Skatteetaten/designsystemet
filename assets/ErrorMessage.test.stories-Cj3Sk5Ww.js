import{j as p}from"./iframe-CBOQuZmX.js";import"./index-D76sDZza.js";import{E as u}from"./DatePickerCalendar-DF1H3gtV.js";const{expect:t,within:m}=__STORYBOOK_MODULE_TEST__,h={component:u,title:"Tester/ErrorMessage",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},hasSpacing:{table:{disable:!0}},showError:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},b="Feilmelding",n={showError:!1,children:b},r={name:"With Ref (FA1)",args:{...n,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5, B1)",args:{...n,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",showError:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const s=m(e),a=s.getAllByRole("generic")[1],g=s.getAllByRole("generic")[2];await t(a).toHaveAttribute("id","htmlId"),await t(g).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},i={name:"Default (A1, A2)",args:{...n},play:async({canvasElement:e})=>{const a=m(e).getAllByRole("generic")[1];await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-live","assertive"),await t(a).toHaveAttribute("aria-atomic");const g=a.querySelector("p");await t(g).not.toBeInTheDocument()}},l={name:"With <p>-element (B1)",args:{...n,showError:!0},argTypes:{showError:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=m(e).getByText(b);await t(a.tagName).toBe("P")}},f=e=>p.jsx("div",{className:"errorMessageContainer",children:p.jsx(u,{...e})}),c={render:f,name:"With Long Text (A3)",args:{...n,showError:!0,children:"Dette blir en veldig lang feilmelding for å teste om du oppfører seg om den skal."},argTypes:{children:{table:{disable:!1}}}},d={render:f,name:"With Long Text And Breaking",args:{...n,showError:!0,children:"Detteblirenveldiglangfeilmeldingforåtesteomduoppførersegomdenskal."},argTypes:{children:{table:{disable:!1}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...d.parameters?.docs?.source}}};const y=["WithRef","WithAttributes","Defaults","WithPElement","WithLongText","WithLongTextAndBreaking"],T=Object.freeze(Object.defineProperty({__proto__:null,Defaults:i,WithAttributes:o,WithLongText:c,WithLongTextAndBreaking:d,WithPElement:l,WithRef:r,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{T as E};
//# sourceMappingURL=ErrorMessage.test.stories-Cj3Sk5Ww.js.map
