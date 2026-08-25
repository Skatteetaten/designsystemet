export const getExampleUrl = (
  examplePath: string,
  isEmbedded = false
): string => {
  const searchParams = new URLSearchParams({ path: examplePath });

  return `/example.html?${searchParams}${isEmbedded ? '#embedded' : ''}`;
};

export const getExamplePathFromSearch = (search: string): string | null => {
  return new URLSearchParams(search).get('path');
};
