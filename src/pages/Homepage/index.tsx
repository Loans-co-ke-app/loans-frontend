/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-unescaped-entities */
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AxiosError } from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData, useRouteError } from 'react-router-dom';
import { axiosQuery } from '../../api';
import HtmlDecoder from '../../helpers/HtmlDecoder';
import useAppState from '../../hooks/useAppState';
import { IPostEntity } from '../../interfaces/Post';
import { HomepageResponse } from './types';
import avatar from './../../assets/user.png';

const Homepage = () => {
	const { articlesDispatch, featuredPostDispatch } = useAppState();
	const { featuredArticle, articles, editorsPick, sponsoredArticle } =
		useLoaderData() as unknown as HomepageResponse;
	React.useEffect(() => {
		console.log('Homepage mounted');
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
		<div>
			<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 py-4 border-b">
				{sponsoredArticle ? (
					<Link
						to={`/blog/${sponsoredArticle.slug}`}
						className="flex flex-col gap-4"
					>
						<p className="text-center text-purple-600">
							{sponsoredArticle.article_category?.category_name}
						</p>
						<div>
							<h2 className="text-lg font-bold">
								{sponsoredArticle.article_title}
							</h2>
							<div className="leading-6">
								<HtmlDecoder
									html={sponsoredArticle.article_body.slice(
										0,
										110
									)}
								/>
							</div>
						</div>
						<div className="border-l border-gray-400 pl-2 flex flex-col gap-3">
							<div>
								<p className="font-medium">
									<FontAwesomeIcon
										icon={faQuoteLeft}
										className="text-purple-600 mr-3"
									/>
									{/* <span>
										Lorem ipsum dolor sit amet consectetur.
									</span> */}
								</p>
								<div className="flex items-center gap-3">
									<img
										src={avatar}
										alt=""
										className="h-12 w-12 border-gray-300 border-2 rounded-full object-cover"
									/>
									<span>
										{featuredArticle!.authors.first_name}{' '}
										{featuredArticle!.authors.last_name}
									</span>
								</div>
							</div>
						</div>
					</Link>
				) : (
					<div className="flex flex-col gap-4">
						<p className="text-center text-purple-600">
							{featuredArticle!.article_title}
						</p>
						<div>
							<h2 className="text-lg font-bold">
								{featuredArticle!.article_title}
							</h2>
							<div className="text-sm flex flex-col gap-2">
								{[1, 2, 3, 4].map((p) => (
									<span
										className="w-full h-3 bg-slate-200 rounded-md"
										key={p}
									></span>
								))}
							</div>
						</div>
						<div className="border-l border-gray-400 pl-2 flex flex-col gap-3">
							<p className="font-medium h-2 w-full bg-gray-200"></p>
							<div>
								<p className="font-medium">
									<FontAwesomeIcon
										icon={faQuoteLeft}
										className="text-purple-600 mr-3"
									/>
									<span>
										{/* Lorem ipsum dolor sit amet consectetur. */}
									</span>
								</p>
								<div className="flex items-center gap-3">
									<div className="h-12 w-12 rounded-full bg-slate-200"></div>
									<span className="h-2 w-full bg-slate-200"></span>
								</div>
							</div>
						</div>
					</div>
				)}
				{/* Skeleton loading  */}
				{!featuredArticle ? (
					<div className="flex flex-col gap-4 w-full bg-gray-100 h-96">
						<div className="w-full h-3/4 bg-gray-200 animate-pulse"></div>
						<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
						<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
						<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
					</div>
				) : (
					<Link
						to={`/blog/${featuredArticle.slug}`}
						className="w-full "
					>
						<div className="relative">
							<img
								src={featuredArticle.featured_image}
								alt=""
								className="w-full h-96 object-cover"
							/>
						</div>
						<div className="text-center p-4">
							<p className="text-center text-purple-700 uppercase text-lg">
								{featuredArticle.sector_category}
							</p>
							<h1 className="text-2xl font-bold">
								{featuredArticle.article_title}
							</h1>
							<div>
								{featuredArticle.article_body && (
									<HtmlDecoder
										html={featuredArticle.article_body.slice(
											0,
											110
										)}
									/>
								)}
							</div>
						</div>
					</Link>
				)}
				{/* Editors pick */}
				{editorsPick ? (
					<Link to={`/blog/${editorsPick!.slug}`}>
						<p className="text-purple-600 font-bold text-medium">
							Editor's pick
						</p>
						<div className="w-full">
							<div className="relative">
								<img
									src={editorsPick!.featured_image}
									alt=""
									className="w-full h-60 object-cover"
								/>
							</div>
							<h1 className="text-xl font-bold">
								{editorsPick!.article_title}
							</h1>
							<div className="text-lg font-medium">
								<FontAwesomeIcon icon={faQuoteLeft} />{' '}
								<div>
									{editorsPick!.article_body && (
										<HtmlDecoder
											html={editorsPick!.article_body.slice(
												0,
												110
											)}
										/>
									)}
								</div>
							</div>
						</div>
					</Link>
				) : (
					<div>
						<p>Editor's pick</p>
						<div className="w-full">
							<div className="relative">
								<img
									src="/img.webp"
									alt=""
									className="w-full h-60 object-cover"
								/>
							</div>
							<p className="text-lg font-medium">
								<FontAwesomeIcon icon={faQuoteLeft} />{' '}
								{/* <span>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quisquam, quod.
								</span> */}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

const loader = async (): Promise<HomepageResponse> => {
	console.log('Homepage loader');

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
			console.log({ ed: data });

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

	const sponsoredPost = articles!.find((article) => article.is_sponsored);

	return {
		articles,
		featuredArticle,
		sponsoredArticle: sponsoredPost?.is_sponsored
			? sponsoredPost
			: articles![0],
		editorsPick
	};
};
const ErrorElement = () => {
	const err = useRouteError() as any;
	// console.log({ err });

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
