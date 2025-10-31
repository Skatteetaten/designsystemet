import{j as e}from"./iframe-C2uFIQ6s.js";import{useMDXComponents as s}from"./index-zTX5IwKg.js";import{M as o,b as i}from"./blocks-Bxc_6jfx.js";import{F as l,a}from"./Formatters.stories-JCDhu_qL.js";import"./index-CsOww9wV.js";import"./index-CoMdBICQ.js";import"./index-k3V7IYJD.js";import"./DatePickerCalendar-8_aO5TLp.js";import"./index-C2_9aJjw.js";import"./index-Bs2jIcy5.js";import"./index-wTBO3won.js";import"./LabelWithHelp-dgWfzcXf.js";import"./Help-D5uDa-qt.js";import"./index-BEXGZWqo.js";import"./index-CsoVP06h.js";import"./index-BIr7-knc.js";function t(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(o,{of:l}),`
`,e.jsxs(n.h1,{id:"hvordan-bruke-hjelpefunksjonen-formatter",children:["Hvordan bruke hjelpefunksjonen ",e.jsx(n.em,{children:"formatter"})]}),`
`,e.jsx(n.p,{children:"Designsystemet tilbyr en funksjon formatter som grupperer en rekke typer tall. I tillegg tilbys også en rekke wrapper-funksjoner som benytter formateringsfunksjonen og som gjør det enklere å håndtere de ulike talltypene. For å formatere inputfelter har designsystemet også en hook useFormattedInput."}),`
`,e.jsx(n.h3,{id:"organisasjonsnummer",children:"Organisasjonsnummer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter } from '@skatteetaten/ds-core-utils';

const organisationNumber = formatter({
  value: '123456789',
  type: 'organisationNumber',
});
console.log(organisationNumber.value);
// 123 456 789
`})}),`
`,e.jsx(n.h3,{id:"fødselsnummer--d-nummer",children:"Fødselsnummer / d-nummer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter } from '@skatteetaten/ds-core-utils';
const nationalIdentityNumber = formatter({
  value: '12029412345',
  type: 'nationalIdentityNumber',
});
console.log(nationalIdentityNumber.value);
// 120294 12345
`})}),`
`,e.jsx(n.h3,{id:"bankkontonummer",children:"Bankkontonummer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter } from '@skatteetaten/ds-core-utils';
const bankAccountNumber = formatter({
  value: '86011117947',
  type: 'bankAccountNumber',
});

console.log(bankAccountNumber.value);
// 8601 11 17947
`})}),`
`,e.jsx(n.h3,{id:"telefonnummer",children:"Telefonnummer"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter } from '@skatteetaten/ds-core-utils';
const phoneNumber = formatter({
  value: '11223344',
  type: 'phoneNumber',
});
console.log(phoneNumber.value);
// 11 22 33 44
`})}),`
`,e.jsx(n.h3,{id:"beløp-beta",children:"Beløp (Beta)"}),`
`,e.jsxs(n.p,{children:["Formatering av beløp er basert på ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",rel:"nofollow",children:"Intl.NumberFormat"}),". Formateringsfunksjonen vil som standard følge ",e.jsx(n.a,{href:"https://www.skatteetaten.no/stilogtone/skrive/skriveregler/tall/",rel:"nofollow",children:"Skatteetatens skriveregler"}),", men det er også mulig å sende inn et options object som overstyrer instillingene til Intl.NumberFormat."]}),`
`,e.jsx(n.p,{children:"Input kan være enten number eller string. Hvis input er string vil formatteren forsøke å tolke den som et tall i henhold til valgt locale. Hvis input ikke inneholder et gyldig tall så returneres input igjen som string uten noen endringer."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formatter, formatNumber } from '@skatteetaten/ds-core-utils';
const amount = formatter({
  value: '1234567',
  type: 'number',
});
// 1 234 567

formatNumber('1234567');
// 1 234 567

//engelsk format med komma som tusenskille og punktum som desimalskille
formatNumber(1234567, { locale: 'en-GB' });
// 1,234,567

// valuta blir NOK som default, men det er mulig med vilkårlige kombinasjoner av locale og currency
const result = formatNumber('12345.6', {
  locale: 'en-GB',
  style: 'currency',
  currency: 'GBP',
});
// £12,345.60

const result = formatNumber('12345.6789', {
  style: 'currency',
});
// 12 345,68 kr
`})}),`
`,e.jsx(n.h2,{id:"grupperingshjelper-for-org--fødsels--konto--og-telefonnummer",children:"Grupperingshjelper for org.- fødsels-, konto- og telefonnummer"}),`
`,e.jsx(n.p,{children:"Fødselsnummer, organisasjonsnummer, kontonummer og telefonnummer viser grupperte siffer som skilles med mellomrom. Nevnte grupperingen er lik for alle språk. F.eks så grupperes organisasjonsnummer med tre og tre siffer. 123 456 789 Den generiske funksjonen tar imot alle typer tegn, fjerner alle tegn som ikke er gyldig med valgt type og retunerer siffer som er gruppert."}),`
`,e.jsx(n.p,{children:'F.eks "234,456-890" => "123 456 789"'}),`
`,e.jsx(n.p,{children:"Fordi formateringsfunksjonen ikke er en controlled component så må vi regne med at input til funksjonen alltid kan inneholde alle typer tegn. Det vil si at returnert verdi fra formateringsfunksjonen alltid må kunne tolkes korrekt hvis brukt som value prop til formatter-funksjonen en gang til."}),`
`,e.jsx(n.h1,{id:"bruk",children:"Bruk"}),`
`,e.jsx(n.h2,{id:"definisjoner",children:"Definisjoner"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type FormatTypes =
  | 'number'
  | 'nationalIdentityNumber'
  | 'organisationNumber'
  | 'bankAccountNumber'
  | 'phoneNumber';

const maxLengths = {
  nationalIdentityNumber: 11,
  organisationNumber: 9,
  bankAccountNumber: 11,
  phoneNumber: 10,
};

type FormatOptions = {
  /* Nummerlignende streng som parses av formateringsrutinen etter bestemte regler.
  Regler for parsingen er avhengig av valgt type. For andre typer enn number fjerner den ikke-numeriske tegn og
  verifiserer at antall numeriske tegn er riktig i forhold til formatet. Hvis det er for mange tegn fjernes de
  som er overflødig. For type=number henter vi ut desimaltegn og tusenseparator basert på locale, og benytter
  disse for å tolke tall-verdien i strengen.
  */
  value: string;
  /* bestemmer formatet og noen ganger maksimium-lengden på verdien som returneres */
  type: FormatTypes;
};

type FormattingResponse = {
  /* Formatert tall som brukes for visning.
  NB. value returnerer bindestrek som minustegn. Ikke unikode \\u2212 som
  Intl.NumberFormat returnerer */
  value: string;
  /* Denne er med i returverdien hvis type er satt til "number".
  Formatert tall med optional desimaltegn hvis tall er delvis skrevet. f.eks '2500,'
  Tillater at et returnert tall skal inneholde desimalskilletegn. Skjer
  i de tilfeller hvor formatering har skjedd før bruker er ferdig med å skrive tallet
  F.eks når bruker vil skrive tallet "300,5" og bare har skrevet "300,"
  */
  valueWithDecimalTail?: string;
};

export const formatter = ({ value, type, locale, options }: FormatOptions): FormattingResponse => {
    ...
}
`})}),`
`,e.jsx(n.h1,{id:"useformattedinput-hook-beta",children:"useFormattedInput Hook (Beta)"}),`
`,e.jsx(n.p,{children:"Hook for håndtering av formaterte input-felt med automatisk formatering og markørposisjonering. Støtter norske telefonnummer, organisasjonsnummer, fødselsnummer og kontonummer."}),`
`,e.jsx(n.h2,{id:"funksjonalitet",children:"Funksjonalitet"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatisk formatering"})," under skriving"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart markørposisjonering"})," etter formatendringer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Backspace/delete-håndtering"})," ved separatorgrenser"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Råverdi-utvinning"})," (bare siffer)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lengdevalidering"})," for spesifikke formater"]}),`
`]}),`
`,e.jsx(n.h2,{id:"bruk-1",children:"Bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useFormattedInput } from '@skatteetaten/ds-core-utils';

const formatter = useFormattedInput({
  type: 'phoneNumber',
  initialValue: '12345678',
});

<TextField
  value={formatter.value}
  onChange={formatter.onChange}
  onKeyDown={formatter.onKeyDown}
/>;
`})}),`
`,e.jsx(n.h2,{id:"støttede-typer",children:"Støttede typer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"phoneNumber"})," - Norske telefonnummer (8 siffer)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"organisationNumber"})," - Organisasjonsnummer (9 siffer)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nationalIdentityNumber"})," - Fødselsnummer (11 siffer)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bankAccountNumber"})," - Kontonummer (11 siffer)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"returnerer",children:"Returnerer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," - Formatert visningsverdi"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"})," - Endringshåndterer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onKeyDown"})," - Tastaturhåndterer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rawValue"})," - Uformatert verdi (bare siffer)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i,{of:a})]})}function I(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{I as default};
//# sourceMappingURL=Formatters-3h2PWw74.js.map
