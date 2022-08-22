import styles from './text-field.module.scss';

export interface TextFieldProps {
  message: string;
}

export function TextField(props: TextFieldProps): JSX.Element {
  return (
    <div className={styles['container']}>
      <h1>{'Welcome to TextField!'}</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default TextField;
