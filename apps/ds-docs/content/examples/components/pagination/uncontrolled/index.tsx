import { Pagination } from '@skatteetaten/ds-navigation';

export default function PaginationUncontrolledStateExample(): JSX.Element {
  return <Pagination pageSize={10} totalItems={40} defaultCurrent={3} />;
}
