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

  const normalizedPackageName = packageName.replace('-', '--');
  const buildVersion = process.env['STORYBOOK_BUILD_VERSION'];
  if (buildVersion?.includes('SNAPSHOT')) {
    return (
      <img
        src={`https://img.shields.io/badge/%40skatteetaten%2Fds--${normalizedPackageName}-${version}--${buildVersion}-${color}`}
        alt={`@skatteetaten/ds-${packageName}@${version}-${buildVersion}`}
      />
    );
  }

  return (
    <img
      src={`https://img.shields.io/badge/%40skatteetaten%2Fds--${normalizedPackageName}-${version}-${color}`}
      alt={`@skatteetaten/ds-${packageName}@${version}`}
    />
  );
};
