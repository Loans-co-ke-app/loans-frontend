import { AxiosError } from 'axios';
import { FeaturedPostContext } from './state/providers/FeaturedPostprovider';
import { PostsContext } from './state/providers/PostsProvider';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { axiosQuery, TRACKING_ID } from './api';
import ReactGa from 'react-ga';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { router } from './router';
ReactGa.initialize(TRACKING_ID);

const App = () => {
	const { dispatch: postsDispatchFunction } = React.useContext(PostsContext);
	const { dispatch: featuredPostDispatch } =
		React.useContext(FeaturedPostContext);
	const fetchPosts = async () => {
		try {
			postsDispatchFunction({ type: 'POST_LOAD_START', payload: {} });
			const res = await axiosQuery.get('');
			const data = res.data;
			postsDispatchFunction({ type: 'POST_LOAD_SUCCESS', payload: data });
		} catch (err: any) {
			if (err instanceof AxiosError) {
				postsDispatchFunction({
					type: 'LOAD_POST_FAILURE',
					payload: { err: err.response?.data }
				});
			}
		}
	};

	const fetchFeaturedPost = async () => {
		try {
			featuredPostDispatch({
				type: 'FEATURED_POST_LOAD_START',
				payload: {}
			});
			const res = await axiosQuery.get('/article_featured/');
			const data = res.data[0];
			setTimeout(() => {
				featuredPostDispatch({
					type: 'FEATURED_POST_LOAD_SUCCESS',
					payload: { ...data }
				});
			}, 1000);
		} catch (error: any) {
			if (error instanceof AxiosError) {
				featuredPostDispatch({
					type: 'FEATURED_POST_LOAD_FAILURE',
					payload: { err: error.response?.data }
				});
			}
		}
	};
	React.useEffect(() => {
		fetchFeaturedPost();
	}, []);
	React.useEffect(() => {
		fetchPosts();
	}, []);
	// initialize google analytics page view tracking
	React.useEffect(() => {
		ReactGa.pageview(window.location.pathname + window.location.search);
	}, []);

	return <RouterProvider router={router} />;
};

export default App;
