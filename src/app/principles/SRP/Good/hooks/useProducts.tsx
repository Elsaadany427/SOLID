import { useEffect, useState } from "react";
import axios from "axios";

export function useProduct(): any {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        if(response && response.data) setProducts(response.data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return { products };
}
