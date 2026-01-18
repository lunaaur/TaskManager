import { ComponentType, ReactElement } from "react";

export interface IStackScreen {
    name: string;
    component: ComponentType<any>;
    title?: string;
    router?: 'tab' | 'stack';
    icons?: [ReactElement, ReactElement];

}