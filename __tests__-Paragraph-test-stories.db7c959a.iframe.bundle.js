"use strict";(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[4951],{"./apps/ds-playground/src/stories/__tests__/testUtils/storybook.testing.utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YS:()=>wrapper,fH:()=>loremIpsum,ob:()=>loremIpsumWithoutSpaces});const wrapper="[data-test-block]",loremIpsum="Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.",loremIpsumWithoutSpaces="Loremipsumdolorsitamet.Allesomharlagetennettside,trengtlittfylltekstellerbaresurfetrundtpånettetharantageligvissettdisseordene,etterfulgtaventilsynelatendeeviglangtekstfyltmedlatinskeliksomsetninger."},"./apps/ds-playground/src/stories/__tests__/Paragraph.test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defaults:()=>Defaults,IsPElement:()=>IsPElement,VariantIngress:()=>VariantIngress,VariantIngressWithSpacing:()=>VariantIngressWithSpacing,WithAttributes:()=>WithAttributes,WithMarkup:()=>WithMarkup,WithRef:()=>WithRef,WithSpacing:()=>WithSpacing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ds-typography/src/index.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./apps/ds-playground/src/stories/__tests__/testUtils/storybook.testing.utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_0__.nv,title:"Tester/Paragraph",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},variant:{table:{disable:!0},options:[..._skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_0__.Qp],control:"radio"}}},defaultArgs={children:_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_2__.fH},WithRef={name:"With Ref (FA1)",args:Object.assign({},defaultArgs,{ref:instance=>{instance&&(instance.id="dummyIdForwardedFromRef")}}),argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement})=>{const paragraph=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByText(_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_2__.fH);await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.l_)(paragraph).toHaveAttribute("id","dummyIdForwardedFromRef")}},WithAttributes={name:"With Attributes (FA2-5)",args:Object.assign({},defaultArgs,{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"}),argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement})=>{const paragraph=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByText(_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_2__.fH);await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.l_)(paragraph).toHaveClass("dummyClassname"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.l_)(paragraph).toHaveAttribute("id","htmlId"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.l_)(paragraph).toHaveAttribute("lang","nb"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.l_)(paragraph).toHaveAttribute("data-testid","123ID")}},IsPElement={name:"Is <p>-element (B1)",args:Object.assign({},defaultArgs),parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement);await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.l_)(canvas.getByText(_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_2__.fH).nodeName).toBe("P")}},WithMarkup={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_0__.nv,Object.assign({},args,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:["Tekstavsnitt som kan inneholde en lengre tekst. Husk å følge klarspråkprinsippene når en skriver tekster. I dette tilfellet skriver bare litt ekstra tekst for å få litt ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"innhold "}),", men ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("em",{children:"normalt "}),"vil en ønske å skrive så konsentret som mulig. Mange brukere leser bare de første ordene i en tekst, eller hopper ganske enkelt over den. Dette er en ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{href:"https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/2-460499/Latvia/Bauskas%20Rajons/Codes%20pagasts/Code",children:"lenke"})," for å sjekke været i ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"Code "}),"som er en ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small",{children:"small "}),"landsby i et land med mange ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("mark",{children:"mark "}),"og et språk uten ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b",{children:"b "}),"eller ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i",{children:"i"}),"."]})})),name:"With Markup (A2, B2)",args:Object.assign({},defaultArgs),argTypes:{children:{table:{disable:!1},control:{disable:!0}}},parameters:{imageSnapshot:{hover:`${_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_2__.YS} > p a`,focus:`${_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_2__.YS} > p a`}}},TemplateWithTwoParagraphs=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_0__.nv,Object.assign({},args)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_0__.nv,Object.assign({},args))]}),Defaults={render:TemplateWithTwoParagraphs,name:"Defaults Variant Standard (A1, B2)",args:Object.assign({},defaultArgs),argTypes:{children:{table:{disable:!1}}}},VariantIngress={render:TemplateWithTwoParagraphs,name:"Variant Ingress (A1)",args:Object.assign({},defaultArgs,{variant:"ingress"}),argTypes:{variant:{table:{disable:!1}}}},WithSpacing={render:TemplateWithTwoParagraphs,name:"With Spacing Variant Standard (A3)",args:Object.assign({},defaultArgs,{hasSpacing:!0}),argTypes:{hasSpacing:{table:{disable:!1}}}},VariantIngressWithSpacing={render:TemplateWithTwoParagraphs,name:"With Spacing Variant Ingress (A3)",args:Object.assign({},defaultArgs,{hasSpacing:!0,variant:"ingress"}),argTypes:{hasSpacing:{table:{disable:!1}},variant:{table:{disable:!1}}}};WithRef.parameters={...WithRef.parameters,docs:{...WithRef.parameters?.docs,source:{originalSource:"{\n  name: 'With Ref (FA1)',\n  args: {\n    ...defaultArgs,\n    ref: (instance: HTMLParagraphElement | null): void => {\n      if (instance) {\n        instance.id = 'dummyIdForwardedFromRef';\n      }\n    }\n  },\n  argTypes: {\n    ref: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const paragraph = canvas.getByText(loremIpsum);\n    await expect(paragraph).toHaveAttribute('id', 'dummyIdForwardedFromRef');\n  }\n} satisfies Story",...WithRef.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  name: 'With Attributes (FA2-5)',\n  args: {\n    ...defaultArgs,\n    id: 'htmlId',\n    className: 'dummyClassname',\n    lang: 'nb',\n    'data-testid': '123ID'\n  },\n  argTypes: {\n    id: {\n      table: {\n        disable: false\n      }\n    },\n    className: {\n      table: {\n        disable: false\n      }\n    },\n    lang: {\n      table: {\n        disable: false\n      }\n    },\n    'data-testid': {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const paragraph = canvas.getByText(loremIpsum);\n    await expect(paragraph).toHaveClass('dummyClassname');\n    await expect(paragraph).toHaveAttribute('id', 'htmlId');\n    await expect(paragraph).toHaveAttribute('lang', 'nb');\n    await expect(paragraph).toHaveAttribute('data-testid', '123ID');\n  }\n} satisfies Story",...WithAttributes.parameters?.docs?.source}}},IsPElement.parameters={...IsPElement.parameters,docs:{...IsPElement.parameters?.docs,source:{originalSource:"{\n  name: 'Is <p>-element (B1)',\n  args: {\n    ...defaultArgs\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    await expect(canvas.getByText(loremIpsum).nodeName).toBe('P');\n  }\n} satisfies Story",...IsPElement.parameters?.docs?.source}}},WithMarkup.parameters={...WithMarkup.parameters,docs:{...WithMarkup.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithMarkup,\n  name: 'With Markup (A2, B2)',\n  args: {\n    ...defaultArgs\n  },\n  argTypes: {\n    children: {\n      table: {\n        disable: false\n      },\n      control: {\n        disable: true\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      hover: `${wrapper} > p a`,\n      focus: `${wrapper} > p a`\n    }\n  }\n} satisfies Story",...WithMarkup.parameters?.docs?.source}}},Defaults.parameters={...Defaults.parameters,docs:{...Defaults.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithTwoParagraphs,\n  name: 'Defaults Variant Standard (A1, B2)',\n  args: {\n    ...defaultArgs\n  },\n  argTypes: {\n    children: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...Defaults.parameters?.docs?.source}}},VariantIngress.parameters={...VariantIngress.parameters,docs:{...VariantIngress.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithTwoParagraphs,\n  name: 'Variant Ingress (A1)',\n  args: {\n    ...defaultArgs,\n    variant: 'ingress'\n  },\n  argTypes: {\n    variant: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...VariantIngress.parameters?.docs?.source}}},WithSpacing.parameters={...WithSpacing.parameters,docs:{...WithSpacing.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithTwoParagraphs,\n  name: 'With Spacing Variant Standard (A3)',\n  args: {\n    ...defaultArgs,\n    hasSpacing: true\n  },\n  argTypes: {\n    hasSpacing: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...WithSpacing.parameters?.docs?.source}}},VariantIngressWithSpacing.parameters={...VariantIngressWithSpacing.parameters,docs:{...VariantIngressWithSpacing.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithTwoParagraphs,\n  name: 'With Spacing Variant Ingress (A3)',\n  args: {\n    ...defaultArgs,\n    hasSpacing: true,\n    variant: 'ingress'\n  },\n  argTypes: {\n    hasSpacing: {\n      table: {\n        disable: false\n      }\n    },\n    variant: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...VariantIngressWithSpacing.parameters?.docs?.source}}};const __namedExportsOrder=["WithRef","WithAttributes","IsPElement","WithMarkup","Defaults","VariantIngress","WithSpacing","VariantIngressWithSpacing"]}}]);