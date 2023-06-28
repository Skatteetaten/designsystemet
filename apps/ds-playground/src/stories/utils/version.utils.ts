export const getVersion = (
  packageName: string
): {
  major: string;
  minor: string;
  patch: string;
  postfix?: string;
  style?: Record<string, string>;
} => {
  const ver = process.env[`@skatteetaten/${packageName}`] ?? '..';
  const [major, minor, patch] = ver.split('.');
  const majorWithPackageName = packageName ? `${packageName}@${major}` : major;

  const style = {
    color: 'var(--semantic-page-foreground)',
    background: 'var(--semantic-success-background)',
    'font-weight': 'var(--font-weight-bold)',
    'font-size': '13px',
  };

  if (process.env['NODE_ENV'] === 'development') {
    return {
      major: majorWithPackageName,
      minor,
      patch,
      postfix: 'develop',
      style: {
        ...style,
        background: 'var(--semantic-danger-background)',
      },
    };
  }
  if (process.env['STORYBOOK_BUILD_VERSION']?.includes('SNAPSHOT')) {
    return {
      major: majorWithPackageName,
      minor,
      patch,
      postfix: process.env['STORYBOOK_BUILD_VERSION'],
      style: {
        ...style,
        background: 'var(--semantic-warning-background)',
      },
    };
  }

  return {
    major: majorWithPackageName,
    minor,
    patch,

    style: {
      ...style,
    },
  };
};
