import { IPostEntity } from '../../interfaces/Post';

export const FeaturedArticleActions = {
	['FEATURED_POST_LOAD_START']: {},
	['FEATURED_POST_LOAD_SUCCESS']: {
		post: {} as IPostEntity
	},
	['FEATURED_POST_LOAD_FAILURE']: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		err: {} as unknown as any
	}
};

export type IFeaturedArticleActions = typeof FeaturedArticleActions;
