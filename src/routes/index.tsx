import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import TopScroll from "../components/TopScroll";
import Homepage from "../views/Homepage";
import NotFound from "../views/NotFound";
import SinglePost from "../views/SinglePost";

// interface IPages {
//   [key: string]: {
//     name: string;
//     path: string;
//     component: JSX.Element;
//     options?: any;
//     hasChildren?: boolean;
//   };
// }
// const AppRoutes: IPages = {
//   home: {
//     name: "Home",
//     path: "/",
//     component: BaseLayout({ children: <Homepage /> }),
//     options: {},
//     hasChildren: false,
//   },
//   singleBlogPost: {
//     name: "Single Blog Post",
//     path: "/post/:slug",
//     component: BaseLayout({ children: <SinglePost /> }),
//     options: {},
//   },
//   notFound: {
//     name: "404",
//     path: "*",
//     component: BaseLayout({ children: <NotFound /> }),
//     options: {},
//     hasChildren: false,
//   },
// };
interface IRouterMap {
  name: string;
  options?: any;
  urlPath: string;
  hasChildren: boolean;
  children?: IRouterMap[];
  Component: React.FC; //|React.ComponentClass|JSX.Element|React.ReactElement
}

const routes: IRouterMap[] = [
  {
    name: "Home",
    urlPath: "/",
    hasChildren: false,
    Component: React.lazy(() => import("./../views/Homepage")),
  },
  {
    name: "Single Blog Post",
    urlPath: "/post/:slug",
    hasChildren: false,
    Component: React.lazy(() => import("./../views/SinglePost")),
  },
  {
    name: "404",
    urlPath: "*",
    hasChildren: false,
    Component: React.lazy(() => import("./../views/NotFound")),
  },
  
];

// export default function AppRouter() {
//   return (
//     <>
//       <HashRouter>
//         <TopScroll />
//         <Routes>
//           {Object.keys(AppRoutes).map((key: string) => {
//             const { path, component } = AppRoutes[key];
//             return <Route key={key} path={path} element={component} />;
//           })}
//         </Routes>
//       </HashRouter>
//     </>
//   );
// }

const RouterMap = ({ routes }: { routes: IRouterMap[] }) => {
  return (
    <HashRouter>
      <BaseLayout>
        <Routes>
          {routes.map((route, index) => {
            return route.hasChildren ? (
              <Route
                key={index}
                path={route.urlPath}
                element={<route.Component />}
              >
                {route.children?.map((childRoute, childIndex) => {
                  return (
                    <Route
                      key={childIndex}
                      path={childRoute.urlPath}
                      element={<childRoute.Component />}
                    />
                  );
                })}
              </Route>
            ) : (
              <Route
                key={index}
                path={route.urlPath}
                element={<route.Component />}
              />
            );
          })}
        </Routes>
      </BaseLayout>
    </HashRouter>
  );
};
const AppRouter = () => {
  return <RouterMap routes={routes} />;
};

export default AppRouter;