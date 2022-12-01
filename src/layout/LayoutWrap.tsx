/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import TopScroll from '../helpers/TopScroll';

type Props = {
	Layout: React.FC<{ children: React.ReactNode | JSX.Element }>;
	Component: React.FC<any>;
};

const LayoutWrap = ({ Component, Layout }: Props) => {
	return (
		<Layout>
			<>
				<TopScroll />
				<Component />
			</>
		</Layout>
	);
};

export default LayoutWrap;
