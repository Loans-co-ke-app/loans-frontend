/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import AdLayout from '../layout/AdLayout';
import { AxiosError } from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HtmlDecoder from '../helpers/HtmlDecoder';
import { IPostEntity } from '../interfaces/Post';
import React from 'react';
import { axiosQuery } from '../api';
import { faFeed } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import {
	faFacebook,
	faGoogle,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

const SingleBlogPostPage = () => {
	const [loading, setLoading] = React.useState<boolean>(false);
	const [err, setErr] = React.useState<any>(null);
	const [post, setPost] = React.useState<IPostEntity>({} as any);
	const { slug } = useParams();
	const fetchSinglePost = async () => {
		try {
			setLoading(true);
			const res = await axiosQuery.get(`/${slug}`);

			setPost(res.data);
			setErr('');
			setLoading(false);
		} catch (error: any) {
			if (error instanceof AxiosError) {
				setErr(error.response?.data);
				setLoading(false);
			}
		}
	};
	React.useEffect(() => {
		fetchSinglePost();
	}, [slug]);

	return (
		<AdLayout>
			{!loading && !err ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 3 }}
				>
					<div className="px-4">
						<div></div>
						<div className="w-full h-96 relative">
							<img
								src={post.featured_image}
								alt=""
								className="absolute h-full w-full  object-cover"
							/>
						</div>
						<div className="py-2 text-[.85rem] flex items-center gap-2">
							<span>
								{post.authors?.first_name!}{' '}
								{post.authors?.last_name!}
							</span>{' '}
							<span>
								{moment(post.publish_date).format('LL')}
							</span>
						</div>
						<h1 className="text-3xl py-2 text-purple-600 font-bold">
							{post.article_title}
						</h1>
						<div className="py-3">
							{post.article_body &&
								HtmlDecoder({ html: post?.article_body! })}
						</div>
						<div className="border my-3 flex gap-2">
							<div className="w-2/5 h-full bg-gray-300 p-4">
								<img
									src={post.authors?.author_avatar}
									alt=""
									className="w-full h-1/2"
								/>
								<div className="text-[.85rem]">
									<span>{`${post.authors?.first_name!} ${post
										.authors?.last_name!}`}</span>
								</div>
							</div>
							<div className="p-4">
								<h1 className="text-2xl py-3">
									About the author
								</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Dolore quos sapiente
									praesentium sint. Voluptas, optio ducimus
									modi officia sunt vel. Quisquam sed nemo nam
									est laboriosam placeat perferendis soluta
									illum.
								</p>
								<div className="py-2 flex items-center gap-2">
									<FontAwesomeIcon
										icon={faFacebook}
										color="blue"
									/>
									<FontAwesomeIcon
										icon={faTwitter}
										color="blue"
									/>
									<FontAwesomeIcon
										icon={faFeed}
										color="orange"
									/>
									<FontAwesomeIcon icon={faGoogle} />
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			) : (
				<>
					<h1>An error occured</h1>
				</>
			)}
		</AdLayout>
	);
};

export default React.memo(SingleBlogPostPage);
