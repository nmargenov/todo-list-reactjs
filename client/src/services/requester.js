async function request(method, url, data) {
    const options = {};
    if (method !== "GET") {
        options.method = method;
        if (data) {
            options.headers = {
                'Content-Type': 'application/json'
            };
            options.body = JSON.stringify(data);
        }
    }

    const response = await fetch(url, options);
    const result = await response.json();
    if(!response.ok){
        throw new Error(result.message);
    }
    return result;
}

export const get = request.bind(null,"GET");
export const post = request.bind(null,"POST");
export const del = request.bind(null,"DELETE");
export const put = request.bind(null,'PUT');
export const patch = request.bind(null,"PATCH");