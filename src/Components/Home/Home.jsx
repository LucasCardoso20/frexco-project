import React from 'react'
import { useProductsContext } from '../../context/products_context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FruitList } from '../index'

const Home = () => {
    const { loading } = useProductsContext()

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <main>
            <ToastContainer />
            <FruitList />
        </main>
    )
}

export default Home