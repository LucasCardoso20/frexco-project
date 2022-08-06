import React, { useState, useEffect } from 'react'
import { useProductsContext } from '../../context/products_context'
import { SingleFruit, Pagination } from '../index'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'

const FruitList = () => {
    const { fruits, loading } = useProductsContext()
    const [page, setPage] = useState(0)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(fruits[page])
    }, [loading, page])

    const nextPage = () => {
        if (page >= fruits.length - 1) {
            return setPage(0)
        }else{
            return setPage((old)=> old + 1)
        }
    }

    const prevPage = () => {
        setPage((old)=> {
            let prev = old - 1
            if(prev < 0){
                return prev = fruits.length - 1
            }
            return prev
        })
    }

    return (
        <section id='fruit-list'>
            <div className="products-grid">
                {
                    products.map((item) => (
                        <SingleFruit fruit={item} key={item.id} />
                    ))
                }
            </div>

            <ul className="page">
                <BsFillArrowLeftCircleFill onClick={prevPage}/>
                {fruits.map((item, index) => (
                    <li key={index} className={`${page === index ? 'page__numbers active-btn' : 'page__numbers'}`} onClick={() => setPage(index)}> {index + 1}</li>
                ))}
                <BsFillArrowRightCircleFill onClick={nextPage}/>
            </ul>
        </section>
    )
}

export default FruitList