/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IPostEntity } from '../interfaces/Post';
import { Link } from 'react-router-dom';
import { PostsContext } from '../state/providers/PostsProvider';
import React from 'react';
import TrimRegex from '../helpers/trimRegex';
import { motion } from 'framer-motion';
import { subRegex } from '../helpers/subRegex';
import { useParams } from 'react-router-dom';
import { INavRoute, navLinks } from '../data/nav';

const LoansPage = () => {
	const { loanCategory, loanSubCategory } = useParams();
	const [loanCategoryNames, setLoanCategorynames] = React.useState<string[]>(
		[]
	);
	const [filteredPosts, setFilteredPosts] = React.useState<IPostEntity[]>([]);
	const {
		state: {
			postsState: { posts: unsortedPosts }
		}
	} = React.useContext(PostsContext);
	const [currentcategory, setCurrentCategory] = React.useState<INavRoute>(
		{} as INavRoute
	);
	const filterPosts = () => {
		const p = unsortedPosts.slice();
		if (p.length >= 1) {
			const ufp = p.filter((p) => {
				const cat = TrimRegex.trimAndReplace(
					p.article_category!.category_name!,
					subRegex,
					'-'
				).toLowerCase();
				console.log({'category':cat,loanCategoryNames});

				const valid = loanCategoryNames.includes(cat);

				return valid;
			});
			// console.log('NP-Map', ufp, p);
		}
	};
	React.useEffect(() => {
		const cat = navLinks.find(
			(n) => n.name.toLowerCase() === loanCategory?.toLowerCase()
		);
		if (cat) setCurrentCategory(cat);
		if (currentcategory.hasChildren) {
			const p = currentcategory.children?.map((n) =>
				TrimRegex.trimAndReplace(n.name, subRegex, '-').toLowerCase()
			);
			setLoanCategorynames(p!);
		}
	}, []);
	React.useEffect(() => {
		console.log('-------------------');
		
		filterPosts();
	}, [currentcategory, loanCategory, loanSubCategory,unsortedPosts]);
	const p = useParams();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 3 }}
			className="min-h-screen"
		>
			<div>
				<div className="flex gap-4 font-bold capitalize overflow-x-scroll no-scrollbar">
					<div className="text-purple-600 font-bold text-xl">
						{currentcategory.name}
					</div>
					{currentcategory.children &&
						currentcategory.children!.map((s) => (
							<div key={s.name}>
								<Link
									to={s.path}
									className={`hover:bg-gray-300 px-4 cursor-pointer w-fit text-justify text-sm whitespace-nowrap ${
										s.name
											? TrimRegex.trimAndReplace(
												s.name,
												subRegex,
												'-'
											).toLowerCase() ===
													loanSubCategory?.toLowerCase() &&
											'border-b border-black'
											: 'text-yellow-600'
									}`}
								>
									{s.name}
								</Link>
							</div>
						))}
				</div>
				{/* {categories.map((item) => {
					return <div key={item.name}>{item.name}</div>;
				})} */}
			</div>
		</motion.div>
	);
};

export default LoansPage;
