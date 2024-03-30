import axios from "axios";
const url = 'https://api.hafiz.dev/wp-json/wp/v2/service'

export const useServices = () => {
    const api = {
        getAll: async () => {
           const { data } = await axios(url)
           return data
        }
    }

    return {
        api
    }
}