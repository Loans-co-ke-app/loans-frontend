import BaseLayout from '../layout/BaseLayout';
/* eslint-disable @typescript-eslint/naming-convention */
import ErrorPage from './../pages/ErrorPage';
import Homepage from './../pages/Homepage';
import LayoutWrap from '../layout/LayoutWrap';
import Loanspage from '../pages/LoansPage';
import React from 'react';
import SectorsPage from '../pages/SectorsPage';
import SingleBlogPage from './../pages/SingleBlogPostPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		element: <LayoutWrap Component={Homepage} Layout={BaseLayout} />,
		id: 'Homepage',
		path: '/',
		errorElement: <ErrorPage />
	},
	{
		element: <LayoutWrap Component={SingleBlogPage} Layout={BaseLayout} />,
		id: 'SingleBlogPost',
		path: '/blog/:slug'
	},
	{
		element: <ErrorPage />,
		id: 'NotFound',
		path: '*'
	},
	{
		element: <LayoutWrap Component={Loanspage} Layout={BaseLayout} />,
		id: 'Loanspage Sub category',
		path: '/categories/:loanCategory/:loanSubCategory'
	},
	{
		element: <LayoutWrap Component={SectorsPage} Layout={BaseLayout} />,
		id: 'Loanspage Sub sector',
		path: '/sectors/:sector/:subSector'
	},
	{
		element: <LayoutWrap Component={SectorsPage} Layout={BaseLayout} />,
		id: 'Sector Page ',
		path: '/sectors/:sector'
	}
]);
