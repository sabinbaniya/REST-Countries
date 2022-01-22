import { CountriesInterface } from "../types/types"

export const requestCountries = async (url: string) => {
    try{
        const data = await fetch(url)
        const res: CountriesInterface[] | undefined = await data.json()
        return res
    }catch(e){
        console.log(e)
    }
}

export const searchCountry = async (query: string) => {
    try {
        let url
        if(query === ''){
            url = 'https://restcountries.com/v3.1/all'
        }else{
            url = `https://restcountries.com/v3.1/name/${query}`
        }

        let res = await fetch(url);
        let data = await res.json();
        return data

    } catch (error) {
        console.log(error);
    }
}

export const detailCountry = async (country: string | undefined) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        const data = await res.json()

        return data

    }catch(e){
        console.log(e);
    }
}