export class Api {
    async get(url){

        try {
            const response = await fetch(url, { method: 'GET' })
                .then(response => response.json());

            return response;
        }
        catch (error){
            throw Error(error);
        }

    }

    async post(url, data){

        try {
            const response = await fetch(url, { method: 'POST', body: data })
                .then(response => response.json());

            return response;
        }
        catch (error){
            throw Error(error);
        }

    }
}