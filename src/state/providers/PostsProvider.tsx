import { IPostActions } from '../actions/PostActions';
import { IPostEntity } from '../../interfaces/Post';
import React from 'react';

interface IInitialState {
	postsState: {
		posts: IPostEntity[];
		loading: boolean;
		failure: boolean;
	};
}
const initialState: IInitialState = {
	postsState: {
		posts: [],
		loading: true,
		failure: false
	}
};

type IMapper<T> = {
	[K in keyof T]: K extends undefined ? K : T[K];
};

type PostActionTypes = keyof IPostActions;

const postsReducer = (
	state: IInitialState,
	action: IMapper<{
		type: PostActionTypes;
		payload: IMapper<IPostActions>[keyof IMapper<IPostActions>];
	}>
): IInitialState => {
	switch (action.type) {
		case 'POST_LOAD_START':
			return {
				...state,
				postsState: {
					failure: false,
					loading: true,
					posts: []
				}
			};
		case 'POST_LOAD_SUCCESS':
			return {
				...state,
				postsState: {
					failure: false,
					posts: [...(action.payload as IPostEntity[])],
					loading: false
				}
			};
		case 'LOAD_POST_FAILURE':
			return {
				...state,
				postsState: {
					failure: true,
					posts: [],
					loading: false
				}
			};
		default:
			return state;
	}
};

const PostsContext = React.createContext<{
	state: IInitialState;
	dispatch: React.Dispatch<
		IMapper<{
			type: PostActionTypes;
			payload: IMapper<IPostActions>[keyof IMapper<IPostActions>];
		}>
	>;
}>({ state: initialState, dispatch: () => null });

const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = React.useReducer(postsReducer, initialState);

	return (
		<PostsContext.Provider value={{ state, dispatch }}>
			{children}
		</PostsContext.Provider>
	);
};

export { PostsContext, AppProvider };
