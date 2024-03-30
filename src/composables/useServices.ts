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

           const { data } = await axios({
            url: url,
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify({ query })
          })
           return data;
        }
    };

    return {
        api
    };
}