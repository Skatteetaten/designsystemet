"use strict";(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[2609],{"./apps/ds-playground/src/stories/__tests__/Tabs.test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defaults:()=>Defaults,WithAriaRolesTabindex:()=>WithAriaRolesTabindex,WithAttributes:()=>WithAttributes,WithDefaultValue:()=>WithDefaultValue,WithMultiline:()=>WithMultiline,WithRef:()=>WithRef,WithTabClick:()=>WithTabClick,WithValue:()=>WithValue,WithVariantCompact:()=>WithVariantCompact,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _skatteetaten_ds_buttons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ds-buttons/src/index.ts"),_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ds-collections/src/index.ts"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),_storybook_test__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ,title:"Tester/Tabs/Tabs",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},defaultValue:{table:{disable:!0}},value:{table:{disable:!0}},isMultiline:{table:{disable:!0}},variant:{table:{disable:!0}},hasBorder:{table:{disable:!0}},onChange:{table:{disable:!0}}}},defaultArgs={onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)(),defaultValue:"tab1"},TemplateTabs=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ,Object.assign({},args,{onChange:e=>{null==args.onChange||args.onChange(e)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.List,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab1",children:"Person"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab2",children:"Bedrift"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab3",children:"Organisasjon"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab1",children:"Tabs.Panel Person"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab2",children:"Tabs.Panel Bedrift"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab3",children:"Tabs.Panel Organisasjon"})]})),Defaults={name:"Defaults (A2)",render:TemplateTabs,args:Object.assign({},defaultArgs),argTypes:{defaultValue:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:void 0}},play:async({canvasElement})=>{const tab=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getByRole("tab",{name:"Person"});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(tab).toBeInTheDocument()}},WithRef={name:"With Ref (FA1)",args:Object.assign({},defaultArgs,{ref:instance=>{instance&&(instance.id="dummyIdForwardedFromRef")}}),argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement})=>{const tabs=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getAllByRole("generic")[1];await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(tabs).toHaveAttribute("id","dummyIdForwardedFromRef")}},WithAttributes={name:"With Attributes (FA2-5, B1)",render:TemplateTabs,args:{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID",defaultValue:"tab1"},argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:async({canvasElement})=>{const container=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getAllByRole("generic")[1];await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("id","htmlId"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveClass("dummyClassname"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("lang","nb"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(container).toHaveAttribute("data-testid","123ID")}},WithVariantCompact={name:"With Variant Compact (A1)",render:TemplateTabs,args:Object.assign({},defaultArgs,{variant:"compact"}),argTypes:{variant:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1}}},WithDefaultValue={name:"With DefaultValue",render:TemplateTabs,args:Object.assign({},defaultArgs,{defaultValue:"tab2",onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)()}),parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement})=>{const secondTab=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement).getByRole("tab",{name:"Bedrift"});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(secondTab).toBeInTheDocument(),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(secondTab).toHaveAttribute("aria-selected","true")}},WithValue={name:"With Value",args:Object.assign({},defaultArgs,{defaultValue:void 0,value:"tab2"}),argTypes:{value:{table:{disable:!1}}},render:args=>{const[{value},updateArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ,Object.assign({},args,{value,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.List,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab1",children:"Person"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab2",children:"Bedrift"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_buttons__WEBPACK_IMPORTED_MODULE_0__.zx,{onClick:()=>{updateArgs("tab1"===value?{value:"tab2"}:{value:"tab1"})},children:"ToggleTab"})]})},parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement,step})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement);await step("Sjekker om Bedrift-tab finnes og har attribut aria-selected:true",(async()=>{const secondTab=await canvas.findByRole("tab",{name:"Bedrift",selected:!0});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(secondTab).toBeInTheDocument()})),await step("Endrer value-prop utenfra og forventer at Person-tab er aktiv",(async()=>{const button=await canvas.findByRole("button",{name:"ToggleTab"});await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.mV.click(button);const firsttab=await canvas.findByRole("tab",{name:"Person",selected:!0});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(firsttab).toBeInTheDocument()})),await step("Ingen test - Nullstiller - Toggler aktiv tab tilbake til tab2/Bedrift for å kunne kjøre test i nettelser flere ganger",(async()=>{const button=await canvas.findByRole("button",{name:"ToggleTab"});await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.mV.click(button)}))}},WithAriaRolesTabindex={name:"With Aria Roles tabIndex (B1, B2)",render:TemplateTabs,args:Object.assign({},defaultArgs,{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)()}),parameters:{imageSnapshot:{disable:!0}},play:async({canvasElement,step})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement),firstTab=canvas.getByRole("tab",{name:"Person"});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(firstTab).toBeInTheDocument();const tabList=canvas.getByRole("tablist");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(tabList).toBeInTheDocument();const tabPanel=canvas.getByRole("tabpanel");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(tabPanel).toBeInTheDocument(),await step("Sjekk om korrekt tabIndex på aktiv og ikke-aktive tabs",(async()=>{const tabs=canvas.getAllByRole("tab");Object.entries(tabs).forEach((async([_i,tabElement],index)=>{await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(tabElement).toHaveAttribute("tabIndex",0===index?"0":"-1")}))}))}},WithMultiline={name:"With Multiline (A5)",args:Object.assign({},defaultArgs,{isMultiline:!0}),argTypes:{isMultiline:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!1},viewport:{defaultViewport:"--mobile"}},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ,Object.assign({},args,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.List,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab1",children:"Person"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab2",children:"Bedrift"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab3",children:"Ubehandlede saker (+99)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Tab,{value:"tab4",children:"Behandlede saker (1)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab1",children:"Tabs.Panel - Person"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab2",children:"Tabs.Panel - Bedrift"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab3",children:"Tabs.Panel - Ubehandlede saker (+99)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_1__.mQ.Panel,{value:"tab4",children:"Tabs.Panel - Behandlede"})]}))},WithTabClick={name:"With Tab Click (A2, B2, B3, B4)",render:TemplateTabs,args:Object.assign({},defaultArgs,{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.fn)()}),parameters:{imageSnapshot:{disable:!0}},play:async({args,canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.uh)(canvasElement),firstTab=canvas.getByRole("tab",{name:"Person"});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(firstTab).toBeInTheDocument(),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(firstTab).toHaveAttribute("aria-selected","true"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(firstTab).toHaveAttribute("tabIndex","0");const secondTab=canvas.getByRole("tab",{name:"Bedrift"});await _storybook_test__WEBPACK_IMPORTED_MODULE_3__.mV.click(secondTab),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.X_)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(args.onChange).toHaveBeenCalled())),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(firstTab).toHaveAttribute("aria-selected","false"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_3__.l_)(firstTab).toHaveAttribute("tabIndex","-1")}};Defaults.parameters={...Defaults.parameters,docs:{...Defaults.parameters?.docs,source:{originalSource:"{\n  name: 'Defaults (A2)',\n  render: TemplateTabs,\n  args: {\n    ...defaultArgs\n  },\n  argTypes: {\n    defaultValue: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: undefined\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const tab = canvas.getByRole('tab', {\n      name: 'Person'\n    });\n    await expect(tab).toBeInTheDocument();\n  }\n} satisfies Story",...Defaults.parameters?.docs?.source}}},WithRef.parameters={...WithRef.parameters,docs:{...WithRef.parameters?.docs,source:{originalSource:"{\n  name: 'With Ref (FA1)',\n  args: {\n    ...defaultArgs,\n    ref: (instance: HTMLDivElement | null): void => {\n      if (instance) {\n        instance.id = 'dummyIdForwardedFromRef';\n      }\n    }\n  },\n  argTypes: {\n    ref: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const tabs = canvas.getAllByRole('generic')[1];\n    await expect(tabs).toHaveAttribute('id', 'dummyIdForwardedFromRef');\n  }\n} satisfies Story",...WithRef.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  name: 'With Attributes (FA2-5, B1)',\n  render: TemplateTabs,\n  args: {\n    id: 'htmlId',\n    className: 'dummyClassname',\n    lang: 'nb',\n    'data-testid': '123ID',\n    defaultValue: 'tab1'\n  },\n  argTypes: {\n    id: {\n      table: {\n        disable: false\n      }\n    },\n    className: {\n      table: {\n        disable: false\n      }\n    },\n    lang: {\n      table: {\n        disable: false\n      }\n    },\n    'data-testid': {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const container = canvas.getAllByRole('generic')[1];\n    await expect(container).toHaveAttribute('id', 'htmlId');\n    await expect(container).toHaveClass('dummyClassname');\n    await expect(container).toHaveAttribute('lang', 'nb');\n    await expect(container).toHaveAttribute('data-testid', '123ID');\n  }\n} satisfies Story",...WithAttributes.parameters?.docs?.source}}},WithVariantCompact.parameters={...WithVariantCompact.parameters,docs:{...WithVariantCompact.parameters?.docs,source:{originalSource:"{\n  name: 'With Variant Compact (A1)',\n  render: TemplateTabs,\n  args: {\n    ...defaultArgs,\n    variant: 'compact'\n  },\n  argTypes: {\n    variant: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: false\n    }\n  }\n} satisfies Story",...WithVariantCompact.parameters?.docs?.source}}},WithDefaultValue.parameters={...WithDefaultValue.parameters,docs:{...WithDefaultValue.parameters?.docs,source:{originalSource:"{\n  name: 'With DefaultValue',\n  render: TemplateTabs,\n  args: {\n    ...defaultArgs,\n    defaultValue: 'tab2',\n    onChange: fn()\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const secondTab = canvas.getByRole('tab', {\n      name: 'Bedrift'\n    });\n    await expect(secondTab).toBeInTheDocument();\n    await expect(secondTab).toHaveAttribute('aria-selected', 'true');\n  }\n} satisfies Story",...WithDefaultValue.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:"{\n  name: 'With Value',\n  args: {\n    ...defaultArgs,\n    defaultValue: undefined,\n    value: 'tab2'\n  },\n  argTypes: {\n    value: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  render: (args): JSX.Element => {\n    const [{\n      value\n    }, updateArgs] = useArgs();\n    const toggleTab = (): void => {\n      if (value === 'tab1') {\n        updateArgs({\n          value: 'tab2'\n        });\n      } else {\n        updateArgs({\n          value: 'tab1'\n        });\n      }\n    };\n    return <>\n        <Tabs {...args} value={value}>\n          <Tabs.List>\n            <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>\n            <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>\n          </Tabs.List>\n          <Tabs.Panel value={'tab1'}>{'Tabs.Panel - Person'}</Tabs.Panel>\n          <Tabs.Panel value={'tab2'}>{'Tabs.Panel - Bedrift'}</Tabs.Panel>\n        </Tabs>\n        <Button onClick={toggleTab}>{'ToggleTab'}</Button>\n      </>;\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement,\n    step\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    await step('Sjekker om Bedrift-tab finnes og har attribut aria-selected:true', async () => {\n      const secondTab = await canvas.findByRole('tab', {\n        name: 'Bedrift',\n        selected: true\n      });\n      await expect(secondTab).toBeInTheDocument();\n    });\n    await step('Endrer value-prop utenfra og forventer at Person-tab er aktiv', async () => {\n      const button = await canvas.findByRole('button', {\n        name: 'ToggleTab'\n      });\n      await userEvent.click(button);\n      const firsttab = await canvas.findByRole('tab', {\n        name: 'Person',\n        selected: true\n      });\n      await expect(firsttab).toBeInTheDocument();\n    });\n    await step('Ingen test - Nullstiller - Toggler aktiv tab tilbake til tab2/Bedrift for å kunne kjøre test i nettelser flere ganger', async () => {\n      const button = await canvas.findByRole('button', {\n        name: 'ToggleTab'\n      });\n      await userEvent.click(button);\n    });\n  }\n} satisfies Story",...WithValue.parameters?.docs?.source}}},WithAriaRolesTabindex.parameters={...WithAriaRolesTabindex.parameters,docs:{...WithAriaRolesTabindex.parameters?.docs,source:{originalSource:"{\n  name: 'With Aria Roles tabIndex (B1, B2)',\n  render: TemplateTabs,\n  args: {\n    ...defaultArgs,\n    onChange: fn()\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement,\n    step\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const firstTab = canvas.getByRole('tab', {\n      name: 'Person'\n    });\n    await expect(firstTab).toBeInTheDocument();\n    const tabList = canvas.getByRole('tablist');\n    await expect(tabList).toBeInTheDocument();\n    const tabPanel = canvas.getByRole('tabpanel');\n    await expect(tabPanel).toBeInTheDocument();\n    await step('Sjekk om korrekt tabIndex på aktiv og ikke-aktive tabs', async () => {\n      const tabs = canvas.getAllByRole('tab');\n      Object.entries(tabs).forEach(async ([_i, tabElement], index) => {\n        await expect(tabElement).toHaveAttribute('tabIndex', index === 0 ? '0' : '-1');\n      });\n    });\n  }\n} satisfies Story",...WithAriaRolesTabindex.parameters?.docs?.source}}},WithMultiline.parameters={...WithMultiline.parameters,docs:{...WithMultiline.parameters?.docs,source:{originalSource:"{\n  name: 'With Multiline (A5)',\n  args: {\n    ...defaultArgs,\n    isMultiline: true\n  },\n  argTypes: {\n    isMultiline: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: false\n    },\n    viewport: {\n      defaultViewport: '--mobile'\n    }\n  },\n  render: (args): JSX.Element => {\n    return <Tabs {...args}>\n        <Tabs.List>\n          <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>\n          <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>\n          <Tabs.Tab value={'tab3'}>{'Ubehandlede saker (+99)'}</Tabs.Tab>\n          <Tabs.Tab value={'tab4'}>{'Behandlede saker (1)'}</Tabs.Tab>\n        </Tabs.List>\n        <Tabs.Panel value={'tab1'}>{'Tabs.Panel - Person'}</Tabs.Panel>\n        <Tabs.Panel value={'tab2'}>{'Tabs.Panel - Bedrift'}</Tabs.Panel>\n        <Tabs.Panel value={'tab3'}>\n          {'Tabs.Panel - Ubehandlede saker (+99)'}\n        </Tabs.Panel>\n        <Tabs.Panel value={'tab4'}>{'Tabs.Panel - Behandlede'}</Tabs.Panel>\n      </Tabs>;\n  }\n} satisfies Story",...WithMultiline.parameters?.docs?.source}}},WithTabClick.parameters={...WithTabClick.parameters,docs:{...WithTabClick.parameters?.docs,source:{originalSource:"{\n  name: 'With Tab Click (A2, B2, B3, B4)',\n  render: TemplateTabs,\n  args: {\n    ...defaultArgs,\n    onChange: fn()\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    args,\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const firstTab = canvas.getByRole('tab', {\n      name: 'Person'\n    });\n    await expect(firstTab).toBeInTheDocument();\n    await expect(firstTab).toHaveAttribute('aria-selected', 'true');\n    await expect(firstTab).toHaveAttribute('tabIndex', '0');\n    const secondTab = canvas.getByRole('tab', {\n      name: 'Bedrift'\n    });\n    await userEvent.click(secondTab);\n    await waitFor(() => expect(args.onChange).toHaveBeenCalled());\n    await expect(firstTab).toHaveAttribute('aria-selected', 'false');\n    await expect(firstTab).toHaveAttribute('tabIndex', '-1');\n  }\n} satisfies Story",...WithTabClick.parameters?.docs?.source}}};const __namedExportsOrder=["Defaults","WithRef","WithAttributes","WithVariantCompact","WithDefaultValue","WithValue","WithAriaRolesTabindex","WithMultiline","WithTabClick"]}}]);