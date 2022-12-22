import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import HtmlDecoder from '../../../helpers/HtmlDecoder';
import { IPostEntity } from '../../../interfaces/Post';
import avatar from './../../../assets/user.png';

const SponsoredArticle = ({
	sponsoredArticle
}: {
	sponsoredArticle: IPostEntity;
}) => {
	return (
		<div>
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
						<div className="text-left leading-6">
							<HtmlDecoder html={sponsoredArticle.excerpt} />
						</div>
					</div>
					<div className="border-l border-gray-400 pl-2 flex flex-col gap-3">
						<div>
							<p className="font-medium">
								<FontAwesomeIcon
									icon={faQuoteLeft}
									className="text-purple-600 mr-3"
								/>
							</p>
							<div className="flex items-center gap-3">
								<img
									src={avatar}
									alt=""
									className="h-12 w-12 border-gray-300 border-2 rounded-full object-cover"
								/>
								<span>
									{sponsoredArticle.authors.first_name}{' '}
									{sponsoredArticle.authors.last_name}
								</span>
							</div>
						</div>
					</div>
				</Link>
			) : (
				<div className="flex flex-col gap-4">
					<p className="text-center text-purple-600">some title</p>
					<div>
						<h2 className="text-lg font-bold">title</h2>
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
		</div>
	);
};

export default SponsoredArticle;
