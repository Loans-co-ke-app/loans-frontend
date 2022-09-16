import React from "react";
import links, { INavRoute } from "../data/nav";

const useNavLinks = () => {
  const [navLinks, setNavLinks] = React.useState<INavRoute[]>([]);
  React.useEffect(() => {
    setNavLinks(links.navLinks);
  }, []);

  return { navLinks };
};

export default useNavLinks;
