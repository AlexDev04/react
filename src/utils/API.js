import axios from 'axios'

export class Api {
    async getData (path) {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${path}`);
        return res.data;
    }
}