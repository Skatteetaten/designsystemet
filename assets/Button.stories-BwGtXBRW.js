import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{g,B as r}from"./index-eDVrZHQi.js";import{a as d,d as y}from"./index-ChzTQA-a.js";import{h as s,c as e}from"./helpers-B7KPg_So.js";import{S as o}from"./icon.systems-BnMBg8hx.js";import{e as b}from"./stories.utils-Ys3NG0dr.js";const S={component:r,title:"Komponenter/Button",argTypes:{children:{table:{category:e.props}},hasSpinner:{table:{category:e.props}},spinnerTitle:{table:{category:e.props,defaultValue:{summary:y.t("ds_progress:spinner.LoadingLabel")}}},svgPath:{options:Object.keys(o),mapping:o,table:{category:e.props}},variant:{table:{category:e.props,defaultValue:{summary:g()}}},accessKey:{table:{category:e.htmlAttribute}},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},href:{table:{category:e.htmlAttribute}},isExternal:{table:{category:e.props}},type:{table:{category:e.htmlAttribute,defaultValue:{summary:d()}}},ariaCurrent:{table:{category:e.aria}},ariaDescribedby:{table:{category:e.aria}},onBlur:{...s},onClick:{...s},onFocus:{...s}},args:{children:"Send inn skjema"}},n={},t={render:h=>a.jsxs(a.Fragment,{children:[a.jsx(r,{className:"exampleSpacing",children:"Send inn skjema"}),a.jsx(r,{className:"exampleSpacing",variant:"secondary",children:"Avbryt"}),a.jsx("div",{children:a.jsx(r,{className:"exampleSpacing",variant:"tertiary",children:"Logg inn"})}),a.jsx(r,{className:"exampleSpacing",variant:"danger",children:"Slett"})]})};t.parameters=b;var i,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{} satisfies Story",...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    return <>
        <Button className={'exampleSpacing'}>{'Send inn skjema'}</Button>
        <Button className={'exampleSpacing'} variant={'secondary'}>
          {'Avbryt'}
        </Button>
        <div>
          <Button className={'exampleSpacing'} variant={'tertiary'}>
            {'Logg inn'}
          </Button>
        </div>
        <Button className={'exampleSpacing'} variant={'danger'}>
          {'Slett'}
        </Button>
      </>;
  }
} satisfies Story`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const x=["Preview","Examples"],N=Object.freeze(Object.defineProperty({__proto__:null,Examples:t,Preview:n,__namedExportsOrder:x,default:S},Symbol.toStringTag,{value:"Module"}));export{N as B,t as E};
//# sourceMappingURL=Button.stories-BwGtXBRW.js.map
