import { EllipsisType, PaginationItem } from '../Pagination/Pagination.types';

export const ELLIPSIS = {
  BEFORE: 'ellipsis-before',
  AFTER: 'ellipsis-after',
} as const;

export const canHaveEllipsisEnd = (
  active: number,
  sibling: number,
  lastPage: number
): boolean => active + sibling + 1 < lastPage - 1;

export const canHaveEllipsisStart = (
  active: number,
  sibling: number
): boolean => active - sibling - 1 > 2;

export const getRange = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const isEllipsis = (item: PaginationItem): item is EllipsisType => {
  return (
    typeof item === 'string' &&
    (item === ELLIPSIS.BEFORE || item === ELLIPSIS.AFTER)
  );
};
