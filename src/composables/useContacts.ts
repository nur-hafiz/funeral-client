import type { Contact } from "@/types/Contact";
import { reactive } from "vue";
import { usePages } from './usePages'

export const useContacts = () => {
    const api = {
        getContactInformation: async () => {
            const data: Contact = await usePages().api.getPageBySlug('contact')
            Object.assign(contactInformation, data.acf)
        },
    }

    const format = {
        whatsapp: (str: string) => {
            return str.replace(/[+()\s-]/g, ''); 
        }
    }

    const contactInformation = reactive({}) as Contact['acf']

    return {
        api,
        contactInformation,
        format
    }
}