import type { Page } from './Page'

export type Contact = Page & {
  acf: {
    contact_number: string,
    email: string,
  }
}