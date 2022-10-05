import { SystemSVGPathsAndIcons } from '@skatteetaten/ds-icons';

import {
  findSVGPathElements,
  makeLabelsFromSVGPathElements,
  SVGPathAndIconType,
  SVGPathAndIconKey,
} from '../icon.utils';

describe('Icon utils', () => {
  it('Returnerer riktig SVGPath fra importert SVG-element', () => {
    const SVGPathAndIconElements: Record<
      SVGPathAndIconKey,
      SVGPathAndIconType
    > = {
      AccountChildSVGpath: SystemSVGPathsAndIcons.AccountChildSVGpath,
      AccountChildIcon: SystemSVGPathsAndIcons.AccountChildIcon,
      AddSVGpath: SystemSVGPathsAndIcons.AddSVGpath,
      AddIcon: SystemSVGPathsAndIcons.AddIcon,
    };

    const SVGPathElements = findSVGPathElements(SVGPathAndIconElements);

    const expectedSVGPaths: Record<SVGPathAndIconKey, SVGPathAndIconType> = {
      AccountChildSVGpath: SystemSVGPathsAndIcons.AccountChildSVGpath,
      AddSVGpath: SystemSVGPathsAndIcons.AddSVGpath,
    };
    expect(SVGPathElements).toEqual(expectedSVGPaths);
  });

  it('Returnerer riktig Storybook-labels fra SVGPath-elementer', () => {
    const SVGPathElements: Record<SVGPathAndIconKey, SVGPathAndIconType> = {
      AccountChildSVGpath: SystemSVGPathsAndIcons.AccountChildSVGpath,
      AddSVGpath: SystemSVGPathsAndIcons.AddSVGpath,
    };

    const labels = makeLabelsFromSVGPathElements(SVGPathElements);

    const expectedLabels: Record<string, string> = {
      AccountChildSVGpath: 'AccountChild',
      AddSVGpath: 'Add',
    };
    expect(labels).toEqual(expectedLabels);
  });
});
