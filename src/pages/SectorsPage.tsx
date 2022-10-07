import React from 'react';
import { useParams } from 'react-router-dom';
import { INavRoute, navLinks } from '../data/nav';

const SectorsPage = () => {
	const params = useParams();
	const [sectors, setSectors] = React.useState([]);
	const [sectorCategories, setSectorCategories] = React.useState<
		Array<INavRoute>
	>([]);
	const [categories, setCategories] = React.useState<Array<INavRoute>>([
		...navLinks
	]);
	React.useEffect(() => {
		const sectorRegex = /\/sectors\/(.*)/;
		const filteredCategories = categories.filter(
			(category) => sectorRegex.test(category.path) === true
		);
		setSectorCategories(filteredCategories);
	}, [params.slug]);
	console.log(sectorCategories,params);

	return <div>SectorsPage</div>;
};

export default SectorsPage;
