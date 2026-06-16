import { JSX } from 'react';

import { ErrorMessage } from '@skatteetaten/ds-forms';

export default function ErrorMessagePreviewStateExample(): JSX.Element {
  return <ErrorMessage showError>{'Feltet er påkrevd.'}</ErrorMessage>;
}
