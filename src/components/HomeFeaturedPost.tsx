import { faHouse, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import HomeEditorsFeaturedBlog from "./HomeEditorsFeaturedBlog";

type PropsTypes = {
  title: string;
  image: string;
  body: string;
  author: any
};
const HomeFeaturedPost = ({ posts }: { posts: PropsTypes[] }) => {
  return (
    <div>
      {/* Bread crumb */}
      <div className="w-full">
        <div className="flex items-center gap-2 text-[.85rem] text-gray-600">
          <FontAwesomeIcon icon={faHouse} />
          <div>
            Home/ <span className="text-purple-600">World news</span>
          </div>
        </div>
      </div>
      {/* End of bread crumb */}
      <div>
        <img src="" alt="" />
      </div>
      {/* Landing */}
      <div className="flex flex-col md:flex-row gap-2 p-2">
        {/* left section */}
        <ul className="w-full md:w-3/12 flex flex-col gap-2 relative">
          {posts.slice(0, 2).map((item, index) => {
            return <HomeEditorsFeaturedBlog index={index} {...item} />;
          })}
        </ul>
        {/* end of left section */}
        {/*  Featured image*/}
        <div className="relative w-full md:w-6/12 h-[24.5rem]">
          <img
            src={posts[3].image}
            alt=""
            className="absolute h-full w-full object-cover -z-[1]"
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
              <div className="text-gray-500 bg-gray-200 h-fit px-1 rounded-md">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            {/* about post */}
            <div>
              <div className="flex gap-2">
                <span>By {posts[3].author.username}</span>
                <span>On {moment().format("LL")}</span>
              </div>
              <h3 className="text-4xl ">{posts[3].title}</h3>
            </div>
          </div>
        </div>
        {/* right section */}

        <ul className="w-full md:w-3/12 flex flex-col gap-2 relative items-center h-full">
          {posts
            .slice(posts.length - 3, posts.length - 1)
            .map((item, index) => {
              return <HomeEditorsFeaturedBlog index={index} {...item} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default HomeFeaturedPost;
