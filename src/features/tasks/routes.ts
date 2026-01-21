import { IStackScreen } from "@navigation/types/navigation-types";
import { TodayTasks } from "./components/today-tasks";

export const TasksRoutes: IStackScreen[] = [
    {
        name: 'today-tasks',
        component: TodayTasks,
    }
]