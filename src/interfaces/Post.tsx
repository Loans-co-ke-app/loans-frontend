export interface IPostEntity {
    article_body:string
    article_company?: any;
    article_product?: any;
    article_title: string;
    authors: {
      id: number;
      first_name: string;
      last_name: string;
      author_email?: string | null;
      author_description?: string;
    };
    featured: boolean;
    featured_image: string;
    publish_date: string;
    sector_category?: string;
    slug: string;
    tags?: string;
  }