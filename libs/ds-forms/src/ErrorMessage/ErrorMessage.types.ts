import { BaseProps } from '@skatteetaten/ds-core-utils';

type ErrorMessageDiscriminatedProps =
  | {
      /** Om feilmeldingen er synlig */
      showError: boolean | undefined;
      /** Tekst for feilmeldingen */
      children: string;
    }
  | {
      /** Om feilmeldingen er synlig */
      showError: boolean | undefined;
      /** Tekst for feilmeldingen */
      children?: never;
    };

export type ErrorMessageProps = BaseProps & ErrorMessageDiscriminatedProps;
