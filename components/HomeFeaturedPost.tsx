import { faHouse, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { axiosQuery } from "services/api";
import { IPostEntity } from "@ui-interfaces/Post";
import { samplePost } from "@ui-utils/postSample";
import HomeEditorsFeaturedBlog from "./HomeEditorsFeaturedBlog";


const HomeFeaturedPost = ({ posts }: { posts: IPostEntity[] }) => {
  const [featuredArticle, setFeaturedArticle] = React.useState<IPostEntity>(samplePost);
  const fetchFeaturedPost = async () => {
    const response = await axiosQuery.get('/article_featured/')
    setFeaturedArticle(response.data[0])

  }
  const navigate = useNavigate()
  const navigateUrl = (url: string) => {
    navigate(url)
  }
  React.useEffect(() => {
    fetchFeaturedPost()
  }, [])

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
          {posts!.slice(0, 2).map((item, index) => {
            return <HomeEditorsFeaturedBlog {...item} key={index} />;
          })}
        </ul>
        {/* end of left section */}
        {/*  Featured image*/}
        <Link to={`post/${featuredArticle.slug}`} className="relative w-full md:w-6/12 h-[24.5rem]">
          <img
            src={featuredArticle?.featured_image}
            alt=""
            className="absolute h-full w-full object-cover -z-[1]"
          />
          <div className="h-full w-full z-10 bg-slate-600 bg-opacity-20 p-2 flex flex-col justify-between text-white hover:bg-gradient-to-t hover:from-gray-400 hover:via-gray-400/25 hover:to-purple-gray-400/25 transition duration-500">
            {/* Actions */}
            <div className="w-full flex items-center justify-between">
              {/* left */}
              <div>
                {featuredArticle.tags?.split(",").map((tag) => (
                  <span className="bg-purple-500 text-white px-1 uppercase text-[.75rem]">
                    {tag}
                  </span>
                ))}
              </div>
              {/* right */}
              <div className="text-gray-500 bg-gray-200 h-fit px-1 rounded-md">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
            </div>
            {/* about post */}
            <div>
              <div className="flex gap-2">
                <span>By {featuredArticle!.authors?.first_name}</span>
                <span>On {moment(featuredArticle.publish_date).format("LL")}</span>
              </div>
              <h3 className="text-4xl ">{featuredArticle!.article_title}</h3>
            </div>
          </div>
        </Link>
        {/* right section */}

        <ul className="w-full md:w-3/12 flex flex-col gap-2 relative items-center h-full">
          {posts!
            .slice(posts.length - 3, posts.length - 1)
            .map((item, index) => {
              return <HomeEditorsFeaturedBlog  {...item} key={index} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default HomeFeaturedPost;