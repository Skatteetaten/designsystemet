import { getPublicUrl } from './public-url';

export const getExampleUrl = (
  examplePath: string,
  isEmbedded = false,
  baseUrl = import.meta.env.BASE_URL
): string => {
  const searchParams = new URLSearchParams({ path: examplePath });

  return `${getPublicUrl('/example.html', baseUrl)}?${searchParams}${isEmbedded ? '#embedded' : ''}`;
};

export const getExamplePathFromSearch = (search: string): string | null => {
  return new URLSearchParams(search).get('path');
};
