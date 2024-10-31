import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{d as j,b as C,g as V,c as x}from"./index-BSjcMZTJ.js";import{S as p,e as A,s as g}from"./index-CPXmgfFQ.js";import{c as e,h as r}from"./helpers-Dccz2jQ-.js";import{S as u}from"./icon.systems-5y-2wu5T.js";import{e as R}from"./stories.utils-Ys3NG0dr.js";import{s as T}from"./SearchField.types-C3EVgGLE.js";const D={component:p,title:"Komponenter/SearchField",argTypes:{classNames:{table:{category:e.props}},clearButtonTitle:{table:{category:e.props}},searchButtonTitle:{table:{category:e.props}},results:{table:{category:e.props}},hasSearchButtonIcon:{table:{category:e.props,defaultValue:{summary:A().toString()}}},defaultValue:{table:{category:e.props}},description:{table:{category:e.props}},label:{table:{category:e.props}},helpSvgPath:{options:Object.keys(u),mapping:u,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{table:{category:e.props}},hideLabel:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:j.t("Shared:shared.Help")}}},variant:{options:[...T],control:"inline-radio",table:{category:e.props,defaultValue:{summary:C()}}},accessKey:{table:{category:e.htmlAttribute}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:V()},type:{summary:"string"}},type:"string",description:x()},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute}},readOnly:{table:{category:e.htmlAttribute}},value:{control:"text",table:{category:e.htmlAttribute}},onBlur:{...r},onChange:{...r},onClear:{...r},onFocus:{...r},onHelpToggle:{table:{category:e.event}},onResultClick:{...r},onSearch:{...r},onSearchClick:{...r}},args:{label:"Søk etter grønnsaker"}},i={},l={render:F=>{const[a,m]=s.useState(""),[o,d]=s.useState(""),k=s.useMemo(()=>[{title:"Agurk",description:"En forfriskende grønnsak som er flott i salater eller som en sunn snack."},{title:"Artisjokk",description:"Den spiselige bunnen av artisjokkblomsten, ofte tilberedt ved å koke eller dampe."},{title:"Bladbete",description:"Bladene og stilken til denne grønnsaken kan brukes i matlaging."},{title:"Endivie",description:"En type salat med litt bitre blader, perfekt for salatblandinger."},{title:"Ert",description:"Sukkererter er en deilig grønnsak som kan spises rå eller lett kokt."},{title:"Fennikel",description:"Denne knollgrønnsaken har en mild anissmak og kan brukes i supper eller salater."},{title:"Grønnkål",description:"En næringsrik bladgrønnsak som kan stekes, kokes eller brukes i smoothies."},{title:"Hvitløk",description:"Selv om den teknisk sett er en løk, brukes hvitløk ofte som en smakstilsetning i matlaging."},{title:"Jordskokk",description:'En rotgrønnsak med nøtteaktig smak, også kjent som "jordskollar" eller "topinambur".'},{title:"Mangold",description:"En bladgrønnsak med røde eller gule stilker, ligner litt på bete."},{title:"Pastinakk",description:"En søt og aromatisk rotgrønnsak, flott i supper og stuinger."},{title:"Purreløk",description:"En mild løkvariant med lange, grønne stilker, ideell for supper og sauser."},{title:"Rosenkål",description:"Små, tette kålhoder som blir søtere når de blir kokt eller stekt."},{title:"Sellerirot",description:"En rotgrønnsak med en karakteristisk smak, ofte brukt i supper og gryteretter."},{title:"Spinat",description:"En næringsrik bladgrønnsak som kan brukes i salater, omeletter eller smoothies."},{title:"Sukkermais",description:"Søte maiskolber som kan grilles, kokes eller spises rå."},{title:"Tomat",description:"Teknisk sett en frukt, men ofte brukt som en grønnsak i matlaging."},{title:"Vårløk",description:"Tynne, grønne løk med mild smak, flott som garnityr eller i salater."},{title:"Sjalottløk",description:"Sjalottløk har en mild og søt smak, og er flott i sauser og dressinger."},{title:"Rødløk",description:"Rødløk gir en fin farge og en litt skarp smak til salater og sandwicher."},{title:"Sølvløk",description:"Sølvløk er små, oftest helt runde og hvite kepaløk med mild smak. De brukes rå i salater eller syltet, gjerne som pickles."},{title:"Zucchini",description:"En type squash med mykt skall, perfekt for steking eller grilling."},{title:"Østerssopp",description:"En deilig soppvariant som kan brukes i ulike retter."},{title:"Aubergine",description:"Også kjent som eggplante, flott for grilling eller steking."},{title:"Blomkål",description:"En hvit blomstrende grønnsak som kan brukes i alt fra gratenger til risotto."},{title:"Cherrytomat",description:"Små, søte tomater som er perfekte for salater eller snacks."},{title:"Dill",description:"En urt med delikat smak, ofte brukt i sauser og dressinger."},{title:"Gresskar",description:"En stor, oransje grønnsak som kan brukes i supper eller bakverk."},{title:"Hodekål",description:"En tett, rund kål som er flott for surkål eller coleslaw."},{title:"Ingefær",description:"En rotgrønnsak med krydret smak, brukt i matlaging og te."}],[]),y=s.useMemo(()=>a.length>=3?g(k,a):void 0,[a,k]),E=s.useMemo(()=>o.length>=3?g(k.map(t=>({description:t.title})),o):void 0,[k,o]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Søk etter grønnsaker",value:a,results:y,placeholder:"Eksempel: tomat",hideLabel:!1,onChange:t=>{m(t.target.value)},onSearch:()=>alert("søk"),onSearchClick:()=>alert("søk med knapp"),onClear:()=>m(""),onResultClick:t=>{alert(`${t.title}: ${t.description}`)}}),n.jsx(p,{label:"Søk etter grønnsaker uten beskrivelse",helpText:"HJELP!",value:o,results:E,placeholder:"Eksempel: agurk",hideLabel:!1,onChange:t=>{d(t.target.value)},onSearch:()=>alert("søk"),onSearchClick:()=>alert("søk med knapp"),onClear:()=>d(""),onResultClick:t=>{alert(t.description)}}),n.jsx("form",{children:n.jsx(p,{label:"uncontrolled",hideLabel:!1})})]})}};l.parameters=R;var c,b,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,S,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [simpleValue, setSimpleValue] = useState<string>('');
    const options = useMemo(() => {
      return [{
        title: 'Agurk',
        description: 'En forfriskende grønnsak som er flott i salater eller som en sunn snack.'
      }, {
        title: 'Artisjokk',
        description: 'Den spiselige bunnen av artisjokkblomsten, ofte tilberedt ved å koke eller dampe.'
      }, {
        title: 'Bladbete',
        description: 'Bladene og stilken til denne grønnsaken kan brukes i matlaging.'
      }, {
        title: 'Endivie',
        description: 'En type salat med litt bitre blader, perfekt for salatblandinger.'
      }, {
        title: 'Ert',
        description: 'Sukkererter er en deilig grønnsak som kan spises rå eller lett kokt.'
      }, {
        title: 'Fennikel',
        description: 'Denne knollgrønnsaken har en mild anissmak og kan brukes i supper eller salater.'
      }, {
        title: 'Grønnkål',
        description: 'En næringsrik bladgrønnsak som kan stekes, kokes eller brukes i smoothies.'
      }, {
        title: 'Hvitløk',
        description: 'Selv om den teknisk sett er en løk, brukes hvitløk ofte som en smakstilsetning i matlaging.'
      }, {
        title: 'Jordskokk',
        description: 'En rotgrønnsak med nøtteaktig smak, også kjent som "jordskollar" eller "topinambur".'
      }, {
        title: 'Mangold',
        description: 'En bladgrønnsak med røde eller gule stilker, ligner litt på bete.'
      }, {
        title: 'Pastinakk',
        description: 'En søt og aromatisk rotgrønnsak, flott i supper og stuinger.'
      }, {
        title: 'Purreløk',
        description: 'En mild løkvariant med lange, grønne stilker, ideell for supper og sauser.'
      }, {
        title: 'Rosenkål',
        description: 'Små, tette kålhoder som blir søtere når de blir kokt eller stekt.'
      }, {
        title: 'Sellerirot',
        description: 'En rotgrønnsak med en karakteristisk smak, ofte brukt i supper og gryteretter.'
      }, {
        title: 'Spinat',
        description: 'En næringsrik bladgrønnsak som kan brukes i salater, omeletter eller smoothies.'
      }, {
        title: 'Sukkermais',
        description: 'Søte maiskolber som kan grilles, kokes eller spises rå.'
      }, {
        title: 'Tomat',
        description: 'Teknisk sett en frukt, men ofte brukt som en grønnsak i matlaging.'
      }, {
        title: 'Vårløk',
        description: 'Tynne, grønne løk med mild smak, flott som garnityr eller i salater.'
      }, {
        title: 'Sjalottløk',
        description: 'Sjalottløk har en mild og søt smak, og er flott i sauser og dressinger.'
      }, {
        title: 'Rødløk',
        description: 'Rødløk gir en fin farge og en litt skarp smak til salater og sandwicher.'
      }, {
        title: 'Sølvløk',
        description: 'Sølvløk er små, oftest helt runde og hvite kepaløk med mild smak. De brukes rå i salater eller syltet, gjerne som pickles.'
      }, {
        title: 'Zucchini',
        description: 'En type squash med mykt skall, perfekt for steking eller grilling.'
      }, {
        title: 'Østerssopp',
        description: 'En deilig soppvariant som kan brukes i ulike retter.'
      }, {
        title: 'Aubergine',
        description: 'Også kjent som eggplante, flott for grilling eller steking.'
      }, {
        title: 'Blomkål',
        description: 'En hvit blomstrende grønnsak som kan brukes i alt fra gratenger til risotto.'
      }, {
        title: 'Cherrytomat',
        description: 'Små, søte tomater som er perfekte for salater eller snacks.'
      }, {
        title: 'Dill',
        description: 'En urt med delikat smak, ofte brukt i sauser og dressinger.'
      }, {
        title: 'Gresskar',
        description: 'En stor, oransje grønnsak som kan brukes i supper eller bakverk.'
      }, {
        title: 'Hodekål',
        description: 'En tett, rund kål som er flott for surkål eller coleslaw.'
      }, {
        title: 'Ingefær',
        description: 'En rotgrønnsak med krydret smak, brukt i matlaging og te.'
      }];
    }, []);
    const results = useMemo(() => value.length >= 3 ? searchInList(options, value) : undefined, [value, options]);
    const simpleResults = useMemo(() => {
      return simpleValue.length >= 3 ? searchInList(options.map(option => ({
        description: option.title
      })), simpleValue) : undefined;
    }, [options, simpleValue]);
    return <>
        <SearchField label={'Søk etter grønnsaker'} value={value} results={results} placeholder={'Eksempel: tomat'} hideLabel={false} onChange={event => {
        setValue(event.target.value);
      }} onSearch={() => alert('søk')} onSearchClick={() => alert('søk med knapp')} onClear={() => setValue('')} onResultClick={result => {
        alert(\`\${result.title}: \${result.description}\`);
      }} />

        <SearchField label={'Søk etter grønnsaker uten beskrivelse'} helpText={'HJELP!'} value={simpleValue} results={simpleResults} placeholder={'Eksempel: agurk'} hideLabel={false} onChange={event => {
        setSimpleValue(event.target.value);
      }} onSearch={() => alert('søk')} onSearchClick={() => alert('søk med knapp')} onClear={() => setSimpleValue('')} onResultClick={result => {
        alert(result.description);
      }} />
        <form>
          <SearchField label={'uncontrolled'} hideLabel={false} />
        </form>
      </>;
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const P=["Preview","Examples"],G=Object.freeze(Object.defineProperty({__proto__:null,Examples:l,Preview:i,__namedExportsOrder:P,default:D},Symbol.toStringTag,{value:"Module"}));export{l as E,G as S};
//# sourceMappingURL=SearchField.stories-C5-kGx-B.js.map
