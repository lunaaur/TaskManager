


import { IStackScreen } from '@navigation/types/navigation-types';
import { ProfileScreen } from '..';

import { ProfileIcon } from '@icons';
import { clrGreen2 } from '@variables';


export const ProfileRoutes: IStackScreen[] = [
  {
    name: 'Профиль',
    router: 'tab',
    component: ProfileScreen,
    title: 'Профиль',
    icons: [ProfileIcon({fill: clrGreen2 }), ProfileIcon({fill: 'black' })]
  },
];
