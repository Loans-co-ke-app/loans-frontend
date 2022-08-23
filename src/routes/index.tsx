import Homepage from "../views/Homepage";

interface IPages {
  [key: string]: {
    name: string;
    path: string;
    component: JSX.Element;
    options?: any;
    hasChildren?:boolean
  };
}
const AppRoutes: IPages = {
    home: {
        name: 'Home',
        path: '/',
        component: <Homepage />,
        options: {  },
        hasChildren: false,
    },
};

export default AppRoutes;
