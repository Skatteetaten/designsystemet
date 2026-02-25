import { JSX } from 'react';

import { BriefcaseIcon, AccountMultipleIcon } from '@skatteetaten/ds-icons';

import styles from './RoleBanner.module.scss';

export const getRoleIcon = (
  role: 'meg' | 'andre' | 'virksomhet'
): JSX.Element | string => {
  if (role === 'virksomhet') {
    return <BriefcaseIcon className={styles.roleBannerIcon} size={'medium'} />;
  } else if (role === 'andre') {
    // role === 'andre'
    return (
      <AccountMultipleIcon className={styles.roleBannerIcon} size={'medium'} />
    );
  } else {
    // role === 'meg'
    return ' ';
  }
};
