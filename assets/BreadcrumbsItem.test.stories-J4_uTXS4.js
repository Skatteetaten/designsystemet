import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{w as l,e as t}from"./index-DIxTUSTt.js";import{B as h}from"./index-BUexH3MM.js";import"./index-CwaotbcG.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dvbywa6-.js";import"./index-BQO_0U1F.js";import"./index-BQtvKDNR.js";const m="htmlId",I=(e,i)=>async({canvasElement:a})=>{const w=l(a);await t(w.getByRole("listitem")).toHaveAttribute(e,i)},E={component:h.Item,title:"Tester/Breadcrumbs/Item",decorators:[e=>o.jsx("ol",{children:o.jsx(e,{})})],argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}}}},d={children:o.jsx(h.Link,{href:"#",children:"Bedrift og organisasjon"})},n={name:"With Ref (FA1)",args:{...d,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:I("id","dummyIdForwardedFromRef")},s={name:"With Attributes(FA2-5)",args:{...d,id:m,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=l(e).getByRole("listitem");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",m),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}},r={name:"With AriaCurrent (B3)",args:{...d,ariaCurrent:"page"},argTypes:{},play:async({canvasElement:e})=>{const a=l(e).getByRole("listitem");await t(a).toHaveAttribute("aria-current","page")}};var c,u,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,f,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,v,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(A=(v=r.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const j=["WithRef","WithAttributes","WithAriaCurrent"];export{r as WithAriaCurrent,s as WithAttributes,n as WithRef,j as __namedExportsOrder,E as default};
//# sourceMappingURL=BreadcrumbsItem.test.stories-J4_uTXS4.js.map
