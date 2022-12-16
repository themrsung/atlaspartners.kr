function nextProductIdReducer(
    state = {
        value: 10
    },
    action
) {
    switch (action.type) {
        case "nextProductId/incremented":
            return { value: state.value + 1 }
        default:
            return state
    }
}

export default nextProductIdReducer
