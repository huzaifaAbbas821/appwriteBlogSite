import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
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

  return (
    <header className="py-3  bg-[#DDD0C8] text-[#323232] min-w-screen z-10      "

    >
      <Container>
        <nav className="flex justify-between w-[100%] min-w-screen px-[3vw]   py-[0.8vw]      transform 
        -translate-y-3 "
         style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.5)' }}
         >
          <div className=" w-[40%] ">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex justify-between w-[40%]  text-[#fff]">
            {navItems.map((item, index) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-bock text-[1.4vw]   ${
                      index > 1
                        ? "bg-[#323232] text-[#fff] px-[0.8em] py-[0.1em]"
                        : "bg-[#DDD0C8] text-[#323232] px-[0.4em] py-[0.2em]"
                    } duration-200 rounded-md font-semibold `}
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
        </nav>
      </Container>
    </header>
  );
}

export default Header;
