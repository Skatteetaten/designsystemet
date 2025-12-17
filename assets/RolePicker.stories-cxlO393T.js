import{r as g,j as n,d as E,n as k,e as o}from"./iframe-VHQh6taY.js";import{B}from"./index-C8wxqHpZ.js";import{R as M,j as h,k as P,l as N,m as Q,n as U,b as D,c as O}from"./index-CqsuB6cf.js";import{A as v}from"./index-BJkQPiPu.js";import{T as f}from"./index-B_yqNyPt.js";function i(){var e="/Users/jorgenhoivik.bye/projects/designsystemet/apps/ds-playground/src/stories/components/RolePicker/RolePickerWithAlertExample.tsx",a="38d29ca3f30380fbd753e517d0c21674f28d9120",l=globalThis,s="__coverage__",c={path:"/Users/jorgenhoivik.bye/projects/designsystemet/apps/ds-playground/src/stories/components/RolePicker/RolePickerWithAlertExample.tsx",statementMap:{0:{start:{line:6,column:15},end:{line:34,column:1}},1:{start:{line:35,column:11},end:{line:39,column:1}},2:{start:{line:40,column:35},end:{line:54,column:1}},3:{start:{line:41,column:24},end:{line:41,column:36}},4:{start:{line:42,column:2},end:{line:53,column:7}},5:{start:{line:47,column:10},end:{line:47,column:45}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:40,column:35},end:{line:40,column:36}},loc:{start:{line:40,column:41},end:{line:54,column:1}},line:40},1:{name:"(anonymous_1)",decl:{start:{line:46,column:17},end:{line:46,column:18}},loc:{start:{line:46,column:23},end:{line:48,column:9}},line:46}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/jorgenhoivik.bye/projects/designsystemet/apps/ds-playground/src/stories/components/RolePicker/RolePickerWithAlertExample.tsx"],names:[],mappings:"AA6CI,mBACE,KADF;AA7CJ,SAAc,cAAc;AAE5B,SAAS,cAAc;AACvB,SAA4B,kBAAkB;AAC9C,SAAS,aAAa;AAEtB,MAAM,SAA4B;AAAA,EAChC,OAAO;AAAA,EACP,MAAM;AAAA,IACJ;AAAA,MACE,MAAM;AAAA,MACN,UAAU;AAAA,MACV,MAAM;AAAA,MACN,WAAW;AAAA,IACb;AAAA,IACA;AAAA,MACE,MAAM;AAAA,MACN,UAAU;AAAA,MACV,MAAM;AAAA,MACN,WAAW;AAAA,IACb;AAAA,IACA;AAAA,MACE,MAAM;AAAA,MACN,UAAU;AAAA,MACV,MAAM;AAAA,MACN,WAAW;AAAA,IACb;AAAA,IACA;AAAA,MACE,MAAM;AAAA,MACN,UAAU;AAAA,MACV,MAAM;AAAA,MACN,WAAW;AAAA,IACb;AAAA,EACF;AACF;AAEA,MAAM,KAAa;AAAA,EACjB,MAAM;AAAA,EACN,UAAU;AAAA,EACV,MAAM;AACR;AAEA,MAAM,6BAA6B,MAAmB;AACpD,QAAM,gBAAgB,OAA0B,IAAI;AACpD,SACE,iCACE;AAAA;AAAA,MAAC;AAAA;AAAA,QACC,SAAS,MAAM;AACb,wBAAc,SAAS,UAAU;AAAA,QACnC;AAAA,QAEC;AAAA;AAAA,IACH;AAAA,IACA,oBAAC,cAAW,KAAK,eAAe,IAAQ,QACtC,8BAAC,SAAM,SAAS,WAAW,WAAS,MAEhC,mIAEJ,GACF;AAAA,KACF;AAEJ;AAEA,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"38d29ca3f30380fbd753e517d0c21674f28d9120"},t=l[s]||(l[s]={});(!t[e]||t[e].hash!==a)&&(t[e]=c);var r=t[e];return i=function(){return r},r}i();const z=(i().s[0]++,{total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]}),I=(i().s[1]++,{name:"Ola Nordmann",personId:"10101012345",type:"Person"});i().s[2]++;const W=()=>{i().f[0]++;const e=(i().s[3]++,g.useRef(null));return i().s[4]++,n.jsxs(n.Fragment,{children:[n.jsx(B,{onClick:()=>{i().f[1]++,i().s[5]++,e.current?.showModal()},children:"Åpne representasjonsvelger"}),n.jsx(M,{ref:e,me:I,people:z,children:n.jsx(v,{variant:"warning",showAlert:!0,children:"Vi kan dessverre ikke vise alle tilgangene dine nå. Vi jobber med å løse feilen. Prøv igjen eller kom tilbake senere."})})]})},T=`import { JSX, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Paginated, Person, RolePicker } from '@skatteetaten/ds-overlays';
import { Alert } from '@skatteetaten/ds-status';

const people: Paginated<Person> = {
  total: 4,
  list: [
    {
      name: 'Antikvitet presis',
      personId: '13889999726',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      type: 'Person',
      isDeleted: false,
    },
  ],
};

const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  type: 'Person',
};

const RolePickerWithAlertExample = (): JSX.Element => {
  const rolePickerRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        onClick={() => {
          rolePickerRef.current?.showModal();
        }}
      >
        {'Åpne representasjonsvelger'}
      </Button>
      <RolePicker ref={rolePickerRef} me={me} people={people}>
        <Alert variant={'warning'} showAlert>
          {
            'Vi kan dessverre ikke vise alle tilgangene dine nå. Vi jobber med å løse feilen. Prøv igjen eller kom tilbake senere.'
          }
        </Alert>
      </RolePicker>
    </>
  );
};

export default RolePickerWithAlertExample;
`;function A(){var e="/Users/jorgenhoivik.bye/projects/designsystemet/apps/ds-playground/src/stories/components/RolePicker/RolePickerWithTopBannerExternalExample.tsx",a="bd1f410ed15d317f49dcab7a4117dd9024be4124",l=globalThis,s="__coverage__",c={path:"/Users/jorgenhoivik.bye/projects/designsystemet/apps/ds-playground/src/stories/components/RolePicker/RolePickerWithTopBannerExternalExample.tsx",statementMap:{0:{start:{line:8,column:47},end:{line:185,column:1}},1:{start:{line:9,column:19},end:{line:9,column:31}},2:{start:{line:10,column:26},end:{line:10,column:36}},3:{start:{line:11,column:30},end:{line:14,column:3}},4:{start:{line:12,column:17},end:{line:12,column:37}},5:{start:{line:13,column:4},end:{line:13,column:46}},6:{start:{line:15,column:13},end:{line:19,column:3}},7:{start:{line:20,column:21},end:{line:112,column:3}},8:{start:{line:113,column:17},end:{line:141,column:3}},9:{start:{line:142,column:2},end:{line:184,column:7}},10:{start:{line:148,column:36},end:{line:148,column:65}},11:{start:{line:154,column:33},end:{line:154,column:48}},12:{start:{line:155,column:37},end:{line:155,column:66}},13:{start:{line:169,column:10},end:{line:175,column:11}},14:{start:{line:170,column:12},end:{line:170,column:25}},15:{start:{line:171,column:17},end:{line:175,column:11}},16:{start:{line:172,column:12},end:{line:172,column:32}},17:{start:{line:174,column:12},end:{line:174,column:27}},18:{start:{line:176,column:10},end:{line:179,column:13}},19:{start:{line:180,column:10},end:{line:180,column:36}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:47},end:{line:8,column:48}},loc:{start:{line:8,column:53},end:{line:185,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:11,column:30},end:{line:11,column:31}},loc:{start:{line:11,column:37},end:{line:14,column:3}},line:11},2:{name:"(anonymous_2)",decl:{start:{line:148,column:30},end:{line:148,column:31}},loc:{start:{line:148,column:36},end:{line:148,column:65}},line:148},3:{name:"(anonymous_3)",decl:{start:{line:154,column:27},end:{line:154,column:28}},loc:{start:{line:154,column:33},end:{line:154,column:48}},line:154},4:{name:"(anonymous_4)",decl:{start:{line:155,column:31},end:{line:155,column:32}},loc:{start:{line:155,column:37},end:{line:155,column:66}},line:155},5:{name:"(anonymous_5)",decl:{start:{line:167,column:24},end:{line:167,column:25}},loc:{start:{line:167,column:42},end:{line:181,column:9}},line:167}},branchMap:{0:{loc:{start:{line:148,column:22},end:{line:148,column:74}},type:"cond-expr",locations:[{start:{line:148,column:30},end:{line:148,column:65}},{start:{line:148,column:68},end:{line:148,column:74}}],line:148},1:{loc:{start:{line:149,column:18},end:{line:157,column:9}},type:"binary-expr",locations:[{start:{line:149,column:18},end:{line:149,column:22}},{start:{line:149,column:42},end:{line:157,column:9}}],line:149},2:{loc:{start:{line:169,column:10},end:{line:175,column:11}},type:"if",locations:[{start:{line:169,column:10},end:{line:175,column:11}},{start:{line:171,column:17},end:{line:175,column:11}}],line:169},3:{loc:{start:{line:171,column:17},end:{line:175,column:11}},type:"if",locations:[{start:{line:171,column:17},end:{line:175,column:11}},{start:{line:173,column:17},end:{line:175,column:11}}],line:171}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/jorgenhoivik.bye/projects/designsystemet/apps/ds-playground/src/stories/components/RolePicker/RolePickerWithTopBannerExternalExample.tsx"],names:[],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bd1f410ed15d317f49dcab7a4117dd9024be4124"},t=l[s]||(l[s]={});(!t[e]||t[e].hash!==a)&&(t[e]=c);var r=t[e];return A=function(){return r},r}A();A().s[0]++;const x=()=>{A().f[0]++;const e=(A().s[1]++,g.useRef(null)),[a,l]=(A().s[2]++,g.useState());A().s[3]++;const s=u=>{A().f[1]++;const m=(A().s[4]++,u.currentTarget.lang);A().s[5]++,E.changeLanguage(k[m])},c=(A().s[6]++,{name:"Ola Nordmann",personId:"10101012345",type:"Person"}),t=(A().s[7]++,{total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]}),r=(A().s[8]++,{total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]});return A().s[9]++,n.jsxs(n.Fragment,{children:[n.jsx(f,{user:a,onLanguageClick:s,onLogInClick:a?(A().b[0][1]++,void 0):(A().b[0][0]++,()=>(A().f[2]++,A().s[10]++,e.current?.showModal())),children:(A().b[1][0]++,a&&(A().b[1][1]++,n.jsx(f.UserMenu,{user:a,notificationCount:1,onLogOutClick:()=>(A().f[3]++,A().s[11]++,l(void 0)),onSwitchUserClick:()=>(A().f[4]++,A().s[12]++,e.current?.showModal())})))}),n.jsx(M,{ref:e,me:c,businesses:t,people:r,onEntitySelect:async u=>{A().f[5]++;let m;A().s[13]++,u.name===c.name?(A().b[2][0]++,A().s[14]++,m="meg"):(A().b[2][1]++,A().s[15]++,u.type==="Organization"?(A().b[3][0]++,A().s[16]++,m="virksomhet"):(A().b[3][1]++,A().s[17]++,m="andre")),A().s[18]++,l({role:m,name:u.name}),A().s[19]++,e.current?.close()}})]})},R=`import { useRef, useState, MouseEvent, JSX } from 'react';

import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import { TopBannerExternal, User } from '@skatteetaten/ds-layout';
import {
  Business,
  Paginated,
  Person,
  RolePicker,
} from '@skatteetaten/ds-overlays';

const RolePickerWithTopBannerExternalExample = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [user, setUser] = useState<User>();

  const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const lang = e.currentTarget.lang;
    dsI18n.changeLanguage(langToLocale[lang]);
  };

  const me: Person = {
    name: 'Ola Nordmann',
    personId: '10101012345',
    type: 'Person',
  };

  const businesses: Paginated<Business> = {
    total: 12,
    list: [
      {
        name: 'Costco AS',
        organizationNumber: '123456777',
        isDeleted: false,
        unitType: 'AS',
        type: 'Organization',
        subunits: [
          {
            name: 'Google ASA',
            organizationNumber: '123456789',
            isDeleted: false,
            type: 'Organization',
            unitType: 'ASA',
          },
          {
            name: 'Facebook RHF',
            organizationNumber: '123456790',
            isDeleted: true,
            type: 'Organization',
            unitType: 'RHF',
          },
        ],
      },
      {
        name: 'Instagram AS',
        organizationNumber: '312843211',
        isDeleted: true,
        unitType: 'AS',
        type: 'Organization',
        subunits: [
          {
            name: 'Snapchat AS',
            organizationNumber: '123456623',
            isDeleted: true,
            type: 'Organization',
            unitType: 'AS',
          },
          {
            name: 'Statoil ASA',
            organizationNumber: '312849218',
            isDeleted: false,
            type: 'Organization',
            unitType: 'ASA',
          },
        ],
      },
      {
        name: 'Samsung DA',
        organizationNumber: '312943218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'DA',
      },
      {
        name: 'Toshiba AS',
        organizationNumber: '312643218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS',
      },
      {
        name: 'Hitachi AS',
        organizationNumber: '312743218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS',
      },
      {
        name: 'Vanguard AS',
        organizationNumber: '332843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'AS',
      },
      {
        name: 'Amazon ASA',
        organizationNumber: '112843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ASA',
      },
      {
        name: 'Meta ANS',
        organizationNumber: '212843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ANS',
      },
    ],
  };

  const people: Paginated<Person> = {
    total: 4,
    list: [
      {
        name: 'Antikvitet presis',
        personId: '13889999726',
        type: 'Person',
        isDeleted: false,
      },
      {
        name: 'Bønne elegant',
        personId: '18849574503',
        type: 'Person',
        isDeleted: true,
      },
      {
        name: 'Lomme filosofisk',
        personId: '08889674513',
        type: 'Person',
        isDeleted: true,
      },
      {
        name: 'Adelsmann varm',
        personId: '14892449911',
        type: 'Person',
        isDeleted: false,
      },
    ],
  };

  return (
    <>
      <TopBannerExternal
        user={user}
        onLanguageClick={handleLanguageClick}
        onLogInClick={
          !user ? (): void => modalRef.current?.showModal() : undefined
        }
      >
        {user && (
          <TopBannerExternal.UserMenu
            user={user}
            notificationCount={1}
            onLogOutClick={() => setUser(undefined)}
            onSwitchUserClick={() => modalRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      <RolePicker
        ref={modalRef}
        me={me}
        businesses={businesses}
        people={people}
        onEntitySelect={async (entity) => {
          let role: User['role'];
          if (entity.name === me.name) {
            role = 'meg';
          } else if (entity.type === 'Organization') {
            role = 'virksomhet';
          } else {
            role = 'andre';
          }

          setUser({
            role: role,
            name: entity.name,
          });
          modalRef.current?.close();
        }}
      />
    </>
  );
};

export default RolePickerWithTopBannerExternalExample;
`,y={name:"Ola Nordmann",personId:"10101012345",type:"Person"},S={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta ANS",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ANS"}]},b={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",type:"Person",isDeleted:!1}]},j={component:M,title:"Komponenter/RolePicker",render:e=>{const[a,l]=g.useState(),s=g.useRef(null),c=async t=>{let r;t.name===y.name?r="meg":t.type==="Organization"?r="virksomhet":r="andre",l({role:r,name:t.name}),s.current?.close()};return n.jsxs(n.Fragment,{children:[n.jsx(B,{onClick:()=>s.current?.showModal(),children:a?a?.role==="meg"?"Meg selv":a?.name:"Åpne representasjonsvelger"}),n.jsx(M,{ref:s,me:y,businesses:S,people:b,...e,onEntitySelect:c})]})},argTypes:{children:{control:!1,table:{category:o.props}},me:{control:"object",table:{category:o.props}},people:{control:"object",table:{category:o.props}},businesses:{control:"object",table:{category:o.props}},dismissOnEsc:{table:{category:o.props,defaultValue:{summary:O().toString()}}},dismissOnOutsideClick:{table:{category:o.props,defaultValue:{summary:D().toString()}}},hideCloseButton:{table:{category:o.props,defaultValue:{summary:U().toString()}}},minimumEntitiesForSearch:{table:{category:o.props,defaultValue:{summary:Q().toString()}}},showInactiveBusinesses:{table:{category:o.props,defaultValue:{summary:N().toString()}}},showSubunits:{table:{category:o.props,defaultValue:{summary:P().toString()}}},showDeceasedPeople:{table:{category:o.props,defaultValue:{summary:h().toString()}}},title:{table:{category:o.props}},onClose:{control:!1,table:{category:o.event}},onEntitySelect:{control:!1,table:{category:o.event}},onLogout:{control:!1,table:{category:o.event}}},args:{me:y,people:b,businesses:S}},p={},d={parameters:{docs:{codePanel:!0,source:{code:R,type:"auto",language:"tsx"}},controls:{exclude:/.*/}},render:e=>n.jsx(x,{})},C={parameters:{docs:{codePanel:!0,source:{code:T,type:"auto",language:"tsx"}},controls:{exclude:/.*/}},render:e=>n.jsx(W,{})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{} satisfies Story",...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      codePanel: true,
      source: {
        code: rolePickerWithTopBannerExternalExample,
        type: 'auto',
        language: 'tsx'
      }
    },
    controls: {
      exclude: /.*/
    }
  },
  render: (_args): JSX.Element => <RolePickerWithTopBannerExternalExample />
} satisfies Story`,...d.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      codePanel: true,
      source: {
        code: rolePickerWithAlertExample,
        type: 'auto',
        language: 'tsx'
      }
    },
    controls: {
      exclude: /.*/
    }
  },
  render: (_args): JSX.Element => <RolePickerWithAlertExample />
} satisfies Story`,...C.parameters?.docs?.source}}};const _=["Preview","WithExternalTopBanner","WithAlert"],J=Object.freeze(Object.defineProperty({__proto__:null,Preview:p,WithAlert:C,WithExternalTopBanner:d,__namedExportsOrder:_,default:j},Symbol.toStringTag,{value:"Module"}));export{J as R,d as W,C as a};
//# sourceMappingURL=RolePicker.stories-cxlO393T.js.map
