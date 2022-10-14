import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import Sidebar from './Sidebar';
import Tnav from './Tnav';
import { navLinks } from '../data/nav';
import {
	faBars,
	faChevronDown,
	faSearch
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<>
			<Tnav />
			<div className="w-full shadow-[0px_2px_5px_-3px_rgba(0,0,0,0.31)] z-[1000] bg-orange-600 sticky top-0">
				<div className="flex items-center gap-2 justify-between  py-4 px-2 sticky top-0 max-w-7xl w-full mx-auto">
					<Sidebar
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						isHovered={isHovered}
						setIsHovered={setIsHovered}
					/>
					<div>
						<div className="flex gap-4">
							<FontAwesomeIcon
								icon={faBars}
								className="cursor-pointer"
								onClick={() => setIsOpen(!isOpen)}
								color="white"
							/>
							<FontAwesomeIcon
								icon={faSearch}
								className="hidden md:block text-white"
							/>
						</div>
					</div>
					<div className="flex md:hidden items-center">
						<h2 className="text-3xl text-white uppercase">
							Loans.co.ke
						</h2>
					</div>
					<div className="hidden md:flex justify-between gap-5 items-center">
						{navLinks.map((link) =>
							link.hasChildren ? (
								<div className="relative group" key={link.name}>
									<div className="flex items-center gap-2">
										<button className="text-white font-bold">
											{link.name}
										</button>
										<FontAwesomeIcon
											icon={faChevronDown}
											size={'1x'}
											className="text-[12px]"
											color="white"
										/>
									</div>
									<div className="absolute top-5 left-0 bg-white border-orange-600 border w-48 rounded-md shadow-md hidden group-hover:block">
										<div className="flex flex-col gap-2 py-2">
											{link.children?.map((child) => (
												<Link
													key={child.name}
													to={child.path}
													className="hover:bg-gray-200 px-2 cursor-pointer"
												>
													{child.name}
												</Link>
											))}
										</div>
									</div>
								</div>
							) : (
								<div
									key={link.name}
									className="hidden md:block font-bold text-white"
								>
									<Link
										to={link.path}
										className=" hover:text-gray-300"
									>
										{link.name}
									</Link>
								</div>
							)
						)}
					</div>
					<div className="flex items-center justify-between gap-2">
						<button className="hidden md:block py-1 px-4 bg-black text-white text-[.85rem] rounded-md">
							Subscribe
						</button>
						<button className="text-white font-bold">
							Sign in
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
