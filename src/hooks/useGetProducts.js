import { useEffect, useState } from 'react';


const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    
    useEffect (() => {
        async function fetchAPI () {
            try { 
                let response = await fetch(API);
                response = await response.json();
                setProducts(response)
            } catch (error) {
                console.error(error);
            };   
        }
        fetchAPI()
    }, [])

    return products;
};

export default useGetProducts;