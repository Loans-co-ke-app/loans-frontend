import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const BaseLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="w-full px-2">{children}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default BaseLayout;
