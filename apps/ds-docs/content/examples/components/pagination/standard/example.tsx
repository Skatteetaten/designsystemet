import { JSX } from 'react';

import { Pagination } from '@skatteetaten/ds-navigation';

export default function PaginationStandardStateExample(): JSX.Element {
  return (
    <Pagination defaultCurrent={1} pageSize={10} sibling={3} totalItems={70} />
  );
}
