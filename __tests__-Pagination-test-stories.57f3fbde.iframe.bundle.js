"use strict";(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[858],{"./apps/ds-playground/src/stories/__tests__/Pagination.test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defaults:()=>Defaults,HidePrevNextButtonTitle:()=>HidePrevNextButtonTitle,Sibling:()=>Sibling,WithAttributes:()=>WithAttributes,WithControlled:()=>WithControlled,WithCustomAriaLabel:()=>WithCustomAriaLabel,WithHiddenPageSummary:()=>WithHiddenPageSummary,WithListLength:()=>WithListLength,WithListLimit:()=>WithListLimit,WithNavigation:()=>WithNavigation,WithPageSummary:()=>WithPageSummary,WithPrevNextLabel:()=>WithPrevNextLabel,WithRef:()=>WithRef,WithTextNextPref:()=>WithTextNextPref,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ds-core-utils/src/index.ts"),_skatteetaten_ds_navigation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ds-navigation/src/index.ts"),_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ds-typography/src/index.ts"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("@storybook/preview-api"),_storybook_test__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_skatteetaten_ds_navigation__WEBPACK_IMPORTED_MODULE_1__.tl,title:"Tester/Pagination",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},currentPage:{table:{disable:!0}},defaultCurrent:{table:{disable:!0}},pageSize:{table:{disable:!0}},totalItems:{table:{disable:!0}},sibling:{table:{disable:!0}},hidePrevNextButtonTitle:{table:{disable:!0}},hidePageSummary:{table:{disable:!0},control:!1},ariaLabel:{table:{disable:!0}},onChange:{table:{disable:!0}}},args:{defaultCurrent:void 0,currentPage:void 0}},defaultArgs={pageSize:(0,_skatteetaten_ds_navigation__WEBPACK_IMPORTED_MODULE_1__.hL)(),totalItems:70,sibling:(0,_skatteetaten_ds_navigation__WEBPACK_IMPORTED_MODULE_1__.yd)(),onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.fn)()},WithRef={name:"With Ref (FA1)",args:Object.assign({},defaultArgs,{defaultCurrent:1,ref:instance=>{instance&&(instance.id="dummyIdForwardedFromRef")}}),argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}}},WithAttributes={name:"With Attributes (FA2-5)",args:Object.assign({},defaultArgs,{defaultCurrent:1,id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"}),argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement})=>{const nav=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement).getByRole("navigation");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(nav).toHaveAttribute("id","htmlId"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(nav).toHaveClass("dummyClassname"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(nav).toHaveAttribute("lang","nb"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(nav).toHaveAttribute("data-testid","123ID")}},Defaults={name:"Defaults",args:{defaultCurrent:1,totalItems:15}},HidePrevNextButtonTitle={name:"Hide Prev/Next-button Title (A1)",args:Object.assign({},defaultArgs,{defaultCurrent:1,hidePrevNextButtonTitle:!0}),argTypes:{hidePrevNextButtonTitle:{table:{disable:!1}}}},WithTextNextPref={name:"With Prev Next Text (A2)",args:Object.assign({},defaultArgs,{defaultCurrent:2}),play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement),nextButton=canvas.getByRole("button",{name:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.g0.t("ds_navigation:pagination.NextButtonTitle")});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(nextButton).toBeInTheDocument();const previousButton=canvas.getByRole("button",{name:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.g0.t("ds_navigation:pagination.PreviousButtonTitle")});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(previousButton).toBeInTheDocument()}},WithListLength={name:"With List Length (A3)",args:Object.assign({},defaultArgs,{pageSize:4,defaultCurrent:1}),argTypes:{pageSize:{table:{disable:!1}}},play:async({canvasElement,step})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement),paginationStatus=canvas.getByText("Viser 1–4 av 70");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(paginationStatus).toBeInTheDocument();const nextButton=canvas.getByRole("button",{name:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.g0.t("ds_navigation:pagination.NextButtonTitle")});await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.BX.click(nextButton),await step("Antall elementer på side er satt til 4 i testen. Beregnet verdier er nå økt og pageSummary viser dette",(async()=>{const paginationStatusNextPage=canvas.getByText("Viser 5–8 av 70");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(paginationStatusNextPage).toBeInTheDocument()})),await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.BX.click(nextButton),await step("Test 9-12",(async()=>{const paginationStatusNextPage=canvas.getByText("Viser 9–12 av 70");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(paginationStatusNextPage).toBeInTheDocument()}))}},Sibling={name:"Width Sibling (A4)",args:Object.assign({},defaultArgs,{defaultCurrent:3,sibling:2}),argTypes:{sibling:{table:{disable:!1}},defaultCurrent:{table:{disable:!1}}},play:async({canvasElement,step})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement);await step("Sjekker om knapper med verdi 1,2,4,5 eksisterer",(async()=>{const pages=canvas.getAllByRole("button",{name:/\d/,current:!1}).map((button=>button.textContent));await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(pages).toEqual(_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_.arrayContaining(["1","2","4","5"]))}))}},WithNavigation={name:"With Navigation (A7, B2 delvis)",args:Object.assign({},defaultArgs,{defaultCurrent:2}),parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement,args,step})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement);await step("Klikk på side 7-knappen",(async()=>{const pageButton=canvas.getByRole("button",{name:"7"});await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.BX.click(pageButton),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.X_)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(args.onChange).toHaveBeenCalledWith(7)));const currentButton=canvas.getByRole("button",{name:"7"});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(currentButton).toHaveAttribute("aria-current","true")})),await step("Klikk på forrige-knappen",(async()=>{const previousButton=canvas.getByRole("button",{name:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.g0.t("ds_navigation:pagination.PreviousButtonTitle")});await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.BX.click(previousButton),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.X_)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(args.onChange).toHaveBeenCalledWith(6)));const currentButton=canvas.getByRole("button",{name:"6"});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(currentButton).toHaveAttribute("aria-current","true")})),await step("Klikk på neste-knappen",(async()=>{const nextButton=canvas.getByRole("button",{name:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.g0.t("ds_navigation:pagination.NextButtonTitle")});await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.BX.click(nextButton),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.X_)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(args.onChange).toHaveBeenCalledWith(7)));const currentButton=canvas.getByRole("button",{name:"7"});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(currentButton).toHaveAttribute("aria-current","true")}))}},WithPrevNextLabel={name:"PrevNext Alternative Label (B5)",args:Object.assign({},defaultArgs,{defaultCurrent:1,hidePrevNextButtonTitle:!0}),argTypes:{hidePrevNextButtonTitle:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0},HTMLSnapshot:{disable:!0}},play:async({canvasElement,args})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement),nextButton=canvas.getByRole("button",{name:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.g0.t("ds_navigation:pagination.NextButtonTitle")});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(nextButton).toBeInTheDocument(),await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.BX.click(nextButton),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(args.onChange).toHaveBeenCalled();const previousButton=canvas.getByRole("button",{name:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.g0.t("ds_navigation:pagination.PreviousButtonTitle")});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(previousButton).toBeInTheDocument()}},data=[{navn:"Donald Duck",dato:"25.03.20",type:"Bruker"},{navn:"Robbie Wiliams",dato:"25.03.15",type:"Admin"},{navn:"Minnie Mouse",dato:"12.05.18",type:"Bruker"},{navn:"Katy Perry",dato:"01.01.23",type:"Admin"},{navn:"Langbein",dato:"14.02.22",type:"Bruker"},{navn:"Justin Bieber",dato:"08.03.19",type:"Bruker"}],listWithLimit=(data,start,listSize)=>{const itemStart=(start-1)*listSize;return data.map(((e,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_2__.aV.Element,{children:[i+1," ",e.navn]},`${e.navn}-${e.dato}`))).slice(itemStart,itemStart+listSize)},WithListLimit={name:"With List Limit (A6, B3)",args:{pageSize:6,totalItems:7*data.length,sibling:(0,_skatteetaten_ds_navigation__WEBPACK_IMPORTED_MODULE_1__.yd)(),currentPage:1},render:args=>{const[{currentPage},updateArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__.useArgs)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skatteetaten_ds_typography__WEBPACK_IMPORTED_MODULE_2__.aV,{hasSpacing:!0,children:listWithLimit(data.concat(data,data,data,data,data,data),currentPage,5)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skatteetaten_ds_navigation__WEBPACK_IMPORTED_MODULE_1__.tl,Object.assign({},args,{pageSize:5,currentPage,onChange:page=>{updateArgs({currentPage:page})}}))]})}},WithCustomAriaLabel={name:"With Custom Aria Label (B1 delvis)",args:Object.assign({},defaultArgs,{ariaLabel:"Egen tekst på nav-elementets aria-label",defaultCurrent:1}),argTypes:{ariaLabel:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement})=>{const nav=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement).getByRole("navigation");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(nav).toHaveAttribute("aria-label","Egen tekst på nav-elementets aria-label")}},WithPageSummary={name:"With Page Summary (A6)",args:Object.assign({},defaultArgs,{defaultCurrent:1}),parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement})=>{const paginationStatus=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement).getByText("Viser 1–10 av 70");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(paginationStatus).toBeInTheDocument()}},WithHiddenPageSummary={name:"With Page Summary Hidden (A5)",args:Object.assign({},defaultArgs,{hidePageSummary:!0,defaultCurrent:1}),argTypes:{hidePageSummary:{table:{disable:!1}}},play:async({canvasElement,step})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement);await step("Summary er skjult for bruker, men synlig for skjermleser",(async()=>{const paginationStatus=canvas.getByText("Viser 1–10 av 70");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(paginationStatus).toBeInTheDocument(),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(paginationStatus).toHaveStyle({width:"1px"})}))}},WithControlled={parameters:{imageSnapshot:{disable:!0}},args:{totalItems:30,sibling:1,pageSize:5,currentPage:1},argTypes:{currentPage:{table:{disable:!1}}},play:async({canvasElement,args})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.uh)(canvasElement),paginationStatus=canvas.getByText("Viser 1–5 av 30");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(paginationStatus).toBeInTheDocument();const nextButton=canvas.getByRole("button",{name:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_0__.g0.t("ds_navigation:pagination.NextButtonTitle")});await _storybook_test__WEBPACK_IMPORTED_MODULE_4__.mV.click(nextButton),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.X_)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(args.onChange).toHaveBeenCalled));const currentButton=await canvas.findByRole("button",{name:"2",current:!0});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_4__.l_)(currentButton).toBeInTheDocument()},render:args=>{const[{currentPage},setPage]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__.useArgs)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skatteetaten_ds_navigation__WEBPACK_IMPORTED_MODULE_1__.tl,Object.assign({},args,{currentPage,onChange:page=>{setPage({currentPage:page})}}))}};WithRef.parameters={...WithRef.parameters,docs:{...WithRef.parameters?.docs,source:{originalSource:"{\n  name: 'With Ref (FA1)',\n  args: {\n    ...defaultArgs,\n    defaultCurrent: 1,\n    ref: (instance: HTMLElement | null): void => {\n      if (instance) {\n        instance.id = 'dummyIdForwardedFromRef';\n      }\n    }\n  },\n  argTypes: {\n    ref: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  }\n} satisfies Story",...WithRef.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  name: 'With Attributes (FA2-5)',\n  args: {\n    ...defaultArgs,\n    defaultCurrent: 1,\n    id: 'htmlId',\n    className: 'dummyClassname',\n    lang: 'nb',\n    'data-testid': '123ID'\n  },\n  argTypes: {\n    id: {\n      table: {\n        disable: false\n      }\n    },\n    className: {\n      table: {\n        disable: false\n      }\n    },\n    lang: {\n      table: {\n        disable: false\n      }\n    },\n    'data-testid': {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const nav = canvas.getByRole('navigation');\n    await expect(nav).toHaveAttribute('id', 'htmlId');\n    await expect(nav).toHaveClass('dummyClassname');\n    await expect(nav).toHaveAttribute('lang', 'nb');\n    await expect(nav).toHaveAttribute('data-testid', '123ID');\n  }\n} satisfies Story",...WithAttributes.parameters?.docs?.source}}},Defaults.parameters={...Defaults.parameters,docs:{...Defaults.parameters?.docs,source:{originalSource:"{\n  name: 'Defaults',\n  args: {\n    defaultCurrent: 1,\n    totalItems: 15\n  }\n} satisfies Story",...Defaults.parameters?.docs?.source}}},HidePrevNextButtonTitle.parameters={...HidePrevNextButtonTitle.parameters,docs:{...HidePrevNextButtonTitle.parameters?.docs,source:{originalSource:"{\n  name: 'Hide Prev/Next-button Title (A1)',\n  args: {\n    ...defaultArgs,\n    defaultCurrent: 1,\n    hidePrevNextButtonTitle: true\n  },\n  argTypes: {\n    hidePrevNextButtonTitle: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...HidePrevNextButtonTitle.parameters?.docs?.source}}},WithTextNextPref.parameters={...WithTextNextPref.parameters,docs:{...WithTextNextPref.parameters?.docs,source:{originalSource:"{\n  name: 'With Prev Next Text (A2)',\n  args: {\n    ...defaultArgs,\n    defaultCurrent: 2\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const nextButton = canvas.getByRole('button', {\n      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')\n    });\n    await expect(nextButton).toBeInTheDocument();\n    const previousButton = canvas.getByRole('button', {\n      name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle')\n    });\n    await expect(previousButton).toBeInTheDocument();\n  }\n} satisfies Story",...WithTextNextPref.parameters?.docs?.source}}},WithListLength.parameters={...WithListLength.parameters,docs:{...WithListLength.parameters?.docs,source:{originalSource:"{\n  name: 'With List Length (A3)',\n  args: {\n    ...defaultArgs,\n    pageSize: 4,\n    defaultCurrent: 1\n  },\n  argTypes: {\n    pageSize: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement,\n    step\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const paginationStatus = canvas.getByText('Viser 1–4 av 70');\n    await expect(paginationStatus).toBeInTheDocument();\n    const nextButton = canvas.getByRole('button', {\n      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')\n    });\n    await fireEvent.click(nextButton);\n    await step('Antall elementer på side er satt til 4 i testen. Beregnet verdier er nå økt og pageSummary viser dette', async () => {\n      const paginationStatusNextPage = canvas.getByText('Viser 5–8 av 70'); // Tankestrek\n      await expect(paginationStatusNextPage).toBeInTheDocument();\n    });\n    await fireEvent.click(nextButton);\n    await step('Test 9-12', async () => {\n      const paginationStatusNextPage = canvas.getByText('Viser 9–12 av 70'); // Tankestrek\n      await expect(paginationStatusNextPage).toBeInTheDocument();\n    });\n  }\n} satisfies Story",...WithListLength.parameters?.docs?.source}}},Sibling.parameters={...Sibling.parameters,docs:{...Sibling.parameters?.docs,source:{originalSource:"{\n  name: 'Width Sibling (A4)',\n  args: {\n    ...defaultArgs,\n    defaultCurrent: 3,\n    sibling: 2\n  },\n  argTypes: {\n    sibling: {\n      table: {\n        disable: false\n      }\n    },\n    defaultCurrent: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement,\n    step\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    await step('Sjekker om knapper med verdi 1,2,4,5 eksisterer', async () => {\n      const pageButtons = canvas.getAllByRole('button', {\n        name: /\\d/,\n        current: false\n      });\n      const pages = pageButtons.map(button => button.textContent);\n      await expect(pages).toEqual(expect.arrayContaining(['1', '2', '4', '5']));\n    });\n  }\n} satisfies Story",...Sibling.parameters?.docs?.source}}},WithNavigation.parameters={...WithNavigation.parameters,docs:{...WithNavigation.parameters?.docs,source:{originalSource:"{\n  name: 'With Navigation (A7, B2 delvis)',\n  args: {\n    ...defaultArgs,\n    defaultCurrent: 2\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement,\n    args,\n    step\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    await step('Klikk på side 7-knappen', async () => {\n      const pageButton = canvas.getByRole('button', {\n        name: '7'\n      });\n      await fireEvent.click(pageButton);\n      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(7));\n      const currentButton = canvas.getByRole('button', {\n        name: '7'\n      });\n      await expect(currentButton).toHaveAttribute('aria-current', 'true');\n    });\n    await step('Klikk på forrige-knappen', async () => {\n      const previousButton = canvas.getByRole('button', {\n        name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle')\n      });\n      await fireEvent.click(previousButton);\n      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(6));\n      const currentButton = canvas.getByRole('button', {\n        name: '6'\n      });\n      await expect(currentButton).toHaveAttribute('aria-current', 'true');\n    });\n    await step('Klikk på neste-knappen', async () => {\n      const nextButton = canvas.getByRole('button', {\n        name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')\n      });\n      await fireEvent.click(nextButton);\n      await waitFor(() => expect(args.onChange).toHaveBeenCalledWith(7));\n      const currentButton = canvas.getByRole('button', {\n        name: '7'\n      });\n      await expect(currentButton).toHaveAttribute('aria-current', 'true');\n    });\n  }\n} satisfies Story",...WithNavigation.parameters?.docs?.source}}},WithPrevNextLabel.parameters={...WithPrevNextLabel.parameters,docs:{...WithPrevNextLabel.parameters?.docs,source:{originalSource:"{\n  name: 'PrevNext Alternative Label (B5)',\n  args: {\n    ...defaultArgs,\n    defaultCurrent: 1,\n    hidePrevNextButtonTitle: true\n  },\n  argTypes: {\n    hidePrevNextButtonTitle: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    },\n    HTMLSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement,\n    args\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const nextButton = canvas.getByRole('button', {\n      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')\n    });\n    await expect(nextButton).toBeInTheDocument();\n    await fireEvent.click(nextButton);\n    await expect(args.onChange).toHaveBeenCalled();\n    const previousButton = canvas.getByRole('button', {\n      name: dsI18n.t('ds_navigation:pagination.PreviousButtonTitle')\n    });\n    await expect(previousButton).toBeInTheDocument();\n  }\n} satisfies Story",...WithPrevNextLabel.parameters?.docs?.source}}},WithListLimit.parameters={...WithListLimit.parameters,docs:{...WithListLimit.parameters?.docs,source:{originalSource:"{\n  name: 'With List Limit (A6, B3)',\n  args: {\n    pageSize: 6,\n    totalItems: data.length * 7,\n    sibling: getDefaultSibling(),\n    currentPage: 1\n  },\n  render: (args): JSX.Element => {\n    const [{\n      currentPage\n    }, updateArgs] = useArgs();\n    const pageSize = 5;\n    const onChange = (page: number): void => {\n      updateArgs({\n        currentPage: page\n      });\n    };\n    return <>\n        <List hasSpacing>\n          {listWithLimit(data.concat(data, data, data, data, data, data), currentPage, pageSize)}\n        </List>\n        <Pagination {...args} pageSize={pageSize} currentPage={currentPage} onChange={onChange} />\n      </>;\n  }\n} satisfies Story",...WithListLimit.parameters?.docs?.source}}},WithCustomAriaLabel.parameters={...WithCustomAriaLabel.parameters,docs:{...WithCustomAriaLabel.parameters?.docs,source:{originalSource:"{\n  name: 'With Custom Aria Label (B1 delvis)',\n  args: {\n    ...defaultArgs,\n    ariaLabel: 'Egen tekst på nav-elementets aria-label',\n    defaultCurrent: 1\n  },\n  argTypes: {\n    ariaLabel: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const nav = canvas.getByRole('navigation');\n    await expect(nav).toHaveAttribute('aria-label', 'Egen tekst på nav-elementets aria-label');\n  }\n} satisfies Story",...WithCustomAriaLabel.parameters?.docs?.source}}},WithPageSummary.parameters={...WithPageSummary.parameters,docs:{...WithPageSummary.parameters?.docs,source:{originalSource:"{\n  name: 'With Page Summary (A6)',\n  args: {\n    ...defaultArgs,\n    defaultCurrent: 1\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    // Antall elementer på side OG antall sider representert med siste page-button\n    const paginationStatus = canvas.getByText('Viser 1–10 av 70');\n    await expect(paginationStatus).toBeInTheDocument();\n  }\n} satisfies Story",...WithPageSummary.parameters?.docs?.source}}},WithHiddenPageSummary.parameters={...WithHiddenPageSummary.parameters,docs:{...WithHiddenPageSummary.parameters?.docs,source:{originalSource:"{\n  name: 'With Page Summary Hidden (A5)',\n  args: {\n    ...defaultArgs,\n    hidePageSummary: true,\n    defaultCurrent: 1\n  },\n  argTypes: {\n    hidePageSummary: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement,\n    step\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    await step('Summary er skjult for bruker, men synlig for skjermleser', async () => {\n      const paginationStatus = canvas.getByText('Viser 1–10 av 70');\n      await expect(paginationStatus).toBeInTheDocument();\n      await expect(paginationStatus).toHaveStyle({\n        width: '1px'\n      });\n    });\n  }\n} satisfies Story",...WithHiddenPageSummary.parameters?.docs?.source}}},WithControlled.parameters={...WithControlled.parameters,docs:{...WithControlled.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  args: {\n    totalItems: 30,\n    sibling: 1,\n    pageSize: 5,\n    currentPage: 1\n  },\n  argTypes: {\n    currentPage: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement,\n    args\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    // Antall elementer på side OG antall sider representert med siste page-button\n    const paginationStatus = canvas.getByText('Viser 1–5 av 30');\n    await expect(paginationStatus).toBeInTheDocument();\n    const nextButton = canvas.getByRole('button', {\n      name: dsI18n.t('ds_navigation:pagination.NextButtonTitle')\n    });\n    await userEvent.click(nextButton);\n    await waitFor(() => expect(args.onChange).toHaveBeenCalled);\n    const currentButton = await canvas.findByRole('button', {\n      name: '2',\n      current: true\n    });\n    await expect(currentButton).toBeInTheDocument();\n  },\n  render: (args): JSX.Element => {\n    const [{\n      currentPage\n    }, setPage] = useArgs();\n    const onChange = (page: number): void => {\n      setPage({\n        currentPage: page\n      });\n    };\n    return <Pagination {...args} currentPage={currentPage} onChange={onChange} />;\n  }\n} satisfies Story",...WithControlled.parameters?.docs?.source}}};const __namedExportsOrder=["WithRef","WithAttributes","Defaults","HidePrevNextButtonTitle","WithTextNextPref","WithListLength","Sibling","WithNavigation","WithPrevNextLabel","WithListLimit","WithCustomAriaLabel","WithPageSummary","WithHiddenPageSummary","WithControlled"]}}]);