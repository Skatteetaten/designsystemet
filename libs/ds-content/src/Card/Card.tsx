import { JSX, useId, Children, isValidElement } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CardComponent, CardProps } from './Card.types';
import { getCardColorDefault, getCardSpacingDefault } from './defaults';
import { CardActions } from '../CardActions/CardActions';
import { CardAlert } from '../CardAlert/CardAlert';
import { CardContent } from '../CardContent/CardContent';
import { CardContext } from '../CardContext/CardContext';
import { CardHeader } from '../CardHeader/CardHeader';

import styles from './Card.module.scss';

export const Card = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  color = getCardColorDefault(),
  ariaLabelledBy,
  spacing = getCardSpacingDefault(),
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
}) as CardComponent;

Card.displayName = 'Card';

Card.Alert = CardAlert;
Card.Actions = CardActions;
Card.Content = CardContent;
Card.Header = CardHeader;
