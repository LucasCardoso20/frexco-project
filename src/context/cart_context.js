import React, { useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import reducer from '../reducers/cart_reducer'

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')

    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const initialState = {
    cart: getLocalStorage(),
    amount: 0
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, amount, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, amount, product } })
        toast.success('Product added to cart')
    }

    const removeProduct = (id) => {
        dispatch({ type: 'REMOVE_PRODUCT', payload: id })
        toast.error('Product removed from the cart')
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
        toast.error('All products removed')
    }

    const handleAmount = (id, value) => {
        dispatch({ type: 'HANDLE_AMOUNT', payload: { id, value } })
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])


    return (
        <CartContext.Provider value={{ ...state, addToCart, removeProduct, clearCart, handleAmount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}