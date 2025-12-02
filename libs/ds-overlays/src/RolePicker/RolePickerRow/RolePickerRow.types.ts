import { NavigationTileProps } from '@skatteetaten/ds-navigation';

export interface RolePickerRowProps
  extends Pick<
    NavigationTileProps,
    'title' | 'description' | 'svgPath' | 'titleAs' | 'onClick'
  > {
  id: string;
}
