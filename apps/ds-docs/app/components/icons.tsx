import { isValidElement, JSX, ReactElement } from 'react';

import {
  Icon,
  IconVariant,
  SystemSVGPathsAndIcons,
  ThemeSVGPathsAndIcons,
} from '@skatteetaten/ds-icons';

import styles from './icons.module.scss';

type SVGPathEntry = [string, ReactElement<SVGPathElement>];
type SVGPathAndIconModule = Record<string, unknown>;

const buildIconsList = (icons: SVGPathAndIconModule): SVGPathEntry[] => {
  return Object.entries(icons)
    .filter(
      (entry): entry is SVGPathEntry =>
        entry[0].endsWith('SVGpath') && isValidElement(entry[1])
    )
    .sort(([firstKey], [secondKey]) => firstKey.localeCompare(secondKey));
};

const getIconName = (svgPathName: string): string => {
  return svgPathName.replace(/SVGpath$/, '');
};

interface IconsListProps {
  icons: SVGPathEntry[];
  variant?: IconVariant;
}

const IconsList = ({ icons, variant }: IconsListProps): JSX.Element => {
  return (
    <ul className={styles.iconList} data-variant={variant}>
      {icons.map(([svgPathName, svgPath]) => {
        const iconName = getIconName(svgPathName);

        return (
          <li key={iconName} className={styles.iconListItem}>
            <span className={styles.iconWrapper}>
              <Icon svgPath={svgPath} variant={variant} />
            </span>
            <span>{iconName}</span>
          </li>
        );
      })}
    </ul>
  );
};

export const SystemIconsList = (): JSX.Element => {
  return (
    <IconsList
      icons={buildIconsList(SystemSVGPathsAndIcons)}
      variant={'systemIcon'}
    />
  );
};

export const ThemeIconsList = (): JSX.Element => {
  return (
    <IconsList
      icons={buildIconsList(ThemeSVGPathsAndIcons)}
      variant={'themeIcon'}
    />
  );
};
