import axios from "axios";
const url = 'https://api.hafiz.dev/wp-json/wp/v2/service'
import type { Service as ServiceType } from '@/types/Services.ts'

export const useServices = () => {
    const api = {
        getAll: async (): Promise<ServiceType[]> => { // Define return type as Promise<ServiceType[]>
            const { data } = await axios(url);
            return data;
        }
    }

    return {
        api
    }
}