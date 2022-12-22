/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import HtmlDecoder from '../helpers/HtmlDecoder';

const ErrorPage = () => {
	const err = useRouteError() as any;

	return (
		<div className="flex items-center text-center font-bold justify-center h-screen p-10 flex-col">
			<div>
				{/* {err.statusText} */}
				{/* {err.status} */}
				<code className="bg-black text-2xl">
					<HtmlDecoder html={err.message} />
				</code>
			</div>
			<p className="py-4">
				Back to{' '}
				<Link to="/" className="text-blue-500">
					Homepage
				</Link>
			</p>
		</div>
	);
};

export default ErrorPage;
