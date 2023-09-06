import { Link } from 'react-router-dom';
import { hamburger, eks } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { Button } from '../components';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={`${item.href}`}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <Link to="/login" className="font-semibold">
            <Button
              backgroundColor="bg-white"
              borderColor="border-royalblue-200"
              label="Login"
              textColor="text-royalblue-200"
            />
          </Link>
        </div>

        <div className="hidden max-lg:block">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <img src={eks} alt="eks" width={25} height={25} />
            ) : (
              <img src={hamburger} alt="Hamburger" width={25} height={25} />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="hidden max-lg:block w-full bg-white transition-transform transform shadow-xl py-3">
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="justify-center md:items-center">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={`${item.href}`}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <a
                href="/login"
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                Login
              </a>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
