import { IPostEntity } from '../../interfaces/Post';

export const PostActions = {
	['POST_LOAD_START']: {},
	['POST_LOAD_SUCCESS']: {
		posts: Array<IPostEntity>
	},
	['LOAD_POST_FAILURE']: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		err: {} as unknown as any
	}
};

export type IPostActions = typeof PostActions;
