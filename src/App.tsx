import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar';
import { ThemeContext } from './context/ThemeContext';
import {requestCountries} from './components/RequestCountries'
import { Countries } from './types/types';

function App() {

  const [dark, setDark] = useState<boolean>(true)
  const [data, setData] = useState<Countries[] | undefined >(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const req = async() => {
    const res: Countries[] | undefined= await requestCountries('https://restcountries.com/v3.1/all')
    setData(res)
    setIsLoading(false)
  }
  
  useEffect(() => {
    req();

  }, [])

  if(isLoading){
    return <h1>Loading</h1>
  }

  return (
    <ThemeContext.Provider value={{dark, setDark}}>
      <div className="dark:bg-VeryDarkBlue bg-VeryLightGray">
          <Navbar />
          <Searchbar />
          <Filter />
          <div className="w-11/12 mx-auto pt-4">
            {
              data &&
              data.map(country => {
                return <Card flag={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital}/>
              })
            }
            
          </div>
      </div>
    </ ThemeContext.Provider>
  );
}

export default App;
