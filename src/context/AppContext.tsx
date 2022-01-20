import { createContext } from "react";
import { Countries } from "../types/types";

const Theme= {
    dark: false,
    setDark: (dark: boolean) => {}
}

const SearchedCountry= {
    searchedCountry: {} as Countries[],
    setSearchedCountry: (searchedCountry: Countries[]) => {}
}

export const ThemeContext = createContext(Theme)
export const SearchedCountryContext = createContext(SearchedCountry)