import{E as v}from"./index-CJloTDHB.js";import{w as i,e as t}from"./index-hUG6DWTw.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-e2J6NVvS.js";import"./DatePickerCalendar-Bhlu0kBA.js";import"./index-C4S6bjjo.js";import"./index-nyVGXzax.js";import"./index-DnZXMkM7.js";import"./LabelWithHelp-agrIQouL.js";import"./Help-Bjo-3yoG.js";import"./index-BpsKvWdW.js";import"./index-DJw2LVW1.js";const B={component:v.Error,title:"Tester/ErrorSummary/Error",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},referenceId:{table:{disable:!0}}}},l={children:"Husk å fylle ut type varer",referenceId:"referenceId_1"},r={name:"With Ref (FA1)",args:{...l,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=i(e).getByRole("link");await t(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},n={name:"With Attributes (FA2-5)",args:{...l,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("link");await t(a).toHaveAttribute("id","htmlid"),await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},s={name:"Defaults",args:{...l},argTypes:{referenceId:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByRole("link");await t(a).toHaveAttribute("href","#referenceId_1")}};var d,m,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLAnchorElement | null): void => {
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
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var b,u,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('id', 'htmlid');
    await expect(error).toHaveClass('dummyClassname');
    await expect(error).toHaveAttribute('lang', 'nb');
    await expect(error).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,y,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Defaults',
  args: {
    ...defaultArgs
  },
  argTypes: {
    referenceId: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const error = canvas.getByRole('link');
    await expect(error).toHaveAttribute('href', '#referenceId_1');
  }
} satisfies Story`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const C=["WithRef","WithAttributes","Defaults"];export{s as Defaults,n as WithAttributes,r as WithRef,C as __namedExportsOrder,B as default};
//# sourceMappingURL=ErrorSummaryError.test.stories-CR4Gp6yQ.js.map
