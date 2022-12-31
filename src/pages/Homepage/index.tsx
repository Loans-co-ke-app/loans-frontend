/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-unescaped-entities */
import { AxiosError } from 'axios';
import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { useLoaderData, useRouteError } from 'react-router-dom';
import { axiosQuery } from '../../api';
import HtmlDecoder from '../../helpers/HtmlDecoder';
import useAppState from '../../hooks/useAppState';
import { IPostEntity } from '../../interfaces/Post';
import { HomepageResponse } from './types';
import SponsoredArticle from './components/SponsoredArticle';
import FeaturedArticle from './components/FeaturedArticle.tsx';
import EditorPickArticle from './components/EditorPickArticle';
import HomeSectorSection from '../../components/HomeSectorSection';
import FullPageLoader from '../../components/FullPageLoader';
import { Helmet } from 'react-helmet';

const Homepage = () => {
	const navigation = useNavigation();

	const { articlesDispatch, featuredPostDispatch } = useAppState();
	const {
		featuredArticle,
		articles,
		editorsPick,
		sponsoredArticle,
		articleSectors
	} = useLoaderData() as unknown as HomepageResponse;
	React.useEffect(() => {
		if (articles && featuredArticle) {
			articlesDispatch({
				type: 'POST_LOAD_SUCCESS',
				payload: articles
			});
			featuredPostDispatch({
				type: 'FEATURED_POST_LOAD_SUCCESS',
				payload: {
					post: featuredArticle
				}
			});
		}
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<meta name="author" content="Brian" />
				<meta name="keywords" content="Loans, Finance, Money" />
				<meta charSet="UTF-8" />
				{/* <base href="https://loans.co.ke/" target="_blank" /> */}
				
			</Helmet>
			{navigation.state === 'loading' ? (
				<FullPageLoader />
			) : (
				<div>
					<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 py-4 border-b leading-5 text-left">
						{/* Sponsored post */}
						<SponsoredArticle
							sponsoredArticle={sponsoredArticle!}
						/>
						{/* Skeleton loading  */}
						<FeaturedArticle article={featuredArticle!} />
						{/* Editors pick */}
						<EditorPickArticle article={editorsPick!} />
					</div>
					<div>
						{articleSectors?.map((sector) => (
							<HomeSectorSection
								key={sector}
								loading={false}
								title={sector}
							/>
						))}
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

const loader = async (): Promise<HomepageResponse> => {
	// const s = useAppState();

	const fetchPosts = async () => {
		try {
			const res = await axiosQuery.get('');
			const data = res.data;

			return data as Array<IPostEntity>;
		} catch (err: any) {
			if (err instanceof AxiosError) throw new Error(err.response?.data);
		}
	};

	const fetchFeaturedPost = async () => {
		try {
			const res = await axiosQuery.get('/article_featured/');
			const data = res.data[0];

			return data as IPostEntity;
		} catch (error: any) {
			if (error instanceof AxiosError)
				throw new Error(error.response?.data);
		}
	};
	const fetchEditorsPick = async () => {
		try {
			const res = await axiosQuery.get('/article_editor_pick/');
			const data = res.data[0];

			return data as IPostEntity;
		} catch (error: any) {
			if (error instanceof AxiosError)
				throw new Error(error.response?.data);
		}
	};
	const [articles, featuredArticle, editorsPick] = await Promise.all([
		fetchPosts(),
		fetchFeaturedPost(),
		fetchEditorsPick()
	]);
	const articleSectors: string[] = [];
	articles?.forEach(
		(article) =>
			!articleSectors.includes(article.sector_category!) &&
			articleSectors.push(article.sector_category!)
	);
	const sponsoredPost = articles!.find((article) => article.is_sponsored);

	return {
		articles,
		featuredArticle,
		sponsoredArticle: sponsoredPost?.is_sponsored
			? sponsoredPost
			: articles![0],
		editorsPick,
		articleSectors
	};
};
const ErrorElement = () => {
	const err = useRouteError() as any;

	return (
		<div className="flex items-center text-center font-bold justify-center h-screen p-10 flex-col">
			<div>
				{err.statusText}
				{err.status}
				<code className="bg-black text-2xl">
					<HtmlDecoder html={err.message} />
				</code>
			</div>
			<p className="py-4">
				Back to{' '}
				<Link to="/" className="text-blue-500">
					Homepage
				</Link>
			</p>
		</div>
	);
};

export default Object.assign(Homepage, { ErrorElement, loader });
