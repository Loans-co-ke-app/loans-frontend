import { IPostEntity } from '../../interfaces/Post';
const PostActions = {
    ['POST_LOAD_START']: {

    },
    ['POST_LOAD_SUCCESS']: {
        posts: Array<IPostEntity>
    },
    ['LOAD_POST_FAILURE']: {
        err: {} as any
    }
}

export type IPostActions = typeof PostActions;