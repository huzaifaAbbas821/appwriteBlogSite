import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="py-1 md:py-2 bg-[#DDD0C8] text-[#323232] min-w-screen z-10 transform"
      style={{ boxShadow: "0 -6px 10px 5px rgba(0, 0, 0, 0.4)" }}
    >
      <Container>
        <nav className="flex justify-between w-full min-w-screen px-[3vw] py-[0.8vw]">
          <div className="lg:w-[40%] md:w-[30%]">
            <Link to="/">
              <Logo width="70vw" />
            </Link>
          </div>
          <ul className="hidden md:flex justify-between lg:w-[40%] md:w-[50%] text-[#fff]">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block lg:text-[1.4vw] md:text-[1.6vw] ${
                      item.slug === "/login" || item.slug === "/signup"
                        ? "bg-[#323232] text-sm text-[#fff] font-normal md:inline-block px-2 py-1 mx-1 md:mx-0 md:px-[0.6vw] md:py-[0.2vw] lg:px-[0.8em] lg:py-[0.4vw] xl:py-[0.8vw]"
                        : "bg-[#DDD0C8] text-[#323232] hidden md:inline-block md:px-[0.8vw] md:py-[0.2vw] lg:px-[0.4em] lg:py-[0.4vw]"
                    } duration-200 rounded-md font-semibold`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </nav>
        {isOpen && (
          <div className="md:hidden w-full" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setIsOpen(false);
                      }}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
