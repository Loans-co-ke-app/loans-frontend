/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FullPageLoader from '../../components/FullPageLoader';
import React from 'react';
import { SinglePostResponse } from './types';
import { axiosQuery } from '../../api';
import { faFeed, faShare } from '@fortawesome/free-solid-svg-icons';
import { getPlatforms } from './utils';
import styles from './styles.module.scss';
import {
	LoaderFunctionArgs,
	useLoaderData,
	useRouteError
} from 'react-router-dom';
import AdLayout from '../../layout/AdLayout';
import bg from './../../assets/bg.webp';
import moment from 'moment';
import HtmlDecoder from '../../helpers/HtmlDecoder';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const loader = async ({
	params
}: LoaderFunctionArgs): Promise<SinglePostResponse> => {
	const { slug } = params as { slug: string };
	const response = await axiosQuery.get(slug!);
	const data = response.data;

	return { data, slug };
};

const SinglePost = () => {
	const { data } = useLoaderData() as SinglePostResponse;
	console.log(data);

	return (
		<div>
			{data === undefined ? (
				<FullPageLoader />
			) : (
				<AdLayout>
					<div className={'flex flex-col gap-4 bg-opacity-50 p-3'}>
						<div
							className="h-52 bg-black text-center justify-betweentext-white flex flex-col bg-no-repeat bg-cover bg-center bg-blend-overlay bg-opacity-70"
							style={{
								backgroundImage: `url(${bg})`
							}}
						>
							<div className="flex flex-1 p-3 justify-center items-center h-full">
								<h1 className="text-3xl font-bold flex-1 text-white">
									{data.article_title}
								</h1>
							</div>
							<div
								className="flex items-center justify-between px-4
							bg-gray-500 bg-opacity-60 text-white"
							>
								<p className="text-sm">
									{`Author: ${data.authors.first_name} ${data.authors.last_name}`}
								</p>
								<p>{moment(data.publish_date).format('LL')}</p>
							</div>
						</div>
						<div className="flex gap-2">
							<div>
								<h2>
									{' '}
									<FontAwesomeIcon icon={faShare} />
									Share
								</h2>
								<div className="flex flex-col p-4">
									{getPlatforms().map(
										({ link, color, icon }) => (
											<a
												href={link}
												target="_blank"
												rel="noreferrer"
												key={link}
											>
												{icon ? (
													<FontAwesomeIcon
														icon={icon}
														className={`bg-${color}-400 text-2xl`}
													/>
												) : null}
											</a>
										)
									)}
								</div>
							</div>
							<div>
								<img src={data.featured_image} alt="" />
							</div>
						</div>
						<div className="py-3">
							{data.article_body &&
								HtmlDecoder({ html: data?.article_body })}
						</div>
						<div className="border my-3 flex gap-2 items-center flex-col md:flex-row">
							<div className="md:w-80 px-4 h-full flex flex-col justify-center items-center">
								<img
									src={data.authors?.author_avatar}
									alt=""
									className="w-full h-1/2 rounded-full md:rounded-none"
								/>
								<div className="text-[.85rem]">
									<span>{`${data.authors?.first_name} ${data
										.authors?.last_name}`}</span>
								</div>
							</div>
							<div className="p-4">
								<h1 className="text-2xl py-3">
									About the author
								</h1>
								<p>
									{data.authors.author_description
										? data.authors.author_description
										: ''}
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
				</AdLayout>
			)}
		</div>
	);
};

const ErrorElement = () => {
	const error = useRouteError() as any;

	return (
		<div>
			{error?.status === 404 ? (
				<div>404</div>
			) : (
				<div>{error.statusText}</div>
			)}
		</div>
	);
};

export default Object.assign(SinglePost, { loader, ErrorElement });
