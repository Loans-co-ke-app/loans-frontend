/* eslint-disable react/no-unescaped-entities */
import { FeaturedPostContext } from '../state/providers/FeaturedPostprovider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeSectorSection from '../components/HomeSectorSection';
import HtmlDecoder from '../helpers/HtmlDecoder';
import { IPostEntity } from '../interfaces/Post';
import { Link } from 'react-router-dom';
import { LoaderComponent } from 'react-fullscreen-loader';
import { PostsContext } from '../state/providers/PostsProvider';
import React from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Homepage = () => {
	document.title = 'Homepage';
	const {
		state: {
			postsState: { loading, posts }
		}
	} = React.useContext(PostsContext);
	const {
		state: {
			postsState: { post, loading: featuredPostLoading }
		}
	} = React.useContext(FeaturedPostContext);

	const [sponsoredPost, setSponsoredPost] = React.useState<IPostEntity>(
		{} as IPostEntity
	);
	const [editorsPick, setEditorsPick] = React.useState<IPostEntity>(
		{} as IPostEntity
	);

	const filterSponsoredPost = () => {
		const selectedPost =
			posts.length > 0 && posts.filter((post) => post.is_sponsored)[0];
		selectedPost && setSponsoredPost(selectedPost);
	};

	const filterEditotorsPick = () => {
		const selectedPost =
			posts.length > 0 && posts.filter((post) => post.is_editors_pick)[0];
		selectedPost && setEditorsPick(selectedPost);
	};
	React.useEffect(() => {
		filterSponsoredPost();
		filterEditotorsPick();
	}, [posts]);

	return (
		<motion.div
			className="flex flex-col gap-4"
			initial={{ opacity: 0.5 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			{/* Header  featured post */}
			<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 py-4 border-b">
				{sponsoredPost.is_sponsored ? (
					<Link
						to={`/blog/${sponsoredPost.slug}`}
						className="flex flex-col gap-4"
					>
						<p className="text-center text-purple-600">
							{sponsoredPost.article_category?.category_name}
						</p>
						<div>
							<h2 className="text-lg font-bold">
								{sponsoredPost.article_title}
							</h2>
							<div>
								<HtmlDecoder
									html={sponsoredPost.article_body.slice(
										0,
										110
									)}
								/>
							</div>
						</div>
						<div className="border-l border-gray-400 pl-2 flex flex-col gap-3">
							{/* <p className="font-medium">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Vitae, deleniti.
							</p> */}
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
										src={
											sponsoredPost.authors.author_avatar
										}
										alt=""
										className="h-12 w-12 border-gray-300 border-2 rounded-full object-cover"
									/>
									<span>
										{sponsoredPost.authors.first_name}{' '}
										{sponsoredPost.authors.last_name}
									</span>
								</div>
							</div>
						</div>
					</Link>
				) : (
					<div className="flex flex-col gap-4">
						<p className="text-center text-purple-600">
							{sponsoredPost.article_title}
						</p>
						<div>
							<h2 className="text-lg font-bold">
								{sponsoredPost.article_title}
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
				{featuredPostLoading ? (
					<div className="flex flex-col gap-4 w-full bg-gray-100 h-96">
						<div className="w-full h-3/4 bg-gray-200 animate-pulse"></div>
						<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
						<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
						<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
					</div>
				) : (
					<Link to={`/blog/${post.slug}`} className="w-full ">
						<div className="relative">
							<img
								src={post.featured_image}
								alt=""
								className="w-full h-96 object-cover"
							/>
						</div>
						<div className="text-center p-4">
							<p className="text-center text-purple-700 uppercase text-lg">
								{post.sector_category}
							</p>
							<h1 className="text-2xl font-bold">
								{post.article_title}
							</h1>
							<div>
								{post.article_body && (
									<HtmlDecoder
										html={post.article_body.slice(0, 110)}
									/>
								)}
							</div>
						</div>
					</Link>
				)}
				{/* Editors pick */}
				{editorsPick.is_editors_pick ? (
					<Link to={`/blog/${editorsPick.slug}`}>
						<p className="text-purple-600 font-bold text-medium">
							Editor's pick
						</p>
						<div className="w-full">
							<div className="relative">
								<img
									src={editorsPick.featured_image}
									alt=""
									className="w-full h-60 object-cover"
								/>
							</div>
							<h1 className="text-xl font-bold">
								{sponsoredPost.article_title}
							</h1>
							<p className="text-lg font-medium">
								<FontAwesomeIcon icon={faQuoteLeft} />{' '}
								<div>
									{sponsoredPost &&
										sponsoredPost.article_body && (
											<HtmlDecoder
												html={sponsoredPost.article_body.slice(
													0,
													110
												)}
											/>
										)}
								</div>
							</p>
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
								<span>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quisquam, quod.
								</span>
							</p>
						</div>
					</div>
				)}
				<LoaderComponent loading={loading} />
			</div>
			{/* Top news */}
			<HomeSectorSection
				loading={loading}
				posts={posts.slice(0, 4)}
				title="Agriculture"
			/>
			{/* Spotlight */}
			<HomeSectorSection
				loading={loading}
				posts={posts.slice(4, 8)}
				title="Spotlight"
			/>
			{/* Opinion */}
			<HomeSectorSection
				loading={loading}
				posts={posts.slice(8, 12)}
				title="Opinion"
			/>
			{/* Life and arts */}
			<HomeSectorSection
				loading={loading}
				posts={posts.slice(12, 16)}
				title="Life and arts"
			/>
			{/* Markets news */}
			<HomeSectorSection
				loading={loading}
				posts={posts.slice(16, 20)}
				title="Markets news"
			/>
			{/* Technology */}
			{/* <HomeSectorSection posts={posts} title='Technology' /> */}
		</motion.div>
	);
};

export default Homepage;
