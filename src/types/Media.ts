export type Media = {
    id: number;
    date: string;
    guid: {
      rendered: string;
    };
    modified: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    description: {
      rendered: string;
    };
    caption: {
      rendered: string;
    };
    alt_text: string;
    media_type: string;
    media_details: {
      width: number;
      height: number;
      file: string;
      filesize: number;
      sizes: Record<string, unknown>;
    };
    source_url: string;
  };