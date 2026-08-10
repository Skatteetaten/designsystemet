import { type ReactElement, useMemo, useState } from 'react';

import {
  SearchField,
  searchInList,
  type SearchResult,
} from '@skatteetaten/ds-forms';

const options: SearchResult[] = [
  { title: 'Sak 24/10231', description: 'Gå til sak 24/10231' },
  { title: 'Sak 24/10387', description: 'Gå til sak 24/10387' },
  { title: 'Sak 24/10995', description: 'Gå til sak 24/10995' },
  { title: 'Sak 24/11200', description: 'Gå til sak 24/11200' },
];

export default function SearchFieldLookupMenuExample(): ReactElement {
  const [value, setValue] = useState<string>('');

  const navigateToCasePage = (caseId: string): void => {
    window.alert(`Går til saksside: ${caseId}`);
    window.location.hash = `sak-${caseId}`;
  };

  const results = useMemo(() => {
    if (value.length < 1) {
      return undefined;
    }

    return searchInList(options, value);
  }, [value]);

  return (
    <SearchField
      label={'Gå til sak'}
      value={value}
      results={results}
      placeholder={'Skriv saksnummer'}
      hideLabel={false}
      onChange={(event): void => setValue(event.target.value)}
      onClear={(): void => {
        setValue('');
      }}
      onResultClick={(result): void => {
        const caseId = result.title?.replace('Sak ', '') ?? 'ukjent';
        navigateToCasePage(caseId);
      }}
      onSearch={(_, searchValue): void => {
        if (searchValue) {
          navigateToCasePage(searchValue);
        }
      }}
      onSearchClick={(_, searchValue): void => {
        if (searchValue) {
          navigateToCasePage(searchValue);
        }
      }}
    />
  );
}
