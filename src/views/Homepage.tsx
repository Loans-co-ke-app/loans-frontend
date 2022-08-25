import HomeFeaturedPost from "../components/HomeFeaturedPost";
import HomeNews from "../components/HomeNews";
import posts from "../data/blogs.json";

const Homepage = () => {
  return (
    <div>
      <HomeFeaturedPost posts={posts} />
      <HomeNews />
    </div>
  );
};

export default Homepage;
