import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HomeSectorSection from "../components/HomeSectorSection";
import { LoaderComponent } from "react-fullscreen-loader";
import { PostsContext } from "../state/providers/PostsProvider";
import { FeaturedPostContext } from "../state/providers/FeaturedPostprovider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Homepage = () => {
  document.title = "Homepage";
  const {
    state: {
      postsState: { loading, posts },
    },
  } = React.useContext(PostsContext);
  const {
    state: {
      postsState: { post },
    },
  } = React.useContext(FeaturedPostContext);

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      {/* Header  featured post*/}
      <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 py-4 border-b">
        <div className="flex flex-col gap-4">
          <p className="text-center text-purple-600">Civilization</p>
          <div>
            <h2 className="text-lg font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              tempore! Consectetur natus voluptatibus consequatur doloribus
              quaerat!
            </p>
          </div>
          <div className="border-l border-gray-400 pl-2 flex flex-col gap-3">
            <p className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
              deleniti.
            </p>
            <div>
              <p className="font-medium">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-purple-600 mr-3"
                />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/img.webp"
                  alt=""
                  className="h-12 w-12 border-gray-300 border-2 rounded-full object-cover"
                />
                <span>Jane Doe</span>
              </div>
            </div>
          </div>
        </div>
        <Link to={`/blog/${post.slug}`} className="w-full ">
          <div className="relative">
            <img
              src={post.featured_image}
              alt=""
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="text-center p-4">
            <p className="text-center text-purple-700">
              {post.article_company}
            </p>
            <h1 className="text-2xl font-bold">
              <span className="font-bold text-3xl">The big read.</span>{" "}
              {post.article_title}
            </h1>
            {/* <div className='text-[14px]'>
              <HtmlDecoder html={post.article_body.slice(0, 210)} />
            </div> */}
          </div>
        </Link>
        <div>
          <p>Editor's pick</p>
          <div className="w-full">
            <div className="relative">
              <img
                src="/img.webp"
                alt=""
                className="w-full h-60 object-cover"
              />
            </div>
            <p className="text-lg font-medium">
              <FontAwesomeIcon icon={faQuoteLeft} />{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </span>
            </p>
          </div>
        </div>
        <LoaderComponent loading={loading} />
      </div>
      {/* Top news */}
      <HomeSectorSection
        loading={loading}
        posts={posts.slice(0, 4)}
        title="Agriculture"
      />
      {/* Spotlight */}
      <HomeSectorSection
        loading={loading}
        posts={posts.slice(4, 8)}
        title="Spotlight"
      />
      {/* Opinion */}
      <HomeSectorSection
        loading={loading}
        posts={posts.slice(8, 12)}
        title="Opinion"
      />
      {/* Life and arts */}
      <HomeSectorSection
        loading={loading}
        posts={posts.slice(12, 16)}
        title="Life and arts"
      />
      {/* Markets news */}
      <HomeSectorSection
        loading={loading}
        posts={posts.slice(16, 20)}
        title="Markets news"
      />
      {/* Technology */}
      {/* <HomeSectorSection posts={posts} title='Technology' /> */}
    </motion.div>
  );
};

export default Homepage;
