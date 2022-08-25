import {
  faArrowLeft,
  faArrowRight,
  faEnvelopeOpen,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import posts from "../data/blogs.json";
import React from "react";
import moment from "moment";

const HomeNews = () => {
  return (
    <div className="grid md:grid-cols-[2fr_1fr] mt-4">
      {/* Left 1 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
            <hr className="h-1 bg-purple-600 my-4"/>
          <div className="flex items-center justify-between">
            <h1 className="text-purple-600 font-bold uppercase">Central kenya</h1>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowLeft} />
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div>
            <hr className="h-1 bg-purple-600 my-4"/>
          <div className="flex items-center justify-between">
            <h1 className="text-purple-600 font-bold uppercase">National treasury</h1>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" />
              <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Ad 1 */}
        <div className="w-80 h-64 mx-auto relative">
          <img
            src={"/transport.webp"}
            alt=""
            className="absolute w-full h-full -z-[1] object-cover"
          />
          <div className="w-full h-full z-10 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white">Advert</h1>
          </div>
        </div>
        <hr className="h-2 my-3 bg-purple-600" />
        {/* News letter */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-purple-600 font-bold">Get newsletter</h1>{" "}
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </div>
          <div className="bg-gray-300 p-4 bg-opacity-30">
            <p>
              Subscribe to our newsletter to get the latest news and updates
            </p>
            <div className="flex items-center justify-between py-4">
              <input
                type="text"
                className="w-full px-2 py-1 rounded-md text-gray-700 focus:ring-0 focus:border-none"
                placeholder="Enter your email"
              />
              <button className="bg-purple-600 text-white px-2 py-1 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="h-2 my-3 mt-5 bg-purple-600" />
        {/* Featured news */}
        <div>
          <div className="flex items-center justify-between">
            <h1>Featured news</h1>{" "}
            <FontAwesomeIcon icon={faNewspaper} size="1x" />
          </div>
          <ul className="flex flex-col gap-5 py-1">
            {posts.slice(0, 3).map((item, index) => (
              <li className="flex items-center gap-3">
                <div className="h-24 w-24 relative">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover absolute"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center text-[.85rem] gap-3">
                    <span>{item.author.username}</span>
                    <span>{moment().format("LL")}</span>
                  </div>
                  <div>
                    <h2 className="text-purple-600 font-bold">{item.title}</h2>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
