import axios from "axios";
const url = 'https://api.hafiz.dev/wp-json/wp/v2/social/'
import type { Social } from '@/types/Social.ts'
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useSocials = () => {
    const socials: Ref<Social[]> = ref([])

    const api = {
        getAll: async () => {
            const { data } = await axios(url);
            socials.value = data
        },
    }

    const icon = (name: string) => {
        return 'pi pi-' + name.toLowerCase()
    }

    return {
        api,
        socials,
        icon
    }
}