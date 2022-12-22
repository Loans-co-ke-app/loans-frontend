/* eslint-disable @typescript-eslint/naming-convention */
import HomeSectorSectionItem from './HomeSectorSectionItem';
import React from 'react';
import useAppState from '../hooks/useAppState';

const HomeSectorSection = ({
	title,
	loading
}: {
  loading: boolean;
  title: string;
}) => {
	const {articlesState:{postsState:{posts}}}=useAppState();

	return loading ? (
		<div className="flex flex-col gap-3">
			<div className="flex justify-center px-2">
				<div className="h-4 bg-gray-200 w-full rounded-md"></div>
			</div>
			<div className="w-full flex justify-center items-center gap-3 flex-wrap">
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						className="flex flex-[1_1_300px] flex-col gap-2 h-96 bg-gray-300"
					>
						<div className="bg-gray-100 h-1/2 w-full animate-pulse"></div>
						<div className="p-4 flex gap-4 flex-col">
							<div className="bg-gray-100 h-10 w-full rounded-md animate-bounce"></div>
							{[...Array(3)].map((_, i) => (
								<div key={i} className="bg-gray-100 h-3 w-full rounded-md animate-bounce"></div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	) : (
		<div className="py-4 flex flex-col gap-2 border-b ">
			<h2 className="text-purple-600 text-center my-2 font-bold uppercase text-3xl">
				{title}
			</h2>
			<div className="flex flex-wrap gap-4">
				{posts.map((post) => (
					<HomeSectorSectionItem
						post={post}
						key={post.article_title}
						loading={loading}
					/>
				))}
			</div>
		</div>
	);
};

export default HomeSectorSection;
