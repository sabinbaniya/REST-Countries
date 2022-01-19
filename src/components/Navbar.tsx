import React, {useContext} from 'react';
import {BsMoonFill, BsMoon} from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeContext';

interface IAppProps {
}

const Navbar: React.FunctionComponent<IAppProps> = (props) => {

  const {dark, setDark} = useContext(ThemeContext)

  return (
      <nav className="py-6 drop-shadow dark:bg-DarkBlue dark:text-White bg-White text-LightVeryDarkBlue">
          <div className="flex justify-between items-center mx-auto w-11/12">
            <h1 className="font-semibold text-sm tracking-wider">Where in the world?</h1>
            <div className="flex justify-between items-center cursor-pointer space-x-3" onClick={() =>{ document.body.classList.toggle('dark'); setDark(!dark)}}>
                {dark ? <BsMoonFill /> : <BsMoon />}
                <p className="text-sm font-light">Dark Mode</p>
            </div>
          </div>
      </nav>
  )
};

export default Navbar;
