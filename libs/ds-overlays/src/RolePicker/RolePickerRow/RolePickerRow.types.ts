import { NavigationTileProps } from '@skatteetaten/ds-navigation';

import { RolePickerAnalyticsId } from '../analyticsIds';

export interface RolePickerRowProps
  extends Pick<
    NavigationTileProps,
    'title' | 'description' | 'svgPath' | 'titleAs' | 'onClick'
  > {
  id: string;
  webAnalyticsId?: RolePickerAnalyticsId;
}
