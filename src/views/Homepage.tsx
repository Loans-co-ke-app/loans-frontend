import React from "react";
import HomeFeaturedPost from "../components/HomeFeaturedPost";
import HomeNews from "../components/HomeNews";
import posts from "../data/blogs.json";
import publicAxios from "../utils/requests";

const Homepage = () => {
  const [posts, setPosts] = React.useState<any[]>([])

  
  const fetchPosts = async () => {
    const response = await publicAxios.get('')
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
