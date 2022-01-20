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