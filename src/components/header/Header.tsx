import { Link } from "react-router-dom";
import DarkModeButton from "../common/button/DarkModeButton";
import Input from "../common/input/SALSearchInput";

const Header = () => {
  return (
    <header className="text-gray-600 body-font border-b-2 dark:bg-gray-800 dark:border-b-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center dark:text-gray-300">
        <nav className="flex lg:w-1/6 lg:justify-start flex-wrap items-center text-base lg:mr-auto md:ml-auto sm:my-2 xs:my-2 xs:justify-center">
          <Link
            to="/pokemonlist"
            className="mr-5 hover:text-gray-900 dark:hover:text-gray-50"
          >
            Pokemon List
          </Link>
        </nav>
        <a
          href="/"
          className="flex order-first lg:order-none lg:w-2/6 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-0 md:mb-0 dark:text-gray-300"
        >
          <span className="ml-3 text-xl">Home</span>
        </a>
        <Input />
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
