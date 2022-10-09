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
			// console.log('------------------------------------------------');

			unfilteredPosts.forEach((post) => {
				// console.log({ p: trimRegex.trimAndReplace(post.article_category!.category_name!.toLowerCase(), subRegex, '-').toLowerCase(), subSector: params.subSector ? params.subSector.toLowerCase() : '',sector:params.sector });
			}
			);
			// console.log("Posts",ps);

		};


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
		<div>
		</div>
	</div>;
};

export default SectorsPage;