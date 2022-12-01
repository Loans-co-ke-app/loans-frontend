import React from 'react';
import { motion } from 'framer-motion';

import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const error = useRouteError() as any;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 3 }}
			className="flex w-full h-full flex-col gap-4 justify-center items-center text-center"
		>
			<div className="relative">
				<img src="/404.gif" alt="" className="w-96 h-96 rounded-3xl" />
			</div>
			<div className="flex flex-col gap-2 py-6">
				{/* <h1 className='text-4xl font-bold'>404</h1> */}
				<p className="text-lg font-medium">
					<strong>
						Error: {error?.status}{' '}
						{error?.statusText ? error?.statusText : 'Not Found'}
					</strong>
					<br />
					<Link to={'/'} className="font-bold text-xl text-blue-700">
						Go back to Homepage
					</Link>
				</p>
			</div>
		</motion.div>
	);
};

export default ErrorPage;
// CS-PhySci
