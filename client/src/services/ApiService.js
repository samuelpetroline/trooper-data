// import { Service } from 'react-services-injector';

export default class ApiService{

    constructor() {
        this.baseUrl = process.env.REACT_APP_BASE_API_URL;
    }

    async get(url){

        try {
            const response = await fetch(this.baseUrl + url, { method: 'GET', mode: 'cors'})
                .then(response => response.json());

            return response;
        }
        catch (error){
            throw Error(error);
        }

    }

    async post(url, data){

        try {
            const response = await fetch(this.baseUrl + url, { method: 'POST', body: data })
                .then(response => response.json());

            return response;
        }
        catch (error){
            throw Error(error);
        }

    }

}