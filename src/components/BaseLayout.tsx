import React from "react";
import Header from "./Header";

const BaseLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="w-full">{children}</div>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default BaseLayout;
