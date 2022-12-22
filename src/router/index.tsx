import BaseLayout from '../layout/BaseLayout';
/* eslint-disable @typescript-eslint/naming-convention */
import Homepage from './../pages/Homepage';
import LayoutWrap from '../layout/LayoutWrap';
import Loanspage from '../pages/LoansPage';
import React from 'react';
import SectorsPage from '../pages/SectorsPage';
import SingleBlogPage from './../pages/SinglePost';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		element: <LayoutWrap Component={Homepage} Layout={BaseLayout} />,
		id: 'Homepage',
		path: '/',
		loader: Homepage.loader,
		errorElement: <Homepage.ErrorElement />,
	},
	{
		element: <LayoutWrap Component={SingleBlogPage} Layout={BaseLayout} />,
		id: 'SingleBlogPost',
		path: '/blog/:slug',
		loader:SingleBlogPage.loader,
		errorElement: <SingleBlogPage.ErrorElement/>
	},
	{
		element: <Homepage.ErrorElement />,
		id: 'NotFound',
		path: '*'
	},
	{
		element: <LayoutWrap Component={Loanspage} Layout={BaseLayout} />,
		id: 'Loanspage Sub category',
		path: '/categories/:loanCategory/:loanSubCategory',
		errorElement: <Loanspage.ErrorBoundary />,
		loader:Homepage.loader
	},
	{
		element: <LayoutWrap Component={SectorsPage} Layout={BaseLayout} />,
		id: 'Loanspage Sub sector',
		path: '/sectors/:sector/:subSector',
		errorElement: <SectorsPage.ErrorBoundary />,
		loader:Homepage.loader
	},
	{
		element: <LayoutWrap Component={SectorsPage} Layout={BaseLayout} />,
		id: 'Sector Page ',
		path: '/sectors/:sector',
		errorElement: <SectorsPage.ErrorBoundary />,
		loader:Homepage.loader
	}
]);
