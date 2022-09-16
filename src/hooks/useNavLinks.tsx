import React from "react";
import links from "../data/nav";

const useNavLinks = () => {
  const [navLinks, setNavLinks] = React.useState(links);
  React.useEffect(() => {
    setNavLinks(links);
  }, []);

  return { navLinks };
};

export default useNavLinks;
