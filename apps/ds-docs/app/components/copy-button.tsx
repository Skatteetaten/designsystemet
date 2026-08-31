import { JSX, useEffect, useState } from 'react';

import { IconButton, IconButtonProps } from '@skatteetaten/ds-buttons';
import {
  CheckSVGpath,
  CopySVGpath,
  ErrorSVGpath,
} from '@skatteetaten/ds-icons';

import styles from './copy-button.module.scss';

export interface CopyButtonProps {
  copyText: string;
  title: string;
  copiedTitle: string;
  errorTitle?: string;
  size?: IconButtonProps['size'];
}

export const CopyButton = ({
  copyText,
  title,
  copiedTitle,
  errorTitle = 'Kunne ikke kopiere',
  size,
}: CopyButtonProps): JSX.Element => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>(
    'idle'
  );
  const buttonTitle = {
    copied: copiedTitle,
    error: errorTitle,
    idle: title,
  }[copyStatus];
  const buttonIcon = {
    copied: CheckSVGpath,
    error: ErrorSVGpath,
    idle: CopySVGpath,
  }[copyStatus];

  useEffect((): (() => void) | undefined => {
    if (copyStatus !== 'copied') {
      return;
    }

    const timeoutId = setTimeout(() => setCopyStatus('idle'), 1000);
    return () => clearTimeout(timeoutId);
  }, [copyStatus]);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  };

  return (
    <>
      <IconButton
        svgPath={buttonIcon}
        title={buttonTitle}
        size={size}
        onClick={handleCopy}
      />
      <span className={styles.status} role={'status'} aria-live={'polite'}>
        {copyStatus === 'idle' ? '' : buttonTitle}
      </span>
    </>
  );
};
