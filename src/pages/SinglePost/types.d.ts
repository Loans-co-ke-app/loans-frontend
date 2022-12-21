import { IPostEntity } from '../../interfaces/Post';

export type SinglePostResponse = {
	slug: string;
	data: IPostEntity;
};

export type Platform =
	| 'facebook'
	| 'twitter'
	| 'google'
	| 'linkedin'
	| 'whatsapp'
	| 'email';
