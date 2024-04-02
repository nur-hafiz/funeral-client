import axios from "axios";
const url = 'https://api.hafiz.dev/wp-json/wp/v2/media/'
import type { Media } from '@/types/Media.ts'

export const useMedias = () => {
    const api = {
        getMediaByID: async(id: number): Promise<Media> => {
            const { data } = await axios(url + id)
            return data
        }
    }

    return {
        api
    }
}