import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import postsReducer from "./reducers/posts"
import usersReducer from "./reducers/users"

export const store = configureStore({
    reducer: combineReducers([postsReducer, usersReducer])
})

export const getPostsState = () => {
    return store.getState()[0]
}
export const getUsersState = () => {
    return store.getState()[1]
}

export const addUser = function (payload) {
    store.dispatch({
        type: "users/added",
        payload: payload
    })
}

export const removeUser = function (payload) {
    store.dispatch({
        type: "users/removed",
        payload: payload
    })
}