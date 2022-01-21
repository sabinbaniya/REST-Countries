import { useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar';
import Loader from './helpers/Loader';
import { CountryContext, ThemeContext, SearchedCountryContext, FilteredCountryContext, LoadingContext } from './context/AppContext';
import { requestCountries } from './helpers/RequestCountries';
import { CountriesInterface } from './types/types';


function App() {

  const [dark, setDark] = useState<boolean>(true)
  const [country, setCountry] = useState<CountriesInterface[] | undefined>(undefined)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchedCountry, setSearchedCountry] = useState({} as CountriesInterface[])
  const [filteredCountry, setFilteredCountry] = useState({} as CountriesInterface[])

  const req = async() => {
    const res: CountriesInterface[] | undefined = await requestCountries('https://restcountries.com/v3.1/all')
    setCountry(res)
    setIsLoading(false)
  }
  
  useEffect(() => {
    req();

  }, [])

  useEffect(() => {
    if(Object.keys(searchedCountry).length > 0){
      console.log(searchedCountry);
      setFilteredCountry({} as CountriesInterface[])
      setCountry(searchedCountry)
      setIsLoading(false)
    }

  }, [searchedCountry])

  const handleClick = () => {
    if(isOpen){
      setIsOpen(!isOpen)
    }
  }

  return (
    <CountryContext.Provider value={{country, setCountry}}>
        <ThemeContext.Provider value={{dark, setDark}}>
          <SearchedCountryContext.Provider value={{searchedCountry, setSearchedCountry}}>
            <FilteredCountryContext.Provider value={{filteredCountry, setFilteredCountry}}>
              <LoadingContext.Provider value={{isLoading, setIsLoading}}>
                <div className="dark:bg-VeryDarkBlue bg-VeryLightGray relative z-30 top-0 left-0 min-h-screen">
                <div className={`w-screen bg-black absolute z-30 top-0 left-0 h-screen ${isOpen ? 'block' : 'hidden'}`} onClick={handleClick}>

                </div>
                    <Navbar />
                    <div className="md:flex w-11/12 mx-auto justify-between items-center md:space-x-4">
                      <Searchbar />
                      <Filter isOpen={isOpen} setIsOpen={setIsOpen}/>
                    </div>
                    <div>
                      <div className="w-11/12 mx-auto pt-4 pb-8 md:flex md:flex-wrap">
                      { // loader
                        isLoading &&
                        <div className="grid md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-1 mx-auto ">
                          <Loader bgColor={dark ? '#2b3945' : '#e6e6e6'} foregroundColor={dark ? '#3b4d5e' : '#ffffff'} />
                          <Loader bgColor={dark ? '#2b3945' : '#e6e6e6'} foregroundColor={dark ? '#3b4d5e' : '#ffffff'} />
                          <Loader bgColor={dark ? '#2b3945' : '#e6e6e6'} foregroundColor={dark ? '#3b4d5e' : '#ffffff'} />
                          <Loader bgColor={dark ? '#2b3945' : '#e6e6e6'} foregroundColor={dark ? '#3b4d5e' : '#ffffff'} />
                        </div>

                      }
                      { // countries
                        country && Object.keys(filteredCountry).length === 0 && 
                        country.map(country => {
                          return <Card flag={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
                        })
                      }{ //filtered countries
                        Object.keys(filteredCountry).length > 0 && 
                        filteredCountry.map(country => {
                          return <Card flag={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
                        })
                      }
                      </div>
                    </div>
                </div>
              </LoadingContext.Provider>
            </FilteredCountryContext.Provider>
            </SearchedCountryContext.Provider>
        </ ThemeContext.Provider>
    </ CountryContext.Provider>
  )
}

export default App;
