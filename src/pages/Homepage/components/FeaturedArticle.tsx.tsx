import React from 'react';
import { Link } from 'react-router-dom';
import HtmlDecoder from '../../../helpers/HtmlDecoder';
import { IPostEntity } from '../../../interfaces/Post';

const FeaturedArticle = ({ article }: { article: IPostEntity }) => {
	return !article ? (
		<div className="flex flex-col gap-4 w-full bg-gray-100 h-96">
			<div className="w-full h-3/4 bg-gray-200 animate-pulse"></div>
			<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
			<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
			<div className="px-4 bg-gray-200 animate-bounce rounded-md h-10"></div>
		</div>
	) : (
		<Link to={`/blog/${article.slug}`} className="w-full ">
			<div className="relative">
				<img
					src={article.featured_image}
					alt=""
					className="w-full h-96 object-cover"
				/>
			</div>
			<div className="text-center p-4">
				<p className="text-center text-purple-700 uppercase text-lg">
					{article.sector_category}
				</p>
				<h1 className="text-2xl font-bold">{article.article_title}</h1>
				<div className="text-left leading-6">
					{article.article_body && (
						<HtmlDecoder html={article.excerpt} />
					)}
				</div>
			</div>
		</Link>
	);
};

export default FeaturedArticle;
