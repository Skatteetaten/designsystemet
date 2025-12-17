import{h as c,e,i as I,a as v,c as N,k as G,r as p,j as t}from"./iframe-VHQh6taY.js";import"./index-lB78RBB2.js";import{S as C}from"./icon.systems-pjRjKMCZ.js";import{e as M}from"./stories.utils-BTGWRhRm.js";import{T as S}from"./DatePickerCalendar-fvOeZNLZ.js";const B={component:S,title:"Komponenter/TextField",argTypes:{variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:G()}}},classNames:{control:!1,table:{category:e.props}},defaultValue:{control:"text",table:{category:e.props}},characterLimit:{table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(C),mapping:C,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},label:{table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},thousandSeparator:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:N()}}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:v()},type:{summary:"string"}},type:"string",description:I()},disabled:{control:"boolean",table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},inputMode:{control:"inline-radio",table:{category:e.htmlAttribute}},maxLength:{table:{category:e.htmlAttribute}},minLength:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},pattern:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute}},readOnly:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},value:{control:"text",table:{category:e.htmlAttribute}},list:{control:"text",table:{category:e.htmlAttribute}},onBlur:{...c},onChange:{...c},onFocus:{...c},onHelpToggle:{...c},onKeyDown:{...c}},args:{label:"Navn"}},g={},y={name:"Beløp og postnummer",render:b=>{const[x,i]=p.useState("10000"),[u,d]=p.useState(""),[h,o]=p.useState("");return t.jsxs("form",{noValidate:!0,children:[t.jsx(S,{label:"Ønsket kredittgrense (NOK)",className:"textField300",description:"Gjennomsnittlig oppgjør for fire dager",value:x,hasSpacing:!0,thousandSeparator:!0,onChange:n=>i(n.target.value)}),t.jsx(S,{label:"Postnummer",name:"test",className:"textField150",errorMessage:h,value:u,maxLength:4,pattern:"\\d{4}",required:!0,onChange:n=>{o(""),n.target.value.length>0&&isNaN(Number(n.target.value))&&o("Postnummer kan kun inneholde tall."),d(n.target.value)},onBlur:n=>{n.target.validity.patternMismatch&&o("Postnummer må inneholde fire tall."),n.target.validity.valueMissing&&o("Postnummer må fylles ut.")}})]})}};y.parameters=M;const l={name:"Tidspunkt",render:b=>{const[x,i]=p.useState(""),[u,d]=p.useState(""),h=s=>{const a=s.replace(/\D/g,"");if(a.length===0)return"";let r=0,m=0;a.length===1?r=Number(a):a.length===2?r=Number(a.slice(0,2)):a.length===3?(r=Number(a.slice(0,1)),m=Number(a.slice(1,3))):(r=Number(a.slice(0,2)),m=Number(a.slice(2,4)));const T=String(r).padStart(2,"0"),A=String(m).padStart(2,"0");return r>23||m>59?s:`${T}:${A}`},o=s=>{d(""),i(s.target.value)},n=s=>{const a=s.currentTarget.value.trim(),r=h(a);/^([01]?\d|2[0-3]):([0-5]\d)$/.test(r)?(i(r),d("")):(i(a),d("Skriv tiden med 24-timersformat, for eksempel 14:30."))};return t.jsxs("form",{noValidate:!0,children:[t.jsx(S,{className:"textField150",errorMessage:u,inputMode:"numeric",label:"Tid (tt:mm)",list:"time-suggestions",value:x,required:!0,onBlur:n,onChange:o}),t.jsxs("datalist",{id:"time-suggestions",children:[t.jsx("option",{value:"08:00"}),t.jsx("option",{value:"08:30"}),t.jsx("option",{value:"09:00"}),t.jsx("option",{value:"09:30"}),t.jsx("option",{value:"10:00"}),t.jsx("option",{value:"10:30"}),t.jsx("option",{value:"11:00"}),t.jsx("option",{value:"11:30"}),t.jsx("option",{value:"12:00"}),t.jsx("option",{value:"12:30"}),t.jsx("option",{value:"13:00"}),t.jsx("option",{value:"13:30"}),t.jsx("option",{value:"14:00"}),t.jsx("option",{value:"14:30"}),t.jsx("option",{value:"15:00"}),t.jsx("option",{value:"15:30"}),t.jsx("option",{value:"16:00"})]})]})}};l.parameters=M;const k={name:"Liste med land",render:b=>{const x=[{text:"Afghanistan",key:"AF"},{text:"Åland Islands",key:"AX"},{text:"Albania",key:"AL"},{text:"Algeria",key:"DZ"},{text:"American Samoa",key:"AS"},{text:"AndorrA",key:"AD"},{text:"Angola",key:"AO"},{text:"Anguilla",key:"AI"},{text:"Antarctica",key:"AQ"},{text:"Antigua and Barbuda",key:"AG"},{text:"Argentina",key:"AR"},{text:"Armenia",key:"AM"},{text:"Aruba",key:"AW"},{text:"Australia",key:"AU"},{text:"Austria",key:"AT"},{text:"Azerbaijan",key:"AZ"},{text:"Bahamas",key:"BS"},{text:"Bahrain",key:"BH"},{text:"Bangladesh",key:"BD"},{text:"Barbados",key:"BB"},{text:"Belarus",key:"BY"},{text:"Belgium",key:"BE"},{text:"Belize",key:"BZ"},{text:"Benin",key:"BJ"},{text:"Bermuda",key:"BM"},{text:"Bhutan",key:"BT"},{text:"Bolivia",key:"BO"},{text:"Bosnia and Herzegovina",key:"BA"},{text:"Botswana",key:"BW"},{text:"Bouvet Island",key:"BV"},{text:"Brazil",key:"BR"},{text:"British Indian Ocean Territory",key:"IO"},{text:"Brunei Darussalam",key:"BN"},{text:"Bulgaria",key:"BG"},{text:"Burkina Faso",key:"BF"},{text:"Burundi",key:"BI"},{text:"Cambodia",key:"KH"},{text:"Cameroon",key:"CM"},{text:"Canada",key:"CA"},{text:"Cape Verde",key:"CV"},{text:"Cayman Islands",key:"KY"},{text:"Central African Republic",key:"CF"},{text:"Chad",key:"TD"},{text:"Chile",key:"CL"},{text:"China",key:"CN"},{text:"Christmas Island",key:"CX"},{text:"Cocos (Keeling) Islands",key:"CC"},{text:"Colombia",key:"CO"},{text:"Comoros",key:"KM"},{text:"Congo",key:"CG"},{text:"Congo, The Democratic Republic of the",key:"CD"},{text:"Cook Islands",key:"CK"},{text:"Costa Rica",key:"CR"},{text:"Cote D'Ivoire",key:"CI"},{text:"Croatia",key:"HR"},{text:"Cuba",key:"CU"},{text:"Cyprus",key:"CY"},{text:"Czech Republic",key:"CZ"},{text:"Denmark",key:"DK"},{text:"Djibouti",key:"DJ"},{text:"Dominica",key:"DM"},{text:"Dominican Republic",key:"DO"},{text:"Ecuador",key:"EC"},{text:"Egypt",key:"EG"},{text:"El Salvador",key:"SV"},{text:"Equatorial Guinea",key:"GQ"},{text:"Eritrea",key:"ER"},{text:"Estonia",key:"EE"},{text:"Ethiopia",key:"ET"},{text:"Falkland Islands (Malvinas)",key:"FK"},{text:"Faroe Islands",key:"FO"},{text:"Fiji",key:"FJ"},{text:"Finland",key:"FI"},{text:"France",key:"FR"},{text:"French Guiana",key:"GF"},{text:"French Polynesia",key:"PF"},{text:"French Southern Territories",key:"TF"},{text:"Gabon",key:"GA"},{text:"Gambia",key:"GM"},{text:"Georgia",key:"GE"},{text:"Germany",key:"DE"},{text:"Ghana",key:"GH"},{text:"Gibraltar",key:"GI"},{text:"Greece",key:"GR"},{text:"Greenland",key:"GL"},{text:"Grenada",key:"GD"},{text:"Guadeloupe",key:"GP"},{text:"Guam",key:"GU"},{text:"Guatemala",key:"GT"},{text:"Guernsey",key:"GG"},{text:"Guinea",key:"GN"},{text:"Guinea-Bissau",key:"GW"},{text:"Guyana",key:"GY"},{text:"Haiti",key:"HT"},{text:"Heard Island and Mcdonald Islands",key:"HM"},{text:"Holy See (Vatican City State)",key:"VA"},{text:"Honduras",key:"HN"},{text:"Hong Kong",key:"HK"},{text:"Hungary",key:"HU"},{text:"Iceland",key:"IS"},{text:"India",key:"IN"},{text:"Indonesia",key:"ID"},{text:"Iran, Islamic Republic Of",key:"IR"},{text:"Iraq",key:"IQ"},{text:"Ireland",key:"IE"},{text:"Isle of Man",key:"IM"},{text:"Israel",key:"IL"},{text:"Italy",key:"IT"},{text:"Jamaica",key:"JM"},{text:"Japan",key:"JP"},{text:"Jersey",key:"JE"},{text:"Jordan",key:"JO"},{text:"Kazakhstan",key:"KZ"},{text:"Kenya",key:"KE"},{text:"Kiribati",key:"KI"},{text:"Korea, Democratic People'S Republic of",key:"KP"},{text:"Korea, Republic of",key:"KR"},{text:"Kuwait",key:"KW"},{text:"Kyrgyzstan",key:"KG"},{text:"Lao People'S Democratic Republic",key:"LA"},{text:"Latvia",key:"LV"},{text:"Lebanon",key:"LB"},{text:"Lesotho",key:"LS"},{text:"Liberia",key:"LR"},{text:"Libyan Arab Jamahiriya",key:"LY"},{text:"Liechtenstein",key:"LI"},{text:"Lithuania",key:"LT"},{text:"Luxembourg",key:"LU"},{text:"Macao",key:"MO"},{text:"Macedonia, The Former Yugoslav Republic of",key:"MK"},{text:"Madagascar",key:"MG"},{text:"Malawi",key:"MW"},{text:"Malaysia",key:"MY"},{text:"Maldives",key:"MV"},{text:"Mali",key:"ML"},{text:"Malta",key:"MT"},{text:"Marshall Islands",key:"MH"},{text:"Martinique",key:"MQ"},{text:"Mauritania",key:"MR"},{text:"Mauritius",key:"MU"},{text:"Mayotte",key:"YT"},{text:"Mexico",key:"MX"},{text:"Micronesia, Federated States of",key:"FM"},{text:"Moldova, Republic of",key:"MD"},{text:"Monaco",key:"MC"},{text:"Mongolia",key:"MN"},{text:"Montserrat",key:"MS"},{text:"Morocco",key:"MA"},{text:"Mozambique",key:"MZ"},{text:"Myanmar",key:"MM"},{text:"Namibia",key:"NA"},{text:"Nauru",key:"NR"},{text:"Nepal",key:"NP"},{text:"Netherlands",key:"NL"},{text:"Netherlands Antilles",key:"AN"},{text:"New Caledonia",key:"NC"},{text:"New Zealand",key:"NZ"},{text:"Nicaragua",key:"NI"},{text:"Niger",key:"NE"},{text:"Nigeria",key:"NG"},{text:"Niue",key:"NU"},{text:"Norfolk Island",key:"NF"},{text:"Northern Mariana Islands",key:"MP"},{text:"Norway",key:"NO"},{text:"Oman",key:"OM"},{text:"Pakistan",key:"PK"},{text:"Palau",key:"PW"},{text:"Palestinian Territory, Occupied",key:"PS"},{text:"Panama",key:"PA"},{text:"Papua New Guinea",key:"PG"},{text:"Paraguay",key:"PY"},{text:"Peru",key:"PE"},{text:"Philippines",key:"PH"},{text:"Pitcairn",key:"PN"},{text:"Poland",key:"PL"},{text:"Portugal",key:"PT"},{text:"Puerto Rico",key:"PR"},{text:"Qatar",key:"QA"},{text:"Reunion",key:"RE"},{text:"Romania",key:"RO"},{text:"Russian Federation",key:"RU"},{text:"RWANDA",key:"RW"},{text:"Saint Helena",key:"SH"},{text:"Saint Kitts and Nevis",key:"KN"},{text:"Saint Lucia",key:"LC"},{text:"Saint Pierre and Miquelon",key:"PM"},{text:"Saint Vincent and the Grenadines",key:"VC"},{text:"Samoa",key:"WS"},{text:"San Marino",key:"SM"},{text:"Sao Tome and Principe",key:"ST"},{text:"Saudi Arabia",key:"SA"},{text:"Senegal",key:"SN"},{text:"Serbia and Montenegro",key:"CS"},{text:"Seychelles",key:"SC"},{text:"Sierra Leone",key:"SL"},{text:"Singapore",key:"SG"},{text:"Slovakia",key:"SK"},{text:"Slovenia",key:"SI"},{text:"Solomon Islands",key:"SB"},{text:"Somalia",key:"SO"},{text:"South Africa",key:"ZA"},{text:"South Georgia and the South Sandwich Islands",key:"GS"},{text:"Spain",key:"ES"},{text:"Sri Lanka",key:"LK"},{text:"Sudan",key:"SD"},{text:"Suriname",key:"SR"},{text:"Svalbard and Jan Mayen",key:"SJ"},{text:"Swaziland",key:"SZ"},{text:"Sweden",key:"SE"},{text:"Switzerland",key:"CH"},{text:"Syrian Arab Republic",key:"SY"},{text:"Taiwan, Province of China",key:"TW"},{text:"Tajikistan",key:"TJ"},{text:"Tanzania, United Republic of",key:"TZ"},{text:"Thailand",key:"TH"},{text:"Timor-Leste",key:"TL"},{text:"Togo",key:"TG"},{text:"Tokelau",key:"TK"},{text:"Tonga",key:"TO"},{text:"Trinidad and Tobago",key:"TT"},{text:"Tunisia",key:"TN"},{text:"Turkey",key:"TR"},{text:"Turkmenistan",key:"TM"},{text:"Turks and Caicos Islands",key:"TC"},{text:"Tuvalu",key:"TV"},{text:"Uganda",key:"UG"},{text:"Ukraine",key:"UA"},{text:"United Arab Emirates",key:"AE"},{text:"United Kingdom",key:"GB"},{text:"United States",key:"US"},{text:"United States Minor Outlying Islands",key:"UM"},{text:"Uruguay",key:"UY"},{text:"Uzbekistan",key:"UZ"},{text:"Vanuatu",key:"VU"},{text:"Venezuela",key:"VE"},{text:"Viet Nam",key:"VN"},{text:"Virgin Islands, British",key:"VG"},{text:"Virgin Islands, U.S.",key:"VI"},{text:"Wallis and Futuna",key:"WF"},{text:"Western Sahara",key:"EH"},{text:"Yemen",key:"YE"},{text:"Zambia",key:"ZM"},{text:"Zimbabwe",key:"ZW"}];return t.jsxs("form",{noValidate:!0,children:[t.jsx(S,{className:"textField300",label:"Land",list:"countries"}),t.jsx("datalist",{id:"countries",children:x.map(({text:i,key:u})=>t.jsx("option",{value:i},u))})]})}};k.parameters=M;g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{} satisfies Story",...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Beløp og postnummer',
  render: (_args): JSX.Element => {
    const [creditInput, setCreditInput] = useState('10000');
    const [postaCodeInput, setPostaCodeInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    return <form noValidate>
        <TextField label={'Ønsket kredittgrense (NOK)'} className={'textField300'} description={'Gjennomsnittlig oppgjør for fire dager'} value={creditInput} hasSpacing thousandSeparator onChange={(e: ChangeEvent<HTMLInputElement>): void => setCreditInput(e.target.value)} />
        <TextField label={'Postnummer'} name={'test'} className={'textField150'} errorMessage={errorMessage} value={postaCodeInput} maxLength={4} pattern={'\\\\d{4}'} required onChange={(e: ChangeEvent<HTMLInputElement>): void => {
        setErrorMessage('');
        if (e.target.value.length > 0 && isNaN(Number(e.target.value))) {
          setErrorMessage('Postnummer kan kun inneholde tall.');
        }
        setPostaCodeInput(e.target.value);
      }} onBlur={(e: FocusEvent<HTMLInputElement>): void => {
        if (e.target.validity.patternMismatch) {
          setErrorMessage('Postnummer må inneholde fire tall.');
        }
        if (e.target.validity.valueMissing) {
          setErrorMessage('Postnummer må fylles ut.');
        }
      }} />
      </form>;
  }
} satisfies Story`,...y.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Tidspunkt',
  render: (_args): JSX.Element => {
    const [timeValue, setTimeValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Eksempel på enkel formateringsfunksjon
    const formatTimeOnBlur = (raw: string): string => {
      const digits = raw.replace(/\\D/g, '');
      if (digits.length === 0) return '';
      let hh = 0;
      let mm = 0;
      if (digits.length === 1) {
        hh = Number(digits);
      } else if (digits.length === 2) {
        hh = Number(digits.slice(0, 2));
      } else if (digits.length === 3) {
        hh = Number(digits.slice(0, 1));
        mm = Number(digits.slice(1, 3));
      } else {
        hh = Number(digits.slice(0, 2));
        mm = Number(digits.slice(2, 4));
      }
      const HH = String(hh).padStart(2, '0');
      const MM = String(mm).padStart(2, '0');
      if (hh > 23 || mm > 59) return raw;
      return \`\${HH}:\${MM}\`;
    };
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      setErrorMessage('');
      setTimeValue(e.target.value);
    };
    const handleBlur: React.FocusEventHandler<HTMLInputElement> = e => {
      const raw = e.currentTarget.value.trim();
      const formatted = formatTimeOnBlur(raw);
      const isValid = /^([01]?\\d|2[0-3]):([0-5]\\d)$/.test(formatted);
      if (!isValid) {
        setTimeValue(raw);
        setErrorMessage('Skriv tiden med 24-timersformat, for eksempel 14:30.');
      } else {
        setTimeValue(formatted);
        setErrorMessage('');
      }
    };
    return <form noValidate>
        <TextField className={'textField150'} errorMessage={errorMessage} inputMode={'numeric'} label={'Tid (tt:mm)'} list={'time-suggestions'} value={timeValue} required onBlur={handleBlur} onChange={handleChange} />
        <datalist id={'time-suggestions'}>
          <option value={'08:00'} />
          <option value={'08:30'} />
          <option value={'09:00'} />
          <option value={'09:30'} />
          <option value={'10:00'} />
          <option value={'10:30'} />
          <option value={'11:00'} />
          <option value={'11:30'} />
          <option value={'12:00'} />
          <option value={'12:30'} />
          <option value={'13:00'} />
          <option value={'13:30'} />
          <option value={'14:00'} />
          <option value={'14:30'} />
          <option value={'15:00'} />
          <option value={'15:30'} />
          <option value={'16:00'} />
        </datalist>
      </form>;
  }
} satisfies Story`,...l.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Liste med land',
  render: (_args): JSX.Element => {
    const countries = [{
      text: 'Afghanistan',
      key: 'AF'
    }, {
      text: 'Åland Islands',
      key: 'AX'
    }, {
      text: 'Albania',
      key: 'AL'
    }, {
      text: 'Algeria',
      key: 'DZ'
    }, {
      text: 'American Samoa',
      key: 'AS'
    }, {
      text: 'AndorrA',
      key: 'AD'
    }, {
      text: 'Angola',
      key: 'AO'
    }, {
      text: 'Anguilla',
      key: 'AI'
    }, {
      text: 'Antarctica',
      key: 'AQ'
    }, {
      text: 'Antigua and Barbuda',
      key: 'AG'
    }, {
      text: 'Argentina',
      key: 'AR'
    }, {
      text: 'Armenia',
      key: 'AM'
    }, {
      text: 'Aruba',
      key: 'AW'
    }, {
      text: 'Australia',
      key: 'AU'
    }, {
      text: 'Austria',
      key: 'AT'
    }, {
      text: 'Azerbaijan',
      key: 'AZ'
    }, {
      text: 'Bahamas',
      key: 'BS'
    }, {
      text: 'Bahrain',
      key: 'BH'
    }, {
      text: 'Bangladesh',
      key: 'BD'
    }, {
      text: 'Barbados',
      key: 'BB'
    }, {
      text: 'Belarus',
      key: 'BY'
    }, {
      text: 'Belgium',
      key: 'BE'
    }, {
      text: 'Belize',
      key: 'BZ'
    }, {
      text: 'Benin',
      key: 'BJ'
    }, {
      text: 'Bermuda',
      key: 'BM'
    }, {
      text: 'Bhutan',
      key: 'BT'
    }, {
      text: 'Bolivia',
      key: 'BO'
    }, {
      text: 'Bosnia and Herzegovina',
      key: 'BA'
    }, {
      text: 'Botswana',
      key: 'BW'
    }, {
      text: 'Bouvet Island',
      key: 'BV'
    }, {
      text: 'Brazil',
      key: 'BR'
    }, {
      text: 'British Indian Ocean Territory',
      key: 'IO'
    }, {
      text: 'Brunei Darussalam',
      key: 'BN'
    }, {
      text: 'Bulgaria',
      key: 'BG'
    }, {
      text: 'Burkina Faso',
      key: 'BF'
    }, {
      text: 'Burundi',
      key: 'BI'
    }, {
      text: 'Cambodia',
      key: 'KH'
    }, {
      text: 'Cameroon',
      key: 'CM'
    }, {
      text: 'Canada',
      key: 'CA'
    }, {
      text: 'Cape Verde',
      key: 'CV'
    }, {
      text: 'Cayman Islands',
      key: 'KY'
    }, {
      text: 'Central African Republic',
      key: 'CF'
    }, {
      text: 'Chad',
      key: 'TD'
    }, {
      text: 'Chile',
      key: 'CL'
    }, {
      text: 'China',
      key: 'CN'
    }, {
      text: 'Christmas Island',
      key: 'CX'
    }, {
      text: 'Cocos (Keeling) Islands',
      key: 'CC'
    }, {
      text: 'Colombia',
      key: 'CO'
    }, {
      text: 'Comoros',
      key: 'KM'
    }, {
      text: 'Congo',
      key: 'CG'
    }, {
      text: 'Congo, The Democratic Republic of the',
      key: 'CD'
    }, {
      text: 'Cook Islands',
      key: 'CK'
    }, {
      text: 'Costa Rica',
      key: 'CR'
    }, {
      text: "Cote D'Ivoire",
      key: 'CI'
    }, {
      text: 'Croatia',
      key: 'HR'
    }, {
      text: 'Cuba',
      key: 'CU'
    }, {
      text: 'Cyprus',
      key: 'CY'
    }, {
      text: 'Czech Republic',
      key: 'CZ'
    }, {
      text: 'Denmark',
      key: 'DK'
    }, {
      text: 'Djibouti',
      key: 'DJ'
    }, {
      text: 'Dominica',
      key: 'DM'
    }, {
      text: 'Dominican Republic',
      key: 'DO'
    }, {
      text: 'Ecuador',
      key: 'EC'
    }, {
      text: 'Egypt',
      key: 'EG'
    }, {
      text: 'El Salvador',
      key: 'SV'
    }, {
      text: 'Equatorial Guinea',
      key: 'GQ'
    }, {
      text: 'Eritrea',
      key: 'ER'
    }, {
      text: 'Estonia',
      key: 'EE'
    }, {
      text: 'Ethiopia',
      key: 'ET'
    }, {
      text: 'Falkland Islands (Malvinas)',
      key: 'FK'
    }, {
      text: 'Faroe Islands',
      key: 'FO'
    }, {
      text: 'Fiji',
      key: 'FJ'
    }, {
      text: 'Finland',
      key: 'FI'
    }, {
      text: 'France',
      key: 'FR'
    }, {
      text: 'French Guiana',
      key: 'GF'
    }, {
      text: 'French Polynesia',
      key: 'PF'
    }, {
      text: 'French Southern Territories',
      key: 'TF'
    }, {
      text: 'Gabon',
      key: 'GA'
    }, {
      text: 'Gambia',
      key: 'GM'
    }, {
      text: 'Georgia',
      key: 'GE'
    }, {
      text: 'Germany',
      key: 'DE'
    }, {
      text: 'Ghana',
      key: 'GH'
    }, {
      text: 'Gibraltar',
      key: 'GI'
    }, {
      text: 'Greece',
      key: 'GR'
    }, {
      text: 'Greenland',
      key: 'GL'
    }, {
      text: 'Grenada',
      key: 'GD'
    }, {
      text: 'Guadeloupe',
      key: 'GP'
    }, {
      text: 'Guam',
      key: 'GU'
    }, {
      text: 'Guatemala',
      key: 'GT'
    }, {
      text: 'Guernsey',
      key: 'GG'
    }, {
      text: 'Guinea',
      key: 'GN'
    }, {
      text: 'Guinea-Bissau',
      key: 'GW'
    }, {
      text: 'Guyana',
      key: 'GY'
    }, {
      text: 'Haiti',
      key: 'HT'
    }, {
      text: 'Heard Island and Mcdonald Islands',
      key: 'HM'
    }, {
      text: 'Holy See (Vatican City State)',
      key: 'VA'
    }, {
      text: 'Honduras',
      key: 'HN'
    }, {
      text: 'Hong Kong',
      key: 'HK'
    }, {
      text: 'Hungary',
      key: 'HU'
    }, {
      text: 'Iceland',
      key: 'IS'
    }, {
      text: 'India',
      key: 'IN'
    }, {
      text: 'Indonesia',
      key: 'ID'
    }, {
      text: 'Iran, Islamic Republic Of',
      key: 'IR'
    }, {
      text: 'Iraq',
      key: 'IQ'
    }, {
      text: 'Ireland',
      key: 'IE'
    }, {
      text: 'Isle of Man',
      key: 'IM'
    }, {
      text: 'Israel',
      key: 'IL'
    }, {
      text: 'Italy',
      key: 'IT'
    }, {
      text: 'Jamaica',
      key: 'JM'
    }, {
      text: 'Japan',
      key: 'JP'
    }, {
      text: 'Jersey',
      key: 'JE'
    }, {
      text: 'Jordan',
      key: 'JO'
    }, {
      text: 'Kazakhstan',
      key: 'KZ'
    }, {
      text: 'Kenya',
      key: 'KE'
    }, {
      text: 'Kiribati',
      key: 'KI'
    }, {
      text: "Korea, Democratic People'S Republic of",
      key: 'KP'
    }, {
      text: 'Korea, Republic of',
      key: 'KR'
    }, {
      text: 'Kuwait',
      key: 'KW'
    }, {
      text: 'Kyrgyzstan',
      key: 'KG'
    }, {
      text: "Lao People'S Democratic Republic",
      key: 'LA'
    }, {
      text: 'Latvia',
      key: 'LV'
    }, {
      text: 'Lebanon',
      key: 'LB'
    }, {
      text: 'Lesotho',
      key: 'LS'
    }, {
      text: 'Liberia',
      key: 'LR'
    }, {
      text: 'Libyan Arab Jamahiriya',
      key: 'LY'
    }, {
      text: 'Liechtenstein',
      key: 'LI'
    }, {
      text: 'Lithuania',
      key: 'LT'
    }, {
      text: 'Luxembourg',
      key: 'LU'
    }, {
      text: 'Macao',
      key: 'MO'
    }, {
      text: 'Macedonia, The Former Yugoslav Republic of',
      key: 'MK'
    }, {
      text: 'Madagascar',
      key: 'MG'
    }, {
      text: 'Malawi',
      key: 'MW'
    }, {
      text: 'Malaysia',
      key: 'MY'
    }, {
      text: 'Maldives',
      key: 'MV'
    }, {
      text: 'Mali',
      key: 'ML'
    }, {
      text: 'Malta',
      key: 'MT'
    }, {
      text: 'Marshall Islands',
      key: 'MH'
    }, {
      text: 'Martinique',
      key: 'MQ'
    }, {
      text: 'Mauritania',
      key: 'MR'
    }, {
      text: 'Mauritius',
      key: 'MU'
    }, {
      text: 'Mayotte',
      key: 'YT'
    }, {
      text: 'Mexico',
      key: 'MX'
    }, {
      text: 'Micronesia, Federated States of',
      key: 'FM'
    }, {
      text: 'Moldova, Republic of',
      key: 'MD'
    }, {
      text: 'Monaco',
      key: 'MC'
    }, {
      text: 'Mongolia',
      key: 'MN'
    }, {
      text: 'Montserrat',
      key: 'MS'
    }, {
      text: 'Morocco',
      key: 'MA'
    }, {
      text: 'Mozambique',
      key: 'MZ'
    }, {
      text: 'Myanmar',
      key: 'MM'
    }, {
      text: 'Namibia',
      key: 'NA'
    }, {
      text: 'Nauru',
      key: 'NR'
    }, {
      text: 'Nepal',
      key: 'NP'
    }, {
      text: 'Netherlands',
      key: 'NL'
    }, {
      text: 'Netherlands Antilles',
      key: 'AN'
    }, {
      text: 'New Caledonia',
      key: 'NC'
    }, {
      text: 'New Zealand',
      key: 'NZ'
    }, {
      text: 'Nicaragua',
      key: 'NI'
    }, {
      text: 'Niger',
      key: 'NE'
    }, {
      text: 'Nigeria',
      key: 'NG'
    }, {
      text: 'Niue',
      key: 'NU'
    }, {
      text: 'Norfolk Island',
      key: 'NF'
    }, {
      text: 'Northern Mariana Islands',
      key: 'MP'
    }, {
      text: 'Norway',
      key: 'NO'
    }, {
      text: 'Oman',
      key: 'OM'
    }, {
      text: 'Pakistan',
      key: 'PK'
    }, {
      text: 'Palau',
      key: 'PW'
    }, {
      text: 'Palestinian Territory, Occupied',
      key: 'PS'
    }, {
      text: 'Panama',
      key: 'PA'
    }, {
      text: 'Papua New Guinea',
      key: 'PG'
    }, {
      text: 'Paraguay',
      key: 'PY'
    }, {
      text: 'Peru',
      key: 'PE'
    }, {
      text: 'Philippines',
      key: 'PH'
    }, {
      text: 'Pitcairn',
      key: 'PN'
    }, {
      text: 'Poland',
      key: 'PL'
    }, {
      text: 'Portugal',
      key: 'PT'
    }, {
      text: 'Puerto Rico',
      key: 'PR'
    }, {
      text: 'Qatar',
      key: 'QA'
    }, {
      text: 'Reunion',
      key: 'RE'
    }, {
      text: 'Romania',
      key: 'RO'
    }, {
      text: 'Russian Federation',
      key: 'RU'
    }, {
      text: 'RWANDA',
      key: 'RW'
    }, {
      text: 'Saint Helena',
      key: 'SH'
    }, {
      text: 'Saint Kitts and Nevis',
      key: 'KN'
    }, {
      text: 'Saint Lucia',
      key: 'LC'
    }, {
      text: 'Saint Pierre and Miquelon',
      key: 'PM'
    }, {
      text: 'Saint Vincent and the Grenadines',
      key: 'VC'
    }, {
      text: 'Samoa',
      key: 'WS'
    }, {
      text: 'San Marino',
      key: 'SM'
    }, {
      text: 'Sao Tome and Principe',
      key: 'ST'
    }, {
      text: 'Saudi Arabia',
      key: 'SA'
    }, {
      text: 'Senegal',
      key: 'SN'
    }, {
      text: 'Serbia and Montenegro',
      key: 'CS'
    }, {
      text: 'Seychelles',
      key: 'SC'
    }, {
      text: 'Sierra Leone',
      key: 'SL'
    }, {
      text: 'Singapore',
      key: 'SG'
    }, {
      text: 'Slovakia',
      key: 'SK'
    }, {
      text: 'Slovenia',
      key: 'SI'
    }, {
      text: 'Solomon Islands',
      key: 'SB'
    }, {
      text: 'Somalia',
      key: 'SO'
    }, {
      text: 'South Africa',
      key: 'ZA'
    }, {
      text: 'South Georgia and the South Sandwich Islands',
      key: 'GS'
    }, {
      text: 'Spain',
      key: 'ES'
    }, {
      text: 'Sri Lanka',
      key: 'LK'
    }, {
      text: 'Sudan',
      key: 'SD'
    }, {
      text: 'Suriname',
      key: 'SR'
    }, {
      text: 'Svalbard and Jan Mayen',
      key: 'SJ'
    }, {
      text: 'Swaziland',
      key: 'SZ'
    }, {
      text: 'Sweden',
      key: 'SE'
    }, {
      text: 'Switzerland',
      key: 'CH'
    }, {
      text: 'Syrian Arab Republic',
      key: 'SY'
    }, {
      text: 'Taiwan, Province of China',
      key: 'TW'
    }, {
      text: 'Tajikistan',
      key: 'TJ'
    }, {
      text: 'Tanzania, United Republic of',
      key: 'TZ'
    }, {
      text: 'Thailand',
      key: 'TH'
    }, {
      text: 'Timor-Leste',
      key: 'TL'
    }, {
      text: 'Togo',
      key: 'TG'
    }, {
      text: 'Tokelau',
      key: 'TK'
    }, {
      text: 'Tonga',
      key: 'TO'
    }, {
      text: 'Trinidad and Tobago',
      key: 'TT'
    }, {
      text: 'Tunisia',
      key: 'TN'
    }, {
      text: 'Turkey',
      key: 'TR'
    }, {
      text: 'Turkmenistan',
      key: 'TM'
    }, {
      text: 'Turks and Caicos Islands',
      key: 'TC'
    }, {
      text: 'Tuvalu',
      key: 'TV'
    }, {
      text: 'Uganda',
      key: 'UG'
    }, {
      text: 'Ukraine',
      key: 'UA'
    }, {
      text: 'United Arab Emirates',
      key: 'AE'
    }, {
      text: 'United Kingdom',
      key: 'GB'
    }, {
      text: 'United States',
      key: 'US'
    }, {
      text: 'United States Minor Outlying Islands',
      key: 'UM'
    }, {
      text: 'Uruguay',
      key: 'UY'
    }, {
      text: 'Uzbekistan',
      key: 'UZ'
    }, {
      text: 'Vanuatu',
      key: 'VU'
    }, {
      text: 'Venezuela',
      key: 'VE'
    }, {
      text: 'Viet Nam',
      key: 'VN'
    }, {
      text: 'Virgin Islands, British',
      key: 'VG'
    }, {
      text: 'Virgin Islands, U.S.',
      key: 'VI'
    }, {
      text: 'Wallis and Futuna',
      key: 'WF'
    }, {
      text: 'Western Sahara',
      key: 'EH'
    }, {
      text: 'Yemen',
      key: 'YE'
    }, {
      text: 'Zambia',
      key: 'ZM'
    }, {
      text: 'Zimbabwe',
      key: 'ZW'
    }];
    return <form noValidate>
        <TextField className={'textField300'} label={'Land'} list={'countries'} />
        <datalist id={'countries'}>
          {countries.map(({
          text,
          key
        }) => <option key={key} value={text} />)}
        </datalist>
      </form>;
  }
} satisfies Story`,...k.parameters?.docs?.source}}};const f=["Preview","Examples","WithTimeInput","WithDataList"],V=Object.freeze(Object.defineProperty({__proto__:null,Examples:y,Preview:g,WithDataList:k,WithTimeInput:l,__namedExportsOrder:f,default:B},Symbol.toStringTag,{value:"Module"}));export{y as E,V as T,l as W,k as a};
//# sourceMappingURL=TextField.stories-BgDlumYy.js.map
