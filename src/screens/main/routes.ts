import { IStackScreen } from '@navigation/types/navigation-types';
import { MainScreen } from '..';

import { NotesIcon } from '@icons';
import { clrGreen2 } from '@variables';

export const MainRoutes: IStackScreen[] = [
  {
    name: 'Сегодня',
    router: 'tab',
    component: MainScreen,
    title: 'Сегодня',
    icons: [NotesIcon({ fill: clrGreen2 }), NotesIcon({ fill: 'black' })],
  },
];
