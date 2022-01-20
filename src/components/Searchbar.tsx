import { ChangeEvent, useContext } from 'react';
import {BiSearchAlt2} from 'react-icons/bi'
import { SearchedCountryContext } from '../context/AppContext';
import { searchCountry } from '../helpers/RequestCountries';


const Searchbar: React.FunctionComponent= () => {

  const {setSearchedCountry} = useContext(SearchedCountryContext)

  let timer: any

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if(timer){
        clearTimeout(timer)
      }

      let value = e.target.value

      timer = setTimeout(async () => {
        let data = await searchCountry(value)
        setSearchedCountry(data)
      },2000)

  }

  return (
      <div className="mx-auto py-8 dark:bg-VeryDarkBlue w-full md:max-w-xs md:mx-0 lg:max-w-md">
          <div className="flex items-center relative drop-shadow">
            <BiSearchAlt2 className="dark:text-White absolute left-4"/>
            <input className="dark:bg-DarkBlue dark:text-White bg-White text-LightVeryDarkBlue focus:outline-none w-full p-4 rounded-md pl-10" type="text" placeholder="Search for a country..." onChange={handleChange}/>
          </div>
      </div>
  )
};

export default Searchbar;
