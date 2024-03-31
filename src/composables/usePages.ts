import axios from "axios";
const url = 'https://api.hafiz.dev/wp-json/wp/v2/pages/?slug='

export const usePages = () => {
    const api = {
        getPageBySlug: async (slug: string) => { // Define return type as Promise<ServiceType[]>
            const { data } = await axios(url + slug);
            if (data.length > 0) return data[0]
        }
    }

    return {
        api
    }
}