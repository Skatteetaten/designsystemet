import { DatePicker, Fieldset } from '@skatteetaten/ds-forms';

import styles from './index.module.scss';

export default function FieldsetDateRangeStateExample(): JSX.Element {
  return (
    <Fieldset
      legend={'Hvilken periode trenger du bekreftelse for?'}
      helpText={'Legg inn hvilken periode du trenger bekreftelse for.'}
    >
      <DatePicker
        className={`${styles.inlineBlock} ${styles.exampleSpacing}`}
        label={'Fra dato (dd.mm.åååå)'}
      />
      <DatePicker
        className={styles.inlineBlock}
        label={'Til dato (dd.mm.åååå)'}
      />
    </Fieldset>
  );
}
