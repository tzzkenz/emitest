import { useState } from "react";
import logo from "../../assets/logo-blue.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" flex flex-col md:flex-row mx-4 md:mx-32 py-4 md:py-10 justify-between bg-white">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="h-8 md:h-auto" />
          <div className="text-lg font-semibold px-4">Emigrate</div>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`flex flex-col md:flex-row justify-center items-center ${
          isMenuOpen ? "block" : "hidden md:flex"
        } mt-4 md:mt-0`}
      >
        <button className="w-full md:w-auto px-8 py-3 mb-2 md:mb-0 md:mr-2 rounded-md font-semibold bg-white text-emigrate-blue">
          Sign In
        </button>
        <button className="w-full md:w-auto px-8 py-3 rounded-md font-semibold bg-emigrate-blue text-white">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
