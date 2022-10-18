import { Icon } from '../Icon/Icon';
import { IconPropsWithoutSvgPath } from '../Icon/Icon.types';

export const ArchiveOutlineSVGpath = (
  <path
    d={
      'M20 21H4V10h2v9h12v-9h2v11M3 3h18v6H3V3m6.5 8h5c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5M5 5v2h14V5H5Z'
    }
  />
);

export function ArchiveOutlineIcon(
  props: IconPropsWithoutSvgPath
): JSX.Element {
  return <Icon {...props} svgPath={ArchiveOutlineSVGpath} />;
}
