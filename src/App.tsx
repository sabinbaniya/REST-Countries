import { useState, useEffect, useContext } from 'react';
import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar';
import { ThemeContext } from './context/AppContext';
import {requestCountries} from './components/RequestCountries'
import { Countries } from './types/types';

function App() {

  const [dark, setDark] = useState<boolean>(true)
  const [country, setCountry] = useState<Countries[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const req = async() => {
    const res: Countries[] | undefined = await requestCountries('https://restcountries.com/v3.1/all')
    setCountry(res)
    setIsLoading(false)
  }
  
  useEffect(() => {
    req();

  }, [])

  const handleClick = () => {
    console.log('handle click');
    if(isOpen){
      setIsOpen(!isOpen)
    }
  }

  if(isLoading){
    return <h1>Loading</h1>
  }

  return (
    <ThemeContext.Provider value={{dark, setDark}}>
        <div className="dark:bg-VeryDarkBlue bg-VeryLightGray relative z-30 top-0 left-0">
        <div className={`w-screen bg-black absolute z-30 top-0 left-0 h-screen ${isOpen ? 'block' : 'hidden'}`} onClick={handleClick}>

        </div>
            <Navbar />
            <div className="md:flex w-11/12 mx-auto justify-between items-center md:space-x-4">
              <Searchbar />
              <Filter isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div>
              <div className="w-11/12 mx-auto pt-4 md:flex md:flex-wrap">
              {
                country &&
                country.map(country => {
                  return <Card flag={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
                })
              }
              </div>
            </div>
        </div>
    </ ThemeContext.Provider>
  );
}

export default App;
