const pagination = (products) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(products.length / itemsPerPage)

    const newProducts = Array.from({length: numberOfPages}, (_, index)=> {
        const start = index * itemsPerPage
        return products.slice(start, start + itemsPerPage)
    })

    return newProducts
}

export default pagination