import { useState } from 'react';

import { Pagination } from '@skatteetaten/ds-navigation';
import { List } from '@skatteetaten/ds-typography';

import { data } from './data';

export default function PaginationControlledStateExample(): JSX.Element {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  type DataList = typeof data;

  const exampleListWithLimit = (
    rows: DataList,
    start: number,
    size: number
  ): JSX.Element[] => {
    const itemStart = (start - 1) * size;
    return rows
      .map((e, i) => {
        return (
          <List.Element key={`${e.navn}-${e.dato}-${i}`}>
            {i + 1} {e.navn}
          </List.Element>
        );
      })
      .slice(itemStart, itemStart + size);
  };

  const onChange = (nextPage: number): void => {
    setPage(nextPage);
  };

  return (
    <>
      <List hasSpacing>{exampleListWithLimit(data, page, pageSize)}</List>
      <Pagination
        pageSize={pageSize}
        totalItems={data.length}
        currentPage={page}
        onChange={onChange}
      />
    </>
  );
}
