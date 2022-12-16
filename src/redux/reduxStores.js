import nextProductIdReducer from "./reducers/nextProductIdReducer"

const { configureStore } = require("@reduxjs/toolkit")
const { default: productsReducer } = require("./reducers/productsReducer")

let productsStore = configureStore({
    reducer: productsReducer
})

let nextProductIdStore = configureStore({
    reducer: nextProductIdReducer
})

export { productsStore, nextProductIdStore }
