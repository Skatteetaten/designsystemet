import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{A as t}from"./index-BdaHGl3n.js";import{w as P,e as n}from"./index-B8otpkpo.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C498nvnC.js";import"./index-C3Vp3Ydz.js";import"./index-CKHxS2Ra.js";import"./index-jWwGX2yX.js";import"./index-BjzvYn6A.js";import"./index-DWqb7jS3.js";const f="htmlId",g="Meg selv",A="Beskrivelse",b="Fikk du over 1 000 kroner i restskatt, deles summen opp i 2 fakturaer. Fristen for når du må betale avhenger av når du fikk skatteoppgjøret ditt.",te={component:t,title:"Tester/Accordion/Accordion",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},color:{table:{disable:!0}},size:{table:{disable:!0}},iconPosition:{table:{disable:!0}}},args:{children:a.jsx(t.Item,{title:g,children:b})}},O=()=>{const e=[a.jsx(t.Item,{title:g,subtitle:A,children:b},"i1"),a.jsx(t.Item,{title:g,subtitle:A,children:b},"i2")];return a.jsxs(a.Fragment,{children:[a.jsx(t,{className:"bottomSpacingXL",color:"none",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"burgundy",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"denim",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"forest",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"graphite",children:e}),a.jsx(t,{className:"bottomSpacingXL",color:"ochre",children:e})]})},s={children:a.jsx(t.Item,{title:g,children:b})},i={name:"With Ref (FA1)",args:{...s,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const r=P(e).getAllByRole("generic")[1];await n(r).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes(FA2-5)",args:{...s,id:f,className:"dummyClassname",lang:"nb","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const r=P(e).getAllByRole("generic")[1];await n(r).toHaveClass("dummyClassname"),await n(r).toHaveAttribute("id",f),await n(r).toHaveAttribute("lang","nb"),await n(r).toHaveAttribute("data-testid","123ID")}},l={name:"Defaults (A2, A4, A7 delvis)",args:s},c={name:"With Icon Left (A2)",args:{iconPosition:"left",...s}},m={render:O,name:"With All Color Variants (A1)",args:s},d={name:"Variant Small (A7)",args:{size:"small",...s}},u={name:"Variant Medium (A7)",args:{size:"medium",...s}},p={name:"Variant Large (A7)",args:{size:"large",...s}};var h,y,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      disable: true
    }
  },
  play: async ({
    canvasElement
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  }
} satisfies Story`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,W,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(x=(W=o.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var I,w,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Defaults (A2, A4, A7 delvis)',
  args: defaultArgs
} satisfies Story`,...(F=(w=l.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var L,j,C;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Icon Left (A2)',
  args: {
    iconPosition: 'left',
    ...defaultArgs
  }
} satisfies Story`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var R,H,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: TemplateWithAllColors,
  name: 'With All Color Variants (A1)',
  args: defaultArgs
} satisfies Story`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var k,T,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Variant Small (A7)',
  args: {
    size: 'small',
    ...defaultArgs
  }
} satisfies Story`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,z,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Variant Medium (A7)',
  args: {
    size: 'medium',
    ...defaultArgs
  }
} satisfies Story`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var M,X,B;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Variant Large (A7)',
  args: {
    size: 'large',
    ...defaultArgs
  }
} satisfies Story`,...(B=(X=p.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};const se=["WithRef","WithAttributes","Defaults","WithIconLeft","WithAllColorVariants","WithSmall","WithMedium","WithLarge"];export{l as Defaults,m as WithAllColorVariants,o as WithAttributes,c as WithIconLeft,p as WithLarge,u as WithMedium,i as WithRef,d as WithSmall,se as __namedExportsOrder,te as default};
//# sourceMappingURL=Accordion.test.stories-BcYf7M85.js.map
