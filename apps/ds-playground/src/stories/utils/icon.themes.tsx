import { ThemeSVGPathsAndIcons } from '@skatteetaten/ds-icons';

import {
  findSVGPathElements,
  makeLabelsFromSVGPathElements,
} from './icon.utils';

export const ThemeSVGPaths = findSVGPathElements(ThemeSVGPathsAndIcons);
export const ThemeIconLabels = makeLabelsFromSVGPathElements(ThemeSVGPaths);
