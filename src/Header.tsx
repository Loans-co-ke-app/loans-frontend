import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Companies",
    href: "/Companies",
  },
  {
    name: "Technology",
    href: "/Technology",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  //   Scrolled for some amount
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  //   make the sidebar closes when you click on the screen
  const handleWindowClickCloseSidebar = (event: any) => {
    if (isOpen && sidebarRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  //   Close sidebar on esc key
  const handleKeyDownCloseSidebar = (event: any) => {
    console.log("`event.key`", event.key);

    if (isOpen && event.key === "Escape") {
      setIsOpen(false);
    }
  };
  window.addEventListener("keydown", handleKeyDownCloseSidebar);
  window.addEventListener("click", handleWindowClickCloseSidebar);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative py-4 px-10 shadow-lg max-w-[1940px] mx-auto">
      {/* Header sidebar */}
      <div
        ref={sidebarRef}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={`absolute left-0 top-0 w-60 bg-orange-200 h-[100vh] z-[1000] p-2 ${
          isOpen ? "left-0" : "left-[-100%]"
        } transition-[left] duration-500 ease-in-out`}
      >
        <div className="flex items-center justify-between py-2">
          <h1 className="font-bold text-lg">Loans.co.ke</h1>
          <div className="flex items-center justify-center">
            <button
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
        <hr className="bg-slate-200 w-full" />
      </div>
      {/* Header nav */}
      <div className="flex flex-col">
        {/* Top bar before scroll */}
        <div
          className={`${
            isScrolled ? "hidden" : "block"
          } px-8 h-12 flex justify-between items-center`}
        >
          <div className="flex items-center justify-between w-full flex-col">
            <div className="flex justify-between items-center w-full">
              {/* left bar */}

              <div className="flex items-center gap-3">
                <button
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(true);
                  }}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              {/* middle */}
              <div className="flex items-center justify-center flex-col">
                <h2 className="text-4xl font-bold">Loans.co.ke </h2>
                <hr />
                {/* Lower navbar */}
                <ul className="flex gap-3">
                  {links.map((item, index) => (
                    <li key={index}>
                      <a href="/">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* right bar */}
              <div className="flex gap-2 items-center">
                <a
                  href="/login"
                  className="bg-orange-300 text-black px-4 py-2 rounded-lg"
                >
                  Subscribe
                </a>
                <a href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar after scroll */}
        <div
          className={`${
            isScrolled ? "block" : "hidden"
          } px-8 h-12 flex justify-between items-center sticky top-0
          `}
        >
          {/* left bar */}
          <div className="flex items-center gap-3">
            <button
              className=""
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          {/* middle */}
          <ul className="flex gap-3">
            {links.map((item, index) => (
              <li key={index}>
                <a href="/">{item.name}</a>
              </li>
            ))}
          </ul>
          {/* right bar */}
          <div className="flex gap-2 items-center">
            <a
              href="/login"
              className="bg-orange-300 text-black px-4 py-2 rounded-lg"
            >
              Subscribe
            </a>
            <a href="/login">Login</a>
          </div>
        </div>
        <div className={`${isScrolled ? "block" : "hidden"}`}>
          {/* left */}
          {/* middle */}
          {/* right */}
        </div>
      </div>
    </div>
  );
};

export default Header;
