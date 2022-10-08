/* eslint-disable @typescript-eslint/naming-convention */
import BaseLayout from '../layout/BaseLayout';
import Homepage from './../pages/Homepage';
import Loanspage from '../pages/LoansPage';
import NotFoundPage from './../pages/NotFoundPage';
import React from 'react';
import SectorsPage from '../pages/SectorsPage';
import SingleBlogPage from './../pages/SingleBlogPostPage';
import TopScroll from '../helpers/TopScroll';
import { HashRouter, Route, Routes } from 'react-router-dom';

interface IRouteProps {
	pathName: string;
	urlPath: string;
	Component: React.ReactElement;
	isNested: boolean;
	children?: IRouteProps[];
}

const appRoutes: IRouteProps[] = [
	{
		Component: <Homepage />,
		isNested: false,
		pathName: 'Home',
		urlPath: '/',
	},
	{
		Component: <SingleBlogPage />,
		isNested: false,
		pathName: 'SingleBlogPost',
		urlPath: '/blog/:slug',
	},
	{
		Component: <NotFoundPage />,
		isNested: false,
		pathName: 'NotFound',
		urlPath: '*',
	},
	{
		Component: <Loanspage />,
		isNested: false,
		pathName: 'Loanspage',
		urlPath: '/categories/:loan/:category',
	},
	{
		Component: <SectorsPage />,
		isNested: false,
		pathName: 'Loanspage',
		urlPath: '/sectors/:sector/:subSector',

	},
	{
		Component: <SectorsPage />,
		isNested: false,
		pathName: 'Loanspage',
		urlPath: '/sectors/:sector',

	}
];

const AppRouter = () => {
	return (
		<HashRouter>
			<TopScroll />
			<BaseLayout>
				<Routes>
					{appRoutes.map(
						({
							Component: MComponent,
							isNested: MIsNested,
							pathName: MPathname,
							urlPath: MUrlPath,
							children: MChildren,
						}) => {
							return MIsNested ? (
								<Route path={MUrlPath} element={MComponent}>
									{MChildren?.map(
										({
											Component: C1Component,
											isNested: C1IsNested,
											urlPath: C1UrlPath,
											children: C1Children,
										}) => {
											return C1IsNested ? (
												<Route path={C1UrlPath} element={C1Component}>
													{C1Children?.map(
														({
															Component: C2Component,
															urlPath: C2UrlPath,
														}) => {
															return (
																<Route key={C2UrlPath} path={C2UrlPath} element={C2Component} />
															);
														}
													)}
												</Route>
											) : (
												<Route path={C1UrlPath} element={C1Component} />
											);
										}
									)}
								</Route>
							) : (
								<Route path={MUrlPath} element={MComponent} key={MPathname} />
							);
						}
					)}
				</Routes>
			</BaseLayout>
		</HashRouter>
	);
};

// function AppRouter() {
//     return (
//         <HashRouter>
//             <BaseLayout>
//                 <Routes>
//                     {appRoutes.map((route) => (
//                         <Route path={route.urlPath} key={route.pathName} element={route.Component} />
//                     ))}
//                 </Routes>
//             </BaseLayout>
//         </HashRouter>
//     );
// }

export default AppRouter;
