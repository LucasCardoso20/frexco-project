import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import pagination from "../pagination/pagination";

const ProductsContext = React.createContext()

export const ProductsProvider = ({children}) => {
    const [fruits, setFruits] = useState([])
    const [loading, setLoading] = useState(true)
  

    const fetchingProducts = async() => {
        setLoading(true)
        const data = await fetch('/api/fruit/all')
        const resp = await data.json()
        if(resp.length > 0){
            setFruits(pagination(resp))
            toast.success('Displaying fruits')
            console.log(resp);
        }
        setLoading(false)
    }

    useEffect(() => {
      fetchingProducts()
    }, [])
    

    return (
        <ProductsContext.Provider value={{fruits, setFruits, loading}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}