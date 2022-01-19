import {useState} from 'react';
import {IoIosArrowDown} from 'react-icons/io'

interface IAppProps {
}

const Filter: React.FunctionComponent<IAppProps> = (props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <div className="dark:bg-VeryDarkBlue dark:text-White bg-White drop-shadow text-LightVeryDarkBlue mx-auto w-11/12">
        <div>

        </div>
        <div className="dark:bg-DarkBlue bg-white flex justify-between p-4 cursor-pointer rounded-md items-center" onClick={() => setIsOpen(prevState => !prevState)}>
          <p>Filter by Region</p>
          <IoIosArrowDown />
        </div>
        <div className={`dark:bg-DarkBlue bg-white flex justify-between flex-col cursor-pointer rounded-md items-center mb-2 transition-all ${isOpen ? 'h-80  p-4  mt-4 ' : 'h-0'}`}>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`}>Africa</div>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`}>America</div>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`}>Asia</div>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`}>Europe</div>
            <div className={`${isOpen ? 'block' : 'hidden'} dark:hover:bg-VeryDarkBlue hover:bg-VeryLightGray w-full text-center p-2 rounded-md`}>Oceania</div>
        </div>
          
      </div>
  )
};

export default Filter;
