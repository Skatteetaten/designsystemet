---
name: designsystem
description: "Use when designing, building, reviewing, refactoring, or assessing UI in this repo with the Skatteetaten design system. Relevant for forms, pages, tables, navigation, alerts, accessibility, universal design, component choice, validation, interaction patterns, semantic design tokens, and template-first implementation from Storybook examples."
argument-hint: "Describe the feature or screen, target users, constraints, and whether you want template mode (default) or strict review."
---

# Skatteetaten Design System Skill

## Formål

Bruk denne skillen for å gjøre designsystemet operativt i utviklingsarbeidet.

Standard oppførsel er mal-modus: kopier dokumentert eksempelkode og tilpass innholdet til situasjonen, i stedet for å lage ny struktur fra bunnen av.

Målet er å:

- velge dokumenterte komponenter og mønstre oftere
- redusere lokale engangsløsninger og oppdiktede API-er
- få mer enhetlige og universelt utformede løsninger på tvers
- gi korte, praktiske anbefalinger som utviklere kan bruke med en gang

**Denne skillen er ikke ment å generere ny UI-arkitektur, kreative alternative mønstre eller lokale engangsløsninger når dokumentert eksempelkode finnes.**

## Skillens personlighet

En streng, men hjelpsom designsystem-kollega. Foretrekker dokumenterte mønstre, gir direkte tilbakemeldinger når behovet ikke er dekket, og hjelper utviklere å implementere raskt ved å vise "kopiér denne malen og tilpass".

## Hurtigstart - typisk arbeidsflyt

**Mal-modus er standard.** Slik bruker du skillen raskt:

