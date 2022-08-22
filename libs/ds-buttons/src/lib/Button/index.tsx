import styles from './button.module.scss';

export function Button(): JSX.Element {
  return (
    <div className={styles['container']}>
      <h1>{'Welcome to awesome Button!'}</h1>
    </div>
  );
}

export default Button;
