import {IoIosArrowDown} from 'react-icons/io'
import { Dispatch, SetStateAction, useContext } from 'react'
import { CountryContext, FilteredCountryContext } from '../context/AppContext';

interface FilterProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Filter: React.FunctionComponent<FilterProps> = ({isOpen, setIsOpen}) => {

  const {setFilteredCountry} = useContext(FilteredCountryContext)
  const {country} = useContext(CountryContext)
 
  const handleFilter = (region: string) => {

    console.log(region)
    let newData;
    if(region !== ''){
      if(country){
        newData = country?.filter(item => (item.region).toLowerCase() === region)
        setFilteredCountry(newData)
      }
    }

    setIsOpen(!isOpen)
  }


  return (
      <div className="dark:bg-VeryDarkBlue dark:text-White bg-White drop-shadow relative z-50 text-LightVeryDarkBlue rounded-md mx-auto w-full md:max-w-xs lg:max-w-sm ">
        <div className="dark:bg-DarkBlue bg-white flex justify-between p-4 cursor-pointer rounded-md items-center" onClick={() => setIsOpen(!isOpen)}>
          <p>Filter by Region</p>
          <IoIosArrowDown />
        </div>
        <div className={`dark:bg-DarkBlue bg-White flex justify-between absolute z-50 w-full flex-col cursor-pointer rounded-md items-center mb-2 transition-all ${isOpen ? 'h-80  p-4  mt-4 ' : 'h-0'}`}>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`} onClick={() => handleFilter('africa')}>Africa</div>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`} onClick={() => handleFilter('americas')}>America</div>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`} onClick={() => handleFilter('asia')}>Asia</div>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`} onClick={() => handleFilter('europe')}>Europe</div>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`} onClick={() => handleFilter('oceania')}>Oceania</div>
        </div>
          
      </div>
  )
};

export default Filter;
