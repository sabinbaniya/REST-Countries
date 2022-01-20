import { createContext } from "react";
import { CountriesInterface } from "../types/types";

const Theme= {
    dark: false,
    setDark: (dark: boolean) => {}
}

const SearchedCountry= {
    searchedCountry: {} as CountriesInterface[],
    setSearchedCountry: (searchedCountry: CountriesInterface[]) => {}
}

const FilteredCountry= {
    filteredCountry: {} as CountriesInterface[],
    setFilteredCountry: (filteredCountry: CountriesInterface[]) => {}
}

const Countries= {
    country: {} as CountriesInterface[] | undefined,
    setCountry: (country: CountriesInterface[]) => {}
}

export const ThemeContext = createContext(Theme)
export const CountryContext = createContext(Countries)
export const SearchedCountryContext = createContext(SearchedCountry)
export const FilteredCountryContext = createContext(FilteredCountry)