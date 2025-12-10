import type {
  ComboboxOption,
  TypedComboboxOption,
} from '@skatteetaten/ds-forms';

export const comboboxStoryOptions: ComboboxOption[] = [
  { label: 'Aker', value: 'aker' },
  { label: 'Ankenes', value: 'ankenes' },
  { label: 'Andenes', value: 'andenes' },
  { label: 'Arendal', value: 'arendal' },
  { label: 'Askim', value: 'askim' },
  { label: 'Aurskog', value: 'aurskog' },
  { label: 'Austre Moland', value: 'austre-moland' },
  { label: 'Balestrand', value: 'balestrand' },
  { label: 'Barbu', value: 'barbu' },
  { label: 'Berg', value: 'berg' },
  { label: 'Bjelland', value: 'bjelland' },
  { label: 'Bjørnskinn', value: 'bjornskinn' },
  { label: 'Bodin', value: 'bodin' },
  { label: 'Borgund', value: 'borgund' },
  { label: 'Botne', value: 'botne' },
  { label: 'Brandval', value: 'brandval' },
  { label: 'Breim', value: 'breim' },
  { label: 'Brekken', value: 'brekken' },
  { label: 'Bremsnes', value: 'bremsnes' },
  { label: 'Bruvik', value: 'bruvik' },
  { label: 'Bud', value: 'bud' },
  { label: 'Buksnes', value: 'buksnes' },
  { label: 'Byneset', value: 'byneset' },
  { label: 'Bø i Telemark', value: 'bo-i-telemark' },
  { label: 'Degernes', value: 'degernes' },
  { label: 'Drøbak', value: 'drobak' },
  { label: 'Dypvåg', value: 'dypvag' },
  { label: 'Edøy', value: 'edoy' },
  { label: 'Egge', value: 'egge' },
  { label: 'Eidanger', value: 'eidanger' },
  { label: 'Eidsberg', value: 'eidsberg' },
  { label: 'Eikefjord', value: 'eikefjord' },
  { label: 'Elsfjord', value: 'elsfjord' },
  { label: 'Eresfjord og Vistdal', value: 'eresfjord-og-vistdal' },
  { label: 'Evje', value: 'evje' },
  { label: 'Feda', value: 'feda' },
  { label: 'Fet', value: 'fet' },
  { label: 'Finsland', value: 'finsland' },
  { label: 'Finnøy', value: 'finnoy' },
  { label: 'Fjell', value: 'fjell' },
  { label: 'Fjotland', value: 'fjotland' },
  { label: 'Flora', value: 'flora' },
  { label: 'Fluberg', value: 'fluberg' },
  { label: 'Foldereid', value: 'foldereid' },
  { label: 'Fosnes', value: 'fosnes' },
  { label: 'Frol', value: 'frol' },
  { label: 'Furnes', value: 'furnes' },
  { label: 'Fåberg', value: 'faberg' },
  { label: 'Gaular', value: 'gaular' },
  { label: 'Gimsøy', value: 'gimsoy' },
  { label: 'Gjerpen', value: 'gjerpen' },
  { label: 'Glemmen', value: 'glemmen' },
  { label: 'Gransherad', value: 'gransherad' },
  { label: 'Gravvik', value: 'gravvik' },
  { label: 'Grindheim', value: 'grindheim' },
  { label: 'Grytten', value: 'grytten' },
  { label: 'Hafslo', value: 'hafslo' },
  { label: 'Halsa', value: 'halsa' },
  { label: 'Hamre', value: 'hamre' },
  { label: 'Haus', value: 'haus' },
  { label: 'Heidal', value: 'heidal' },
  { label: 'Helleland', value: 'helleland' },
  { label: 'Hemne', value: 'hemne' },
  { label: 'Herad', value: 'herad' },
  { label: 'Herdla', value: 'herdla' },
  { label: 'Hetland', value: 'hetland' },
  { label: 'Hillesøy', value: 'hillesoy' },
  { label: 'Hitra', value: 'hitra' },
  { label: 'Hjelmeland', value: 'hjelmeland' },
  { label: 'Hobøl', value: 'hobol' },
  { label: 'Hol', value: 'hol' },
  { label: 'Holt', value: 'holt' },
  { label: 'Hopen', value: 'hopen' },
  { label: 'Horg', value: 'horg' },
  { label: 'Hornnes', value: 'hornnes' },
  { label: 'Hovin', value: 'hovin' },
  { label: 'Hustad', value: 'hustad' },
  { label: 'Hålandsdal', value: 'halandsdal' },
  { label: 'Hægeland', value: 'haegeland' },
  { label: 'Hølen', value: 'holen' },
  { label: 'Høvåg', value: 'hovag' },
  { label: 'Høle', value: 'hole' },
  { label: 'Imsland', value: 'imsland' },
  { label: 'Jelsa', value: 'jelsa' },
  { label: 'Jondal', value: 'jondal' },
  { label: 'Jølster', value: 'jolster' },
  { label: 'Kinn', value: 'kinn' },
  { label: 'Kjerringøy', value: 'kjerringoy' },
  { label: 'Klinga', value: 'klinga' },
  { label: 'Kolbu', value: 'kolbu' },
  { label: 'Konsmo', value: 'konsmo' },
  { label: 'Korgen', value: 'korgen' },
  { label: 'Kråkerøy', value: 'krakeroy' },
  { label: 'Kvalsund', value: 'kvalsund' },
  { label: 'Kvenvær', value: 'kvenvaer' },
  { label: 'Kvikne', value: 'kvikne' },
  { label: 'Kyrkjebø', value: 'kyrkjebo' },
  { label: 'Land', value: 'land' },
  { label: 'Langenes', value: 'langenes' },
  { label: 'Lardal', value: 'lardal' },
  { label: 'Lavik', value: 'lavik' },
  { label: 'Leiranger', value: 'leiranger' },
  { label: 'Leksvik', value: 'leksvik' },
  { label: 'Lensvik', value: 'lensvik' },
  { label: 'Lindås', value: 'lindas' },
  { label: 'Lunde', value: 'lunde' },
  { label: 'Lårdal', value: 'laardal' },
  { label: 'Malangen', value: 'malangen' },
  { label: 'Mandal', value: 'mandal' },
  { label: 'Marnardal', value: 'marnardal' },
  { label: 'Meland', value: 'meland' },
  { label: 'Mo', value: 'mo' },
  { label: 'Mosjøen', value: 'mosjoen' },
  { label: 'Moster', value: 'moster' },
  { label: 'Mykland', value: 'mykland' },
  { label: 'Namdalseid', value: 'namdalseid' },
  { label: 'Nedre Eiker', value: 'nedre-eiker' },
  { label: 'Nedstrand', value: 'nedstrand' },
  { label: 'Nesset', value: 'nesset' },
  { label: 'Nordfold', value: 'nordfold' },
  { label: 'Nordli', value: 'nordli' },
  { label: 'Nord-Aukra', value: 'nord-aukra' },
  { label: 'Nord-Frøya', value: 'nord-froya' },
  { label: 'Nord-Varanger', value: 'nord-varanger' },
  { label: 'Nordvik', value: 'nordvik' },
  { label: 'Nærøy', value: 'naeroy' },
  { label: 'Nøtterøy', value: 'notteroy' },
  { label: 'Odda', value: 'odda' },
  { label: 'Ogna', value: 'ogna' },
  { label: 'Onsøy', value: 'onsoy' },
  { label: 'Orkanger', value: 'orkanger' },
  { label: 'Orkland', value: 'orkland' },
  { label: 'Osen', value: 'osen' },
  { label: 'Polmak', value: 'polmak' },
  { label: 'Ramnes', value: 'ramnes' },
  { label: 'Rauland', value: 'rauland' },
  { label: 'Rendal', value: 'rendal' },
  { label: 'Rissa', value: 'rissa' },
  { label: 'Rolvsøy', value: 'rolvsoy' },
  { label: 'Rovde', value: 'rovde' },
  { label: 'Rømskog', value: 'romskog' },
  { label: 'Røros landsogn', value: 'roros-landsogn' },
  { label: 'Rødenes', value: 'rodenes' },
  { label: 'Sand', value: 'sand' },
  { label: 'Sande', value: 'sande' },
  { label: 'Sandnessjøen', value: 'sandnessjen' },
  { label: 'Sandsvær', value: 'sandsvaer' },
  { label: 'Sandvollan', value: 'sandvollan' },
  { label: 'Sannidal', value: 'sannidal' },
  { label: 'Selje', value: 'selje' },
  { label: 'Setskog', value: 'setskog' },
  { label: 'Sjernarøy', value: 'sjernaroy' },
  { label: 'Skjeberg', value: 'skjeberg' },
  { label: 'Skjold', value: 'skjold' },
  { label: 'Skoger', value: 'skoger' },
  { label: 'Skudenes', value: 'skudenes' },
  { label: 'Skånevik', value: 'skanevik' },
  { label: 'Skåre', value: 'skare' },
  { label: 'Slidre', value: 'slidre' },
  { label: 'Snillfjord', value: 'snillfjord' },
  { label: 'Soknedal', value: 'soknedal' },
  { label: 'Solum', value: 'solum' },
  { label: 'Songdalen', value: 'songdalen' },
  { label: 'Sparbu', value: 'sparbu' },
  { label: 'Spydeberg', value: 'spydeberg' },
  { label: 'Stangaland', value: 'stangaland' },
  { label: 'Stathelle', value: 'stathelle' },
  { label: 'Stemshaug', value: 'stemshaug' },
  { label: 'Stjørna', value: 'stjorna' },
  { label: 'Stod', value: 'stod' },
  { label: 'Stokken', value: 'stokken' },
  { label: 'Stordal', value: 'stordal' },
  { label: 'Strandvik', value: 'strandvik' },
  { label: 'Strinda', value: 'strinda' },
  { label: 'Strømsgodset', value: 'stromsgodset' },
  { label: 'Sunnylven', value: 'sunnylven' },
  { label: 'Svolvær', value: 'svolvaer' },
  { label: 'Sæbø', value: 'saebo' },
  { label: 'Søndeled', value: 'sondeled' },
  { label: 'Sørfold', value: 'sorfold' },
  { label: 'Sørøysund', value: 'soraysund' },
  { label: 'Sør-Audnedal', value: 'sor-audnedal' },
  { label: 'Sør-Rana', value: 'sor-rana' },
  { label: 'Sørum', value: 'sorum' },
  { label: 'Talvik', value: 'talvik' },
  { label: 'Tjølling', value: 'tjolling' },
  { label: 'Tjøtta', value: 'tjotta' },
  { label: 'Tonstad', value: 'tonstad' },
  { label: 'Torsken', value: 'torsken' },
  { label: 'Torvastad', value: 'torvastad' },
  { label: 'Tranøy', value: 'tranoy' },
  { label: 'Trøgstad', value: 'trogstad' },
  { label: 'Tromsøysund', value: 'tromsaysund' },
  { label: 'Tune', value: 'tune' },
  { label: 'Tveit', value: 'tveit' },
  { label: 'Tysfjord', value: 'tysfjord' },
  { label: 'Ullsfjord', value: 'ullsfjord' },
  { label: 'Valberg', value: 'valberg' },
  { label: 'Valsøyfjord', value: 'valsoyfjord' },
  { label: 'Varaldsøy', value: 'varaldsoy' },
  { label: 'Varhaug', value: 'varhaug' },
  { label: 'Vartdal', value: 'vartdal' },
  { label: 'Vats', value: 'vats' },
  { label: 'Velfjord', value: 'velfjord' },
  { label: 'Veøy', value: 'veoy' },
  { label: 'Vestre Gausdal', value: 'vestre-gausdal' },
  { label: 'Vestre Slidre', value: 'vestre-slidre' },
  { label: 'Vigmostad', value: 'vigmostad' },
  { label: 'Vikebygd', value: 'vikebygd' },
  { label: 'Vikna', value: 'vikna' },
  { label: 'Vinje', value: 'vinje' },
  { label: 'Vossestrand', value: 'vossestrand' },
  { label: 'Vågsøy', value: 'vagsoy' },
  { label: 'Ytre Sandsvær', value: 'ytre-sandsvaer' },
  { label: 'Ålen', value: 'alen' },
  { label: 'Årdal', value: 'ardal' },
  { label: 'Åsen', value: 'asen' },
  { label: 'Åsnes og Våler', value: 'asnes-og-valer' },
  { label: 'Åsgårdstrand', value: 'asgardstrand' },
  { label: 'Årstad', value: 'arstad' },
  { label: 'Ølen', value: 'olen' },
  { label: 'Ørskog', value: 'orskog' },
  { label: 'Øvrebø', value: 'ovrebo' },
  { label: 'Øvre Sandsvær', value: 'ovre-sandsvaer' },
  { label: 'Øvre Stjørdal', value: 'ovre-stjordal' },
  { label: 'Øymark', value: 'oymark' },
  { label: 'Østre Gausdal', value: 'ostre-gausdal' },
  { label: 'Åkerbønne', value: 'akerbonne' },
];

