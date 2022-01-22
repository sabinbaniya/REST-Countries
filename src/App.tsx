import { useState, useEffect} from 'react';
import './App.css';
import { CountryContext, ThemeContext, SearchedCountryContext, FilteredCountryContext, LoadingContext } from './context/AppContext';
import { requestCountries } from './helpers/RequestCountries';
import { CountriesInterface } from './types/types';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './components/Detail';

function App() {

  const [dark, setDark] = useState<boolean>(false)
  const [country, setCountry] = useState<CountriesInterface[] | undefined>(undefined)
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
      setFilteredCountry({} as CountriesInterface[])
      setCountry(searchedCountry)
      setIsLoading(false)
    }

  }, [searchedCountry])

  

  return (
    <Router>
      <CountryContext.Provider value={{country, setCountry}}>
          <ThemeContext.Provider value={{dark, setDark}}>
            <SearchedCountryContext.Provider value={{searchedCountry, setSearchedCountry}}>
              <FilteredCountryContext.Provider value={{filteredCountry, setFilteredCountry}}>
                <LoadingContext.Provider value={{isLoading, setIsLoading}}>
                  <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/name/:country" element={<Detail />}/>
                  </Routes>
                </LoadingContext.Provider>
              </FilteredCountryContext.Provider>
              </SearchedCountryContext.Provider>
          </ThemeContext.Provider>
      </CountryContext.Provider>
    </Router> 
  )
}

export default App;
