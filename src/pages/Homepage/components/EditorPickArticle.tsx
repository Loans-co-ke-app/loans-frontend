/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-unescaped-entities */
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import HtmlDecoder from '../../../helpers/HtmlDecoder';
import { IPostEntity } from '../../../interfaces/Post';

const EditorPickArticle = ({ article }: { article: IPostEntity }) => {
	return article ? (
		<Link to={`/blog/${article!.slug}`}>
			<p className="text-purple-600 font-bold text-medium">
				Editor's pick
			</p>
			<div className="w-full">
				<div className="relative">
					<img
						src={article!.featured_image}
						alt=""
						className="w-full h-60 object-cover"
					/>
				</div>
				<h1 className="text-xl font-bold">{article!.article_title}</h1>
				<div className="text-lg font-medium">
					<FontAwesomeIcon icon={faQuoteLeft} />{' '}
					<div className="text-left leading-6">
						{article!.article_body && (
							<HtmlDecoder html={article!.excerpt} />
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
	);
};

export default EditorPickArticle;
