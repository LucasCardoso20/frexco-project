import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'

const SingleFruit = ({ fruit }) => {
  const { addToCart, amount } = useCartContext()
  const { genus, family, id, name, nutritions, order, } = fruit

  return (
    <article className="card-container">
      <div class="happy-card">
        <h2>{name}</h2>
        <ul>
          <li><span>Family:</span> {family}</li>

          <li><span>genus:</span> {genus}</li>

          <li><span>order:</span> {order}</li>
        </ul>
        <div className="btn-container">
          <button className='add-btn btn' onClick={() => addToCart(id, amount, fruit)}>Add to cart</button>
          <Link to={`/singleProduct/${id}`}>
            <button className='btn-details'>Fruit details</button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default SingleFruit