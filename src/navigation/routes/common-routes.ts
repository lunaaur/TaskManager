

import { IStackScreen } from "@navigation/types/navigation-types";
import { MainRoutes } from "../../screens/main/routes";
import { ProfileRoutes } from "../../screens/profile/routes";
import { LoginRoutes } from "src/features/login/routes";
import { TasksRoutes } from "src/features/tasks/routes";

export const commonRoutes: IStackScreen[] = [
    ...MainRoutes,
    ...LoginRoutes,
    ...TasksRoutes,
    ...ProfileRoutes,
]