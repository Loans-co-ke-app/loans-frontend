/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IPostEntity } from '../interfaces/Post';
import { Link } from 'react-router-dom';
import { PostsContext } from '../state/providers/PostsProvider';
import React from 'react';
import trimRegex from '../helpers/trimRegex';
import { useParams } from 'react-router-dom';
import { INavRoute, navLinks } from '../data/nav';

const SectorsPage = () => {
	const { state: { postsState: { posts: unfilteredPosts } } } = React.useContext(PostsContext);
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
		return setSectors(navLinks.filter((nav) => nav.name === 'Sectors')[0].children!);

	}, [sector]);
	React.useEffect(() => {
		const sect = sectors.filter((sector) => sector.name.toLowerCase() === params.sector?.toLowerCase())[0];
		const children = sect?.children ? sect.children : [];
		const ssChildren = subSectors.map((sub) => sub.name.toLowerCase());
		setSubSectors(children);
		setSubSectorNames(ssChildren);
	}, [sectors, sector]);

	React.useEffect(() => {
		const filterPostBySector = (posts: IPostEntity[], sector: string, subSector: string | undefined) => {
			const subRegex = new RegExp(/[\s_]/gm);

			const p = unfilteredPosts.filter((post) => {
				return trimRegex.trimAndReplace(post.sector_category!, subRegex, '-').toLowerCase() === params.subSector?.toLowerCase();
			});
			setFilteredPosts(p);

		};
		// console.log("Posts",ps);



		filterPostBySector(unfilteredPosts, sector!, params.subSector);

	}, [sector, params.subSector, subSectors]);


	return <div className='min-h-screen'>
		<div className='hidden md:block py-1 px-4 bg-gray-300'>
			<div className='flex gap-4 font-bold capitalize overflow-x-scroll no-scrollbar'>
				<div className='text-purple-600 font-bold text-xl'>{sector}</div>
				{subSectors.map((s) => <div key={s.name}>
					<Link to={s.path} className={`hover:bg-gray-300 px-4 cursor-pointer w-fit text-justify text-sm whitespace-nowrap ${s.name ? s.name.toLowerCase().trim().replace(/\s/g, '-') === params.subSector?.toLowerCase() && 'border-b border-black' : 'text-yellow-600'}`}>{s.name}</Link>
				</div>)}
			</div>
		</div>
		<div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 py-4'>
			{filteredPosts.length > 0 ? filteredPosts.map((post) => <div key={post.slug}>
				<div className='h-96 w-full relative'>
					<img src={post.featured_image} alt="" className='w-full h-full object-cover' />
				</div>
				<div>
					<div className='text-sm text-gray-500'>{post.sector_category}</div>
					<div className='text-lg font-bold'>{post.article_title}</div>
				</div>

			</div>) : <div>No posts found</div>}
		</div>
	</div>;
};

export default SectorsPage;