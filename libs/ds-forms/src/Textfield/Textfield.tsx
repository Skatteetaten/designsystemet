import styles from './Textfield.module.scss';

export interface TextfieldProps {
  message: string;
}

export function Textfield(props: TextfieldProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>{'Welcome to Textfield!'}</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default Textfield;
