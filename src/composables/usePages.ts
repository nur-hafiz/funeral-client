import type { Page } from "@/types/Page";
import axios from "axios";
import { reactive } from "vue";
const url = 'https://api.hafiz.dev/wp-json/wp/v2/pages/'

export const usePages = () => {
    const api = {
        getPageBySlug: async (slug: string) => {
            const { data } = await axios(url + '?slug=' + slug);
            if (data.length > 0) return data[0]
        },

        getPageByID: async (id: number): Promise<Page> => {
            const { data } = await axios(url + id);
            return data
        },

        getPageSlug: async (page: Page) => {
            return page.slug
        }
    }

    const callToAction = reactive({
        prepare: async (id: number) => {
            const page = await api.getPageByID(id)
            callToAction.slug = page.slug
        },
        
        slug: ''
    })

    return {
        api, callToAction
    }
}