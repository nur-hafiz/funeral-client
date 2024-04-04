import axios from "axios";
const url = 'https://api.hafiz.dev/wp-json/wp/v2/service/'
import type { Service } from '@/types/Services.ts'

export const useServices = () => {
    const api = {
        getAll: async (): Promise<Service[]> => {
            const { data } = await axios(url);
            return data;
        },

        getServiceByID: async (id: number): Promise<Service> => {
            const { data } = await axios(url + id);
            return data;
        }
    }

    return {
        api
    }
}