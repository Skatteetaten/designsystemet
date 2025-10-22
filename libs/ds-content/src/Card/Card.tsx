import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CardProps, CardComponent } from './Card.types';
import { getCardColorDefault, getCardSpacingDefault } from './defaults';
import { CardActions } from '../CardActions/CardActions';
import { CardAlert } from '../CardAlert/CardAlert';
import {
  getCardAlertVariantDefault,
  getCardAlertSvgPathDefault,
  getCardAlertTitleAsDefault,
} from '../CardAlert/defaults';
import { CardContent } from '../CardContent/CardContent';
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
  const cardClassName = `${styles.card} ${className}`.trim();

  const Tag = ariaLabelledBy ? 'section' : 'div';
  return (
    <Tag
      ref={ref}
      id={id}
      className={cardClassName}
      lang={lang}
      data-testid={dataTestId}
      data-color={color}
      aria-labelledby={ariaLabelledBy}
      data-spacing={spacing}
    >
      {children}
    </Tag>
  );
}) as CardComponent;

Card.displayName = 'Card';

Card.Alert = CardAlert;
Card.Actions = CardActions;
Card.Content = CardContent;
Card.Header = CardHeader;
