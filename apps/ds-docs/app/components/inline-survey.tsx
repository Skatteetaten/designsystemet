import { createElement, JSX } from 'react';

import styles from './inline-survey.module.scss';

interface InlineSurveyProps {
  slug: string;
  className?: string;
}

export const InlineSurvey = ({
  slug,
  className,
}: InlineSurveyProps): JSX.Element =>
  createElement('skyra-survey', {
    slug,
    class: [styles.survey, className].filter(Boolean).join(' '),
  });
