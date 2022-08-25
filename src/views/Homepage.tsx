import { faBookMark, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import EditoFeaturedSideBlogs from "../components/HomeEditorsFeaturedBlog";
import HomeFeaturedPost from "../components/HomeFeaturedPost";
import HomeNews from "../components/HomeNews";
import posts from "../data/blogs.json";

const Homepage = () => {
  return (
    <div>
     
      <HomeFeaturedPost posts={posts}/>
      <HomeNews/>
    </div>
  );
};

export default Homepage;
