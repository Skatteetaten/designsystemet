import { ReactNode } from 'react';

interface VersionBadgeProps {
  packageName: string;
}

export const VersionBadge = ({ packageName }: VersionBadgeProps): ReactNode => {
  let color = 'green';

  let version = process.env[`@skatteetaten/ds-${packageName}`] ?? '..';
  if (process.env['NODE_ENV'] === 'development') {
    color = 'red';
    version = 'developing';
  }
  if (process.env['STORYBOOK_BUILD_VERSION']?.includes('SNAPSHOT')) {
    color = 'blue';
  }

  const normalizedPackageName = packageName.replaceAll('-', '--');
  const normalizedVersion = version.replaceAll('-', '--').replaceAll('_', '__');

  return (
    <img
      src={`https://img.shields.io/badge/%40skatteetaten%2Fds--${normalizedPackageName}-${normalizedVersion}-${color}?logo=npm`}
      alt={`@skatteetaten/ds-${packageName}@${version}`}
    />
  );
};
