// Todo: put in an environment variable
const host = "http://localhost:5000"

export const getNotes = () => {

    return async (dispatch) => {

        // get from DB
        const url = `${host}/api/notes/fetch`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('iNotebook-auth-token')
            }
        });
        const notes = await response.json()

        dispatch({
            type: 'get',
            payload: notes
        })
    }
}

export const addNote = (title, description, tag) => {

    return async (dispatch) => {

        // add to DB
        const url = `${host}/api/notes/add`
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('iNotebook-auth-token')
            },
            body: JSON.stringify({ title, description, tag })
        })

        dispatch({
            type: 'add',
            payload: { title, description, tag }
        })
    }
}

export const deleteNote = (id) => {

    return async (dispatch) => {

        // delete from DB
        const url = `${host}/api/notes/delete/${id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('iNotebook-auth-token')
            }
        });

        dispatch({
            type: 'delete',
            payload: id
        })
    }
}

export const updateNote = (note) => {

    return async (dispatch) => {

        // update in DB
        const { title, description, tag } = note
        const url = `${host}/api/notes/update/${note.id}`
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('iNotebook-auth-token')
            },
            body: JSON.stringify({ title, description, tag })
        });

        dispatch({
            type: 'update',
            payload: note
        })
    }
}


