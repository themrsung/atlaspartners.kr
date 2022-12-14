function productsReducer(
    state = {
        value: [
            {
                key: 0,
                name: "Sample Product",
                description: "This is a sample product.",
                price: 10000
            }
        ]
    },
    action
) {
    switch (action.type) {
        case "products/added":
            return {
                value: [...state, action.payload]
            }
        case "products/removed":
            return {
                value: state.value.filter((item) => item !== action.payload)
            }
        default:
            return state
    }
}

export default productsReducer
