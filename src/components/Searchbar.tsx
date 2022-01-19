import {BiSearchAlt2} from 'react-icons/bi'

interface IAppProps {
}

const Searchbar: React.FunctionComponent<IAppProps> = (props) => {
  return (
      <div className="w-4/5 mx-auto py-8 dark:bg-VeryDarkBlue">
          <div className="flex items-center ">
            <BiSearchAlt2 className="dark:text-White absolute left-12"/>
            <input className="dark:bg-DarkBlue dark:text-White bg-VeryLightGray text-LightVeryDarkBlue focus:outline-none w-full p-4 rounded-md pl-10" type="text" placeholder="Search for a country..." />
          </div>
      </div>
  )
};

export default Searchbar;
