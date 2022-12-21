/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPostEntity {
	article_body: string;
	article_company?: any;
	article_product?: any;
	article_title: string;
	excerpt: string;
	featured: boolean;
	is_sponsored: boolean;
	is_editors_pick: boolean;
	article_category?: {
		category_description: string;
		category_name: string;
		id: string | number;
	};
	authors: {
		id: number;
		first_name: string;
		last_name: string;
		author_avatar: string;
		author_email: string;
		author_description: string;
		linkedin_url: string;
		facebook_url: string;
	};
	featured_image: string;
	publish_date: string;
	sector_category?: string;
	slug: string;
	tags?: string;
}
