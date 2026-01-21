import { IStackScreen } from "@navigation/types/navigation-types";
import { Login } from "./components/login";

export const LoginRoutes: IStackScreen[] = [
    {
        name: 'login',
        component: Login,
    }
]