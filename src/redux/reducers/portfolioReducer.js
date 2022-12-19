function portfolioReducer(
    state = {
        value: [
            {
                key: 0,
                name: "Investment History",
                description: "This is my investment history."
            }
        ]
    },
    action
) {
    return state
}

export default portfolioReducer
