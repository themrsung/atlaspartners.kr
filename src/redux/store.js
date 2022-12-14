import { configureStore } from "@reduxjs/toolkit"
import axios from "axios"
import { combineReducers } from "redux"
import postsReducer from "./reducers/posts"
import usersReducer from "./reducers/users"

export const store = configureStore({
    reducer: combineReducers([postsReducer, usersReducer])
})

export const getPostsState = async () => {
    const { posts } = await axios.get("http://localhost:3001/posts")
    return posts
}

export const getUsersState = () => {
    return store.getState()[1]
}

export const addUser = async function (payload) {
    store.dispatch({
        type: "users/added",
        payload: payload
    })

    // await fetch("http://backend.atlaspartners.kr/user", {
    //     method: "POST",
    //     mode: "no-cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Headers": "*"
    //     },
    //     body: JSON.stringify(payload)
    // }).catch((error) => {
    //     window.alert(error)
    //     return
    // })
}

export const removeUser = function (payload) {
    store.dispatch({
        type: "users/removed",
        payload: payload
    })
}
