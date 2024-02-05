import { SearchResult } from '../SearchField/SearchField.types';

export const searchInList = (
  options: Array<SearchResult>,
  filterText: string
): Array<SearchResult> => {
  const regex = /[\s.,:-]+/g;
  return options
    .filter((option) => {
      return (
        (option.title ?? option.description)
          .replace(regex, '')
          .toLowerCase()
          .indexOf(filterText.replace(regex, '').toLowerCase()) > -1
      );
    })
    .map((option) => option);
};
