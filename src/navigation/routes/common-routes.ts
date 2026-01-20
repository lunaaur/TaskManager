

import { IStackScreen } from "@navigation/types/navigation-types";
import { MainRoutes } from "../../screens/main/routes";
import { ProfileRoutes } from "../../screens/profile/routes";

export const commonRoutes: IStackScreen[] = [
    ...MainRoutes,
    ...ProfileRoutes,
]