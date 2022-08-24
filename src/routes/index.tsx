import { HashRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Homepage from "../views/Homepage";

interface IPages {
  [key: string]: {
    name: string;
    path: string;
    component: JSX.Element;
    options?: any;
    hasChildren?: boolean;
  };
}
const AppRoutes: IPages = {
  home: {
    name: "Home",
    path: "/",
    component: BaseLayout({ children: <Homepage /> }),
    options: {},
    hasChildren: false,
  },
};

export default function AppRouter() {
  return (
    <>
      <HashRouter>
        <Routes>
          {Object.keys(AppRoutes).map((key: string) => {
            const { path, component } = AppRoutes[key];
            return <Route key={key} path={path} element={component} />;
          })}
        </Routes>
      </HashRouter>
    </>
  );
}
