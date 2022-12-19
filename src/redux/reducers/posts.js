const postsReducer = function (
    state = [
        {
            id: 0,
            title: "Title",
            content: "Content",
            authorId: ""
        }
    ],
    action
) {
    switch (action.type) {
        case "posts/added":
            return [...state, action.payload]

        case "posts/removed":
            return state.filter((post) => post.id !== action.payload.id)
        default:
            return state
    }
}

export default postsReducer
