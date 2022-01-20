import { Countries } from "../types/types"

export const requestCountries = async (url: string) => {
    try{
        const data = await fetch(url)
        const res: Countries[] | undefined = await data.json()
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