export interface CountriesInterface {
    name: {
        common: string
    },
    flags: {
      svg: string
    },
    population: number,
    region: string,
    capital: string,

}

export interface DetailsInterface {
    altSpellings: string[],
    flags: {
      svg: string,
    },
    borders: string[],
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    tld: string[],
    currencies: {},
    languages: {},
}