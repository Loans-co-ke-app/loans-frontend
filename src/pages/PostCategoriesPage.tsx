import React from "react";
import { useParams } from "react-router-dom";
import nav, { INavRoute } from "../data/nav";

const PostCategoriesPage = () => {
  const { category } = useParams();
  const [categories, setCategories] = React.useState<INavRoute[]>([]);
  React.useEffect(() => {
    const fetchCategories = async () => {
      nav.navLinks.map((item) => {
        if (item.children && item.name === category) {
          setCategories((prev) => [...prev, ...item.children!]);
        }
      });
    };
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        {categories.map((item) => {
          return <div key={item.name}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default PostCategoriesPage;
