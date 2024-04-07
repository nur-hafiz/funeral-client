export type Social = {
    id: number;
    date: string;
    modified: string;
    slug: string;
    status: string;
    type: string;
    title: {
      rendered: string;
    };
    featured_media: number;
    acf: {
      link: string;
      icon: {
        id: number,
		url: string,
		alt: string,
		description: string,
		caption: string,
      }
    };
};