import React from "react";
import { axiosQuery } from "../api/api";
import HomeFeaturedPost from "../components/HomeFeaturedPost";
import HomeNews from "../components/HomeNews";
import posts from "../data/blogs.json";

const Homepage = () => {
  const [posts, setPosts] = React.useState<any[]>([])

  
  const fetchPosts = async () => {
    const response = await axiosQuery.get('')
    setPosts(response.data)
    console.log(response.data);
  }
  React.useEffect(() => {
    fetchPosts()
  } , [])
  return (
    <div>
      <HomeFeaturedPost posts={posts!} />
      <HomeNews  posts={posts}/>
    </div>
  );
};

export default Homepage;
