import React from "react";
import { IPostEntity } from "../../interfaces/Post";



interface IStateProps {
    posts: IPostEntity[];
    loading: boolean;
    error: null;
    page: number;
    total_pages: number;
    total_posts: number;
    search: string;
    sector: string;
    category: string;
    company: string;
    product: string;
    sort: string;
    order: string;
    limit: number;
    offset: number;
    hasMore: boolean;
}
const initialState = {
    posts: [],
    loading: false,
    error: null,
    page: 1,
    total_pages: 1,
    total_posts: 1,
    search: "",
    sector: "",
    category: "",
    company: "",
    product: "",
    sort: "",
    order: "",
    limit: 10,
    offset: 0,
    hasMore: true,
}

const Actions = {
    SET_POSTS: "SET_POSTS",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR",
    SET_PAGE: "SET_PAGE",
    SET_TOTAL_PAGES: "SET_TOTAL_PAGES",
    SET_TOTAL_POSTS: "SET_TOTAL_POSTS",
    SET_SEARCH: "SET_SEARCH",
    SET_SECTOR: "SET_SECTOR",
    SET_CATEGORY: "SET_CATEGORY",
    SET_COMPANY: "SET_COMPANY",
    SET_PRODUCT: "SET_PRODUCT",
    SET_SORT: "SET_SORT",
    SET_ORDER: "SET_ORDER",
    SET_LIMIT: "SET_LIMIT",
    SET_OFFSET: "SET_OFFSET",
    SET_HAS_MORE: "SET_HAS_MORE",
    FETCH_POSTS: "FETCH_POSTS",
    FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR",
    FETCH_POSTS_CANCEL: "FETCH_POSTS_CANCEL",
    FETCH_POSTS_RESET: "FETCH_POSTS_RESET",
}


const postsReducer = (state: IStateProps, action: any) => {
    switch (action.type) {
        case Actions.SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
        case Actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case Actions.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case Actions.SET_PAGE:
            return {
                ...state,
                page: action.payload,
            }
        case Actions.SET_TOTAL_PAGES:
            return {
                ...state,
                total_pages: action.payload,
            }
        case Actions.SET_TOTAL_POSTS:
            return {
                ...state,
                total_posts: action.payload,
            }
        case Actions.SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        case Actions.SET_SECTOR:
            return {
                ...state,
                sector: action.payload,
            }
        case Actions.SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }
        case Actions.SET_COMPANY:
            return {
                ...state,
                company: action.payload,
            }
        case Actions.SET_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }
        case Actions.SET_SORT:
            return {
                ...state,
                sort: action.payload,
            }
        case Actions.SET_ORDER:
            return {
                ...state,
                order: action.payload,
            }
        case Actions.SET_LIMIT:
            return {
                ...state,
                limit: action.payload,
            }
        case Actions.SET_OFFSET:
            return {
                ...state,
                offset: action.payload,
            }
        case Actions.SET_HAS_MORE:
            return {
                ...state,
                hasMore: action.payload,
            }
        case Actions.FETCH_POSTS:
            return {
                ...state,
                loading: true,
            }
        case Actions.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        case Actions.FETCH_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case Actions.FETCH_POSTS_CANCEL:
            return {
                ...state,
                loading: false,
            }
        case Actions.FETCH_POSTS_RESET:
            return {
                ...state,
                loading: false,
                posts: [],
                page: 1,
                total_pages: 1,
                total_posts: 1,
                search: "",
                sector: "",
                category: "",
                company: "",
                product: "",
                sort: "",
                order: "",
                limit: 10,
                offset: 0,
                hasMore: true,
            }
        default:
            return state;
    }
}

// const combinedReducer = ({ po }: any, action: any) => {
//     return {
//         postsReducer: postsReducer(po, action),
//     }
// }

const PostsContext = React.createContext<IStateProps>(initialState);

const PostsProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(postsReducer, initialState);
    return (
        <PostsContext.Provider value={state}>
            {children}
        </PostsContext.Provider>
    )
}