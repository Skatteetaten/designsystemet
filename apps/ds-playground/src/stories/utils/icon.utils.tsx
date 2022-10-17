import {
  SystemSVGPathsAndIcons,
  ThemeSVGPathsAndIcons,
} from '@skatteetaten/ds-icons';

export type SVGPathAndIconType =
  | typeof SystemSVGPathsAndIcons
  | typeof ThemeSVGPathsAndIcons;
export type SVGPathAndIconKey = keyof SVGPathAndIconType;

export const makeLabelsFromSVGPathElements = function (
  SVGPathElements: Record<SVGPathAndIconKey, SVGPathAndIconType>
): Record<string, string> {
  const labels: Record<string, string> = {};
  Object.keys(SVGPathElements).forEach((name: string) => {
    labels[name] = name.replace('SVGpath', '');
  });

  return labels;
};

export const findSVGPathElements = function (
  SVGPathAndIconElements: Record<SVGPathAndIconKey, SVGPathAndIconType>
): Record<string, SVGPathAndIconType[SVGPathAndIconKey]> {
  const elements: Record<string, SVGPathAndIconType[SVGPathAndIconKey]> = {};
  Object.keys(SVGPathAndIconElements).forEach((elementName: string) => {
    if (elementName.endsWith('SVGpath')) {
      elements[elementName] =
        SVGPathAndIconElements[elementName as SVGPathAndIconKey];
    }
  });

  return elements;
};

export const iconName = function (svgPathName: string): string {
  return svgPathName.replace('SVGpath', '');
};

export const getListOfAllSystemIcons = function (
  SVGPathElements: Record<SVGPathAndIconKey, SVGPathAndIconType>,
  SVGPathAndIconElements: Record<SVGPathAndIconKey, SVGPathAndIconType>
): Record<string, Record<string, SVGPathAndIconType[SVGPathAndIconKey]>> {
  const systemIconLabels = makeLabelsFromSVGPathElements(SVGPathElements);
  const systemSVGPaths = findSVGPathElements(SVGPathAndIconElements);

  return Object.values(systemIconLabels).reduce((o, key, index) => ({ ...o, [key]: { svgPath: Object.values(systemSVGPaths)[index] }}), {});
};
