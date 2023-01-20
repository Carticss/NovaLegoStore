import { createContext, Dispatch  } from "react";
import { darkStyles } from "./styles/darkStyles";
import { lightStyles } from "./styles/lightStyles";

export enum ThemeTypes {
    DARK = "dark",
    LIGHT = "light",
}

export interface ThemeAction {
    payload: any;
    type: ThemeTypes;
}

export interface ThemeContextProps {
    state: typeof darkStyles;
    dispatch: Dispatch<ThemeAction>;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeActions = (state: typeof darkStyles, action: ThemeAction) => {
    switch (action.type) {
        case ThemeTypes.DARK:
            return darkStyles;
        case ThemeTypes.LIGHT:
            return lightStyles;
        default:
            return lightStyles;
    }
}