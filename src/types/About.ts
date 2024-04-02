import type { Page } from './Page'

export type About = Page & {
  acf: {
    founding_header: string,
    founder_name: string,
    founder_image: number,
    founding_excerpt: string,
    team_section_title: string,
    team_image: number,
    team_description: string
  }
}