export type KommuneTestMetaData = {
  sammenslatt: string;
  aar: string;
  type: string;
  resultat: string;
};

export const typedKommuneOptions: TypedComboboxOption<KommuneTestMetaData>[] = [
  {
    label: 'Agdenes',
    value: 'agdenes',
    data: {
      sammenslatt: '2020',
      aar: '1964',
      type: 'Slått sammen med Orkdal, Meldal og deler av Snillfjord',
      resultat: 'Orkland',
    },
  },
  {
    label: 'Balestrand',
    value: 'balestrand',
    data: {
      sammenslatt: '2020',
      aar: '1838',
      type: 'Innlemmet i Sogndal',
      resultat: 'Sogndal',
    },
  },
  {
    label: 'Finnøy',
    value: 'finnoy',
    data: {
      sammenslatt: '2020',
      aar: '1838',
      type: 'Innlemmet i Stavanger',
      resultat: 'Stavanger',
    },
  },
  {
    label: 'Forsand',
    value: 'forsand',
    data: {
      sammenslatt: '2020',
      aar: '1838',
      type: 'Innlemmet i Sandnes',
      resultat: 'Sandnes',
    },
  },
  {
    label: 'Kvalsund',
    value: 'kvalsund',
    data: {
      sammenslatt: '2020',
      aar: '1869',
      type: 'Innlemmet i Hammerfest',
      resultat: 'Hammerfest',
    },
  },
  {
    label: 'Mandal',
    value: 'mandal',
    data: {
      sammenslatt: '2020',
      aar: '1838',
      type: 'Slått sammen med Marnardal og Lindesnes',
      resultat: 'Lindesnes',
    },
  },
  {
    label: 'Midsund',
    value: 'midsund',
    data: {
      sammenslatt: '2020',
      aar: '1965',
      type: 'Innlemmet i Molde',
      resultat: 'Molde',
    },
  },
  {
    label: 'Rennesøy',
    value: 'rennesoy',
    data: {
      sammenslatt: '2020',
      aar: '1838',
      type: 'Innlemmet i Stavanger',
      resultat: 'Stavanger',
    },
  },
  {
    label: 'Songdalen',
    value: 'songdalen',
    data: {
      sammenslatt: '2020',
      aar: '1964',
      type: 'Innlemmet i Kristiansand',
      resultat: 'Kristiansand',
    },
  },
  {
    label: 'Tysfjord',
    value: 'tysfjord',
    data: {
      sammenslatt: '2020',
      aar: '1869',
      type: 'Oppdelt og innlemmet i Narvik og Hamarøy',
      resultat: 'Narvik, Hamarøy',
    },
  },
];

export const getComboboxStoryOptions = (count = 15): ComboboxOption[] => {
  const seenLetters = new Set<string>();
  const result: ComboboxOption[] = [];

  const sortedOptions = [...comboboxStoryOptions].sort((a, b) =>
    a.label.localeCompare(b.label, 'nb')
  );

  for (const option of sortedOptions) {
    const firstLetter = option.label[0].toUpperCase();

    if (!seenLetters.has(firstLetter)) {
      seenLetters.add(firstLetter);
      result.push(option);

      if (result.length >= count) {
        break;
      }
    }
  }

  return result;
};

export const generatePerformanceTestData = (
  count?: number
): ComboboxOption[] => {
  const result: ComboboxOption[] = [];
  const directions = ['Sør', 'Nord', 'Øst', 'Vest'];

  for (const kommune of comboboxStoryOptions) {
    for (const direction of directions) {
      for (let i = 1; i <= 5; i++) {
        result.push({
          label: `${kommune.label} ${direction} ${i}`,
          value: `${kommune.value}-${direction.toLowerCase()}-${i}`,
        });
      }
    }
  }

  return result;
};
