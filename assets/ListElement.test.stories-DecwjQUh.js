import{j as i}from"./iframe-VHQh6taY.js";import{L as l}from"./index-Don9wpRQ.js";const{expect:a,within:r}=__STORYBOOK_MODULE_TEST__,c={component:l.Element,title:"Tester/List/Element",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},d={children:"Kjenner du behovet til brukeren?"},o=e=>i.jsx("ul",{children:i.jsx(l.Element,{...e})}),s={render:o,name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const t=r(e).getByRole("listitem");await a(t).toHaveAttribute("id","dummyIdForwardedFromRef")}},n={render:o,name:"With Attributes (FA2-5)",args:{...d,id:"htmlid",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const t=r(e).getByRole("listitem");await a(t).toHaveAttribute("id","htmlid"),await a(t).toHaveClass("dummyClassname"),await a(t).toHaveAttribute("lang","nb"),await a(t).toHaveAttribute("data-testid","123ID")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      disableSnapshot: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('listitem');
    await expect(list).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('listitem');
    await expect(list).toHaveAttribute('id', 'htmlid');
    await expect(list).toHaveClass('dummyClassname');
    await expect(list).toHaveAttribute('lang', 'nb');
    await expect(list).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...n.parameters?.docs?.source}}};const b=["WithRef","WithAttributes"],f=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:n,WithRef:s,__namedExportsOrder:b,default:c},Symbol.toStringTag,{value:"Module"}));export{f as L};
//# sourceMappingURL=ListElement.test.stories-DecwjQUh.js.map
