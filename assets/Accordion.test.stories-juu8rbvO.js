import{j as a}from"./iframe-CdXtTKZQ.js";import{A as t}from"./index-C6J3KzFu.js";const{expect:r,within:B}=__STORYBOOK_MODULE_TEST__,f="htmlId",g="Meg selv",A="Beskrivelse",b="Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.",X={component:t,title:"Tester/Accordion/Accordion",argTypes:{ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},color:{table:{disable:!0}},size:{table:{disable:!0}},iconPosition:{table:{disable:!0}}},args:{children:a.jsx(t.Item,{title:g,children:b})},tags:["test"],parameters:{imageSnapshot:{disableSnapshot:!1}}},K=()=>{const e=[a.jsx(t.Item,{title:g,subtitle:A,children:b},"i1"),a.jsx(t.Item,{title:g,subtitle:A,children:b},"i2")];return a.jsxs(a.Fragment,{children:[a.jsx(t,{className:"bottomSpacingXL",color:"none",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"burgundy",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"denim",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"forest",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"graphite",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"ochre",children:e})]})},s={children:a.jsx(t.Item,{title:g,children:b})},i={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disableSnapshot:!0}},play:async({canvasElement:e})=>{const n=B(e).getAllByRole("generic")[1];await r(n).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes(FA2-5)",args:{...s,id:f,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},parameters:{a11y:{test:"off"}},play:async({canvasElement:e})=>{const n=B(e).getAllByRole("generic")[1];await r(n).toHaveClass("dummyClassname"),await r(n).toHaveAttribute("id",f),await r(n).toHaveAttribute("lang","nb"),await r(n).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (A2, A4, A7 delvis)",args:s},c={name:"With Icon Left (A2)",args:{iconPosition:"left",...s}},d={render:K,name:"With All Color Variants (A1)",args:s},m={name:"Variant Small (A7)",args:{size:"small",...s}},u={name:"Variant Medium (A7)",args:{size:"medium",...s}},p={name:"Variant Large (A7)",args:{size:"large",...s}};var h,y,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
} satisfies Story`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,W,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(x=(W=o.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var I,w,j;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Defaults (A2, A4, A7 delvis)',
  args: defaultArgs
} satisfies Story`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var L,F,R;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Icon Left (A2)',
  args: {
    iconPosition: 'left',
    ...defaultArgs
  }
} satisfies Story`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var T,C,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: TemplateWithAllColors,
  name: 'With All Color Variants (A1)',
  args: defaultArgs
} satisfies Story`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var H,N,D;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Variant Small (A7)',
  args: {
    size: 'small',
    ...defaultArgs
  }
} satisfies Story`,...(D=(N=m.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var V,k,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Variant Medium (A7)',
  args: {
    size: 'medium',
    ...defaultArgs
  }
} satisfies Story`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var z,M,O;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Variant Large (A7)',
  args: {
    size: 'large',
    ...defaultArgs
  }
} satisfies Story`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const U=["WithRef","WithAttributes","Defaults","WithIconLeft","WithAllColorVariants","WithSmall","WithMedium","WithLarge"],G=Object.freeze(Object.defineProperty({__proto__:null,Defaults:l,WithAllColorVariants:d,WithAttributes:o,WithIconLeft:c,WithLarge:p,WithMedium:u,WithRef:i,WithSmall:m,__namedExportsOrder:U,default:X},Symbol.toStringTag,{value:"Module"}));export{G as A};
//# sourceMappingURL=Accordion.test.stories-juu8rbvO.js.map
