import{h as r,e,i as f,a as h,k as S,c as y,r as s,j as n}from"./iframe-VHQh6taY.js";import{l as v,m as E,n as j,S as p,s as d}from"./index-lB78RBB2.js";import{S as u}from"./icon.systems-pjRjKMCZ.js";import{e as C}from"./stories.utils-BTGWRhRm.js";const V={component:p,title:"Komponenter/SearchField",argTypes:{classNames:{control:!1,table:{category:e.props}},clearButtonTitle:{table:{category:e.props}},searchButtonTitle:{table:{category:e.props}},results:{control:!1,table:{category:e.props}},hasSearchButtonIcon:{table:{category:e.props,defaultValue:{summary:j().toString()}}},defaultValue:{control:"text",table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},label:{table:{category:e.props}},helpSvgPath:{options:Object.keys(u),mapping:u,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props},defaultValue:{summary:E().toString()}},enableSRNavigationHint:{table:{category:e.props,defaultValue:{summary:v().toString()}}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:y()}}},variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:S()}}},accessKey:{table:{category:e.htmlAttribute}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:h()},type:{summary:"string"}},type:"string",description:f()},disabled:{table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute}},readOnly:{table:{category:e.htmlAttribute}},required:{table:{category:e.htmlAttribute}},value:{control:"text",table:{category:e.htmlAttribute}},onBlur:{...r},onChange:{...r},onClear:{...r},onFocus:{...r},onHelpToggle:{control:!1,table:{category:e.event}},onResultClick:{...r},onSearch:{...r},onSearchClick:{...r}},args:{label:"Søk etter grønnsaker"}},a={},l={render:R=>{const[i,m]=s.useState(""),[o,g]=s.useState(""),k=s.useMemo(()=>[{title:"Agurk",description:"En forfriskende grønnsak som er flott i salater eller som en sunn snack."},{title:"Artisjokk",description:"Den spiselige bunnen av artisjokkblomsten, ofte tilberedt ved å koke eller dampe."},{title:"Bladbete",description:"Bladene og stilken til denne grønnsaken kan brukes i matlaging."},{title:"Endivie",description:"En type salat med litt bitre blader, perfekt for salatblandinger."},{title:"Ert",description:"Sukkererter er en deilig grønnsak som kan spises rå eller lett kokt."},{title:"Fennikel",description:"Denne knollgrønnsaken har en mild anissmak og kan brukes i supper eller salater."},{title:"Grønnkål",description:"En næringsrik bladgrønnsak som kan stekes, kokes eller brukes i smoothies."},{title:"Hvitløk",description:"Selv om den teknisk sett er en løk, brukes hvitløk ofte som en smakstilsetning i matlaging."},{title:"Jordskokk",description:'En rotgrønnsak med nøtteaktig smak, også kjent som "jordskollar" eller "topinambur".'},{title:"Mangold",description:"En bladgrønnsak med røde eller gule stilker, ligner litt på bete."},{title:"Pastinakk",description:"En søt og aromatisk rotgrønnsak, flott i supper og stuinger."},{title:"Purreløk",description:"En mild løkvariant med lange, grønne stilker, ideell for supper og sauser."},{title:"Rosenkål",description:"Små, tette kålhoder som blir søtere når de blir kokt eller stekt."},{title:"Sellerirot",description:"En rotgrønnsak med en karakteristisk smak, ofte brukt i supper og gryteretter."},{title:"Spinat",description:"En næringsrik bladgrønnsak som kan brukes i salater, omeletter eller smoothies."},{title:"Sukkermais",description:"Søte maiskolber som kan grilles, kokes eller spises rå."},{title:"Tomat",description:"Teknisk sett en frukt, men ofte brukt som en grønnsak i matlaging."},{title:"Vårløk",description:"Tynne, grønne løk med mild smak, flott som garnityr eller i salater."},{title:"Sjalottløk",description:"Sjalottløk har en mild og søt smak, og er flott i sauser og dressinger."},{title:"Rødløk",description:"Rødløk gir en fin farge og en litt skarp smak til salater og sandwicher."},{title:"Sølvløk",description:"Sølvløk er små, oftest helt runde og hvite kepaløk med mild smak. De brukes rå i salater eller syltet, gjerne som pickles."},{title:"Zucchini",description:"En type squash med mykt skall, perfekt for steking eller grilling."},{title:"Østerssopp",description:"En deilig soppvariant som kan brukes i ulike retter."},{title:"Aubergine",description:"Også kjent som eggplante, flott for grilling eller steking."},{title:"Blomkål",description:"En hvit blomstrende grønnsak som kan brukes i alt fra gratenger til risotto."},{title:"Cherrytomat",description:"Små, søte tomater som er perfekte for salater eller snacks."},{title:"Dill",description:"En urt med delikat smak, ofte brukt i sauser og dressinger."},{title:"Gresskar",description:"En stor, oransje grønnsak som kan brukes i supper eller bakverk."},{title:"Hodekål",description:"En tett, rund kål som er flott for surkål eller coleslaw."},{title:"Ingefær",description:"En rotgrønnsak med krydret smak, brukt i matlaging og te."}],[]),c=s.useMemo(()=>i.length>=3?d(k,i):void 0,[i,k]),b=s.useMemo(()=>o.length>=3?d(k.map(t=>({description:t.title})),o):void 0,[k,o]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{label:"Søk etter grønnsaker",value:i,results:c,placeholder:"Eksempel: tomat",hideLabel:!1,onChange:t=>{m(t.target.value)},onSearch:()=>alert("søk"),onSearchClick:()=>alert("søk med knapp"),onClear:()=>m(""),onResultClick:t=>{alert(`${t.title}: ${t.description}`)}}),n.jsx(p,{label:"Søk etter grønnsaker uten beskrivelse",helpText:"HJELP!",value:o,results:b,placeholder:"Eksempel: agurk",hideLabel:!1,onChange:t=>{g(t.target.value)},onSearch:()=>alert("søk"),onSearchClick:()=>alert("søk med knapp"),onClear:()=>g(""),onResultClick:t=>{alert(t.description)}}),n.jsx("form",{children:n.jsx(p,{label:"uncontrolled",hideLabel:!1})})]})}};l.parameters=C;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const x=["Preview","Examples"],F=Object.freeze(Object.defineProperty({__proto__:null,Examples:l,Preview:a,__namedExportsOrder:x,default:V},Symbol.toStringTag,{value:"Module"}));export{l as E,F as S};
//# sourceMappingURL=SearchField.stories-h9uXERUM.js.map
