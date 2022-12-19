import nextProductIdReducer from "./reducers/nextProductIdReducer"
import portfolioReducer from "./reducers/portfolioReducer"

const { configureStore } = require("@reduxjs/toolkit")
const { default: productsReducer } = require("./reducers/productsReducer")

let productsStore = configureStore({
    reducer: productsReducer
})

let nextProductIdStore = configureStore({
    reducer: nextProductIdReducer
})

let portfolioStore = configureStore({
    reducer: portfolioReducer
})

export { productsStore, nextProductIdStore, portfolioStore }
