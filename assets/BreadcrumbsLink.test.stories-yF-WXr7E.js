import{w as u,e as t}from"./index-DIxTUSTt.js";import{B as g}from"./index-BUexH3MM.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-CwaotbcG.js";import"./index-D_ouKaeX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dvbywa6-.js";import"./index-BQO_0U1F.js";import"./index-BQtvKDNR.js";const i="htmlId",y=(e,r)=>async({canvasElement:a})=>{const f=u(a);await t(f.getByRole("link")).toHaveAttribute(e,r)},x={component:g.Link,title:"Tester/Breadcrumbs/Link",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}}}},p={href:"#storybook-root",children:"Bedrift og organisasjon"},n={name:"With Ref (FA1)",args:{...p,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:y("id","dummyIdForwardedFromRef")},s={name:"With Attributes(FA2-5)",args:{...p,id:i,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=u(e).getByRole("link");await t(a).toHaveClass("dummyClassname"),await t(a).toHaveAttribute("id",i),await t(a).toHaveAttribute("lang","nb"),await t(a).toHaveAttribute("data-testid","123ID")}};var l,d,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
  play: verifyAttribute('id', 'dummyIdForwardedFromRef')
} satisfies Story`,...(o=(d=n.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var m,c,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    const container = canvas.getByRole('link');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(b=(c=s.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const B=["WithRef","WithAttributes"];export{s as WithAttributes,n as WithRef,B as __namedExportsOrder,x as default};
//# sourceMappingURL=BreadcrumbsLink.test.stories-yF-WXr7E.js.map
