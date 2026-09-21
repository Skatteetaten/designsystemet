# Kildeoppslag

Denne filen samler detaljerte kilderutiner som er flyttet ut fra SKILL.md.

## Arbeidsflyt for Canvas-eksempelkode fra GitHub

Les alltid kildekoden fra `master` i
`github.com/skatteetaten/designsystemet` først. Ikke bruk release-tag, brukerens
gren eller GitHubs rendret HTML som kildekilde.

Repository:

```text
owner: skatteetaten
repo: designsystemet
ref: master
```

Bruk et GitHub-verktøy som kan lese repository-filer når det er tilgjengelig.
Oppgi alltid `ref: master`. Hvis et slikt verktøy ikke er tilgjengelig, hent den
rå filen fra:

```text
https://raw.githubusercontent.com/skatteetaten/designsystemet/master/[filsti]
```

Les deretter:

1. MDX-filen som svarer til dokumentasjonssiden:

```text
apps/ds-docs/content/docs/[sidesti].mdx
```

2. Finn `examplesPath` i `<Canvas>`-elementet:

```mdx
<Canvas examplesPath="composed/datoer/datoOgTid" />
```

3. Les eksempelkoden fra:

```text
apps/ds-docs/content/examples/[examplesPath]/example.tsx
```

Eksempel:

```text
apps/ds-docs/content/docs/eksempler/spørre-bruker-om/datoer.mdx
apps/ds-docs/content/examples/composed/datoer/datoOgTid/example.tsx
```

Hvis `examplesPath` peker til en mappe med flere eksempler, list innholdet i
`apps/ds-docs/content/examples/[examplesPath]/`, velg eksempelet som matcher
dokumentasjonen, og les den tilhørende `example.tsx`.

Ved rå URL-oppslag må mellomrom og ikke-ASCII-tegn URL-kodes. Et GitHub-verktøy
for repository-filer er derfor å foretrekke.

## Lokal `/@fs/`-fallback

Bruk lokal Vite `/@fs/` bare hvis GitHub-kilden ikke er tilgjengelig, eller hvis
brukeren eksplisitt ber om upublisert lokal kildekode.

Vite dev-serveren eksponerer rå filer via `/@fs/[absolutt-sti]`.

Finn rot-stien én gang per sesjon:

1. Hent en side fra docs-serveren.
2. Finn en `@fs`-referanse i HTML, for eksempel:

```html
href="/@fs/[rot]/libs/ds-layout/src/TopBannerExternal/TopBannerLogo/ske-logo.svg"
```

3. Trekk ut `[rot]` frem til `/libs/` eller `/apps/`.

Bruk deretter de samme repository-relative stiene som i GitHub-arbeidsflyten:

```text
http://localhost:3000/@fs/[rot]/apps/ds-docs/content/docs/[sidesti].mdx
http://localhost:3000/@fs/[rot]/apps/ds-docs/content/examples/[examplesPath]/example.tsx
```

Merk: Docs-serverens `/examples/`- og `/_source/`-endepunkter returnerer
HTML-404, ikke kildekode.

## Tilgangssjekk for primærkilder

Hvis primærkilder ikke er tilgjengelige:

- gjennomfør live-tilgangssjekk mot en konkret fil på GitHub `master` minst en
  gang per sesjon, og alltid før du hevder at kilden er tilgjengelig
- HTTP 200-399 betyr tilgjengelig, mens HTTP 404, rate limit,
  autentiseringsfeil eller tilkoblingsfeil betyr at GitHub-oppslaget ikke lyktes
- prøv deretter lokal `/@fs/`-fallback hvis en lokal docs-server er relevant
- bruk eksplisitt sjekk mot lokal docs, for eksempel:
  - `curl -sS -o /dev/null -w "localhost %{http_code}\\n" http://localhost:3000/byggeklosser/komponenter/combobox`
  - `curl -g -sS -o /dev/null -w "::1 %{http_code}\\n" 'http://[::1]:3000/byggeklosser/komponenter/combobox'`
- merk at noen oppsett lytter kun på IPv6 ([::1])
- marker gap tydelig hvis både GitHub-kilden og lokal fallback mangler
- bruk sekundærkilder kun til orientering, ikke til å fastslå udekket API
- ikke gjett API-er, props eller kode basert kun på rendret innhold
- stopp og be brukeren velge eksplisitt om kildetilgang skal fikses først eller
  om sekundærkilde-fallback er akseptabelt
- ikke implementer kode etter manglende GitHub- og lokal primærkilde uten et
  eksplisitt valg fra brukeren

## Hurtigreferanse til docs-URL-er

URL-ene under er for rendret dokumentasjon og navigasjon. Bruk
GitHub-arbeidsflyten over for å lese MDX og eksempelkode.

1. Komponentdokumentasjon: `https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/`
2. Komponentside-mønster: `https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/<komponentslug>`
3. Hjelpe bruker med: `https://skatteetaten.github.io/designsystemet/eksempler/helpe-bruker-med/`
4. Spørre bruker om: `https://skatteetaten.github.io/designsystemet/eksempler/sp%C3%B8rre-bruker-om/mange-valg`
5. Sidetyper: `https://skatteetaten.github.io/designsystemet/eksempler/sidetyper/`
6. Formattere: `https://skatteetaten.github.io/designsystemet/byggeklosser/formattere/`
7. Ikoner: `https://skatteetaten.github.io/designsystemet/byggeklosser/ikoner/systemikoner` og `https://skatteetaten.github.io/designsystemet/byggeklosser/ikoner/temaikoner`

Hvis en forventet komponentside mangler, be om avklaring i stedet for å gjette URL.
