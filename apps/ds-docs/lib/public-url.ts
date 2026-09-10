export const getPublicUrl = (
  path: string,
  baseUrl = import.meta.env.BASE_URL
): string => {
  if (!path.startsWith('/') || path.startsWith('//')) {
    return path;
  }

  const normalizedBaseUrl = baseUrl.replace(/\/$/, '');

  if (
    normalizedBaseUrl &&
    (path === normalizedBaseUrl || path.startsWith(`${normalizedBaseUrl}/`))
  ) {
    return path;
  }

  return `${normalizedBaseUrl}${path}`;
};
