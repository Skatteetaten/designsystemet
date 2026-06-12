import { JSX, useId, Children, isValidElement } from 'react';

import { CardComponent, CardProps } from './Card.types';
import { CardActions } from './CardActions/CardActions';
import { CardAlert } from './CardAlert/CardAlert';
import { CardContent } from './CardContent/CardContent';
import { CardContext } from './CardContext';
import { CardHeader } from './CardHeader/CardHeader';

import styles from './Card.module.scss';

/**
 * Card
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-card--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/card/) - Brukerveiledning
 */
export const Card = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  color = 'white',
  ariaLabelledBy,
  spacing = 'm',
  children,
}: CardProps): JSX.Element => {
  const alertHeadingId = useId();
  const cardClassName = `${styles.card} ${className}`.trim();

  const Tag = ariaLabelledBy ? 'section' : 'div';

  const hasCardAlertAsChild = Boolean(
    Children.toArray(children).find((child) =>
      isValidElement(child) ? child.type === CardAlert : null
    )
  );

  const computedAriaLabelledBy =
    alertHeadingId + (ariaLabelledBy ? ` ${ariaLabelledBy}` : '');

  return (
    <CardContext.Provider
      value={{
        alertHeadingId: hasCardAlertAsChild ? alertHeadingId : undefined,
      }}
    >
      <Tag
        ref={ref}
        id={id}
        className={cardClassName}
        lang={lang}
        data-testid={dataTestId}
        data-color={color}
        aria-labelledby={
          hasCardAlertAsChild ? computedAriaLabelledBy : ariaLabelledBy
        }
        data-spacing={spacing}
      >
        {children}
      </Tag>
    </CardContext.Provider>
  );
};

export default Card as CardComponent;

Card.displayName = 'Card';

Card.Alert = CardAlert;
Card.Actions = CardActions;
Card.Content = CardContent;
Card.Header = CardHeader;
