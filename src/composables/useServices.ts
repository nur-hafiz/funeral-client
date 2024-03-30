import axios from "axios";
const url = 'https://api.hafiz.dev/graphql/';

export const useServices = () => {
    const api = {
        getAll: async () => {
            const query = `
            query {
                 services {
                     nodes {
                         title
                         serviceOptions {
                             description
                             price
                             requires {
                                 nodes {
                                     id
                                     slug
                                 }
                             }
                         }
                     }
                 }
            }`;

           const { data } = await axios.post(url, {
            headers: {
                'Content-Type': 'application/json'
              },
               query: JSON.stringify(query)
           });
           return data;
        }
    };

    return {
        api
    };
}