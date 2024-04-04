import axios from "axios";
const url = 'https://api.hafiz.dev/wp-json/wp/v2/package/'
import type { Package } from '@/types/Packages.ts'

export const usePackages = () => {
    const api = {
        getAll: async (): Promise<Package[]> => { // Define return type as Promise<ServiceType[]>
            const { data } = await axios(url);
            return data;
        },

        getPackageByID: async (id: number): Promise<Package> => {
            const { data } = await axios(url + id)
            return data;
        }
    }

    return {
        api
    }
}