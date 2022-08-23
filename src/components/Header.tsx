import React from "react";
import {
  faBars,
  faFeed,
  faLanguage,
  faLocation,
  faLocationDot,
  faLocationPin,
  faMapLocationDot,
  faPhone,
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

const Header = () => {
  const header1Ref = React.useRef<HTMLDivElement>(null);
  const header2Ref = React.useRef<HTMLDivElement>(null);
  const header3Ref = React.useRef<HTMLDivElement>(null);
  const [scrolledHeight, setScrolledHeight] = React.useState<number>(0);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrolledHeight(scrollTop);
      if (scrollTop > 0) {
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
    if (isScrolled) {
      header1Ref.current?.classList.add("hidden");
      header2Ref.current?.classList.add("hidden");
      header3Ref.current?.classList.add("sticky top-0");
    } else {
      header1Ref.current?.classList.remove("hidden");
      header2Ref.current?.classList.remove("hidden");
      header3Ref.current?.classList.remove("sticky");
    }
  }, [isScrolled]);
  console.log(scrolledHeight);

  return (
    <div className={`flex flex-col gap-2`}>
      {/* First level navigation */}
      <div className={`flex bg-gray-700 text-[.85rem] py-2`} ref={header1Ref}>
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
            <div>Today ({moment().format('LLL')})</div>
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
      <div className={"flex max-w-7xl mx-auto"} ref={header2Ref}>
        <div className={``}>
          <h2>loans.co.ke</h2>
        </div>
        <div className={``}></div>
      </div>
      {/* Third level navigation */}
      <div className={`flex max-w-7xl mx-auto`} ref={header3Ref}>
        <div className={``}>
          <h1>Header 3</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
