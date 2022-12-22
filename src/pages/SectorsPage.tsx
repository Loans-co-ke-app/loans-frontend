/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IPostEntity } from '../interfaces/Post';
import { Link, useRouteError } from 'react-router-dom';
import { PostsContext } from '../state/providers/PostsProvider';
import React from 'react';
import trimRegex from '../helpers/trimRegex';
import { useParams } from 'react-router-dom';
import { INavRoute, navLinks } from '../data/nav';

const subRegex = new RegExp(/[\s_]/gm);

const SectorsPage = () => {
	const {
		state: {
			postsState: { posts: unfilteredPosts }
		}
	} = React.useContext(PostsContext);
	const [filteredPosts, setFilteredPosts] = React.useState<IPostEntity[]>([]);
	const params = useParams();
	const [subSectors, setSubSectors] = React.useState<INavRoute[]>([]);
	const [sector, setSector] = React.useState<string>();
	const [sectors, setSectors] = React.useState<INavRoute[]>([]);
	const [subSectorNames, setSubSectorNames] = React.useState<string[]>([]);
	React.useEffect(() => {
		return setSector(params.sector!);
	}, [params.sector]);

	React.useEffect(() => {
		return setSectors(
			navLinks.filter((nav) => nav.name === 'Sectors')[0].children!
		);
	}, [sector]);
	React.useEffect(() => {
		const sect = sectors.filter(
			(sector) =>
				sector.name.toLowerCase() === params.sector?.toLowerCase()
		)[0];
		const children = sect?.children ? sect.children : [];
		const ssChildren = subSectors.map((sub) =>
			trimRegex.trimAndReplace(sub.name.toLowerCase(), subRegex, '-')
		);
		setSubSectors(children);
		setSubSectorNames(ssChildren);
	}, [sectors, sector, params.sector, subSectors]);

	React.useEffect(() => {
		const filterPostBySector = () => {
			const p = unfilteredPosts.filter((post) => {
				return (
					trimRegex
						.trimAndReplace(post.sector_category!, subRegex, '-')
						.toLowerCase() === params.subSector?.toLowerCase()
				);
			});
			if (p.length > 0) setFilteredPosts(p);
			else if (p.length === 0) {
				const lp = unfilteredPosts.filter((post) => {
					const cat = trimRegex
						.trimAndReplace(post.sector_category!, subRegex, '-')
						.toLowerCase();

					return subSectorNames.includes(cat);
				});
				setFilteredPosts(lp);
			}
		};

		filterPostBySector();
	}, [sector, params.subSector, subSectors, subSectorNames, unfilteredPosts]);

	return (
		<div className="min-h-screen">
			<div className="hidden md:block py-1 px-4 bg-gray-300">
				<div className="flex gap-4 font-bold capitalize overflow-x-scroll no-scrollbar">
					<div className="text-purple-600 font-bold text-xl">
						{sector}
					</div>
					{subSectors.map((s) => (
						<div key={s.name}>
							<Link
								to={s.path}
								className={`hover:bg-gray-300 px-4 cursor-pointer w-fit text-justify text-sm whitespace-nowrap ${
									s.name
										? trimRegex
												.trimAndReplace(
													s.name,
													subRegex,
													'-'
												)
												.toLowerCase() ===
												params.subSector?.toLowerCase() &&
										  'border-b border-black'
										: 'text-yellow-600'
								}`}
							>
								{s.name}
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 py-4">
				{filteredPosts.length > 0 ? (
					filteredPosts.map((post) => (
						<Link to={`/blog/${post.slug}`} key={post.slug} className="group">
							<div className="h-96 w-full relative overflow-hidden">
								<img
									src={post.featured_image}
									alt=""
									className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-linear"
								/>
							</div>
							<div>
								<div className="text-sm text-gray-500">
									{post.sector_category}
								</div>
								<div className="text-lg font-bold">
									{post.article_title}
								</div>
							</div>
						</Link>
					))
				) : (
					<div>No posts found</div>
				)}
			</div>
		</div>
	);
};

const ErrorElement = () => {
	const err =useRouteError() as any;

	return (
		<div className="flex items-center text-center font-bold justify-center h-screen p-10 flex-col">
			<div>
				{/* {err.statusText */}
				{err.status}
				<code className="">
					{/* <HtmlDecoder html={err.message} /> */}
					<h2>Sorry😔 Something went wrong!</h2>
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

export default Object.assign(SectorsPage, {
	ErrorBoundary: ErrorElement,
});
