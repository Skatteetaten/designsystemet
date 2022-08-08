import styles from './text-field.module.scss';

/* eslint-disable-next-line */
export interface TextFieldProps {}

export function TextField(props: TextFieldProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TextField!</h1>
    </div>
  );
}

export default TextField;
