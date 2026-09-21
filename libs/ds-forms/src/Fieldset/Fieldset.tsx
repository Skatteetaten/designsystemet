import { useId, JSX } from 'react';

import { FieldsetProps } from './Fieldset.types';
import { Help } from '../LabelWithHelp/Help/Help';

import styles from './Fieldset.module.scss';

/**
 * Fieldset
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/fieldset)
 */
export const Fieldset = ({
  ref,
  id,
  className = '',
  classNames,
  lang,
  'data-testid': dataTestId,
  description,
  helpSvgPath,
  helpText,
  legend,
  titleHelpSvg,
  ariaDescribedBy,
  disabled = false,
  form,
  hasSpacing = false,
  hideLegend = false,
  onHelpToggle,
  children,
}: FieldsetProps): JSX.Element => {
  const uniqueLegendId = `legendId-${useId()}`;
  const legendId = uniqueLegendId;

  if (legend === '') {
    console.error(
      'Fieldset - Empty legend is not recommended. Set hideLegend to false if legend prop exists but is an empty string https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element'
    );
  }

  const hideLegendClassName = hideLegend ? styles.srOnly : '';
  const noMarginTopContentContainerClassName = hideLegend
    ? styles.contentContainerNoMarginTop
    : '';
  const legendClassName = `${styles.legend} ${hideLegendClassName} ${
    classNames?.legend ?? ''
  }`.trim();

  return (
    <fieldset
      ref={ref}
      id={id}
      data-testid={dataTestId}
      className={`${styles.fieldset} ${className} ${classNames?.container ?? ''}`.trim()}
      lang={lang}
      aria-describedby={ariaDescribedBy}
      disabled={disabled}
      form={form}
      data-has-spacing={hasSpacing}
    >
      <legend id={legendId} className={legendClassName}>
        {legend}
        <Help
          classNames={classNames}
          helpSvgPath={helpSvgPath}
          helpText={helpText}
          hideHelp={hideLegend}
          targetId={legendId}
          titleHelpSvg={titleHelpSvg}
          description={description}
          disabled={disabled}
          onHelpToggle={onHelpToggle}
        />
      </legend>
      <div
        className={`${styles.contentContainer} ${noMarginTopContentContainerClassName} ${classNames?.contentContainer ?? ''}`.trim()}
      >
        {children}
      </div>
    </fieldset>
  );
};

Fieldset.displayName = 'Fieldset';
