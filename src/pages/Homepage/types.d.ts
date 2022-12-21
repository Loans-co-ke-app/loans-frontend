import { IPostEntity } from '../../interfaces/Post';

export type HomepageResponse = {
	articles: IPostEntity[] | undefined;
	featuredArticle: IPostEntity | undefined;
	sponsoredArticle: IPostEntity | undefined;
    editorsPick: IPostEntity | undefined;
};
