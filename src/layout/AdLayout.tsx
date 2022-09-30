import {
  faMessage,
  faPaperPlane,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../state/providers/PostsProvider";

interface IProps {
  children: JSX.Element;
}
const AdLayout = ({ children }: IProps) => {
  const {
    state: {
      postsState: { posts },
    },
  } = React.useContext(PostsContext);
  return (
    <div className="flex flex-col md:flex-row flex-wrap">
      <div className="flex-[8]">{children}</div>
      <div className="flex-[4]">
        <div>
          <img src="/img.webp" alt="" />
        </div>
        <div className="px-4 py-3 flex flex-col gap-2 border-purple-600 border rounded-md my-3">
          <h2>Subscribe to our newsletter</h2>
          <div className="flex items-center border border-purple-200 rounded-md p-1">
            <input type={'email'} placeholder="Email address" className="flex-1 text-lg py-2 px-2 border-none focus:ring-0 focus:border-none focus:outline-none" />
            <button className="bg-purple-600 text-white h-full py-2 px-6 rounded-md">
              <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
            </button>
          </div>
        </div>
        <h2 className="text-xl py-3 text-purple-600">You may also like....</h2>
        <div className="flex flex-col gap-4">
          {posts.length > 0 &&
            posts.slice(0, 5).map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="flex">
                <div>
                  <img
                    src={post.featured_image}
                    alt=""
                    className="h-32 w-32 rounded-md"
                  />
                </div>
                <div className="px-3 flex-1 h-32 flex justify-center flex-col items-stretch">
                  <h2 className="font-bold">{post.article_title}</h2>
                  <div className="flex items-center gap-3">
                    <img src="/img.webp" alt="" className="h-12 w-12 rounded-full object-cover"/>
                    <div className="flex flex-col">
                        <div className="font-bold">{post.authors.first_name} {post.authors.last_name}</div>
                        <span className="text-[12px] italic">{moment(post!.publish_date).format('LL')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdLayout;
