"use strict";(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[599],{"./apps/ds-playground/src/stories/__tests__/testUtils/storybook.testing.utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YS:()=>wrapper,fH:()=>loremIpsum,ob:()=>loremIpsumWithoutSpaces});const wrapper="[data-test-block]",loremIpsum="Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.",loremIpsumWithoutSpaces="Loremipsumdolorsitamet.Allesomharlagetennettside,trengtlittfylltekstellerbaresurfetrundtpånettetharantageligvissettdisseordene,etterfulgtaventilsynelatendeeviglangtekstfyltmedlatinskeliksomsetninger."},"./apps/ds-playground/src/stories/__tests__/Heading.test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defaults:()=>Defaults,DefaultsMobile:()=>DefaultsMobile,LevelsWithSpacing:()=>LevelsWithSpacing,LevelsWithSpacingMobile:()=>LevelsWithSpacingMobile,WithAs:()=>WithAs,WithAttributes:()=>WithAttributes,WithMarkup:()=>WithMarkup,WithRef:()=>WithRef,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ds-core-utils/src/index.ts"),_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ds-typography/src/index.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./apps/ds-playground/src/stories/__tests__/testUtils/storybook.testing.utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_1__.X6,title:"Tester/Heading",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:"text"},hasSpacing:{table:{disable:!0}},as:{table:{disable:!0}},level:{table:{disable:!0}}}},defaultArgs={as:"h2",level:2,children:"Dette er en heading"},WithRef={name:"With Ref (FA1)",args:Object.assign({},defaultArgs,{ref:instance=>{instance&&(instance.id="dummyIdForwardedFromRef")}}),argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement})=>{const heading=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement).getByRole("heading");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.l_)(heading).toHaveAttribute("id","dummyIdForwardedFromRef")}},WithAttributes={name:"With Attributes (FA2-5)",args:Object.assign({},defaultArgs,{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"}),argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement})=>{const heading=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement).getByRole("heading");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.l_)(heading).toHaveClass("dummyClassname"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.l_)(heading).toHaveAttribute("id","htmlId"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.l_)(heading).toHaveAttribute("lang","nb"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.l_)(heading).toHaveAttribute("data-testid","123ID")}},TemplateWithAllLevels=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_1__.mX.map(((headingLevel,item)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_1__.X6,Object.assign({},args,{level:headingLevel,children:`Heading level ${headingLevel}`}),`level_${item}`)))}),Defaults={render:TemplateWithAllLevels,name:"Defaults All Levels (A1, A2)",args:Object.assign({},defaultArgs),play:async({canvasElement})=>{const headings=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement).getAllByRole("heading",{level:2});for(const[index,heading]of headings.entries())await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.l_)(heading).toBeInTheDocument(),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.l_)(heading.classList.toString()).toContain(`Heading_heading_level${_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_1__.mX[index]}`)}},DefaultsMobile={render:TemplateWithAllLevels,name:"Defaults All Levels On Small Screen (A1, A2)",args:Object.assign({},defaultArgs),parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},LevelsWithSpacing={render:TemplateWithAllLevels,name:"With Spacing All Levels (A4)",args:Object.assign({},defaultArgs,{hasSpacing:!0}),argTypes:{hasSpacing:{table:{disable:!1}}}},LevelsWithSpacingMobile={render:TemplateWithAllLevels,name:"With Spacing All Levels On Small Screen (A4)",args:Object.assign({},defaultArgs,{hasSpacing:!0}),argTypes:{hasSpacing:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},WithAs={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.C9.map((heading=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_1__.X6,Object.assign({},args,{as:heading,children:`Heading ${heading}`}),`heading-${heading}`)))}),name:"With As (B1)",args:Object.assign({},defaultArgs),parameters:{viewport:{viewPortHeight:1200}},play:async({canvasElement})=>{const headings=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement).getAllByRole("heading");for(const[index,heading]of headings.entries())await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_2__.l_)(heading.tagName).toBe(_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.C9[index].toLocaleUpperCase())}},WithMarkup={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_1__.X6,Object.assign({},args,{hasSpacing:!0,children:["Dette er den ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"https://skatteetaten.no",children:"fyneste markup headingen"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("em",{children:" som finnes i italic "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong",{children:"og strong "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mark",{children:"mark "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code",{children:"code "}),"med spacing under og en skrivefeil"]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_1__.X6,Object.assign({},args))]}),name:"With Markup And String (A3, B2)",args:Object.assign({},defaultArgs,{children:"Dette er den fineste string headingen uten markup"}),argTypes:{children:{table:{disable:!1},control:{disable:!0}}},parameters:{imageSnapshot:{hover:`${_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_3__.YS} > h2 > a`,focus:`${_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_3__.YS} > h2 > a`}}};WithRef.parameters={...WithRef.parameters,docs:{...WithRef.parameters?.docs,source:{originalSource:"{\n  name: 'With Ref (FA1)',\n  args: {\n    ...defaultArgs,\n    ref: (instance: HTMLHeadingElement | null): void => {\n      if (instance) {\n        instance.id = 'dummyIdForwardedFromRef';\n      }\n    }\n  },\n  argTypes: {\n    ref: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const heading = canvas.getByRole('heading');\n    await expect(heading).toHaveAttribute('id', 'dummyIdForwardedFromRef');\n  }\n} satisfies Story",...WithRef.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  name: 'With Attributes (FA2-5)',\n  args: {\n    ...defaultArgs,\n    id: 'htmlId',\n    className: 'dummyClassname',\n    lang: 'nb',\n    'data-testid': '123ID'\n  },\n  argTypes: {\n    id: {\n      table: {\n        disable: false\n      }\n    },\n    className: {\n      table: {\n        disable: false\n      }\n    },\n    lang: {\n      table: {\n        disable: false\n      }\n    },\n    'data-testid': {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const heading = canvas.getByRole('heading');\n    await expect(heading).toHaveClass('dummyClassname');\n    await expect(heading).toHaveAttribute('id', 'htmlId');\n    await expect(heading).toHaveAttribute('lang', 'nb');\n    await expect(heading).toHaveAttribute('data-testid', '123ID');\n  }\n} satisfies Story",...WithAttributes.parameters?.docs?.source}}},Defaults.parameters={...Defaults.parameters,docs:{...Defaults.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithAllLevels,\n  name: 'Defaults All Levels (A1, A2)',\n  args: {\n    ...defaultArgs\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const headings = canvas.getAllByRole('heading', {\n      level: 2\n    });\n    for (const [index, heading] of headings.entries()) {\n      await expect(heading).toBeInTheDocument();\n      await expect(heading.classList.toString()).toContain(`Heading_heading_level${headingLevelArr[index]}`);\n    }\n  }\n} satisfies Story",...Defaults.parameters?.docs?.source}}},DefaultsMobile.parameters={...DefaultsMobile.parameters,docs:{...DefaultsMobile.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithAllLevels,\n  name: 'Defaults All Levels On Small Screen (A1, A2)',\n  args: {\n    ...defaultArgs\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: '--breakpoint-xs'\n    }\n  }\n} satisfies Story",...DefaultsMobile.parameters?.docs?.source}}},LevelsWithSpacing.parameters={...LevelsWithSpacing.parameters,docs:{...LevelsWithSpacing.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithAllLevels,\n  name: 'With Spacing All Levels (A4)',\n  args: {\n    ...defaultArgs,\n    hasSpacing: true\n  },\n  argTypes: {\n    hasSpacing: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...LevelsWithSpacing.parameters?.docs?.source}}},LevelsWithSpacingMobile.parameters={...LevelsWithSpacingMobile.parameters,docs:{...LevelsWithSpacingMobile.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithAllLevels,\n  name: 'With Spacing All Levels On Small Screen (A4)',\n  args: {\n    ...defaultArgs,\n    hasSpacing: true\n  },\n  argTypes: {\n    hasSpacing: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: '--breakpoint-xs'\n    }\n  }\n} satisfies Story",...LevelsWithSpacingMobile.parameters?.docs?.source}}},WithAs.parameters={...WithAs.parameters,docs:{...WithAs.parameters?.docs,source:{originalSource:"{\n  render: AsTemplate,\n  name: 'With As (B1)',\n  args: {\n    ...defaultArgs\n  },\n  parameters: {\n    viewport: {\n      viewPortHeight: 1200\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const headings = canvas.getAllByRole('heading');\n    for (const [index, heading] of headings.entries()) {\n      await expect(heading.tagName).toBe(headingAsArr[index].toLocaleUpperCase());\n    }\n  }\n} satisfies Story",...WithAs.parameters?.docs?.source}}},WithMarkup.parameters={...WithMarkup.parameters,docs:{...WithMarkup.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithMarkup,\n  name: 'With Markup And String (A3, B2)',\n  args: {\n    ...defaultArgs,\n    children: 'Dette er den fineste string headingen uten markup'\n  },\n  argTypes: {\n    children: {\n      table: {\n        disable: false\n      },\n      control: {\n        disable: true\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      hover: `${wrapper} > h2 > a`,\n      focus: `${wrapper} > h2 > a`\n    }\n  }\n} satisfies Story",...WithMarkup.parameters?.docs?.source}}};const __namedExportsOrder=["WithRef","WithAttributes","Defaults","DefaultsMobile","LevelsWithSpacing","LevelsWithSpacingMobile","WithAs","WithMarkup"]}}]);