const notesReducer = (state = [], action) => {
    
    switch (action.type) {

        case "get":
            return action.payload

        case "add":
            return state.concat(action.payload)

        case "delete":
            return state.filter(note => note._id !== action.payload)

        case "update":
            state.forEach(note => {
                if (note._id === action.payload.id) {
                    note.title = action.payload.title
                    note.description = action.payload.description
                    note.tag = action.payload.tag
                }
            })
            return state

        default:
            return state
    }
}

export default notesReducer