/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AdLayout from '../layout/AdLayout';
import { IPostEntity } from '../interfaces/Post';
import { Link } from 'react-router-dom';
import { PostsContext } from '../state/providers/PostsProvider';
import React from 'react';
import TrimRegex from '../helpers/trimRegex';
import { motion } from 'framer-motion';
import { subRegex } from '../helpers/subRegex';
import { useParams } from 'react-router-dom';
import { INavRoute, navLinks } from '../data/nav';

type Params = {
	loanCategory: string;
	loanSubCategory: string;
};

const LoansPage = () => {
	const params = useParams<Params>() as Params;
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
				const valid = loanCategoryNames.includes(cat);

				return valid;
			});
			const fp = ufp.filter((p) => {
				const cat = TrimRegex.trimAndReplace(
					p.article_category!.category_name!,
					subRegex,
					'-'
				).toLowerCase();
				const valid = (cat === params.loanSubCategory!);

				return valid;
			});
			console.log(fp,ufp);
			
			if (fp.length >= 1) {
				setFilteredPosts(fp);
				
				return;
			}
			
			
			return setFilteredPosts(ufp);
		}
	};
	React.useEffect(() => {
		const cat = navLinks.find(
			(n) => n.name.toLowerCase() === params.loanCategory?.toLowerCase()
		);
		if (cat) setCurrentCategory(cat);
		if (currentcategory.hasChildren) {
			const p = currentcategory.children?.map((n) =>
				TrimRegex.trimAndReplace(n.name, subRegex, '-').toLowerCase()
			);
			setLoanCategorynames(p!);
		}
	}, [params.loanCategory, currentcategory, unsortedPosts]);
	React.useEffect(() => {
		filterPosts();
	}, [
		currentcategory,
		params.loanCategory,
		params.loanSubCategory,
		unsortedPosts,
		loanCategoryNames,
		unsortedPosts.length,
		params
	]);
	
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
													params.loanSubCategory?.toLowerCase() &&
											'border-b border-black'
											: 'text-yellow-600'
									}`}
								>
									{s.name}
								</Link>
							</div>
						))}
				</div>
				<AdLayout>
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
				</AdLayout>
			</div>
		</motion.div>
	);
};

export default LoansPage;
