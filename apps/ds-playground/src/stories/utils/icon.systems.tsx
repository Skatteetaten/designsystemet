import { SystemSVGPathsAndIcons } from '@skatteetaten/ds-icons';

import {
  findSVGPathElements,
  makeLabelsFromSVGPathElements,
} from './icon.utils';

export const SystemSVGPaths = findSVGPathElements(SystemSVGPathsAndIcons);
export const SystemIconLabels = makeLabelsFromSVGPathElements(SystemSVGPaths);
