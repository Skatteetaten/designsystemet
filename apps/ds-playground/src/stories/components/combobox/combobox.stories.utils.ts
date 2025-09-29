import type { ComboboxOption } from '@skatteetaten/ds-forms';

export const comboboxStoryOptions: ComboboxOption[] = [
  { label: 'Agurk', value: 'agurk' },
  { label: 'Artiskok', value: 'artiskok' },
  { label: 'Asparges', value: 'asparges' },
  { label: 'Aubergine', value: 'aubergine' },
  { label: 'Avokado', value: 'avokado' },
  { label: 'Bladbete', value: 'bladbete' },
  { label: 'Blomkål', value: 'blomkal' },
  { label: 'Brokkoli', value: 'brokkoli' },
  { label: 'Chili', value: 'chili' },
  { label: 'Dill', value: 'dill' },
  { label: 'Estragon', value: 'estragon' },
  { label: 'Fennikel', value: 'fennikel' },
  { label: 'Grønn paprika', value: 'gronn-paprika' },
  { label: 'Gulrot', value: 'gulrot' },
  { label: 'Grønnkål', value: 'gronnkal' },
  { label: 'Hodekål', value: 'hodekal' },
  { label: 'Hvitløk', value: 'hvitlok' },
  { label: 'Ingefær', value: 'ingefaer' },
  { label: 'Jordskokk', value: 'jordskokk' },
  { label: 'Kinakål', value: 'kinakal' },
  { label: 'Knollselleri', value: 'knollselleri' },
  { label: 'Kvann', value: 'kvann' },
  { label: 'Løk', value: 'lok' },
  { label: 'Mais', value: 'mais' },
  { label: 'Mangold', value: 'mangold' },
  { label: 'Nepe', value: 'nepe' },
  { label: 'Okra', value: 'okra' },
  { label: 'Paprika', value: 'paprika' },
  { label: 'Pastinakk', value: 'pastinakk' },
  { label: 'Persille', value: 'persille' },
  { label: 'Potet', value: 'potet' },
  { label: 'Purre', value: 'purre' },
  { label: 'Reddik', value: 'reddik' },
  { label: 'Romanesco', value: 'romanesco' },
  { label: 'Rosenkål', value: 'rosenkal' },
  { label: 'Rucola', value: 'rucola' },
  { label: 'Rødbete', value: 'rodbete' },
  { label: 'Rødkål', value: 'rodkal' },
  { label: 'Rød paprika', value: 'rod-paprika' },
  { label: 'Salat', value: 'salat' },
  { label: 'Selleri', value: 'selleri' },
  { label: 'Sopp', value: 'sopp' },
  { label: 'Spinat', value: 'spinat' },
  { label: 'Squash', value: 'squash' },
  { label: 'Stilk', value: 'stilk' },
  { label: 'Søtpotet', value: 'sotpotet' },
  { label: 'Timian', value: 'timian' },
  { label: 'Tomat', value: 'tomat' },
  { label: 'Vannmelon', value: 'vannmelon' },
  { label: 'Vårløk', value: 'varlok' },
  { label: 'Yacon', value: 'yacon' },
  { label: 'Zucchini', value: 'zucchini' },
  { label: 'Ærter', value: 'erter' },
  { label: 'Åkerbønne', value: 'akerbonne' },
  { label: 'Ølgress', value: 'olgress' },
];

export const generatePerformanceTestData = (
  count: number
): ComboboxOption[] => {
  const categories = [
    'Kommune',
    'Fylke',
    'Organisasjon',
    'Avdeling',
    'Enhet',
    'Tjeneste',
  ];
  const suffixes = [
    'Nord',
    'Sør',
    'Øst',
    'Vest',
    'Sentral',
    'Regional',
    'Lokal',
  ];

  return Array.from({ length: count }, (_, index) => {
    const category = categories[Math.floor(index / 100) % categories.length];
    const suffix = suffixes[index % suffixes.length];
    const number = (index + 1).toString().padStart(4, '0');

    let label: string;
    const variation = index % 3;

    switch (variation) {
      case 0:
        label = `${category} ${number.slice(-2)}`;
        break;
      case 1:
        label = `${category} ${suffix} ${number}`;
        break;
      default:
        label = `${category} for ${suffix} region - ${number}`;
    }

    return {
      label,
      value: `item-${index + 1}`,
    };
  });
};
