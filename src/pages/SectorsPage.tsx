/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { INavRoute, navLinks } from '../data/nav';

const SectorsPage = () => {
	const params = useParams();
	const [subSectors, setSubSectors] = React.useState<INavRoute[]>([]);
	const [sector, setSector] = React.useState<string>();
	const [sectors, setSectors] = React.useState<INavRoute[]>([]);
	React.useEffect(() => {
		return setSector(params.sector!);

	}, [params.sector]);

	React.useEffect(() => {
		return setSectors(navLinks.filter((nav) => nav.name === 'Sectors')[0].children!);

	}, [sector]);
	React.useEffect(() => {
		const sect = sectors.filter((sector) => sector.name.toLowerCase() === params.sector?.toLowerCase())[0];
		const children = sect?.children ? sect.children : [];

		return setSubSectors(children);
	}, [sectors, sector]);

	return <div className='min-h-screen'>
		<div className='hidden md:block py-1 px-4 bg-gray-300'>
			<div className='flex gap-4 font-bold capitalize overflow-x-scroll no-scrollbar'>
				<div className='text-purple-600 font-bold text-xl'>{sector}</div>
				{subSectors.map((s) => <div key={s.name}>
					<Link to={s.path} className={`hover:bg-gray-300 px-4 cursor-pointer w-fit text-justify text-sm whitespace-nowrap ${s.name ? s.name.toLowerCase().trim().replace(/\s/g,'-') === params.subSector?.toLowerCase() && 'border-b border-black' : 'text-yellow-600'}`}>{s.name}</Link>
				</div>)}
			</div>
		</div>
		<div>
		</div>
	</div>;
};

export default SectorsPage;