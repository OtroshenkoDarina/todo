import axios from 'axios'

export default class Base {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com'
    }

    getUrl(url) {
        return `${this.baseUrl}/${url}`
    }

    get(url, config) {
        return axios.get(this.getUrl(url), config)
            .then(res => res.data)
            .catch(err => {
                console.warn(err)
                return null
            })
    }
}