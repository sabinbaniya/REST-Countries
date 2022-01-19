import * as React from 'react';
import {BsMoonFill, BsMoon} from 'react-icons/bs'

interface IAppProps {
}

const Navbar: React.FunctionComponent<IAppProps> = (props) => {
  return (
      <nav className="flex justify-between items-center py-8 px-4 dark:shadow-DarkBlue dark:bg-DarkBlue dark:text-White bg-VeryLightGray text-LightVeryDarkBlue">
          <h1 className="font-semibold text-sm tracking-wider">Where in the world?</h1>
          <div className="flex justify-between items-center cursor-pointer space-x-3" onClick={() => document.body.classList.toggle('dark')}>
              {document.body.classList.contains('dark') ? <BsMoonFill /> : <BsMoon />}
              <p className="text-sm font-light">Dark Mode</p>
          </div>
      </nav>
  )
};

export default Navbar;
