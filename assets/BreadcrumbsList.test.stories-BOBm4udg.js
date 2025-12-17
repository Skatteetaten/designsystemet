import{j as s}from"./iframe-VHQh6taY.js";import{B as t}from"./index-9yOjvRwa.js";const{expect:n,within:m}=__STORYBOOK_MODULE_TEST__,c="htmlId",b=(a,o)=>async({canvasElement:e})=>{const d=m(e);await n(d.getByRole("list")).toHaveAttribute(a,o)},u={component:t.List,title:"Tester/Breadcrumbs/List",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},shouldCollapse:{table:{disable:!0}},showLastItemAsCurrentPage:{table:{disable:!0}}},args:{children:[s.jsx(t.Item,{children:s.jsx(t.Link,{href:"#",children:"Bedrift og organisasjon"})},"i1"),s.jsx(t.Item,{children:s.jsx(t.Link,{href:"#",children:"Avgifter"})},"i2"),s.jsx(t.Item,{children:s.jsx(t.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})},"i3"),s.jsx(t.Item,{children:s.jsx(t.Link,{href:"#",children:"Vektårsavgift"})},"i4")]},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},r={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:b("id","dummyIdForwardedFromRef")},i={name:"With Attributes(FA2-5)",args:{id:c,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:a})=>{const e=m(a).getByRole("list");await n(e).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("id",c),await n(e).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID")}},l={name:"Without Show Last Item As Current Page (B3)",args:{showLastItemAsCurrentPage:!1},argTypes:{showLastItemAsCurrentPage:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=m(a).getAllByRole("listitem"),d=e[e.length-1];await n(d).not.toHaveAttribute("aria-current","page")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
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
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes(FA2-5)',
  args: {
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
    const container = canvas.getByRole('list');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Without Show Last Item As Current Page (B3)',
  args: {
    showLastItemAsCurrentPage: false
  },
  argTypes: {
    showLastItemAsCurrentPage: {
      table: {
        disable: false
      }
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole('listitem');
    const lastItem = listItems[listItems.length - 1];
    await expect(lastItem).not.toHaveAttribute('aria-current', 'page');
  }
} satisfies Story`,...l.parameters?.docs?.source}}};const g=["WithRef","WithAttributes","WithoutIsShowLastItemAsCurrentPage"],h=Object.freeze(Object.defineProperty({__proto__:null,WithAttributes:i,WithRef:r,WithoutIsShowLastItemAsCurrentPage:l,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{h as B};
//# sourceMappingURL=BreadcrumbsList.test.stories-BOBm4udg.js.map
