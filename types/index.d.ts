import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type LoansPage<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactNode) => ReactNode;
};

export type LoansPageComponentProps = AppProps & {
	Component: LoansPage;
};