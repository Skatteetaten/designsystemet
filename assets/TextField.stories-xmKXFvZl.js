import{h as i,e,i as N,a as B,c as P,k as v,r as u,j as t}from"./iframe-BoxHncFg.js";import"./index-d7h_eiwz.js";import{S as d}from"./icon.systems-qsHVbejn.js";import{e as A}from"./stories.utils-CZ5hej_8.js";import{T as o}from"./DatePickerCalendar-NBFB_hA6.js";const E={component:o,title:"Komponenter/TextField",argTypes:{variant:{control:"inline-radio",table:{category:e.props,defaultValue:{summary:v()}}},classNames:{control:!1,table:{category:e.props}},defaultValue:{control:"text",table:{category:e.props}},characterLimit:{table:{category:e.props}},description:{table:{category:e.props}},errorMessage:{table:{category:e.props}},hasSpacing:{table:{category:e.props}},helpSvgPath:{options:Object.keys(d),mapping:d,table:{category:e.props,defaultValue:{summary:"HelpSimpleSVGpath"}}},helpText:{control:"text",table:{category:e.props}},hideLabel:{table:{category:e.props}},label:{table:{category:e.props}},showRequiredMark:{table:{category:e.props},description:'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.'},thousandSeparator:{table:{category:e.props}},titleHelpSvg:{table:{category:e.props,defaultValue:{summary:P()}}},autoComplete:{table:{category:e.htmlAttribute,defaultValue:{summary:B()},type:{summary:"string"}},type:"string",description:N()},disabled:{control:"boolean",table:{category:e.htmlAttribute}},form:{table:{category:e.htmlAttribute}},inputMode:{control:"inline-radio",table:{category:e.htmlAttribute}},maxLength:{table:{category:e.htmlAttribute}},minLength:{table:{category:e.htmlAttribute}},name:{table:{category:e.htmlAttribute}},pattern:{table:{category:e.htmlAttribute}},placeholder:{table:{category:e.htmlAttribute}},readOnly:{table:{category:e.htmlAttribute}},required:{control:"boolean",table:{category:e.htmlAttribute}},value:{control:"text",table:{category:e.htmlAttribute}},list:{control:"text",table:{category:e.htmlAttribute}},onBlur:{...i},onChange:{...i},onFocus:{...i},onHelpToggle:{...i},onKeyDown:{...i}},args:{label:"Navn"}},y={},n={render:I=>{const[x,s]=u.useState("10000"),[l,T]=u.useState(""),[G,k]=u.useState("");return t.jsxs("form",{noValidate:!0,children:[t.jsx(o,{label:"Ønsket kredittgrense",className:"textField300",description:"Gjennomsnittlig oppgjør for fire dager",value:x,hasSpacing:!0,thousandSeparator:!0,onChange:a=>s(a.target.value)}),t.jsx(o,{label:"Postnummer",name:"test",className:"textField150",errorMessage:G,value:l,maxLength:4,pattern:"\\d{4}",required:!0,onChange:a=>{k(""),a.target.value.length>0&&isNaN(Number(a.target.value))&&k("Postnummer kan kun inneholde tall."),T(a.target.value)},onBlur:a=>{a.target.validity.patternMismatch&&k("Postnummer må inneholde fire tall."),a.target.validity.valueMissing&&k("Postnummer er påkrevd.")}})]})}};n.parameters=A;const r={render:I=>{const x=[{text:"Afghanistan",key:"AF"},{text:"Åland Islands",key:"AX"},{text:"Albania",key:"AL"},{text:"Algeria",key:"DZ"},{text:"American Samoa",key:"AS"},{text:"AndorrA",key:"AD"},{text:"Angola",key:"AO"},{text:"Anguilla",key:"AI"},{text:"Antarctica",key:"AQ"},{text:"Antigua and Barbuda",key:"AG"},{text:"Argentina",key:"AR"},{text:"Armenia",key:"AM"},{text:"Aruba",key:"AW"},{text:"Australia",key:"AU"},{text:"Austria",key:"AT"},{text:"Azerbaijan",key:"AZ"},{text:"Bahamas",key:"BS"},{text:"Bahrain",key:"BH"},{text:"Bangladesh",key:"BD"},{text:"Barbados",key:"BB"},{text:"Belarus",key:"BY"},{text:"Belgium",key:"BE"},{text:"Belize",key:"BZ"},{text:"Benin",key:"BJ"},{text:"Bermuda",key:"BM"},{text:"Bhutan",key:"BT"},{text:"Bolivia",key:"BO"},{text:"Bosnia and Herzegovina",key:"BA"},{text:"Botswana",key:"BW"},{text:"Bouvet Island",key:"BV"},{text:"Brazil",key:"BR"},{text:"British Indian Ocean Territory",key:"IO"},{text:"Brunei Darussalam",key:"BN"},{text:"Bulgaria",key:"BG"},{text:"Burkina Faso",key:"BF"},{text:"Burundi",key:"BI"},{text:"Cambodia",key:"KH"},{text:"Cameroon",key:"CM"},{text:"Canada",key:"CA"},{text:"Cape Verde",key:"CV"},{text:"Cayman Islands",key:"KY"},{text:"Central African Republic",key:"CF"},{text:"Chad",key:"TD"},{text:"Chile",key:"CL"},{text:"China",key:"CN"},{text:"Christmas Island",key:"CX"},{text:"Cocos (Keeling) Islands",key:"CC"},{text:"Colombia",key:"CO"},{text:"Comoros",key:"KM"},{text:"Congo",key:"CG"},{text:"Congo, The Democratic Republic of the",key:"CD"},{text:"Cook Islands",key:"CK"},{text:"Costa Rica",key:"CR"},{text:"Cote D'Ivoire",key:"CI"},{text:"Croatia",key:"HR"},{text:"Cuba",key:"CU"},{text:"Cyprus",key:"CY"},{text:"Czech Republic",key:"CZ"},{text:"Denmark",key:"DK"},{text:"Djibouti",key:"DJ"},{text:"Dominica",key:"DM"},{text:"Dominican Republic",key:"DO"},{text:"Ecuador",key:"EC"},{text:"Egypt",key:"EG"},{text:"El Salvador",key:"SV"},{text:"Equatorial Guinea",key:"GQ"},{text:"Eritrea",key:"ER"},{text:"Estonia",key:"EE"},{text:"Ethiopia",key:"ET"},{text:"Falkland Islands (Malvinas)",key:"FK"},{text:"Faroe Islands",key:"FO"},{text:"Fiji",key:"FJ"},{text:"Finland",key:"FI"},{text:"France",key:"FR"},{text:"French Guiana",key:"GF"},{text:"French Polynesia",key:"PF"},{text:"French Southern Territories",key:"TF"},{text:"Gabon",key:"GA"},{text:"Gambia",key:"GM"},{text:"Georgia",key:"GE"},{text:"Germany",key:"DE"},{text:"Ghana",key:"GH"},{text:"Gibraltar",key:"GI"},{text:"Greece",key:"GR"},{text:"Greenland",key:"GL"},{text:"Grenada",key:"GD"},{text:"Guadeloupe",key:"GP"},{text:"Guam",key:"GU"},{text:"Guatemala",key:"GT"},{text:"Guernsey",key:"GG"},{text:"Guinea",key:"GN"},{text:"Guinea-Bissau",key:"GW"},{text:"Guyana",key:"GY"},{text:"Haiti",key:"HT"},{text:"Heard Island and Mcdonald Islands",key:"HM"},{text:"Holy See (Vatican City State)",key:"VA"},{text:"Honduras",key:"HN"},{text:"Hong Kong",key:"HK"},{text:"Hungary",key:"HU"},{text:"Iceland",key:"IS"},{text:"India",key:"IN"},{text:"Indonesia",key:"ID"},{text:"Iran, Islamic Republic Of",key:"IR"},{text:"Iraq",key:"IQ"},{text:"Ireland",key:"IE"},{text:"Isle of Man",key:"IM"},{text:"Israel",key:"IL"},{text:"Italy",key:"IT"},{text:"Jamaica",key:"JM"},{text:"Japan",key:"JP"},{text:"Jersey",key:"JE"},{text:"Jordan",key:"JO"},{text:"Kazakhstan",key:"KZ"},{text:"Kenya",key:"KE"},{text:"Kiribati",key:"KI"},{text:"Korea, Democratic People'S Republic of",key:"KP"},{text:"Korea, Republic of",key:"KR"},{text:"Kuwait",key:"KW"},{text:"Kyrgyzstan",key:"KG"},{text:"Lao People'S Democratic Republic",key:"LA"},{text:"Latvia",key:"LV"},{text:"Lebanon",key:"LB"},{text:"Lesotho",key:"LS"},{text:"Liberia",key:"LR"},{text:"Libyan Arab Jamahiriya",key:"LY"},{text:"Liechtenstein",key:"LI"},{text:"Lithuania",key:"LT"},{text:"Luxembourg",key:"LU"},{text:"Macao",key:"MO"},{text:"Macedonia, The Former Yugoslav Republic of",key:"MK"},{text:"Madagascar",key:"MG"},{text:"Malawi",key:"MW"},{text:"Malaysia",key:"MY"},{text:"Maldives",key:"MV"},{text:"Mali",key:"ML"},{text:"Malta",key:"MT"},{text:"Marshall Islands",key:"MH"},{text:"Martinique",key:"MQ"},{text:"Mauritania",key:"MR"},{text:"Mauritius",key:"MU"},{text:"Mayotte",key:"YT"},{text:"Mexico",key:"MX"},{text:"Micronesia, Federated States of",key:"FM"},{text:"Moldova, Republic of",key:"MD"},{text:"Monaco",key:"MC"},{text:"Mongolia",key:"MN"},{text:"Montserrat",key:"MS"},{text:"Morocco",key:"MA"},{text:"Mozambique",key:"MZ"},{text:"Myanmar",key:"MM"},{text:"Namibia",key:"NA"},{text:"Nauru",key:"NR"},{text:"Nepal",key:"NP"},{text:"Netherlands",key:"NL"},{text:"Netherlands Antilles",key:"AN"},{text:"New Caledonia",key:"NC"},{text:"New Zealand",key:"NZ"},{text:"Nicaragua",key:"NI"},{text:"Niger",key:"NE"},{text:"Nigeria",key:"NG"},{text:"Niue",key:"NU"},{text:"Norfolk Island",key:"NF"},{text:"Northern Mariana Islands",key:"MP"},{text:"Norway",key:"NO"},{text:"Oman",key:"OM"},{text:"Pakistan",key:"PK"},{text:"Palau",key:"PW"},{text:"Palestinian Territory, Occupied",key:"PS"},{text:"Panama",key:"PA"},{text:"Papua New Guinea",key:"PG"},{text:"Paraguay",key:"PY"},{text:"Peru",key:"PE"},{text:"Philippines",key:"PH"},{text:"Pitcairn",key:"PN"},{text:"Poland",key:"PL"},{text:"Portugal",key:"PT"},{text:"Puerto Rico",key:"PR"},{text:"Qatar",key:"QA"},{text:"Reunion",key:"RE"},{text:"Romania",key:"RO"},{text:"Russian Federation",key:"RU"},{text:"RWANDA",key:"RW"},{text:"Saint Helena",key:"SH"},{text:"Saint Kitts and Nevis",key:"KN"},{text:"Saint Lucia",key:"LC"},{text:"Saint Pierre and Miquelon",key:"PM"},{text:"Saint Vincent and the Grenadines",key:"VC"},{text:"Samoa",key:"WS"},{text:"San Marino",key:"SM"},{text:"Sao Tome and Principe",key:"ST"},{text:"Saudi Arabia",key:"SA"},{text:"Senegal",key:"SN"},{text:"Serbia and Montenegro",key:"CS"},{text:"Seychelles",key:"SC"},{text:"Sierra Leone",key:"SL"},{text:"Singapore",key:"SG"},{text:"Slovakia",key:"SK"},{text:"Slovenia",key:"SI"},{text:"Solomon Islands",key:"SB"},{text:"Somalia",key:"SO"},{text:"South Africa",key:"ZA"},{text:"South Georgia and the South Sandwich Islands",key:"GS"},{text:"Spain",key:"ES"},{text:"Sri Lanka",key:"LK"},{text:"Sudan",key:"SD"},{text:"Suriname",key:"SR"},{text:"Svalbard and Jan Mayen",key:"SJ"},{text:"Swaziland",key:"SZ"},{text:"Sweden",key:"SE"},{text:"Switzerland",key:"CH"},{text:"Syrian Arab Republic",key:"SY"},{text:"Taiwan, Province of China",key:"TW"},{text:"Tajikistan",key:"TJ"},{text:"Tanzania, United Republic of",key:"TZ"},{text:"Thailand",key:"TH"},{text:"Timor-Leste",key:"TL"},{text:"Togo",key:"TG"},{text:"Tokelau",key:"TK"},{text:"Tonga",key:"TO"},{text:"Trinidad and Tobago",key:"TT"},{text:"Tunisia",key:"TN"},{text:"Turkey",key:"TR"},{text:"Turkmenistan",key:"TM"},{text:"Turks and Caicos Islands",key:"TC"},{text:"Tuvalu",key:"TV"},{text:"Uganda",key:"UG"},{text:"Ukraine",key:"UA"},{text:"United Arab Emirates",key:"AE"},{text:"United Kingdom",key:"GB"},{text:"United States",key:"US"},{text:"United States Minor Outlying Islands",key:"UM"},{text:"Uruguay",key:"UY"},{text:"Uzbekistan",key:"UZ"},{text:"Vanuatu",key:"VU"},{text:"Venezuela",key:"VE"},{text:"Viet Nam",key:"VN"},{text:"Virgin Islands, British",key:"VG"},{text:"Virgin Islands, U.S.",key:"VI"},{text:"Wallis and Futuna",key:"WF"},{text:"Western Sahara",key:"EH"},{text:"Yemen",key:"YE"},{text:"Zambia",key:"ZM"},{text:"Zimbabwe",key:"ZW"}];return t.jsxs("form",{noValidate:!0,children:[t.jsx(o,{label:"Nettleser",list:"browsers"}),t.jsxs("datalist",{id:"browsers",children:[t.jsx("option",{value:"Edge"}),t.jsx("option",{value:"Firefox"}),t.jsx("option",{value:"Chrome"}),t.jsx("option",{value:"Opera"}),t.jsx("option",{value:"Safari"})]}),t.jsx(o,{label:"Land",list:"countries"}),t.jsx("datalist",{id:"countries",children:x.map(({text:s,key:l})=>t.jsx("option",{value:s},l))})]})}};r.parameters=A;var c,m,p;y.parameters={...y.parameters,docs:{...(c=y.parameters)==null?void 0:c.docs,source:{originalSource:"{} satisfies Story",...(p=(m=y.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,S,M;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (_args): JSX.Element => {
    const [creditInput, setCreditInput] = useState('10000');
    const [postaCodeInput, setPostaCodeInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    return <form noValidate>
        <TextField label={'Ønsket kredittgrense'} className={'textField300'} description={'Gjennomsnittlig oppgjør for fire dager'} value={creditInput} hasSpacing thousandSeparator onChange={(e: ChangeEvent<HTMLInputElement>): void => setCreditInput(e.target.value)} />
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
          setErrorMessage('Postnummer er påkrevd.');
        }
      }} />
      </form>;
  }
} satisfies Story`,...(M=(S=n.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var b,h,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <TextField label={'Nettleser'} list={'browsers'} />
        <datalist id={'browsers'}>
          <option value={'Edge'} />
          <option value={'Firefox'} />
          <option value={'Chrome'} />
          <option value={'Opera'} />
          <option value={'Safari'} />
        </datalist>
        <TextField label={'Land'} list={'countries'} />
        <datalist id={'countries'}>
          {countries.map(({
          text,
          key
        }) => <option key={key} value={text} />)}
        </datalist>
      </form>;
  }
} satisfies Story`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const L=["Preview","Examples","WithDataList"],H=Object.freeze(Object.defineProperty({__proto__:null,Examples:n,Preview:y,WithDataList:r,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{n as E,H as T,r as W};
//# sourceMappingURL=TextField.stories-xmKXFvZl.js.map
