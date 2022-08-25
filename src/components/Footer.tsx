import {
  faAdversal,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faChevronCircleRight,
  faChevronRight,
  faCopyright,
  faEnvelope,
  faGraduationCap,
  faInfo,
  faLink,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 py-8 ">
      <footer className="max-w-7xl mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white gap-4">
        {/* col 1 */}
        <div>
          <hr className="h-3" />
          <div className="flex items-center justify-between px-2">
            <h1 className="font-bold text-lg">About us</h1>
            <FontAwesomeIcon icon={faInfo} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            obcaecati laudantium maxime deserunt, earum quos aut possimus
            facilis at totam.
            <br />
            <Link
              to={"/"}
              className="text-blue-400 flex items-center gap-2 p-1 hover:text-red-500 transition duration-300 ease-in text-[.8rem]"
            >
              Read more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </p>
          <ul className="border-t py-2">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationArrow} />{" "}
              <span>Nairobi kenya, </span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>loans@loans.co.ke</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>+020 9000-1223</span>
            </li>
            <li></li>
          </ul>
        </div>
        {/* col 2 */}
        <div>
          <hr className="h-3" />
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Useful info links</h1>
            <FontAwesomeIcon icon={faLink} />
          </div>
          <div>
            <ul className="py-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Loan categories</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Loan Calculator</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Loan blogs</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>FAQs</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Privacy policy</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Terms and conditions</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Social links</span>
              </li>
            </ul>
          </div>
        </div>
        {/* col 3 */}
        <div>
          <hr className="h-3" />
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Advertisements</h1>
            <FontAwesomeIcon icon={faAdversal} />
          </div>
          <div>
            <ul className="py-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Loan categories</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Loan Calculator</span>
              </li>
            </ul>
          </div>
        </div>
        {/* col 4 */}
        <div>
          <hr className="h-3" />
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Career</h1>
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div>
            <ul className="py-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Loan categories</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>Software developers</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                <span>See recent postings</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-purple-700 py-6 text-white">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <div className="flex justify-between items-center flex-1">
            <div>
              <FontAwesomeIcon icon={faCopyright} />{" "}
              <span>
                {moment().year()} <strong>loans.co.ke</strong> All rights
                reserved
              </span>
            </div>
            <div>
              <ul className="flex items-center gap-2">
                <li className="flex items-center gap-2">
                  <span>Home</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Help</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>FAQs</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
