
const APIU = `https://strapi-ecommerce.herokuapp.com/auth/local`;
const APISTRAPI = 'https://strapi-ecommerce.herokuapp.com/orders';

export const getOrders = async (jwt) => {
    try {
        
        const res = await fetch(APISTRAPI, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${jwt}`,
            },
        });

        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}


export const inicioSesion= async (usuario) => {
    try {
        const res = await fetch(APIU, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });
        const data = await res.json();
        return data;
        // console.log(data.body.aprendiz);
    } catch (error) {
        console.log(error)
    }
}

export const getOrder= async (jwt, id) => {
    try {
    
        const res = await fetch(`${APISTRAPI}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${jwt}`,
            },
        });

        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}