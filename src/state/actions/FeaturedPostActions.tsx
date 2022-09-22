import { IPostEntity } from '../../interfaces/Post';
const FeaturedArticleActions = {
    ['FEATURED_POST_LOAD_START']: {

    },
    ['FEATURED_POST_LOAD_SUCCESS']: {
        post: {} as IPostEntity
    },
    ['FEATURED_POST_LOAD_FAILURE']: {
        err: {} as any
    }
}

export type IFeaturedArticleActions = typeof FeaturedArticleActions;