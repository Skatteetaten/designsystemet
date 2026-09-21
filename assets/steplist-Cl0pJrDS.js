import{j as e}from"./chunk-62JRHF6Z-B4JvYaBZ.js";import{w as s}from"./router-link-DdwMTWnL.js";import"./index-Dxsq0Xcr.js";import"./public-url-a6YwxxU7.js";let h={title:"StepList",description:"StepList brukes når brukeren skal veiledes gjennom en serie steg, typisk i et skjema eller en veiviser. Den gjør det enklere for brukeren å fullføre oppgaver gjennom tydelig struktur, forutsigbarhet og god fremdriftsforståelse.",icon:"/illustrations/steplist.svg"},p={contents:[{heading:"bruk-steplist-når",content:"et skjema eller en prosess har flere steg som må fullføres i rekkefølge"},{heading:"bruk-steplist-når",content:"komplekse oppgaver bør deles opp i mindre, håndterbare deler"},{heading:"bruk-steplist-når",content:"en veiviser leder til en konklusjon, for eksempel en anbefaling eller et resultat"},{heading:"unngå-steplist-når",content:"skjemaet er lite"},{heading:"unngå-steplist-når",content:"du skal dele inn tekstsider i seksjoner (bruk andre innholdsstrukturer)"},{heading:"unngå-steplist-når",content:"prosessen ikke har tydelige steg eller rekkefølge"},{heading:"hvorfor-vi-anbefaler-dette",content:"Oppsummeringssteg før innsending er obligatorisk for å gi brukeren mulighet til å kontrollere og rette opp svar."},{heading:"hvorfor-vi-anbefaler-dette",content:"Fokus flyttes automatisk til toppen av hvert nytt steg for at skjermleserbrukere ikke skal måtte navigere forbi hele innholdet for å skjønne at siden har endret seg."},{heading:"hvorfor-vi-anbefaler-dette",content:"ErrorSummary vises først etter «neste»-klikk — ikke under utfylling — for å unngå at feilmeldinger forstyrrer brukeren mens de skriver."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Komponenten har som helhet ingen varianter, men den fungerer som rammen for skjemaer og veivisere med flere steg."},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Stegnummer som viser rekkefølgen til stegene"},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Innhold per steg, som kan være aktivt eller passivt"},{heading:"varianter-og-når-bør-du-bruke-dem",content:"Handlingsknapp for å gå videre («Neste» og «Send inn»)"},{heading:"plassering-og-justering",content:"StepList skal brukes som overordnet ramme rundt stegvis innhold."},{heading:"plassering-og-justering",content:"Hvert steg skal fremstå som en egen seksjon i løsningen."},{heading:"plassering-og-justering",content:"Oppsummeringssteg før innsending skal alltid være et eget steg i listen."},{heading:"plassering-og-justering",content:"Etter innsending skal bruker sendes til en egen kvitteringsside (ikke et steg)."},{heading:"interaksjon-og-tilstander",content:"Et steg kan som hovedregel ha to tilstander, aktivt eller passivt. Aktivt brukes når brukerne redigerer i innholdet, mens passivt brukes til å vise et fullført steg. Tillegg finnes en spesialvariant av steget, som brukes å vise resultatet av hele prosessen - for eksempel å vise utfallet av en veiviser."},{heading:"oppsummering-før-innsending",content:"Hovedregel: prosessen skal inneholde et oppsummeringssteg der brukeren får se over alt før innsending."},{heading:"oppsummering-før-innsending",content:"Knappeteksten endres fra «Neste» til:"},{heading:"oppsummering-før-innsending",content:"«Send inn», når brukeren sender til Skatteetaten"},{heading:"oppsummering-før-innsending",content:"«Send videre til signering», når oppgaven går til en annen aktør"},{heading:"oppsummering-før-innsending",content:"Eksempler: «Bestill attest»"},{heading:"etter-innsending",content:"Kvitteringssiden skal inneholde:"},{heading:"etter-innsending",content:"Klar bekreftelse på innsending (eller videresending til signering)"},{heading:"etter-innsending",content:"Dato og tidspunkt"},{heading:"etter-innsending",content:"Forventet behandlingstid og hvor bruker får svar"},{heading:"etter-innsending",content:"Hvor skjemaet kan finnes igjen"},{heading:"etter-innsending",content:"Opplysningene som ble sendt inn (gjerne med OpenClose)"},{heading:"feilhåndtering",content:"Når et steg inneholder feil, skal ErrorSummary plasseres i bunnen av steget etter at brukeren klikker «Neste» eller «Send inn»."},{heading:"navigasjon-i-steglisten",content:"Brukeren skal kunne hoppe til andre steg ved behov:"},{heading:"navigasjon-i-steglisten",content:"Hvis det ikke finnes avhengigheter: senere steg beholder sine verdier."},{heading:"navigasjon-i-steglisten",content:"Hvis det finnes avhengigheter: senere steg nullstilles ved endring i tidligere steg."},{heading:"tekst",content:"Stegtitler skal være korte og tydelige."},{heading:"tekst",content:"Navigasjonsknapper skal ha entydige beskrivelser («Neste», «Tilbake», «Send inn»)."},{heading:"tekst",content:"Oppsummeringssteg skal beskrive hva brukeren skal kontrollere."},{heading:"tilgjengelighet-uu-og-wcag",content:"Når brukeren klikker «Neste», skal fokus flyttes til toppen av det nye steget."},{heading:"tilgjengelighet-uu-og-wcag",content:"Komponenten oppretter automatisk et fokusmål-element med id `*-focus-target`."},{heading:"tilgjengelighet-uu-og-wcag",content:"«Endre»-knapper i oppsummeringssteg håndterer fokusflyt automatisk."},{heading:"tilgjengelighet-uu-og-wcag",content:"Sørg for korrekt bruk av legend/labels i skjemaelementer per steg."},{heading:"props",content:'<TypeTable of="StepList" />'},{heading:"stepliststep",content:'<TypeTable of="StepList.Step" />'}],headings:[{id:"bruk-steplist-når",content:"Bruk StepList når"},{id:"unngå-steplist-når",content:"Unngå StepList når"},{id:"hvorfor-vi-anbefaler-dette",content:"Hvorfor vi anbefaler dette"},{id:"varianter-og-når-bør-du-bruke-dem",content:"Varianter og når bør du bruke dem"},{id:"plassering-og-justering",content:"Plassering og justering"},{id:"interaksjon-og-tilstander",content:"Interaksjon og tilstander"},{id:"oppsummering-før-innsending",content:"Oppsummering før innsending"},{id:"etter-innsending",content:"Etter innsending"},{id:"feilhåndtering",content:"Feilhåndtering"},{id:"navigasjon-i-steglisten",content:"Navigasjon i steglisten"},{id:"tekst",content:"Tekst"},{id:"tilgjengelighet-uu-og-wcag",content:"Tilgjengelighet (UU og WCAG)"},{id:"props",content:"Props"},{id:"stepliststep",content:"StepList.Step"}]},u=[{depth:2,url:"#bruk-steplist-når",title:e.jsx(e.Fragment,{children:"Bruk StepList når"})},{depth:2,url:"#unngå-steplist-når",title:e.jsx(e.Fragment,{children:"Unngå StepList når"})},{depth:2,url:"#hvorfor-vi-anbefaler-dette",title:e.jsx(e.Fragment,{children:"Hvorfor vi anbefaler dette"})},{depth:2,url:"#varianter-og-når-bør-du-bruke-dem",title:e.jsx(e.Fragment,{children:"Varianter og når bør du bruke dem"})},{depth:3,url:"#plassering-og-justering",title:e.jsx(e.Fragment,{children:"Plassering og justering"})},{depth:3,url:"#interaksjon-og-tilstander",title:e.jsx(e.Fragment,{children:"Interaksjon og tilstander"})},{depth:3,url:"#oppsummering-før-innsending",title:e.jsx(e.Fragment,{children:"Oppsummering før innsending"})},{depth:3,url:"#etter-innsending",title:e.jsx(e.Fragment,{children:"Etter innsending"})},{depth:3,url:"#feilhåndtering",title:e.jsx(e.Fragment,{children:"Feilhåndtering"})},{depth:3,url:"#navigasjon-i-steglisten",title:e.jsx(e.Fragment,{children:"Navigasjon i steglisten"})},{depth:2,url:"#tekst",title:e.jsx(e.Fragment,{children:"Tekst"})},{depth:2,url:"#tilgjengelighet-uu-og-wcag",title:e.jsx(e.Fragment,{children:"Tilgjengelighet (UU og WCAG)"})},{depth:2,url:"#props",title:e.jsx(e.Fragment,{children:"Props"})},{depth:3,url:"#stepliststep",title:e.jsx(e.Fragment,{children:"StepList.Step"})}];function l(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t.components},{Canvas:i,TypeTable:r}=n;return i||g("Canvas"),r||g("TypeTable"),e.jsxs(e.Fragment,{children:[e.jsx(i,{examplesPath:"components/steplist"}),`
`,e.jsx(n.h2,{id:"bruk-steplist-når",children:"Bruk StepList når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"et skjema eller en prosess har flere steg som må fullføres i rekkefølge"}),`
`,e.jsx(n.li,{children:"komplekse oppgaver bør deles opp i mindre, håndterbare deler"}),`
`,e.jsx(n.li,{children:"en veiviser leder til en konklusjon, for eksempel en anbefaling eller et resultat"}),`
`]}),`
`,e.jsx(n.h2,{id:"unngå-steplist-når",children:"Unngå StepList når"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"skjemaet er lite"}),`
`,e.jsx(n.li,{children:"du skal dele inn tekstsider i seksjoner (bruk andre innholdsstrukturer)"}),`
`,e.jsx(n.li,{children:"prosessen ikke har tydelige steg eller rekkefølge"}),`
`]}),`
`,e.jsx(n.h2,{id:"hvorfor-vi-anbefaler-dette",children:"Hvorfor vi anbefaler dette"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Oppsummeringssteg før innsending er obligatorisk for å gi brukeren mulighet til å kontrollere og rette opp svar."}),`
`,e.jsx(n.li,{children:"Fokus flyttes automatisk til toppen av hvert nytt steg for at skjermleserbrukere ikke skal måtte navigere forbi hele innholdet for å skjønne at siden har endret seg."}),`
`,e.jsx(n.li,{children:"ErrorSummary vises først etter «neste»-klikk — ikke under utfylling — for å unngå at feilmeldinger forstyrrer brukeren mens de skriver."}),`
`]}),`
`,e.jsx(n.h2,{id:"varianter-og-når-bør-du-bruke-dem",children:"Varianter og når bør du bruke dem"}),`
`,e.jsx(n.p,{children:"Komponenten har som helhet ingen varianter, men den fungerer som rammen for skjemaer og veivisere med flere steg."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Stegnummer som viser rekkefølgen til stegene"}),`
`,e.jsx(n.li,{children:"Innhold per steg, som kan være aktivt eller passivt"}),`
`,e.jsx(n.li,{children:"Handlingsknapp for å gå videre («Neste» og «Send inn»)"}),`
`]}),`
`,e.jsx(n.h3,{id:"plassering-og-justering",children:"Plassering og justering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"StepList skal brukes som overordnet ramme rundt stegvis innhold."}),`
`,e.jsx(n.li,{children:"Hvert steg skal fremstå som en egen seksjon i løsningen."}),`
`,e.jsx(n.li,{children:"Oppsummeringssteg før innsending skal alltid være et eget steg i listen."}),`
`,e.jsx(n.li,{children:"Etter innsending skal bruker sendes til en egen kvitteringsside (ikke et steg)."}),`
`]}),`
`,e.jsx(n.h3,{id:"interaksjon-og-tilstander",children:"Interaksjon og tilstander"}),`
`,e.jsx(n.p,{children:"Et steg kan som hovedregel ha to tilstander, aktivt eller passivt. Aktivt brukes når brukerne redigerer i innholdet, mens passivt brukes til å vise et fullført steg. Tillegg finnes en spesialvariant av steget, som brukes å vise resultatet av hele prosessen - for eksempel å vise utfallet av en veiviser."}),`
`,e.jsx(n.h3,{id:"oppsummering-før-innsending",children:"Oppsummering før innsending"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hovedregel: prosessen skal inneholde et oppsummeringssteg der brukeren får se over alt før innsending."}),`
`,e.jsx(n.li,{children:"Knappeteksten endres fra «Neste» til:"}),`
`,e.jsx(n.li,{children:"«Send inn», når brukeren sender til Skatteetaten"}),`
`,e.jsx(n.li,{children:"«Send videre til signering», når oppgaven går til en annen aktør"}),`
`,e.jsx(n.li,{children:"Eksempler: «Bestill attest»"}),`
`]}),`
`,e.jsx(n.h3,{id:"etter-innsending",children:"Etter innsending"}),`
`,e.jsx(n.p,{children:"Kvitteringssiden skal inneholde:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Klar bekreftelse på innsending (eller videresending til signering)"}),`
`,e.jsx(n.li,{children:"Dato og tidspunkt"}),`
`,e.jsx(n.li,{children:"Forventet behandlingstid og hvor bruker får svar"}),`
`,e.jsx(n.li,{children:"Hvor skjemaet kan finnes igjen"}),`
`,e.jsxs(n.li,{children:["Opplysningene som ble sendt inn (gjerne med ",e.jsx(n.a,{href:"/byggeklosser/komponenter/openclose",children:"OpenClose"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"feilhåndtering",children:"Feilhåndtering"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Når et steg inneholder feil, skal ",e.jsx(n.a,{href:"/byggeklosser/komponenter/errorsummary",children:"ErrorSummary"})," plasseres i bunnen av steget etter at brukeren klikker «Neste» eller «Send inn»."]}),`
`]}),`
`,e.jsx(n.h3,{id:"navigasjon-i-steglisten",children:"Navigasjon i steglisten"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Brukeren skal kunne hoppe til andre steg ved behov:"}),`
`,e.jsx(n.li,{children:"Hvis det ikke finnes avhengigheter: senere steg beholder sine verdier."}),`
`,e.jsx(n.li,{children:"Hvis det finnes avhengigheter: senere steg nullstilles ved endring i tidligere steg."}),`
`]}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Stegtitler skal være korte og tydelige."}),`
`,e.jsx(n.li,{children:"Navigasjonsknapper skal ha entydige beskrivelser («Neste», «Tilbake», «Send inn»)."}),`
`,e.jsx(n.li,{children:"Oppsummeringssteg skal beskrive hva brukeren skal kontrollere."}),`
`]}),`
`,e.jsx(n.h2,{id:"tilgjengelighet-uu-og-wcag",children:"Tilgjengelighet (UU og WCAG)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Når brukeren klikker «Neste», skal fokus flyttes til toppen av det nye steget."}),`
`,e.jsxs(n.li,{children:["Komponenten oppretter automatisk et fokusmål-element med id ",e.jsx(n.code,{children:"*-focus-target"}),"."]}),`
`,e.jsx(n.li,{children:"«Endre»-knapper i oppsummeringssteg håndterer fokusflyt automatisk."}),`
`,e.jsx(n.li,{children:"Sørg for korrekt bruk av legend/labels i skjemaelementer per steg."}),`
`]}),`
`,`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(n.h3,{id:"stepliststep",children:"StepList.Step"}),`
`,e.jsx(r,{of:s.Step})]})}function m(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}function g(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{m as default,h as frontmatter,p as structuredData,u as toc};
