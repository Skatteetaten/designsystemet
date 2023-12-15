import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface FileUploaderFileProps extends BaseProps {
  href?: string;
  onClick?: () => void;
  children: string;
}
