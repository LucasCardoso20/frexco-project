import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loading } from '../../Components'
import { useProductsContext } from '../../context/products_context'

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const fetchingSingleProduct = async () => {
    try {
      setLoading(true)
      const data = await fetch(`/api/fruit/${id}`)
      const resp = await data.json()
      setSingleProduct(resp)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    <Loading />
  }

  useEffect(() => {
    fetchingSingleProduct()
  }, [id])

  const { name, family } = singleProduct

  return (
    <section className="product-details">
      <div className="product-details-container">
        <div className="btn-container">
          <Link to={'/'}>
            <button className='btn-big' >Go shopping</button>
          </Link>
        </div>
        <div className="nutritions-container">
          <ul>
            <li><span>name:</span><h5>{name}</h5></li>
            <li><span>family:</span><h5>{family}</h5></li>
          </ul>
          <table className="zui-table" >
            {singleProduct.nutritions && Object.entries(singleProduct.nutritions).map(([key, item]) => (
              <>
                <thead key={key}>
                  <tr>
                    <th>{key}</th>
                  </tr>
                </thead>

                <tbody >
                  <tr>
                    <td>{item}</td>
                  </tr>
                </tbody>
              </>

            ))}
          </table>

        </div>

      </div>
    </section>
  )
}

export default SingleProduct