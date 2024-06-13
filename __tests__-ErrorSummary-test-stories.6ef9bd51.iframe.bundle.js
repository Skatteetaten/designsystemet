"use strict";(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[4888],{"./apps/ds-playground/src/stories/__tests__/ErrorSummary.test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defaults:()=>Defaults,WithAttributes:()=>WithAttributes,WithChildren:()=>WithChildren,WithChildrenAndContent:()=>WithChildrenAndContent,WithChildrenAndContentBreakpointXs:()=>WithChildrenAndContentBreakpointXs,WithChildrenAndContentMobile:()=>WithChildrenAndContentMobile,WithContent:()=>WithContent,WithInput:()=>WithInput,WithRef:()=>WithRef,WithShadowRootNode:()=>WithShadowRootNode,WithTitleAs:()=>WithTitleAs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ds-core-utils/src/index.ts"),_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ds-forms/src/index.ts"),_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ds-typography/src/index.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./apps/ds-playground/src/stories/__tests__/testUtils/storybook.testing.utils.ts"),_storybook_webcomponent_decorator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./apps/ds-playground/.storybook/webcomponent-decorator.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.Xg,title:"Tester/ErrorSummary/ErrorSummary",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0},control:{disable:!0}},content:{table:{disable:!0},control:{disable:!0}},shadowRootNode:{table:{disable:!0}},showErrorSummary:{table:{disable:!0}},title:{table:{disable:!0}},titleAs:{options:[..._skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.C9],control:"inline-radio",table:{disable:!0}}}},defaultChildren=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.Xg.Error,{referenceId:"id_1",children:"Husk å fylle ut type varer"},"errorSummaryError_1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.Xg.Error,{referenceId:"id_2",children:"Selger du varer og tjenester for egen regning?"},"errorSummaryError_2"),!1],WithRef={name:"With Ref (FA1)",args:{ref:instance=>{instance&&(instance.id="dummyIdForwardedFromRef")}},argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement})=>{const container=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getAllByRole("generic")[1];await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("id","dummyIdForwardedFromRef")}},WithAttributes={name:"With Attributes (FA2-5, B1)",args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",showErrorSummary:!0},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement),container=canvas.getAllByRole("generic")[1],errorSummary=canvas.getAllByRole("generic")[2];await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("id","htmlId"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(errorSummary).toHaveClass("dummyClassname"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("lang","nb"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("data-testid","123ID")}},Defaults={name:"Default (B2, B3 delvis)",play:async({canvasElement})=>{const container=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getAllByRole("generic")[1];await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toBeInTheDocument(),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("aria-live","assertive"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("aria-atomic"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("tabIndex","-1");const errorSummary=container.querySelector("div");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(errorSummary).not.toBeInTheDocument()}},WithChildren={name:"With Children (A1, A2, A3 delvis)",args:{showErrorSummary:!0,children:defaultChildren},argTypes:{children:{table:{disable:!1}}},play:async({canvasElement})=>{const listItems=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getAllByRole("listitem");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(listItems).toHaveLength(2)}},WithContent={name:"With Content (A1, A5, B1)",args:{showErrorSummary:!0,title:"Inntektsmottaker inneholder 2 feil:",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_2__.nv,{children:_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_4__.fH})},argTypes:{content:{table:{disable:!1}},title:{table:{disable:!1}}},play:async({canvasElement})=>{const icon=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getByRole("img",{hidden:!0});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(icon).toBeInTheDocument(),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(icon).toHaveAttribute("aria-hidden","true")}},WithChildrenAndContent={name:"With Children And Content (A1, A3 delvis, A5)",args:{showErrorSummary:!0,children:defaultChildren,content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_2__.nv,{children:_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_4__.fH})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}}},WithChildrenAndContentMobile={name:"With Children And Content Mobile",args:{showErrorSummary:!0,children:defaultChildren,content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_2__.nv,{children:_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_4__.fH})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--mobile"}}},WithChildrenAndContentBreakpointXs={name:"With Children And Content Breakpoint Xs",args:{showErrorSummary:!0,children:defaultChildren,content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_2__.nv,{children:_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_4__.fH})},argTypes:{children:{table:{disable:!1}},content:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}},WithTitleAs={name:"With TitleAs (A2)",args:{showErrorSummary:!0,titleAs:"h1",children:defaultChildren},argTypes:{titleAs:{table:{disable:!1}}},play:async({canvasElement})=>{const heading=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getByRole("heading",{level:1});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(heading).toBeInTheDocument()}},WithInput={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.nv,{className:"bottomSpacingXL",id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasError:!0,required:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.Xg,{showErrorSummary:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.Xg.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]}),name:"With Input (A4)",play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement),link=canvas.getByRole("link"),input=canvas.getByLabelText("År");await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.mV.click(link),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.X_)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(input).toHaveFocus()))}},WithShadowRootNode={render:()=>{const element=document.querySelector("errorsummary-customelement"),shadowRoot=null==element?void 0:element.shadowRoot;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{"data-test-block":!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.nv,{className:"bottomSpacingXL",id:"input_aar",label:"År",value:1009,errorMessage:"Inntekståret må være etter 2008",hasError:!0,required:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.Xg,{shadowRootNode:null!=shadowRoot?shadowRoot:void 0,showErrorSummary:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_1__.Xg.Error,{referenceId:"input_aar",children:"Inntekståret må være etter 2008"})})]})},name:"With ShadowRootNode",decorators:[_storybook_webcomponent_decorator__WEBPACK_IMPORTED_MODULE_5__.a],parameters:{a11y:{disable:!0},imageSnapshot:{disable:!0},customElementName:"errorsummary-customelement"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement);await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(canvas.queryByRole("link")).not.toBeInTheDocument();const customElement=canvasElement.querySelector("errorsummary-customelement");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(customElement).toBeInTheDocument();const errorLink=(null==customElement?void 0:customElement.shadowRoot)&&customElement.shadowRoot.querySelector("a");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(errorLink).toBeInTheDocument(),await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.mV.click(errorLink);const input=(null==customElement?void 0:customElement.shadowRoot)&&customElement.shadowRoot.querySelector("input:focus");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(input).toBeInTheDocument()}};WithRef.parameters={...WithRef.parameters,docs:{...WithRef.parameters?.docs,source:{originalSource:"{\n  name: 'With Ref (FA1)',\n  args: {\n    ref: (instance: HTMLDivElement | null): void => {\n      if (instance) {\n        instance.id = 'dummyIdForwardedFromRef';\n      }\n    }\n  },\n  argTypes: {\n    ref: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const container = canvas.getAllByRole('generic')[1];\n    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');\n  }\n} satisfies Story",...WithRef.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  name: 'With Attributes (FA2-5, B1)',\n  args: {\n    id: 'htmlId',\n    className: 'dummyClassname',\n    lang: 'nb',\n    'data-testid': '123ID',\n    showErrorSummary: true\n  },\n  argTypes: {\n    id: {\n      table: {\n        disable: false\n      }\n    },\n    className: {\n      table: {\n        disable: false\n      }\n    },\n    lang: {\n      table: {\n        disable: false\n      }\n    },\n    'data-testid': {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const container = canvas.getAllByRole('generic')[1];\n    const errorSummary = canvas.getAllByRole('generic')[2];\n    await expect(container).toHaveAttribute('id', 'htmlId');\n    await expect(errorSummary).toHaveClass('dummyClassname');\n    await expect(container).toHaveAttribute('lang', 'nb');\n    await expect(container).toHaveAttribute('data-testid', '123ID');\n  }\n} satisfies Story",...WithAttributes.parameters?.docs?.source}}},Defaults.parameters={...Defaults.parameters,docs:{...Defaults.parameters?.docs,source:{originalSource:"{\n  name: 'Default (B2, B3 delvis)',\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const container = canvas.getAllByRole('generic')[1];\n    await expect(container).toBeInTheDocument();\n    await expect(container).toHaveAttribute('aria-live', 'assertive');\n    await expect(container).toHaveAttribute('aria-atomic');\n    await expect(container).toHaveAttribute('tabIndex', '-1');\n    // eslint-disable-next-line testing-library/no-node-access\n    const errorSummary = container.querySelector('div');\n    await expect(errorSummary).not.toBeInTheDocument();\n  }\n} satisfies Story",...Defaults.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:"{\n  name: 'With Children (A1, A2, A3 delvis)',\n  args: {\n    showErrorSummary: true,\n    children: defaultChildren\n  },\n  argTypes: {\n    children: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const listItems = canvas.getAllByRole('listitem');\n    await expect(listItems).toHaveLength(2);\n  }\n} satisfies Story",...WithChildren.parameters?.docs?.source}}},WithContent.parameters={...WithContent.parameters,docs:{...WithContent.parameters?.docs,source:{originalSource:"{\n  name: 'With Content (A1, A5, B1)',\n  args: {\n    showErrorSummary: true,\n    title: 'Inntektsmottaker inneholder 2 feil:',\n    content: <Paragraph>{loremIpsum}</Paragraph>\n  },\n  argTypes: {\n    content: {\n      table: {\n        disable: false\n      }\n    },\n    title: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const icon = canvas.getByRole('img', {\n      hidden: true\n    });\n    await expect(icon).toBeInTheDocument();\n    await expect(icon).toHaveAttribute('aria-hidden', 'true');\n  }\n} satisfies Story",...WithContent.parameters?.docs?.source}}},WithChildrenAndContent.parameters={...WithChildrenAndContent.parameters,docs:{...WithChildrenAndContent.parameters?.docs,source:{originalSource:"{\n  name: 'With Children And Content (A1, A3 delvis, A5)',\n  args: {\n    showErrorSummary: true,\n    children: defaultChildren,\n    content: <Paragraph>{loremIpsum}</Paragraph>\n  },\n  argTypes: {\n    children: {\n      table: {\n        disable: false\n      }\n    },\n    content: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...WithChildrenAndContent.parameters?.docs?.source}}},WithChildrenAndContentMobile.parameters={...WithChildrenAndContentMobile.parameters,docs:{...WithChildrenAndContentMobile.parameters?.docs,source:{originalSource:"{\n  name: 'With Children And Content Mobile',\n  args: {\n    showErrorSummary: true,\n    children: defaultChildren,\n    content: <Paragraph>{loremIpsum}</Paragraph>\n  },\n  argTypes: {\n    children: {\n      table: {\n        disable: false\n      }\n    },\n    content: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: '--mobile'\n    }\n  }\n} satisfies Story",...WithChildrenAndContentMobile.parameters?.docs?.source}}},WithChildrenAndContentBreakpointXs.parameters={...WithChildrenAndContentBreakpointXs.parameters,docs:{...WithChildrenAndContentBreakpointXs.parameters?.docs,source:{originalSource:"{\n  name: 'With Children And Content Breakpoint Xs',\n  args: {\n    showErrorSummary: true,\n    children: defaultChildren,\n    content: <Paragraph>{loremIpsum}</Paragraph>\n  },\n  argTypes: {\n    children: {\n      table: {\n        disable: false\n      }\n    },\n    content: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: '--breakpoint-xs'\n    }\n  }\n} satisfies Story",...WithChildrenAndContentBreakpointXs.parameters?.docs?.source}}},WithTitleAs.parameters={...WithTitleAs.parameters,docs:{...WithTitleAs.parameters?.docs,source:{originalSource:"{\n  name: 'With TitleAs (A2)',\n  args: {\n    showErrorSummary: true,\n    titleAs: 'h1',\n    children: defaultChildren\n  },\n  argTypes: {\n    titleAs: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const heading = canvas.getByRole('heading', {\n      level: 1\n    });\n    await expect(heading).toBeInTheDocument();\n  }\n} satisfies Story",...WithTitleAs.parameters?.docs?.source}}},WithInput.parameters={...WithInput.parameters,docs:{...WithInput.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithInput,\n  name: 'With Input (A4)',\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const link = canvas.getByRole('link');\n    const input = canvas.getByLabelText('År');\n    await userEvent.click(link);\n    await waitFor(() => expect(input).toHaveFocus());\n  }\n} satisfies Story",...WithInput.parameters?.docs?.source}}},WithShadowRootNode.parameters={...WithShadowRootNode.parameters,docs:{...WithShadowRootNode.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithShadowRootNode,\n  name: 'With ShadowRootNode',\n  decorators: [webComponent],\n  parameters: {\n    a11y: {\n      //Stilen som slår av transitions og animations finnes ikke på innsiden av shadowDom\n      //Slår derfor av denne slik at vi ikke får false positives\n      disable: true\n    },\n    imageSnapshot: {\n      disable: true\n    },\n    customElementName: 'errorsummary-customelement'\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    // errorLink finnes ikke utenfor shadowDom\n    await expect(canvas.queryByRole('link')).not.toBeInTheDocument();\n    // eslint-disable-next-line testing-library/no-node-access\n    const customElement = canvasElement.querySelector(`errorsummary-customelement`);\n    await expect(customElement).toBeInTheDocument();\n    const errorLink =\n    // eslint-disable-next-line testing-library/no-node-access\n    customElement?.shadowRoot && customElement.shadowRoot.querySelector('a');\n    await expect(errorLink).toBeInTheDocument();\n    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n    await userEvent.click(errorLink!);\n    const input = customElement?.shadowRoot &&\n    // eslint-disable-next-line testing-library/no-node-access\n    customElement.shadowRoot.querySelector('input:focus');\n    await expect(input).toBeInTheDocument();\n  }\n} satisfies Story",...WithShadowRootNode.parameters?.docs?.source}}};const __namedExportsOrder=["WithRef","WithAttributes","Defaults","WithChildren","WithContent","WithChildrenAndContent","WithChildrenAndContentMobile","WithChildrenAndContentBreakpointXs","WithTitleAs","WithInput","WithShadowRootNode"]}}]);