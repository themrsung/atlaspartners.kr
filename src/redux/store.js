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

export const addUser = async function (payload) {
    store.dispatch({
        type: "users/added",
        payload: payload
    })

    await fetch("https://atlaspartners-kr-backend.vercel.app/user/add", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).catch((error) => {
        window.alert(error)
        return
    })
}

export const removeUser = function (payload) {
    store.dispatch({
        type: "users/removed",
        payload: payload
    })
}
