import { createContext } from "react";

const Theme= {
    dark: false,
    setDark: (dark: boolean) => {}
}

export const ThemeContext = createContext(Theme)