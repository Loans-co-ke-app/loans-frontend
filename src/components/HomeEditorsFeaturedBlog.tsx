import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";

const HomeEditorsFeaturedBlog = ({
  author,
  image,
  index,
  title,
}: {
  index: number;
  image: string;
  title: string;
  author: any;
}) => {
  return (
    <li key={index} className="relative shadow-md h-48">
      <img
        src={image}
        alt=""
        className="w-full absolute h-full object-cover -z-[1]"
      />
      <div className="h-full w-full z-10 bg-slate-600 bg-opacity-20 p-2 flex flex-col justify-between text-white hover:bg-gradient-to-t hover:from-gray-400 hover:via-gray-400/25 hover:to-purple-gray-400/25 transition duration-500">
        {/* Actions */}
        <div className="w-full flex items-center justify-between">
          {/* left */}
          <div>
            <span className="bg-purple-500 text-white px-1 uppercase text-[.75rem]">
              transport
            </span>
          </div>
          {/* right */}
          <div className="text-red-500 bg-gray-200 h-fit px-1 rounded-md">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        {/* about post */}
        <div>
          <div className="text-[.75rem] flex gap-2">
            <span>By {author.username}</span><span>On {moment().format('LL')}</span>
          </div>
          <h3 className="text-2xl ">{title}</h3>
        </div>
      </div>
    </li>
  );
};

export default HomeEditorsFeaturedBlog;
