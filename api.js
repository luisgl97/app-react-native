// const API = 'https://7xjrtq0o9b.execute-api.us-west-2.amazonaws.com/tests';
const API = 'https://5u8y9belt4.execute-api.us-west-2.amazonaws.com/aprendiz';

export const getAprendices = async () => {
    try {
        const res = await fetch(API);
        const data = await res.json();
        const {body} = data;
        const {element} = body;
        return await element;
        // console.log(data.body.aprendiz);
    } catch (error) {
        console.log(error)
    }
}

export const getAprendiz = async (id) => {
    try {
        
        const res = await fetch(`${API}/${id}`);
        const data = await res.json();
        // console.log("dataaaaaaaaaaaa",data);
        const {body} = data;
        return await body;
        
    } catch (error) {
        console.log(error)
    }
}

export const saveAprendiz= async (newAprendiz) => {
    try {
        const res = await fetch(API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAprendiz)
        });
        const data = await res.json();
        const {body} = data;
        const {element} = body;
        return await element;
        // console.log(data.body.aprendiz);
    } catch (error) {
        console.log(error)
    }
}

export const deleteAprendiz = async (id) => {
    try {
        const res = await fetch(`${API}/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        const {body} = data;
        const {element} = body;
        return await element;
        // console.log(data.body.aprendiz);
    } catch (error) {
        console.log(error)
    }
}

export const updateAprendiz= async (id, newAprendiz) => {
    try {
        const res = await fetch(`${API}/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAprendiz)
        });
        const data = await res.json();
        const {body} = data;
        console.log(data);
        return await body;
        // console.log(data.body.aprendiz);
    } catch (error) {
        console.log(error)
    }
}