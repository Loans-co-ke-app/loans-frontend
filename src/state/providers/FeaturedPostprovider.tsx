import React
    from "react";
import { IPostEntity } from "../../interfaces/Post";
import { IFeaturedArticleActions } from "../actions/FeaturedPostActions";

interface IInitialState {
    postsState: {
        post: IPostEntity,
        loading: boolean,
        failure: boolean
    },


}
const initialState: IInitialState = {
    postsState: {
        post: {

        } as any,
        loading: true,
        failure: false
    }
}

type IMapper<T> = {
    [K in keyof T]: K extends undefined ? K : T[K]
}

type PostActionTypes = keyof IFeaturedArticleActions

const postsReducer = (state: IInitialState,
    action: IMapper<{
        type: PostActionTypes,
        payload: IMapper<IFeaturedArticleActions>[keyof IMapper<IFeaturedArticleActions>]
    }>
): IInitialState => {
    switch (action.type) {
        case 'FEATURED_POST_LOAD_START':
            return {
                ...state,
                postsState: {
                    failure: false,
                    loading: true,
                    post: {} as IPostEntity
                }
            }
        case 'FEATURED_POST_LOAD_SUCCESS':
            return {
                ...state,
                postsState: {
                    failure: false,
                    post: { ...action.payload as IPostEntity },
                    loading: false
                }
            }
        case 'FEATURED_POST_LOAD_FAILURE':
            return {
                ...state,
                postsState: {
                    failure: true,
                    post: {} as IPostEntity,
                    loading: false
                }
            }
        default:
            return state
    }
}

const FeaturedPostContext = React.createContext<{
    state: IInitialState, dispatch: React.Dispatch<IMapper<{
        type: PostActionTypes;
        payload: IMapper<IFeaturedArticleActions>[keyof IMapper<IFeaturedArticleActions>];
    }>>
}>({ state: initialState, dispatch: () => null })



const FeaturedPostProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(postsReducer, initialState)
    return <FeaturedPostContext.Provider value={{ state, dispatch }}>
        {children}
    </FeaturedPostContext.Provider>
}

export { FeaturedPostContext, FeaturedPostProvider }