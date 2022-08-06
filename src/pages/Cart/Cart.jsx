import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'
import { AiFillCloseCircle, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart = () => {
    const { cart, removeProduct, clearCart, handleAmount } = useCartContext()

    const inc = (id, value) => {
        handleAmount(id, value)
    }

    const dec = (id, value) => {
        handleAmount(id, value)
    }

    return (
        <section className='cart'>
            <ToastContainer />
            <div className="cart-container">
                <hr />
                <div className="title-container">
                    <h1>My Cart</h1>
                    <Link to={'/'}>
                        <button className="btn">continue shopping</button>
                    </Link>
                </div>
                <hr />

                {!cart.length && <h1>No products in the cart</h1>}

                <div className="cart-products-container">
                    {cart.map((product) => (
                        <div className="product-container" key={product.id}>
                            <div className="product-details-container">
                                <span>{product.family}</span>
                                <h2>{product.name}</h2>

                                <div className="quantity-container">
                                    <button type="button" onClick={() => dec(product.id, 'dec')}>
                                        <AiOutlineMinus />
                                    </button>

                                    <h2>{product.amount}</h2>

                                    <button type="button" onClick={() => inc(product.id, 'inc')}>
                                        <AiOutlinePlus />
                                    </button>
                                </div>
                            </div>

                            <div className="delete-product-container">
                                <AiFillCloseCircle onClick={() => removeProduct(product.id)} />
                            </div>
                        </div>
                    ))}
                    <div className="clear-cart-btn-container">
                        {cart.length ? <button className='btn-big' onClick={clearCart}>Clear cart</button> : (
                            <Link to={'/'}>
                                <button className='btn-big' >Go shopping</button>
                            </Link>
                        )}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cart