import React from 'react';
import { FeaturedPostContext } from '../state/providers/FeaturedPostprovider';
import { PostsContext } from '../state/providers/PostsProvider';

const useAppState = () => {
	const { dispatch: articlesDispatch, state: articlesState } =
		React.useContext(PostsContext);
	const { dispatch: featuredPostDispatch, state: featuredArticleState } =
		React.useContext(FeaturedPostContext);
        
	return {
		articlesDispatch,
		articlesState,
		featuredPostDispatch,
		featuredArticleState
	};
};

export default useAppState;
