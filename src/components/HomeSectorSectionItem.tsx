/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HtmlDecoder from '../helpers/HtmlDecoder';
import { IPostEntity } from '../interfaces/Post';
import React from 'react';
import StatusBadge from './StatusBadge';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { faBookmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HomeSectorSectionItem = ({
	post,
	loading
}: {
	post: IPostEntity;
	loading: boolean;
}) => {
	const navigate = useNavigate();
	const navigateToSinglePost = (slug: string) => {
		navigate(`/blog/${slug}`);
	};
	const containerRef = React.useRef<HTMLDivElement>(null);
	// const { visible } = useOnScreen(containerRef);

	return loading ? (
		<div className="w-full h-96 bg-gray-200 animate-pulse"></div>
	) : (
		<AnimatePresence>
			<motion.div
				ref={containerRef}
				className="w-full basis-64 flex-1 group"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<div className="relative overflow-hidden">
					<img
						src={post.featured_image}
						alt=""
						className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-500  ease-linear"
					/>
					<div className="h-full w-full absolute top-0 px-2 z-10">
						{StatusBadge(post.sector_category!)}
						{post.article_company}
						<span className="bg-purple-400 text-white rounded-md text-[12px] px-2 py-1">
							{post.article_category?.category_name}
						</span>
						<div className="">
							<FontAwesomeIcon
								icon={faBookmark}
								className="text-white absolute top-2 right-2 text-xl cursor-pointer peer"
							/>
							<span className="invisible peer-hover:visible transition-all ease-linear duration-300 absolute right-0 top-10 rounded-md font-roboto text-sm bg-white px-1">
								{post.article_company}
							</span>
						</div>
					</div>
				</div>
				<div className="p-2">
					<h2 className="text-lg font-bold">{post.article_title}</h2>
					<div className="text-[14px]">
						<HtmlDecoder html={post.article_body.slice(0, 210)} />
					</div>
					<button
						className="py-2 text-purple-500 hover:text-red-500"
						onClick={() => navigateToSinglePost(post.slug)}
					>
						Continue reading{' '}
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[12px]"
						/>
					</button>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default HomeSectorSectionItem;
