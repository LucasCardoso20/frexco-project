const cart_reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        const { id, amount, product } = action.payload

        const matchingId = state.cart.find((item) => item.id === id)

        if (matchingId) {
            const newCart = state.cart.map((cartItem) => {
                return cartItem
            })
            return { ...state, cart: newCart }
        } else {
            const newItems = {
                id,
                amount,
                name: product.name,
                family: product.family,
                genus: product.genus,
                nutritions: product.nutritions
            }

            return { ...state, cart: [...state.cart, newItems] }
        }
    }

    if (action.type === 'REMOVE_PRODUCT') {
        const newArray = state.cart.filter((item) => item.id !== action.payload)
        return { ...state, cart: newArray }
    }

    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'HANDLE_AMOUNT') {
        const { id, value } = action.payload
        const newArray = state.cart.map((cartItem) => {
            if (cartItem.id === id) {

                if (value === 'inc') {
                    let newAmount = cartItem.amount + 1
                    return { ...cartItem, amount: newAmount }
                }

                if (value === 'dec') {
                    let newAmount = cartItem.amount - 1
                    if (cartItem.amount <= 0) {
                        let newValue = 0
                        return {...cartItem, amount: newValue}
                    }
                    return { ...cartItem, amount: newAmount }
                }
            }
            return cartItem
        })
        return { ...state, cart: newArray }
    }
}

export default cart_reducer