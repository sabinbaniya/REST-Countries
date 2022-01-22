import {FC, useState, useContext} from 'react';
import Card from './Card';
import Filter from './Filter';
import Navbar from './Navbar'
import Searchbar from './Searchbar';
import Loader from '../helpers/Loader';
import { CountryContext, FilteredCountryContext, LoadingContext, ThemeContext } from '../context/AppContext';

type Props = {};

const Home: FC = (props: Props) => {
    
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {isLoading} = useContext(LoadingContext)
  const {dark} = useContext(ThemeContext)
  const {filteredCountry} = useContext(FilteredCountryContext)
  const {country} = useContext(CountryContext)

  const handleClick = () => {
    if(isOpen){
        setIsOpen(!isOpen)
    }
  }  
  return( 
  <>
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
                          return (
                            <Card flag={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
                          )
                        })
                      }{ //filtered countries
                        Object.keys(filteredCountry).length > 0 && 
                        filteredCountry.map(country => {
                          return (
                            <Card flag={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
                          )
                        })
                      }
                      </div>
                    </div>
                </div>

  </>);
};

export default Home;
