import FooterMain from '../components/FooterMain';
import Header from '../components/Header';
import React from 'react';

interface IProps {
    children: JSX.Element
}

const BaseLayout = ({ children }: IProps) => {

	return (
		<div className='bg-gray-100 min-h-screen w-screen bg-opacity-50 flex flex-col items-center'>
			<Header />
			<div className='h-full max-w-7xl w-full px-4'>
				{children}
			</div>
			<FooterMain />
		</div>
	);
};

export default BaseLayout;