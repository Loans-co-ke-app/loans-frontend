import Head from 'next/head';
import React from 'react';

type Props = {
	title?: string;
	children: React.ReactElement;
};
const BaseLayout = ({ children, title }: Props) => {
	return (
		<React.Fragment>
			<Head>
				<title>
					{title
						? title
						: 'Loans app. A social web based platform for socio communication'}
				</title>
			</Head>

			<main className="max-w-[1440px] mx-auto bg-slate-100">
				{children}
			</main>
		</React.Fragment>
	);
};

export default BaseLayout;