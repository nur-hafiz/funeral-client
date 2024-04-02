export type Page = {
    id: number;
    date: string;
    modified: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    author: number;
    featured_media: number;
    acf: {
        page_title: string;
        page_sub_title: string;
        call_to_action_title: string;
        call_to_action_sub_title: string;
        call_to_action_button_label: string;
        call_to_action_link: number;
    }
};
