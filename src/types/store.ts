import { IUserState } from 'src/features/login/types/types';
import { ITaskState } from './task';

export interface RootState {
  user: IUserState;
  tasksData: {
    count: number;
    tasks: ITaskState[];
  }
}