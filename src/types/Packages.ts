import type { Page } from './Page'

export type Packages = Page & {}

export type Package = {
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
  services: number[];
};
