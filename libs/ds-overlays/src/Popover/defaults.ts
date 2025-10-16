import { PopoverPosition, PopoverColor } from './Popover.types';
import { PopoverContentAs } from '../PopoverContent/PopoverContent.types';

export const getPopoverColorDefault = (): PopoverColor => 'forest';
export const getPopoverPositionDefault = (): PopoverPosition => 'bottomStart';
export const getPopoverRestoreFocusDefault = (): boolean => true;
export const getPopoverContentAsDefault = (): PopoverContentAs => 'div';
