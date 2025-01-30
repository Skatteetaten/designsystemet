import{j as t}from"./jsx-runtime-CfatFE5O.js";import{r as F}from"./index-ClcD9ViR.js";import{w as u,e as s,u as H,b as R}from"./index-XVqkR3zt.js";import{C as m}from"./index-aMjpNqYB.js";import"./index--O6iZ70i.js";import{S as I}from"./index-BWc9jU-Q.js";import{H as B,P as E}from"./index-BaCHQVlv.js";import{s as N}from"./base-props.types-sXyoNogd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-U0B695k8.js";import"./index-Dxnk4fMh.js";const K={component:m.Alert,title:"Tester/Card/Alert",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},variant:{table:{disable:!0},control:"text"},title:{table:{disable:!0},control:"text"},titleAs:{table:{disable:!0}},showAlert:{table:{disable:!0},control:"text"},svgPath:{table:{disable:!0}},onClose:{table:{disable:!0}}}},P="Gruppering av opplysninger i skjema, for eksempel inntekter, personer eller oppsummeringer.",r={children:P,variant:N[1],title:"Merknad"},i={name:"With Ref (FA1)",args:{...r,ref:e=>{e&&(e.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const a=u(e).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","dummyIdForwardedFromRef")}},o={name:"With Attributes (FA2-5)",args:{...r,id:"htmlId",className:"dummyClassname",lang:"en","data-testid":"123ID"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement:e})=>{const a=u(e).getAllByRole("generic")[1];await s(a).toHaveAttribute("id","htmlId"),await s(a).toHaveClass("dummyClassname"),await s(a).toHaveAttribute("lang","en"),await s(a).toHaveAttribute("data-testid","123ID")}},l={name:"With custom icon, children and title (A7)",args:{...r,svgPath:I},argTypes:{children:{table:{disable:!1}}}},j=["neutral","warning","danger"],V=e=>t.jsx(m,{children:j.map((n,a)=>F.createElement(m.Alert,{title:r.title,...e,key:`card_${a}`,className:"bottomSpacingXL",variant:n},t.jsx(m.Content,{children:e.children})))}),d={render:V,name:"All Variants (A7)",args:{...r}},c={name:"With OnClose",args:{...r,children:t.jsxs(t.Fragment,{children:[t.jsx(B,{as:"h1",level:4,children:"Avvist av kortutsteder"}),t.jsxs(E,{children:["Ta kontakt med kortutsteder for ",t.jsx("a",{href:"#storybook-root",children:"mer informasjon"})]})]})},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement:e})=>{const n=u(e),a=n.getByRole("button");await H.click(a),await R(()=>{s(n.queryByText("Avvist av kortutsteder")).not.toBeInTheDocument()})}};var p,b,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
} satisfies Story`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,v,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'en',
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
    const cardNote = canvas.getAllByRole('generic')[1];
    await expect(cardNote).toHaveAttribute('id', 'htmlId');
    await expect(cardNote).toHaveClass('dummyClassname');
    await expect(cardNote).toHaveAttribute('lang', 'en');
    await expect(cardNote).toHaveAttribute('data-testid', '123ID');
  }
} satisfies Story`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,A,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With custom icon, children and title (A7)',
  args: {
    ...defaultArgs,
    svgPath: SkattetrekkSVGpath
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
} satisfies Story`,...(w=(A=l.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var k,x,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: TemplateAllVariants,
  name: 'All Variants (A7)',
  args: {
    ...defaultArgs
  }
} satisfies Story`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,W,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With OnClose',
  args: {
    ...defaultArgs,
    children: <>
        <Heading as={'h1'} level={4}>
          {'Avvist av kortutsteder'}
        </Heading>
        <Paragraph>
          {'Ta kontakt med kortutsteder for '}
          <a href={'#storybook-root'}>{'mer informasjon'}</a>
        </Paragraph>
      </>
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
    const closeButton = canvas.getByRole('button');
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(canvas.queryByText('Avvist av kortutsteder')).not.toBeInTheDocument();
    });
  }
} satisfies Story`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};const Q=["WithRef","WithAttributes","WithSvgPath","AllVariants","WithOnClose"];export{d as AllVariants,o as WithAttributes,c as WithOnClose,i as WithRef,l as WithSvgPath,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=CardAlert.test.stories-C7HZO_1c.js.map
