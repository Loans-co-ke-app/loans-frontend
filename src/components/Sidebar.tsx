/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { navLinks } from '../data/nav';
import { useLocation } from 'react-router-dom';
import { faChevronDown, faMultiply, faSearch } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isHovered?: boolean
    setIsHovered?: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ isOpen, setIsOpen, isHovered, setIsHovered }: IProps) => {
	const location = useLocation();
	React.useEffect(() => {
		if (isHovered) 
			setIsOpen(true);
        
	}, [isHovered]);

	React.useEffect(() => {
		if (!isOpen) 
            setIsHovered!(false);
        
	}, [isOpen]);
	React.useEffect(() => {
		if (location.pathname !== '/') 
			setIsOpen(false);
        
	}, [location.pathname]);

	const closeOnWindowClick = (e: MouseEvent) => {
		if (e.target instanceof HTMLElement) {
			if (e.target.closest('.sidebar')) 
				return;
            
			setIsOpen(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener('click', closeOnWindowClick);

		return () => {
			window.removeEventListener('click', closeOnWindowClick);
		};
	}, []);

	return (
		<div className={`${isOpen ? 'w-80' : 'w-0'} ${isOpen ? 'left-0' : '-left-[100%]'} h-screen fixed top-0 bg-gray-400 bg-opacity-90 overflow-y-scroll no-scrollbar p-2 left-0 flex flex-col gap-3 transition-all ease-linear duration-500 z-[1010]`}>
			<div className='flex flex-col gap-1'>
				<div className='flex justify-between gap-3'>

					<h1 className='text-3xl uppercase'>
						<Link to={'/'}>
                        Loans.co.ke
						</Link>
					</h1> <button onClick={e => {
						e.stopPropagation();
						setIsOpen(false);
					}}><FontAwesomeIcon icon={faMultiply} /></button>
				</div>
				<small className='block'>International edisiton</small>
			</div>
			<button className='py-1 px-2 bg-black w-full text-white'>Subscribe for full access</button>
			<div className='flex items-center bg-white px-1'>
				<input type="text" placeholder='Search loans.ke....' className='flex-1 focus:ring-0 focus:outline-none' /><button><FontAwesomeIcon icon={faSearch} /></button>
			</div>
			<ul className='flex flex-col gap-2'>
				{
					navLinks.map((link) => (
						link.hasChildren ? (
							<li key={link.name} className='flex flex-col gap-2'>
								<div className='hover:text-gray-900 text-gray-600 underline font-medium cursor-pointer flex justify-between items-center '>
									<span>
										{link.name}
									</span>
									<FontAwesomeIcon icon={faChevronDown} className="text-[12px]" />
								</div>
								{
									link.hasChildren && (
										<ul className='flex flex-col gap-1'>
											{
												link.children?.map((child) => (
													<li key={child.name} className='flex flex-col gap-2 py-1 px-2 hover:bg-slate-50'>
														<Link to={child.path} className='hover:text-gray-900'>{child.name}</Link>
													</li>
												))
											}
										</ul>)}
							</li>) : <li key={link.name} className='flex flex-col gap-2'>
							<Link to={link.path} className='hover:text-gray-900 hover:bg-slate-200 px-2'>{link.name}</Link>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Sidebar;