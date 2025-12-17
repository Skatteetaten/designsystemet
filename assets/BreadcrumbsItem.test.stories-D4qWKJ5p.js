import{j as o}from"./iframe-VHQh6taY.js";import{B as m}from"./index-9yOjvRwa.js";const{expect:t,within:l}=__STORYBOOK_MODULE_TEST__,c="htmlId",b=(e,i)=>async({canvasElement:a})=>{const u=l(a);await t(u.getByRole("listitem")).toHaveAttribute(e,i)},p={component:m.Item,title:"Tester/Breadcrumbs/Item",decorators:[e=>o.jsx("ol",{children:o.jsx(e,{})})],argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}}},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},d={children:o.jsx(m.Link,{href:"#",children:"Bedrift og organisasjon"})},n={name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:b("id","dummyIdForwardedFromRef")},s={name:"With Attributes(FA2-5)",args:{...d,id:c,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const a=l(e).getByRole("listitem");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",c),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},r={name:"With AriaCurrent (B3)",args:{...d,ariaCurrent:"page"},argTypes:{},play:async({canvasElement:e})=>{const a=l(e).getByRole("listitem");await t(a).toHaveAttribute("aria-current","page")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLElement | null): void => {
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
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: elementId,
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
    const container = canvas.getByRole('listitem');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With AriaCurrent (B3)',
  args: {
    ...defaultArgs,
    ariaCurrent: 'page'
  },
  argTypes: {},
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('listitem');
    await expect(container).toHaveAttribute('aria-current', 'page');
  }
} satisfies Story`,...r.parameters?.docs?.source}}};const f=["WithRef","WithAttributes","WithAriaCurrent"],v=Object.freeze(Object.defineProperty({__proto__:null,WithAriaCurrent:r,WithAttributes:s,WithRef:n,__namedExportsOrder:f,default:p},Symbol.toStringTag,{value:"Module"}));export{v as B};
//# sourceMappingURL=BreadcrumbsItem.test.stories-D4qWKJ5p.js.map
