(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[6892],{"./apps/ds-playground/src/stories/__tests__/OpenClose.test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Compact:()=>Compact,CompactAndIsExpanded:()=>CompactAndIsExpanded,CompactWithIconRight:()=>CompactWithIconRight,CompactWithIconRightAndUnderline:()=>CompactWithIconRightAndUnderline,CompactWithUnderline:()=>CompactWithUnderline,Defaults:()=>Defaults,IconRightContent:()=>IconRightContent,InContext:()=>InContext,IsExpanded:()=>IsExpanded,WithAttributes:()=>WithAttributes,WithChangingTitle:()=>WithChangingTitle,WithIconRight:()=>WithIconRight,WithIconRightAndNoUnderline:()=>WithIconRightAndNoUnderline,WithIsOnClickOnlyFiredOnOpen:()=>WithIsOnClickOnlyFiredOnOpen,WithLongTitle:()=>WithLongTitle,WithOnClick:()=>WithOnClick,WithRef:()=>WithRef,WithTitleAs:()=>WithTitleAs,WithoutUnderline:()=>WithoutUnderline,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__),_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ds-collections/src/index.ts"),_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ds-core-utils/src/index.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./apps/ds-playground/src/stories/__tests__/testUtils/storybook.testing.utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createForOfIteratorHelperLoose(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(it)return(it=it.call(o)).next.bind(it);if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0;return function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var defaultContent="En pendler er en lønnstaker som overnatter borte på grunn av jobb. Hvis du er pendler kan du ha krav på fradrag for dine merkostnader til kost, losji og reiser til og fra pendlerboligen.";const __WEBPACK_DEFAULT_EXPORT__={component:_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_3__.q6,title:"Tester/OpenClose",argTypes:{key:{table:{disable:!0}},ref:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}},lang:{table:{disable:!0}},"data-testid":{table:{disable:!0}},children:{table:{disable:!0}},variant:{table:{disable:!0},options:[].concat(_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_4__.Eo),control:"inline-radio"},iconPosition:{table:{disable:!0},options:[].concat(_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_4__.Cz),control:"inline-radio"},isExpanded:{table:{disable:!0}},isOnClickOnlyFiredOnOpen:{table:{disable:!0}},titleAs:{options:[].concat(_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_4__.C9),control:"inline-radio",table:{disable:!0}},title:{table:{disable:!0}},showUnderline:{table:{disable:!0}},onClick:{table:{disable:!0}}}};var TemplateWithOnClick=function TemplateWithOnClick(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_3__.q6,Object.assign({},args,{onClick:function onClick(e){null==args.onClick||args.onClick(e)},children:args.children}))};TemplateWithOnClick.displayName="TemplateWithOnClick";var TemplateWithChangingTitle=function TemplateWithChangingTitle(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("OpenClose har ikke blitt åpnet"),title=_useState[0],setTitle=_useState[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_3__.q6,Object.assign({},args,{title,onClick:function onClick(_e){setTitle("OpenClose har blitt åpnet")},children:args.children}))};TemplateWithChangingTitle.displayName="TemplateWithChangingTitle";var _play,_play2,_play3,_play4,_play5,_play6,_play7,_play8,defaultArgs={title:"Er jeg pendler?",children:defaultContent},WithRef={name:"With Ref (FA1)",args:Object.assign({},defaultArgs,{ref:function ref(instance){instance&&(instance.id="dummyIdForwardedFromRef")}}),argTypes:{ref:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:(_play=_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(_ref){var canvasElement,canvas;return _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),_context.next=4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(canvas.getByRole("button")).toHaveAttribute("id","dummyIdForwardedFromRef");case 4:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})},WithAttributes={name:"With Attributes(FA2-5)",args:Object.assign({},defaultArgs,{id:"htmlId",className:"dummyClassname",lang:"nb","data-testid":"123ID"}),argTypes:{id:{table:{disable:!1}},className:{table:{disable:!1}},lang:{table:{disable:!1}},"data-testid":{table:{disable:!1}}},play:(_play2=_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee2(_ref2){var canvasElement,canvas,button;return _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return canvasElement=_ref2.canvasElement,canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),button=canvas.getByRole("button"),_context2.next=5,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveClass("dummyClassname");case 5:return _context2.next=7,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveAttribute("id","htmlId");case 7:return _context2.next=9,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveAttribute("lang","nb");case 9:return _context2.next=11,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveAttribute("data-testid","123ID");case 11:case"end":return _context2.stop()}}),_callee2)}))),function play(_x2){return _play2.apply(this,arguments)})},Defaults={name:"Defaults (A2, B1)",args:Object.assign({},defaultArgs),argTypes:{title:{table:{disable:!1}}},parameters:{imageSnapshot:{focus:_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_6__.YS+" button",hover:_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_6__.YS+" button",click:_testUtils_storybook_testing_utils__WEBPACK_IMPORTED_MODULE_6__.YS+" button"}},play:(_play3=_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee3(_ref3){var canvasElement,canvas,button,title,content,svg;return _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return canvasElement=_ref3.canvasElement,canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),button=canvas.getByRole("button"),_context3.next=5,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toBeInTheDocument();case 5:return _context3.next=7,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveAttribute("type","button");case 7:return _context3.next=9,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveAttribute("aria-expanded","false");case 9:return title=canvas.getByText("Er jeg pendler?"),_context3.next=12,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(title).toBeInTheDocument();case 12:return content=canvas.queryByText(defaultContent),_context3.next=15,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(content).not.toBeInTheDocument();case 15:return svg=button.querySelector("svg"),_context3.next=18,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(svg).toBeInTheDocument();case 18:return _context3.next=20,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(svg).toHaveAttribute("aria-hidden","true");case 20:case"end":return _context3.stop()}}),_callee3)}))),function play(_x3){return _play3.apply(this,arguments)})},WithIconRight={name:"With Icon Right (A2)",args:Object.assign({},defaultArgs,{iconPosition:"right"}),argTypes:{iconPosition:{table:{disable:!1}}}},InContext={render:function TemplateWithContext(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{children:"I Skatteetaten definerer vi om du er pendler ut fra at en rekke vilkår må være oppfylt. For å få fradragene må du blant annet være lønnstaker og overnatte borte på grunn av jobb. Pendlerfradrag gis kun for reiseutgifter som du selv (pendleren) har for å besøke hjemmet ditt, ikke for familie som kommer på besøk til din pendlerbolig."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_3__.q6,Object.assign({},args,{children:args.children}))]})},name:"In Context (A1 delvis)",args:Object.assign({},defaultArgs),parameters:{imageSnapshot:{disable:!0}}},WithoutUnderline={name:"Without Underline (A3)",args:Object.assign({},defaultArgs,{showUnderline:!1}),argTypes:{showUnderline:{table:{disable:!1}}}},WithIconRightAndNoUnderline={name:"With Icon Right And No Underline (A2, A3)",args:Object.assign({},defaultArgs,{iconPosition:"right",showUnderline:!1}),argTypes:{iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},Compact={name:"Compact (A1 delvis)",args:Object.assign({},defaultArgs,{variant:"compact"}),argTypes:{variant:{table:{disable:!1}}}},CompactWithIconRight={name:"Compact With Icon Right (A1 delvis, A2)",args:Object.assign({},defaultArgs,{variant:"compact",iconPosition:"right"}),argTypes:{variant:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},CompactWithUnderline={name:"Compact With Underline (A1 delvis, A3)",args:Object.assign({},defaultArgs,{variant:"compact",showUnderline:!0}),argTypes:{variant:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},CompactWithIconRightAndUnderline={name:"Compact With Icon Right And Underline (A1 delvis, A2, A3)",args:Object.assign({},defaultArgs,{variant:"compact",iconPosition:"right",showUnderline:!0}),argTypes:{variant:{table:{disable:!1}},iconPosition:{table:{disable:!1}},showUnderline:{table:{disable:!1}}}},IsExpanded={name:"With IsExpanded (A4 delvis)",args:Object.assign({},defaultArgs,{isExpanded:!0}),argTypes:{isExpanded:{table:{disable:!1}}},play:(_play4=_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee4(_ref4){var canvasElement,canvas,content,button;return _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return canvasElement=_ref4.canvasElement,canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),_context4.next=4,canvas.findByText(defaultContent);case 4:return content=_context4.sent,_context4.next=7,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(content).toBeInTheDocument();case 7:return button=canvas.getByRole("button"),_context4.next=10,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveAttribute("aria-expanded","true");case 10:case"end":return _context4.stop()}}),_callee4)}))),function play(_x4){return _play4.apply(this,arguments)})},CompactAndIsExpanded={name:"With Compact And IsExpanded (A4 delvis)",args:Object.assign({},defaultArgs,{isExpanded:!0,variant:"compact"}),argTypes:{isExpanded:{table:{disable:!1}},variant:{table:{disable:!1}}}},IconRightContent={name:"With IsExpanded And Icon Right (A1 delvis)",args:Object.assign({},defaultArgs,{isExpanded:!0,iconPosition:"right"}),argTypes:{isExpanded:{table:{disable:!1}},iconPosition:{table:{disable:!1}}}},WithOnClick={render:TemplateWithOnClick,name:"With OnClick (A4 delvis, B1 delvis)",args:Object.assign({},defaultArgs),parameters:{imageSnapshot:{disable:!0}},play:(_play5=_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee5(_ref5){var args,canvasElement,canvas,button,content;return _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return args=_ref5.args,canvasElement=_ref5.canvasElement,canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),button=canvas.getByRole("button"),_context5.next=5,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveAttribute("aria-expanded","false");case 5:return _context5.next=7,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.BX.click(button);case 7:return content=canvas.getByText(defaultContent),_context5.next=10,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(button).toHaveAttribute("aria-expanded","true");case 10:return _context5.next=12,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(content).toBeInTheDocument();case 12:return _context5.next=14,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.BX.click(button);case 14:return _context5.next=16,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(content).not.toBeInTheDocument();case 16:return _context5.next=18,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.X_)((function(){return(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(args.onClick).toHaveBeenCalledTimes(2)}));case 18:case"end":return _context5.stop()}}),_callee5)}))),function play(_x5){return _play5.apply(this,arguments)})},WithIsOnClickOnlyFiredOnOpen={render:TemplateWithOnClick,name:"With IsOnClickOnlyFiredOnOpen (A4 delvis)",args:Object.assign({},defaultArgs,{isOnClickOnlyFiredOnOpen:!0}),argTypes:{isOnClickOnlyFiredOnOpen:{table:{disable:!1}}},parameters:{imageSnapshot:{disable:!0}},play:(_play6=_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee6(_ref6){var args,canvasElement,canvas,button;return _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return args=_ref6.args,canvasElement=_ref6.canvasElement,canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),button=canvas.getByRole("button"),_context6.next=5,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.BX.click(button);case 5:return _context6.next=7,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.BX.click(button);case 7:return _context6.next=9,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.X_)((function(){return(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(args.onClick).toHaveBeenCalledTimes(1)}));case 9:case"end":return _context6.stop()}}),_callee6)}))),function play(_x6){return _play6.apply(this,arguments)})},WithChangingTitle={render:TemplateWithChangingTitle,name:"With Changing Title (A4 delvis)",args:Object.assign({},defaultArgs),parameters:{imageSnapshot:{disable:!0}},play:(_play7=_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee7(_ref7){var canvasElement,canvas,button,oldTitle,newTitle;return _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee7$(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:return canvasElement=_ref7.canvasElement,canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),button=canvas.getByRole("button"),oldTitle=canvas.getByText("OpenClose har ikke blitt åpnet"),_context7.next=6,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(oldTitle).toBeInTheDocument();case 6:return _context7.next=8,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.BX.click(button);case 8:return newTitle=canvas.getByText("OpenClose har blitt åpnet"),_context7.next=11,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(newTitle).toBeInTheDocument();case 11:case"end":return _context7.stop()}}),_callee7)}))),function play(_x7){return _play7.apply(this,arguments)})},WithTitleAs={render:function TemplateWithAllHeadings(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_4__.C9.map((function(headingLevel,item){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_skatteetaten_ds_collections__WEBPACK_IMPORTED_MODULE_3__.q6,Object.assign({},args,{titleAs:headingLevel,title:"Heading "+headingLevel,children:args.children}),"level_"+item)}))})},name:"With TitleAs (B2)",args:Object.assign({},defaultArgs),parameters:{imageSnapshot:{disable:!0}},play:(_play8=_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()(_var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee8(_ref8){var canvasElement,canvas,headings,_iterator,_step,_step$value,index,heading;return _var_jenkins_home_workspace_gnsystemet_designsystemet_master_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee8$(_context8){for(;;)switch(_context8.prev=_context8.next){case 0:canvasElement=_ref8.canvasElement,canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.uh)(canvasElement),headings=canvas.getAllByRole("heading"),_iterator=_createForOfIteratorHelperLoose(headings.entries());case 4:if((_step=_iterator()).done){_context8.next=10;break}return _step$value=_step.value,index=_step$value[0],heading=_step$value[1],_context8.next=8,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_5__.l_)(heading.tagName).toBe(_skatteetaten_ds_core_utils__WEBPACK_IMPORTED_MODULE_4__.C9[index].toLocaleUpperCase());case 8:_context8.next=4;break;case 10:case"end":return _context8.stop()}}),_callee8)}))),function play(_x8){return _play8.apply(this,arguments)})},WithLongTitle={name:"With Long Title (A1 delvis)",args:Object.assign({},defaultArgs,{title:"Denneknappenharenveldiglangtekst.Dentekstengåroverflerelinjerfordidenersålangogdablirikonetriktigplassert.Fordetkanjoskjeattittelengåroverflerelinjerhvisdeterenveldiglitenskjerm.Sådamåvisjekkeatdetikkeserrartut."}),argTypes:{title:{table:{disable:!1}}},parameters:{viewport:{defaultViewport:"--breakpoint-xs"}}};WithRef.parameters={...WithRef.parameters,docs:{...WithRef.parameters?.docs,source:{originalSource:"{\n  name: 'With Ref (FA1)',\n  args: {\n    ...defaultArgs,\n    ref: (instance: HTMLButtonElement | null): void => {\n      if (instance) {\n        instance.id = 'dummyIdForwardedFromRef';\n      }\n    }\n  },\n  argTypes: {\n    ref: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    await expect(canvas.getByRole('button')).toHaveAttribute('id', 'dummyIdForwardedFromRef');\n  }\n} satisfies Story",...WithRef.parameters?.docs?.source}}},WithAttributes.parameters={...WithAttributes.parameters,docs:{...WithAttributes.parameters?.docs,source:{originalSource:"{\n  name: 'With Attributes(FA2-5)',\n  args: {\n    ...defaultArgs,\n    id: elementId,\n    className: 'dummyClassname',\n    lang: 'nb',\n    'data-testid': '123ID'\n  },\n  argTypes: {\n    id: {\n      table: {\n        disable: false\n      }\n    },\n    className: {\n      table: {\n        disable: false\n      }\n    },\n    lang: {\n      table: {\n        disable: false\n      }\n    },\n    'data-testid': {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button');\n    await expect(button).toHaveClass('dummyClassname');\n    await expect(button).toHaveAttribute('id', elementId);\n    await expect(button).toHaveAttribute('lang', 'nb');\n    await expect(button).toHaveAttribute('data-testid', '123ID');\n  }\n} satisfies Story",...WithAttributes.parameters?.docs?.source}}},Defaults.parameters={...Defaults.parameters,docs:{...Defaults.parameters?.docs,source:{originalSource:"{\n  name: 'Defaults (A2, B1)',\n  args: {\n    ...defaultArgs\n  },\n  argTypes: {\n    title: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      focus: `${wrapper} button`,\n      hover: `${wrapper} button`,\n      click: `${wrapper} button`\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button');\n    await expect(button).toBeInTheDocument();\n    await expect(button).toHaveAttribute('type', 'button');\n    await expect(button).toHaveAttribute('aria-expanded', 'false');\n    const title = canvas.getByText(defaultTitle);\n    await expect(title).toBeInTheDocument();\n    const content = canvas.queryByText(defaultContent);\n    await expect(content).not.toBeInTheDocument();\n    // eslint-disable-next-line testing-library/no-node-access\n    const svg = button.querySelector('svg');\n    await expect(svg).toBeInTheDocument();\n    await expect(svg).toHaveAttribute('aria-hidden', 'true');\n  }\n} satisfies Story",...Defaults.parameters?.docs?.source}}},WithIconRight.parameters={...WithIconRight.parameters,docs:{...WithIconRight.parameters?.docs,source:{originalSource:"{\n  name: 'With Icon Right (A2)',\n  args: {\n    ...defaultArgs,\n    iconPosition: 'right'\n  },\n  argTypes: {\n    iconPosition: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...WithIconRight.parameters?.docs?.source}}},InContext.parameters={...InContext.parameters,docs:{...InContext.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithContext,\n  name: 'In Context (A1 delvis)',\n  args: {\n    ...defaultArgs\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  }\n} satisfies Story",...InContext.parameters?.docs?.source}}},WithoutUnderline.parameters={...WithoutUnderline.parameters,docs:{...WithoutUnderline.parameters?.docs,source:{originalSource:"{\n  name: 'Without Underline (A3)',\n  args: {\n    ...defaultArgs,\n    showUnderline: false\n  },\n  argTypes: {\n    showUnderline: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...WithoutUnderline.parameters?.docs?.source}}},WithIconRightAndNoUnderline.parameters={...WithIconRightAndNoUnderline.parameters,docs:{...WithIconRightAndNoUnderline.parameters?.docs,source:{originalSource:"{\n  name: 'With Icon Right And No Underline (A2, A3)',\n  args: {\n    ...defaultArgs,\n    iconPosition: 'right',\n    showUnderline: false\n  },\n  argTypes: {\n    iconPosition: {\n      table: {\n        disable: false\n      }\n    },\n    showUnderline: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...WithIconRightAndNoUnderline.parameters?.docs?.source}}},Compact.parameters={...Compact.parameters,docs:{...Compact.parameters?.docs,source:{originalSource:"{\n  name: 'Compact (A1 delvis)',\n  args: {\n    ...defaultArgs,\n    variant: 'compact'\n  },\n  argTypes: {\n    variant: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...Compact.parameters?.docs?.source}}},CompactWithIconRight.parameters={...CompactWithIconRight.parameters,docs:{...CompactWithIconRight.parameters?.docs,source:{originalSource:"{\n  name: 'Compact With Icon Right (A1 delvis, A2)',\n  args: {\n    ...defaultArgs,\n    variant: 'compact',\n    iconPosition: 'right'\n  },\n  argTypes: {\n    variant: {\n      table: {\n        disable: false\n      }\n    },\n    iconPosition: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...CompactWithIconRight.parameters?.docs?.source}}},CompactWithUnderline.parameters={...CompactWithUnderline.parameters,docs:{...CompactWithUnderline.parameters?.docs,source:{originalSource:"{\n  name: 'Compact With Underline (A1 delvis, A3)',\n  args: {\n    ...defaultArgs,\n    variant: 'compact',\n    showUnderline: true\n  },\n  argTypes: {\n    variant: {\n      table: {\n        disable: false\n      }\n    },\n    showUnderline: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...CompactWithUnderline.parameters?.docs?.source}}},CompactWithIconRightAndUnderline.parameters={...CompactWithIconRightAndUnderline.parameters,docs:{...CompactWithIconRightAndUnderline.parameters?.docs,source:{originalSource:"{\n  name: 'Compact With Icon Right And Underline (A1 delvis, A2, A3)',\n  args: {\n    ...defaultArgs,\n    variant: 'compact',\n    iconPosition: 'right',\n    showUnderline: true\n  },\n  argTypes: {\n    variant: {\n      table: {\n        disable: false\n      }\n    },\n    iconPosition: {\n      table: {\n        disable: false\n      }\n    },\n    showUnderline: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...CompactWithIconRightAndUnderline.parameters?.docs?.source}}},IsExpanded.parameters={...IsExpanded.parameters,docs:{...IsExpanded.parameters?.docs,source:{originalSource:"{\n  name: 'With IsExpanded (A4 delvis)',\n  args: {\n    ...defaultArgs,\n    isExpanded: true\n  },\n  argTypes: {\n    isExpanded: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const content = await canvas.findByText(defaultContent);\n    await expect(content).toBeInTheDocument();\n    const button = canvas.getByRole('button');\n    await expect(button).toHaveAttribute('aria-expanded', 'true');\n  }\n} satisfies Story",...IsExpanded.parameters?.docs?.source}}},CompactAndIsExpanded.parameters={...CompactAndIsExpanded.parameters,docs:{...CompactAndIsExpanded.parameters?.docs,source:{originalSource:"{\n  name: 'With Compact And IsExpanded (A4 delvis)',\n  args: {\n    ...defaultArgs,\n    isExpanded: true,\n    variant: 'compact'\n  },\n  argTypes: {\n    isExpanded: {\n      table: {\n        disable: false\n      }\n    },\n    variant: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...CompactAndIsExpanded.parameters?.docs?.source}}},IconRightContent.parameters={...IconRightContent.parameters,docs:{...IconRightContent.parameters?.docs,source:{originalSource:"{\n  name: 'With IsExpanded And Icon Right (A1 delvis)',\n  args: {\n    ...defaultArgs,\n    isExpanded: true,\n    iconPosition: 'right'\n  },\n  argTypes: {\n    isExpanded: {\n      table: {\n        disable: false\n      }\n    },\n    iconPosition: {\n      table: {\n        disable: false\n      }\n    }\n  }\n} satisfies Story",...IconRightContent.parameters?.docs?.source}}},WithOnClick.parameters={...WithOnClick.parameters,docs:{...WithOnClick.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithOnClick,\n  name: 'With OnClick (A4 delvis, B1 delvis)',\n  args: {\n    ...defaultArgs\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    args,\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button');\n    await expect(button).toHaveAttribute('aria-expanded', 'false');\n    await fireEvent.click(button);\n    const content = canvas.getByText(defaultContent);\n    await expect(button).toHaveAttribute('aria-expanded', 'true');\n    await expect(content).toBeInTheDocument();\n    await fireEvent.click(button);\n    await expect(content).not.toBeInTheDocument();\n    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));\n  }\n} satisfies Story",...WithOnClick.parameters?.docs?.source}}},WithIsOnClickOnlyFiredOnOpen.parameters={...WithIsOnClickOnlyFiredOnOpen.parameters,docs:{...WithIsOnClickOnlyFiredOnOpen.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithOnClick,\n  name: 'With IsOnClickOnlyFiredOnOpen (A4 delvis)',\n  args: {\n    ...defaultArgs,\n    isOnClickOnlyFiredOnOpen: true\n  },\n  argTypes: {\n    isOnClickOnlyFiredOnOpen: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    args,\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button');\n    await fireEvent.click(button);\n    await fireEvent.click(button);\n    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1));\n  }\n} satisfies Story",...WithIsOnClickOnlyFiredOnOpen.parameters?.docs?.source}}},WithChangingTitle.parameters={...WithChangingTitle.parameters,docs:{...WithChangingTitle.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithChangingTitle,\n  name: 'With Changing Title (A4 delvis)',\n  args: {\n    ...defaultArgs\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button');\n    const oldTitle = canvas.getByText(unchangedTitle);\n    await expect(oldTitle).toBeInTheDocument();\n    await fireEvent.click(button);\n    const newTitle = canvas.getByText(changedTitle);\n    await expect(newTitle).toBeInTheDocument();\n  }\n} satisfies Story",...WithChangingTitle.parameters?.docs?.source}}},WithTitleAs.parameters={...WithTitleAs.parameters,docs:{...WithTitleAs.parameters?.docs,source:{originalSource:"{\n  render: TemplateWithAllHeadings,\n  name: 'With TitleAs (B2)',\n  args: {\n    ...defaultArgs\n  },\n  parameters: {\n    imageSnapshot: {\n      disable: true\n    }\n  },\n  play: async ({\n    canvasElement\n  }): Promise<void> => {\n    const canvas = within(canvasElement);\n    const headings = canvas.getAllByRole('heading');\n    for (const [index, heading] of headings.entries()) {\n      await expect(heading.tagName).toBe(headingAsArr[index].toLocaleUpperCase());\n    }\n  }\n} satisfies Story",...WithTitleAs.parameters?.docs?.source}}},WithLongTitle.parameters={...WithLongTitle.parameters,docs:{...WithLongTitle.parameters?.docs,source:{originalSource:"{\n  name: 'With Long Title (A1 delvis)',\n  args: {\n    ...defaultArgs,\n    title: 'Denneknappenharenveldiglangtekst.Dentekstengåroverflerelinjerfordidenersålangogdablirikonetriktigplassert.' + 'Fordetkanjoskjeattittelengåroverflerelinjerhvisdeterenveldiglitenskjerm.Sådamåvisjekkeatdetikkeserrartut.'\n  },\n  argTypes: {\n    title: {\n      table: {\n        disable: false\n      }\n    }\n  },\n  parameters: {\n    viewport: {\n      defaultViewport: '--breakpoint-xs'\n    }\n  }\n} satisfies Story",...WithLongTitle.parameters?.docs?.source}}};const __namedExportsOrder=["WithRef","WithAttributes","Defaults","WithIconRight","InContext","WithoutUnderline","WithIconRightAndNoUnderline","Compact","CompactWithIconRight","CompactWithUnderline","CompactWithIconRightAndUnderline","IsExpanded","CompactAndIsExpanded","IconRightContent","WithOnClick","WithIsOnClickOnlyFiredOnOpen","WithChangingTitle","WithTitleAs","WithLongTitle"]},"./apps/ds-playground/src/stories/__tests__/testUtils/storybook.testing.utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{YS:()=>wrapper,fH:()=>loremIpsum,ob:()=>loremIpsumWithoutSpaces});var wrapper="[data-test-block]",loremIpsum="Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.",loremIpsumWithoutSpaces="Loremipsumdolorsitamet.Allesomharlagetennettside,trengtlittfylltekstellerbaresurfetrundtpånettetharantageligvissettdisseordene,etterfulgtaventilsynelatendeeviglangtekstfyltmedlatinskeliksomsetninger."},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);