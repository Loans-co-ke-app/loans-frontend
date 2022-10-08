/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
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
		const sector = sectors.filter((sector) => sector.name.toLowerCase() === params.sector?.toLowerCase())[0];

		return setSubSectors(sector.children ? sector.children : []);
	}, [sectors, sector]);


	return <div className='min-h-screen'>
		<div className=' py-3 px-4 bg-gray-300'>
			<div className='flex gap-4 p-4 font-bold capitalize overflow-x-scroll'>
				<div className='text-purple-600 font-bold text-xl'>{sector}</div>
				{subSectors.map((subSector) => <div key={subSector.name}>
					<div className='hover:bg-gray-300 px-4 cursor-pointer w-fit text-justify'>{subSector.name}</div>
				</div>)}
			</div>

		</div>
		<div>

		</div>
	</div>;
};

export default SectorsPage;