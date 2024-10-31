import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{B as t}from"./index-DLO4_ToG.js";import{w as d,e as n}from"./index-B8otpkpo.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BSjcMZTJ.js";import"./index-PT2LozU0.js";import"./index-BU2UjPj9.js";import"./index-DoWIm2Z4.js";const c="htmlId",A=(a,o)=>async({canvasElement:e})=>{const m=d(e);await n(m.getByRole("list")).toHaveAttribute(a,o)},W={component:t.List,title:"Tester/Breadcrumbs/List",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},shouldCollapse:{table:{disable:!0}},showLastItemAsCurrentPage:{table:{disable:!0}}},args:{children:[s.jsx(t.Item,{children:s.jsx(t.Link,{href:"#",children:"Bedrift og organisasjon"})},"i1"),s.jsx(t.Item,{children:s.jsx(t.Link,{href:"#",children:"Avgifter"})},"i2"),s.jsx(t.Item,{children:s.jsx(t.Link,{href:"#",children:"Avgifter på bil og kjøretøy"})},"i3"),s.jsx(t.Item,{children:s.jsx(t.Link,{href:"#",children:"Vektårsavgift"})},"i4")]}},r={name:"With Ref (FA1)",args:{ref:a=>{a&&(a.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:A("id","dummyIdForwardedFromRef")},i={name:"With Attributes(FA2-5)",args:{id:c,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=d(a).getByRole("list");await n(e).toHaveClass("dummyClassname"),await n(e).toHaveAttribute("id",c),await n(e).toHaveAttribute("lang","nb"),await n(e).toHaveAttribute("data-testid","123ID")}},l={name:"Without Show Last Item As Current Page (B3)",args:{showLastItemAsCurrentPage:!1},argTypes:{showLastItemAsCurrentPage:{table:{disable:!1}}},play:async({canvasElement:a})=>{const e=d(a).getAllByRole("listitem"),m=e[e.length-1];await n(m).not.toHaveAttribute("aria-current","page")}};var b,u,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies Story`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,I,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(v=(I=l.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const B=["WithRef","WithAttributes","WithoutIsShowLastItemAsCurrentPage"];export{i as WithAttributes,r as WithRef,l as WithoutIsShowLastItemAsCurrentPage,B as __namedExportsOrder,W as default};
//# sourceMappingURL=BreadcrumbsList.test.stories-8aXxWQ19.js.map