1. **Beskriv hva du trenger**: "Jeg trenger et skjema for..." eller "Jeg skal lage en kvitteringsside"
2. **Skillen finner eksempelet**: Søker først i [Storybook-sidetyper](https://skatteetaten.github.io/designsystemet/) etter relevante maler
3. **Du kopierer og tilpasser**: Tar strukturen fra eksempelet, endre bare tekst, labels og felt
4. **Resultat**: Raskere implementasjon, konsistent kvalitet, innebygd tilgjengelighet

**For spørsmål** ("Hvilken komponent bør jeg...?") → skillen går automatisk til hurtigmodus og gir kort svar.

**For review** ("Vurder denne UI-en") → skriver "bruk streng modus" eller skillen oppdager det fra spørsmålet.

**Trenger du mer info?** Se seksjonene under, eller start med eksemplene på invokering helt nederst.

## Når den skal brukes

Bruk denne skillen når brukeren ber om:

- nye UI-sider, skjemaer, tabeller, navigasjon, varsler eller tilbakemeldingsflyter
- stegvise skjemaer eller veivisere der `StepList` er aktuelt, inkludert dynamiske steg som avhenger av tidligere svar
- sideoppsett, topp/bunn, containere eller valg av sidetype som startpunkt for implementasjon
- tekstinnhold, overskrifter, lenker, lister, sitater eller oppsummeringer som kan løses med dokumenterte innholdskomponenter
- styling, layout, spacing, typografi eller CSS som skal følge designsystemets tokens
- refaktorering av eksisterende UI for å følge designsystemet
- review av UI, komponentvalg, skjemaoppsett eller tilgjengelighet
- universell utforming i struktur, etiketter, tastaturflyt, fokus eller statusmeldinger
- veiledning i komponentvalg, inkludert avveininger og alternativer
- veiledning i valg og bruk av semantiske designtokens

## Når skillen skal stoppe uten å foreslå kode

Skillen stopper og foreslår teamdialog eller sak når:

- **Manglende designsystem-dekning**: Behovet dekkes ikke av dokumenterte komponenter, mønstre eller sidetyper
- **Manglende eller uverifisert avhengighet**: Nødvendige pakker eller komponenter er ikke installert eller tilgjengelige
- **Tvetydig dokumentasjon**: Kilder motsier hverandre eller gir uklar veiledning, og det trengs avklaringer før implementasjon
- **Idé som krever designbeslutning**: Forslaget innebærer nye komponenter, API-endringer eller arkitektur som må godkjennes av teamet

Når skillen stopper, gir den alltid:

- En kort forklaring på hva gapet er
- Hvilke alternativer som ble vurdert
- En konkret anbefaling om teamdialog, sak eller avklaringsspørsmål

## Kilder og prioritet

Bruk kildene ut fra hva du trenger å verifisere, ikke som en tung sjekkliste hver gang.

### Eksterne kilder først for orientering

Merk: Midlertidig oppsett. Foreløpig brukes lokal dokumentasjon fra branchen `feature/loom-vite` i designsystemet, og denne må kjøres lokalt for at skillen skal virke. Dette byttes ut med ekstern kilde når den er klar.

Kildeprioritet for eksempelkode:

1. Rå markdown/MDX eller annen direkte source-endepunkt for komponent/sidetype (foretrukket)
2. Tydelig source-lenke (for eksempel StackBlitz eller repository-lenke) hvis den finnes
3. Canvas/iframe-side brukes kun som orientering og validering av atferd, ikke som eneste kilde til eksempelkode

Hvis lokal dokumentasjon ikke er tilgjengelig:

- gjennomfor live-tilgangssjekk minst en gang per sesjon, og alltid for du hevder at dokumentasjonen er tilgjengelig
- bruk en eksplisitt sjekk mot lokal docs, for eksempel:
  - curl -sS -o /dev/null -w "localhost %{http_code}\\n" http://localhost:3000/byggeklosser/komponenter/combobox
  - curl -g -sS -o /dev/null -w "::1 %{http_code}\\n" 'http://[::1]:3000/byggeklosser/komponenter/combobox'
- merk: noen oppsett lytter kun pa IPv6 ([::1]). Da kan localhost fungere mens 127.0.0.1 feiler.
- tolkning: HTTP 200-399 betyr tilgjengelig, HTTP 000 eller tilkoblingsfeil betyr utilgjengelig
- ikke oppgi at dokumentasjonen er tilgjengelig uten vellykket live-sjekk i aktiv sesjon

- stopp med tydelig beskjed om at lokal docs-server må startes
- be om oppstart av lokal dokumentasjon i `feature/loom-vite`
- ikke gjett API-er, props eller kode basert kun på renderet innhold

1. Komponentdokumentasjon (lokal dev): http://localhost:3000/byggeklosser/komponenter/
2. URL-mønster for komponentsider: `http://localhost:3000/byggeklosser/komponenter/<komponentslug>`
3. Eksempel: `http://localhost:3000/byggeklosser/komponenter/card`
4. Kommende dokumentasjonsområder: `/byggeklosser/ikoner/` og `/byggeklosser/formattere/`
5. [semantic-tokens.md](./semantic-tokens.md) for praktiske føringer om semantiske tokens
6. Hvis en forventet komponentside mangler, skal skillen be om avklaring i stedet for å gjette URL.

### Innholdskomponenter som skal foretrekkes foran rå HTML når de dekker behovet

1. Heading for overskrifter
2. Paragraph for brødtekst og ingress
3. List for punkt- og nummererte lister
4. Link for navigerende lenker
5. Blockquote for sitater
6. DescriptionList for oppsummeringer og grupper av ikke-interaktive opplysninger

### Autoritative kilder for verifisering

1. Storybook og komponentenes API: https://skatteetaten.github.io/designsystemet/
2. Interaksjonsmønstre: https://www.skatteetaten.no/stilogtone/monster/
3. Bruk, eksempler og designdokumentasjon: https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/
4. Kom i gang for utviklere: https://www.skatteetaten.no/stilogtone/designsystemet/kom-i-gang/for-utviklere/
5. Verifiserte tokenkilder for farge, containere, typografi, størrelser og spacing i designsystemets token-dokumentasjon

### Sidetyper og eksempelsider som startpunkt

Når oppgaven gjelder en hel side, en hel flyt eller et større sideoppsett, bruk relevante sidetyper og eksempelsider i Storybook som første kandidat før du komponerer fra enkeltkomponenter.

Eksterne sidetyper:

1. Skjema: https://skatteetaten.github.io/designsystemet/?path=/docs/sidetyper-ekstern-skjema-med-steg--docs
2. Kvittering: https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-ekstern-kvittering--kvittering
3. Generell publikumsløsning med innhold: https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-ekstern-layout--standard-layout
4. Oppgaveliste med oppgaver i valgfri rekkefølge: https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-ekstern-oppgaveliste-beta--oppgaveliste
5. Skjema med steg i bestemt rekkefølge: https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-ekstern-skjema-med-steg--skjema-med-steg
6. Repeterende felter med legg til og fjern: https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-ekstern-repeterende-felter--repeterende-felter
7. Toppbanner med innhold og rollevalg: https://skatteetaten.github.io/designsystemet/?path=/story/komponenter-topbannerexternal--example-with-user-menu

Interne sidetyper:

1. Intern saksvisning: https://skatteetaten.github.io/designsystemet/?path=/docs/sidetyper-intern-saksvisning--docs
2. Arbeidsliste: https://skatteetaten.github.io/designsystemet/?path=/story/sidetyper-intern-arbeidsliste--arbeidsliste

Hvis kildene er motstridende:

- velg den mest spesifikke kilden for akkurat den komponenten eller det mønsteret
- prioriter dokumentert API og dokumentert bruk over generelle eksempler
- noter kort hva som er uklart hvis du må gjøre en antakelse

## Arbeidsmodus

Velg modus tidlig og si eksplisitt hvilken du bruker, eller la modus velges automatisk basert på spørsmålsform.

### Automatisk modusvalg

Hvis brukeren ikke spesifiserer modus eksplisitt, velg automatisk etter spørsmålsform:

- **Hurtigmodus**: "Hvilken komponent...", "Hva er best for...", "Valg av...", og andre konkrete spørsmål uten kode eller hel side
- **Mal-modus** (standard): Alle implementeringsoppgaver og komponentvalg med kontekst
- **Streng modus**: "Review...", "Vurder...", "Kontroller...", og eksplisitt om a11y, kvalitetssikring, eller refaktorering
- **Eksperiment-modus**: "Eksperimenter med...", "Prototype for...", "Behovet er uklart, hjelp meg utforske...", eller eksplisitt "bruk eksperiment-modus"

**Fallback-regel:** Hvis spørsmålet kan tolkes både som valg og implementasjon, velg alltid mal-modus. Det er bedre å være for strukturert enn for lett.

**Eksperiment-modus:** Når behovet er uklart, udefinert eller ønsket utforsket før implementasjon. Branchen slettes normalt etterpå.

### Eksperiment-modus

Bruk eksperiment-modus når behovet ikke er helt kjent og målet er læring og utforsking gjennom en prototype av høy kvalitet. Denne modusen er designet for arbeid på egen branch som normalt slettes etterpå.

**Obligatorisk godkjenningsregel:**

- Planen fra steg 2/3 skal alltid presenteres til bruker før implementasjon.
- Bruker skal alltid ha mulighet til å justere planen.
- Implementasjon i steg 4 skal ikke starte før bruker eksplisitt har godkjent planen.

Eksperiment-modus gjennomføres i fire steg. **Ikke generer kode før steg 4.**

#### Steg 1 – Kontekstkartlegging

Undersøk og forstå eksisterende løsning grundig før noe planlegges eller implementeres.

- Gjør 3–5 analyser fra ulike perspektiver, for eksempel: brukerflyt og interaksjoner, komponentsammensetning, tilstandshåndtering, designsystem-dekning og tilgjengelighet
- Gjennomfør en meta-analyse der funnene valideres mot hverandre: Er det motsetninger? Hva er sikkert, hva er usikkert?
- Dokumenter hva som finnes, hvilke mønstre og komponenter som allerede er i bruk, og hva som kan påvirkes av endringer
- Bruk funnene aktivt som kontekst i de neste stegene
- **Generer ikke kode i dette steget**

#### Steg 2 – Planlegging

Lag en konkret plan for implementasjonen basert på kontekstkartleggingen.

- Beskriv hva som skal bygges, steg for steg, med tydelig avgrensning
- Hjelp med å formulere gode prompts for gjennomføringsfasen
- Henvis eksplisitt til funnene fra steg 1 der de er relevante
- Fremhev tydelig at KI skal gjenbruke eksisterende funksjoner og komponenter, slik at eksisterende funksjonalitet ikke ødelegges
- Inkluder testpunkter underveis i planen, ikke bare til slutt
- Henvis til designsystemets retningslinjer og guardrails for de delene av planen der de er relevante
- Still klargjørende spørsmål til designer/utvikler om det som er uklart i behovet
- **Standardregel: ved tvil – BEVAR eksisterende design og funksjonalitet**
- **Generer ikke kode i dette steget**

#### Steg 3 – Planforbedring

Designer/utvikler svarer på klargjørende spørsmål fra steg 2.

- Oppdater planen basert på svarene
- Lagre den ferdigstilte planen som en egen fil i repoet, for eksempel `eksperiment-plan.md`, slik at den er lett tilgjengelig i gjennomføringsfasen
- Bekreft at planen er klar for implementasjon før du fortsetter

#### Steg 4 – Implementasjon

Be agenten implementere i henhold til planen.

- Gjenta tydelig i prompten at eksisterende design og funksjonalitet skal bevares, ut over det som er beskrevet i planen
- Bruk de samme reglene og guardrailsene som i mal-modus og streng modus
- Følg de samme kravene til designsystem-samsvar, tokens, tilgjengelighet og komponent-API som ellers i denne skillen
- Henvis eksplisitt til planfilen fra steg 3 i prompten til agenten

---

### Mal-modus (standard)

Mal-modus er standard med mindre brukeren ber om noe annet.

I mal-modus skal du:

- finne nærmeste dokumenterte eksempel i Storybook eller lokal komponentdokumentasjon
- kopiere struktur, komponentvalg og API-bruk fra eksempelet først
- tilpasse kun det som trengs: tekst, labels, felter, validering, dataflyt og innhold
- beholde layout, topp/bunn, containere og hovedstruktur i tråd med valgt sidetype
- unngå nye wrappers, nye abstraheringer eller lokal custom layout hvis et eksempel dekker behovet

Hvis ingen eksempel dekker behovet fullt:

- velg det nærmeste eksempelet og avvik minst mulig
- marker tydelig hva som er avvik fra eksempelet og hvorfor
- foreslå teamdialog ved større gap

### Hurtigmodus

Bruk hurtigmodus når brukeren vil komme raskt videre med implementasjon eller et konkret komponentvalg.

I hurtigmodus skal du:

- bruke ekstern dokumentasjon til å snevre inn kandidater
- verifisere bare de komponentene og tokenene du faktisk foreslår
- holde svaret kort og handlingsrettet

### Streng modus

Bruk streng modus når brukeren ber om review, universell utforming, refaktorering, kvalitetssikring eller når komponentvalg er tvetydig.

I streng modus skal du:

- verifisere alle sentrale komponentvalg mot dokumentasjon
- kontrollere både "Når bruke" og "Når ikke bruke" der det finnes
- vurdere validering, fokusflyt, tastaturstøtte, feilmeldinger og tilstandsoverganger eksplisitt
- løfte risikoer og åpne spørsmål tydelig

## Arbeidsflyt

1. Forstå behovet.

- identifiser brukermål, kontekst, feilsituasjoner og suksessituasjoner
- bekreft plattformrammer: React + TypeScript i dette repoet
- avklar om oppgaven best matches av en sidetype eller eksempelside før du går ned på komponentnivå
- avklar hvilken dokumentert mal som skal være utgangspunkt før du skriver kode
- ved spørsmål om oppsett, installasjon, avhengigheter eller import: bruk "Kom i gang for utviklere" som primærkilde
- verifiser at nødvendige designsystem-pakker eller komponenter finnes i prosjektet før du foreslår implementasjon

2. Velg kandidater.

- for side-nivå oppgaver: start med relevant sidetype eller eksempelside som ramme for topp, bunn, containere og hovedstruktur
- for komponentnivå oppgaver: start med komponentens dokumenterte eksempelkode før lokale varianter
- for stegvise skjemaer: start med `StepList` og den dokumenterte underkomponenten `StepList.Step`, ikke en lokal stepper
- for innhold og typografi: start med dokumenterte innholdskomponenter før rå HTML-elementer som `h1`, `p`, `ul`, `ol`, `a`, `blockquote` eller `dl`
- map behovet til eksisterende komponenter og mønstre før du vurderer custom UI
- hvis bruker ber om "ny komponent", tolk først behovet som sammensetting av eksisterende komponenter
- presenter minst ett realistisk alternativ basert på eksisterende komponenter før du vurderer gap

3. Gjør gate-check før endelig valg.

- les "Når bruke komponenten" og "Når ikke bruke komponenten" i ekstern dokumentasjon eller Storybook for komponentene du vurderer
- hvis behovet matcher "Når ikke bruke", vurder alternativer før du velger komponenten
- hvis det er tvil eller gap: ikke implementer uten eksplisitt begrunnelse

4. Verifiser API og mønster.

- slå opp komponentens props, events og API i Storybook eller TypeScript-definisjoner før du foreslår bruk
- ikke gjett på props, eventnavn eller støttede varianter
- bruk dokumenterte interaksjonsmønstre for validering, progresjon, tilbakemelding og bekreftelse
- for `StepList`: verifiser både `StepList` og `StepList.Step` API før forslag, inkludert gyldige `variant`-verdier og hvilke callback-props som finnes
- hvis stegene er avhengige av tidligere svar: følg dokumentert mønster med ett nytt steg per «Neste», kollaps av forrige steg og nullstilling av avhengige senere steg ved endringer

5. Vurder universell utforming.

- bruk semantisk HTML og riktige koblinger mellom labels og felt
- sikre forutsigbar fokusrekkefølge og tastaturstøtte
- gjør validering og statusoppdateringer tilgjengelig for hjelpemidler
- oppretthold synlig fokus og tilstrekkelig kontrast

6. Velg tokens semantisk.

- foretrekk semantiske tokens fremfor direkte palettverdier når dokumentasjonen støtter det
- bruk bare verifiserte tokennavn
- koble tokenvalg til hensikt: bakgrunn, tekst, border, status, container, typografi, størrelse eller spacing
- bruk spacing- og størrelsestokens før hardkodede verdier

7. Når du foreslår CSS, styling eller layout:

- bruk verifiserte designtokens i kodeeksempler når de finnes
- ikke finn opp tokennavn som ser plausible ut
- hvis eksakt tokennavn er ukjent, bruk funksjonell beskrivelse fra [semantic-tokens.md](./semantic-tokens.md) i stedet for hex-verdier, px-verdier eller lokale variabler
- ikke foreslå lokal CSS med oppdiktede spacing-, farge- eller typografiverdier hvis et relevant token dekker behovet
- hold CSS minimal, og la komponentene bære mest mulig av utseendet når designsystemet allerede dekker behovet

8. Håndter gap riktig.

- hvis behovet ikke er dekket av dokumenterte komponenter eller mønstre, ikke lag en ny ad hoc-komponent i svaret
- anbefal kontakt med teamet eller opprettelse av sak for avklaring
- beskriv kort hva gapet er, hvilke alternativer som ble vurdert, og hvorfor det bør løftes

9. Forklar valgene kort.

- oppgi hvorfor sentrale komponenter eller mønstre ble valgt
- oppgi hvilken mal eller eksempelside som ble brukt som utgangspunkt
- noter antakelser når kravgrunnlaget er ufullstendig
- inkluder lenker til relevant dokumentasjon som ble brukt når det er nyttig

## Forventet leveranse

For implementasjonsoppgaver, lever:

- React + TypeScript-kode som kan settes direkte inn i dette prosjektet
- minimal og fokusert CSS som er i tråd med eksisterende stil
- CSS som bruker verifiserte designtokens eller tydelig funksjonelle tokenbeskrivelser når eksakt navn må verifiseres
- tydelig håndtering av tomtilstand, lasting, feil og suksess
- kode som er tydelig avledet fra valgt eksempel, med minst mulig unødvendige avvik
- korte valgbegrunnelser for komponenter og eventuelle tilgjengelighetstiltak

For rådgivende oppgaver, lever:

- en kort anbefalingsliste med komponentvalg
- risikoer eller åpne spørsmål ved tvetydig dokumentasjon
- ved udekket behov: en tydelig anbefaling om teamdialog eller sak, med kort begrunnelse
- ved manglende avhengigheter: en tydelig stoppmelding med foreslåtte installasjonssteg før videre implementasjon
- et praktisk neste steg utvikleren kan gjennomføre umiddelbart

## Føringer

- mal-modus er standard: bruk dokumentert eksempelkode som utgangspunkt før du lager lokale tilpasninger
- ved side-nivå UI: foretrekk relevante sidetyper og eksempelsider i Storybook som startpunkt før du setter sammen layout fra bunnen av
- når designsystemet har en dokumentert innholdskomponent, bruk den foran rå HTML med lokal styling
- foretrekk `Heading` foran rå `h1`-`h6`, `Paragraph` foran rå `p`, `List` foran rå `ul`/`ol`, `Link` foran rå `a`, `Blockquote` foran rå `blockquote`, og `DescriptionList` foran rå `dl`/`dt`/`dd`
- bruk kun rå HTML for disse innholdstypene hvis dokumentasjonen eksplisitt krever det eller komponenten ikke dekker behovet
- når CSS eller styling foreslås: bruk definerte designtokens foran oppdiktede verdier, lokale CSS-variabler eller tilfeldige pixel- og hex-verdier
- hvis eksakt tokennavn ikke er verifisert: beskriv tokenbehovet funksjonelt i stedet for å gjette
- bruk dokumenterte komponenter før du lager tilpasset UI
- for stegvise skjemaer: bruk `StepList` + `StepList.Step` før du vurderer lokal stepper-løsning
- for stegvise skjemaer i dette repoet: vis hjelpeteksten «Alle felt må fylles ut med mindre feltet er merket valgfritt.» over steglisten
- slå alltid opp API før du foreslår konkrete props eller bruksmønstre
- hev aldri støtte for en komponent, et mønster eller et tokennavn uten dokumentasjon
- ikke fall tilbake til hardkodede verdier hvis et relevant semantisk token dekker behovet
- ikke foreslå installasjonssteg, importmønstre eller avhengigheter som avviker fra "Kom i gang for utviklere" uten tydelig begrunnelse
- hvis komponentbiblioteket ikke er installert eller tilgjengelig: ikke lag fallback-komponenter fra bunnen av for å kompensere
- ikke innfør visuell styling som bryter med designsystemet uten å oppgi begrunnelse
- ikke lag nye komponenter eller API-er for å dekke udekkede behov uten eksplisitt beslutning fra teamet
- hold språket kort og praktisk for designere og utviklere
- prioriter stabil og vedlikeholdbar kode fremfor smarte abstraksjoner

## Eksempler på invokering

- /designsystem Bruk mal-modus. Bytt ut rå `h1` og `p` med dokumenterte designsystem-komponenter, og bruk `Heading` og `Paragraph` uten å endre innholdsstrukturen.
- /designsystem Bruk mal-modus. Jeg trenger en informasjonsseksjon med overskrift, brødtekst, lenke og punktliste. Finn nærmeste eksempelkode og bruk `Heading`, `Paragraph`, `Link` og `List` i stedet for rå HTML.
- /designsystem Bruk mal-modus. Jeg trenger en oppsummering før innsending. Bruk `DescriptionList` som utgangspunkt i stedet for rå `dl`/`dt`/`dd`, og tilpass bare innholdet.
- /designsystem Bruk streng modus. Gå gjennom denne komponenten og pek ut hvor rå `h1`, `p`, `ul`, `ol`, `a`, `blockquote` eller `dl` bør erstattes med `Heading`, `Paragraph`, `List`, `Link`, `Blockquote` eller `DescriptionList`.
- /designsystem Bruk mal-modus. Refaktorer denne teksten til designsystem-komponenter, behold semantikken, og unngå lokal typografi-styling når `Heading`, `Paragraph`, `List` eller `Link` dekker behovet.
- /designsystem Bruk mal-modus. Refaktorer denne CSS-en til semantiske designtokens, fjern hardkodede hex- og pixelverdier, og bruk bare verifiserte tokens eller funksjonelle tokenbeskrivelser.
- /designsystem Bruk mal-modus. Jeg trenger minimal styling for denne komponenten. Bruk designsystemets tokens for spacing, typografi og farger, og unngå lokale CSS-variabler hvis et definert token finnes.
- /designsystem Bruk mal-modus. Finn nærmeste eksempelkode for et tekstfelt med validering og tilpass til mitt bruk.
- /designsystem Bruk mal-modus. Finn nærmeste skjemaeksempel og tilpass innholdet uten å endre hovedstruktur.
- /designsystem Bruk mal-modus. Lag et stegskjema med `StepList` der kun steg 1 vises ved start, neste steg avdekkes ved «Neste», og forrige steg kollapser til en kort oppsummering.
- /designsystem Bruk mal-modus. Verifiser faktisk `StepList.Step` API før kodeforslag, og inkluder hjelpeteksten «Alle felt må fylles ut med mindre feltet er merket valgfritt.» over steglisten.
- /designsystem Lag et oppsummeringskort for betaling med redigeringshandlinger og valideringstilstander.
- /designsystem Gjør en streng review av App.tsx opp mot designsystemet og universell utforming.
- /designsystem Foreslå hvilken sidetype jeg bør starte fra for en ekstern publikumsløsning med topp, bunn og innholdscontainer.
- /designsystem Foreslå en tilgjengelig skjemaflyt for oppdatering av kontaktinformasjon.
- /designsystem Hvilken komponent bør jeg bruke for å la brukeren velge mellom flere forhåndsdefinerte alternativer?
- /designsystem Jeg trenger en løsning for å velge en farge fra regnbuens farger. Gi et forslag basert på eksisterende komponenter først.
- /designsystem Bruk eksperiment-modus. Behovet er uklart – hjelp meg utforske og prototype en løsning for [beskriv behov].
- /designsystem Bruk eksperiment-modus, steg 1. Analyser eksisterende funksjonalitet i [filnavn/komponent] fra 3–5 perspektiver og gjør en meta-analyse. Ikke generer kode ennå.
- /designsystem Bruk eksperiment-modus, steg 2. Lag en implementasjonsplan basert på kontekstkartleggingen. Still klargjørende spørsmål om det som er uklart.
- /designsystem Bruk eksperiment-modus, steg 3. Her er svarene mine på klargjørende spørsmål. Oppdater planen og lagre den som eksperiment-plan.md.
- /designsystem Bruk eksperiment-modus, steg 4. Implementer i henhold til eksperiment-plan.md. Bevar eksisterende design og funksjonalitet ut over det som er beskrevet i planen.
