import { JSX } from 'react';

import { ErrorSummary } from '@skatteetaten/ds-forms';

export default function ErrorSummaryPreviewStateExample(): JSX.Element {
  return (
    <ErrorSummary
      title={'Du må rette disse feilene før du kan sende inn:'}
      showErrorSummary
    >
      <ErrorSummary.Error referenceId={'fornavn'}>
        {'Fornavn må fylles ut.'}
      </ErrorSummary.Error>
      <ErrorSummary.Error referenceId={'fodselsnummer'}>
        {'Fødselsnummer er ikke skrevet på riktig format.'}
      </ErrorSummary.Error>
    </ErrorSummary>
  );
}
