"use strict";(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[2979],{"./apps/ds-playground/src/stories/utils/stories.utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_2jck20lzc4(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/apps/ds-playground/src/stories/utils/stories.utils.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"76980ccfe9d8a11c37c15fa8dc097e3c506532c2"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/apps/ds-playground/src/stories/utils/stories.utils.tsx",statementMap:{0:{start:{line:1,column:33},end:{line:15,column:1}},1:{start:{line:7,column:8},end:{line:7,column:116}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:17},end:{line:6,column:18}},loc:{start:{line:6,column:27},end:{line:8,column:7}},line:6}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,names:["exampleParameters","docs","source","type","language","transform","replace","controls","exclude"],sources:["/var/jenkins_home/workspace/gnsystemet_designsystemet_master/apps/ds-playground/src/stories/utils/stories.utils.tsx"],mappings:"AAAA,OAAO,MAAMA,iBAAiB,GAAG;EAC/BC,IAAI,EAAE;IACJC,MAAM,EAAE;MACNC,IAAI,EAAE,MAAM;MACZC,QAAQ,EAAE,KAAK;MACfC,SAAS,EAAGH,MAAc,IAAa;QACrC,OAAOA,MAAM,CACVI,OAAO,CAAC,8BAA8B,EAAE,qBAAqB,CAAC,CAC9DA,OAAO,CAAC,iBAAiB,EAAE,EAAE,CAAC;MACnC;IACF;EACF,CAAC;EACD;EACAC,QAAQ,EAAE;IACRC,OAAO,EAAE;EACX;AACF,CAAC",ignoreList:[]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"76980ccfe9d8a11c37c15fa8dc097e3c506532c2"});var actualCoverage=coverage[path];return cov_2jck20lzc4=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{p:()=>exampleParameters}),cov_2jck20lzc4();const exampleParameters=(cov_2jck20lzc4().s[0]++,{docs:{source:{type:"code",language:"tsx",transform:source=>(cov_2jck20lzc4().f[0]++,cov_2jck20lzc4().s[1]++,source.replace("render: (_args): JSX.Element","const Examples = ()").replace("satisfies Story",""))}},controls:{exclude:/.*/}})},"./apps/ds-playground/src/stories/components/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Examples:()=>Examples,Preview:()=>Preview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_skatteetaten_ds_buttons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ds-buttons/src/index.ts"),_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ds-forms/src/index.ts"),_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./apps/ds-playground/.storybook/helpers.ts"),_utils_stories_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./apps/ds-playground/src/stories/utils/stories.utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_2__.XZ,title:"Komponenter/Checkbox",argTypes:{classNames:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.props}},children:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.props}},defaultChecked:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.props}},description:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.props}},errorMessage:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.props}},hideLabel:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.props}},showRequiredMark:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.props}},checked:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.htmlAttribute}},disabled:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.htmlAttribute}},form:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.htmlAttribute}},name:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.htmlAttribute}},required:{control:"boolean",table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.htmlAttribute}},value:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.htmlAttribute}},ariaDescribedby:{table:{category:_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.W.aria}},onChange:Object.assign({},_storybook_helpers__WEBPACK_IMPORTED_MODULE_3__.D)},args:{children:"Jeg har lest og forstått innholdet"}},Preview={},Examples={render:_args=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[errorMessage,setErrorMessage]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skatteetaten_ds_forms__WEBPACK_IMPORTED_MODULE_2__.XZ,{className:"exampleSpacing",errorMessage,checked,required:!0,onChange:()=>{setChecked(!checked),setErrorMessage("")},children:"Jeg har lest og forstått innholdet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skatteetaten_ds_buttons__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:()=>{checked||setErrorMessage("Du må lese og forstå innholdet for å gå videre.")},children:"Send"})]})}};Examples.parameters=_utils_stories_utils__WEBPACK_IMPORTED_MODULE_4__.p,Preview.parameters={...Preview.parameters,docs:{...Preview.parameters?.docs,source:{originalSource:"{} satisfies Story",...Preview.parameters?.docs?.source}}},Examples.parameters={...Examples.parameters,docs:{...Examples.parameters?.docs,source:{originalSource:"{\n  render: (_args): JSX.Element => {\n    const [checked, setChecked] = useState(false);\n    const [errorMessage, setErrorMessage] = useState('');\n    return <>\n        <Checkbox className={'exampleSpacing'} errorMessage={errorMessage} checked={checked} required onChange={(): void => {\n        setChecked(!checked);\n        setErrorMessage('');\n      }}>\n          {'Jeg har lest og forstått innholdet'}\n        </Checkbox>\n        <Button onClick={(): void => {\n        if (!checked) {\n          setErrorMessage('Du må lese og forstå innholdet for å gå videre.');\n        }\n      }}>\n          {'Send'}\n        </Button>\n      </>;\n  }\n} satisfies Story",...Examples.parameters?.docs?.source}}};const __namedExportsOrder=["Preview","Examples"]}}]);