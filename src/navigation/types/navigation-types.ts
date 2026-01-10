import { ComponentType } from "react";

export interface IStackScreen {
    name: string;
    component: ComponentType<any>;
}