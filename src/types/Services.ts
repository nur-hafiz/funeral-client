export type Service = {
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
      description: string;
      price: string;
      requires: RequiredServices[];
    };
};

type RequiredServices = {
    ID: number;
    post_title: string;
    post_name: string;
    post_status: string;
}