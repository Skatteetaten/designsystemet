import{j as r}from"./iframe-BQX7p2fO.js";import{D as o}from"./index-DE3ap_ny.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ZQJoFOIZ.js";import"./index-CR6dT-y4.js";import"./index-CsBqoXCA.js";import"./index-BLTwn-id.js";const{expect:s,within:i}=__STORYBOOK_MODULE_TEST__,y={component:o.Element,title:"Tester/DescriptionList/Element",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},term:{table:{disable:!0}}},args:{term:"Ansvarlig fagperson",children:"Kenneth Performance"},decorators:[e=>r.jsx("dl",{children:r.jsx(e,{})})],tags:["test"],parameters:{chromatic:{disableSnapshot:!0}}},l={},t={name:"With Ref (FA1)",args:{...l,"data-testid":"123ID",ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByTestId("123ID");await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},n={name:"With Attributes (FA2-5)",args:{...l,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=i(e).getByTestId("123ID");await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveAttribute("lang","nb")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    'data-testid': '123ID',
    ref: (instance: HTMLDListElement | null): void => {
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
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
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
    const container = canvas.getByTestId('123ID');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveAttribute('lang', 'nb');
  }
} satisfies Story`,...n.parameters?.docs?.source}}};const v=["WithRef","WithAttributes"];export{n as WithAttributes,t as WithRef,v as __namedExportsOrder,y as default};
//# sourceMappingURL=DescriptionListElement.test.stories-D_OSgsP3.js.map
