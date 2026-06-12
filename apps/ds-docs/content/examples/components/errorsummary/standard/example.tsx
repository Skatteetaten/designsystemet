import { ErrorSummary } from '@skatteetaten/ds-forms';

export default function ErrorSummaryPreviewStateExample(): JSX.Element {
  return (
    <ErrorSummary
      title={'Du må rette disse feilene før du kan sende inn:'}
      showErrorSummary
    >
      <ErrorSummary.Error referenceId={'fornavn'}>
        {'Fornavn er påkrevd.'}
      </ErrorSummary.Error>
      <ErrorSummary.Error referenceId={'fodselsnummer'}>
        {'Fødselsnummer er ugyldig.'}
      </ErrorSummary.Error>
    </ErrorSummary>
  );
}
