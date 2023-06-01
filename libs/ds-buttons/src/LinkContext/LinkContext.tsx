import { createContext } from 'react';

import { LinkContextProps } from '../LinkGroup/LinkGroup.types';

export const LinkContext = createContext<LinkContextProps | null>(null);
