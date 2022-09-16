import React from "react";
import {
  faChevronDown,
  faFeed,
  faLanguage,
  faLocationDot,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import moment from "moment";
import useNavLinks from "../hooks/useNavLinks";
import { Link } from "react-router-dom";

const Header = () => {
  const header1Ref = React.useRef<HTMLDivElement>(null);
  const header2Ref = React.useRef<HTMLDivElement>(null);
  const header3Ref = React.useRef<HTMLDivElement>(null);
  const [scrolledHeight, setScrolledHeight] = React.useState<number>(0);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const { navLinks: navItems } = useNavLinks();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrolledHeight(scrollTop);
      if (scrollTop >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  React.useEffect(() => {
    // if (isScrolled) {
    //   header1Ref.current?.classList.add("hidden");
    //   header2Ref.current?.classList.add("hidden");
    //   header3Ref.current?.classList.add("sticky");
    //   header3Ref.current?.classList.add("top-0");
    // } else {
    //   header1Ref.current?.classList.remove("hidden");
    //   header2Ref.current?.classList.remove("hidden");
    //   header3Ref.current?.classList.remove("sticky");
    //   header3Ref.current?.classList.remove("top-0");
    // }
  }, []);

  return (
    <>
      <div className={`flex flex-col gap-2 z-[1000]`} ref={header1Ref}>
        {/* First level navigation */}
        <div className={`flex bg-gray-700 text-[.85rem] py-2 w-full`}>
          <div
            className={
              "w-full max-w-7xl mx-auto flex justify-between items-center p-2 text-white"
            }
          >
            {/* Left */}
            <div className="flex items-center gap-2">
              <div className={"flex items-center gap-1 text-[12px]"}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Nairobi</span>
              </div>
              <div>Today ({moment().format("LLL")})</div>
            </div>
            {/* Right */}
            <div className={`flex items-center gap-1 text-[.85rem]`}>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUser} />
                <button>Login/Register</button>
              </div>
              <div className="flex gap-1 items-center border-r border-l px-2">
                <FontAwesomeIcon icon={faLanguage} />
                <select className="bg-opacity-0 bg-gray-600">
                  <option className="bg-gray-600" value="en">
                    English
                  </option>
                  <option className="bg-gray-600" value="fr">
                    French
                  </option>
                  <option className="bg-gray-600" value="es">
                    Spanish
                  </option>
                </select>
              </div>
              <div className="flex items-center px-2 gap-2 ">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faFeed} />
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
          </div>
        </div>
        {/* Second level navigation */}
        <div
          className={
            "flex max-w-7xl mx-auto justify-between items-center w-full py-2 bg-white"
          }
          // ref={header2Ref}
        >
          <div className={``}>
            <h2 className="text-4xl font-extrabold uppercase text-purple-600">
              loans.co.ke
            </h2>
          </div>
          <div className={`text-purple-600`}>
            <h2>Workout your financial stats</h2>
          </div>
        </div>
      </div>
      {/* Third level navigation */}
      <div
        className={`flex  bg-yellow-600   w-full z-[1010] h-16`}
        ref={header3Ref}
      >
        <div className="w-full max-w-7xl mx-auto  px-2 text-white top-0">
          <nav className="hidden w-full md:flex justify-between gap-2 items-center">
            <ul className="flex justify-center  gap-4 flex-1 py-2">
              {navItems.map((item, index) =>
                item.hasChildren ? (
                  <li key={index} className=" text-center py-2 group hover:border-b relative">
                    <button className="flex items-center justify-between gap-2">
                      <span className="">{item.name}</span>
                      <FontAwesomeIcon icon={faChevronDown} className="text-[.85rem]"/>
                    </button>
                    <ul className="hidden flex-col gap-4 justify-center absolute group-hover:flex border top-[calc(100%_+_2px)] bg-white min-w-[10rem] w-full z-10 rounded-sm">
                      {item.children!.map((child) => (
                        <li key={child.name} className="flex items-center px-2 py-2 text-purple-600 text-left hover:bg-orange-300">
                         <Link to={child.path} >{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.name} className="text-center py-2 hover:border-b">
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                )
              )}
            </ul>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
