export const canHaveElipsisEnd = (
  active: number,
  sibling: number,
  lastPage: number
): boolean => active + sibling + 1 < lastPage - 1;

export const canHaveElipsisStart = (active: number, sibling: number): boolean =>
  active - sibling - 1 > 2;

export const getRange = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const isElipsis = (paging: string | number): boolean => {
  return paging?.toString().match(/^elips/) ? true : false;
};
