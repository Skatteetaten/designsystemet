import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CardProps, CardComponent } from './Card.types';
import { getCardColorDefault } from './defaults';
import { CardActions } from '../CardActions/CardActions';
import { CardContent } from '../CardContent/CardContent';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardNote } from '../CardNote/CardNote';
import {
  getCardNoteVariantDefault,
  getCardNoteSvgPathDefault,
  getCardNoteTitleAsDefault,
} from '../CardNote/defaults';

import styles from './Card.module.scss';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      color = getCardColorDefault(),
      ariaLabelledBy,
      spacing,
      children,
    },
    ref
  ): JSX.Element => {
    const cardClassName = `${styles.card}  ${className}`.trim();

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
  }
) as CardComponent;

Card.displayName = 'Card';

Card.Note = CardNote;
Card.Actions = CardActions;
Card.Content = CardContent;
Card.Header = CardHeader;

export {
  getCardColorDefault,
  getCardNoteVariantDefault,
  getCardNoteSvgPathDefault,
  getCardNoteTitleAsDefault,
};
