const { configureStore } = require("@reduxjs/toolkit")
const { default: productsReducer } = require("./reducers/productsReducer")

let productsStore = configureStore({
    reducer: productsReducer
})

export { productsStore }
