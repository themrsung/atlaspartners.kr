const usersReducer = function (
    state = [
        {
            id: "admin",
            password: "password"
        }
    ],
    action
) {
    switch (action.type) {
        case "users/added":
            return [...state, action.payload]

        case "users/removed":
            return state.filter((user) => user.id !== action.payload.id)

        default:
            return state
    }
}

export default usersReducer
