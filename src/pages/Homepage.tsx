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
	// for (let i = 0; i < posts.length; i++) 
	// 	console.log(posts[i].article_category?.category_name);


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
					<div className="flex flex-col gap-4">
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
							<p className="font-medium">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Vitae, deleniti.
							</p>
							<div>
								<p className="font-medium">
									<FontAwesomeIcon
										icon={faQuoteLeft}
										className="text-purple-600 mr-3"
									/>
									<span>
										Lorem ipsum dolor sit amet consectetur.
									</span>
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
					</div>
				) : (
					<div className="flex flex-col gap-4">
						<p className="text-center text-purple-600">
							{sponsoredPost.article_title}
						</p>
						<div>
							<h2 className="text-lg font-bold">
								{sponsoredPost.article_title}
							</h2>
							<p className="text-sm">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dolor, tempore! Consectetur
								natus voluptatibus consequatur doloribus
								quaerat!
							</p>
						</div>
						<div className="border-l border-gray-400 pl-2 flex flex-col gap-3">
							<p className="font-medium">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Vitae, deleniti.
							</p>
							<div>
								<p className="font-medium">
									<FontAwesomeIcon
										icon={faQuoteLeft}
										className="text-purple-600 mr-3"
									/>
									<span>
										Lorem ipsum dolor sit amet consectetur.
									</span>
								</p>
								<div className="flex items-center gap-3">
									<img
										src="/img.webp"
										alt=""
										className="h-12 w-12 border-gray-300 border-2 rounded-full object-cover"
									/>
									<span>Jane Doe</span>
								</div>
							</div>
						</div>
					</div>
				)}
				{/* Skeleton loading  */}
				{featuredPostLoading ? (
					<div className="flex flex-col gap-4 w-full bg-gray-400 h-96">
						<div className="w-full h-3/4 bg-gray-200 animate-pulse"></div>
						<div className="px-4 bg-gray-300 animate-bounce rounded-md h-10"></div>
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
								<HtmlDecoder
									html={post.article_body.slice(0, 110)}
								/>
							</div>
						</div>
					</Link>
				)}
				{/* Editors pick */}
				{editorsPick.is_editors_pick ? (
					<div>
						<p>Editor's pick</p>
						<div className="w-full">
							<div className="relative">
								<img
									src={editorsPick.featured_image}
									alt=""
									className="w-full h-60 object-cover"
								/>
							</div>
							<p className="text-lg font-medium">
								<FontAwesomeIcon icon={faQuoteLeft} />{' '}
								<div>
									<HtmlDecoder
										html={sponsoredPost.article_body.slice(
											0,
											110
										)}
									/>
								</div>
							</p>
						</div>
					</div>
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
